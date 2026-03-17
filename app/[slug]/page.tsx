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
    
    const absUrl = `https://provisbiolabs.com/${product.slug}`;
    
    return {
        title: product.seoTitle ?? `${product.name} | Provis Biolabs`,
        description: product.seoDescription ?? product.shortDescription,
        alternates: {
            canonical: absUrl,
            languages: {
                'en-US': absUrl,
                'en-GB': absUrl,
                'en-SG': absUrl,
                'en-KR': absUrl,
                'en-NL': absUrl,
                'en-FR': absUrl,
                'en-CA': absUrl,
                'x-default': absUrl,
            }
        },
        openGraph: {
            title: product.seoTitle ?? product.name,
            description: product.seoDescription ?? product.description,
            images: [product.image.startsWith('http') ? product.image : `https://provisbiolabs.com${product.image}`],
        },
        twitter: {
            card: 'summary_large_image',
            title: product.seoTitle ?? product.name,
            description: product.seoDescription ?? product.shortDescription,
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
        description: product.longDescription || product.description,
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
        },
        offers: {
            '@type': 'Offer',
            availability: 'https://schema.org/InStock',
            priceCurrency: 'USD',
            url: 'https://provisbiolabs.com/contact',
            seller: {
                '@type': 'Organization',
                name: 'Provis Biolabs',
                url: 'https://provisbiolabs.com'
            }
        },
        additionalProperty: product.keyFeatures?.map((feature) => ({
            '@type': 'PropertyValue',
            propertyID: 'feature',
            value: feature
        }))
    };

    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://provisbiolabs.com'
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'Products',
                item: 'https://provisbiolabs.com/products'
            },
            {
                '@type': 'ListItem',
                position: 3,
                name: product.category === 'api' ? 'Bio-APIs' : product.category === 'reagent' ? 'Recombinant Bio-Reagents' : 'CDMO',
                item: `https://provisbiolabs.com/products/${product.category === 'api' ? 'bio-apis' : product.category === 'reagent' ? 'recombinant-bio-reagents' : 'cdmo'}`
            },
            {
                '@type': 'ListItem',
                position: 4,
                name: product.name,
                item: `https://provisbiolabs.com/${product.slug}`
            }
        ]
    };

    return (
        <main className="min-h-screen bg-white font-sans">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <Navbar />
            <ProductView product={product} />
            <Footer />
        </main>
    );
}
