"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fade = (delay = 0) => ({
    initial: false, // lag free for above the fold
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
});

const fadeWithInitial = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
});

export default function SustainabilityContent() {
    return (
        <div className="bg-white">
            {/* ── Hero Section ─────────────────────────── */}
            <section className="relative pt-36 pb-24 overflow-hidden bg-[#F8FAFC]">
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: "linear-gradient(#1E3A8A 1px,transparent 1px),linear-gradient(90deg,#1E3A8A 1px,transparent 1px)",
                        backgroundSize: "40px 40px",
                    }} />
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#10B981] to-[#F26522]" />
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div {...fade(0)}>
                            <p className="text-sm font-bold tracking-widest uppercase text-[#10B981] mb-3">
                                ESG Transformation
                            </p>
                            <h1 className="text-5xl sm:text-6xl font-black text-[#1E3A8A] leading-[1.1] mb-6 tracking-tight">
                                Growing responsibly by building a <span className="text-[#10B981]">sustainable future</span> for everyone.
                            </h1>
                            <p className="text-lg text-[#475569] leading-relaxed font-medium mb-8">
                                At Provis Biolabs, sustainability is not just a goal, but the very core of our operations. Guided by our strong legacy of innovation and excellence, we are committed to charting a responsible future with our ESG roadmap, integrating sustainable practices across every facet of our business. We prioritise the health and well-being of our employees, value chain partners, and communities, fostering a safe, inclusive, and supportive ecosystem where every stakeholder thrives.
                            </p>
                            <a href="#policies" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white bg-[#10B981] hover:bg-[#059669] shadow-[0_8px_30px_rgb(16,185,129,0.3)] hover:-translate-y-0.5 transition-all duration-300">
                                Download Sustainability Report
                            </a>
                        </motion.div>
                        <motion.div {...fade(0.2)} className="relative h-[500px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl">
                            <Image
                                src="/science and tech/sustainable-biomanufacturing-provis-biolabs.webp"
                                alt="Sustainable Biomanufacturing at Provis Biolabs"
                                fill
                                priority
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/40 to-transparent mix-blend-multiply" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── ESG Vision & Pillars ─────────────────────────── */}
            <section className="py-24 bg-white border-b border-[#E2E8F0]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div {...fadeWithInitial()} className="text-center max-w-4xl mx-auto mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A8A] mb-6">ESG Vision</h2>
                        <blockquote className="text-2xl font-medium text-[#10B981] leading-relaxed italic border-l-4 border-[#F26522] pl-6 text-left inline-block">
                            "To create a net positive impact across people, planet, and product by building on our legacy of responsible growth and sustainability."
                        </blockquote>
                        <p className="text-[#475569] mt-8 text-lg font-medium">
                            Our ESG vision defines the future we aim to build. To bring this vision to life, we are shaping an ESG strategy anchored in three core pillars:
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { 
                                title: "Environmental Stewardship", 
                                img: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800&auto=format&fit=crop", 
                                desc: "Reducing our ecological footprint through emissions reduction, water stewardship, circular practices, and biodiversity conservation." 
                            },
                            { 
                                title: "Purposeful Governance", 
                                img: "https://images.unsplash.com/photo-1554774853-719586f82d77?q=80&w=800&auto=format&fit=crop", 
                                desc: "Embedding ethics, transparency, and accountability in our operations." 
                            },
                            { 
                                title: "Ecosystem Collaboration", 
                                img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop", 
                                desc: "Working closely with our partners, and communities to advance shared sustainability goals." 
                            }
                        ].map((pillar, i) => (
                            <motion.div key={i} {...fadeWithInitial(i * 0.1)} className="group bg-white border border-[#E2E8F0] rounded-[2rem] overflow-hidden hover:shadow-[0_20px_50px_rgba(16,185,129,0.12)] transition-shadow duration-500">
                                <div className="relative h-56 w-full overflow-hidden">
                                    <Image src={pillar.img} alt={pillar.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                </div>
                                <div className="p-8">
                                    <h3 className="text-xl font-bold text-[#1E3A8A] mb-4">{pillar.title}</h3>
                                    <p className="text-[#475569] font-medium leading-relaxed">{pillar.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Resource Management ─────────────────────────── */}
            <section className="py-24 bg-[#F8FAFC] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#10B981] rounded-full blur-[150px] opacity-[0.03] pointer-events-none" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div {...fadeWithInitial()} className="mb-16 max-w-3xl">
                        <span className="text-sm font-bold tracking-widest uppercase text-[#F26522] mb-3 block">Operations</span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A8A] mb-6">Resource Management</h2>
                        <p className="text-[#475569] text-lg font-medium leading-relaxed">
                            We are always seeking to reduce our environmental footprint, while maintaining the highest standards of quality and performance. Through innovative practices and thoughtful planning, we continuously evaluate the best use of resources across our operations.
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-8 mb-8">
                        <motion.div {...fadeWithInitial(0.1)} className="group bg-white rounded-[2rem] border border-[#E2E8F0] overflow-hidden shadow-sm hover:shadow-xl transition-all">
                            <div className="relative h-64 w-full overflow-hidden">
                                <Image src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=800&auto=format&fit=crop" alt="Green Chemistry Principles" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <h3 className="absolute bottom-6 left-8 text-2xl font-bold text-white">Green Chemistry Principles</h3>
                            </div>
                            <div className="p-8">
                                <p className="text-[#475569] leading-relaxed">Our R&D teams apply green chemistry principles to minimise use of hazardous substances, and optimise reaction conditions to reduce energy consumption and waste generation. This ensures that we create more sustainable products for our customers.</p>
                            </div>
                        </motion.div>
                        
                        <motion.div {...fadeWithInitial(0.2)} className="group bg-white rounded-[2rem] border border-[#E2E8F0] overflow-hidden shadow-sm hover:shadow-xl transition-all">
                            <div className="relative h-64 w-full overflow-hidden">
                                <Image src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop" alt="Water and Energy Conservation" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <h3 className="absolute bottom-6 left-8 text-2xl font-bold text-white">Water & Energy Conservation</h3>
                            </div>
                            <div className="p-8">
                                <p className="text-[#475569] leading-relaxed">We implement technologies that reduce energy and water consumption without compromising on product quality. At the shopfloor level, dedicated teams lead initiatives to optimise usage, implement recycling practices, and minimise waste.</p>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div {...fadeWithInitial(0.3)} className="bg-white rounded-[2rem] border border-[#E2E8F0] overflow-hidden shadow-sm flex flex-col md:flex-row">
                        <div className="relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden group">
                            <Image src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=800&auto=format&fit=crop" alt="Waste Management" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                        </div>
                        <div className="p-8 md:p-12 md:w-3/5">
                            <h3 className="text-3xl font-bold text-[#1E3A8A] mb-6">Waste Management</h3>
                            <p className="text-[#475569] mb-8 font-medium">We take a proactive approach to managing and reducing waste across all our operations. Our philosophy includes:</p>
                            
                            <ul className="space-y-6">
                                <li>
                                    <h4 className="font-bold text-[#10B981] mb-1">Zero Liquid Discharge (ZLD) Systems</h4>
                                    <p className="text-sm text-[#475569] leading-relaxed">We have implemented state-of-the-art Zero Liquid Discharge systems across our manufacturing facilities. By treating and recycling all water used, we minimise consumption and eliminate wastewater impact.</p>
                                </li>
                                <li>
                                    <h4 className="font-bold text-[#10B981] mb-1">Segregation and Recycling</h4>
                                    <p className="text-sm text-[#475569] leading-relaxed">We segregate hazardous and non-hazardous waste at the source. Our goal is to achieve zero waste to landfill, and we are steadily progressing toward it.</p>
                                </li>
                                <li>
                                    <h4 className="font-bold text-[#10B981] mb-1">Waste-to-Energy Initiatives</h4>
                                    <p className="text-sm text-[#475569] leading-relaxed">We explore innovative solutions to convert waste into energy, reducing our reliance on conventional energy sources and lowering our carbon footprint.</p>
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── Solar & Packaging ─────────────────────────── */}
            <section className="py-24 bg-white border-y border-[#E2E8F0]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        <motion.div {...fadeWithInitial(0.1)} className="group relative h-[450px] rounded-[2.5rem] overflow-hidden shadow-lg">
                            <Image src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop" alt="Renewable Solar Energy" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/90 via-[#1E3A8A]/40 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-10">
                                <h3 className="text-3xl font-bold text-white mb-4">Renewable Solar Energy</h3>
                                <p className="text-white/90 leading-relaxed font-medium">As part of our commitment to reducing our carbon footprint, we've integrated solar energy into our manufacturing operations, reducing reliance on non-renewable sources and cutting greenhouse gas emissions. This transition strengthens our pledge to a cleaner, climate-resilient future.</p>
                            </div>
                        </motion.div>
                        
                        <motion.div {...fadeWithInitial(0.2)} className="group relative h-[450px] rounded-[2.5rem] overflow-hidden shadow-lg">
                            <Image src="/products-showcase.webp" alt="Sustainable Packaging" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#10B981]/90 via-[#10B981]/40 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-10">
                                <h3 className="text-3xl font-bold text-white mb-4">Sustainable Packaging</h3>
                                <p className="text-white/90 leading-relaxed font-medium">At Provis Biolabs, we're committed to minimising the environmental impact of our packaging materials. We continuously explore sustainable packaging options that are recyclable or made from renewable resources, significantly reducing plastic waste.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── Standards & Certifications ─────────────────────────── */}
            <section className="py-24 bg-[#FAFAFA] border-b border-[#E2E8F0]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div {...fadeWithInitial()} className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A8A] mb-6">Upholding Standards</h2>
                        <p className="text-[#475569] text-lg leading-relaxed">
                            Provis Biolabs adheres to the highest standards of occupational safety, environmental protection, sustainability, and quality management. Our commitment is reflected in our alignment with <strong>ISO 9001</strong>, <strong>ISO 14001</strong>, and <strong>ISO 45001</strong> standards, driving meaningful and continuous improvements across our operations.
                        </p>
                    </motion.div>

                    <motion.div {...fadeWithInitial(0.2)} className="flex flex-wrap justify-center gap-12 items-center">
                        {[
                            { name: "ISO 9001:2015", img: "/certifications/iso.webp" },
                            { name: "ISO 14001:2015", img: "/certifications/iso-14001.png" },
                            { name: "ISO 45001:2018", img: "/certifications/iso-45001.png" }
                        ].map((cert) => (
                            <div key={cert.name} className="relative h-24 w-36 grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100 flex items-center justify-center hover:scale-105">
                                <Image src={cert.img} alt={cert.name} fill className="object-contain" sizes="144px" />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ── Workplace Health & Safety ─────────────────────────── */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div {...fadeWithInitial()} className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A8A] mb-6">Workplace Health and Safety</h2>
                        <p className="text-[#475569] text-lg leading-relaxed">
                            At Provis Biolabs, we proactively safeguard our workforce through integrated risk assessments, a strengthened incident reporting system, and continuous process improvements.
                        </p>
                    </motion.div>
                    
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Risk Prevention", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop", desc: "Hazards are identified early through thorough risk assessments, allowing us to implement controls that mitigate potential harm." },
                            { title: "Incident Reporting", img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop", desc: "Our Incident Prevention program tracks near-misses, enabling a proactive approach to refining safety measures." },
                            { title: "Engagement", img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=600&auto=format&fit=crop", desc: "Monthly safety campaigns empower employees to recognise risks and consistently equip areas with advanced safety controls." },
                            { title: "Process Safety First", img: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=600&auto=format&fit=crop", desc: "Every new and existing process prioritises safety at every step – from development to execution." },
                        ].map((item, i) => (
                            <motion.div key={i} {...fadeWithInitial(0.1 * i)} className="group bg-[#FAFAFA] rounded-2xl border border-[#E2E8F0] overflow-hidden hover:shadow-lg transition-all">
                                <div className="relative h-40 w-full overflow-hidden">
                                    <Image src={item.img} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                </div>
                                <div className="p-6">
                                    <h4 className="text-lg font-bold text-[#1E3A8A] mb-3">{item.title}</h4>
                                    <p className="text-[#475569] text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── ESG Policies ─────────────────────────── */}
            <section id="policies" className="py-24 bg-white border-t border-[#E2E8F0]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div {...fadeWithInitial()} className="mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A8A] mb-4">ESG Policies</h2>
                        <p className="text-[#475569] text-lg">
                            Our ESG policies reflect our commitment to sustainable, ethical, and responsible business practices. Click on the links below to download the policy PDFs.
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {[
                            "Code of Business Conduct and Ethics Policy",
                            "Environmental Stewardship Policy",
                            "Whistle Blower Policy",
                            "EHS Policy",
                            "Board Diversity Policy",
                            "Biodiversity Policy",
                            "Sustainable Procurement Policy",
                            "Supplier Code of Conduct",
                            "Anti Human Trafficking & Modern Slavery Policy",
                            "Climate Change Policy",
                            "CSR Policy",
                            "Energy Policy",
                            "Water Policy",
                            "Information Security Policy"
                        ].map((policy, i) => (
                            <motion.a 
                                key={i} 
                                href="#"
                                {...fadeWithInitial(0.05 * (i % 4))} 
                                className="group flex items-start gap-3 p-5 bg-[#FAFAFA] border border-[#E2E8F0] rounded-xl hover:border-[#10B981] hover:bg-[#D1FAE5]/30 transition-all"
                            >
                                <svg className="w-5 h-5 text-[#94A3B8] group-hover:text-[#10B981] flex-shrink-0 mt-0.5 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                                <span className="text-sm font-semibold text-[#1E3A8A] group-hover:text-[#10B981] transition-colors">{policy}</span>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
