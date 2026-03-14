"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function AboutStrip() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
    const imgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.0]);

    return (
        <section id="about" ref={sectionRef} className="bg-white overflow-hidden pt-8 pb-16 lg:pt-12 lg:pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    >


                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-outfit font-black tracking-tight leading-[1.08] text-[#1E3A8A] mb-8">
                            About <span className="text-[#F26522]">us</span>
                        </h2>
                          
                        <div className="text-[17px] text-[#5C4033] leading-[1.75]">
                                <p>
                                 Provis Biolabs is a <strong className="text-[#F26522] font-semibold">fast-growing biotechnology company</strong> specializing in premium bioreagents for global pharmaceutical and biopharmaceutical applications. Since our founding in 2019, we've commercialized a diverse portfolio of products with a robust and expanding pipeline. Our end-to-end capabilities cover R&D to GMP manufacturing, supported by <strong className="text-[#F26522] font-semibold">WHO-GMP, GLP, ISO 9001:2015, Halal and Kosher</strong> certifications, ensuring the highest quality standards throughout our operations.
                              </p>
                              <br />
                              <p>
                                Leveraging our state-of-the-at fermentation facility, we provide scalable production solutions to partners worldwide. With a growing network of distribution partners spanning the United States, Europe and Asia, we are rapidly expanding access to our high-quality, <strong className="text-[#F26522] font-semibold">animal origin-free (AOF)</strong> bioreagents across key global markets ensuring enhanced safety, ethical sourcing, environmental responsibility and streamlined regulatory compliance for our customers worldwide.
                              </p>
                        </div>
                    </motion.div>

                    {/* Right — parallax image */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="relative h-[400px] lg:h-[450px] rounded-[2.5rem] overflow-hidden"
                    >
                        <motion.div style={{ scale: imgScale }} className="absolute inset-0">
                            <Image
                                src="/imagev2.png"
                                alt="Provis Biolabs laboratory"
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
