"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, FlaskConical, Layers, Link as LinkIcon } from "lucide-react";
import Image from "next/image";

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
                                <p>Our reliable peptide synthesis services cover everything from peptide modifications to high-throughput synthesis and peptide library screening.</p>
                                <p>With GMP manufacturing facilities and a state-of-the-art R&amp;D laboratory, the highest quality custom peptide synthesis is provided, ensuring a purity level of <strong className="text-[#1E3A8A]">&gt;99%</strong>.</p>
                            </motion.div>
                            <motion.div {...fade(0.4)} className="flex flex-wrap gap-3">
                                <Link href="/contact" className="px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-[#F26522] hover:bg-[#d95a1e] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(242,101,34,0.3)]">
                                    Request More Info →
                                </Link>
                                <Link href="/products" className="px-7 py-3.5 rounded-xl text-sm font-bold border-2 border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white transition-all duration-300">
                                    All Products
                                </Link>
                            </motion.div>
                        </div>
                        <div className="flex justify-center lg:justify-end items-center w-full">
                            <div className="relative w-[85%] sm:w-[70%] md:w-[60%] lg:w-[420px] aspect-[4/3]
                   rounded-3xl bg-white shadow-xl overflow-hidden
                  transition-transform duration-300 hover:scale-105">
                                <Image
                                    src="/products/syntheticpeptides.png"
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
                        therapeuticAreas.map((area, i) => (
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

            {/* ── Manufacturing Capabilities ────── */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div {...fade()} className="mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A8A]">Our Peptide Synthesis Capabilities</h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {synthesisTypes.map((s, i) => (
                            <motion.div
                                key={s.name}
                                {...fade(i * 0.1)}
                                className="bg-[#FAFAFA] border border-[#E2E8F0] rounded-2xl overflow-hidden hover:shadow-[0_12px_40px_rgba(30,58,138,0.08)] hover:border-[#F26522]/30 transition-all duration-500 group"
                            >
                                {/* Image placeholder */}
                               
                                <div className="p-7">
                                    <h3 className="font-bold text-[#F26522]  mb-3 leading-tight">{s.name}</h3>
                                    <p className="text-sm text-[#64748B] leading-relaxed">{s.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Key Capabilities ──────────────── */}
            <section className="py-20 bg-[#F8FAFC]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <motion.div {...fade()}>
                            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A8A] mb-12">Key Capabilities</h2>
                            <div className="flex flex-col gap-6">
                                {capabilities.map((cap, i) => (
                                    <motion.div key={cap.title} {...fade(i * 0.07)} className="flex gap-4 p-4 bg-white rounded-2xl border border-gray-100 hover:border-[#F26522]/30 transition-colors">
                                        <div className="w-12 h-12 rounded-xl bg-[#EFF6FF] text-[#1E3A8A] flex items-center justify-center flex-shrink-0 border border-blue-100">
                                            <span className="text-sm font-black">{String(i + 1).padStart(2, "0")}</span>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-[#1E3A8A] mb-2">{cap.title}</h3>
                                            <p className="text-sm text-[#475569] leading-relaxed font-medium">{cap.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div {...fade(0.1)}>
                            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A8A] mb-12">Key Features</h2>
                            <div className="bg-white border border-[#E2E8F0] shadow-sm rounded-3xl p-8 lg:p-10 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#F26522]/5 rounded-bl-full" />
                                <ul className="flex flex-col gap-5 relative z-10">
                                    {keyFeatures.map((f) => (
                                        <li key={f} className="flex items-start gap-4">
                                            <CheckCircle2 className="w-6 h-6 text-[#F26522] flex-shrink-0 mt-0.5" />
                                            <span className="text-[#475569] font-medium leading-relaxed">{f}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-8 bg-gradient-to-br from-[#F26522] to-[#FF8C55] rounded-3xl p-8 lg:p-10 text-white shadow-xl relative overflow-hidden group">
                                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-3xl transition-transform group-hover:scale-150 duration-1000" />
                                <h3 className="font-outfit font-black text-2xl mb-3 relative z-10">Ready to discuss your peptide project?</h3>
                                <p className="text-white/90 text-sm leading-relaxed mb-8 relative z-10 font-medium max-w-sm">
                                    Our peptide synthesis experts will work with you to define the optimal approach for your application.
                                </p>
                                <Link href="/contact" className="inline-block px-8 py-4 rounded-xl text-sm font-bold text-[#F26522] bg-white hover:bg-gray-50 transition-all relative z-10 shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:-translate-y-0.5">
                                    Request Consultation
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
           
        </>
    );
}

