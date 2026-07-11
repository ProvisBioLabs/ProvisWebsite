// ─── Nodemailer Transport — GoDaddy SMTP (US Dedicated) ──────────────
import nodemailer from "nodemailer";
import type { ContactFormData } from "./sanitize";
import { adminNotificationHtml, autoReplyHtml } from "./email-templates";

const usTransporter = nodemailer.createTransport({
  host: "smtpout.secureserver.net",
  port: 465,
  secure: true,
  pool: true,
  maxConnections: 5,
  maxMessages: 100,
  auth: {
    user: process.env.US_EMAIL_USER,
    pass: process.env.US_EMAIL_PASS,
  },
  socketTimeout: 15000,
  connectionTimeout: 10000,
});

// ── Retry helper ──────────────────────────────────────────────────────
async function sendWithRetry(
  mailFn: () => Promise<unknown>,
  label: string,
  maxAttempts = 3
): Promise<void> {
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      await mailFn();
      console.info(`[US Mailer] ✅ ${label} sent (attempt ${attempt})`);
      return;
    } catch (err: unknown) {
      const isLast = attempt === maxAttempts;
      console.error(
        `[US Mailer] ❌ ${label} failed (attempt ${attempt}/${maxAttempts}):`,
        err instanceof Error ? err.message : err
      );
      if (isLast) throw err;
      await new Promise((r) => setTimeout(r, 1000 * 2 ** (attempt - 1)));
    }
  }
}

// ── Admin notification ────────────────────────────────────────────────
export async function sendUSAdminNotification(
  data: ContactFormData
): Promise<void> {
  const adminEmail =
    process.env.US_ADMIN_EMAIL || "bdusa@provisbiolabs.com";

  await sendWithRetry(
    () =>
      usTransporter.sendMail({
        from: `"Provis Biolabs USA" <${process.env.US_EMAIL_USER}>`,
        to: adminEmail,
        subject: `[US Inquiry] New Enquiry: ${data.interest} — ${data.firstName} ${data.lastName}`,
        html: adminNotificationHtml(data, true),
        replyTo: data.email,
      }),
    `US Admin notification → ${adminEmail}`
  );
}

// ── Auto-reply to customer ────────────────────────────────────────────
export async function sendUSAutoReply(
  data: ContactFormData
): Promise<void> {
  await sendWithRetry(
    () =>
      usTransporter.sendMail({
        from: `"Provis Biolabs USA" <${process.env.US_EMAIL_USER}>`,
        to: data.email,
        subject: "Thank you for contacting Provis Biolabs USA",
        html: autoReplyHtml(data, true),
      }),
    `US Auto-reply → ${data.email}`
  );
}
