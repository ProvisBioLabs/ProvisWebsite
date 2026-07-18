// ─── SMTP Diagnostic Endpoint — DELETE AFTER DEBUGGING ───────────────────────
// Hit: POST https://www.provisbiolabs.com/api/test-email
// Body: { "secret": "provis-debug-2026" }
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";
export const maxDuration = 60;

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => ({}));

  if (body.secret !== "provis-debug-2026") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const globalUser = process.env.EMAIL_USER?.trim();
  const globalPass = process.env.EMAIL_PASS?.trim();
  const usUser = process.env.US_EMAIL_USER?.trim();
  const usPass = process.env.US_EMAIL_PASS?.trim();

  // Show masked credential info so we can verify they're loaded correctly
  const maskPass = (p?: string) =>
    p ? `${p[0]}${"*".repeat(Math.max(0, p.length - 2))}${p[p.length - 1]} (len=${p.length})` : "MISSING";
  const maskUser = (u?: string) => u || "MISSING";

  const envInfo = {
    EMAIL_USER: maskUser(globalUser),
    EMAIL_PASS: maskPass(globalPass),
    US_EMAIL_USER: maskUser(usUser),
    US_EMAIL_PASS: maskPass(usPass),
    ADMIN_EMAIL: process.env.ADMIN_EMAIL || "NOT SET",
    US_ADMIN_EMAIL: process.env.US_ADMIN_EMAIL || "NOT SET",
  };

  // Define test configs for GoDaddy SMTP
  const smtpConfigs = [
    { host: "smtpout.secureserver.net", port: 465, secure: true,  label: "GoDaddy 465 SSL" },
    { host: "smtpout.secureserver.net", port: 587, secure: false, label: "GoDaddy 587 STARTTLS" },
    { host: "smtp.office365.com",       port: 587, secure: false, label: "MS365 587 STARTTLS" },
  ];

  // Test both accounts
  const accounts = [
    { user: globalUser, pass: globalPass, name: "GLOBAL (customersupport@)" },
    { user: usUser,     pass: usPass,     name: "US (bdusa@)" },
  ];

  const allResults: Record<string, Record<string, string>> = {};

  for (const account of accounts) {
    if (!account.user || !account.pass) {
      allResults[account.name] = { status: "SKIPPED — credentials missing" };
      continue;
    }

    const accountResults: Record<string, string> = {};

    for (const cfg of smtpConfigs) {
      const testLabel = `${cfg.label}`;
      try {
        const transporter = nodemailer.createTransport({
          host: cfg.host,
          port: cfg.port,
          secure: cfg.secure,
          auth: { user: account.user!.trim(), pass: account.pass!.trim() },
          connectionTimeout: 15_000,
          greetingTimeout: 10_000,
          socketTimeout: 20_000,
          tls: {
            rejectUnauthorized: false,
            minVersion: "TLSv1.2",
          },
        });

        // Step 1: verify connection
        await transporter.verify();
        accountResults[testLabel] = "✅ VERIFY OK";

        // Step 2: try sending
        try {
          await transporter.sendMail({
            from: `"Provis Test" <${account.user}>`,
            to: account.user, // send to self
            subject: `✅ SMTP Test — ${account.name} via ${cfg.label}`,
            text: `Test email sent successfully at ${new Date().toISOString()}`,
          });
          accountResults[testLabel] = "✅ SENT OK!";
        } catch (sendErr: unknown) {
          const msg = sendErr instanceof Error ? sendErr.message : String(sendErr);
          accountResults[testLabel] = `⚠️ VERIFY OK but SEND FAILED: ${msg}`;
        }

        transporter.close();
        // If this config worked, no need to try others for this account
        break;
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : String(err);
        accountResults[testLabel] = `❌ ${msg}`;
      }
    }

    allResults[account.name] = accountResults;
  }

  return NextResponse.json({
    envInfo,
    results: allResults,
    timestamp: new Date().toISOString(),
  });
}

