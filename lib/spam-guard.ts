// ─── Server-side Spam Guard ─────────────────────────────────────────
// Three layers of protection:
// 1. Honeypot field check — bots auto-fill hidden fields
// 2. Time-based validation — rejects submissions under 3 seconds
// 3. reCAPTCHA v3 verification — Google's invisible bot scoring

export interface SpamCheckResult {
  blocked: boolean;
  reason?: string;
}

const MIN_SUBMIT_TIME_MS = 3_000; // 3 seconds minimum to fill the form

/**
 * Run all spam checks against a form submission.
 * Returns { blocked: false } for legitimate submissions.
 * Silently blocks spam (returns blocked: true) so bots don't learn.
 */
export async function checkSpam(
  body: Record<string, unknown>
): Promise<SpamCheckResult> {
  // ── Layer 1: Honeypot ─────────────────────────────────────────────
  // The field "_company_website" is hidden via CSS. Real users never see it.
  // Bots auto-fill every field, so if it has a value → spam.
  const honeypot = body._company_website;
  if (honeypot && typeof honeypot === "string" && honeypot.trim().length > 0) {
    return { blocked: true, reason: `Honeypot filled: "${honeypot}"` };
  }

  // ── Layer 2: Timestamp ────────────────────────────────────────────
  // Forms embed the load time. If submission is too fast → bot.
  const loadedAt = body._formLoadedAt;
  if (loadedAt && typeof loadedAt === "number") {
    const elapsed = Date.now() - loadedAt;
    if (elapsed < MIN_SUBMIT_TIME_MS) {
      return {
        blocked: true,
        reason: `Too fast: ${elapsed}ms (min ${MIN_SUBMIT_TIME_MS}ms)`,
      };
    }
  }

  // ── Layer 3: reCAPTCHA v3 ─────────────────────────────────────────
  const recaptchaToken = body._recaptchaToken;
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  if (secretKey && recaptchaToken && typeof recaptchaToken === "string") {
    try {
      const verifyUrl = new URL("https://www.google.com/recaptcha/api/siteverify");
      verifyUrl.searchParams.set("secret", secretKey);
      verifyUrl.searchParams.set("response", recaptchaToken);

      const res = await fetch(verifyUrl.toString(), { method: "POST" });
      const data = (await res.json()) as {
        success: boolean;
        score?: number;
        action?: string;
        "error-codes"?: string[];
      };

      if (!data.success) {
        return {
          blocked: true,
          reason: `reCAPTCHA failed: ${(data["error-codes"] || []).join(", ")}`,
        };
      }

      // Score ranges from 0.0 (likely bot) to 1.0 (likely human)
      const score = data.score ?? 0;
      if (score < 0.5) {
        return {
          blocked: true,
          reason: `reCAPTCHA score too low: ${score}`,
        };
      }

      console.info(`[SpamGuard] ✅ reCAPTCHA passed (score: ${score})`);
    } catch (err) {
      // If reCAPTCHA verification fails (network error etc.), let the submission through
      // rather than blocking legitimate users
      console.error(
        "[SpamGuard] ⚠️ reCAPTCHA verification error (allowing submission):",
        err instanceof Error ? err.message : err
      );
    }
  } else if (secretKey && !recaptchaToken) {
    // Secret key is configured but no token was sent — likely a direct API call from a bot
    console.warn("[SpamGuard] ⚠️ No reCAPTCHA token in submission (possible bot)");
    // Don't block — could be an older cached page. Log for monitoring.
  }

  return { blocked: false };
}
