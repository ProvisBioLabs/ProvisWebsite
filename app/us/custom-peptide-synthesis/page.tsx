import type { Metadata } from "next";
import USNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import PeptidesContent from "./PeptidesContent";
import { customPeptideFaqs } from "../../custom-peptide-synthesis/faqData";

export const metadata: Metadata = {
    title: "Custom Peptide Synthesis | Provis Biolabs",
    description: "Premium Custom Peptide Synthesis services in the USA & globally at Provis Biolabs. We provide high-quality manufacturing, >99% purity and scale from grams to kilograms for clinical and commercial applications.",
    alternates: {
        canonical: "https://www.provisbiolabs.com/us/custom-peptide-synthesis",
        languages: {
            'en-US': 'https://www.provisbiolabs.com/us/custom-peptide-synthesis',
            'en-IN': 'https://www.provisbiolabs.com/custom-peptide-synthesis',
            'en-GB': 'https://www.provisbiolabs.com/us/custom-peptide-synthesis',
            'en-SG': 'https://www.provisbiolabs.com/us/custom-peptide-synthesis',
            'en-KR': 'https://www.provisbiolabs.com/us/custom-peptide-synthesis',
            'en-NL': 'https://www.provisbiolabs.com/us/custom-peptide-synthesis',
            'en-FR': 'https://www.provisbiolabs.com/us/custom-peptide-synthesis',
            'en-CA': 'https://www.provisbiolabs.com/us/custom-peptide-synthesis',
            'x-default': 'https://www.provisbiolabs.com/us/custom-peptide-synthesis',
        }
    },
    openGraph: {
        title: "Custom Peptide Synthesis | Provis Biolabs",
        description: "Premium Custom Peptide Synthesis — >99% purity, gram-to-kilogram scale for clinical and commercial applications in USA, India & globally.",
        images: ["https://www.provisbiolabs.com/provis-biolabs-research-lab.webp"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Provis Biolabs Custom Peptide Synthesis USA",
        description: "Custom Peptide Synthesis: >99% purity, custom manufacturing at scale.",
        images: ["https://www.provisbiolabs.com/provis-biolabs-research-lab.webp"],
    },
};

const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.provisbiolabs.com/us' },
        { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://www.provisbiolabs.com/us/products' },
        { '@type': 'ListItem', position: 3, name: 'Custom Peptide Synthesis', item: 'https://www.provisbiolabs.com/us/custom-peptide-synthesis' }
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
    description: 'Premium Custom Peptide Synthesis services in the USA and globally, including GMP and research-grade peptides, from mg to kg scale.',
    provider: {
        '@type': 'Organization',
        name: 'Provis Biolabs',
        url: 'https://www.provisbiolabs.com/us'
    },
    areaServed: [
        { '@type': 'Country', name: 'United States' },
        { '@type': 'Country', name: 'India' },
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
            <USNavbar />
            <PeptidesContent />
            <Footer />
        </main>
    );
}
