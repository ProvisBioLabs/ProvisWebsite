# GoDaddy to Zoho Email Migration Guide

Moving your company emails from GoDaddy to Zoho involves several key steps, primarily centered around updating your domain's DNS records and migrating your existing email data. 

Here is a checklist of what needs to change:

## 1. Preparation & Account Setup
*   **Create Zoho Account**: Sign up for Zoho Workplace or Zoho Mail and set up your admin account.
*   **Add your Domain**: Add your company domain to the Zoho admin console.
*   **Verify Domain Ownership**: Zoho will provide a TXT or CNAME record. Add this record to your domain's DNS settings (managed in GoDaddy or your DNS provider) to prove you own the domain.

## 2. DNS Record Changes (Crucial)
You will need to log into your DNS host (usually GoDaddy) and make the following changes to route new emails to Zoho instead of GoDaddy:

### A. MX Records (Mail Exchange)
MX records direct incoming emails to your mail server. You must **delete** the old GoDaddy MX records and **add** Zoho's MX records.
*   **Delete**: Any existing MX records pointing to GoDaddy (e.g., `mail.secureserver.net`).
*   **Add**: Zoho's MX records. They generally look like this (check your Zoho console for region-specific details):
    *   Hostname: `@`, Value: `mx.zoho.com`, Priority: `10`
    *   Hostname: `@`, Value: `mx2.zoho.com`, Priority: `20`
    *   Hostname: `@`, Value: `mx3.zoho.com`, Priority: `50`

### B. SPF Record (Sender Policy Framework)
SPF helps prevent email spoofing and ensures your emails don't go to spam. You need to update your existing TXT record for SPF.
*   **Find**: The existing TXT record starting with `v=spf1`.
*   **Modify or Replace**: Change it to include Zoho.
    *   Example: `v=spf1 include:zoho.com ~all`
    *   *(Note: If your website or other services like Mailchimp also send emails on your behalf, make sure to include them in the same record, e.g., `v=spf1 include:zoho.com include:_spf.google.com ~all`).*

### C. DKIM (DomainKeys Identified Mail)
DKIM adds a digital signature to your emails, further improving deliverability.
*   Generate a DKIM key in the Zoho Admin console.
*   Add the provided TXT record to your GoDaddy DNS settings.

## 3. Data Migration (Old Emails)
To move your historical emails from GoDaddy to Zoho, you don't need to do it manually:
*   Use the **Data Migration tool** built into the Zoho Admin console.
*   Select the **IMAP** migration method.
*   You will need the IMAP server details for GoDaddy (usually `imap.secureserver.net`) and the passwords for all user accounts being migrated. Zoho will fetch the old emails in the background.

## 4. Website Code Updates (Action Required for ProvisBio)
Since you have a website (ProvisBio) with a Contact form, if your website sends emails automatically (e.g., when someone submits the `ContactContent.tsx` form), you **must update its SMTP configuration**.

*   **Find SMTP Settings**: Locate where your email sending is configured (usually in an `.env` file or API route like `app/api/contact/route.ts`).
*   **Change SMTP Host**: Switch from GoDaddy's SMTP server to Zoho's.
    *   **Host**: `smtp.zoho.com` (or `smtppro.zoho.com`)
    *   **Port**: `465` (SSL) or `587` (TLS)
*   **Update Credentials**: Use a valid Zoho email address and its password. *Note: If you have Two-Factor Authentication (2FA) enabled on the Zoho account, you must generate an "App Password" in Zoho to use in your website's code instead of your real password.*
