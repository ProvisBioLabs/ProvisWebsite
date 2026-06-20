'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function USAboutStrip() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
    const imgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.0]);

    return (
        <section id="about" ref={sectionRef} className="bg-white overflow-hidden py-24 lg:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    >
            
                        <h3 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.08] text-[#1E3A8A] mb-8 drop-shadow-sm">
                            About <span className="text-[#F26522]"> Us</span>
                        </h3>
                          
                        <div className="text-lg sm:text-xl lg:text-2xl text-[#475569] leading-relaxed font-medium">
                            <p className="mb-6">
                                Provis Biolabs is a <strong className="text-[#F26522] font-semibold">premier biotechnology manufacturer</strong> delivering high-purity bioreagents specifically tailored for North American pharmaceutical and biopharmaceutical developers. Since 2019, we have established a rapidly growing footprint in the US market through a dedication to uncompromising quality.
                            </p>    
                            <p>
                                From early R&D through scale-up to commercial GMP manufacturing, our facilities operate under rigorous <strong className="text-[#F26522] font-semibold">FDA-aligned cGMP, ISO 9001:2015, and GLP</strong> standards, guaranteeing the safety, purity, and consistency demanded by the United States healthcare sector.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right — parallax image */}      
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="relative h-[400px] lg:h-[450px] rounded-[2.5rem] overflow-hidden shadow-xl"
                    >
                        <motion.div style={{ scale: imgScale }} className="absolute inset-0">
                            <Image
                                src="/provis-biolabs-research-lab.webp"
                                alt="Provis Biolabs advanced research laboratory"
                                fill
                                priority
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
