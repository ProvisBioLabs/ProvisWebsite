// ─── US Contact Form API Route (/api/us/contact) ─────────────────────
import { NextRequest, NextResponse } from "next/server";
import { validateContactForm } from "@/lib/sanitize";
import { sendUSAdminNotification, sendUSAutoReply } from "@/lib/us-mailer";

export async function POST(request: NextRequest) {
  try {
    // 1. Parse JSON body
    const body = await request.json();

    // 2. Validate & sanitize
    const { valid, errors, sanitized } = validateContactForm(body);

    if (!valid) {
      return NextResponse.json(
        { success: false, errors },
        { status: 400 }
      );
    }

    // 3. Return success immediately — user sees green tick instantly
    const response = NextResponse.json({ success: true });

    // 4. Fire all background tasks without blocking the response
    const runBackground = async () => {
      const tasks: Promise<void>[] = [];

      // ── Emails ──────────────────────────────────────────────────────
      if (process.env.US_EMAIL_USER && process.env.US_EMAIL_PASS) {
        tasks.push(
          sendUSAdminNotification(sanitized).catch((err) => {
            console.error("[US Contact] ❌ Admin email PERMANENTLY failed:", {
              error: err instanceof Error ? err.message : String(err),
              name: sanitized.firstName + " " + sanitized.lastName,
              email: sanitized.email,
              interest: sanitized.interest,
            });
          }),
          sendUSAutoReply(sanitized).catch((err) => {
            console.error("[US Contact] ❌ Auto-reply PERMANENTLY failed:", {
              error: err instanceof Error ? err.message : String(err),
              to: sanitized.email,
            });
          })
        );
      } else {
        console.error(
          "[US Contact] 🚨 CRITICAL: US_EMAIL_USER or US_EMAIL_PASS env var is missing — NO emails will be sent!"
        );
      }

      // ── Google Sheets ────────────────────────────────────────────────
      const sheetsUrl = process.env.US_GOOGLE_SCRIPT_URL;
      if (sheetsUrl) {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 10000); // 10s max

        tasks.push(
          fetch(sheetsUrl, {
            method: "POST",
            headers: { "Content-Type": "text/plain;charset=utf-8" },
            signal: controller.signal,
            body: JSON.stringify({
              Timestamp: new Date().toLocaleString("en-US", { timeZone: "America/New_York" }),
              "First Name": sanitized.firstName,
              "Last Name": sanitized.lastName,
              Email: sanitized.email,
              Phone: sanitized.phone || "",
              Interest: sanitized.interest,
              Message: sanitized.message,
              Source: "US Website",
            }),
          })
            .then(() => {
              clearTimeout(timeout);
              console.info("[US Contact] ✅ Google Sheets saved");
            })
            .catch((err) => {
              clearTimeout(timeout);
              console.error("[US Contact] ❌ Google Sheets failed:", err instanceof Error ? err.message : err);
            })
        );
      } else {
        console.warn("[US Contact] ⚠️ US_GOOGLE_SCRIPT_URL not set — skipping Sheets");
      }

      await Promise.all(tasks);
    };

    runBackground();

    return response;
  } catch (error) {
    console.error("[US Contact] Unexpected error:", error);
    return NextResponse.json(
      { success: false, errors: ["An unexpected error occurred. Please try again."] },
      { status: 500 }
    );
  }
}
