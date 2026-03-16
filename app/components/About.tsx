"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Founder from "./Founder";

const values = [
    {
        letter: "P",
        word: "ioneering",
        title: "Research",
        desc: "Pushing the boundaries of bioscience to create breakthrough therapeutic solutions.",
    },
    {
        letter: "R",
        word: "eliable",
        title: "Partnerships",
        desc: "Building trust through consistency, transparency and long-term collaboration.",
    },
    {
        letter: "O",
        word: "utstanding",
        title: "Quality",
        desc: "WHO-GMP certified manufacturing — zero compromise at every step of production.",
    },
    {
        letter: "V",
        word: "ision for",
        title: "the Future",
        desc: "Investing in tomorrow's therapies and capabilities for global biopharma.",
    },
    {
        letter: "I",
        word: "ntegrity",
        title: "and Ethics",
        desc: "Animal origin-free. Ethically sourced. Transparent in science and business.",
    },
    {
        letter: "S",
        word: "ustainable",
        title: "Practices",
        desc: "Environmentally responsible production that scales without compromising the planet.",
    },
];

const milestones = [
    { year: "2019", label: "Founded in India" },
    { year: "2021", label: "WHO-GMP Certified" },
    { year: "2024", label: "USA Operations" },
    { year: "2025", label: "10+ Products Live" },
];

