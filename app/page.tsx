import dynamic from "next/dynamic";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

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
