"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
    Check, ArrowRight, Dna, FlaskConical, Droplets,
    Microscope, Factory, FileSignature, CheckCircle2,
    ThermometerSnowflake, Wind, Activity, ShieldCheck,
    Award, ChevronRight
} from "lucide-react";

const fade = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
});

const processes = [
    { num: "01", title: "Strain Engineering", desc: "Molecular cloning and specialized cell line development." },
    { num: "02", title: "Upstream", desc: "Advanced fermentation and high-density cell culture optimization." },
    { num: "03", title: "Downstream", desc: "Robust purification, chromatography and recovery processing." },
    { num: "04", title: "Analysis", desc: "Rigorous ICH-validated method validation and release testing." },
    { num: "05", title: "GMP Production", desc: "End-to-end commercial-scale GMP manufacturing." },
    { num: "06", title: "Tech Transfer", desc: "Seamless scale-up documentation and technology transfer." },
];

const services = [
    {
        title: "Strain Engineering",
        desc: "Complete gene-to-product development workflows, encompassing state-of-the-art molecular cloning, tailored expression optimization and stable cell line generation.",
        bullets: ["Molecular cloning", "Expression optimization", "Cell line development"],
        icon: Dna
    },
    {
        title: "Upstream Processing",
        desc: "Custom upstream bioprocess architectures engineered for exceptional cell density, maximum expression yield and seamless industrial scalability.",
        bullets: ["Media optimization", "Fermentation development", "Scale-down models"],
        icon: FlaskConical
    },
    {
        title: "Downstream Processing",
        desc: "High-yield purification strategies tailored to ensure uncompromised product purity and recovery levels, especially for complex biologic profiles.",
        bullets: ["Chromatography", "Filtration", "Process characterization"],
        icon: Droplets
    },
    {
        title: "Analytical Development",
        desc: "Comprehensive ICH-validated analytical methodologies developed for precise product characterization, rigorous release testing and long-term stability profiling.",
        bullets: ["HPLC & Mass Spec", "Biological activity assays", "Stability studies"],
        icon: Microscope
    },
    {
        title: "GMP Manufacturing",
        desc: "World-class, WHO-GMP certified manufacturing ecosystem featuring multi-kL fermentation capacity. Strict adherence to antibiotic-free and solvent-free processing.",
        bullets: ["Multi-kL fermentation", "Single-use systems", "Clean room operations"],
        icon: Factory
    },
    {
        title: "Tech Transfer",
        desc: "Meticulous bench-to-commercial translation with exhaustive technology transfer documentation, ensuring consistent quality at GMP volumes.",
        bullets: ["Scale-up studies", "Process validation", "Batch records"],
        icon: FileSignature
    }
];



