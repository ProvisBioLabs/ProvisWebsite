import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogsContent from "./BlogsContent";

export const metadata = {
    title: "Biotechnology Insights & Industry Discoveries | Provis Biolabs Blogs",
    description: "Explore the latest insights, breakthroughs and trends in the biotechnology industry. Stay updated with Provis Biolabs expert articles on recombinant proteins, mammalian expression and more.",
    alternates: {
        canonical: "https://www.provisbiolabs.com/blogs",
        languages: {
            'en-US': 'https://www.provisbiolabs.com/blogs',
            'en-GB': 'https://www.provisbiolabs.com/blogs',
            'en-SG': 'https://www.provisbiolabs.com/blogs',
            'en-KR': 'https://www.provisbiolabs.com/blogs',
            'en-NL': 'https://www.provisbiolabs.com/blogs',
            'en-FR': 'https://www.provisbiolabs.com/blogs',
            'en-CA': 'https://www.provisbiolabs.com/blogs',
            'x-default': 'https://www.provisbiolabs.com/blogs',
        }
    },
    openGraph: {
        title: "Biotechnology Insights & Industry Discoveries | Provis Biolabs",
        description: "Expert articles on recombinant proteins, mammalian expression, biosimilars and more.",
        images: ["https://www.provisbiolabs.com/provis-biolabs-research-lab.webp"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Provis Biolabs Insights",
        description: "Expert biotech articles on recombinant proteins, biosimilars and more.",
        images: ["https://www.provisbiolabs.com/provis-biolabs-research-lab.webp"],
    },
};

export default function BlogsPage() {
    return (
        <main className="min-h-screen flex flex-col pt-20">
            <Navbar />
            <div className="flex-grow">
                <BlogsContent />
            </div>
            <Footer />
        </main>
    );
}
