import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NewsDisplay from "./NewsDisplay";

export const metadata = {
    title: "Corporate News & Milestones | Provis Biolabs",
    description: "Explore the latest corporate news, facility expansions and significant milestones from Provis Biolabs.",
    alternates: {
        canonical: "https://www.provisbiolabs.com/news",
        languages: {
            'en-US': 'https://www.provisbiolabs.com/news',
            'en-GB': 'https://www.provisbiolabs.com/news',
            'en-SG': 'https://www.provisbiolabs.com/news',
            'en-KR': 'https://www.provisbiolabs.com/news',
            'en-NL': 'https://www.provisbiolabs.com/news',
            'en-FR': 'https://www.provisbiolabs.com/news',
            'en-CA': 'https://www.provisbiolabs.com/news',
            'x-default': 'https://www.provisbiolabs.com/news',
        }
    },
    openGraph: {
        title: "Corporate News & Milestones | Provis Biolabs",
        description: "Latest corporate news, facility expansions and significant milestones from Provis Biolabs.",
        images: ["https://www.provisbiolabs.com/provis-biolabs-team-collaboration.webp"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Provis Biolabs News",
        description: "Latest news and milestones from Provis Biolabs.",
        images: ["https://www.provisbiolabs.com/provis-biolabs-team-collaboration.webp"],
    },
};

import { timelineData } from "../../lib/data/newsData";

// Helper function to convert human-readable dates (e.g. "Apr 2026") to ISO 8601 format
function getIsoDate(dateStr: string): string {
    const months: { [key: string]: string } = {
        january: '01', jan: '01',
        february: '02', feb: '02',
        march: '03', mar: '03',
        april: '04', apr: '04',
        may: '05',
        june: '06', jun: '06',
        july: '07', jul: '07',
        august: '08', aug: '08',
        september: '09', sep: '09',
        october: '10', oct: '10',
        november: '11', nov: '11',
        december: '12', dec: '12'
    };
    
    try {
        const parts = dateStr.trim().toLowerCase().split(/\s+/);
        if (parts.length === 2) {
            const monthName = parts[0];
            const year = parts[1];
            const monthDigit = months[monthName] || '01';
            return `${year}-${monthDigit}-01T00:00:00Z`;
        }
    } catch (e) {
        // Fallback
    }
    return new Date().toISOString();
}

const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.provisbiolabs.com' },
        { '@type': 'ListItem', position: 2, name: 'News', item: 'https://www.provisbiolabs.com/news' }
    ]
};

export default function NewsPage() {
    const newsSchema = {
        '@context': 'https://schema.org',
        '@graph': timelineData.map((item) => ({
            '@type': 'NewsArticle',
            '@id': `https://www.provisbiolabs.com/news#${item.id}`,
            headline: item.title,
            description: item.description,
            datePublished: getIsoDate(item.year),
            dateModified: getIsoDate(item.year),
            author: {
                '@type': 'Organization',
                name: 'Provis Biolabs',
                url: 'https://www.provisbiolabs.com'
            },
            publisher: {
                '@type': 'Organization',
                name: 'Provis Biolabs',
                logo: {
                    '@type': 'ImageObject',
                    url: 'https://www.provisbiolabs.com/logo.webp'
                }
            },
            mainEntityOfPage: `https://www.provisbiolabs.com/news#${item.id}`
        }))
    };

    return (
        <main className="min-h-screen flex flex-col pt-20">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(newsSchema) }} />
            <Navbar />
            <div className="flex-grow">
                <NewsDisplay />
            </div>
            <Footer />
        </main>
    );
}
