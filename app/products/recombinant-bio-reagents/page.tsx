import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import RecombinantContent from "./RecombinantContent";

export const metadata: Metadata = {
    title: "Animal Origin-Free Recombinant Proteins & Enzymes | Provis Biolabs",
    description:
        "100% Animal Origin-Free recombinant proteins and enzymes — GMP-grade, manufactured under ISO, cGMP and FSSC 22000 certified standards.",
    alternates: {
        canonical: "https://provisbiolabs.com/products/recombinant-bio-reagents",
        languages: {
            'en-US': 'https://provisbiolabs.com/products/recombinant-bio-reagents',
            'en-GB': 'https://provisbiolabs.com/products/recombinant-bio-reagents',
            'en-SG': 'https://provisbiolabs.com/products/recombinant-bio-reagents',
            'en-KR': 'https://provisbiolabs.com/products/recombinant-bio-reagents',
            'en-NL': 'https://provisbiolabs.com/products/recombinant-bio-reagents',
            'en-FR': 'https://provisbiolabs.com/products/recombinant-bio-reagents',
            'en-CA': 'https://provisbiolabs.com/products/recombinant-bio-reagents',
            'x-default': 'https://provisbiolabs.com/products/recombinant-bio-reagents',
        }
    },
    openGraph: {
        title: "Animal Origin-Free Recombinant Proteins & Enzymes | Provis Biolabs",
        description: "100% Animal Origin-Free recombinant proteins and enzymes — GMP-grade, ISO certified.",
        images: ["https://provisbiolabs.com/products-showcase.webp"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Provis Biolabs Recombinant Bio-Reagents",
        description: "100% AOF recombinant proteins — PNGase F, Trypsin, Streptavidin and more.",
        images: ["https://provisbiolabs.com/products-showcase.webp"],
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
