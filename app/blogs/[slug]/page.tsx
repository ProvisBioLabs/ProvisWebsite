import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import blogsData from "../blogsData.json";
import BlogPostContent from "@/app/blogs/[slug]/BlogPostContent"; // Re-validated absolute import


export function generateStaticParams() {
    return blogsData.map((blog) => ({
        slug: blog.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const blog = blogsData.find((b) => b.slug === slug);

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
    const blog = blogsData.find((b) => b.slug === slug);

    if (!blog) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA]">
                <h1 className="text-3xl font-bold text-[#1E3A8A]">Blog post not found.</h1>
            </div>
        );
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
