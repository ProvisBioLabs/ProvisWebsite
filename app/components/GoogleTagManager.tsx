/**
 * GoogleTagManager.tsx
 *
 * Injects Google Tag Manager into the Next.js App Router layout.
 *   - <GTMScript>  → place inside <head>
 *   - <GTMNoScript> → place at the very top of <body>
 *
 * The GTM container ID is read from NEXT_PUBLIC_GTM_ID in .env.local.
 * GTM then fires GA4 and Google Ads tags from within the GTM dashboard,
 * keeping all tag logic centralised without extra code changes here.
 */

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

/** Drop this inside <head> – loads GTM asynchronously */
export function GTMScript() {
  if (!GTM_ID || GTM_ID === 'GTM-XXXXXXX') return null;

  return (
    <>
      {/* GTM dataLayer initialisation – must come before the loader script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),
                  dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `,
        }}
      />
    </>
  );
}

/** Drop this as the first child of <body> – required fallback for no-JS browsers */
export function GTMNoScript() {
  if (!GTM_ID || GTM_ID === 'GTM-XXXXXXX') return null;

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
        title="Google Tag Manager"
      />
    </noscript>
  );
}
