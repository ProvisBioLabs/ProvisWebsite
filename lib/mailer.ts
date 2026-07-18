// ─── Nodemailer Transport — GoDaddy SMTP (Global) ───────────────────
import nodemailer from "nodemailer";
import type { ContactFormData } from "./sanitize";
import { adminNotificationHtml, autoReplyHtml } from "./email-templates";

// Create a FRESH transporter per call.
// In serverless (Vercel), module-level pooled transporters go stale when the
// lambda freezes and thaws — the TCP socket is dead but nodemailer doesn't
// know, causing silent send failures. A fresh transporter = fresh TCP = reliable.
function createTransporter() {
  return nodemailer.createTransport({
    host: "smtpout.secureserver.net",
    port: 465,
    secure: true,
    // ❌ NO pool — pooling is the #1 cause of intermittent failures on serverless
    auth: {
      user: (process.env.EMAIL_USER || "").trim(),
      pass: (process.env.EMAIL_PASS || "").trim(),
    },
    // GoDaddy SMTP is slow — give it generous timeouts
    connectionTimeout: 20_000,  // 20s to establish connection
    greetingTimeout: 15_000,    // 15s for SMTP greeting
    socketTimeout: 30_000,      // 30s for socket inactivity
    // GoDaddy TLS compatibility
    tls: {
      rejectUnauthorized: false, // GoDaddy certs sometimes have chain issues
      minVersion: "TLSv1.2",
    },
  });
}

// ── Retry helper ──────────────────────────────────────────────────────
async function sendWithRetry(
  mailOptions: nodemailer.SendMailOptions,
  label: string,
  maxAttempts = 3
): Promise<void> {
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    // Create a FRESH transporter for each attempt — if the previous one had
    // a broken socket, this guarantees a clean TCP connection.
    const transporter = createTransporter();

    try {
      // Verify the SMTP connection is alive before attempting to send.
      // This catches auth failures, DNS issues, and firewall blocks early.
      await transporter.verify();

      await transporter.sendMail(mailOptions);
      console.info(`[Mailer] ✅ ${label} sent (attempt ${attempt})`);
      return;
    } catch (err: unknown) {
      const isLast = attempt === maxAttempts;
      console.error(
        `[Mailer] ❌ ${label} failed (attempt ${attempt}/${maxAttempts}):`,
        err instanceof Error ? `${err.message}` : err
      );
      if (isLast) throw err;
      // Exponential backoff: 2s, 4s, 8s — gives GoDaddy time to recover
      await new Promise((r) => setTimeout(r, 2000 * 2 ** (attempt - 1)));
    } finally {
      // Always close the connection — don't leak sockets
      transporter.close();
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
    {
      from: `"Provis Biolabs" <${(process.env.EMAIL_USER || "").trim()}>`,
      to: adminEmail,
      subject: `${subjectPrefix}New Enquiry: ${data.interest} — ${data.firstName} ${data.lastName}`,
      html: adminNotificationHtml(data, isUS),
      replyTo: data.email,
    },
    `Admin notification → ${adminEmail}`
  );
}

// ── Auto-reply (thank-you) to the customer ────────────────────────────
export async function sendAutoReply(
  data: ContactFormData,
  isUS = false
): Promise<void> {
  await sendWithRetry(
    {
      from: `"Provis Biolabs" <${(process.env.EMAIL_USER || "").trim()}>`,
      to: data.email,
      subject: "Thank you for contacting Provis Biolabs",
      html: autoReplyHtml(data, isUS),
    },
    `Auto-reply → ${data.email}`
  );
}

