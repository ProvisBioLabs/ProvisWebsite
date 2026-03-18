import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BiosimilarsContent from "./BiosimilarsContent";

export const metadata: Metadata = {
    title: "Biosimilar Development & Analytical Characterization | Provis Biolabs",
    description: "End-to-End expertise in Biosimilar development. Provis Biolabs provides comprehensive services spanning the complete product lifecycle — from discovery and molecular characterization to commercial manufacturing.",
    alternates: {
        canonical: "https://provisbiolabs.com/biosimilars",
        languages: {
            'en-US': 'https://provisbiolabs.com/biosimilars',
            'en-GB': 'https://provisbiolabs.com/biosimilars',
            'en-SG': 'https://provisbiolabs.com/biosimilars',
            'en-KR': 'https://provisbiolabs.com/biosimilars',
            'en-NL': 'https://provisbiolabs.com/biosimilars',
            'en-FR': 'https://provisbiolabs.com/biosimilars',
            'en-CA': 'https://provisbiolabs.com/biosimilars',
            'x-default': 'https://provisbiolabs.com/biosimilars',
        }
    },
    openGraph: {
        title: "Biosimilar Development & Analytical Characterization | Provis Biolabs",
        description: "End-to-end biosimilar lifecycle expertise: discovery, characterization, to commercial GMP manufacturing.",
        images: ["https://provisbiolabs.com/provis-biolabs-team-collaboration.webp"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Provis Biolabs Biosimilar Development",
        description: "End-to-end biosimilar development: discovery to commercial manufacturing.",
        images: ["https://provisbiolabs.com/provis-biolabs-team-collaboration.webp"],
    },
};

const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'What is a biosimilar?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'A biosimilar is a biological medicine that is highly similar to an already approved reference biologic, with no clinically meaningful differences in terms of safety, purity and potency. Biosimilars offer cost-effective therapeutic options once the reference product\'s patent expires.'
            }
        },
        {
            '@type': 'Question',
            name: 'What biosimilar development services does Provis Biolabs offer?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Provis Biolabs provides end-to-end biosimilar development services including molecule identification, cell line development, process development, analytical characterization, comparability studies, preclinical and clinical manufacturing and regulatory dossier support.'
            }
        },
        {
            '@type': 'Question',
            name: 'How does Provis Biolabs ensure biosimilar quality?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Provis Biolabs employs advanced analytical characterization techniques including LC-MS, glycan profiling and structural analysis to demonstrate biosimilarity per ICH Q5E guidelines and regulatory agency standards (EMA, FDA). All manufacturing is conducted under strict GMP conditions.'
            }
        },
        {
            '@type': 'Question',
            name: 'What therapeutic areas does Provis Biolabs target for biosimilars?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Provis Biolabs focuses on biosimilar development across high-impact therapeutic areas, including oncology, autoimmune diseases and rare disorders, prioritizing molecules with significant unmet medical need and commercial opportunity.'
            }
        }
    ]
};

const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://provisbiolabs.com' },
        { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://provisbiolabs.com/products' },
        { '@type': 'ListItem', position: 3, name: 'Biosimilars', item: 'https://provisbiolabs.com/biosimilars' }
    ]
};

export default function BiosimilarsPage() {
    return (
        <main>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            <Navbar />
            <BiosimilarsContent />
            <Footer />
        </main>
    );
}
