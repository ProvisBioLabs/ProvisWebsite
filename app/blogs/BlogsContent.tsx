"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, Clock, Search, Sparkles, Linkedin } from "lucide-react";
import blogsData from "./blogsData.json";

const years = ["All", ...Array.from(new Set(blogsData.map(b => b.date.split(" ")[1] || "2024"))).sort().reverse()];

export default function BlogsContent() {
    const [activeYear, setActiveYear] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const filtered = blogsData.filter(blog => {
        const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesYear = activeYear === "All" || blog.date.includes(activeYear);
        return matchesSearch && matchesYear;
    });

    const featured = filtered[0];
    const rest = filtered.slice(1);

    return (
        <section className="bg-[#FAFAFA] font-outfit min-h-screen pb-32" suppressHydrationWarning>
            {/* HERO */}
            <div className="bg-gradient-to-br from-[#1E3A8A] to-[#0F2557] pt-24 pb-40 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
                <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[#F26522]/20 rounded-full blur-[120px]" />
                <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#F26522]/10 rounded-full blur-[100px]" />

                <div className="max-w-6xl mx-auto text-center relative z-10">
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md mb-6 border border-white/20">
                        <BookOpen className="w-7 h-7 text-[#F26522]" />
                    </motion.div>

                    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight leading-tight">
                        Biotechnology <span className="text-[#F26522]">Insights</span>
                    </motion.h1>

                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                        className="text-blue-200/80 text-base sm:text-lg max-w-xl mx-auto leading-relaxed font-light mb-10">
                        Expert articles on recombinant proteins, enzyme engineering, biomanufacturing & more.
                    </motion.p>

                    {/* Search */}
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                        className="max-w-md mx-auto relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
                        <input
                            type="text"
                            placeholder="Search articles..."
                            value={searchQuery}
                            onChange={e => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder:text-white/40 focus:outline-none focus:border-[#F26522]/50 focus:bg-white/15 transition-all text-sm"
                        />
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-20">

                {/* Years & Category Filter Pills */}
                <div className="flex flex-col items-center gap-4 mb-10">
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
                        className="flex flex-wrap gap-2 justify-center">
                        {years.map(year => (
                            <button key={year} onClick={() => setActiveYear(year)}
                                className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 border
                                    ${activeYear === year
                                        ? "bg-[#1E3A8A] text-white border-[#1E3A8A] shadow-lg shadow-[#1E3A8A]/20"
                                        : "bg-white text-[#475569] border-[#E2E8F0] hover:border-[#1E3A8A]/40 hover:text-[#1E3A8A]"}`}>
                                {year} {year !== "All" && "Blogs"}
                            </button>
                        ))}
                    </motion.div>
                </div>

                {/* FEATURED HERO CARD */}
                {featured && (
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-12">
                        <Link href={`/blogs/${featured.slug}`}
                            className="block bg-white rounded-3xl overflow-hidden border border-[#E2E8F0] shadow-sm hover:shadow-2xl hover:border-[#F26522]/30 transition-all duration-500 group">
                            <div className="grid md:grid-cols-2">
                                <div className="h-64 md:h-full min-h-[320px] relative overflow-hidden bg-[#1E3A8A]">
                                    <Image src={featured.image} alt={featured.title}
                                        fill loading="lazy"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
                                    <div className="absolute top-5 left-5 z-10">
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F26522] text-white text-xs font-bold uppercase tracking-wider shadow-lg">
                                            <Sparkles className="w-3.5 h-3.5" /> Featured
                                        </span>
                                    </div>
                                </div>
                                <div className="p-8 md:p-12 flex flex-col justify-center">
                                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#1E3A8A] mb-4 leading-tight group-hover:text-[#F26522] transition-colors">
                                        {featured.title}
                                    </h2>
                                    <p className="text-[#475569] leading-relaxed line-clamp-3 mb-6 text-base">
                                        {featured.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <span className="flex items-center gap-1.5 text-[#64748B] text-sm font-semibold">
                                            <Clock className="w-4 h-4 text-[#F26522]" /> 5 min read
                                        </span>
                                        <span className="inline-flex items-center text-[#F26522] font-bold text-sm uppercase tracking-widest gap-2 group-hover:gap-3 transition-all">
                                            Read Article <ArrowRight className="w-4 h-4" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                )}

                {/* REMAINING BLOGS GRID */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {rest.map((blog, index) => (
                        <motion.div key={blog.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}>
                            <Link href={`/blogs/${blog.slug}`}
                                className="block bg-white rounded-3xl border border-[#E2E8F0] shadow-sm hover:shadow-2xl hover:border-[#F26522]/30 transition-all duration-300 overflow-hidden group h-full flex flex-col">
                                {/* Image */}
                                <div className="h-52 relative overflow-hidden bg-[#1E3A8A]">
                                    <Image src={blog.image} alt={blog.title}
                                        fill loading="lazy"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                </div>

                                {/* Body */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center gap-2 text-[#94A3B8] text-xs font-semibold mb-3">
                                        <Clock className="w-3.5 h-3.5 text-[#F26522]" />
                                        <span>5 min read</span>
                                        <span>•</span>
                                        <span>{blog.date}</span>
                                    </div>

                                    <h3 className="text-lg font-bold text-[#1E3A8A] mb-3 leading-snug group-hover:text-[#F26522] transition-colors line-clamp-2">
                                        {blog.title}
                                    </h3>

                                    <p className="text-[#64748B] text-sm leading-relaxed line-clamp-2 mb-5">
                                        {blog.excerpt}
                                    </p>

                                    <div className="mt-auto pt-4 border-t border-[#F1F5F9] flex items-center text-[#F26522] font-bold text-xs uppercase tracking-widest gap-2 group-hover:gap-3 transition-all">
                                        Read Article <ArrowRight className="w-3.5 h-3.5" />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {filtered.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-[#94A3B8] text-lg">No articles found matching your search.</p>
                    </div>
                )}

                {/* LinkedIn Connect Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-24 mb-6 bg-gradient-to-br from-[#1E3A8A] to-[#0F2557] rounded-[2.5rem] p-10 sm:p-14 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px]" />
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#F26522]/20 rounded-full blur-[60px]" />
                    
                    <div className="relative z-10 max-w-xl text-center md:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md mb-6 border border-white/10">
                            <Linkedin className="w-4 h-4 text-[#47c1ff]" />
                            <span className="text-xs font-bold tracking-[0.2em] uppercase text-white">Join our Network</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 leading-tight">
                            Connect with us on <span className="text-[#47c1ff] drop-shadow-[0_0_15px_rgba(71,193,255,0.4)]">LinkedIn</span>
                        </h2>
                        <p className="text-blue-200/80 text-base leading-relaxed">
                            Be the first to know about our latest recombinant proteins, Bio-APIs, CDMO service updates and biomanufacturing insights.
                        </p>
                    </div>
                    
                    <div className="relative z-10 flex-shrink-0">
                        <a 
                            href="https://www.linkedin.com/company/provis-biolabs-private-limited/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-3 bg-white text-[#1E3A8A] hover:bg-[#F8FAFC] px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_30px_rgba(242,101,34,0.3)] hover:-translate-y-1 group"
                        >
                            <Linkedin className="w-5 h-5 text-[#0077b5]" />
                            Follow Provis Biolabs
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
