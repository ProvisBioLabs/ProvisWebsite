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

    // 3. Send emails (admin + auto-reply) — run in parallel
    const emailPromises: Promise<void>[] = [];

    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      emailPromises.push(
        sendAdminNotification(sanitized).catch((err) => {
          console.error("[Contact] Admin email failed:", err);
        }),
        sendAutoReply(sanitized).catch((err) => {
          console.error("[Contact] Auto-reply email failed:", err);
        })
      );
    } else {
      console.warn("[Contact] EMAIL_USER/EMAIL_PASS not set — skipping emails");
    }

    // 4. Forward to Global Google Sheets (Apps Script) — non-blocking
    const sheetsUrl = process.env.GOOGLE_SCRIPT_URL;
    if (sheetsUrl) {
      emailPromises.push(
        fetch(sheetsUrl, {
          method: "POST",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
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
          .then(() => undefined)
          .catch((err) => {
            console.error("[Contact] Google Sheets save failed:", err);
          })
      );
    } else {
      console.warn("[Contact] GOOGLE_SCRIPT_URL not set — skipping Sheets");
    }

    // Wait for all background work
    await Promise.all(emailPromises);

    // 5. Return success
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[Contact] Unexpected error:", error);
    return NextResponse.json(
      { success: false, errors: ["An unexpected error occurred. Please try again."] },
      { status: 500 }
    );
  }
}
