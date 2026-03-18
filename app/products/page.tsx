import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductsCatalog from "../../app/components/ProductsCatalog";

export const metadata: Metadata = {
    title: "Bio-APIs, Bioreagents & CDMO Products | Provis Biolabs",
    description:
        "Explore Provis Biolabs' full product catalog: Bio-APIs, Recombinant Bio-Reagents, Synthetic Peptides and Biosimilar pipeline products — Animal origin-free. WHO-GMP manufactured.",
    alternates: {
        canonical: "https://provisbiolabs.com/products",
        languages: {
            'en-US': 'https://provisbiolabs.com/products',
            'en-GB': 'https://provisbiolabs.com/products',
            'en-SG': 'https://provisbiolabs.com/products',
            'en-KR': 'https://provisbiolabs.com/products',
            'en-NL': 'https://provisbiolabs.com/products',
            'en-FR': 'https://provisbiolabs.com/products',
            'en-CA': 'https://provisbiolabs.com/products',
            'x-default': 'https://provisbiolabs.com/products',
        }
    },
    openGraph: {
        title: "Bio-APIs, Bioreagents & CDMO Products | Provis Biolabs",
        description: "WHO-GMP grade Bio-APIs, recombinant proteins, synthetic peptides — animal origin-free.",
        images: ["https://provisbiolabs.com/products-showcase.webp"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Provis Biolabs Products",
        description: "WHO-GMP grade Bio-APIs and recombinant proteins — animal origin-free.",
        images: ["https://provisbiolabs.com/products-showcase.webp"],
    },
};

export default function ProductsPage() {
    return (
        <main>
            <Navbar />
            <ProductsCatalog />
            <Footer />
        </main>
    );
}
