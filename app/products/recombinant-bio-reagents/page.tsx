import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import RecombinantContent from "./RecombinantContent";

export const metadata: Metadata = {
    title: "Animal Origin-Free Recombinant Proteins & Enzymes | Provis Biolabs",
    description:
        "100% Animal Origin-Free recombinant proteins and enzymes — GMP-grade, manufactured under ISO, cGMP and FSSC 22000 certified standards.",
    alternates: {
        canonical: "https://www.provisbiolabs.com/products/recombinant-bio-reagents",
        languages: {
            'en-US': 'https://www.provisbiolabs.com/products/recombinant-bio-reagents',
            'en-GB': 'https://www.provisbiolabs.com/products/recombinant-bio-reagents',
            'en-SG': 'https://www.provisbiolabs.com/products/recombinant-bio-reagents',
            'en-KR': 'https://www.provisbiolabs.com/products/recombinant-bio-reagents',
            'en-NL': 'https://www.provisbiolabs.com/products/recombinant-bio-reagents',
            'en-FR': 'https://www.provisbiolabs.com/products/recombinant-bio-reagents',
            'en-CA': 'https://www.provisbiolabs.com/products/recombinant-bio-reagents',
            'x-default': 'https://www.provisbiolabs.com/products/recombinant-bio-reagents',
        }
    },
    openGraph: {
        title: "Animal Origin-Free Recombinant Proteins & Enzymes | Provis Biolabs",
        description: "100% Animal Origin-Free recombinant proteins and enzymes — GMP-grade, ISO certified.",
        images: ["https://www.provisbiolabs.com/products-showcase.webp"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Provis Biolabs Recombinant Bio-Reagents",
        description: "100% AOF recombinant proteins — PNGase F, Trypsin, Streptavidin and more.",
        images: ["https://www.provisbiolabs.com/products-showcase.webp"],
    },
};

export default function RecombinantBioReagentsPage() {
    return (
        <main>
            <Navbar />
            <RecombinantContent />
            <Footer />
        </main>
    );
}
