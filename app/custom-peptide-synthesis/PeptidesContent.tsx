"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, FlaskConical, Layers, Link as LinkIcon, HelpCircle, ChevronDown, ShieldCheck, Microscope, GitCommit } from "lucide-react";
import Image from "next/image";
import GlobalPeptideSynthesisForm from "./GlobalPeptideSynthesisForm";

const fade = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
});

import { customPeptideFaqs } from "./faqData";

const synthesisTypes = [
    {
        icon: <Layers className="w-7 h-7 text-[#F26522]" />,
        name: "Solid Phase Peptide Synthesis (SPPS)",
        desc: "Highly efficient and fast turnaround for routine, modified, and medium-to-long peptide sequences using advanced Fmoc chemistry.",
    },
    {
        icon: <FlaskConical className="w-7 h-7 text-[#F26522]" />,
        name: "Liquid Phase Peptide Synthesis (LPPS)",
        desc: "Offers superior scalability, solvent economy, and batch consistency for short peptides and commercial API scale production.",
    },
    {
        icon: <LinkIcon className="w-7 h-7 text-[#F26522]" />,
        name: "Hybrid Peptide Synthesis (HPS)",
        desc: "Combines SPPS fragment generation with solution-phase ligation (NCL) to manufacture complex, multi-bridge, or long peptides.",
    },
];

const capabilities = [
    { title: "Scale-Up Expertise", desc: "We excel in scaling bench processes for peptides in both solution and solid phases, ensuring a seamless transition from lab to production." },
    { title: "Flexible Quantities", desc: "From milligram R&D samples to multigram-scale commercial batches, we cater to diverse peptide synthesis needs with precision." },
    { title: "Purification Excellence", desc: "Our preparative HPLC purification techniques yield peptides with purity levels exceeding 99%, meeting stringent quality standards." },
    { title: "Process Validation", desc: "Each step of our manufacturing process undergoes rigorous validation, ensuring batch-to-batch consistency and regulatory compliance." },
];

const therapeuticAreas = ["Oncology", "Metabolic Disorders", "Infectious Diseases", "Cardiovascular Health", "Neurological Disorders", "Immunotherapy"];

const peptideModifications = [
    "Cyclization (Disulfide bridges, Amide)",
    "Phosphorylation & Methylation",
    "PEGylation & Lipidation",
    "Fluorescent Tagging (FITC, FAM, TAMRA)",
    "Isotope Labeling (13C, 15N)",
    "D-Amino Acids & Unnatural Amino Acids"
];

const analyticalMethods = [
    { name: "UPLC & Preparative HPLC", desc: "For extreme purity profiling and gradient isolation." },
    { name: "High-Resolution Mass Spectrometry (HRMS)", desc: "For exact molecular weight confirmation." },
    { name: "Amino Acid Analysis (AAA)", desc: "For precise peptide quantification and composition." },
    { name: "Endotoxin & Moisture Testing", desc: "Essential for  in-vivo clinical applications." }
];

const keyFeatures = [
    "Superior Quality with competitive global pricing",
    "Personalized consultation with experienced peptide experts",
    "Purities ranging from crude to >99% and scale from mg to multi-kg",
    "Wide range of peptide modifications & cyclic constraints",
    "Fast turnaround times & global logistics support",
];

