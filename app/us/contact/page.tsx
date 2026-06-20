import type { Metadata } from "next";
import USNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
    title: "Contact Provis Biolabs USA | Partnerships & Business Inquiries",
    description: "Get in touch with the Provis Biolabs USA team for global partnerships, pharmaceutical CDMO inquiries, career opportunities and technical support in biotechnology.",
    alternates: {
        canonical: "https://www.provisbiolabs.com/us/contact",
        languages: {
            'en-US': 'https://www.provisbiolabs.com/us/contact',
            'en-GB': 'https://www.provisbiolabs.com/us/contact',
            'en-SG': 'https://www.provisbiolabs.com/us/contact',
            'en-KR': 'https://www.provisbiolabs.com/us/contact',
            'en-NL': 'https://www.provisbiolabs.com/us/contact',
            'en-FR': 'https://www.provisbiolabs.com/us/contact',
            'en-CA': 'https://www.provisbiolabs.com/us/contact',
            'x-default': 'https://www.provisbiolabs.com/us/contact',
        }
    },
    openGraph: {
        title: "Contact Provis Biolabs USA | Partnerships & Business Inquiries",
        description: "Get in touch for global pharma partnerships, CDMO inquiries and technical support in biotechnology.",
        images: ["https://www.provisbiolabs.com/provis-biolabs-team-collaboration.webp"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact Provis Biolabs USA",
        description: "Reach out for CDMO, partnerships or technical support.",
        images: ["https://www.provisbiolabs.com/provis-biolabs-team-collaboration.webp"],
    },
};

const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.provisbiolabs.com/us' },
        { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://www.provisbiolabs.com/us/contact' }
    ]
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white selection:bg-[#F26522]/20 selection:text-[#1E3A8A]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            <USNavbar />
            <div className="pt-24 mt-8">
                <ContactContent />
            </div>
            <Footer />
        </main>
    );
}
