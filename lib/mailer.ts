// ─── Nodemailer Transport — GoDaddy SMTP (Global) ───────────────────
import nodemailer from "nodemailer";
import type { ContactFormData } from "./sanitize";
import { adminNotificationHtml, autoReplyHtml } from "./email-templates";

// Pool keeps connections alive and retries automatically.
const transporter = nodemailer.createTransport({
  host: "smtpout.secureserver.net",
  port: 465,
  secure: true,
  pool: true,          // reuse connections — reduces handshake overhead
  maxConnections: 5,
  maxMessages: 100,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  socketTimeout: 15000,   // 15s — fail fast instead of hanging forever
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
      console.info(`[Mailer] ✅ ${label} sent (attempt ${attempt})`);
      return;
    } catch (err: unknown) {
      const isLast = attempt === maxAttempts;
      console.error(
        `[Mailer] ❌ ${label} failed (attempt ${attempt}/${maxAttempts}):`,
        err instanceof Error ? err.message : err
      );
      if (isLast) throw err;
      // Exponential backoff: 1s, 2s, 4s …
      await new Promise((r) => setTimeout(r, 1000 * 2 ** (attempt - 1)));
    }
  }
}

// ── Admin notification (to your inbox) ───────────────────────────────
export async function sendAdminNotification(
  data: ContactFormData,
  isUS = false
): Promise<void> {
  const adminEmail =
    isUS
      ? process.env.US_ADMIN_EMAIL || "bdusa@provisbiolabs.com"
      : process.env.ADMIN_EMAIL   || "customersupport@provisbiolabs.com";

  const subjectPrefix = isUS ? "[US Inquiry] " : "";

  await sendWithRetry(
    () =>
      transporter.sendMail({
        from: `"Provis Biolabs" <${process.env.EMAIL_USER}>`,
        to: adminEmail,
        subject: `${subjectPrefix}New Enquiry: ${data.interest} — ${data.firstName} ${data.lastName}`,
        html: adminNotificationHtml(data, isUS),
        replyTo: data.email,
      }),
    `Admin notification → ${adminEmail}`
  );
}

// ── Auto-reply (thank-you) to the customer ────────────────────────────
export async function sendAutoReply(
  data: ContactFormData,
  isUS = false
): Promise<void> {
  await sendWithRetry(
    () =>
      transporter.sendMail({
        from: `"Provis Biolabs" <${process.env.EMAIL_USER}>`,
        to: data.email,
        subject: "Thank you for contacting Provis Biolabs",
        html: autoReplyHtml(data, isUS),
      }),
    `Auto-reply → ${data.email}`
  );
}
