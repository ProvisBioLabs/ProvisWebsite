import type { Metadata } from "next";
import USNavbar from "../../us/components/Navbar";
import Footer from "../../us/components/Footer";
import USProductsCatalog from "../components/USProductsCatalog";

export const metadata: Metadata = {
    title: "Recombinant Bio-Reagents | Provis Biolabs USA",
    description:
        "Explore Provis Biolabs' US product catalog: Recombinant Bio-Reagents — Animal origin-free. WHO-GMP manufactured.",
    alternates: {
        canonical: "https://www.provisbiolabs.com/us/products",
    },
    openGraph: {
        title: "Recombinant Bio-Reagents | Provis Biolabs USA",
        description: "WHO-GMP grade recombinant proteins and enzymes — animal origin-free.",
        images: ["https://www.provisbiolabs.com/products-showcase.webp"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Provis Biolabs USA Products",
        description: "WHO-GMP grade recombinant proteins — animal origin-free.",
        images: ["https://www.provisbiolabs.com/products-showcase.webp"],
    },
};

export default function USProductsPage() {
    return (
        <main>
            <USNavbar />
            <USProductsCatalog />
            <Footer />
        </main>
    );
}
