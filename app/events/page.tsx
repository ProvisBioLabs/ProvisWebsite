import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EventsDisplay from "./EventsDisplay";

export const metadata = {
    title: "Upcoming Events & Conferences | Provis Biolabs",
    description: "Stay connected with Provis Biolabs at upcoming global biotechnology conferences, seminars, and product launches.",
    alternates: {
        canonical: "https://provisbiolabs.com/events",
        languages: {
            'en-US': 'https://provisbiolabs.com/events',
            'en-GB': 'https://provisbiolabs.com/events',
            'en-SG': 'https://provisbiolabs.com/events',
            'en-KR': 'https://provisbiolabs.com/events',
            'en-NL': 'https://provisbiolabs.com/events',
            'en-FR': 'https://provisbiolabs.com/events',
            'en-CA': 'https://provisbiolabs.com/events',
            'x-default': 'https://provisbiolabs.com/events',
        }
    },
    openGraph: {
        title: "Upcoming Events & Conferences | Provis Biolabs",
        description: "Connect with Provis Biolabs at global biotechnology conferences, seminars, and product launches.",
        images: ["https://provisbiolabs.com/provis-biolabs-team-collaboration.webp"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Provis Biolabs Events",
        description: "Global biotech conferences, seminars and product launches.",
        images: ["https://provisbiolabs.com/provis-biolabs-team-collaboration.webp"],
    },
};

const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://provisbiolabs.com' },
        { '@type': 'ListItem', position: 2, name: 'Events', item: 'https://provisbiolabs.com/events' }
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
