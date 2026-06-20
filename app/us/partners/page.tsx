import USNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import PartnersContent from "./PartnersContent";

export const metadata = {
    title: "Authorized Global Partners USA | Provis Biolabs",
    description: "Explore our network of authorized global partners providing local support, reliable delivery and expert advice for Provis Biolabs USA products worldwide.",
    alternates: {
        canonical: "https://www.provisbiolabs.com/us/partners",
        languages: {
            'en-US': 'https://www.provisbiolabs.com/us/partners',
            'en-GB': 'https://www.provisbiolabs.com/us/partners',
            'en-SG': 'https://www.provisbiolabs.com/us/partners',
            'en-KR': 'https://www.provisbiolabs.com/us/partners',
            'en-NL': 'https://www.provisbiolabs.com/us/partners',
            'en-FR': 'https://www.provisbiolabs.com/us/partners',
            'en-CA': 'https://www.provisbiolabs.com/us/partners',
            'x-default': 'https://www.provisbiolabs.com/us/partners',
        }
    },
    openGraph: {
        title: "Authorized Global Partners USA | Provis Biolabs",
        description: "Our network of global partners providing local support and reliable delivery for Provis Biolabs USA products.",
        images: ["https://www.provisbiolabs.com/provis-biolabs-team-collaboration.webp"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Provis Biolabs Global Partners USA",
        description: "Authorized partners providing local support worldwide.",
        images: ["https://www.provisbiolabs.com/provis-biolabs-team-collaboration.webp"],
    },
};

const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.provisbiolabs.com/us' },
        { '@type': 'ListItem', position: 2, name: 'Partners', item: 'https://www.provisbiolabs.com/us/partners' }
    ]
};

export default function PartnersPage() {
    return (
        <main className="min-h-screen flex flex-col pt-20">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            <USNavbar />
            <div className="flex-grow">
                <PartnersContent />
            </div>
            <Footer />
        </main>
    );
}
