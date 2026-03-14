"use client";

import { motion } from "framer-motion";
import {
    Zap, Rocket, Users2, ShieldCheck,
    ChevronRight, ArrowRight, Quote, HeartHandshake,
    Microscope, Briefcase, GraduationCap
} from "lucide-react";
import Image from "next/image";

// Simple animation variants
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

// Testimonials Data
const testimonials = [
    {
        name: "Dr. Sarah Jenkins",
        role: "Lead Research Scientist",
        quote: "Provis isn't just a workplace; it's a launchpad for ideas. The autonomy we have to pursue innovative protocols in peptide synthesis is unparalleled. I feel like I'm genuinely shaping the future of therapeutics here.",
        image: "https://i.pravatar.cc/150?u=sarah"
    },
    {
        name: "David Chen",
        role: "Process Development Engineer",
        quote: "The culture here is intensely collaborative. When scaling from lab to 300L fermentation, you need a team that moves as one. At Provis, the synergy between R&D and manufacturing is seamlessly built into our DNA.",
        image: "https://i.pravatar.cc/150?u=david"
    },
    {
        name: "Elena Rodriguez",
        role: "Quality Assurance Manager",
        quote: "I've worked in biopharma for 15 years, and the commitment to uncompromised quality at Provis is the strongest I've seen. We don't just meet compliance standards; we define them. It's rewarding to stand behind our products.",
        image: "https://i.pravatar.cc/150?u=elena"
    }
];

// Core Values Data
const coreValues = [
    {
        icon: <Zap className="w-8 h-8 text-[#F26522]" />,
        title: "Pioneering Innovation",
        desc: "We actively encourage bold thinking and experimental approaches to solve complex biotechnology hurdles."
    },
    {
        icon: <Users2 className="w-8 h-8 text-[#F26522]" />,
        title: "Radical Collaboration",
        desc: "Break down silos. Our best breakthroughs happen when diverse disciplines collide in the lab."
    },
    {
        icon: <ShieldCheck className="w-8 h-8 text-[#F26522]" />,
        title: "Uncompromising Integrity",
        desc: "Quality is never an afterthought. We uphold the highest ethical and scientific standards in every batch."
    },
    {
        icon: <HeartHandshake className="w-8 h-8 text-[#F26522]" />,
        title: "Empowered Growth",
        desc: "We invest in your trajectory. Access leading-edge tech and continuous learning to accelerate your career."
    }
];

