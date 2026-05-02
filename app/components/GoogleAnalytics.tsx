/**
 * GoogleAnalytics.tsx
 *
 * Loads the GA4 gtag.js library directly (as a fallback / supplement to GTM).
 *
 * ─── When to use this vs GTM ───────────────────────────────────────────────
 *   • If you manage GA4 + Google Ads via GTM → you do NOT need this file;
 *     the GTM container will fire both tags.
 *   • If you want a hard-coded GA4 baseline that works even if GTM is
 *     blocked / not yet configured → keep this file.
 *
 * The GA4 measurement ID is read from NEXT_PUBLIC_GA_ID in .env.local.
 *
 * Uses next/script with strategy="afterInteractive" so it doesn't block LCP.
 */

'use client';

import Script from 'next/script';

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function GoogleAnalytics() {
  if (!GA_ID || GA_ID === 'G-XXXXXXXXXX') return null;

  return (
    <>
      {/* Load the gtag library */}
      <Script
        id="ga4-loader"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />

      {/* Initialise gtag */}
      <Script
        id="ga4-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            // GA4 page view tracking
            gtag('config', '${GA_ID}', {
              page_path: window.location.pathname,
              // Uncomment the line below to enable enhanced conversions for Google Ads:
              // allow_enhanced_conversions: true,
            });
          `,
        }}
      />
    </>
  );
}
