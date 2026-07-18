// ─── Nodemailer Transport — GoDaddy SMTP (US Dedicated) ──────────────
import nodemailer from "nodemailer";
import type { ContactFormData } from "./sanitize";
import { adminNotificationHtml, autoReplyHtml } from "./email-templates";

// Create a FRESH transporter per call.
// In serverless (Vercel), module-level pooled transporters go stale when the
// lambda freezes and thaws — the TCP socket is dead but nodemailer doesn't
// know, causing silent send failures. A fresh transporter = fresh TCP = reliable.
function createUSTransporter() {
  return nodemailer.createTransport({
    host: "smtpout.secureserver.net",
    port: 465,
    secure: true,
    // ❌ NO pool — pooling is the #1 cause of intermittent failures on serverless
    auth: {
      user: process.env.US_EMAIL_USER,
      pass: process.env.US_EMAIL_PASS,
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
    const transporter = createUSTransporter();

    try {
      // Verify the SMTP connection is alive before attempting to send.
      // This catches auth failures, DNS issues, and firewall blocks early.
      await transporter.verify();

      await transporter.sendMail(mailOptions);
      console.info(`[US Mailer] ✅ ${label} sent (attempt ${attempt})`);
      return;
    } catch (err: unknown) {
      const isLast = attempt === maxAttempts;
      console.error(
        `[US Mailer] ❌ ${label} failed (attempt ${attempt}/${maxAttempts}):`,
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

// ── Admin notification ────────────────────────────────────────────────
export async function sendUSAdminNotification(
  data: ContactFormData
): Promise<void> {
  const adminEmail =
    process.env.US_ADMIN_EMAIL || "bdusa@provisbiolabs.com";

  await sendWithRetry(
    {
      from: `"Provis Biolabs USA" <${process.env.US_EMAIL_USER}>`,
      to: adminEmail,
      subject: `[US Inquiry] New Enquiry: ${data.interest} — ${data.firstName} ${data.lastName}`,
      html: adminNotificationHtml(data, true),
      replyTo: data.email,
    },
    `US Admin notification → ${adminEmail}`
  );
}

// ── Auto-reply to customer ────────────────────────────────────────────
export async function sendUSAutoReply(
  data: ContactFormData
): Promise<void> {
  await sendWithRetry(
    {
      from: `"Provis Biolabs USA" <${process.env.US_EMAIL_USER}>`,
      to: data.email,
      subject: "Thank you for contacting Provis Biolabs USA",
      html: autoReplyHtml(data, true),
    },
    `US Auto-reply → ${data.email}`
  );
}

