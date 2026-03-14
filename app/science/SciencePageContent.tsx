"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
    Microscope, Network, FlaskConical, LineChart, Factory,
    ChevronRight, ArrowRight, Rocket, ShieldCheck
} from "lucide-react";

// =====================================================================
// 📝 ALL PAGE DATA — EDIT HERE
// Simply modify, add, or remove items in these arrays.
// =====================================================================

const researchBullets = [
    "Directed evolution to create novel proteins with desired properties",
    "Protein engineering to design and modify proteins for improved functionality",
    "CRISPR-Cas-based gene editing for precise genetic modifications",
    "Synthetic biology to design and construct novel biological systems and expression platforms",
];

const focusAreas = [
    { name: "Bio - APIs", href: "/products/bio-apis" },
    { name: "Recombinant Bioreagents", href: "/products/recombinant-bio-reagents" },
    { name: "Synthetic Peptides", href: "/synthetic-peptides" },
];

const technologies = [
    { title: "Sustainable Methods", desc: "Developing new products through sustainable, eco-friendly methods.", color: "emerald", image: "/science and tech/sustainable.jpg" },
    { title: "Advanced Molecular Biology", desc: "Utilizing advanced molecular biology and modern bioprocessing techniques.", color: "blue", image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=2670&auto=format&fit=crop" },
    { title: "Bioinformatics", desc: "Incorporating bioinformatics and data analytics to optimize research outcomes.", color: "purple", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop" },
    { title: "Recombinant Innovation", desc: "Innovating in recombinant protein and enzyme production workflows.", color: "orange", image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=2670&auto=format&fit=crop" },
];

const capabilities = [
    {
        title: "Strain Development",
        icon: Microscope,
        items: [
            "Gene-to-product development",
            "Strong expertise in vector design and Molecular cloning",
            "High throughput clone selection",
            "Wide range of host systems",
        ],
    },
    {
        title: "Process Development",
        icon: FlaskConical,
        items: [
            "Upstream process development for high cell density fermentation",
            "Media and feed development",
            "Product recovery and chromatographic purification processes",
            "Liquid and lyophilization process development",
            "Process development by Design of Experiments (DOE)",
        ],
    },
    {
        title: "Analytical Development",
        icon: LineChart,
        items: [
            "Wide range of protein and enzyme assays",
            "Bio-physical and biological characterization assays",
            "HPLC, Mass spectrometry (MS), NMR and CD Spectral analysis",
            "Cell based immunoassays",
            "Method development and validations as per ICH guidelines",
        ],
    },
    {
        title: "Manufacturing Capabilities",
        icon: Factory,
        items: [
            "Versatile manufacturing capable of producing complex biotech products",
            "Upstream fermentation & Wide range of purification technologies",
            "Large-scale yielding upto multi kL fermentation capacity",
            "Products in liquid and lyophilised forms",
            "Utilizes single-use manufacturing technologies for safety",
            "cGMP-certified facility adhering to ISO 9001:2015 and GMP standards",
        ],
    },
];

// ✏️ PIPELINE — Edit products here
const pipeline = [
    {
        title: "Bio-APIs",
        gradient: "from-[#EFF6FF] to-white",
        products: ["Botulinum Toxin", "Collagenase"],
    },
    {
        title: "Recombinant Proteins & Enzymes",
        gradient: "from-[#FFF5F0] to-white",
        products: ["Proteinase K", "Recombinant Insulin", "Transferrin", "DNA Polymerase"],
    },
    {
        title: "Synthetic Peptides",
        gradient: "from-[#F8FAFC] to-white",
        products: ["ACTH (Desmopressin)", "Buserelin (Degarlix)", "Degarelix", "Leuprolide", "Octreotide"],
    },
];

// ✏️ CERTIFICATIONS — Edit certification badges here
const certifications = [
    { name: "WHO-GMP Certified", file: "who-gmp.webp" },
    { name: "GMP Certified Practice", file: "gmp.webp" },
    { name: "ISO 9001:2015", file: "iso.webp" },
    { name: "Halal Certified", file: "halal.webp" },
    { name: "Kosher Certified", file: "kosher.webp" },
];

// =====================================================================
// COMPONENT — Touch only if you want to change the layout/style
// =====================================================================

const fade = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
});

const techColors: Record<string, { gradient: string; iconBg: string; iconColor: string }> = {
    emerald: { gradient: "from-emerald-500/20 to-teal-500/5", iconBg: "bg-emerald-500/20", iconColor: "text-emerald-400" },
    blue: { gradient: "from-[#0047CC]/20 to-blue-500/5", iconBg: "bg-[#0047CC]/20", iconColor: "text-blue-400" },
    purple: { gradient: "from-purple-500/20 to-fuchsia-500/5", iconBg: "bg-purple-500/20", iconColor: "text-purple-400" },
    orange: { gradient: "from-[#F26522]/20 to-orange-500/5", iconBg: "bg-[#F26522]/20", iconColor: "text-[#F26522]" },
};

export default function SciencePageContent() {
    return (
        <>
            {/* ── Hero ─────────────────────────────── */}
            <section className="relative overflow-hidden pt-36 pb-20 bg-[#F8FAFC]">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F26522] to-[#FF8C55]" />
                <div className="absolute inset-0 opacity-[0.025]"
                    style={{
                        backgroundImage: "linear-gradient(#1E3A8A 1px,transparent 1px),linear-gradient(90deg,#1E3A8A 1px,transparent 1px)",
                        backgroundSize: "40px 40px",
                    }} />
                <div className="absolute top-20 right-0 w-[40rem] h-[40rem] bg-gradient-to-br from-[#1E3A8A]/5 to-[#F26522]/5 rounded-full blur-[100px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.p {...fade()} className="text-sm font-bold tracking-widest uppercase text-[#F26522] mb-3">Innovation at Core</motion.p>
                    <motion.h1 {...fade(0.1)} className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1E3A8A] leading-tight mb-6">
                        Science &amp; Technology
                    </motion.h1>
                    <motion.div {...fade(0.2)} className="space-y-4 max-w-3xl text-lg text-[#475569] leading-relaxed font-medium">
                        <p>We continuously invest in R&amp;D and expand our scientific research team to drive innovation. Our R&amp;D pipeline focuses on developing cutting-edge biotechnological solutions, including BIO-APIs, recombinant bioreagents and therapeutic peptides.</p>
                        <p>We prioritize projects with significant potential to enhance product quality and efficiency, ensuring they meet stringent regulatory standards and market demands.</p>
                    </motion.div>
                </div>
            </section>

            {/* ── Research Focus & Strategy ──────── */}
            <section className="py-24 bg-white border-b border-[#E2E8F0]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <motion.div {...fade(0)}>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-[#FFF5F0] rounded-xl text-[#F26522]"><Microscope className="w-6 h-6" /></div>
                                <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A8A]">Research Focus</h2>
                            </div>
                            <div className="space-y-4 text-[#475569] leading-relaxed">
                                <p>In the competitive manufacturing landscape, we prioritize research by investing in cutting-edge technologies to enhance bio-products.</p>
                                <ul className="space-y-3 mt-6">
                                    {researchBullets.map((item, i) => (
                                        <li key={i} className="flex gap-3">
                                            <ChevronRight className="w-5 h-5 text-[#F26522] flex-shrink-0 mt-0.5" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="mt-6 font-medium text-[#1E3A8A]">Together, these areas reflect our commitment to advancing Biomanufacturing sector.</p>
                            </div>
                        </motion.div>

                        <motion.div {...fade(0.2)} className="bg-[#FAFAFA] rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#F26522]/5 rounded-bl-[100px]" />
                            <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4 relative z-10">Our R&amp;D Strategy</h2>
                            <p className="text-[#475569] leading-relaxed mb-8 relative z-10">
                                Our R&amp;D strategy is driven by a world-class in-house development team dedicated to ongoing innovation and value creation. We focus on continuous innovation across our portfolios to create value-generating products. We prioritize sustainable methods in developing new products, aligning with global environmental goals.
                            </p>

                            <h3 className="font-bold text-[#1E3A8A] mb-4 uppercase tracking-wider text-sm">Focus Areas:</h3>
                            <div className="grid gap-3 relative z-10">
                                {focusAreas.map((item) => (
                                    <Link key={item.name} href={item.href} className="flex items-center justify-between p-4 bg-white rounded-xl border border-[#E2E8F0] hover:border-[#F26522] hover:shadow-md transition-all group">
                                        <span className="font-bold text-[#1E3A8A] group-hover:text-[#F26522] transition-colors">{item.name}</span>
                                        <ArrowRight className="w-4 h-4 text-[#94A3B8] group-hover:text-[#F26522] group-hover:translate-x-1 transition-all" />
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── Technologies ───────────────────────── */}
            <section className="py-24 bg-[#1E3A8A] text-white overflow-hidden relative">
                <div className="absolute inset-0 bg-[url('/hero-bg.webp')] opacity-10 bg-cover bg-center mix-blend-overlay" />
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div {...fade()} className="mb-16 max-w-3xl">
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#F26522] mb-6">Cutting-edge Technologies</h2>
                        <p className="text-white/80 leading-relaxed text-lg">
                            We are dedicated to building and investing in cutting-edge technologies to accelerate our scientific endeavors, helping us expand and push the boundaries of science.
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {technologies.map((tech, i) => {
                            const c = techColors[tech.color];
                            return (
                                <motion.div key={i} {...fade(0.1 * i)}
                                    className="group bg-white/5 border border-white/10 p-1 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-sm overflow-hidden relative">
                                    <div className="bg-[#1E3A8A] p-6 rounded-[calc(1rem-4px)] flex flex-col h-full">
                                        <div className={`w-full h-40 rounded-xl mb-6 bg-gradient-to-br ${c.gradient} border border-white/5 flex items-center justify-center relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500`}>
                                            <Image 
                                                src={tech.image} 
                                                alt={tech.title}
                                                fill
                                                className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A] via-transparent to-transparent opacity-60" />
                                            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '12px 12px' }} />
                                        </div>
                                        <h4 className="font-bold text-lg mb-2 text-white">{tech.title}</h4>
                                        <p className="text-sm text-white/80 leading-relaxed">{tech.desc}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── Capabilities ─────────────────────── */}
            <section className="py-24 bg-[#FAFAFA]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div {...fade()} className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A8A]">Comprehensive Capabilities</h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {capabilities.map((cap, i) => {
                            const Icon = cap.icon;
                            return (
                                <motion.div key={cap.title} {...fade(0.1 * i)}
                                    className="bg-white p-8 rounded-[2rem] border border-[#E2E8F0] shadow-sm hover:shadow-lg hover:border-[#F26522]/30 transition-all">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="p-3 rounded-xl bg-[#EFF6FF] text-[#1E3A8A]"><Icon className="w-6 h-6" /></div>
                                        <h3 className="text-2xl font-bold text-[#1E3A8A]">{cap.title}</h3>
                                    </div>
                                    <ul className="space-y-3">
                                        {cap.items.map((item, j) => (
                                            <li key={j} className="flex gap-3 text-[#475569]">
                                                <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${i % 2 === 0 ? "bg-[#F26522]" : "bg-[#1E3A8A]"}`} />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── Development Pipeline ─────────────── */}
            <section className="py-24 bg-white border-t border-[#E2E8F0]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div {...fade()} className="mb-16">
                        <span className="text-sm font-bold tracking-widest uppercase text-[#F26522] mb-3 block">Looking Ahead</span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A8A]">Development Pipeline</h2>
                    </motion.div>

                    <div className="grid lg:grid-cols-3 gap-6">
                        {pipeline.map((group, i) => (
                            <motion.div key={group.title} {...fade(0.1 * i)}
                                className={`bg-gradient-to-b ${group.gradient} border border-[#E2E8F0] rounded-3xl p-8`}>
                                <h3 className="text-xl font-bold text-[#1E3A8A] mb-5">{group.title}</h3>
                                <ul className="space-y-3">
                                    {group.products.map((product) => (
                                        <li key={product} className="flex items-center gap-3 text-[#64748B] font-medium bg-white px-4 py-2.5 rounded-lg border border-[#E2E8F0]">
                                            <Rocket className="w-4 h-4 text-[#F26522] flex-shrink-0" />
                                            {product}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Quality Systems & Certifications ── */}
            <section className="py-24 bg-white border-t border-[#E2E8F0] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#F26522] rounded-full blur-[150px] opacity-[0.03] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <motion.div {...fade()}>
                            <div className="mx-auto w-16 h-16 rounded-2xl bg-[#FFF0E6] border border-[#ffedd5] flex items-center justify-center mb-6">
                                <ShieldCheck className="w-8 h-8 text-[#F26522]" strokeWidth={1.5} />
                            </div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E3A8A] mb-6">
                                Globally Recognized <br /><span className="text-[#F26522]">Quality Systems</span>
                            </h2>
                            <p className="text-[#475569] text-lg leading-relaxed max-w-2xl mx-auto">
                                Quality is engineered into every stage of our operations. We maintain a robust, globally compliant quality management system designed to meet and exceed rigorous international regulatory expectations for biomanufacturing.
                            </p>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
                        {certifications.map((cert, i) => (
                            <motion.div key={cert.name}
                                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-40px" }}
                                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                                className="bg-white border border-[#E2E8F0] shadow-sm rounded-2xl p-6 flex flex-col items-center justify-center gap-4 hover:border-[#F26522]/30 hover:shadow-lg transition-all duration-300 group">
                                <div className="w-28 h-28 relative flex items-center justify-center bg-[#F8FAFC] rounded-full group-hover:bg-white transition-colors duration-300 p-5 border border-transparent group-hover:border-[#E2E8F0] overflow-hidden">
                                    <img src={`/certifications/${cert.file}`} alt={cert.name}
                                        className="max-w-[110%] max-h-[110%] object-contain mix-blend-multiply filter group-hover:scale-110 transition-transform duration-500"
                                        onError={(e) => { (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="%23cbd5e1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m4.9 4.9 14.2 14.2"/></svg>'; }}
                                    />
                                </div>
                                <span className="text-[#1e293b] text-sm font-bold text-center leading-tight">{cert.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ──────────────────────────────── */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="bg-gradient-to-br from-[#F26522] to-[#FF8C55] rounded-[2.5rem] p-10 sm:p-14 relative overflow-hidden shadow-xl">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
                        <h3 className="text-3xl sm:text-4xl font-black text-white mb-6 relative z-10 font-outfit">Explore Collaboration Opportunities</h3>
                        <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto relative z-10 font-medium leading-relaxed">
                            Contact us to learn more about our development pipeline and explore opportunities for collaboration and partnership in bringing several bioproducts to market.
                        </p>
                        <Link href="/contact" className="inline-flex justify-center items-center px-10 py-4 rounded-full text-base font-bold text-[#F26522] bg-white hover:bg-gray-50 shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all relative z-10">
                            Partner With Us
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
