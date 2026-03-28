"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CalendarDays, Clock, Share2, ArrowRight, FlaskConical, Linkedin, Check } from "lucide-react";
import { products } from "@/lib/data/products";

export default function BlogPostContent({ blog }: { blog: any }) {
    const [copied, setCopied] = useState(false);
    const relatedProductData = blog.relatedProducts
        ? products.filter((p) => blog.relatedProducts.includes(p.slug))
        : [];

    const handleShare = async () => {
        const shareData = {
            title: blog.title,
            text: blog.excerpt,
            url: window.location.href,
        };

        try {
            if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
                await navigator.share(shareData);
            } else {
                await navigator.clipboard.writeText(window.location.href);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            }
        } catch (err) {
            // Fallback to clipboard if share fails or is cancelled
            if ((err as Error).name !== 'AbortError') {
                await navigator.clipboard.writeText(window.location.href);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            }
        }
    };

    return (
        <article className="bg-[#FAFAFA] font-outfit min-h-screen pb-32">
            {/* HERO */}
            <div className="relative h-[50vh] min-h-[360px] w-full bg-[#0F2557] flex items-end">
                <div className="absolute inset-0 z-0">
                    <Image src={blog.image} alt={blog.title}
                        fill priority
                        sizes="100vw"
                        className="object-cover opacity-50" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F2557] via-[#0F2557]/60 to-[#0F2557]/20" />
                </div>

                <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                        className="mb-5 flex flex-wrap items-center gap-3 text-white/80 font-semibold text-sm">
                        <span className="flex items-center gap-1.5">
                            <CalendarDays className="w-4 h-4" /> {blog.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Clock className="w-4 h-4" /> 5 min read
                        </span>
                    </motion.div>

                    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                        {blog.title}
                    </motion.h1>
                </div>
            </div>

            {/* CONTENT CARD */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                    className="bg-white rounded-3xl shadow-xl p-6 sm:p-10 lg:p-14 border border-[#E2E8F0]">

                    {/* Top Bar */}
                    <div className="flex items-center justify-between mb-10 pb-6 border-b border-[#F1F5F9]">
                        <Link href="/blogs"
                            className="inline-flex items-center gap-2 text-[#F26522] font-bold text-sm uppercase tracking-widest hover:gap-3 transition-all">
                            <ArrowLeft className="w-4 h-4" /> All Articles
                        </Link>
                        <button 
                            onClick={handleShare}
                            className="inline-flex items-center gap-2 text-[#94A3B8] hover:text-[#F26522] text-sm font-semibold transition-all relative group"
                        >
                            <AnimatePresence mode="wait">
                                {copied ? (
                                    <motion.span
                                        key="copied"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="flex items-center gap-2 text-[#10B981]"
                                    >
                                        <Check className="w-4 h-4" /> Copied!
                                    </motion.span>
                                ) : (
                                    <motion.span
                                        key="share"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="flex items-center gap-2 group-hover:scale-105 transition-transform"
                                    >
                                        <Share2 className="w-4 h-4" /> Share
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </button>
                    </div>

                    {/* PROSE WRAPPER */}
                    <div
                        className="prose prose-lg prose-blue max-w-none text-[#475569]
                        prose-headings:text-[#1E3A8A] prose-headings:font-bold
                        prose-h1:text-3xl prose-h1:mt-10 prose-h1:mb-6
                        prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-5
                        prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
                        prose-p:leading-relaxed prose-p:mb-8
                        prose-strong:text-[#1E3A8A]
                        prose-a:text-[#F26522] prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
                        prose-img:rounded-2xl prose-img:shadow-lg prose-img:my-8 prose-img:mx-auto
                        prose-ul:list-disc prose-ul:pl-6 prose-ul:my-5
                        prose-ol:list-decimal prose-ol:pl-6 prose-ol:my-5
                        prose-li:my-1.5
                        prose-table:border prose-table:border-[#E2E8F0] prose-table:rounded-xl prose-table:overflow-hidden
                        prose-th:bg-[#F8FAFC] prose-th:text-[#1E3A8A] prose-th:font-bold prose-th:p-3
                        prose-td:p-3 prose-td:border-t prose-td:border-[#E2E8F0]
                        prose-blockquote:border-l-[#F26522] prose-blockquote:bg-[#FFF7F2] prose-blockquote:p-4 prose-blockquote:rounded-r-xl
                        "
                        dangerouslySetInnerHTML={{ __html: blog.content }}
                    />

                    {/* LinkedIn CTA */}
                    <div className="mt-12 bg-gradient-to-r from-[#EFF6FF] to-[#F8FAFC] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#BFDBFE]">
                        <div className="text-center sm:text-left max-w-lg">
                            <h3 className="text-xl font-bold text-[#1E3A8A] mb-2 flex items-center justify-center sm:justify-start gap-2">
                                <Linkedin className="w-5 h-5 text-[#0077B5]" /> Stay Updated
                            </h3>
                            <p className="text-[#475569] text-sm leading-relaxed">
                                Follow Provis Biolabs on LinkedIn for the latest biotechnology insights, product announcements and company news.
                            </p>
                        </div>
                        <a href="https://www.linkedin.com/company/provis-biolabs-private-limited/" target="_blank" rel="noopener noreferrer"
                            className="flex-shrink-0 inline-flex items-center gap-2 bg-[#0077B5] hover:bg-[#006097] text-white px-6 py-3 rounded-xl font-bold text-sm transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
                            Follow on LinkedIn
                        </a>
                    </div>

                    {/* Bottom Navigation */}
                    <div className="mt-14 pt-8 border-t border-[#F1F5F9] flex items-center justify-between">
                        <Link href="/blogs"
                            className="inline-flex items-center gap-2 text-[#F26522] font-bold text-sm uppercase tracking-widest hover:gap-3 transition-all">
                            <ArrowLeft className="w-4 h-4" /> Back to Blogs
                        </Link>
                        <span className="text-[#CBD5E1] text-sm font-medium">Provis Biolabs © 2025</span>
                    </div>
                </motion.div>
            </div>

            {/* RELATED PRODUCTS */}
            {relatedProductData.length > 0 && (
                <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-9 h-9 rounded-xl bg-[#FFF5F0] flex items-center justify-center flex-shrink-0">
                                <FlaskConical className="w-5 h-5 text-[#F26522]" />
                            </div>
                            <div>
                                <p className="text-[11px] font-bold tracking-widest uppercase text-[#94A3B8]">Explore</p>
                                <h2 className="text-xl font-black text-[#1E3A8A]">Related Products</h2>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {relatedProductData.map((product) => (
                                <Link
                                    key={product.slug}
                                    href={`/${product.slug}`}
                                    className="group bg-white rounded-2xl border border-[#E2E8F0] p-5 hover:border-[#F26522]/40 hover:shadow-[0_8px_30px_rgba(242,101,34,0.1)] transition-all duration-300 flex flex-col gap-3"
                                >
                                    <div className="w-full h-24 rounded-xl overflow-hidden bg-[#F8FAFC] relative">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            loading="lazy"
                                            sizes="(max-width: 640px) 33vw, 20vw"
                                            className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-1 flex-1">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#F26522]">
                                            {product.grade}
                                        </span>
                                        <h3 className="text-sm font-bold text-[#1E3A8A] group-hover:text-[#F26522] transition-colors leading-tight">
                                            {product.name}
                                        </h3>
                                        <p className="text-xs text-[#64748B] leading-relaxed line-clamp-2 mt-0.5">
                                            {product.shortDescription}
                                        </p>
                                    </div>
                                    <span className="inline-flex items-center gap-1 text-xs font-bold text-[#F26522] group-hover:gap-2 transition-all">
                                        View Product <ArrowRight className="w-3 h-3" />
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                </section>
            )}
        </article>
    );
}
