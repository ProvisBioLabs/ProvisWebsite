import Navbar from "../components/Navbar";
import SustainabilityContent from "./SustainabilityContent";
import CTABanner from "../components/CTABanner";
import Footer from "../components/Footer";

export const metadata = {
  title: "Sustainability & ESG — Provis Biolabs",
  description:
    "At Provis Biolabs, sustainability is at the core of our operations. Learn about our ESG roadmap, green chemistry principles, zero liquid discharge, and our commitment to a healthier tomorrow.",
  alternates: {
    canonical: "https://www.provisbiolabs.com/sustainability",
  },
  openGraph: {
    title: "Sustainability & ESG — Provis Biolabs",
    description: "Learn about our ESG roadmap, green chemistry, and our commitment to building a sustainable future.",
    images: ["https://www.provisbiolabs.com/science%20and%20tech/sustainable-biomanufacturing-provis-biolabs.webp"],
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.provisbiolabs.com' },
    { '@type': 'ListItem', position: 2, name: 'About', item: 'https://www.provisbiolabs.com/about' },
    { '@type': 'ListItem', position: 3, name: 'Sustainability', item: 'https://www.provisbiolabs.com/sustainability' }
  ]
};

export default function SustainabilityPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Navbar />
      <SustainabilityContent />
      <CTABanner />
      <Footer />
    </main>
  );
}
