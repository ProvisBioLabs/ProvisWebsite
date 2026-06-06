import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BioApisContent from "./BioApisContent";

export const metadata: Metadata = {
    title: "GMP Bio-APIs: L-Asparaginase, Streptokinase & More | Provis Biolabs",
    description:
        "Provis Biolabs Bio-APIs — GMP-grade biological active pharmaceutical ingredients including L-Asparaginase, Pegaspargase, Streptokinase and Sodium Hyaluronate.",
    alternates: {
        canonical: "https://www.provisbiolabs.com/products/bio-apis",
        languages: {
            'en-US': 'https://www.provisbiolabs.com/products/bio-apis',
            'en-GB': 'https://www.provisbiolabs.com/products/bio-apis',
            'en-SG': 'https://www.provisbiolabs.com/products/bio-apis',
            'en-KR': 'https://www.provisbiolabs.com/products/bio-apis',
            'en-NL': 'https://www.provisbiolabs.com/products/bio-apis',
            'en-FR': 'https://www.provisbiolabs.com/products/bio-apis',
            'en-CA': 'https://www.provisbiolabs.com/products/bio-apis',
            'x-default': 'https://www.provisbiolabs.com/products/bio-apis',
        }
    },
    openGraph: {
        title: "GMP Bio-APIs: L-Asparaginase, Streptokinase & More | Provis Biolabs",
        description: "GMP-grade biological active pharmaceutical ingredients for pharma innovators worldwide.",
        images: ["https://www.provisbiolabs.com/products-showcase.webp"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Provis Biolabs Bio-APIs",
        description: "GMP-grade L-Asparaginase, Pegaspargase, Streptokinase, Sodium Hyaluronate.",
        images: ["https://www.provisbiolabs.com/products-showcase.webp"],
    },
};

export default function BioApisPage() {
    return (
        <main>
            <Navbar />
            <BioApisContent />
            <Footer />
        </main>
    );
}
