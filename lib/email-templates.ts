// ─── Branded HTML Email Templates ───────────────────────────────────
import type { ContactFormData } from "./sanitize";

const BRAND = {
  navy: "#1E3A8A",
  orange: "#F26522",
  orangeLight: "#FFF7F2",
  gray: "#64748B",
  grayLight: "#F8FAFC",
  border: "#E2E8F0",
  white: "#FFFFFF",
};

const LOGO_URL = "https://www.provisbiolabs.com/logo.webp";
const WEBSITE_URL = "https://www.provisbiolabs.com";

// ─── Shared layout wrapper ──────────────────────────────────────────
function emailWrapper(content: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Provis Biolabs</title>
</head>
<body style="margin:0; padding:0; background:${BRAND.grayLight}; font-family:'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${BRAND.grayLight}; padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background:${BRAND.white}; border-radius:16px; overflow:hidden; box-shadow:0 4px 24px rgba(30,58,138,0.08);">
          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,${BRAND.navy},#2563EB); padding:28px 32px; text-align:center;">
              <img src="${LOGO_URL}" alt="Provis Biolabs" height="40" style="height:40px;" />
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding:32px;">
              ${content}
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="background:${BRAND.grayLight}; padding:20px 32px; text-align:center; border-top:1px solid ${BRAND.border};">
              <p style="margin:0 0 4px; font-size:13px; color:${BRAND.gray};">
                &copy; ${new Date().getFullYear()} Provis Biolabs Pvt Ltd. All rights reserved.
              </p>
              <p style="margin:0; font-size:13px;">
                <a href="${WEBSITE_URL}" style="color:${BRAND.navy}; text-decoration:none;">provisbiolabs.com</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

// ─── Admin Notification Email ───────────────────────────────────────
export function adminNotificationHtml(data: ContactFormData): string {
  const row = (label: string, value: string) => `
    <tr>
      <td style="padding:10px 14px; font-weight:600; color:${BRAND.navy}; background:${BRAND.grayLight}; border:1px solid ${BRAND.border}; width:140px; font-size:14px;">${label}</td>
      <td style="padding:10px 14px; color:#334155; border:1px solid ${BRAND.border}; font-size:14px;">${value || "—"}</td>
    </tr>`;

  const content = `
    <div style="background:${BRAND.orangeLight}; border-left:4px solid ${BRAND.orange}; padding:14px 18px; border-radius:0 8px 8px 0; margin-bottom:24px;">
      <p style="margin:0; font-size:15px; font-weight:600; color:${BRAND.navy};">🔔 New Contact Form Submission</p>
      <p style="margin:4px 0 0; font-size:13px; color:${BRAND.gray};">Received on ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata", dateStyle: "long", timeStyle: "short" })}</p>
    </div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse; border-radius:8px; overflow:hidden;">
      ${row("First Name", data.firstName)}
      ${row("Last Name", data.lastName)}
      ${row("Email", `<a href="mailto:${data.email}" style="color:${BRAND.navy};">${data.email}</a>`)}
      ${row("Phone", data.phone || "—")}
      ${row("Interest", data.interest)}
    </table>
    <div style="margin-top:20px;">
      <p style="font-weight:600; color:${BRAND.navy}; font-size:14px; margin-bottom:8px;">Message:</p>
      <div style="background:${BRAND.grayLight}; border:1px solid ${BRAND.border}; border-radius:8px; padding:16px; font-size:14px; color:#334155; line-height:1.6; white-space:pre-wrap;">${data.message}</div>
    </div>
    <div style="margin-top:24px; text-align:center;">
      <a href="mailto:${data.email}" style="display:inline-block; background:${BRAND.navy}; color:${BRAND.white}; padding:10px 28px; border-radius:8px; text-decoration:none; font-weight:600; font-size:14px;">Reply to ${data.firstName}</a>
    </div>`;

  return emailWrapper(content);
}

// ─── Auto-Reply Email (to customer) ─────────────────────────────────
export function autoReplyHtml(data: ContactFormData, isUS: boolean = false): string {
  const contactEmail = isUS ? "bdusa@provisbiolabs.com" : "bd@provisbiolabs.com";

  const content = `
    <h2 style="margin:0 0 6px; font-size:22px; color:${BRAND.navy};">Thank you, ${data.firstName}!</h2>
    <p style="margin:0 0 20px; font-size:15px; color:${BRAND.gray};">We appreciate you reaching out to Provis Biolabs.</p>

    <div style="background:${BRAND.grayLight}; border:1px solid ${BRAND.border}; border-radius:12px; padding:20px 24px; margin-bottom:24px;">
      <p style="margin:0 0 12px; font-size:14px; color:#334155; line-height:1.7;">
        We have received your enquiry regarding <strong style="color:${BRAND.navy};">${data.interest}</strong> and a member of our team will review it promptly.
      </p>
      <p style="margin:0; font-size:14px; color:#334155; line-height:1.7;">
        You can expect to hear back from us within <strong style="color:${BRAND.navy};">1–2 business days</strong>. If your enquiry is urgent, feel free to reach us directly:
      </p>
    </div>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td style="padding:12px 16px; background:${BRAND.orangeLight}; border-radius:8px;">
          <p style="margin:0 0 4px; font-size:13px; font-weight:600; color:${BRAND.orange};">📧 Email</p>
          <a href="mailto:${contactEmail}" style="font-size:14px; color:${BRAND.navy}; text-decoration:none;">${contactEmail}</a>
        </td>
        <td width="12"></td>
        <td style="padding:12px 16px; background:${BRAND.orangeLight}; border-radius:8px;">
          <p style="margin:0 0 4px; font-size:13px; font-weight:600; color:${BRAND.orange};">📞 Phone (USA)</p>
          <a href="tel:+16509964951" style="font-size:14px; color:${BRAND.navy}; text-decoration:none;">+1 (650) 996-4951</a>
        </td>
      </tr>
    </table>

    <div style="margin-top:28px; text-align:center;">
      <a href="${WEBSITE_URL}" style="display:inline-block; background:linear-gradient(135deg,${BRAND.orange},#FF8C55); color:${BRAND.white}; padding:12px 32px; border-radius:10px; text-decoration:none; font-weight:700; font-size:15px;">Visit Our Website</a>
    </div>

    <p style="margin:28px 0 0; font-size:13px; color:${BRAND.gray}; text-align:center;">
      This is an automated response. Please do not reply directly to this email.
    </p>`;

  return emailWrapper(content);
}
