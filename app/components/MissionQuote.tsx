"use client";
import { motion } from "framer-motion";
import { Globe, Microscope, Handshake, UsersRound, Target } from "lucide-react";

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

            {/* Stats - moved from global reach to split content better */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 lg:mt-32 border-t border-[#E2E8F0] pt-16 lg:pt-24">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        <Microscope className="w-6 h-6 sm:w-8 sm:h-8 text-[#E8721A] mb-4 sm:mb-6" strokeWidth={1.5} />
                        <div className="text-3xl sm:text-5xl font-bold tracking-tight mb-2">20+</div>
                        <div className="text-[#94A3B8] font-medium">products in portfolio</div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <Handshake className="w-6 h-6 sm:w-8 sm:h-8 text-[#E8721A] mb-4 sm:mb-6" strokeWidth={1.5} />
                        <div className="text-4xl sm:text-5xl font-bold tracking-tight mb-2">50+</div>
                        <div className="text-[#94A3B8] font-medium">Pharma & Biopharma Partners</div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-[#E8721A] mb-4 sm:mb-6" strokeWidth={1.5} />
                        <div className="text-4xl sm:text-5xl font-bold tracking-tight mb-2">10+</div>
                        <div className="text-[#94A3B8] font-medium">Distribution Partners</div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <UsersRound className="w-6 h-6 sm:w-8 sm:h-8 text-[#E8721A] mb-4 sm:mb-6" strokeWidth={1.5}/>
                        <div className="text-4xl sm:text-5xl font-bold tracking-tight mb-2">130+</div>
                        <div className="text-[#94A3B8] font-medium">Team members</div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
