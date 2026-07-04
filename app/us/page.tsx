import type { Metadata } from "next";
import dynamic from "next/dynamic";
import USNavbar from "./components/Navbar";
import Hero from "./components/Hero";
import CDMO from "./components/CDMO";
import USTrustSection from "./components/USTrustSection";
import GlobalReach from "./components/GlobalReach";
import CTABanner from "./components/CTABanner";
import Footer from "./components/Footer";

import USProducts from "./components/USProducts";
import USAboutStrip from "./components/USAboutStrip";

export const metadata: Metadata = {
  title: "Provis Biolabs USA | Research & GMP Grade Recombinant Bioreagents",
  description: " Provis Biolabs provides research and GMP grade recombinant proteins, enzymes, custom peptide synthesis and end-to-end CDMO services for research, diagnostics and biopharmaceutical manufacturing.",
  keywords: "recombinant bioreagents USA, FDA ready bioreagents, cGMP peptides North America, animal origin-free recombinant proteins, CDMO services USA, WHO-GMP biopharma manufacturing, Provis Biolabs US",
  openGraph: {
    title: "Provis Biolabs USA — Premium Bioreagents & CDMO Services",
    description: "FDA & cGMP ready recombinant bioreagents, peptides, and end-to-end CDMO services tailored for the US biopharma market.",
    images: ["https://www.provisbiolabs.com/products-showcase.webp"],
    type: "website",
    url: "https://www.provisbiolabs.com/us",
    siteName: "Provis Biolabs USA"
  },
  alternates: {
    canonical: "https://www.provisbiolabs.com/us"
  }
};

export default function USMarketHome() {
  return (
    <main className="relative">
      <USNavbar />
      <Hero />
      {/* <USAboutStrip /> */}
      <USProducts />
      {/* <CDMO /> */}
      {/* <USTrustSection /> */}
      {/* <GlobalReach /> */}
      <CTABanner />
      <Footer />
    </main>
  );
}
