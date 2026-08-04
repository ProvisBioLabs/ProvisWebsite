import { products, getProductBySlug } from "../../lib/data/products";
import { notFound, permanentRedirect } from "next/navigation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductView from "./ProductView";
import type { Metadata } from "next";
import blogsData from "../blogs/blogsData.json";

// Helper function to normalize strings to kebab-case
function normalizeSlug(s: string): string {
    return s
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
}

// Find a blog post by matching slug or fallback methods
function findBlogBySlug(slug: string) {
    if (!slug) return null;
    const normalizedInput = normalizeSlug(slug);

    // 1. Exact or normalized slug match
    let blog = blogsData.find((b) => b.slug === slug || normalizeSlug(b.slug) === normalizedInput);
    if (blog) return blog;

    // 2. Normalized title match
    blog = blogsData.find((b) => normalizeSlug(b.title) === normalizedInput);
    if (blog) return blog;

    // 3. Substring match
    blog = blogsData.find((b) => 
        normalizeSlug(b.slug).includes(normalizedInput) || 
        normalizeSlug(b.title).includes(normalizedInput)
    );
    return blog || null;
}

export async function generateStaticParams() {
    return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const product = getProductBySlug(slug);
    if (!product) {
        const blog = findBlogBySlug(slug);
        if (blog) {
            permanentRedirect(`/blogs/${blog.slug}`);
        }
        return {};
    }
    
    const absUrl = `https://www.provisbiolabs.com/${product.slug}`;
    
    return {
        title: product.seoTitle ?? `${product.name} | Provis Biolabs`,
        description: product.seoDescription ?? product.shortDescription,
        alternates: {
            canonical: absUrl,
            languages: {
                'en-US': `https://www.provisbiolabs.com/us/${product.slug}`,
                'en-IN': absUrl,
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
            images: [product.image.startsWith('http') ? product.image : `https://www.provisbiolabs.com${product.image}`],
        },
        twitter: {
            card: 'summary_large_image',
            title: product.seoTitle ?? product.name,
            description: product.seoDescription ?? product.shortDescription,
            images: [product.image.startsWith('http') ? product.image : `https://www.provisbiolabs.com${product.image}`],
        },
    };
}

export default async function ProductDetail({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const { slug } = resolvedParams;
    const product = getProductBySlug(slug);

    if (!product) {
        const blog = findBlogBySlug(slug);
        if (blog) {
            permanentRedirect(`/blogs/${blog.slug}`);
        }
        notFound();
    }

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: product.name,
        description: product.longDescription || product.description,
        image: product.image.startsWith('http') ? product.image : `https://www.provisbiolabs.com${product.image}`,
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
                item: 'https://www.provisbiolabs.com'
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'Products',
                item: 'https://www.provisbiolabs.com/products'
            },
            {
                '@type': 'ListItem',
                position: 3,
                name: product.category === 'api' ? 'Bio-APIs' : product.category === 'reagent' ? 'Recombinant Bio-Reagents' : 'CDMO',
                item: `https://www.provisbiolabs.com/products/${product.category === 'api' ? 'bio-apis' : product.category === 'reagent' ? 'recombinant-bio-reagents' : 'cdmo'}`
            },
            {
                '@type': 'ListItem',
                position: 4,
                name: product.name,
                item: `https://www.provisbiolabs.com/${product.slug}`
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
