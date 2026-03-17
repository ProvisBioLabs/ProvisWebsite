import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NewsDisplay from "./NewsDisplay";

export const metadata = {
    title: "Corporate News & Milestones | Provis Biolabs",
    description: "Explore the latest corporate news, facility expansions, and significant milestones from Provis Biolabs.",
    alternates: {
        canonical: "https://provisbiolabs.com/news",
        languages: {
            'en-US': 'https://provisbiolabs.com/news',
            'en-GB': 'https://provisbiolabs.com/news',
            'en-SG': 'https://provisbiolabs.com/news',
            'en-KR': 'https://provisbiolabs.com/news',
            'en-NL': 'https://provisbiolabs.com/news',
            'en-FR': 'https://provisbiolabs.com/news',
            'en-CA': 'https://provisbiolabs.com/news',
            'x-default': 'https://provisbiolabs.com/news',
        }
    },
    openGraph: {
        title: "Corporate News & Milestones | Provis Biolabs",
        description: "Latest corporate news, facility expansions, and significant milestones from Provis Biolabs.",
        images: ["https://provisbiolabs.com/provis-biolabs-team-collaboration.webp"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Provis Biolabs News",
        description: "Latest news and milestones from Provis Biolabs.",
        images: ["https://provisbiolabs.com/provis-biolabs-team-collaboration.webp"],
    },
};

const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://provisbiolabs.com' },
        { '@type': 'ListItem', position: 2, name: 'News', item: 'https://provisbiolabs.com/news' }
    ]
};

export default function NewsPage() {
    return (
        <main className="min-h-screen flex flex-col pt-20">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            <Navbar />
            <div className="flex-grow">
                <NewsDisplay />
            </div>
            <Footer />
        </main>
    );
}