export default function CareersContent() {
    return (
        <section className="bg-white font-outfit overflow-hidden">

            {/* 1. HERO SECTION */}
            <div className="relative pt-24 pb-32 lg:pt-32 lg:pb-40 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFF7F2] to-white">
                {/* Abstract Background Vectors */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#F26522]/10 rounded-full blur-3xl mix-blend-multiply" />
                    <div className="absolute top-1/2 -left-24 w-72 h-72 bg-[#F26522]/5 rounded-full blur-3xl mix-blend-multiply" />
                </div>

                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFF0E6] border border-[#F26522]/20 text-[#F26522] text-sm font-bold uppercase tracking-widest mb-8">
                            <Rocket className="w-4 h-4" />
                            Join Our Mission
                        </div>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#1E3A8A] tracking-tight mb-8">
                            Build the <span className="text-[#F26522] relative">
                                Future
                                <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#F26522]/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
                                </svg>
                            </span> of Biotech
                        </h1>
                        <p className="text-xl sm:text-2xl text-[#475569] leading-relaxed max-w-3xl mx-auto font-light mb-12">
                            We're looking for visionary scientists, engineers, and innovators to help us advance life sciences and create a healthier, sustainable world.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a href="#open-roles" className="w-full sm:w-auto px-8 py-4 bg-[#F26522] text-white font-bold rounded-full hover:bg-[#E85D1C] hover:shadow-xl hover:shadow-[#F26522]/20 transition-all flex items-center justify-center gap-2 group">
                                View Open Roles
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a href="#life-at-provis" className="w-full sm:w-auto px-8 py-4 bg-white text-[#1E3A8A] font-bold rounded-full hover:bg-gray-50 border border-[#E2E8F0] shadow-sm transition-all flex items-center justify-center gap-2">
                                Life at Provis
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* 2. CORE VALUES GRID */}
            <div id="life-at-provis" className="py-24 bg-white relative z-20 -mt-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-black text-[#1E3A8A] mb-4">Why Work With Us?</h2>
                        <p className="text-lg text-[#64748B] max-w-2xl mx-auto">More than just a laboratory. We provide an ecosystem designed to accelerate your potential and foster groundbreaking discoveries.</p>
                    </div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {coreValues.map((value, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeInUp}
                                className="bg-white p-8 rounded-3xl border border-[#E2E8F0] hover:border-[#F26522]/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-[#FFF7F2] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold text-[#1E3A8A] mb-3">{value.title}</h3>
                                <p className="text-[#64748B] leading-relaxed">{value.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* 3. TESTIMONIALS (Out of the Box Design) */}
            <div className="py-24 bg-[#FAFAFA] border-y border-[#E2E8F0] relative overflow-hidden">
                {/* Large decorative quote mark */}
                <div className="absolute -top-10 -left-10 text-[#F26522]/5">
                    <Quote className="w-64 h-64 rotate-180" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div className="max-w-xl">
                            <h2 className="text-sm font-bold tracking-widest uppercase text-[#F26522] mb-3">The Provis Experience</h2>
                            <h3 className="text-4xl lg:text-5xl font-black text-[#1E3A8A] leading-tight">
                                Hear from the minds making the magic happen.
                            </h3>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {testimonials.map((test, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2, duration: 0.8 }}
                                className="bg-white p-8 rounded-[2rem] border border-[#E2E8F0] shadow-sm relative group"
                            >
                                <Quote className="w-10 h-10 text-[#F26522]/20 absolute top-8 right-8 group-hover:scale-110 group-hover:text-[#F26522]/40 transition-all" />

                                <p className="text-[#475569] text-lg leading-relaxed mb-8 italic relative z-10">
                                    "{test.quote}"
                                </p>

                                <div className="flex items-center gap-4">
                                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#FFF0E6]">
                                        <Image
                                            src={test.image}
                                            alt={test.name}
                                            fill
                                            className="object-cover"
                                            unoptimized
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#1E3A8A]">{test.name}</h4>
                                        <p className="text-sm font-medium text-[#F26522]">{test.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 4. OPEN ROLES CTA */}
            <div id="open-roles" className="py-32 bg-white relative">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] rounded-[3rem] p-10 sm:p-16 relative overflow-hidden shadow-2xl"
                    >
                        {/* Orange accent splash */}
                        <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#F26522]/90 rounded-full blur-3xl mix-blend-screen" />
                        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-[#F26522]/60 rounded-full blur-3xl mix-blend-screen" />

                        <div className="relative z-10">
                            <Briefcase className="w-16 h-16 text-white mb-6 mx-auto opacity-90" />
                            <h2 className="text-3xl sm:text-5xl font-black text-white mb-6">Ready to make an impact?</h2>
                            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
                                We're actively recruiting talented individuals across R&D, Quality Assurance, Manufacturing, and Business Development.
                            </p>

                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <a
                                    href="mailto:hr@provisbiolabs.com"
                                    className="px-8 py-4 bg-white text-[#F26522] font-bold rounded-full hover:bg-gray-50 hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
                                >
                                    Email Resume
                                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </a>
                                <a
                                    href="/contact"
                                    className="px-8 py-4 bg-transparent border border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all flex items-center justify-center"
                                >
                                    Contact HR Dept
                                </a>
                            </div>
                            <p className="text-blue-200/60 text-sm mt-8">Please include your cover letter and desired role in the subject line</p>
                        </div>
                    </motion.div>
                </div>
            </div>

        </section>
    );
}
