import { products, getProductBySlug, Product } from "../../../lib/data/usProducts";
import { notFound } from "next/navigation";
import USNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductViewUS from "./ProductViewUS";
import type { Metadata } from "next";
import Script from "next/script";

const BASE_URL = "https://www.provisbiolabs.com";

export async function generateStaticParams() {
    return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const product = getProductBySlug(slug);
    if (!product) return {};

    const absUrl = `${BASE_URL}/us/${product.slug}`;
    const imageUrl = product.image.startsWith("http")
        ? product.image
        : `${BASE_URL}${product.image}`;

    const keywords = [
        product.name,
        product.grade,
        product.casNumber ? `CAS ${product.casNumber}` : null,
        "buy " + product.name,
        product.name + " supplier USA",
        product.name + " manufacturer",
        product.name + " price",
        product.name + " GMP grade",
        ...( product.applications?.slice(0, 4) ?? []),
        "Provis Biolabs",
        "biopharmaceutical reagent",
        "recombinant enzyme",
    ].filter(Boolean).join(", ");

    return {
        metadataBase: new URL(BASE_URL),
        title: product.seoTitle ?? `${product.name} | Buy ${product.grade} | Provis Biolabs USA`,
        description: product.seoDescription ??
            `Buy ${product.name} (${product.casNumber ? "CAS " + product.casNumber + ", " : ""}${product.grade}) from Provis Biolabs USA. ${product.shortDescription}. Request a quote today.`,
        keywords,
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },
        alternates: {
            canonical: absUrl,
            languages: {
                "en-US": absUrl,
                "en-IN": `${BASE_URL}/${product.slug}`,
                "x-default": `${BASE_URL}/${product.slug}`,
            },
        },
        openGraph: {
            type: "website",
            url: absUrl,
            siteName: "Provis Biolabs USA",
            locale: "en_US",
            title: product.seoTitle ?? `${product.name} | ${product.grade} | Provis Biolabs USA`,
            description: product.seoDescription ?? `${product.name} (${product.casNumber ? "CAS " + product.casNumber : ""}) — ${product.shortDescription}. ${product.grade}. Order from Provis Biolabs USA.`,
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: `${product.name} — Provis Biolabs USA`,
                    type: "image/webp",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            site: "@ProvisBiolabs",
            creator: "@ProvisBiolabs",
            title: product.seoTitle ?? `${product.name} | Provis Biolabs USA`,
            description: product.seoDescription ?? product.shortDescription,
            images: [imageUrl],
        },
        other: {
            "product:availability": "in stock",
            "product:brand": "Provis Biolabs",
            ...(product.casNumber ? { "product:sku": product.casNumber } : {}),
        },
    };
}

/** Build JSON-LD structured data for the product */
function buildStructuredData(product: Product) {
    const absUrl = `${BASE_URL}/us/${product.slug}`;
    const imageUrl = product.image.startsWith("http")
        ? product.image
        : `${BASE_URL}${product.image}`;

    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "@id": absUrl,
        name: product.name,
        description: product.overview ?? product.description,
        image: [imageUrl, ...(product.cleavageImages?.map(img =>
            img.startsWith("http") ? img : `${BASE_URL}${img}`) ?? [])],
        url: absUrl,
        sku: product.casNumber ?? product.id,
        mpn: product.casNumber,
        brand: {
            "@type": "Brand",
            name: "Provis Biolabs",
        },
        manufacturer: {
            "@type": "Organization",
            name: "Provis Biolabs",
            url: "https://www.provisbiolabs.com",
        },
        category: product.category === "api" ? "Pharmaceutical API" : "Biopharmaceutical Reagent",
        additionalProperty: [
            { "@type": "PropertyValue", name: "Grade", value: product.grade },
            ...(product.casNumber ? [{ "@type": "PropertyValue", name: "CAS Number", value: product.casNumber }] : []),
            ...(product.quickSpecs?.purity ? [{ "@type": "PropertyValue", name: "Purity", value: product.quickSpecs.purity }] : []),
            ...(product.quickSpecs?.storage ? [{ "@type": "PropertyValue", name: "Storage", value: product.quickSpecs.storage }] : []),
            ...(product.quickSpecs?.activity ? [{ "@type": "PropertyValue", name: "Activity", value: product.quickSpecs.activity }] : []),
        ],
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: `${BASE_URL}/us`,
            },
            {
                "@type": "ListItem",
                position: 2,
                name: product.category === "api" ? "Bio-APIs" : "Bio-Reagents",
                item: product.category === "api"
                    ? `${BASE_URL}/us/products/bio-apis`
                    : `${BASE_URL}/us/products/recombinant-bio-reagents`,
            },
            {
                "@type": "ListItem",
                position: 3,
                name: product.name,
                item: absUrl,
            },
        ],
    };

    const schemas: object[] = [productSchema, breadcrumbSchema];

    if (product.faqs?.length) {
        const faqSchema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: product.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.answer,
                },
            })),
        };
        schemas.push(faqSchema);
    }

    return schemas;
}

export default async function USProductDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const product = getProductBySlug(slug);

    if (!product) notFound();

    const schemas = buildStructuredData(product);

    return (
        <>
            {/* JSON-LD Structured Data — visible to Googlebot */}
            {schemas.map((schema, i) => (
                <Script
                    key={i}
                    id={`jsonld-${i}`}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                    strategy="beforeInteractive"
                />
            ))}

            <main className="min-h-screen bg-white font-sans">
                <USNavbar />
                <ProductViewUS product={product} />
                <Footer />
            </main>
        </>
    );
}
