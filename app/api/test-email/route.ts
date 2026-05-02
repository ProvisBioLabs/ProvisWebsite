// ─── SMTP Test Endpoint — DELETE AFTER DEBUGGING ─────────────────────────────
// Hit: POST https://provisbiolabs.com/api/test-email
// Body: { "secret": "provis-debug-2026" }
// Returns: the exact SMTP error so you know what to fix
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => ({}));

  // Simple guard so random people can't trigger test emails
  if (body.secret !== "provis-debug-2026") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  const admin = process.env.ADMIN_EMAIL;

  if (!user || !pass) {
    return NextResponse.json({
      error: "EMAIL_USER or EMAIL_PASS env var missing on this deployment",
      user: user ? "SET" : "MISSING",
      pass: pass ? "SET" : "MISSING",
    });
  }

  // Try port 465 (SSL) first — GoDaddy standard
  const configs = [
    { host: "smtpout.secureserver.net", port: 465, secure: true,  label: "Port 465 SSL" },
    { host: "smtpout.secureserver.net", port: 587, secure: false, label: "Port 587 TLS" },
    { host: "smtp.secureserver.net",    port: 465, secure: true,  label: "Alt host 465 SSL" },
  ];

  const results: Record<string, string> = {};

  for (const cfg of configs) {
    try {
      const transporter = nodemailer.createTransport({
        host: cfg.host,
        port: cfg.port,
        secure: cfg.secure,
        auth: { user, pass },
        connectionTimeout: 8000,
        greetingTimeout: 8000,
        socketTimeout: 8000,
      });

      // Verify SMTP connection first
      await transporter.verify();

      // If verify passes, try sending
      await transporter.sendMail({
        from: `"Provis Biolabs Test" <${user}>`,
        to: admin || user,
        subject: "✅ SMTP Test — Provis Biolabs",
        text: `SMTP test succeeded via ${cfg.label}. Your email config is working.`,
      });

      results[cfg.label] = "✅ SUCCESS — email sent!";
      // Return early on first success
      return NextResponse.json({ success: true, results, workingConfig: cfg.label });

    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      results[cfg.label] = `❌ ${msg}`;
    }
  }

  return NextResponse.json({
    success: false,
    results,
    hint: "All SMTP configs failed. Check GoDaddy SMTP Auth setting and password.",
  });
}
