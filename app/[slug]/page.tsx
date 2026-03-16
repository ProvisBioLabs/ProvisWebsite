import { products, getProductBySlug } from "../../lib/data/products";
import { notFound } from "next/navigation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductView from "./ProductView";
import type { Metadata } from "next";

export async function generateStaticParams() {
    return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const product = getProductBySlug(slug);
    
    if (!product) return {};
    
    return {
        title: `${product.name} | Provis Biolabs`,
        description: product.shortDescription,
        alternates: {
            canonical: `/${product.slug}`
        },
        openGraph: {
            title: product.name,
            description: product.description,
            images: [product.image.startsWith('http') ? product.image : `https://provisbiolabs.com${product.image}`],
        },
    };
}

export default async function ProductDetail({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const product = getProductBySlug(resolvedParams.slug);

    if (!product) {
        notFound();
    }

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: product.name,
        description: product.description,
        image: product.image.startsWith('http') ? product.image : `https://provisbiolabs.com${product.image}`,
        brand: {
            '@type': 'Brand',
            name: 'Provis Biolabs'
        },
        category: product.category === 'api' ? 'Active Pharmaceutical Ingredient' : product.category === 'reagent' ? 'Bioreagent' : 'CDMO Service',
        identifier: product.casNumber ? [
            {
                '@type': 'PropertyValue',
                propertyID: 'CAS',
                value: product.casNumber
            }
        ] : undefined,
        audience: {
            '@type': 'Audience',
            audienceType: 'B2B Pharmaceuticals and Research'
        }
    };

    return (
        <main className="min-h-screen bg-white font-sans">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Navbar />
            <ProductView product={product} />
            <Footer />
        </main>
    );
}
