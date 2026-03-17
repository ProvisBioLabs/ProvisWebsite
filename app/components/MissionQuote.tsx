"use client";
import { motion } from "framer-motion";
import { Target } from "lucide-react";
import Image from "next/image";

export default function MissionQuote() {
    return (
        <section className="py-24 lg:py-12 bg-white text-[#1E3A8A]">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    <Target className="w-12 h-12 text-[#F26522] mx-auto mb-8 opacity-20" strokeWidth={1} />
                    <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold tracking-tight leading-[1.1] mb-10">
                        Advancing life sciences with premium, animal-origin-free bioreagents
                        and GMP-grade APIs for <span className="text-[#F26522]">global biopharma</span>.
                    </h2>

                    {/* Certificate Images */}
                    <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
                        <img
                            src="/certifications/who-gmp.webp"
                            alt="WHO GMP Certified"
                            className="h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100"
                        />
                        <img
                            src="/certifications/gmp.webp"
                            alt="GMP Certified Practice"
                            className="h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100"
                        />
                        <img
                            src="/certifications/iso.webp"
                            alt="ISO Certified"
                            className="h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100"
                        />
                        <img
                            src="/certifications/halal.webp"
                            alt="Halal Certified"
                            className="h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100"
                        />
                        <img
                            src="/certifications/kosher.webp"
                            alt="Kosher Certified"
                            className="h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100"
                        />
                    </div>

                    <div className="flex items-center justify-center gap-6">
                        <div className="h-px w-16 bg-[#E2E8F0]" />
                        <span className="text-sm font-bold tracking-widest uppercase text-[#94A3B8]">
                            Provis Biolabs
                        </span>
                        <div className="h-px w-16 bg-[#E2E8F0]" />
                    </div>
                </motion.div>
            </div>

            {/* Stats - split layout: image left, stats right */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 lg:mt-32 border-t border-[#E2E8F0] pt-16 lg:pt-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="relative w-full h-[380px] sm:h-[460px] lg:h-[520px] rounded-[2rem] overflow-hidden"
                    >
                        <Image
                            src="/quality-lab.webp"
                            alt="Provis Biolabs Products"
                            fill
                            className="object-cover"
                            priority
                        />
                    </motion.div>

                    {/* Right: 2x2 Stats */}
                    <div className="grid grid-cols-2 gap-x-8 gap-y-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="border-b border-[#E2E8F0] pb-10"
                        >
                            <div className="text-5xl sm:text-6xl font-bold tracking-tight text-[#1E3A8A] mb-3">6+</div>
                            <div className="text-[#F26522] font-bold tracking-wide text-sm uppercase">years</div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="border-b border-[#E2E8F0] pb-10"
                        >
                            <div className="text-5xl sm:text-6xl font-bold tracking-tight text-[#1E3A8A] mb-3">50+</div>
                            <div className="text-[#F26522] font-bold tracking-wide text-sm uppercase">Team Members</div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <div className="text-5xl sm:text-6xl font-bold tracking-tight text-[#1E3A8A] mb-3">20+</div>
                            <div className="text-[#F26522] font-bold tracking-wide text-sm uppercase">Products</div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <div className="text-5xl sm:text-6xl font-bold tracking-tight text-[#1E3A8A] mb-3">10+</div>
                            <div className="text-[#F26522] font-bold tracking-wide text-sm uppercase">Distributors</div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
