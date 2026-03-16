import type { Metadata } from "next";
import { Outfit, DM_Sans } from "next/font/google";
import "./globals.css";
import CookieConsent from "./components/CookieConsent";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const fontBody = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://provisbiolabs.com'),
  title: "Provis Biolabs — Pioneering Bioscience for a Healthier World",
  description:
    "Provis Biolabs delivers premium bioreagents, Bio-APIs, and CDMO services to global pharmaceutical and biopharmaceutical innovators.",
  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Provis Biolabs',
    url: 'https://provisbiolabs.com',
    logo: 'https://provisbiolabs.com/logo.webp',
    description: 'Provis Biolabs delivers premium bioreagents, Bio-APIs, and CDMO services to global pharmaceutical and biopharmaceutical innovators.',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Sales and Technical Support',
      email: 'info@provisbiolabs.com',
      availableLanguage: 'English'
    }
  };

  return (
    <html lang="en">
      <head>
        {/* Pre-connect to Google Fonts CDN for faster font delivery */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body suppressHydrationWarning className={`${fontBody.variable} ${outfit.variable} font-sans antialiased text-[#475569] bg-[#FFFFFF]`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
