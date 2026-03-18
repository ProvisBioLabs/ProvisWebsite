import Navbar from "../components/Navbar";
import About from "../components/About";
import CTABanner from "../components/CTABanner";
import Footer from "../components/Footer";

export const metadata = {
  title: "About Provis Biolabs — Leading Biotechnology & Bioprocessing Experts",
  description:
    "Learn about Provis Biolabs — our journey as a global leader in bioscience, our mission to innovate for a healthier world and the core PROVIS values that drive our excellence.",
  alternates: {
    canonical: "https://provisbiolabs.com/about",
    languages: {
      'en-US': 'https://provisbiolabs.com/about',
      'en-GB': 'https://provisbiolabs.com/about',
      'en-SG': 'https://provisbiolabs.com/about',
      'en-KR': 'https://provisbiolabs.com/about',
      'en-NL': 'https://provisbiolabs.com/about',
      'en-FR': 'https://provisbiolabs.com/about',
      'en-CA': 'https://provisbiolabs.com/about',
      'x-default': 'https://provisbiolabs.com/about',
    }
  },
  openGraph: {
    title: "About Provis Biolabs — Leading Biotechnology & Bioprocessing Experts",
    description: "Learn about our journey as a global leader in bioscience, our mission and the PROVIS values that drive our excellence.",
    images: ["https://provisbiolabs.com/provis-biolabs-research-lab.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Provis Biolabs",
    description: "Global leader in bioscience: bioreagents, Bio-APIs, biosimilars and CDMO.",
    images: ["https://provisbiolabs.com/provis-biolabs-research-lab.webp"],
  },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Dr. Bala Reddy',
  jobTitle: 'Founder & Managing Director',
  worksFor: { '@type': 'Organization', name: 'Provis Biolabs', url: 'https://provisbiolabs.com', sameAs: 'https://www.linkedin.com/company/provis-biolabs-private-limited/' },
  sameAs: ['https://www.linkedin.com/in/bala-reddy-phd-4b8949b/'],
  knowsAbout: ['Biosimilars', 'Recombinant Proteins', 'Biopharmaceuticals', 'CDMO']
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://provisbiolabs.com' },
    { '@type': 'ListItem', position: 2, name: 'About', item: 'https://provisbiolabs.com/about' }
  ]
};

export default function AboutPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Navbar />
      <About />
      <CTABanner />
      <Footer />
    </main>
  );
}

