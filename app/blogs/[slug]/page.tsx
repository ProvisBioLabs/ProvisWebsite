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
            canonical: `https://provisbiolabs.com/blogs/${blog.slug}`,
            languages: {
                'en-US': `https://provisbiolabs.com/blogs/${blog.slug}`,
                'en-GB': `https://provisbiolabs.com/blogs/${blog.slug}`,
                'en-SG': `https://provisbiolabs.com/blogs/${blog.slug}`,
                'en-KR': `https://provisbiolabs.com/blogs/${blog.slug}`,
                'en-NL': `https://provisbiolabs.com/blogs/${blog.slug}`,
                'en-FR': `https://provisbiolabs.com/blogs/${blog.slug}`,
                'en-CA': `https://provisbiolabs.com/blogs/${blog.slug}`,
                'x-default': `https://provisbiolabs.com/blogs/${blog.slug}`,
            }
        },
        openGraph: {
            title: blog.title,
            description: blog.excerpt,
            images: [blog.image.startsWith('http') ? blog.image : `https://provisbiolabs.com${blog.image}`],
            type: 'article',
            publishedTime: blog.date,
            authors: ['Provis Biolabs'],
        },
        twitter: {
            card: 'summary_large_image',
            title: blog.title,
            description: blog.excerpt,
            images: [blog.image.startsWith('http') ? blog.image : `https://provisbiolabs.com${blog.image}`],
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

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: blog.title,
        description: blog.excerpt,
        image: `https://provisbiolabs.com${blog.image}`,
        datePublished: blog.date,
        author: {
            '@type': 'Organization',
            name: 'Provis Biolabs',
            url: 'https://provisbiolabs.com'
        },
        publisher: {
            '@type': 'Organization',
            name: 'Provis Biolabs',
            logo: {
                '@type': 'ImageObject',
                url: 'https://provisbiolabs.com/logo.webp'
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
                item: 'https://provisbiolabs.com'
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'News & Insights',
                item: 'https://provisbiolabs.com/blogs'
            },
            {
                '@type': 'ListItem',
                position: 3,
                name: blog.title,
                item: `https://provisbiolabs.com/blogs/${blog.slug}`
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
