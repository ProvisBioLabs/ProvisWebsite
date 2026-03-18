"use client";
import { motion } from "framer-motion";
import { Settings, Factory, Activity, FileCheck, FlaskConical, Repeat } from "lucide-react";
import Image from "next/image";

const services = [
    {
        title: "Strain & Cell Line Development",
        desc: "High-expressing microbial and mammalian host engineering for optimal yield and product quality.",
        Icon: Settings,
    },
    {
        title: "Multi-kL Fermentation",
        desc: "Scalable upstream bioprocessing from bench to 5,000L+ fermenters under WHO-GMP conditions.",
        Icon: Factory,
    },
    {
        title: "Analytical & QC",
        desc: "Full characterization suite — HPLC, SDS-PAGE, mass spec, endotoxin, sterility and release testing.",
        Icon: Activity,
    },
    {
        title: "CMC & Regulatory",
        desc: "Complete Chemistry, Manufacturing & Controls documentation for IND/ANDA/DMF filings.",
        Icon: FileCheck,
    },
    {
        title: "Downstream & Purification",
        desc: "Chromatography, ultrafiltration and PEGylation for high-purity, clinical-grade product.",
        Icon: FlaskConical,
    },
    {
        title: "Tech Transfer",
        desc: "Seamless process transfer with full documentation, validation and on-site support.",
        Icon: Repeat,
    },
];

export default function CDMO() {
    return (
        <section id="cdmo" className="py-16 lg:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                    {/* Left Text — sticky ONLY on desktop (has 2-col grid), not mobile */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:sticky lg:top-32"
                    >
                        <h2 className="text-sm font-bold tracking-widest uppercase text-[#E8721A] mb-4">
                            CDMO Services
                        </h2>
                        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1E3A8A] mb-6 leading-tight">
                            Your vision.<br />
                            <span className="text-[#94A3B8]">Our expertise</span>
                        </h3>

                        <p className="text-base lg:text-lg text-[#475569] mb-4 lg:mb-6 font-medium leading-relaxed">
                            End-to-end CDMO capabilities from strain engineering and process development through multi-kL microbial fermentation to finished, release-tested product. All under one  roof.
                        </p>

                        <p className="text-base lg:text-lg text-[#475569] mb-8 lg:mb-10 font-medium leading-relaxed">
                            We handle upstream bioprocessing, downstream purification, analytical characterization, fill-finish and regulatory CMC documentation so you can focus on your pipeline.
                        </p>

                        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                            <a
                                href="/cdmo"
                                className="px-8 py-4 rounded-full font-semibold text-white bg-[#1E3A8A] hover:scale-105 active:scale-95 transition-all duration-300 text-center"
                            >
                                Learn More
                            </a>
                            <a
                                href="/contact"
                                className="px-8 py-4 rounded-full font-semibold text-[#1E3A8A] border border-[#E2E8F0] hover:bg-[#FAFAFA] transition-all duration-300 text-center"
                            >
                                Get a Quote
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Services Grid */}
                    <div className="space-y-12">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="relative h-[300px] w-full rounded-3xl overflow-hidden bg-[#FAFAFA]"
                        >
                            <Image
                                src="/provis-biolabs-cdmo-manufacturing-facility.webp"
                                alt="Provis Biolabs WHO-GMP Certified Biopharmaceutical Manufacturing Facility Interior"
                                fill
                                loading="lazy"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover"
                            />
                        </motion.div>

                        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
                            {services.map((s, i) => (
                                <motion.div
                                    key={s.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                >
                                    <div className="w-10 h-10 rounded-xl bg-[#fff7ed] flex items-center justify-center mb-4">
                                        <s.Icon className="w-5 h-5 text-[#E8721A]" strokeWidth={2} />
                                    </div>
                                    <h4 className="text-lg font-bold text-[#1E3A8A] mb-2">{s.title}</h4>
                                    <p className="text-[#475569] text-sm leading-relaxed">{s.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
