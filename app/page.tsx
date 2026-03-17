import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export const metadata: Metadata = {
  title: "Provis Biolabs — Premium Bioreagents, Bio-APIs & CDMO Services",
  description: "Provis Biolabs delivers WHO-GMP grade Bio-APIs, 100% animal origin-free recombinant bio-reagents, and end-to-end CDMO services to global pharma and biopharma innovators.",
  alternates: {
    canonical: "https://provisbiolabs.com",
    languages: {
      'en-US': 'https://provisbiolabs.com',
      'en-GB': 'https://provisbiolabs.com',
      'en-SG': 'https://provisbiolabs.com',
      'en-KR': 'https://provisbiolabs.com',
      'en-NL': 'https://provisbiolabs.com',
      'en-FR': 'https://provisbiolabs.com',
      'en-CA': 'https://provisbiolabs.com',
      'x-default': 'https://provisbiolabs.com',
    }
  },
  openGraph: {
    title: "Provis Biolabs — Premium Bioreagents, Bio-APIs & CDMO",
    description: "WHO-GMP grade Bio-APIs, animal origin-free recombinant proteins, and CDMO services for global pharma.",
    images: ["https://provisbiolabs.com/products-showcase.webp"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Provis Biolabs — Premium Bioreagents & CDMO",
    description: "WHO-GMP grade Bio-APIs and recombinant proteins for global pharma.",
    images: ["https://provisbiolabs.com/products-showcase.webp"],
  },
};

// ─── Lazy load below-the-fold sections ──────────────────────────────────────
// This dramatically reduces JavaScript the browser has to parse on initial load.
// Each section will be loaded only when the browser is idle or when it's near
// the viewport.
const AboutStrip = dynamic(() => import("./components/AboutStrip"), { ssr: true });
const Products = dynamic(() => import("./components/Products"), { ssr: true });
const CDMO = dynamic(() => import("./components/CDMO"), { ssr: true });
const MissionQuote = dynamic(() => import("./components/MissionQuote"), { ssr: true });
const GlobalReach = dynamic(() => import("./components/GlobalReach"), { ssr: true });
const CTABanner = dynamic(() => import("./components/CTABanner"), { ssr: true });
const Footer = dynamic(() => import("./components/Footer"), { ssr: true });

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutStrip />
      <Products />
      <CDMO />
      <MissionQuote />
      <GlobalReach />
      <CTABanner />
      <Footer />
    </main>
  );
}
