// ─── Nodemailer Transport — GoDaddy SMTP ────────────────────────────
import nodemailer from "nodemailer";
import type { ContactFormData } from "./sanitize";
import { adminNotificationHtml, autoReplyHtml } from "./email-templates";

const transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  secure: false, // true for 465, false for 587 (TLS)
  requireTLS: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

/**
 * Send admin notification email with all form details.
 */
export async function sendAdminNotification(data: ContactFormData): Promise<void> {
  const adminEmail = process.env.ADMIN_EMAIL || "bd@provisbiolabs.com";

  await transporter.sendMail({
    from: `"Provis Biolabs" <${process.env.EMAIL_USER}>`,
    to: adminEmail,
    subject: `New Enquiry: ${data.interest} — ${data.firstName} ${data.lastName}`,
    html: adminNotificationHtml(data),
    replyTo: data.email,
  });
}

/**
 * Send auto-reply (thank you) email to the customer.
 */
export async function sendAutoReply(data: ContactFormData): Promise<void> {
  await transporter.sendMail({
    from: `"Provis Biolabs" <${process.env.EMAIL_USER}>`,
    to: data.email,
    subject: "Thank you for contacting Provis Biolabs",
    html: autoReplyHtml(data),
  });
}
