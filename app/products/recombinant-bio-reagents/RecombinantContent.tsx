"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const fade = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
});

import { products as allProducts } from '../../../lib/data/products';

const reagentProducts = allProducts.filter(p => p.category === 'reagent');

export default function RecombinantContent() {
    return (
        <>
            {/* ── Hero ──────────────────────────── */}
            <section className="relative overflow-hidden pt-36 pb-20 bg-[#F8FAFC]">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F26522] to-[#FF8C55]" />
                <div
                    className="absolute inset-0 opacity-[0.025]"
                    style={{
                        backgroundImage: "linear-gradient(#1E3A8A 1px,transparent 1px),linear-gradient(90deg,#1E3A8A 1px,transparent 1px)",
                        backgroundSize: "40px 40px",
                    }}
                />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.p {...fade()} className="text-sm font-bold tracking-widest uppercase text-[#F26522] mb-3">Products</motion.p>
                    <motion.h1 {...fade(0.1)} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1E3A8A] leading-tight mb-4">
                        Recombinant Bio-Reagents
                    </motion.h1>
                    <motion.p {...fade(0.2)} className="text-base text-[#64748B] max-w-3xl leading-relaxed mb-6">
                        We deliver high-quality, <strong className="text-[#1E3A8A]">100% Animal Origin-Free (AOF)</strong> recombinant products manufactured in our state-of-the-art ISO, cGMP and FSSC 22000 certified facility. Designed for safety, lot-to-lot consistency, traceability, and superior efficacy.
                    </motion.p>
                    <motion.div {...fade(0.3)} className="flex flex-wrap gap-3 mb-8">
                        <Link href="/contact" className="px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-[#F26522] hover:bg-[#d95a1e] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(242,101,34,0.3)]">
                            Enquire Now →
                        </Link>
                        <Link href="/products" className="px-7 py-3.5 rounded-xl text-sm font-bold border-2 border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white transition-all duration-300">
                            All Products
                        </Link>
                    </motion.div>

                    {/* Key badges */}
                    <motion.div {...fade(0.4)} className="flex flex-wrap gap-3">
                        {["100% Animal Origin-Free", "WHO-GMP Manufactured", "ISO Certified", "FSSC 22000", "TSE/BSE Free"].map((b) => (
                            <span key={b} className="px-3 py-1.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#1E3A8A] text-xs font-bold">{b}</span>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ── Products Grid ─────────────────── */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div {...fade()} className="mb-12">
                        <p className="text-sm font-bold tracking-widest uppercase text-[#F26522] mb-3">Our Products</p>
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A8A]">Recombinant Bio-Reagent Portfolio</h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                        {reagentProducts.map((p, i) => (
                            <motion.div
                                key={p.id}
                                {...fade(i * 0.06)}
                                className="bg-[#FAFAFA] border border-[#E2E8F0] rounded-2xl hover:shadow-[0_12px_40px_rgba(30,58,138,0.08)] hover:border-[#F26522]/30 transition-all duration-500 group flex flex-col overflow-hidden"
                            >
                                <Link href={p.href} className="p-6 flex flex-col h-full cursor-pointer">
                                    {/* Image placeholder */}
                                    <div className="w-full h-36 rounded-xl  mb-5 border border-[#E2E8F0] group-hover:border-[#F26522]/20 transition-colors relative overflow-hidden shrink-0">
                                        <img
                                            src={p.image}
                                            alt={p.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                    <div className="flex flex-wrap gap-1.5 mb-3">
                                        <span className="inline-block px-2 py-0.5 bg-[#FFF0E6] text-[#F26522] text-[9px] font-bold tracking-widest uppercase rounded">
                                            Reagent
                                        </span>
                                        {p.aof && (
                                            <span className="inline-block px-2 py-0.5 bg-green-50 text-green-600 text-[9px] font-bold tracking-widest uppercase rounded">
                                                AOF
                                            </span>
                                        )}
                                    </div>
                                    <h3 className="font-bold text-[#1E3A8A] text-sm mb-2 leading-tight group-hover:text-[#F26522] transition-colors flex items-center h-6">
                                        {p.slug === 'pngase-f-flash' ? (
                                            <img 
                                                src="/pngase f flash.png" 
                                                alt="PNGase F Flash™" 
                                                className="h-full w-auto object-contain" 
                                            />
                                        ) : (
                                            p.name
                                        )}
                                    </h3>
                                    <p className="text-[#64748B] text-xs leading-relaxed mb-4 flex-grow">{p.shortDescription}</p>
                                    <div className="mt-auto inline-flex items-center text-xs font-bold text-[#F26522]">
                                        View Specs <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


            {/* ── CTA ──────────────────────────── */}
            <section className="py-16 bg-white border-t border-[#E2E8F0]">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <motion.h2 {...fade()} className="text-2xl sm:text-3xl font-bold text-[#1E3A8A] mb-3">
                        Need a custom recombinant protein?
                    </motion.h2>
                    <motion.p {...fade(0.1)} className="text-[#475569] mb-7 max-w-xl mx-auto text-sm leading-relaxed">
                        Our CDMO platform can develop and manufacture custom recombinant proteins to your specifications. Contact our team today.
                    </motion.p>
                    <motion.div {...fade(0.2)} className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="px-8 py-4 rounded-xl text-sm font-bold text-white bg-[#F26522] hover:bg-[#d95a1e] transition-all duration-300">
                            Request More Info →
                        </Link>
                        <Link href="/cdmo" className="px-8 py-4 rounded-xl text-sm font-bold border-2 border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white transition-all duration-300">
                            Explore CDMO Services
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
