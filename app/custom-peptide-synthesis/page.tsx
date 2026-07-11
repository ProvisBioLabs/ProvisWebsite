import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PeptidesContent from "./PeptidesContent";

export const metadata: Metadata = {
    title: "Custom Peptide Synthesis | Provis Biolabs",
    description: "Premium Custom Peptide Synthesis services at Provis Biolabs. We provide high-quality manufacturing, >99% purity and scale from grams to kilograms for clinical and commercial applications.",
    alternates: {
        canonical: "https://www.provisbiolabs.com/custom-peptide-synthesis",
        languages: {
            'en-US': 'https://www.provisbiolabs.com/us/custom-peptide-synthesis',
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
        description: "Premium Custom Peptide Synthesis — >99% purity, gram-to-kilogram scale for clinical and commercial applications.",
        images: ["https://www.provisbiolabs.com/provis-biolabs-research-lab.webp"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Provis Biolabs Custom Peptide Synthesis",
        description: "Custom Peptide Synthesis: >99% purity, custom manufacturing at scale.",
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
    mainEntity: [
        {
            '@type': 'Question',
            name: 'What purity levels do Provis Biolabs Custom Peptide Synthesis achieve?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Provis Biolabs Custom Peptide Synthesis achieve >99% purity as standard, with comprehensive HPLC and mass spectrometry characterization provided for every batch.'
            }
        },
        {
            '@type': 'Question',
            name: 'Do you offer high-quality Custom Peptide Synthesis?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Provis Biolabs manufactures high-quality Custom Peptide Synthesis for clinical and commercial applications, with full batch documentation and CoA.'
            }
        },
        {
            '@type': 'Question',
            name: 'What scale of custom peptide manufacturing does Provis Biolabs offer?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Provis Biolabs supports custom peptide production from milligram-scale feasibility studies through to kilogram-scale commercial manufacturing, with flexible scale-up processes.'
            }
        },
        {
            '@type': 'Question',
            name: 'What types of peptides can Provis Biolabs manufacture?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Provis Biolabs manufactures a wide range of custom Custom Peptide Synthesis including linear, cyclic, disulfide-bonded, PEGylated and modified peptides for pharmaceutical, diagnostic and research applications.'
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
