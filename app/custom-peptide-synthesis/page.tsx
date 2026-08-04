import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PeptidesContent from "./PeptidesContent";
import { customPeptideFaqs } from "./faqData";

export const metadata: Metadata = {
    title: "Custom Peptide Synthesis | Provis Biolabs",
    description: "Premium Custom Peptide Synthesis services at Provis Biolabs. High-quality manufacturing, >99% purity and scale from grams to kilograms for clinical & research applications in India & worldwide.",
    alternates: {
        canonical: "https://www.provisbiolabs.com/custom-peptide-synthesis",
        languages: {
            'en-US': 'https://www.provisbiolabs.com/us/custom-peptide-synthesis',
            'en-IN': 'https://www.provisbiolabs.com/custom-peptide-synthesis',
            'en-GB': 'https://www.provisbiolabs.com/custom-peptide-synthesis',
            'en-SG': 'https://www.provisbiolabs.com/custom-peptide-synthesis',
            'en-KR': 'https://www.provisbiolabs.com/custom-peptide-synthesis',
            'en-NL': 'https://www.provisbiolabs.com/custom-peptide-synthesis',
            'en-FR': 'https://www.provisbiolabs.com/custom-peptide-synthesis',
            'en-CA': 'https://www.provisbiolabs.com/custom-peptide-synthesis',
            'x-default': 'https://www.provisbiolabs.com/custom-peptide-synthesis',
        }
    },
    openGraph: {
        title: "Custom Peptide Synthesis | Provis Biolabs",
        description: "Premium Custom Peptide Synthesis services with >99% purity, gram-to-kilogram scale for clinical and commercial applications in India & worldwide.",
        images: ["https://www.provisbiolabs.com/provis-biolabs-research-lab.webp"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Provis Biolabs Custom Peptide Synthesis",
        description: "Custom Peptide Synthesis: >99% purity, custom manufacturing at scale in India & globally.",
        images: ["https://www.provisbiolabs.com/provis-biolabs-research-lab.webp"],
    },
};

const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.provisbiolabs.com' },
        { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://www.provisbiolabs.com/products' },
        { '@type': 'ListItem', position: 3, name: 'Custom Peptide Synthesis', item: 'https://www.provisbiolabs.com/custom-peptide-synthesis' }
    ]
};

const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: customPeptideFaqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
        },
    })),
};

const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Custom Peptide Synthesis',
    description: 'Premium Custom Peptide Synthesis services, including GMP and research-grade peptides, from mg to kg scale. Synthesized using SPPS, LPPS, and Hybrid technologies.',
    provider: {
        '@type': 'Organization',
        name: 'Provis Biolabs',
        url: 'https://www.provisbiolabs.com'
    },
    areaServed: [
        { '@type': 'Country', name: 'India' },
        { '@type': 'Country', name: 'United States' },
        { '@type': 'Country', name: 'Worldwide' }
    ],
    hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Custom Peptide Services',
        itemListElement: [
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Solid Phase Peptide Synthesis (SPPS)'
                }
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Liquid Phase Peptide Synthesis (LPPS)'
                }
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Peptide Modifications & Tagging'
                }
            }
        ]
    }
};

export default function SyntheticPeptidesPage() {
    return (
        <main>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
            <Navbar />
            <PeptidesContent />
            <Footer />
        </main>
    );
}
