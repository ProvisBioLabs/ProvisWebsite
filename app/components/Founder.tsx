"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Award, Briefcase, FileText, FlaskConical, Quote, ArrowRight, Linkedin } from "lucide-react";

const achievements = [
    {
        icon: <Briefcase strokeWidth={1.5} className="w-6 h-6" />,
        value: "23+",
        label: "Years in Biopharma",
    },
    {
        icon: <FlaskConical strokeWidth={1.5} className="w-6 h-6" />,
        value: "20+",
        label: "Biosimilars Launched",
    },
    {
        icon: <FileText strokeWidth={1.5} className="w-6 h-6" />,
        value: "10+",
        label: "Publications",
    },
];

export default function Founder() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
    const yValue = useTransform(scrollYProgress, [0, 1], [40, -40]);

    return (
        <section ref={containerRef} className="relative py-12 pb-24 lg:pt-16 lg:pb-15 bg-[#F8FAFC] overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#FFF0E5] to-transparent rounded-full blur-3xl opacity-50 pointer-events-none transform translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#FFF5F0] to-transparent rounded-full blur-3xl opacity-50 pointer-events-none transform -translate-x-1/3 translate-y-1/3" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">

                    {/* Image / Portrait Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-5 relative lg:sticky lg:top-32"
                    >
                        <div className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-[2rem] overflow-hidden shadow-2xl shadow-[#F26522]/10 bg-[#F8FAFC] ring-1 ring-[#F26522]/20 backdrop-blur-sm">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#E05A1A]/80 via-transparent to-transparent opacity-0 mix-blend-overlay transition-opacity duration-700 hover:opacity-100 z-10" />
                            {/* Portrait */}
                            <Image
                                src="/drbalareddy1.png"
                                alt="Dr. Bala Reddy — Founder and Managing Director of Provis Biolabs"
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                loading="lazy"
                                className="object-cover object-top filter contrast-105"
                            />

                            {/* Floating glass badge */}
                            <div className="absolute bottom-6 left-6 right-6 z-20">
                                <div className="bg-white/80 backdrop-blur-xl border border-white/50 rounded-2xl p-5 shadow-lg shadow-[#1E3A8A]/5 border-[#F26522]/20">
                                    <h3 className="font-outfit font-black text-2xl text-[#1E3A8A] mb-1">
                                        Dr. Bala Reddy
                                    </h3>
                                    <p className="text-[#F26522] font-semibold text-sm tracking-wide uppercase">
                                        Founder & Managing Director
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Decorative circle behind image */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-[#FFF0E5] rounded-full -z-10 animate-[spin_60s_linear_infinite]" />
                    </motion.div>

                    {/* Content Side */}
                    <div className="lg:col-span-7 pt-4">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-[#F26522]/20 shadow-sm mb-10">
                                <Award className="w-4 h-4 text-[#F26522]" />
                                <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#1E3A8A]">Our Founder</span>
                            </div>

                            {/* Quote Section */}
                            <div className="mb-16 relative pl-6 sm:pl-10">
                                <Quote className="w-20 h-20 text-[#FFF0E5] absolute -top-8 -left-4 sm:-left-6 -z-10 transform -scale-x-100" />
                                <p className="text-2xl sm:text-[28px] font-outfit font-medium text-[#1E3A8A] leading-relaxed mb-6">
                                    &ldquo;I founded Provis Biolabs in 2019 with a deep belief that India can develop and deliver world-class bioreagents to the global market.&rdquo;
                                </p>
                                <p className="text-lg sm:text-[19px] font-outfit font-light text-[#475569] leading-relaxed mb-6">
                                    Over two decades in biopharma taught me that true innovation lies not just in creating products, but in making them accessible, reliable and sustainable.
                                </p>
                                <p className="text-lg sm:text-[19px] font-outfit font-light text-[#475569] leading-relaxed mb-8">
                                    Today, with several commercialized products, global partnerships and a growing commercial presence in the USA, I am proud of how far we have come. Our vision is to be a trusted global leader in life sciences, advancing a healthier and more sustainable world.
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-px bg-[#F26522]" />
                                    <span className="font-outfit font-bold text-lg text-[#F26522]">— Dr. Bala Reddy</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Achievements Grid */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-16"
                        >
                            {achievements.map((item, i) => (
                                <div key={i} className="flex flex-col items-center text-center p-6 rounded-[2rem] bg-white border border-[#F26522]/10 shadow-sm hover:shadow-md hover:border-[#FFF0E5] transition-all duration-300 group">
                                    <div className="w-12 h-12 rounded-[1rem] bg-[#FFF5F0] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#F26522] group-hover:shadow-[0_4px_16px_rgba(242,101,34,0.3)] transition-all duration-300">
                                        <div className="text-[#F26522] group-hover:text-white transition-colors duration-300">
                                            {item.icon}
                                        </div>
                                    </div>
                                    <h4 className="font-outfit font-black text-3xl text-[#1E3A8A] mb-1">{item.value}</h4>
                                    <p className="text-sm font-semibold text-[#64748B] leading-tight uppercase tracking-wider">{item.label}</p>
                                </div>
                            ))}
                        </motion.div>
                        
                        {/* Connect Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="flex flex-col sm:flex-row items-center gap-6"
                        >
                            <Link
                                href="https://www.linkedin.com/in/bala-reddy-phd-4b8949b/"
                                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#1E3A8A] to-[#1e40af] text-white px-8 py-4 rounded-2xl font-outfit font-bold text-lg shadow-xl shadow-blue-900/10 hover:shadow-2xl hover:shadow-[#F26522]/20 hover:-translate-y-1 transition-all duration-300"
                            >
                                <span>Connect with Dr. Bala Reddy</span>
                                <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-[#F26522] transition-colors duration-300">
                                    <ArrowRight className="w-4 h-4 text-white" />
                                </div>
                            </Link>
                        </motion.div>
                    
                    </div>
                </div>
            </div>
        </section>
    );
}
