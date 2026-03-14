"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Search, X, ArrowRight, FlaskConical, BookOpen, Building2, Sparkles } from "lucide-react";
import { products } from "../../lib/data/products";
import blogsData from "../blogs/blogsData.json";

// -------------------------------------------------------------------
// SEARCH INDEX: a flat list of all searchable items across the site
// -------------------------------------------------------------------
interface SearchItem {
    type: "product" | "blog" | "page";
    title: string;
    subtitle: string;
    href: string;
    keywords: string; // all searchable text combined
    icon: "product" | "blog" | "page";
}

const sitePages: SearchItem[] = [
    { type: "page", title: "About Provis Biolabs", subtitle: "Company overview, vision & mission", href: "/about", keywords: "about company vision mission values", icon: "page" },
    { type: "page", title: "CDMO Services", subtitle: "Contract development & manufacturing", href: "/cdmo", keywords: "cdmo contract manufacturing development outsourcing", icon: "page" },

    { type: "page", title: "Science & Technology", subtitle: "Our R&D capabilities", href: "/science", keywords: "science technology research development innovation", icon: "page" },
    { type: "page", title: "Careers", subtitle: "Join the Provis Biolabs team", href: "/careers", keywords: "careers jobs hiring recruitment", icon: "page" },
    { type: "page", title: "Contact Us", subtitle: "Get in touch for business enquiries", href: "/contact", keywords: "contact business enquiry partner", icon: "page" },
    { type: "page", title: "News & Events", subtitle: "Corporate news and milestones", href: "/news-events", keywords: "news events press release milestones", icon: "page" },
    { type: "page", title: "Partners", subtitle: "Our global distribution partners", href: "/partners", keywords: "partners distributors global international", icon: "page" },
];

// Build product search items
const productItems: SearchItem[] = products.map(p => ({
    type: "product",
    title: p.name,
    subtitle: p.tagline || p.shortDescription || p.grade,
    href: `/${p.slug}`,
    keywords: [
        p.name, p.slug, p.casNumber || "", p.category, p.grade, p.tagline,
        p.shortDescription, p.description,
        ...(p.keyFeatures || []),
        ...(p.applications || []),
    ].filter(Boolean).join(" ").toLowerCase(),
    icon: "product",
}));

// Build blog search items
const blogItems: SearchItem[] = blogsData.map(b => ({
    type: "blog",
    title: b.title,
    subtitle: b.excerpt.substring(0, 80) + "...",
    href: `/blogs/${b.slug}`,
    keywords: [b.title, b.slug, b.category, b.excerpt].join(" ").toLowerCase(),
    icon: "blog",
}));

const ALL_ITEMS: SearchItem[] = [...productItems, ...blogItems, ...sitePages];

const iconMap = {
    product: <FlaskConical className="w-5 h-5" />,
    blog: <BookOpen className="w-5 h-5" />,
    page: <Building2 className="w-5 h-5" />,
};

const typeLabel = {
    product: "Product",
    blog: "Blog",
    page: "Page",
};

const typeColor = {
    product: "bg-[#FFF0E6] text-[#F26522]",
    blog: "bg-[#E0F2FE] text-[#0284C7]",
    page: "bg-[#F1F5F9] text-[#475569]",
};

