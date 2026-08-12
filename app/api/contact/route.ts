// ─── Contact Form API Route (/api/contact) ─────────────────────────
import { NextRequest, NextResponse } from "next/server";
import { validateContactForm } from "@/lib/sanitize";
import { sendAdminNotification, sendAutoReply } from "@/lib/mailer";
import { checkSpam } from "@/lib/spam-guard";

// Force Node.js runtime so the function doesn't get killed prematurely
export const runtime = "nodejs";
// Allow enough time for SMTP retries (3 attempts × exponential backoff)
export const maxDuration = 30;

export async function POST(request: NextRequest) {
  try {
    // 1. Parse JSON body
    const body = await request.json();

    // 1.5. Spam guard — honeypot + time-based + reCAPTCHA v3
    const spamResult = await checkSpam(body);
    if (spamResult.blocked) {
      console.warn("[Contact] 🚫 Spam blocked:", spamResult.reason);
      // Return silent success so bots don't learn they were blocked
      return NextResponse.json({ success: true });
    }

    // 2. Validate & sanitize
    const { valid, errors, sanitized } = validateContactForm(body);

    if (!valid) {
      return NextResponse.json(
        { success: false, errors },
        { status: 400 }
      );
    }

    // 3. Run ALL background tasks BEFORE returning the response.
    //    Previously these were fire-and-forget (runBackground() without await),
    //    which caused the serverless lambda to exit before emails finished sending.
    const results = { adminEmail: false, autoReply: false, sheets: false };

    // ── Emails ──────────────────────────────────────────────────────
    if (process.env.EMAIL_USER?.trim() && process.env.EMAIL_PASS?.trim()) {
      const emailTasks: Promise<void>[] = [
        sendAdminNotification(sanitized, false)
          .then(() => { results.adminEmail = true; })
          .catch((err) => {
            console.error("[Contact] ❌ Admin email PERMANENTLY failed:", {
              error: err instanceof Error ? err.message : String(err),
              stack: err instanceof Error ? err.stack : undefined,
              name: sanitized.firstName + " " + sanitized.lastName,
              email: sanitized.email,
              interest: sanitized.interest,
            });
          }),
        sendAutoReply(sanitized, false)
          .then(() => { results.autoReply = true; })
          .catch((err) => {
            console.error("[Contact] ❌ Auto-reply PERMANENTLY failed:", {
              error: err instanceof Error ? err.message : String(err),
              stack: err instanceof Error ? err.stack : undefined,
              to: sanitized.email,
            });
          }),
      ];

      await Promise.all(emailTasks);
    } else {
      console.error(
        "[Contact]  CRITICAL: EMAIL_USER or EMAIL_PASS env var is missing — NO emails will be sent!"
      );
    }

    // ── Google Sheets ────────────────────────────────────────────────
    const sheetsUrl = process.env.GOOGLE_SCRIPT_URL;
    if (sheetsUrl) {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 10_000);

      try {
        await fetch(sheetsUrl, {
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
        });
        clearTimeout(timeout);
        results.sheets = true;
        console.info("[Contact] Google Sheets saved");
      } catch (err) {
        clearTimeout(timeout);
        console.error(
          "[Contact]  Google Sheets failed:",
          err instanceof Error ? err.message : err
        );
      }
    } else {
      console.warn("[Contact] ⚠️ GOOGLE_SCRIPT_URL not set — skipping Sheets");
    }

    // 4. Log a summary for every submission (visible in Vercel logs)
    console.info("[Contact] 📋 Submission processed:", {
      name: `${sanitized.firstName} ${sanitized.lastName}`,
      email: sanitized.email,
      interest: sanitized.interest,
      results,
    });

    // 5. Return success to the client
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[Contact] Unexpected error:", error);
    return NextResponse.json(
      { success: false, errors: ["An unexpected error occurred. Please try again."] },
      { status: 500 }
    );
  }
}