export default function PeptidesContent() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

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
                                Custom Peptide Synthesis
                            </motion.h1>
                            <motion.div {...fade(0.3)} className="space-y-4 text-[#475569] text-base leading-relaxed mb-10">
                                <p>We provide end-to-end custom peptide synthesis services for pharmaceutical, biotechnology and academic research teams in India and worldwide. Using advanced Fmoc-based solid-phase peptide synthesis and rigorous quality control systems, we deliver peptides ranging from simple linear sequences to complex cyclic, bridged and PEGylated constructs with high purity and reliability.</p>
                            </motion.div>
                            <motion.div {...fade(0.4)} className="flex flex-wrap gap-3">
                                <a href="#peptide-request" className="px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-[#F26522] hover:bg-[#d95a1e] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(242,101,34,0.3)]">
                                    Request a Quote →
                                </a>
                                <a href="#faq-section" className="px-7 py-3.5 rounded-xl text-sm font-bold border-2 border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white transition-all duration-300">
                                    View FAQs
                                </a>
                            </motion.div>
                        </div>
                        <div className="flex justify-center lg:justify-end items-center w-full">
                            <div className="relative w-[85%] sm:w-[70%] md:w-[60%] lg:w-[420px] aspect-[4/3] rounded-3xl bg-white shadow-xl overflow-hidden transition-transform duration-300 hover:scale-105">
                                <Image
                                    src="/products/syntheticpeptides.webp"
                                    alt="Scientist performing GMP Custom Peptide Synthesis in Provis Biolabs Laboratory"
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
            <section className="py-12 bg-white border-b border-[#E2E8F0]">
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

            {/* ── Synthesis Technologies ── */}
            <section className="py-20 bg-white border-b border-[#E2E8F0]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div {...fade(0.1)} className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFF4ED] text-[#F26522] text-xs font-bold uppercase tracking-wider mb-4 border border-[#FFD8C2]">
                            <Layers className="w-4 h-4" />
                            Synthesis Technologies
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A8A] mb-4">
                            Synthesis Platforms Tailored to Your Sequence
                        </h2>
                        <p className="text-[#475569] text-base leading-relaxed">
                            We select and optimize the ideal synthesis platform based on sequence length, purity targets, and production scale.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {synthesisTypes.map((item, i) => (
                            <motion.div
                                key={item.name}
                                {...fade(0.1 + i * 0.1)}
                                className="p-8 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#F26522]/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                            >
                                <div>
                                    <div className="w-14 h-14 rounded-xl bg-white border border-[#E2E8F0] flex items-center justify-center mb-6 shadow-sm">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-[#1E3A8A] mb-3">{item.name}</h3>
                                    <p className="text-[#475569] text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Capabilities & Scale ── */}
            <section className="py-20 bg-[#F8FAFC]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div {...fade(0.1)}>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EFF6FF] text-[#1E3A8A] text-xs font-bold uppercase tracking-wider mb-4 border border-[#BFDBFE]">
                                <ShieldCheck className="w-4 h-4 text-[#F26522]" />
                                Manufacturing & Quality Excellence
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A8A] mb-6">
                                Gram-to-Multigram Custom Manufacturing & Quality Control
                            </h2>
                            <div className="space-y-4">
                                {keyFeatures.map((feature, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#F26522] flex-shrink-0 mt-1" />
                                        <span className="text-[#475569] text-base font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <div className="grid sm:grid-cols-2 gap-6">
                            {capabilities.map((cap, i) => (
                                <motion.div
                                    key={cap.title}
                                    {...fade(0.15 + i * 0.08)}
                                    className="p-6 bg-white rounded-2xl border border-[#E2E8F0] shadow-sm hover:border-[#1E3A8A]/30 transition-all duration-300"
                                >
                                    <h4 className="text-lg font-bold text-[#1E3A8A] mb-2">{cap.title}</h4>
                                    <p className="text-xs text-[#64748B] leading-relaxed">{cap.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Peptide Modifications ── */}
            <section className="py-20 bg-white border-t border-[#E2E8F0]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1 grid sm:grid-cols-2 gap-4">
                            {peptideModifications.map((mod, i) => (
                                <motion.div
                                    key={mod}
                                    {...fade(0.1 + i * 0.05)}
                                    className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] shadow-sm flex items-center gap-3 hover:border-[#1E3A8A]/30 transition-all duration-300"
                                >
                                    <GitCommit className="w-5 h-5 text-[#F26522] flex-shrink-0" />
                                    <span className="text-[#1E3A8A] font-bold text-sm leading-tight">{mod}</span>
                                </motion.div>
                            ))}
                        </div>
                        <motion.div {...fade(0.1)} className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFF4ED] text-[#F26522] text-xs font-bold uppercase tracking-wider mb-4 border border-[#FFD8C2]">
                                <GitCommit className="w-4 h-4" />
                                Complex Syntheses
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A8A] mb-6">
                                Specialized Peptide Modifications
                            </h2>
                            <p className="text-[#475569] text-base leading-relaxed mb-6">
                                We specialize in synthesizing highly complex, modified peptides that challenge standard protocols. From multiple disulfide bridges to unnatural amino acids, our chemistry team routinely delivers complex custom modified peptides for advanced drug discovery.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── Visible FAQ Section ── */}
            <section className="py-20 bg-white border-t border-[#E2E8F0]" id="faq-section">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div {...fade(0.1)} className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EFF6FF] text-[#1E3A8A] text-xs font-bold uppercase tracking-wider mb-4 border border-[#BFDBFE]">
                            <HelpCircle className="w-4 h-4 text-[#F26522]" />
                            Frequently Asked Questions
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A8A] mb-4">
                            Custom Peptide Synthesis FAQs
                        </h2>
                        <p className="text-[#475569] text-base max-w-2xl mx-auto">
                            Got questions about our synthesis routes, purity standards, scale-up capacity, or delivery in India & globally? Here are direct answers to common questions.
                        </p>
                    </motion.div>

                    <div className="space-y-4">
                        {customPeptideFaqs.map((faq, i) => (
                            <motion.div
                                key={i}
                                {...fade(0.1 + i * 0.05)}
                                className="bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] overflow-hidden shadow-sm hover:border-[#F26522]/40 transition-all duration-200"
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#F26522]/20"
                                    aria-expanded={openFaq === i}
                                >
                                    <span className="font-bold text-[#1E3A8A] text-lg leading-snug">
                                        {faq.question}
                                    </span>
                                    <span className={`w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-300 ${openFaq === i ? "bg-[#F26522] text-white rotate-180" : "bg-[#E2E8F0] text-[#64748B]"}`}>
                                        <ChevronDown className="w-5 h-5" />
                                    </span>
                                </button>
                                <AnimatePresence initial={false}>
                                    {openFaq === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.25, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-6 pt-2 text-[#475569] text-base leading-relaxed border-t border-[#E2E8F0] bg-white">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Form Section ── */}
            <GlobalPeptideSynthesisForm />
        </>
    );
}