// -------------------------------------------------------------------
// MAIN COMPONENT
// -------------------------------------------------------------------
export default function GlobalSearch() {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    const results = query.trim().length > 0
        ? ALL_ITEMS.filter(item => {
            const q = query.toLowerCase();
            return item.keywords.includes(q) || item.title.toLowerCase().includes(q);
        }).slice(0, 12)
        : [];

    // Group results by type
    const grouped = results.reduce<Record<string, SearchItem[]>>((acc, item) => {
        if (!acc[item.type]) acc[item.type] = [];
        acc[item.type].push(item);
        return acc;
    }, {});

    const openSearch = useCallback(() => {
        setOpen(true);
        setQuery("");
        setTimeout(() => inputRef.current?.focus(), 50);
    }, []);

    const closeSearch = useCallback(() => {
        setOpen(false);
        setQuery("");
    }, []);

    // Keyboard shortcut: Ctrl+K or Cmd+K
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === "k") {
                e.preventDefault();
                openSearch();
            }
            if (e.key === "Escape") closeSearch();
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [openSearch, closeSearch]);

    // Disable body scroll when open
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "unset";
    }, [open]);

    return (
        <>
            {/* Trigger Button (used by Navbar) */}
            <button
                onClick={openSearch}
                className="flex items-center gap-2 px-3 py-2 rounded-xl text-[#94a3b8] hover:text-[#F26522] hover:bg-[#f8fafc] transition-colors text-sm"
                aria-label="Search"
            
            >
                <Search className="w-[18px] h-[18px]" />
                <span className="hidden xl:inline text-[13px] font-sans text-[#94a3b8]">Search</span>
                {/* <kbd className="hidden xl:inline text-[11px] font-mono text-[#cbd5e1] bg-[#f1f5f9] px-1.5 py-0.5 rounded border border-[#e2e8f0]">⌘K</kbd> */}
            </button>

            {/* Full-Screen Search Overlay */}
            <AnimatePresence>
                {open && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            onClick={closeSearch}
                            className="fixed inset-0 bg-[#0F2557]/50 backdrop-blur-sm z-[2000]"
                        />

                        {/* Dialog */}
                        <div className="fixed inset-0 z-[2001] flex items-start justify-center pt-[12vh] px-4 pointer-events-none">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: -10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                                transition={{ type: "spring", damping: 25, stiffness: 400 }}
                                className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[70vh] flex flex-col overflow-hidden pointer-events-auto border border-[#E2E8F0]"
                            >
                                {/* Input */}
                                <div className="flex items-center gap-3 px-6 py-5 border-b border-[#F1F5F9]">
                                    <Search className="w-5 h-5 text-[#94A3B8] flex-shrink-0" />
                                    <input
                                        ref={inputRef}
                                        type="text"
                                        value={query}
                                        onChange={e => setQuery(e.target.value)}
                                        placeholder="Search products, CAS numbers, blogs, pages..."
                                        className="flex-1 bg-transparent border-none outline-none font-outfit text-base text-[#0f172a] placeholder:text-[#94A3B8]"
                                        autoFocus
                                    />
                                    <button onClick={closeSearch}
                                        className="p-1.5 text-[#94A3B8] hover:text-[#475569] hover:bg-[#F1F5F9] rounded-lg transition-colors">
                                        <X className="w-4 h-4" />
                                    </button>
                                </div>

                                {/* Results */}
                                <div className="overflow-y-auto flex-1 p-2">
                                    {query.trim().length === 0 ? (
                                        <div className="text-center py-12 px-6">
                                            <Sparkles className="w-10 h-10 text-[#F26522]/30 mx-auto mb-4" />
                                            <p className="text-[#94A3B8] text-sm font-medium">
                                                Search by product name, CAS number, blog title, or page...
                                            </p>
                                            <p className="text-[#CBD5E1] text-xs mt-2">
                                                Try &quot;Trypsin&quot;, &quot;9015-68-3&quot;, &quot;Streptavidin&quot;, or &quot;CDMO&quot;
                                            </p>
                                        </div>
                                    ) : results.length === 0 ? (
                                        <div className="text-center py-12 px-6">
                                            <p className="text-[#94A3B8] text-sm">No results found for &quot;{query}&quot;</p>
                                            <p className="text-[#CBD5E1] text-xs mt-2">Try a different keyword or CAS number</p>
                                        </div>
                                    ) : (
                                        <div className="space-y-1">
                                            {(["product", "blog", "page"] as const).map(type => {
                                                const items = grouped[type];
                                                if (!items || items.length === 0) return null;
                                                return (
                                                    <div key={type}>
                                                        <div className="px-4 pt-3 pb-1.5">
                                                            <span className="text-[10px] font-bold uppercase tracking-widest text-[#94A3B8]">
                                                                {type === "product" ? "Products" : type === "blog" ? "Blogs" : "Pages"}
                                                            </span>
                                                        </div>
                                                        {items.map(item => (
                                                            <Link key={item.href} href={item.href} onClick={closeSearch}
                                                                className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-[#F8FAFC] transition-colors group">
                                                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${typeColor[item.icon]} flex-shrink-0`}>
                                                                    {iconMap[item.icon]}
                                                                </div>
                                                                <div className="flex-1 min-w-0">
                                                                    <p className="text-sm font-bold text-[#1E3A8A] group-hover:text-[#F26522] transition-colors truncate">
                                                                        {item.title}
                                                                    </p>
                                                                    <p className="text-xs text-[#94A3B8] truncate">{item.subtitle}</p>
                                                                </div>
                                                                <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-lg ${typeColor[item.icon]} flex-shrink-0`}>
                                                                    {typeLabel[item.icon]}
                                                                </span>
                                                                <ArrowRight className="w-4 h-4 text-[#CBD5E1] group-hover:text-[#F26522] transition-colors flex-shrink-0" />
                                                            </Link>
                                                        ))}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>

                                {/* Footer */}
                                <div className="px-6 py-3 border-t border-[#F1F5F9] bg-[#F8FAFC] flex items-center justify-between text-[11px] text-[#94A3B8]">
                                    <span>Press <kbd className="font-mono bg-white px-1.5 py-0.5 rounded border border-[#e2e8f0] text-[10px]">ESC</kbd> to close</span>
                                    <span>{results.length} result{results.length !== 1 ? "s" : ""}</span>
                                </div>
                            </motion.div>
                        </div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