export default function About() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
    const imgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.0]);

    return (
        <section id="about" ref={sectionRef} className="bg-white overflow-hidden">

            {/* PART 1: Company Intro */}
            <div className="py-28 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">

                        {/* Left */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-1 h-6 bg-[#F26522] rounded-full" />
                                <span className="text-2xl font-bold tracking-[0.2em] uppercase text-[#F26522]">About Us</span>
                            </div>
                            <div className="space-y-5 text-[17px] text-[#5C4033] leading-[1.75]">
                              <p>
                                 Provis Biolabs is a <strong className="text-[#F26522] font-semibold">fast-growing biotechnology company</strong> specializing in premium bioreagents for global pharmaceutical and biopharmaceutical applications. Since our founding in 2019, we've commercialized a diverse portfolio of products with a robust and expanding pipeline. Our end-to-end capabilities cover R&D to GMP manufacturing, supported by <strong className="text-[#F26522] font-semibold">WHO-GMP, GLP, ISO 9001:2015, Halal and Kosher</strong> certifications, ensuring the highest quality standards throughout our operations.
                              </p>
                              <p>
                                Leveraging our state-of-the-at fermentation facility, we provide scalable production solutions to partners worldwide. With a growing network of distribution partners spanning the United States, Europe and Asia, we are rapidly expanding access to our high-quality, <strong className="text-[#F26522] font-semibold">animal origin-free (AOF)</strong> bioreagents across key global markets ensuring enhanced safety, ethical sourcing, environmental responsibility and streamlined regulatory compliance for our customers worldwide.
                              </p>
                            </div>

                            {/* Certification Logos */}
                            <div className="mt-10 flex flex-wrap gap-6 items-center">
                                {[
                                    { name: "WHO-GMP", img: "/certifications/who-gmp.webp" },
                                    { name: "GMP Certified", img: "/certifications/gmp.webp" },
                                    { name: "ISO Certified", img: "/certifications/iso.webp" },
                                    { name: "Halal", img: "/certifications/halal.webp" },
                                    { name: "Kosher", img: "/certifications/kosher.webp" },
                                ].map((cert) => (
                                    <motion.div
                                        key={cert.name}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                        className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                                    >
                                        <img src={cert.img} alt={cert.name} className="h-full w-auto object-contain" />
                                    </motion.div>
                                ))}
                            </div>

                            {/* Milestone strip */}
                            <div className="mt-12 pt-10 border-t border-[#FFF0E5] grid grid-cols-2 sm:grid-cols-4 gap-4">
                                {milestones.map((m, i) => (
                                    <motion.div
                                        key={m.year}
                                        initial={{ opacity: 0, y: 16 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                                        className="flex flex-col"
                                    >
                                        <div className="text-2xl font-outfit font-black text-[#F26522] mb-1">{m.year}</div>
                                        <div className="text-[11px] font-semibold text-[#FF9A5C] leading-tight">{m.label}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right — parallax image */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="relative h-[580px] rounded-[2.5rem] overflow-hidden"
                        >
                            <motion.div style={{ scale: imgScale }} className="absolute inset-0">
                                <Image
                                    src="/provis-biolabs-research-lab.webp"
                                    alt="Provis Biolabs laboratory"
                                    fill
                                    priority
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className="object-cover"
                                />
                            </motion.div>
                            <div className="absolute inset-0 bg-gradient-to-t from-[#F26522]/30 via-transparent to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6">
                               
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
            <div id="founder">
                         <Founder />
            </div>
            {/* PART 2: Vision & Mission */}
            <div id="about-purpose" className="py-24 bg-[#FFF5F0]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-center mb-16"
                    >
                        {/* <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#F26522]">Purpose</span> */}
                        <h3 className="mt-3 text-4xl sm:text-5xl font-outfit font-black tracking-tight text-[#F26522] leading-tight">
                            Purpose
                        </h3>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Vision */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="relative bg-white rounded-[2rem] p-10 overflow-hidden group hover:shadow-[0_20px_60px_rgba(242,101,34,0.10)] transition-shadow duration-500"
                        >
                            <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#F26522] to-[#FF9A5C] rounded-l-[2rem]" />
                            <div className="absolute -right-16 -top-16 w-56 h-56 bg-[#F26522] opacity-[0.04] rounded-full group-hover:opacity-[0.07] transition-opacity duration-500" />
                            <div className="text-xs font-bold tracking-[0.2em] uppercase text-[#F26522] mb-4 ml-1">Our Vision</div>
                            <p className="text-[22px] font-outfit font-bold text-[#5C4033] leading-snug">
                                To be a trusted global leader in life sciences, advancing a healthier and more sustainable world through high-quality products.
                            </p>
                        </motion.div>

                        {/* Mission */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="relative bg-[#F26522] rounded-[2rem] p-10 overflow-hidden group hover:shadow-[0_20px_60px_rgba(242,101,34,0.18)] transition-shadow duration-500"
                        >
                            <div className="absolute -left-16 -bottom-16 w-56 h-56 bg-white opacity-10 rounded-full group-hover:opacity-20 transition-opacity duration-500" />
                            <div className="text-xs font-bold tracking-[0.2em] uppercase text-white mb-4">Our Mission</div>
                            <p className="text-[22px] font-outfit font-bold text-white leading-snug">
                                To empower the life sciences industry with quality, sustainably produced products that advance global health and environmental well-being.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* PART 3: PROVIS Values */}
            <div id="about-values" className="py-28 bg-white border-t border-[#FFF0E5]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="flex items-center gap-4 mb-16"
                    >
                        <div className="w-1 h-8 bg-[#F26522] rounded-full" />
                        <span className="text-2xl font-outfit font-black tracking-tight text-[#F26522]">Our Values</span>
                    </motion.div>

                    <div className="flex flex-wrap lg:flex-nowrap gap-4">
                        {values.map((v, i) => (
                            <motion.div
                                key={v.letter}
                                initial={{ opacity: 0, y: 32 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.7, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                                className="group relative flex-1 min-w-[140px] bg-[#FFF5F0] rounded-[1.75rem] p-6 cursor-default hover:shadow-[0_16px_48px_rgba(242,101,34,0.14)] transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                            >
                                {/* Hover bg tint */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#F26522]/0 to-[#F26522]/0 group-hover:from-[#F26522]/[0.05] group-hover:to-[#FF9A5C]/[0.05] transition-all duration-500 rounded-[1.75rem]" />

                                {/* Big letter + rest of word inline */}
                                <div className="flex items-end leading-none mb-4">
                                    <span className="font-outfit font-black text-[68px] leading-none text-[#F26522] group-hover:text-[#E05A1A] transition-colors duration-300">
                                        {v.letter}
                                    </span>
                                    <span className="text-[16px] font-semibold text-[#FF9A5C] pb-2 pl-0.5 leading-none group-hover:text-[#F26522] transition-colors duration-300">
                                        {v.word}
                                    </span>
                                </div>

                                {/* Accent line */}
                                <div className="w-8 h-[2.5px] bg-[#F26522] rounded-full mb-4 group-hover:w-14 transition-all duration-400" />

                                {/* Title */}
                                <div className="text-[15px] font-outfit font-bold text-[#F26522] leading-snug">
                                    {v.title}
                                </div>

                                {/* Description — slides in on hover */}
                                <div className="overflow-hidden transition-all duration-500 max-h-0 group-hover:max-h-24 mt-0 group-hover:mt-3">
                                    <p className="text-[12.5px] text-[#5C4033] leading-relaxed">
                                        {v.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
            {/* PART 4: CSR */}
            <div id="about-csr" className="py-24 bg-[#F8FAFC]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-center mb-16 max-w-3xl mx-auto"
                    >
                        <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#F26522] mb-3 block">Responsibility</span>
                        <h3 className="text-4xl sm:text-5xl font-outfit font-black tracking-tight text-[#1E3A8A] leading-tight mb-6">
                            Corporate Social Responsibility
                        </h3>
                        <p className="text-lg text-[#475569] leading-relaxed">
                            We are committed to fostering a positive impact on society and the environment through our Corporate Social Responsibility (CSR) initiatives. Our CSR objectives include:
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Supporting Education & Continuous Development",
                                desc: "We believe in the continuous growth and development of our employees. We provide comprehensive education programs and continuous training opportunities to enhance their skills and knowledge, ensuring they stay at the forefront of the industry.",
                                image: "/csr/education.png",
                                icon: (
                                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                )
                            },
                            {
                                title: "Promoting Gender Equality",
                                desc: "We are dedicated to creating an inclusive and equitable workplace. We strive to promote gender equality and empower all employees, regardless of gender, to achieve their full potential within our organization.",
                                image: "/csr/gender.png",
                                icon: (
                                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                )
                            },
                            {
                                title: "Generating Employment Opportunities",
                                desc: "We are committed to contributing to the local economy by generating employment opportunities for the local community. Our recruitment efforts focus on hiring local talent, thereby supporting the economic growth and development of local community.",
                                image: "/csr/employement.png",
                                icon: (
                                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                )
                            },
                            {
                                title: "Research Collaboration with Academic Institutions",
                                desc: "We collaborate with academic institutions on various R&D projects, ensuring a continuous exchange of knowledge and expertise. This collaboration strengthens our research capabilities and also contributes to the development of cutting-edge technologies and solutions that benefit both industry and society.",
                                image: "/csr/academic.png",
                                icon: (
                                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                    </svg>
                                )
                            }
                        ].map((csr, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className="bg-white rounded-[2.5rem] border border-[#E2E8F0] shadow-sm hover:shadow-[0_24px_60px_rgba(242,101,34,0.12)] hover:border-[#F26522]/30 transition-all duration-500 overflow-hidden group flex flex-col"
                            >
                                <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                                    <img 
                                        src={csr.image} 
                                        alt={csr.title} 
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
                                </div>
                                
                                <div className="p-8 lg:p-10 flex flex-col flex-grow">
                                    <div className="w-12 h-12 rounded-xl bg-[#FFF5F0] text-[#F26522] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#F26522] group-hover:text-white transition-all duration-500">
                                        {csr.icon}
                                    </div>
                                    <h4 className="text-xl lg:text-2xl font-bold text-[#1E3A8A] mb-4 leading-tight">{csr.title}</h4>
                                    <p className="text-[#64748B] text-[15px] lg:text-base leading-relaxed font-medium">
                                        {csr.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    );
}
