"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const categories = [
    {
        id: "BIO-APIS",
        title: "Bio-APIs",
        shortDesc: "Pharmaceutical grade active ingredients",
        href: "/products/bio-apis",
        image: "/products/bioapi.jpg"
    },
    {
        id: "RECOMBINANT BIO-REAGENTS",
        title: "Recombinant Bio-Reagents",
        shortDesc: "100% Animal Origin-Free essential reagents",
        href: "/products/recombinant-bio-reagents",
        image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "SYNTHETIC PEPTIDES",
        title: "Synthetic Peptides",
        shortDesc: "Custom peptide synthesis services",
        href: "/synthetic-peptides",
        image: "/products/syntheticpeptides.png"
    },
    {
        id: "BIOSIMILARS",
        title: "Biosimilars",
        shortDesc: "End-to-End complex biologics pipeline",
        href: "/biosimilars",
        image:"/products/biosimilars.png"
    }
];

const products = [
    {
        category: "BIO-APIS",
        tag: "Oncology",
        name: "L-Asparaginase",
        desc: "WHO-GMP bulk enzyme for acute lymphoblastic leukemia (ALL) treatment — depletes asparagine to inhibit tumor cell growth",
    },
    {
        category: "BIO-APIS",
        tag: "Oncology",
        name: "Pegaspargase",
        desc: "PEGylated L-Asparaginase with extended half-life — reduces immunogenicity and dosing frequency in ALL protocols",
    },
    {
        category: "BIO-APIS",
        tag: "Cardiology",
        name: "Streptokinase",
        desc: "Thrombolytic enzyme for acute myocardial infarction and pulmonary embolism",
    },
    {
        category: "BIO-APIS",
        tag: "Orthopedics",
        name: "Sodium Hyaluronate",
        desc: "Injectable-grade hyaluronic acid for viscosupplementation and ophthalmic applications",
    },
    {
        category: "RECOMBINANT BIO-REAGENTS",
        tag: "Bioprocessing, Cell & Gene Therapy",
        name: "Provinase®",
        desc: "Recombinant endonuclease (Benzonase® alternative) — WHO-GMP, AOF, USP-grade for host cell DNA removal in biologics",
    },
    {
        category: "RECOMBINANT BIO-REAGENTS",
        tag: "Cell Culture",
        name: "Recombinant Trypsin",
        desc: "USP-grade AOF trypsin for cell dissociation, viral vaccine production, and recombinant insulin processing",
    },
    {
        category: "RECOMBINANT BIO-REAGENTS",
        tag: "Insulin Production",
        name: "Carboxypeptidase B",
        desc: "Recombinant serine protease for C-terminal lysine and arginine residue removal in insulin production",
    },
    {
        category: "RECOMBINANT BIO-REAGENTS",
        tag: "Vaccine Stabilizer, Cell Culture",
        name: "Recombinant Human Albumin",
        desc: "AOF vaccine stabilizer and cell culture supplement — replaces bovine serum albumin",
    },
    {
        category: "RECOMBINANT BIO-REAGENTS",
        tag: "Diagnostics",
        name: "Streptavidin",
        desc: "High-purity biotin-binding protein for diagnostics, purification, and imaging applications",
    },
    {
        category: "RECOMBINANT BIO-REAGENTS",
        tag: "Glycobiology",
        name: "PNGase F",
        desc: "Recombinant N-glycosidase for complete deglycosylation of glycoproteins in antibody characterization",
    },
    {
        category: "RECOMBINANT BIO-REAGENTS",
        tag: "Glycobiology",
        name: "PNGase F Flash™",
        logo: "/pngase f flash.png",
        desc: "Rapid deglycosylation protocol completing N-glycan removal in ~10 minutes for high-throughput workflows",
    },
    {
        category: "RECOMBINANT BIO-REAGENTS",
        tag: "Protein Production",
        name: "Enterokinase",
        desc: "Highly specific protease for fusion tag cleavage in recombinant protein production",
    },
    {
        category: "SYNTHETIC PEPTIDES",
        tag: "Custom Synthesis",
        name: "Custom Peptide Synthesis",
        desc: "GMP and research-grade synthetic peptides for therapeutics, diagnostics, and vaccine development",
    },
    {
        category: "BIOSIMILARS",
        tag: "Pipeline",
        name: "Biosimilar Pipeline",
        desc: "Active development of biosimilar candidates targeting high-unmet-need therapeutic areas",
    },
];

export default function Products() {
    return (
        <section id="products" className="py-24 lg:py-15 bg-[#F8FAFC]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header matching the mockup styling */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
                    className="mb-14 text-center max-w-3xl mx-auto"
                >
                    <h3 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#1E3A8A] mb-4 leading-tight">
                        <span className="text-[#F26522]">Our Products</span> <br />
                    </h3>
                </motion.div>

                {/* Highly Prominent Category Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
                    {categories.map((cat, i) => {
                        return (
                            <Link
                                key={cat.id}
                                href={cat.href}
                                className="block h-full"
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
                                    className="relative text-left p-6 h-full rounded-2xl border bg-white border-[#E2E8F0] hover:bg-white hover:border-[#F26522] hover:shadow-[0_8px_30px_rgba(242,101,34,0.15)] ring-0 hover:ring-1 hover:ring-[#F26522] transition-all duration-300 overflow-hidden group"
                                >
                                    <div className="mb-4">
                                        <div className="w-full h-32 rounded-xl overflow-hidden relative transition-all group-hover:ring-2 group-hover:ring-[#F26522]">
                                            <img
                                                src={cat.image}
                                                alt={cat.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-[#1E3A8A]/20 group-hover:bg-[#F26522]/30 transition-opacity duration-300" />
                                            <div className="absolute bottom-2 left-2">
                                                <span className="text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded-md shadow-md bg-white/90 text-[#1E3A8A] group-hover:bg-[#F26522] group-hover:text-white transition-colors">
                                                    {cat.id}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <h4 className="text-lg font-bold mb-2 transition-colors text-[#1E3A8A] group-hover:text-[#F26522]">
                                        {cat.title}
                                    </h4>
                                    <p className="text-sm text-[#64748B] leading-relaxed">
                                        {cat.shortDesc}
                                    </p>
                                </motion.div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
