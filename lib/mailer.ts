// ─── Nodemailer Transport — GoDaddy SMTP ────────────────────────────
import nodemailer from "nodemailer";
import type { ContactFormData } from "./sanitize";
import { adminNotificationHtml, autoReplyHtml } from "./email-templates";
const transporter = nodemailer.createTransport({
  host: "smtpout.secureserver.net",
  port: 465,
  secure: true, // SSL
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

/**
 * Send admin notification email with all form details.
 */
export async function sendAdminNotification(data: ContactFormData, isUS: boolean = false): Promise<void> {
  const adminEmail = isUS 
    ? (process.env.US_ADMIN_EMAIL || "bdusa@provisbiolabs.com") 
    : (process.env.ADMIN_EMAIL || "bd@provisbiolabs.com");

  const subjectPrefix = isUS ? "[US Inquiry] " : "";

  await transporter.sendMail({
    from: `"Provis Biolabs" <${process.env.EMAIL_USER}>`,
    to: adminEmail,
    subject: `${subjectPrefix}New Enquiry: ${data.interest} — ${data.firstName} ${data.lastName}`,
    html: adminNotificationHtml(data, isUS),
    replyTo: data.email,
  });
}

/**
 * Send auto-reply (thank you) email to the customer.
 */
export async function sendAutoReply(data: ContactFormData, isUS: boolean = false): Promise<void> {
  await transporter.sendMail({
    from: `"Provis Biolabs" <${process.env.EMAIL_USER}>`,
    to: data.email,
    subject: "Thank you for contacting Provis Biolabs",
    html: autoReplyHtml(data, isUS),
  });
}
