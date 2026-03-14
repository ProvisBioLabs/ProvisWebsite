"use client";
// Force re-scan for module resolution


import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, CalendarDays, Clock, Tag, Share2 } from "lucide-react";

export default function BlogPostContent({ blog }: { blog: any }) {
    return (
        <article className="bg-[#FAFAFA] font-outfit min-h-screen pb-32">
            {/* HERO */}
            <div className="relative h-[50vh] min-h-[360px] w-full bg-[#0F2557] flex items-end">
                <div className="absolute inset-0 z-0">
                    <img src={blog.image} alt={blog.title}
                        className="w-full h-full object-cover opacity-50" />
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
                        <button onClick={() => { if (typeof navigator !== "undefined") navigator.clipboard.writeText(window.location.href); }}
                            className="inline-flex items-center gap-2 text-[#94A3B8] hover:text-[#F26522] text-sm font-semibold transition-colors">
                            <Share2 className="w-4 h-4" /> Share
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

                    {/* Bottom Navigation */}
                    <div className="mt-14 pt-8 border-t border-[#F1F5F9] flex items-center justify-between">
                        <Link href="/blogs"
                            className="inline-flex items-center gap-2 text-[#F26522] font-bold text-sm uppercase tracking-widest hover:gap-3 transition-all">
                            <ArrowLeft className="w-4 h-4" /> Back to Blogs
                        </Link>
                        <span className="text-[#CBD5E1] text-sm font-medium">Provis Biolabs © 2024</span>
                    </div>
                </motion.div>
            </div>
        </article>
    );
}
