import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import blogsData from "../blogsData.json";
import BlogPostContent from "@/app/blogs/[slug]/BlogPostContent"; // Re-validated absolute import
import { permanentRedirect } from "next/navigation";

// Helper function to normalize strings to kebab-case
function normalizeSlug(s: string): string {
    return s
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
}

// Helper function to convert human-readable dates (e.g. "March 2026") to ISO 8601 format
function getIsoDate(dateStr: string): string {
    const months: { [key: string]: string } = {
        january: '01', jan: '01',
        february: '02', feb: '02',
        march: '03', mar: '03',
        april: '04', apr: '04',
        may: '05',
        june: '06', jun: '06',
        july: '07', jul: '07',
        august: '08', aug: '08',
        september: '09', sep: '09',
        october: '10', oct: '10',
        november: '11', nov: '11',
        december: '12', dec: '12'
    };
    
    try {
        const parts = dateStr.trim().toLowerCase().split(/\s+/);
        if (parts.length === 2) {
            const monthName = parts[0];
            const year = parts[1];
            const monthDigit = months[monthName] || '01';
            return `${year}-${monthDigit}-01T00:00:00Z`;
        }
    } catch (e) {
        // Fallback
    }
    return new Date().toISOString();
}

// Find a blog post by matching slug or fallback methods (normalized slug, title, related products)
function findBlogBySlug(slug: string) {
    if (!slug) return null;

    // 1. Exact match on slug
    let blog = blogsData.find((b) => b.slug === slug);
    if (blog) return blog;

    // 2. Decode URL just in case, and try exact match
    try {
        const decoded = decodeURIComponent(slug);
        blog = blogsData.find((b) => b.slug === decoded);
        if (blog) return blog;
    } catch (e) {
        // Ignore URI malformed errors
    }

    // 3. Match by normalized slug (kebab-case)
    const normalizedInput = normalizeSlug(slug);
    blog = blogsData.find((b) => normalizeSlug(b.slug) === normalizedInput);
    if (blog) return blog;

    // 4. Match by normalized title (kebab-case)
    blog = blogsData.find((b) => normalizeSlug(b.title) === normalizedInput);
    if (blog) return blog;

    // 5. Match by related product slug
    blog = blogsData.find((b) => b.relatedProducts?.some(p => normalizeSlug(p) === normalizedInput));
    if (blog) return blog;

    // 6. Match by substring / prefix of slug or title
    blog = blogsData.find((b) => 
        normalizeSlug(b.slug).includes(normalizedInput) || 
        normalizeSlug(b.title).includes(normalizedInput)
    );
    return blog || null;
}

export function generateStaticParams() {
    return blogsData.map((blog) => ({
        slug: blog.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const blog = findBlogBySlug(slug);

    if (!blog) {
        return {
            title: "Blog Not Found | Provis Biolabs",
        };
    }

    return {
        title: `${blog.title} | Provis Biolabs Insights`,
        description: blog.excerpt,
        alternates: {
            canonical: `https://www.provisbiolabs.com/blogs/${blog.slug}`,
            languages: {
                'en-US': `https://www.provisbiolabs.com/blogs/${blog.slug}`,
                'en-GB': `https://www.provisbiolabs.com/blogs/${blog.slug}`,
                'en-SG': `https://www.provisbiolabs.com/blogs/${blog.slug}`,
                'en-KR': `https://www.provisbiolabs.com/blogs/${blog.slug}`,
                'en-NL': `https://www.provisbiolabs.com/blogs/${blog.slug}`,
                'en-FR': `https://www.provisbiolabs.com/blogs/${blog.slug}`,
                'en-CA': `https://www.provisbiolabs.com/blogs/${blog.slug}`,
                'x-default': `https://www.provisbiolabs.com/blogs/${blog.slug}`,
            }
        },
        openGraph: {
            title: blog.title,
            description: blog.excerpt,
            images: [blog.image.startsWith('http') ? blog.image : `https://www.provisbiolabs.com${blog.image}`],
            type: 'article',
            publishedTime: getIsoDate(blog.date),
            authors: ['Provis Biolabs'],
        },
        twitter: {
            card: 'summary_large_image',
            title: blog.title,
            description: blog.excerpt,
            images: [blog.image.startsWith('http') ? blog.image : `https://www.provisbiolabs.com${blog.image}`],
        }
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const blog = findBlogBySlug(slug);

    if (!blog) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA]">
                <h1 className="text-3xl font-bold text-[#1E3A8A]">Blog post not found.</h1>
            </div>
        );
    }

    // If requested URL slug doesn't match the canonical clean slug, redirect permanently
    if (slug !== blog.slug) {
        permanentRedirect(`/blogs/${blog.slug}`);
    }

    const isoDate = getIsoDate(blog.date);
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: blog.title,
        description: blog.excerpt,
        image: `https://www.provisbiolabs.com${blog.image}`,
        datePublished: isoDate,
        dateModified: isoDate,
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://www.provisbiolabs.com/blogs/${blog.slug}`
        },
        author: {
            '@type': 'Organization',
            name: 'Provis Biolabs',
            url: 'https://www.provisbiolabs.com'
        },
        publisher: {
            '@type': 'Organization',
            name: 'Provis Biolabs',
            logo: {
                '@type': 'ImageObject',
                url: 'https://www.provisbiolabs.com/logo.webp'
            }
        }
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
                name: 'News & Insights',
                item: 'https://www.provisbiolabs.com/blogs'
            },
            {
                '@type': 'ListItem',
                position: 3,
                name: blog.title,
                item: `https://www.provisbiolabs.com/blogs/${blog.slug}`
            }
        ]
    };

    return (
        <main className="min-h-screen flex flex-col pt-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <Navbar />
            <div className="flex-grow">
                <BlogPostContent blog={blog} />
            </div>
            <Footer />
        </main>
    );
}
