"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { products as allProducts, Product } from "../../lib/data/products";

/* ─── DATA MAPPING ─────────────────────────────────────────── */
const UI_CATEGORIES = [
    {
        id: "BIO-APIS",
        label: "Bio-APIs",
        description: "Pharmaceutical-grade biological active pharmaceutical ingredients for life-saving therapies.",
    },
    {
        id: "RECOMBINANT BIO-REAGENTS",
        label: "Recombinant Bio-Reagents",
        description: "GMP-grade recombinant proteins and enzymes for bioprocessing, cell culture, and biomanufacturing.",
    }
];

/* ─── Product Card ──────────────────────────────────────────── */
function ProductCard({
    product,
    index,
}: {
    product: Product;
    index: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.4, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="group relative bg-[#FAFAFA] border border-[#E2E8F0] rounded-2xl p-8 hover:shadow-[0_20px_50px_rgba(30,58,138,0.12)] hover:border-[#F26522]/40 transition-all duration-500 flex flex-col h-full"
        >
            {/* Clickable Overlay */}
            <Link href={product.href} className="absolute inset-0 z-10 rounded-2xl">
                <span className="sr-only">View {product.name} details</span>
            </Link>

            {/* Image Placeholder / Product Image */}
            <div className="w-full h-52 rounded-xl flex items-center justify-center mb-6 relative overflow-hidden border border-[#E2E8F0] group-hover:border-[#F26522]/20 transition-colors z-0">
                <img
                    src={product.image}
                    alt={product.name}
                    className={`w-full h-full transition-transform duration-700 ${
                        product.image.startsWith('/')
                            ? 'object-contain p-4 group-hover:scale-105'
                            : 'object-cover group-hover:scale-110 opacity-80 group-hover:opacity-100'
                    }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent" />
            </div>

            {/* Tag + Grade */}
            <div className="flex items-center justify-between gap-2 flex-wrap mb-4 relative z-0">
                <span className="inline-block px-2.5 py-1 bg-[#FFF0E6] text-[#F26522] text-[10px] font-bold tracking-widest uppercase rounded">
                    {product.category === 'api' ? 'BULK API' : product.category === 'reagent' ? 'REAGENT' : 'CDMO'}
                </span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-[#EFF6FF] text-[#1E3A8A] uppercase tracking-wide">
                    {product.grade}
                </span>
            </div>

            {/* Name */}
            <h3 className="text-xl font-bold text-[#1E3A8A] mb-1.5 leading-tight group-hover:text-[#F26522] transition-colors relative z-0">{product.name}</h3>
            {product.casNumber && (
                <p className="text-[11px] text-[#94a3b8] font-mono mb-2 relative z-0">CAS: {product.casNumber}</p>
            )}

            {/* Description */}
            <p className="text-[#64748B] text-sm leading-relaxed font-medium mb-5 flex-grow relative z-0">
                {product.shortDescription}
            </p>

            {/* Highlights */}
            {product.keyFeatures && (
                <ul className="flex flex-col gap-1 mb-6 relative z-0">
                    {product.keyFeatures.slice(0, 3).map((h) => (
                        <li key={h} className="flex items-center gap-2 text-xs text-[#475569]">
                            <span className="text-[#F26522] font-bold">✓</span> {h}
                        </li>
                    ))}
                </ul>
            )}

            {/* CTA */}
            <div className="mt-auto flex items-center gap-4 relative z-20">
                <Link
                    href="/contact"
                    className="inline-flex items-center text-sm font-bold text-[#F26522] group/link hover:underline"
                >
                    Enquire
                    <span className="ml-1 group-hover/link:translate-x-1 transition-transform">→</span>
                </Link>
                <Link
                    href={product.href}
                    className="text-sm font-bold text-[#1E3A8A]/50 group-hover:text-[#1E3A8A] transition-colors hover:underline"
                >
                    View Specs →
                </Link>
            </div>
        </motion.div>
    );
}

/* ─── Main Catalog ──────────────────────────────────────────── */
export default function ProductsCatalog() {
    const [active, setActive] = useState("BIO-APIS");
    const [searchQuery, setSearchQuery] = useState("");

    // Categorize products for the UI
    const categorizedProducts = useMemo(() => {
        return allProducts.filter(p => {
            if (active === "BIO-APIS") {
                return p.category === 'api' && p.slug !== 'biosimilars' && p.slug !== 'synthetic-peptides';
            }
            if (active === "RECOMBINANT BIO-REAGENTS") {
                return p.category === 'reagent';
            }
            if (active === "SYNTHETIC PEPTIDES") {
                return p.slug === 'synthetic-peptides';
            }
            if (active === "BIOSIMILARS") {
                return p.slug === 'biosimilars';
            }
            return false;
        });
    }, [active]);

    const activeCategoryInfo = UI_CATEGORIES.find(c => c.id === active)!;

    const filtered = useMemo(() => {
        if (!searchQuery.trim()) return categorizedProducts;
        const q = searchQuery.toLowerCase();
        return categorizedProducts.filter(p =>
            p.name.toLowerCase().includes(q) ||
            p.shortDescription.toLowerCase().includes(q) ||
            p.tagline.toLowerCase().includes(q)
        );
    }, [categorizedProducts, searchQuery]);

    return (
        <>
            {/* ── Hero ─────────────────────────── */}
            <section className="relative overflow-hidden pt-36 pb-20 bg-[#F8FAFC]">
                {/* Subtle grid background */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage:
                            "linear-gradient(#1E3A8A 1px,transparent 1px),linear-gradient(90deg,#1E3A8A 1px,transparent 1px)",
                        backgroundSize: "40px 40px",
                    }}
                />
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F26522] to-[#FF8C55]" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-sm font-bold tracking-widest uppercase text-[#F26522] mb-4"
                    >
                        Our Portfolio
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1E3A8A] mb-4 leading-tight"
                    >
                        Products that power
                        <br />
                        <span className="text-[#94A3B8]">global biopharma</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-[#475569] max-w-2xl leading-relaxed mb-10"
                    >
                        Animal origin-free. WHO-GMP manufactured. Trusted by pharmaceutical companies
                        across 20+ countries.
                    </motion.p>

                    {/* Stats row */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-wrap gap-8 mb-10"
                    >
                        {[
                            { value: "20+", label: "Countries Served" },
                            { value: allProducts.length.toString() + "+", label: "Products" },
                            { value: "WHO-GMP", label: "Certified" },
                            { value: "AOF", label: "Animal Origin-Free" },
                        ].map((stat) => (
                            <div key={stat.label}>
                                <div className="text-2xl font-bold text-[#1E3A8A]">{stat.value}</div>
                                <div className="text-xs font-semibold text-[#94A3B8] uppercase tracking-widest mt-0.5">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    {/* Search */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex items-center gap-3 bg-white rounded-xl px-4 py-3.5 border border-[#E2E8F0] max-w-lg shadow-sm focus-within:border-[#F26522]/40 focus-within:shadow-[0_0_0_3px_rgba(242,101,34,0.08)] transition-all"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2">
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                        <input
                            type="search"
                            placeholder="Search products, applications…"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="flex-1 bg-transparent border-none outline-none text-sm text-[#0f172a] placeholder:text-[#94a3b8] font-medium"
                        />
                    </motion.div>
                </div>
            </section>

            {/* ── Category Tabs ──────────────── */}
            <div className="sticky top-0 z-40 bg-white border-b border-[#E2E8F0] shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex overflow-x-auto gap-2 py-3 scrollbar-none">
                        {UI_CATEGORIES.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => {
                                    setActive(cat.id);
                                    setSearchQuery("");
                                }}
                                className={`flex-shrink-0 flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 whitespace-nowrap ${active === cat.id
                                    ? "bg-[#F26522] text-white shadow-[0_4px_14px_rgba(242,101,34,0.3)]"
                                    : "bg-[#F8FAFC] text-[#64748B] hover:bg-[#F1F5F9]"
                                    }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Products Grid ─────────────── */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Category description */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active + "-header"}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mb-10 flex flex-col sm:flex-row sm:items-center gap-4"
                        >
                            <div>
                                <p className="text-sm font-semibold text-[#475569]">
                                    {activeCategoryInfo.description}
                                </p>
                            </div>
                            <span className="sm:ml-auto flex-shrink-0 text-xs font-bold px-3 py-1.5 rounded-full bg-[#FFF0E6] text-[#F26522]">
                                {filtered.length} product{filtered.length !== 1 ? "s" : ""}
                            </span>
                        </motion.div>
                    </AnimatePresence>

                    {/* Grid */}
                    <AnimatePresence mode="wait">
                        {filtered.length > 0 ? (
                            <motion.div
                                key={active}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.25 }}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                            >
                                {filtered.map((product, i) => (
                                    <ProductCard key={product.id} product={product} index={i} />
                                ))}
                            </motion.div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center py-20 text-[#94A3B8]"
                            >
                                <p className="font-bold text-lg text-[#1E3A8A]">No products found</p>
                                <p className="text-sm mt-1">Try adjusting your search query</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </section>

            {/* ── CTA Strip ─────────────────── */}
            <section className="py-20 bg-[#F8FAFC] border-t border-[#E2E8F0]">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <p className="text-sm font-bold tracking-widest uppercase text-[#F26522] mb-4">
                            Can&apos;t find what you&apos;re looking for?
                        </p>
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A8A] mb-4 leading-tight">
                            Custom manufacturing via our CDMO platform
                        </h2>
                        <p className="text-[#475569] text-base mb-10 max-w-xl mx-auto leading-relaxed">
                            Need a custom biologic, scale-up support, or analytical services? Our CDMO team is
                            ready to partner at every stage of development.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="px-8 py-4 rounded-xl text-sm font-bold text-white bg-[#F26522] hover:bg-[#d95a1e] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(242,101,34,0.3)]"
                            >
                                Contact Our Team →
                            </Link>
                            <Link
                                href="/cdmo"
                                className="px-8 py-4 rounded-xl text-sm font-bold border-2 border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white transition-all duration-300"
                            >
                                Explore CDMO Services
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
