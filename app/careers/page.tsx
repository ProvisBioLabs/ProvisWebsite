import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CareersContent from "./CareersContent";

export const metadata = {
    title: "Biotechnology Careers & Jobs | Provis Biolabs",
    description: "Join the team at Provis Biolabs. Discover opportunities to innovate, grow, and impact the future of biotechnology and biopharmaceuticals.",
    alternates: {
        canonical: "https://provisbiolabs.com/careers",
        languages: {
            'en-US': 'https://provisbiolabs.com/careers',
            'en-GB': 'https://provisbiolabs.com/careers',
            'en-SG': 'https://provisbiolabs.com/careers',
            'en-KR': 'https://provisbiolabs.com/careers',
            'en-NL': 'https://provisbiolabs.com/careers',
            'en-FR': 'https://provisbiolabs.com/careers',
            'en-CA': 'https://provisbiolabs.com/careers',
            'x-default': 'https://provisbiolabs.com/careers',
        }
    },
    openGraph: {
        title: "Biotechnology Careers & Jobs | Provis Biolabs",
        description: "Join our team working on bioreagents, Bio-APIs, CDMO and biosimilar innovation.",
        images: ["https://provisbiolabs.com/provis-biolabs-team-collaboration.webp"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Careers at Provis Biolabs",
        description: "Biotechnology careers in bioreagents, CDMO and biosimilar innovation.",
        images: ["https://provisbiolabs.com/provis-biolabs-team-collaboration.webp"],
    },
};

const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://provisbiolabs.com' },
        { '@type': 'ListItem', position: 2, name: 'Careers', item: 'https://provisbiolabs.com/careers' }
    ]
};

export default function CareersPage() {
    return (
        <main className="min-h-screen flex flex-col pt-20">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            <Navbar />
            <div className="flex-grow">
                <CareersContent />
            </div>
            <Footer />
        </main>
    );
}
