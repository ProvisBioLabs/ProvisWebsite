import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CDMOContent from "./CDMOContent";

export const metadata: Metadata = {
    title: "Pharmaceutical CDMO Services & Biomanufacturing | Provis Biolabs",
    description: "Expert Pharmaceutical CDMO Services. Provis Biolabs offers comprehensive contract development and manufacturing for biologics, from fermentation and expression to full-scale commercial GMP production.",
    alternates: {
        canonical: "https://provisbiolabs.com/cdmo",
        languages: {
            'en-US': 'https://provisbiolabs.com/cdmo',
            'en-GB': 'https://provisbiolabs.com/cdmo',
            'en-SG': 'https://provisbiolabs.com/cdmo',
            'en-KR': 'https://provisbiolabs.com/cdmo',
            'en-NL': 'https://provisbiolabs.com/cdmo',
            'en-FR': 'https://provisbiolabs.com/cdmo',
            'en-CA': 'https://provisbiolabs.com/cdmo',
            'x-default': 'https://provisbiolabs.com/cdmo',
        }
    },
    openGraph: {
        title: "Pharmaceutical CDMO Services & Biomanufacturing | Provis Biolabs",
        description: "End-to-end biologics CDMO: fermentation, bioprocessing, GMP manufacturing, regulatory support.",
        images: ["https://provisbiolabs.com/provis-biolabs-cdmo-manufacturing-facility.webp"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Provis Biolabs CDMO Services",
        description: "Expert biologics CDMO: development to commercial GMP manufacturing.",
        images: ["https://provisbiolabs.com/provis-biolabs-cdmo-manufacturing-facility.webp"],
    },
};

const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'What CDMO services does Provis Biolabs offer?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Provis Biolabs offers end-to-end CDMO services including process development, upstream and downstream bioprocessing, analytical development, formulation, fill & finish, and regulatory support for biologics, recombinant proteins, and APIs.'
            }
        },
        {
            '@type': 'Question',
            name: 'Does Provis Biolabs offer GMP manufacturing?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Provis Biolabs operates WHO-GMP certified manufacturing facilities capable of producing biopharmaceuticals to clinical and commercial GMP standards, with full batch documentation and regulatory compliance support.'
            }
        },
        {
            '@type': 'Question',
            name: 'What expression systems does Provis Biolabs use?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Provis Biolabs utilizes multiple expression systems including E. coli, Pichia pastoris, and mammalian cell cultures (CHO, HEK293) to optimally produce diverse classes of recombinant proteins and biopharmaceuticals.'
            }
        },
        {
            '@type': 'Question',
            name: 'Can Provis Biolabs handle technology transfer?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Provis Biolabs provides comprehensive technology transfer services, working closely with client teams to transition existing processes into our GMP-compliant manufacturing platform with full knowledge transfer, validation, and regulatory documentation.'
            }
        }
    ]
};

const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://provisbiolabs.com' },
        { '@type': 'ListItem', position: 2, name: 'CDMO Services', item: 'https://provisbiolabs.com/cdmo' }
    ]
};

export default function CDMOPage() {
    return (
        <main className="bg-[#F8FAFC]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            <Navbar />
            <CDMOContent />
            <Footer />
        </main>
    );
}

