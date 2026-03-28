"use client";

import { motion } from "framer-motion";
import {
    Zap, Rocket, Users2, ShieldCheck,
    ChevronRight, ArrowRight, Quote, HeartHandshake,
    Briefcase, Plus, CheckCircle2, Heart, Award, Wallet
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
        role: "R&D Scientist",
        quote: "What I enjoy most at Provis is the ability to move ideas quickly from the lab to real development programs. You’re not just doing experiments but you see how your work contributes to actual products.",
    },
    {
        role: "Sr. Scientist – Peptide Chemistry",
        quote: "Peptide synthesis can be challenging, but the team environment here makes problem-solving collaborative. There’s always someone willing to share ideas and help improve a process",
    },
    {
        role: "QA Manager",
        quote: "Quality here isn’t just a compliance requirement, it’s part of how every team works. It’s satisfying to know the systems we build support reliable products for global customers.",
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

// Benefits Data
const benefits = [
    {
        icon: <Heart className="w-6 h-6 text-[#1E3A8A]" />,
        title: "Health & Wellbeing",
        desc: "Comprehensive medical coverage, mental health resources and wellness programs designed for you and your family."
    },
    {
        icon: <Wallet className="w-6 h-6 text-[#1E3A8A]" />,
        title: "Financial Security",
        desc: "Competitive compensation and performance-based incentives"
    },
    {
        icon: <Award className="w-6 h-6 text-[#1E3A8A]" />,
        title: "Continuous Learning",
        desc: "Generous stipends for conferences, courses and certifications to keep you at the forefront of science."
    },
    {
        icon: <Users2 className="w-6 h-6 text-[#1E3A8A]" />,
        title: "Work-Life Integration",
        desc: "Flexible working hours and generous PTO to ensure you have time to recharge and pursue passions outside the lab."
    }
];

export default function CareersContent() {
    return (
        <section className="bg-white font-outfit overflow-hidden">

            {/* 1. HERO SECTION */}
            <div className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFF7F2] to-white">
                {/* Abstract Background Vectors */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#F26522]/10 rounded-full blur-3xl mix-blend-multiply" />
                    <div className="absolute top-1/2 -left-24 w-72 h-72 bg-[#F26522]/5 rounded-full blur-3xl mix-blend-multiply" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFF0E6] border border-[#F26522]/20 text-[#F26522] text-sm font-bold uppercase tracking-widest mb-8">
                                <Rocket className="w-4 h-4" />
                                Join Our Mission
                            </div>
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#1E3A8A] tracking-tight mb-8">
                                Build the <br />
                                <span className="text-[#F26522] relative inline-block">
                                    Future
                                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#F26522]/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                                        <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
                                    </svg>
                                </span> of Biotech
                            </h1>
                            <p className="text-xl text-[#475569] leading-relaxed max-w-xl font-medium mb-10">
                                We're looking for visionary scientists, engineers and innovators to help us advance life sciences and create a healthier, sustainable world.
                            </p>

                            <div className="flex flex-col sm:flex-row items-start gap-4">
                                <a href="#open-roles" className="w-full sm:w-auto px-8 py-4 bg-[#F26522] text-white font-bold rounded-full hover:bg-[#E85D1C] hover:shadow-[0_8px_30px_rgba(242,101,34,0.3)] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 group">
                                    View Open Roles
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </a>
                                <a href="#life-at-provis" className="w-full sm:w-auto px-8 py-4 bg-white text-[#1E3A8A] font-bold rounded-full hover:bg-gray-50 border border-[#E2E8F0] shadow-sm transition-all flex items-center justify-center gap-2">
                                    Life at Provis
                                </a>
                            </div>
                        </motion.div>
                        
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="relative w-full aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl"
                        >
                            <Image
                                src="/provis-biolabs-team-collaboration.png"
                                alt="Provis Biolabs Biopharmaceutical Team Collaboration"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/40 to-transparent pointer-events-none" />
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* 2. LIFE AT PROVIS (Visual Grid) */}
            <div id="life-at-provis" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="text-sm font-bold tracking-widest uppercase text-[#F26522] mb-3">Our Culture</h2>
                        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E3A8A] mb-6">Life at Provis</h3>
                        <p className="text-lg text-[#64748B] font-medium leading-relaxed">
                            More than just a laboratory. We provide an ecosystem designed to accelerate your potential, foster groundbreaking discoveries and support your overall well-being.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
                        {/* Large Main Feature */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="md:col-span-8 relative rounded-[2.5rem] overflow-hidden group h-[300px] md:h-full"
                        >
                            <Image
                                src="/about-lab.webp"
                                alt="Provis Biolabs State-of-the-Art Biologics Laboratory"
                                fill
                                sizes="(max-width: 768px) 100vw, 66vw"
                                loading="lazy"
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/80 via-[#1E3A8A]/20 to-transparent" />
                            <div className="absolute bottom-0 left-0 p-8 md:p-10 w-full">
                                <h4 className="text-white text-2xl md:text-3xl font-bold mb-2">State-of-the-art Facilities</h4>
                                <p className="text-blue-100 font-medium max-w-md">Work with advanced R&D and GMP facilities.</p>
                            </div>
                        </motion.div>

                        <div className="md:col-span-4 flex flex-col gap-6">
                            {/* Top Right */}
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="relative rounded-[2.5rem] overflow-hidden group h-[300px] md:h-[calc(50%-12px)] bg-[#F8FAFC]"
                            >
                                <Image
                                    src="/quality-lab.webp"
                                    alt="Provis Biolabs Analytical Chemistry and Quality Control Lab"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    loading="lazy"
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/80 to-transparent" />
                                <div className="absolute bottom-0 left-0 p-8 w-full">
                                    <h4 className="text-white text-xl font-bold mb-1">Uncompromising Quality</h4>
                                    <p className="text-blue-100/90 text-sm font-medium">Quality and compliance at every step.</p>
                                </div>
                            </motion.div>

                            {/* Bottom Right */}
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="relative rounded-[2.5rem] overflow-hidden h-[300px] md:h-[calc(50%-12px)] p-8 flex flex-col justify-end text-white shadow-xl group"
                            >
                                <Image
                                    src="/global-team.jpg"
                                    alt="Provis Biolabs Global Research Team"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    loading="lazy"
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/80 via-[#1E3A8A]/30 to-transparent" />
                                <div className="relative z-10">
                                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
                                        <Users2 className="w-6 h-6 text-white" />
                                    </div>
                                    <h4 className="text-2xl font-bold mb-2 text-white">A Global Team</h4>
                                    <p className="text-white/90 font-medium text-sm">Collaborate with multidisciplinary scientific teams.</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

           
            {/* 4. WELLBEING & BENEFITS */}
            <div className="py-24 bg-white border-t border-[#E2E8F0]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-16 items-start">
                        <div className="lg:col-span-5 lg:sticky lg:top-32">
                            <h2 className="text-sm font-bold tracking-widest uppercase text-[#F26522] mb-3">Rewards & Wellness</h2>
                            <h3 className="text-4xl sm:text-5xl font-black text-[#1E3A8A] mb-6 leading-tight">Supporting your life, inside and out</h3>
                            <p className="text-[#64748B] text-lg font-medium leading-relaxed mb-8">
                                We believe that groundbreaking science requires a foundation of personal wellbeing and security. Our comprehensive benefits package is designed to support you at every stage of your life and career.
                            </p>
                        </div>

                        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
                            {benefits.map((benefit, idx) => (
                                <motion.div 
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-[#F8FAFC] border border-[#E2E8F0] p-8 rounded-[2rem] hover:bg-white hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center mb-6">
                                        {benefit.icon}
                                    </div>
                                    <h4 className="text-xl font-bold text-[#1E3A8A] mb-3">{benefit.title}</h4>
                                    <p className="text-[#64748B] font-medium leading-relaxed text-sm">{benefit.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* 5. TESTIMONIALS (Out of the Box Design) */}
            <div className="py-24 bg-[#FAFAFA] border-t border-[#E2E8F0] relative overflow-hidden">
                {/* Large decorative quote mark */}
                <div className="absolute -top-10 -left-10 text-[#F26522]/5">
                    <Quote className="w-64 h-64 rotate-180" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div className="max-w-xl">
                            <h3 className="text-4xl lg:text-5xl font-black text-[#1E3A8A] leading-tight">
                                Hear from the minds making the magic happen
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

                                <div className="mt-auto">
                                    <p className="text-sm font-semibold text-[#F26522] mt-1">{test.role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 6. OPEN ROLES CTA */}
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
                                We're actively recruiting talented individuals across R&D, Quality Assurance, Manufacturing and Business Development.
                            </p>

                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <a
                                    href="mailto:career@provisbiolabs.com"
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
