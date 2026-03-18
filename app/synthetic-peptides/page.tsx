import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PeptidesContent from "./PeptidesContent";

export const metadata: Metadata = {
    title: "Custom Synthetic Peptide Manufacturing & GMP Services | Provis Biolabs",
    description: "Premium custom synthetic peptide services at Provis Biolabs. We provide GMP manufacturing, >99% purity and scale from grams to kilograms for clinical and commercial applications.",
    alternates: {
        canonical: "https://provisbiolabs.com/synthetic-peptides",
        languages: {
            'en-US': 'https://provisbiolabs.com/synthetic-peptides',
            'en-GB': 'https://provisbiolabs.com/synthetic-peptides',
            'en-SG': 'https://provisbiolabs.com/synthetic-peptides',
            'en-KR': 'https://provisbiolabs.com/synthetic-peptides',
            'en-NL': 'https://provisbiolabs.com/synthetic-peptides',
            'en-FR': 'https://provisbiolabs.com/synthetic-peptides',
            'en-CA': 'https://provisbiolabs.com/synthetic-peptides',
            'x-default': 'https://provisbiolabs.com/synthetic-peptides',
        }
    },
    openGraph: {
        title: "Custom Synthetic Peptide Manufacturing & GMP Services | Provis Biolabs",
        description: "Premium synthetic peptides — >99% purity, GMP-grade, gram-to-kilogram scale for clinical and commercial applications.",
        images: ["https://provisbiolabs.com/provis-biolabs-research-lab.webp"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Provis Biolabs Synthetic Peptides",
        description: "GMP synthetic peptides: >99% purity, custom manufacturing at scale.",
        images: ["https://provisbiolabs.com/provis-biolabs-research-lab.webp"],
    },
};

const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://provisbiolabs.com' },
        { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://provisbiolabs.com/products' },
        { '@type': 'ListItem', position: 3, name: 'Synthetic Peptides', item: 'https://provisbiolabs.com/synthetic-peptides' }
    ]
};

const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'What purity levels do Provis Biolabs synthetic peptides achieve?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Provis Biolabs synthetic peptides achieve >99% purity as standard, with comprehensive HPLC and mass spectrometry characterization provided for every batch.'
            }
        },
        {
            '@type': 'Question',
            name: 'Do you offer GMP-grade synthetic peptides?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Provis Biolabs manufactures GMP-grade synthetic peptides for clinical and commercial applications, compliant with ICH Q7 standards, with full batch documentation and CoA.'
            }
        },
        {
            '@type': 'Question',
            name: 'What scale of synthetic peptide manufacturing does Provis Biolabs offer?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Provis Biolabs supports synthetic peptide production from milligram-scale feasibility studies through to kilogram-scale commercial manufacturing, with flexible scale-up processes.'
            }
        },
        {
            '@type': 'Question',
            name: 'What types of peptides can Provis Biolabs manufacture?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Provis Biolabs manufactures a wide range of custom synthetic peptides including linear, cyclic, disulfide-bonded, PEGylated and modified peptides for pharmaceutical, diagnostic and research applications.'
            }
        }
    ]
};

export default function SyntheticPeptidesPage() {
    return (
        <main>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            <Navbar />
            <PeptidesContent />
            <Footer />
        </main>
    );
}
