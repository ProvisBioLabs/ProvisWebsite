import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SciencePageContent from "./SciencePageContent";

export const metadata: Metadata = {
    title: "Advanced Biologics Research & Development Capabilities | Provis Biolabs",
    description: "Explore the cutting-edge science at Provis Biolabs. From specialized expression systems to advanced bioprocess development, learn how our technology drives the future of biologics.",
    alternates: {
        canonical: "https://provisbiolabs.com/science",
        languages: {
            'en-US': 'https://provisbiolabs.com/science',
            'en-GB': 'https://provisbiolabs.com/science',
            'en-SG': 'https://provisbiolabs.com/science',
            'en-KR': 'https://provisbiolabs.com/science',
            'en-NL': 'https://provisbiolabs.com/science',
            'en-FR': 'https://provisbiolabs.com/science',
            'en-CA': 'https://provisbiolabs.com/science',
            'x-default': 'https://provisbiolabs.com/science',
        }
    },
    openGraph: {
        title: "Advanced Biologics R&D Capabilities | Provis Biolabs",
        description: "Cutting-edge expression systems, bioprocess development and analytical capabilities for biologics.",
        images: ["https://provisbiolabs.com/provis-biolabs-research-lab.webp"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Provis Biolabs Science & Technology",
        description: "Advanced biologics R&D: E. coli, Pichia, CHO, HEK293 expression systems.",
        images: ["https://provisbiolabs.com/provis-biolabs-research-lab.webp"],
    },
};

const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'What expression systems does Provis Biolabs use for protein production?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Provis Biolabs uses a diverse range of expression systems optimized for different molecule types, including E. coli for high-yield recombinant enzyme production, Pichia pastoris for glycoproteins, and mammalian (CHO, HEK293) systems for complex biotherapeutics requiring human-like post-translational modifications.'
            }
        },
        {
            '@type': 'Question',
            name: 'How does Provis Biolabs approach bioprocess development?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Provis Biolabs employs a QbD (Quality by Design) approach to bioprocessing, systematically optimizing upstream cell culture conditions, downstream purification steps, and formulation to maximize yield, purity, and product stability while ensuring robust, scalable commercial processes.'
            }
        },
        {
            '@type': 'Question',
            name: 'What analytical capabilities does Provis Biolabs have for protein characterization?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Provis Biolabs maintains a comprehensive suite of analytical technologies including LC-MS/MS, SDS-PAGE, SEC-MALS, DLS, ELISA, and advanced glycan profiling to fully characterize protein identity, purity, potency, stability, and post-translational modifications.'
            }
        }
    ]
};

const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://provisbiolabs.com' },
        { '@type': 'ListItem', position: 2, name: 'Science & Technology', item: 'https://provisbiolabs.com/science' }
    ]
};

export default function SciencePage() {
    return (
        <div className="min-h-screen flex flex-col pt-24 font-outfit">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            <Navbar />
            <main className="flex-grow">
                <SciencePageContent />
            </main>
            <Footer />
        </div>
    );
}
