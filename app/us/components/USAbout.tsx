"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function About() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
    const imgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.0]);

    return (
        <section id="about" ref={sectionRef} className="bg-white overflow-hidden">
            {/* PART 1: Company Intro */}
            <div className="pt-28 pb-16 lg:pt-24 lg:pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        {/* Left */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-1 h-6 bg-[#F26522] rounded-full" />
                                <span className="text-2xl font-bold tracking-[0.2em] uppercase text-[#F26522]">About Us</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-outfit font-black tracking-tight text-[#1E3A8A] leading-tight mb-6">
                                Advancing biopharmaceutical innovation through research and manufacturing.
                            </h2>
                            <div className="space-y-5 text-[17px] text-[#5C4033] leading-[1.75]">
                                <p>
                                    Founded in 2019, Provis Biolabs develops and manufactures high-quality animal-origin-free recombinant bioreagents, proteins, enzymes, peptides, and specialty reagents for the global life sciences industry.
                                </p>
                                <p>
                                    Combining scientific research with scalable manufacturing, we support customers from early-stage discovery and process development through GMP manufacturing. Our products and services are trusted by pharmaceutical, biotechnology, CDMO, and research organizations worldwide.
                                </p>
                            </div>
                        </motion.div>

                        {/* Right — parallax image */}
                        <motion.div
                            initial={false}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="relative h-[500px] rounded-[2.5rem] overflow-hidden"
                        >
                            <motion.div style={{ scale: imgScale }} className="absolute inset-0">
                                <Image
                                    src="/provis-biolabs-research-lab.webp"
                                    alt="Provis Biolabs Advanced Bioprocessing and Research Laboratory"
                                    fill
                                    priority
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className="object-cover"
                                />
                            </motion.div>
                            <div className="absolute inset-0 bg-gradient-to-t from-[#F26522]/30 via-transparent to-transparent" />
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* PART 2: What We Offer & Quality */}
            <div className="py-20 bg-[#FFF5F0]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                        {/* What We Offer */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="bg-white rounded-[2rem] p-10 shadow-sm border border-[#FFF0E5]"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-1 h-6 bg-[#F26522] rounded-full" />
                                <h3 className="text-2xl font-outfit font-black tracking-tight text-[#1E3A8A]">What We Offer</h3>
                            </div>
                            <ul className="space-y-4">
                                {[
                                    "Recombinant bioreagents",
                                    "Custom peptide synthesis",
                                    "CDMO services",
                                    "Research, process development, and GMP manufacturing"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <svg className="w-6 h-6 text-[#F26522] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-[17px] text-[#5C4033] font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Quality You Can Trust */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="bg-white rounded-[2rem] p-10 shadow-sm border border-[#FFF0E5]"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-1 h-6 bg-[#F26522] rounded-full" />
                                <h3 className="text-2xl font-outfit font-black tracking-tight text-[#1E3A8A]">Quality You Can Trust</h3>
                            </div>
                            <p className="text-[16px] text-[#5C4033] mb-8 leading-relaxed">
                                Manufactured under robust quality systems with internationally recognized certifications:
                            </p>
                            
                            {/* Certification Logos - Grid Layout */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:gap-6 mt-auto">
                                {[
                                    { name: "WHO-GMP", img: "/certifications/who-gmp.webp" },
                                    { name: "GMP Certified", img: "/certifications/gmp.webp" },
                                    { name: "ISO Certified", img: "/certifications/iso.webp" },
                                    { name: "ISO 13485", img: "/certifications/is012485.png" },
                                    { name: "Halal", img: "/certifications/halal.webp" },
                                    { name: "Kosher", img: "/certifications/kosher.webp" },
                                ].map((cert, i) => (
                                    <motion.div
                                        key={cert.name}
                                        initial={{ opacity: 0, y: 15 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: i * 0.1 }}
                                        className="flex flex-col items-center justify-center p-4 rounded-2xl bg-[#FFF5F0]/50 hover:bg-white border border-transparent hover:border-[#F26522]/20 hover:shadow-[0_8px_30px_rgba(242,101,34,0.12)] transition-all duration-300 group"
                                    >
                                        <div className="relative h-14 w-full grayscale group-hover:grayscale-0 transition-all duration-300 mb-3 opacity-75 group-hover:opacity-100">
                                            <Image src={cert.img} alt={cert.name} fill className="object-contain" sizes="80px" />
                                        </div>
                                        <span className="text-[11px] font-bold tracking-wider uppercase text-[#FF9A5C] group-hover:text-[#F26522] text-center transition-colors duration-300">
                                            {cert.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* PART 3: Global Presence */}
            <div className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="bg-gradient-to-br from-[#1E3A8A] to-[#0F172A] rounded-[2.5rem] p-12 lg:p-16 text-center relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-[#F26522] opacity-20 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-[#F26522] opacity-20 rounded-full blur-3xl"></div>
                        
                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h3 className="text-3xl sm:text-4xl font-outfit font-black tracking-tight text-white mb-6">
                                Global Presence
                            </h3>
                            <p className="text-[18px] text-blue-100 leading-relaxed font-medium">
                                With operations in the United States and a growing international customer base, Provis Biolabs supports pharmaceutical, biotechnology, CDMO, and research organizations across North America, Europe, and Asia.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
