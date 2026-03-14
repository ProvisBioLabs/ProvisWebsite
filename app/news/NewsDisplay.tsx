"use client";

import { motion } from "framer-motion";
import { CalendarDays, MapPin, ArrowRight, Building2, FlaskConical, Quote } from "lucide-react";

const newsItems = [
    {
        id: "expansion-jadcherla-2024",
        date: "May 2024",
        category: "Corporate Expansion",
        title: "State-of-the-art Manufacturing Facility in Jadcherla",
        description: "To support our rapidly growing global ambitions, Provis Biolabs has initiated a massive scale-up of R&D operations alongside the construction of a state-of-the-art, large-scale fermentation-based manufacturing facility in Jadcherla, Hyderabad. This major expansion triggered widespread recruitment efforts across Production, QC, QA, EHS, and IT",
        icon: Building2,
        accent: "#1E3A8A",
        location: "Jadcherla, Hyderabad",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000",
    },
    {
        id: "foundation-2019",
        date: "September 12, 2019",
        category: "Company Milestone",
        title: "Foundation of Provis Biolabs",
        description: "Provis Biolabs was officially established with a core mission to specialize in the development, manufacturing, and marketing of complex biotechnology products using sustainable methods. Our scientific journey began with the setup of a dedicated R&D laboratory at Aspire-BioNest, University of Hyderabad",
        icon: FlaskConical,
        accent: "#F26522",
        location: "University of Hyderabad",
        image: "https://images.unsplash.com/photo-1532187863486-abf9db5c28cf?auto=format&fit=crop&q=80&w=1000",
    }
];

export default function NewsDisplay() {
    return (
        <section className="bg-white py-24 font-outfit">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-20">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[#F26522] font-bold tracking-widest uppercase text-sm mb-4"
                    >
                        Provis Timeline
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1E3A8A] leading-tight"
                    >
                        Corporate News & <br />
                        <span className="text-[#94A3B8]">Key Milestones</span>
                    </motion.h1>
                </div>

                <div className="space-y-24">
                    {newsItems.map((news, idx) => (
                        <motion.div
                            key={news.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
                        >
                            {/* Image Side */}
                            <div className="w-full lg:w-1/2 relative group">
                                <div className="aspect-[16/10] overflow-hidden rounded-[40px] shadow-2xl relative z-10">
                                    <img
                                        src={news.image}
                                        alt={news.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/40 to-transparent" />
                                </div>
                                {/* Decorative elements */}
                                <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#F26522]/10 rounded-full blur-3xl" />
                                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#1E3A8A]/5 rounded-full blur-3xl" />
                                <div className={`absolute top-1/2 -translate-y-1/2 ${idx % 2 === 0 ? '-right-10' : '-left-10'} hidden lg:block`}>
                                </div>
                            </div>
                            {/* Content Side */}
                            <div className="w-full lg:w-1/2">
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="px-4 py-1.5 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-bold text-[#F26522] uppercase tracking-wider">
                                        {news.category}
                                    </span>
                                    <div className="h-px flex-grow bg-slate-100" />
                                </div>

                                <h2 className="text-3xl sm:text-4xl font-black text-[#1E3A8A] mb-6 leading-tight hover:text-[#F26522] transition-colors cursor-default">
                                    {news.title}
                                </h2>

                                <div className="flex flex-wrap items-center gap-6 mb-8 text-[#64748B] font-medium text-sm sm:text-base">
                                    <div className="flex items-center gap-2">
                                        <CalendarDays className="w-5 h-5 text-[#F26522]" />
                                        {news.date}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin className="w-5 h-5 text-[#F26522]" />
                                        {news.location}
                                    </div>
                                </div>

                                <p className="text-[#475569] text-lg leading-relaxed mb-10 font-medium">
                                    {news.description}
                                </p>

                                <button className="inline-flex items-center gap-3 text-[#F26522] font-black uppercase tracking-widest text-sm group">
                                    Full Article <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Quote / Mission */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mt-32 p-12 sm:p-20 bg-[#F8FAFC] rounded-[60px] border border-[#E2E8F0] text-center relative overflow-hidden"
                >
                    <Quote className="absolute top-10 left-10 w-20 h-20 text-[#1E3A8A]/5 rotate-180" />
                    <Quote className="absolute bottom-10 right-10 w-20 h-20 text-[#1E3A8A]/5 " />
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#1E3A8A] mb-6 italic">
                        &quot;Innovation is at the heart of our journey. Every milestone we achieve is a step closer to a sustainable biotech future&quot;
                    </h3>
                </motion.div>
            </div>
        </section>
    );
}
