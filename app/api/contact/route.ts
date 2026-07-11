// ─── Contact Form API Route (/api/contact) ─────────────────────────
import { NextRequest, NextResponse } from "next/server";
import { validateContactForm } from "@/lib/sanitize";
import { sendAdminNotification, sendAutoReply } from "@/lib/mailer";

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
      if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        tasks.push(
          sendAdminNotification(sanitized, false).catch((err) => {
            // Retry is handled inside sendAdminNotification.
            // If all retries fail, log the full error so it's visible in prod logs.
            console.error("[Contact] ❌ Admin email PERMANENTLY failed:", {
              error: err instanceof Error ? err.message : String(err),
              name: sanitized.firstName + " " + sanitized.lastName,
              email: sanitized.email,
              interest: sanitized.interest,
            });
          }),
          sendAutoReply(sanitized, false).catch((err) => {
            console.error("[Contact] ❌ Auto-reply PERMANENTLY failed:", {
              error: err instanceof Error ? err.message : String(err),
              to: sanitized.email,
            });
          })
        );
      } else {
        console.error(
          "[Contact] 🚨 CRITICAL: EMAIL_USER or EMAIL_PASS env var is missing — NO emails will be sent!"
        );
      }

      // ── Google Sheets ────────────────────────────────────────────────
      const sheetsUrl = process.env.GOOGLE_SCRIPT_URL;
      if (sheetsUrl) {
        // AbortController gives us a hard timeout on the fetch
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 10000); // 10s max

        tasks.push(
          fetch(sheetsUrl, {
            method: "POST",
            headers: { "Content-Type": "text/plain;charset=utf-8" },
            signal: controller.signal,
            body: JSON.stringify({
              Timestamp: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
              "First Name": sanitized.firstName,
              "Last Name": sanitized.lastName,
              Email: sanitized.email,
              Phone: sanitized.phone || "",
              Interest: sanitized.interest,
              Message: sanitized.message,
              Source: "Global Website",
            }),
          })
            .then(() => {
              clearTimeout(timeout);
              console.info("[Contact] ✅ Google Sheets saved");
            })
            .catch((err) => {
              clearTimeout(timeout);
              console.error("[Contact] ❌ Google Sheets failed:", err instanceof Error ? err.message : err);
            })
        );
      } else {
        console.warn("[Contact] ⚠️ GOOGLE_SCRIPT_URL not set — skipping Sheets");
      }

      await Promise.all(tasks);
    };

    // Kick off without awaiting (Next.js keeps the lambda alive long enough)
    runBackground();

    return response;
  } catch (error) {
    console.error("[Contact] Unexpected error:", error);
    return NextResponse.json(
      { success: false, errors: ["An unexpected error occurred. Please try again."] },
      { status: 500 }
    );
  }
}
