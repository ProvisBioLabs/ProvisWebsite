import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EventsDisplay from "./EventsDisplay";

export const metadata = {
    title: "Upcoming Events & Conferences | Provis Biolabs",
    description: "Stay connected with Provis Biolabs at upcoming global biotechnology conferences, seminars and product launches.",
    alternates: {
        canonical: "https://www.provisbiolabs.com/events",
        languages: {
            'en-US': 'https://www.provisbiolabs.com/us/events',
            'en-GB': 'https://www.provisbiolabs.com/events',
            'en-SG': 'https://www.provisbiolabs.com/events',
            'en-KR': 'https://www.provisbiolabs.com/events',
            'en-NL': 'https://www.provisbiolabs.com/events',
            'en-FR': 'https://www.provisbiolabs.com/events',
            'en-CA': 'https://www.provisbiolabs.com/events',
            'x-default': 'https://www.provisbiolabs.com/events',
        }
    },
    openGraph: {
        title: "Upcoming Events & Conferences | Provis Biolabs",
        description: "Connect with Provis Biolabs at global biotechnology conferences, seminars and product launches.",
        images: ["https://www.provisbiolabs.com/provis-biolabs-team-collaboration.webp"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Provis Biolabs Events",
        description: "Global biotech conferences, seminars and product launches.",
        images: ["https://www.provisbiolabs.com/provis-biolabs-team-collaboration.webp"],
    },
};

const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.provisbiolabs.com' },
        { '@type': 'ListItem', position: 2, name: 'Events', item: 'https://www.provisbiolabs.com/events' }
    ]
};

export default function EventsPage() {
    return (
        <main className="min-h-screen flex flex-col pt-20">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            <Navbar />
            <div className="flex-grow">
                <EventsDisplay />
            </div>
            <Footer />
        </main>
    );
}
