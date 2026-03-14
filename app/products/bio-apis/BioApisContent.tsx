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

const apiProducts = allProducts.filter(p => p.category === 'api');

const qualityPoints = [
    "Personnel training records",
    "Manufactured and tested under GMP guidelines",
    "Batch-to-batch consistency",
    "Testing and traceability of raw material",
    "Documentation of QA, QC and Production",
    "Records of maintenance and equipment calibration",
    "Stability monitors of product shelf life",
    "Antibiotic-free and solvent-free manufacturing process",
    "Animal origin free raw materials",
    "TSE/BSE free certified — complies with IP/USP/EP/BP",
    "Following ICH Q7 principles to meet international standards",
    "Drug Master File (DMF) as per ICH M4 guideline",
];

export default function BioApisContent() {
    return (
        <>
            {/* ── Hero ──────────────────────────── */}
            <section className="relative overflow-hidden pt-36 pb-20 bg-[#F8FAFC]">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F26522] to-[#FF8C55]" />
                <div
                    className="absolute inset-0 opacity-[0.025]"
                    style={{
                        backgroundImage:
                            "linear-gradient(#1E3A8A 1px,transparent 1px),linear-gradient(90deg,#1E3A8A 1px,transparent 1px)",
                        backgroundSize: "40px 40px",
                    }}
                />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.p {...fade()} className="text-sm font-bold tracking-widest uppercase text-[#F26522] mb-3">
                        Products
                    </motion.p>
                    <motion.h1 {...fade(0.1)} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1E3A8A] leading-tight mb-4">
                        Bio-APIs
                    </motion.h1>
                    <motion.p {...fade(0.2)} className="text-base text-[#64748B] max-w-3xl leading-relaxed mb-8">
                        Provis Biolabs manufactures and supplies pharmaceutical-grade Biological Active Pharmaceutical Ingredients (Bio-APIs) — meeting the highest international quality standards for life-saving therapies.
                    </motion.p>
                    <motion.div {...fade(0.3)} className="flex flex-wrap gap-3">
                        <Link href="/contact" className="px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-[#F26522] hover:bg-[#d95a1e] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(242,101,34,0.3)]">
                            Enquire Now →
                        </Link>
                        <Link href="/products" className="px-7 py-3.5 rounded-xl text-sm font-bold border-2 border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white transition-all duration-300">
                            All Products
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* ── Products ──────────────────────── */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div {...fade()} className="mb-12">
                        <p className="text-sm font-bold tracking-widest uppercase text-[#F26522] mb-3">Our Bio-APIs</p>
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A8A]">Explore Our Bio-API Products</h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {apiProducts.map((p, i) => (
                            <motion.div
                                key={p.id}
                                {...fade(i * 0.08)}
                                className="bg-[#FAFAFA] border border-[#E2E8F0] rounded-2xl hover:shadow-[0_12px_40px_rgba(30,58,138,0.08)] hover:border-[#F26522]/30 transition-all duration-500 group flex flex-col overflow-hidden"
                            >
                                <Link href={p.href} className="p-8 flex flex-col h-full cursor-pointer">
                                    {/* Image placeholder */}
                                    <div className="w-full h-48 rounded-xl  mb-6 border border-[#E2E8F0] group-hover:border-[#F26522]/20 transition-colors relative overflow-hidden shrink-0">
                                        <img
                                            src={p.image}
                                            alt={p.name}
                                            className={`w-full h-full transition-transform duration-700 group-hover:scale-105 ${
                                                p.image.startsWith('/')
                                                    ? 'object-contain p-4'
                                                    : 'object-cover'
                                            }`}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="inline-block px-2.5 py-1 bg-[#FFF0E6] text-[#F26522] text-[10px] font-bold tracking-widest uppercase rounded">
                                            {p.category === 'api' ? 'API' : p.category}
                                        </span>
                                        <span className="inline-block px-2.5 py-1 bg-[#EFF6FF] text-[#1E3A8A] text-[10px] font-bold tracking-widest uppercase rounded">
                                            {p.grade}
                                        </span>
                                        {p.casNumber && (
                                            <span className="inline-block px-2.5 py-1 bg-[#F8FAFC] border border-[#E2E8F0] text-[#64748B] text-[10px] font-bold tracking-widest uppercase rounded">
                                                CAS: {p.casNumber}
                                            </span>
                                        )}
                                        {p.dmfAvailable && (
                                            <span className="inline-block px-2.5 py-1 bg-[#ECFDF5] border border-[#A7F3D0] text-[#059669] text-[10px] font-bold tracking-widest uppercase rounded">
                                                DMF AVAILABLE
                                            </span>
                                        )}
                                    </div>
                                    <h3 className="text-xl font-bold text-[#1E3A8A] mb-2 group-hover:text-[#F26522] transition-colors">{p.name}</h3>
                                    <p className="text-[#64748B] text-sm leading-relaxed mb-6 flex-grow">{p.shortDescription}</p>
                                    <div className="flex gap-4 mt-auto">
                                        <span className="inline-flex items-center text-sm font-bold text-[#F26522]">
                                            View Specs <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                                        </span>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

           
        </>
    );
}
