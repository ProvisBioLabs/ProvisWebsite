import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductsCatalog from "../../app/components/ProductsCatalog";

export const metadata: Metadata = {
    title: "Bio-APIs, Bioreagents & CDMO Products | Provis Biolabs",
    description:
        "Explore Provis Biolabs' full product catalog: Bio-APIs, Recombinant Bio-Reagents, Custom Peptide Synthesis and Biosimilar pipeline products — Animal origin-free. WHO-GMP manufactured.",
    alternates: {
        canonical: "https://www.provisbiolabs.com/products",
        languages: {
            'en-US': 'https://www.provisbiolabs.com/products',
            'en-GB': 'https://www.provisbiolabs.com/products',
            'en-SG': 'https://www.provisbiolabs.com/products',
            'en-KR': 'https://www.provisbiolabs.com/products',
            'en-NL': 'https://www.provisbiolabs.com/products',
            'en-FR': 'https://www.provisbiolabs.com/products',
            'en-CA': 'https://www.provisbiolabs.com/products',
            'x-default': 'https://www.provisbiolabs.com/products',
        }
    },
    openGraph: {
        title: "Bio-APIs, Bioreagents & CDMO Products | Provis Biolabs",
        description: "WHO-GMP grade Bio-APIs, recombinant proteins, custom peptide synthesis — animal origin-free.",
        images: ["https://www.provisbiolabs.com/products-showcase.webp"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Provis Biolabs Products",
        description: "WHO-GMP grade Bio-APIs and recombinant proteins — animal origin-free.",
        images: ["https://www.provisbiolabs.com/products-showcase.webp"],
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
