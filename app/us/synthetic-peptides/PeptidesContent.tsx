"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, FlaskConical, Layers, Link as LinkIcon } from "lucide-react";
import Image from "next/image";
import PeptideSynthesisForm from "./PeptideSynthesisForm";

const fade = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
});

const synthesisTypes = [
    {
        icon: <Layers className="w-8 h-8 text-[#F26522]" />,
        name: "Solid Phase Peptide Synthesis (SPPS)",
        desc: "It is more efficient and faster for routine and longer peptide synthesis.",
    },
    {
        icon: <FlaskConical className="w-8 h-8 text-[#F26522]" />,
        name: "Liquid Phase Peptide Synthesis (LPPS)",
        desc: "It offers better scalability and control for producing high-purity peptides, especially for challenging sequences or modified peptides.",
    },
    {
        icon: <LinkIcon className="w-8 h-8 text-[#F26522]" />,
        name: "Hybrid Peptide Synthesis (HPS)",
        desc: "It combines the strengths of both Solid Phase Peptide Synthesis (SPPS) and Liquid Phase Peptide Synthesis (LPPS) to optimize the production of complex peptides.",
    },
];

const capabilities = [
    { title: "Scale-Up Expertise", desc: "We excel in scaling bench processes for peptides in both solution and solid phases, ensuring a seamless transition from lab to production." },
    { title: "Flexible Synthesis Quantities", desc: "From gram-scale to multi-gram quantities, we cater to diverse peptide synthesis needs with precision." },
    { title: "Purification Excellence", desc: "Our purification techniques yield peptides with purity levels exceeding 99%, meeting stringent quality standards." },
    { title: "Process Validation", desc: "Each step of our manufacturing process undergoes rigorous validation, ensuring consistency and reliability in every batch." },
];

const therapeuticAreas = ["Oncology", "Metabolic Disorders", "Infectious Diseases", "Cardiovascular Health", "Neurological Disorders", "Immunotherapy"];

const keyFeatures = [
    "Superior Quality and affordability",
    "Personalized consultation with experienced peptide experts",
    "Purities ranging from crude to >98% and quantities ranging from gram to multi-gram scale",
    "Wide range of peptide modifications available",
    "cGMP facility for bulk manufacturing of peptides",
    "Fast turn around time",
];

export default function PeptidesContent() {
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
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="max-w-3xl">
                            <motion.h1 {...fade(0.1)} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1E3A8A] leading-tight mb-4">
                                Synthetic Peptides
                            </motion.h1>
                            <motion.p {...fade(0.2)} className="text-xl text-[#475569] font-bold leading-relaxed mb-6">
                                Custom Peptide Synthesis
                            </motion.p>
                            <motion.div {...fade(0.3)} className="space-y-4 text-[#475569] text-base leading-relaxed mb-10">
                                <p>We provide end-to-end custom peptide synthesis services for pharmaceutical, biotechnology and academic research teams worldwide. Using advanced Fmoc-based solid-phase peptide synthesis and rigorous quality control systems, we deliver peptides ranging from simple linear sequences to complex cyclic, bridged and PEGylated constructs with high purity and reliability.</p>
                            </motion.div>
                            <motion.div {...fade(0.4)} className="flex flex-wrap gap-3">
                                <Link href="/us/contact" className="px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-[#F26522] hover:bg-[#d95a1e] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(242,101,34,0.3)]">
                                    Request More Info →
                                </Link>
                                <Link href="/us/products" className="px-7 py-3.5 rounded-xl text-sm font-bold border-2 border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white transition-all duration-300">
                                    All Products
                                </Link>
                            </motion.div>
                        </div>
                        <div className="flex justify-center lg:justify-end items-center w-full">
                            <div className="relative w-[85%] sm:w-[70%] md:w-[60%] lg:w-[420px] aspect-[4/3]
                   rounded-3xl bg-white shadow-xl overflow-hidden
                  transition-transform duration-300 hover:scale-105">
                                <Image
                                    src="/products/syntheticpeptides.webp"
                                    alt="Synthetic Peptides"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 80vw, 420px"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Therapeutic Areas ─────────────── */}
            <section className="py-16 bg-white border-b border-[#E2E8F0]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.p {...fade()} className="text-sm font-bold tracking-widest uppercase text-[#94a3b8] mb-4">Therapeutic Coverage</motion.p>
                    <div className="flex flex-wrap gap-3">
                        {therapeuticAreas.map((area, i) => (
                            <motion.span
                                key={area}
                                {...fade(i * 0.06)}
                                className="px-5 py-2.5 rounded-full text-sm font-bold bg-[#EFF6FF] text-[#1E3A8A] border border-[#BFDBFE]"
                            >
                                {area}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </section>

        

            {/* ── Custom Peptide Synthesis Form ── */}
            <PeptideSynthesisForm />
        </>
    );
}