export default function CDMOContent() {
    return (
        <>
            {/* ── Hero ─────────────────────────────── */}
            <section className="relative overflow-hidden pt-36 pb-20 bg-white border-b border-[#E2E8F0]">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F26522] to-[#FF8C55]" />
                <div
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: "radial-gradient(#1E3A8A 1px, transparent 1px)",
                        backgroundSize: "32px 32px",
                    }}
                />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                        <motion.div {...fade()}>
                            <p className="text-sm font-bold tracking-widest uppercase text-[#F26522] mb-3">
                                CDMO Services
                            </p>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1E3A8A] leading-tight mb-6">
                                Your Product<br />
                                <span className="text-[#94A3B8]">Our Expertise</span>
                            </h1>
                            <p className="text-lg text-[#475569] leading-relaxed mb-8 max-w-lg font-medium">
                                Delivering comprehensive contract development and manufacturing solutions tailored to accelerate your biologics from discovery to commercialization, backed by uncompromising quality and WHO-GMP standards.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-bold text-white bg-[#F26522] hover:bg-[#d95a1e] transition-all duration-300 shadow-[0_8px_24px_rgba(242,101,34,0.25)]">
                                    Start Your Project <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div {...fade(0.15)} className="relative lg:h-[500px] w-full bg-gradient-to-br from-[#F8FAFC] to-[#F1F5F9] rounded-3xl border border-[#E2E8F0] shadow-sm flex flex-col items-center justify-center overflow-hidden group">
                           <Image
                                src="/provis-biolabs-cdmo-manufacturing-facility.webp"
                                alt="Provis Biolabs CDMO manufacturing facility"
                                fill
                                priority
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>



            {/* ── Our Process ──────────────────────── */}
            <section className="py-24 bg-white border-b border-[#E2E8F0]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div {...fade()} className="mb-14 text-center">
                        <p className="text-sm font-bold tracking-widest uppercase text-[#F26522] mb-3">Workflow</p>
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A8A]">Our Process</h2>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative">
                        {/* Hidden connecting line for md and lg screens */}
                        <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-[#1E3A8A]/10 via-[#1E3A8A]/30 to-[#1E3A8A]/10 z-0"></div>

                        {processes.map((p, i) => (
                            <motion.div key={p.num} {...fade(i * 0.1)} className="relative flex flex-col items-center text-center z-10 group">
                                <div className="w-14 h-14 rounded-full bg-white border-2 border-[#E2E8F0] group-hover:border-[#F26522] flex items-center justify-center mb-5 text-[#1E3A8A] font-bold text-lg shadow-sm transition-all duration-300">
                                    {p.num}
                                </div>
                                <h4 className="font-bold text-[#1E3A8A] text-sm mb-2">{p.title}</h4>
                                <p className="text-xs text-[#64748B] leading-relaxed max-w-[140px]">{p.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Our Services ─────────────────────── */}
            <section className="py-24 bg-[#F8FAFC]" id="services">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div {...fade()} className="mb-14 text-center">
                        <p className="text-sm font-bold tracking-widest uppercase text-[#F26522] mb-3">Expertise</p>
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A8A]">Full-Service CDMO Capabilities</h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((svc, i) => {
                            const Icon = svc.icon;
                            return (
                                <motion.div
                                    key={svc.title}
                                    {...fade(i * 0.08)}
                                    className="bg-white border border-[#E2E8F0] rounded-2xl p-8 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-[#1E3A8A]/20 transition-all duration-300 flex flex-col h-full group"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-[#1E3A8A] flex items-center justify-center mb-6 group-hover:bg-[#1E3A8A] group-hover:text-white transition-colors">
                                        <Icon className="w-5 h-5" strokeWidth={2} />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#1E3A8A] mb-3">{svc.title}</h3>
                                    <p className="text-[#64748B] text-sm leading-relaxed mb-6 flex-grow">{svc.desc}</p>
                                    <ul className="flex flex-col gap-2.5 pt-6 border-t border-[#E2E8F0]">
                                        {svc.bullets.map((b) => (
                                            <li key={b} className="flex items-start gap-2.5 text-[13px] text-[#475569] font-medium">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#F26522] mt-1.5 shrink-0" /> {b}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* ── Manufacturing Platforms ─────────────────── */}
            <section className="py-20 bg-white border-t border-[#E2E8F0]">
                <section className=" ">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div {...fade()} className="mb-14 text-center">
                            <p className="text-sm font-bold tracking-widest uppercase text-[#F26522] mb-3">Scale & Capacity</p>
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A8A]">Our Manufacturing Platforms</h2>
                    </motion.div>
                </div>
            </section>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

          
            {/* ── Product Coverage ─────────────────── */}
            <section className="py-24 bg-[#F8FAFC] border-t border-[#E2E8F0]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div {...fade()} className="mb-14 text-center">
                        <p className="text-sm font-bold tracking-widest uppercase text-[#F26522] mb-3">Product Coverage</p>
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A8A]">Product Categories We Manufacture</h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            { title: "Therapeutic Proteins", items: ["Cytokines and growth factors", "Hormones and peptides", "Enzymes for therapeutic use"] },
                            { title: "Bio-APIs", items: ["Bulk drug substance for biologics", "Active pharmaceutical ingredients"] },
                            { title: "Recombinant Enzymes", items: ["Custom recombinant proteins", "Research-grade bioreagents", "Diagnostic enzymes"] }
                        ].map((cat, i) => (
                            <motion.div key={cat.title} {...fade(i * 0.1)} className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-8 shadow-sm">
                                <h3 className="text-lg font-bold text-[#1E3A8A] mb-6 pb-4 border-b border-[#E2E8F0]">{cat.title}</h3>
                                <ul className="flex flex-col gap-3">
                                    {cat.items.map(item => (
                                        <li key={item} className="flex items-start gap-3 text-sm text-[#475569] font-medium">
                                            <Check className="w-4 h-4 text-[#F26522] mt-0.5 shrink-0" strokeWidth={3} /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>



            {/* ── Final CTA ────────────────────────── */}
            <section className="py-24 bg-white border-t border-[#E2E8F0]">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <motion.h2 {...fade(0.1)} className="text-3xl lg:text-4xl font-bold text-[#1E3A8A] mb-4">
                        Interested in a facility tour or partnership?
                    </motion.h2>
                    <motion.p {...fade(0.2)} className="text-lg text-[#64748B] mb-10 max-w-2xl mx-auto">
                        Connect with our business development team to explore how our CDMO capabilities can accelerate your biologics pipeline.
                    </motion.p>
                    <motion.div {...fade(0.3)}>
                        <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 rounded-xl font-bold text-white bg-[#F26522] hover:bg-[#d95a1e] transition-all shadow-[0_8px_24px_rgba(242,101,34,0.25)]">
                            Schedule a Visit <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
