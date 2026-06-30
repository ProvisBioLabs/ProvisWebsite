import nodemailer from "nodemailer";
import type { ContactFormData } from "./sanitize";
import { adminNotificationHtml, autoReplyHtml } from "./email-templates";

// ─── Nodemailer Transport — US Dedicated GoDaddy SMTP ────────────
const usTransporter = nodemailer.createTransport({
  host: "smtpout.secureserver.net",
  port: 465,
  secure: true, // SSL
  auth: {
    user: process.env.US_EMAIL_USER,
    pass: process.env.US_EMAIL_PASS,
  },
});

/**
 * Send admin notification email with all form details to the US inbox.
 */
export async function sendUSAdminNotification(data: ContactFormData): Promise<void> {
  const adminEmail = process.env.US_ADMIN_EMAIL || "bdusa@provisbiolabs.com";
  const subjectPrefix = "[US Inquiry] ";

  await usTransporter.sendMail({
    from: `"Provis Biolabs USA" <${process.env.US_EMAIL_USER}>`,
    to: adminEmail,
    subject: `${subjectPrefix}New Enquiry: ${data.interest} — ${data.firstName} ${data.lastName}`,
    html: adminNotificationHtml(data, true),
    replyTo: data.email,
  });
}

/**
 * Send auto-reply (thank you) email to the customer from the US inbox.
 */
export async function sendUSAutoReply(data: ContactFormData): Promise<void> {
  await usTransporter.sendMail({
    from: `"Provis Biolabs USA" <${process.env.US_EMAIL_USER}>`,
    to: data.email,
    subject: "Thank you for contacting Provis Biolabs USA",
    html: autoReplyHtml(data, true), // pass isUS=true
  });
}
