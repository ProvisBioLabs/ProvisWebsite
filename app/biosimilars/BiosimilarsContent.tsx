"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, ChevronRight } from "lucide-react";
import Image from "next/image";

const fade = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
});

export default function BiosimilarsContent() {
    return (
        <>
            {/* ── Hero ─────────────────────────────── */}
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
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="max-w-3xl">
                            <motion.p {...fade()} className="text-sm font-bold tracking-widest uppercase text-[#F26522] mb-3">
                                Products
                            </motion.p>
                            <motion.h1 {...fade(0.1)} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1E3A8A] leading-tight mb-4">
                                Biosimilars
                            </motion.h1>
                            <motion.p {...fade(0.2)} className="text-xl text-[#475569] font-bold leading-relaxed mb-6">
                                End-to-End Expertise for Biosimilar Development
                            </motion.p>
                            <motion.p {...fade(0.3)} className="text-base text-[#64748B] leading-relaxed mb-10">
                                Provis offers comprehensive biosimilar development services spanning the complete product lifecycle from early discovery through commercial manufacturing. Our capabilities in Microbial (E. coli) and Mammalian (CHO) expression systems enable us to support diverse therapeutic proteins across multiple complexity levels and therapeutic areas.
                            </motion.p>
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
                                    src="/products/biosimilars.webp"
                                    alt="Biosimilars Development"
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 768px) 80vw, 420px"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Proven Expertise ─────────────────── */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div {...fade()}>
                            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A8A] mb-6 leading-tight">
                                Proven Biosimilar Development Expertise
                            </h2>
                            <p className="text-[#475569] text-base leading-relaxed mb-8">
                                Our team brings demonstrated experience in successfully developing and commercializing <strong className="text-[#1E3A8A]">20+ Complex biosimilars</strong> (proteins and monoclonal antibodies) with proven capabilities in:
                            </p>
                            <ul className="flex flex-col gap-4 mb-8">
                                {[
                                    "Accelerated development timelines",
                                    "Global regulatory approvals",
                                    "International technology licensing and partnership",
                                    "Complex biologics from development to commercial launch",
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#F26522] flex-shrink-0 mt-0.5" />
                                        <span className="text-[#475569] font-medium leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>

                        </motion.div>

                        {/* Stats panel */}
                        <motion.div {...fade(0.1)} className="grid grid-cols-2 gap-4 relative">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square bg-[#F26522]/5 rounded-full blur-3xl -z-10" />
                            {[
                                { value: "20+", label: "Complex Biosimilars", sub: "Developed & Commercialized" },
                                { value: "Global", label: "Regulatory Approvals", sub: "Multi-market compliance" },
                                { value: "E. coli & CHO", label: "Expression Systems", sub: "Microbial & Mammalian" },
                                { value: "End-to-End", label: "Services", sub: "Discovery to Launch" },
                            ].map((stat) => (
                                <div key={stat.label} className="bg-white border border-[#E2E8F0] shadow-sm rounded-3xl p-6 lg:p-8 hover:border-[#F26522]/30 hover:shadow-lg transition-all duration-500">
                                    <div className="text-3xl font-bold text-[#1E3A8A] mb-2 whitespace-pre-line leading-tight">{stat.value}</div>
                                    <div className="text-sm font-bold text-[#F26522] mb-1">{stat.label}</div>
                                    <div className="text-xs font-medium text-[#94a3b8]">{stat.sub}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

          

            {/* ── Integrated R&D Platform ──────────── */}
            <section className="py-20 bg-[#F8FAFC]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div {...fade()} className="text-center max-w-3xl mx-auto mb-16">
                        <p className="text-sm font-bold tracking-widest uppercase text-[#F26522] mb-3">Capabilities</p>
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A8A] mb-6">Our Integrated R&amp;D Platform</h2>
                        <p className="text-[#475569] text-lg leading-relaxed font-medium">
                            As a fully integrated biologics development partner, we support programs from target validation to regulatory filing, with a focus on quality, scalability and GMP readiness.
                        </p>
                    </motion.div>

                    <h3 className="text-xl font-bold text-[#1E3A8A] text-center mb-8">Our Service Capabilities Include:</h3>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                num: "01",
                                title: "Late Discovery & Feasibility Studies",
                                desc: "Target validation, construct design and expression system selection.",
                            },
                            {
                                num: "02",
                                title: "Cell Line Development",
                                desc: "Stable, high-yielding clones for both microbial and mammalian platforms.",
                            },
                            {
                                num: "03",
                                title: "Process Development",
                                desc: "Upstream and downstream optimization for commercial-scale manufacturing.",
                            },
                            {
                                num: "04",
                                title: "Analytical Development",
                                desc: "Comprehensive characterization, comparability and biosimilarity assessment.",
                            },
                            {
                                num: "05",
                                title: "Non-GMP to cGMP Manufacturing",
                                desc: "Scalable production to support preclinical through clinical supply and IND filing.",
                            },
                        ].map((step, i) => (
                            <motion.div
                                key={step.num}
                                {...fade(i * 0.07)}
                                className="bg-white border border-[#E2E8F0] rounded-3xl p-8 hover:shadow-[0_12px_40px_rgba(30,58,138,0.06)] hover:border-[#F26522]/30 transition-all duration-500 group relative overflow-hidden flex flex-col"
                            >
                                <div className="absolute top-0 right-0 w-24 h-24 bg-[#F8FAFC] rounded-bl-full flex items-start justify-end p-6 transition-colors group-hover:bg-[#FFF5F0]">
                                    <span className="text-2xl font-black text-[#E2E8F0] group-hover:text-[#F26522]/30">{step.num}</span>
                                </div>
                                <h3 className="text-lg font-bold text-[#1E3A8A] mb-3 pr-10">{step.title}</h3>
                                <p className="text-sm text-[#64748B] leading-relaxed font-medium mt-auto">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Expression Platforms ─────────────── */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div {...fade()} className="mb-14 text-center max-w-3xl mx-auto">
                        {/* <p className="text-sm font-bold tracking-widest uppercase text-[#F26522] mb-3">Core Expertise</p> */}
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A8A] mb-6">Our Core Expertise</h2>
                        <p className="text-[#475569] text-base leading-relaxed">
                            Our expertise covers mammalian and microbial systems, with optimized bacterial fermentation (E. coli) and mammalian cell cultures, primarily CHO (Chinese Hamster Ovary) cells.
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Mammalian */}
                        <motion.div {...fade(0.05)} className="rounded-3xl overflow-hidden border border-[#E2E8F0] shadow-sm flex flex-col">
                            <div className="bg-[#1E3A8A] px-10 py-8 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3" />
                                <h3 className="text-2xl font-bold text-white mb-2 relative z-10">Mammalian Expression (CHO)</h3>
                                <p className="text-[#93C5FD] text-sm relative z-10 leading-relaxed font-medium">
                                    Our mammalian platform supports complex, glycosylated biologics, including monoclonal antibodies and Fc-fusion proteins.
                                </p>
                            </div>
                            <div className="bg-white px-10 py-10 flex-grow">
                                <ul className="flex flex-col gap-5">
                                    {[
                                        "CHO cell line development and optimization",
                                        "Advanced bioprocessing for glycosylation control",
                                        "Post-translational modification profiling",
                                        "Biosimilarity and comparability frameworks",
                                    ].map((item) => (
                                        <li key={item} className="flex items-start gap-4">
                                            <div className="w-6 h-6 rounded-full bg-[#EFF6FF] flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <ChevronRight className="w-4 h-4 text-[#1E3A8A]" />
                                            </div>
                                            <span className="text-[#475569] font-medium leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                        {/* Microbial */}
                        <motion.div {...fade(0.1)} className="rounded-3xl overflow-hidden border border-[#E2E8F0] shadow-sm flex flex-col">
                            <div className="bg-[#F26522] px-10 py-8 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3" />
                                <h3 className="text-2xl font-bold text-white mb-2 relative z-10">Microbial Expression (E. coli)</h3>
                                <p className="text-[#FFE4D6] text-sm relative z-10 leading-relaxed font-medium">
                                    Our microbial platform is optimized for non-glycosylated proteins, including growth factors, cytokines, enzymes.
                                </p>
                            </div>
                            <div className="bg-white px-10 py-10 flex-grow">
                                <ul className="flex flex-col gap-5">
                                    {[
                                        "High-density bacterial fermentation",
                                        "Cost-effective production models",
                                        "Rapid development timelines",
                                        "Established purification and refolding strategies",
                                    ].map((item) => (
                                        <li key={item} className="flex items-start gap-4">
                                            <div className="w-6 h-6 rounded-full bg-[#FFF5F0] flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <ChevronRight className="w-4 h-4 text-[#F26522]" />
                                            </div>
                                            <span className="text-[#475569] font-medium leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── Therapeutic Focus ────────────────── */}
            <section className="py-20 bg-[#F8FAFC]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div {...fade()} className="mb-14 text-center max-w-3xl mx-auto">
                        <p className="text-sm font-bold tracking-widest uppercase text-[#F26522] mb-3">Focus Areas</p>
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A8A] mb-6">Therapeutic Focus Areas</h2>
                        <p className="text-[#475569] text-base leading-relaxed">
                            Provis focuses on biosimilar development across multiple high-impact therapeutic areas:
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { id: "01", area: "Oncology", desc: "Monoclonal antibodies and targeted biologics" },
                            { id: "02", area: "Metabolic Disorders", desc: "Hormone therapies and enzyme replacements" },
                            { id: "03", area: "Rheumatoid Arthritis & Autoimmune Diseases", desc: "Anti-inflammatory biologics" },
                            { id: "04", area: "Bone Health (Osteoporosis)", desc: "Bone metabolism regulators" },
                        ].map((item, i) => (
                            <motion.div
                                key={item.area}
                                {...fade(i * 0.08)}
                                className="bg-white border border-[#E2E8F0] rounded-3xl p-8 hover:shadow-[0_12px_40px_rgba(30,58,138,0.06)] hover:border-[#F26522]/30 transition-all duration-300 relative group flex flex-col"
                            >
                                <span className="absolute top-6 right-6 text-4xl font-black text-[#F8FAFC] group-hover:text-[#FFF5F0] transition-colors z-0 select-none">
                                    {item.id}
                                </span>
                                <div className="relative z-10 flex flex-col h-full">
                                    <h3 className="text-lg font-bold text-[#1E3A8A] mb-3 leading-tight pr-8">{item.area}</h3>
                                    <p className="text-sm text-[#64748B] font-medium leading-relaxed mt-auto">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Business Model ───────────────────── */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div {...fade()} className="mb-16 text-center max-w-3xl mx-auto">
                        <p className="text-sm font-bold tracking-widest uppercase text-[#F26522] mb-3">Business Model</p>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E3A8A] mb-6 leading-tight">In-House Development +<br />Strategic Partnerships</h2>
                        <p className="text-[#64748B] text-lg leading-relaxed font-medium">
                            This model enables faster time-to-market, reduced development costs and shared risk while leveraging our technical expertise and your commercial capabilities.
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <motion.div {...fade(0.05)} className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[2.5rem] p-10 relative overflow-hidden group">
                            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#EFF6FF] rounded-full blur-3xl transition-transform group-hover:scale-150 duration-700" />
                            <div className="relative z-10 w-full h-full flex flex-col items-start text-left">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-[#1E3A8A] text-white text-xs font-bold uppercase tracking-widest mb-6 border border-blue-900 shadow-sm">In-House</span>
                                <h3 className="font-bold text-[#1E3A8A] text-2xl mb-4">Provis-Led Development</h3>
                                <p className="text-[#475569] text-base leading-relaxed font-medium">
                                    Economical production processes, extensive analytical characterization and regulatory strategy development completed in-house.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div {...fade(0.1)} className="bg-[#FFF5F0] border border-[#FED7AA] rounded-[2.5rem] p-10 relative overflow-hidden group">
                            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#F26522]/10 rounded-full blur-3xl transition-transform group-hover:scale-150 duration-700" />
                            <div className="relative z-10 w-full h-full flex flex-col items-start text-left">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-[#F26522] text-white text-xs font-bold uppercase tracking-widest mb-6 shadow-sm border border-orange-600">Partnership</span>
                                <h3 className="font-bold text-[#1E3A8A] text-2xl mb-4">Partner-Led Commercialization</h3>
                                <p className="text-[#475569] text-base leading-relaxed font-medium">
                                    Collaboration with biopharmaceutical companies for clinical development, regulatory approval and market access.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── CTA ──────────────────────────────── */}
            <section className="py-24 bg-gradient-to-br from-[#F26522] to-[#FF8C55] relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-white/30 to-white/10" />
                <div className="absolute -bottom-40 -right-40 w-[30rem] h-[30rem] rounded-full bg-white opacity-20 blur-[100px]" />
                <div className="absolute top-20 left-10 w-[20rem] h-[20rem] rounded-full bg-white opacity-10 blur-[80px]" />

                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <motion.h2 {...fade()} className="text-4xl sm:text-5xl font-outfit font-black text-white mb-6 leading-tight">
                        Let's Advance Global Biosimilar Access Together
                    </motion.h2>
                    <motion.p {...fade(0.1)} className="text-white/90 text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed font-medium transition-colors">
                        Partner with Provis to accelerate your biosimilar portfolio with proven technologies, comprehensive development support and a shared commitment to expanding patient access to life-changing biologics.
                    </motion.p>
                    <motion.div {...fade(0.2)} className="flex flex-col sm:flex-row gap-5 justify-center">
                        <Link href="/contact" className="px-10 py-5 rounded-full text-base font-bold text-[#F26522] bg-white hover:bg-gray-50 transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1">
                            Partner With Us
                        </Link>
                        <Link href="/products" className="px-10 py-5 rounded-full text-base font-bold border-2 border-white/30 text-white hover:bg-white/10 transition-all duration-300">
                            View Pipeline
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
