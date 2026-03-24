"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Calendar, MapPin, Rocket, Users, Presentation, Microscope, Landmark, FlaskConical, Globe, ArrowRight, Clock, CheckCircle2, Star, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface EventItem {
    id: string;
    day: string;
    month: string;
    year: string;
    category: string;
    title: string;
    description: string;
    icon: React.ElementType;
    location: string;
    booth: string;
    type: string;
    image: string;
    status: "upcoming" | "past";
    highlight?: boolean;
}

const eventItems: EventItem[] = [
    // ──────────── UPCOMING ────────────
    // {
    //     id: "biotech-summit-2026-march",
    //     day: "13",
    //     month: "MAR",
    //     year: "2026",
    //     category: "BIOTECH SUMMIT",
    //     title: "Asia Biotech Leaders Summit — Singapore",
    //     description: "Provis Biolabs will be attending the Asia Biotech Leaders Summit in Singapore. Join us as we present our latest advances in recombinant bioreagents and CDMO capabilities. Meet our team to explore collaboration opportunities and discover how we can support your next biologics project.",
    //     icon: Rocket,
    //     location: "Marina Bay Sands, Singapore",
    //     booth: "Booth #B12",
    //     type: "Summit",
    //     image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop",
    //     status: "upcoming",
    //     highlight: true,
    // },
    //    {
    //     id: "2026-march",
    //     day: "13",
    //     month: "MAR",
    //     year: "2026",
    //     category: "BIOTECH SUMMIT",
    //     title: "Asia Biotech Leaders Summit — Singapore",
    //     description: "Provis Biolabs will be attending the Asia Biotech Leaders Summit in Singapore. Join us as we present our latest advances in recombinant bioreagents and CDMO capabilities. Meet our team to explore collaboration opportunities and discover how we can support your next biologics project.",
    //     icon: Rocket,
    //     location: "Marina Bay Sands, Singapore",
    //     booth: "Booth #B12",
    //     type: "Summit",
    //     image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop",
    //     status: "upcoming",
    //     highlight: true,
    // },
    // ──────────── PAST ────────────
    {
        id: "biologics-workshop-2026",
        day: "27-28",
        month: "JAN",
        year: "2026",
        category: "CORPORATE EVENT",
        title: "Biologics Workshop 2026 — Mumbai",
        description: "Successfully wrapped up participation at the Biologics Workshop. Our team had engaging discussions at Booth M17, exploring opportunities in biologics development and biomanufacturing. To support our rapidly growing global ambitions, Provis Biolabs has initiated a massive scale-up of R&D operations alongside the construction of a state-of-the-art facility",
        icon: FlaskConical,
        location: "Mumbai, India",
        booth: "Booth M17",
        type: "Workshop",
        image: "/events/biologicsv2.jpg",
        status: "past",
    },
    {
        id: "bioasia-2026",
        day: "17-18",
        month: "FEB",
        year: "2026",
        category: "PHARMA CONFERENCE",
        title: "BioAsia 2026 — Hyderabad",
        description: "One of Asia's most prominent life sciences conferences. Our team connected with biotech innovators, pharma partners and industry leaders to explore bioprocessing and product development. The event provided a valuable platform to showcase our capabilities in recombinant proteins and CDMO services",
        icon: Globe,
        location: "HICC, Hyderabad",
        booth: "Stand #P27",
        type: "Conference",
        image: "/events/bioasia.jpg",
        status: "past",
    },
    {
        id: "medica-2025",
        day: "NOV",
        month: "2025",
        year: "2025",
        category: "DIAGNOSTICS SUMMIT",
        title: "MEDICA 2025 — Düsseldorf",
        description: "Returned with valuable industry insights and new connections in the IVD and diagnostics space. Showcased how our portfolio of recombinant proteins and enzymes can support reliable, scalable and high-quality diagnostic solutions for partners across the global diagnostics community",
        icon: Microscope,
        location: "Düsseldorf, Germany",
        booth: "Germany Pavilion",
        type: "Exhibition",
        image: "/events/medica.webp",
        status: "past",
    },
    {
        id: "cphi-frankfurt-2025",
        day: "28-30",
        month: "OCT",
        year: "2025",
        category: "GLOBAL PHARMA",
        title: "CPHI Frankfurt 2025 — Germany",
        description: "One of the world's largest pharma events. Key discussions centred around high-quality API manufacturing, custom peptide synthesis and strategic CDMO partnerships. We connected with global partners and innovators, reinforcing Provis Biolabs' growing global footprint",
        icon: Landmark,
        location: "Frankfurt, Germany",
        booth: "Stall G60, Hall 12.0",
        type: "Trade Show",
        image: "/events/cphi.jpg",
        status: "past",
    },
    {
        id: "peptides-symposium-2025",
        day: "25-26",
        month: "SEP",
        year: "2025",
        category: "PEPTIDE SYMPOSIUM",
        title: "Peptides & Complex Generics Symposium 2025",
        description: "Proud sponsor and participant. Engaging with researchers on custom peptide synthesis, peptide APIs, impurities and end-to-end CDMO services. The symposium brought together experts for high-value scientific exchanges",
        icon: FlaskConical,
        location: "The Lalit, Mumbai, India",
        booth: "Stall No. 10",
        type: "Symposium",
        image: "/events/symposium.jpg",
        status: "past",
    },
    {
        id: "bio-boston-2025",
        day: "16-19",
        month: "JUN",
        year: "2025",
        category: "BIOTECH CONVENTION",
        title: "BIO International Convention 2025 — Boston",
        description: "Representing India at the India Pavilion, our team showcased our portfolio of recombinant bioreagents designed to boost bioprocess efficiency. High engagement from global innovators in our Animal Origin-Free Trypsin and Endonuclease products",
        icon: Presentation,
        location: "Boston, USA",
        booth: "Booth #1065-C16",
        type: "Convention",
        image: "/events/biointernationalboston2025.jpg",
        status: "past",
    },
    {
        id: "global-biologics-2025",
        day: "16-17",
        month: "APR",
        year: "2025",
        category: "BIOLOGICS INDIA",
        title: "Global Biologics India 2025 — Hyderabad",
        description: "Focus on biologics and biomanufacturing. Engaged in meaningful conversations to strengthen business connections and explore collaboration opportunities. Expanding our presence in the biologics sector through technical excellence",
        icon: Users,
        location: "Hyderabad, India",
        booth: "BiotechStage",
        type: "Industry Meet",
        image: "/events/globalbiologics.jpg",
        status: "past",
    },
    {
        id: "ddd-workshop-2025",
        day: "28-31",
        month: "August",
        year: "2025",
        category: "ACADEMIC WORKSHOP",
        title: "Drug Discovery & Development (DDD) Workshop",
        description: "Our Founder presenting on bridging industry and academia. Themes included cell & gene therapies and strengthening India's global biotech leadership. Empowering the next generation of innovators with real-world biotech insights",
        icon: Presentation,
        location: "Univ. of Hyderabad, India",
        booth: "Speaker Session",
        type: "Workshop",
        image: "/events/ddd.jpg",
        status: "past",
    },
];

const upcomingEvents = eventItems.filter(e => e.status === "upcoming");
const pastEvents = eventItems.filter(e => e.status === "past");

function SectionLabel({ label, upcoming }: { label: string; upcoming?: boolean }) {
    return (
        <div className="flex items-center gap-4 mb-12">
            <div className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-black text-xs tracking-widest uppercase shadow-md border ${upcoming
                ? "bg-[#F26522] text-white border-[#F26522] shadow-[#F26522]/30"
                : "bg-white text-[#1E3A8A] border-[#E2E8F0]"
                }`}>
                {upcoming ? <Clock className="w-3.5 h-3.5" /> : <CheckCircle2 className="w-3.5 h-3.5 text-[#94A3B8]" />}
                {label}
            </div>
            <div className={`h-[2px] flex-1 ${upcoming ? "bg-gradient-to-r from-[#F26522]/60 to-transparent" : "bg-gradient-to-r from-[#E2E8F0] to-transparent"}`} />
        </div>
    );
}

function UpcomingEventsSlider({ events }: { events: EventItem[] }) {
    const [current, setCurrent] = useState(0);
    const total = events.length;

    const prev = () => setCurrent(c => (c - 1 + total) % total);
    const next = () => setCurrent(c => (c + 1) % total);

    return (
        <div className="relative">
            {/* Slide window */}
            <div className="relative rounded-[28px] sm:rounded-[40px] overflow-hidden shadow-2xl border-2 border-[#F26522]/30">
                <AnimatePresence mode="wait">
                    {events.map((event, idx) =>
                        idx === current ? (
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0, x: 60 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -60 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="relative"
                            >
                                {/* ── MOBILE LAYOUT: Stacked (image top, content bottom) ── */}
                                <div className="block sm:hidden">
                                    {/* Image */}
                                    <div className="relative aspect-[16/9] w-full">
                                        <Image
                                            src={event.image}
                                            alt={event.title}
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/60 to-transparent" />
                                        {/* Badge on image */}
                                        <div className="absolute top-3 left-3">
                                            <span className="flex items-center gap-1 bg-[#F26522] text-white text-[9px] font-black tracking-widest uppercase px-3 py-1 rounded-full shadow-lg">
                                                <Star className="w-2.5 h-2.5" fill="white" /> Tomorrow
                                            </span>
                                        </div>
                                    </div>
                                    {/* Content below image */}
                                    <div className="bg-[#1E3A8A] px-5 py-6">
                                        <span className="inline-block bg-white/10 text-white/80 text-[9px] font-bold tracking-widest uppercase px-3 py-1 rounded-full border border-white/20 mb-3">
                                            {event.category}
                                        </span>
                                        <h2 className="text-xl font-black text-white leading-tight mb-3">
                                            {event.title}
                                        </h2>
                                        <div className="flex flex-col gap-1.5 text-white/70 font-semibold text-xs mb-4">
                                            <div className="flex items-center gap-2">
                                                <Calendar className="w-3.5 h-3.5 text-[#F26522]" />
                                                <span>{event.day} {event.month}, {event.year}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <MapPin className="w-3.5 h-3.5 text-[#F26522]" />
                                                <span>{event.location}</span>
                                            </div>
                                        </div>
                                        <p className="text-white/60 leading-relaxed text-sm font-medium line-clamp-3 mb-5">
                                            {event.description}
                                        </p>
                                        <button className="flex items-center gap-2 bg-[#F26522] text-white px-6 py-3 rounded-2xl font-black text-xs tracking-widest uppercase shadow-xl hover:bg-[#ff7a3d] transition-colors group/btn">
                                            Learn More
                                            <ArrowRight className="w-3.5 h-3.5 transform transition-transform group-hover/btn:translate-x-1" />
                                        </button>
                                    </div>
                                </div>

                                {/* ── DESKTOP LAYOUT: Full overlay hero ── */}
                                <div className="hidden sm:block">
                                    <div className="relative aspect-[16/7] w-full">
                                        <Image
                                            src={event.image}
                                            alt={event.title}
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/90 via-[#1E3A8A]/40 to-transparent" />
                                    </div>

                                    {/* Content overlay */}
                                    <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-12">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="flex items-center gap-1.5 bg-[#F26522] text-white text-[10px] font-black tracking-widest uppercase px-4 py-1.5 rounded-full shadow-lg animate-pulse">
                                                <Star className="w-3 h-3" fill="white" />
                                                Tomorrow
                                            </span>
                                            <span className="bg-white/10 backdrop-blur-sm text-white/80 text-[10px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border border-white/20">
                                                {event.category}
                                            </span>
                                        </div>

                                        <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight mb-4">
                                            {event.title}
                                        </h2>

                                        <div className="flex flex-wrap items-center gap-4 text-white/70 font-bold text-sm mb-6">
                                            <div className="flex items-center gap-2">
                                                <Calendar className="w-4 h-4 text-[#F26522]" />
                                                <span>{event.day} {event.month}, {event.year}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <MapPin className="w-4 h-4 text-[#F26522]" />
                                                <span>{event.location}</span>
                                            </div>
                                            <div className="flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                                                <Rocket className="w-4 h-4 text-[#F26522]" />
                                                <span className="text-white/90 text-xs uppercase tracking-tight">{event.booth}</span>
                                            </div>
                                        </div>

                                        <p className="text-white/70 leading-relaxed text-base font-medium max-w-3xl mb-6">
                                            {event.description}
                                        </p>

                                        <div className="flex items-center gap-4">
                                            <button className="flex items-center gap-2 bg-[#F26522] text-white px-8 py-3.5 rounded-2xl font-black text-sm tracking-widest uppercase shadow-xl hover:bg-[#ff7a3d] transition-colors group/btn">
                                                Learn More
                                                <ArrowRight className="w-4 h-4 transform transition-transform group-hover/btn:translate-x-1" />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Desktop arrow buttons — inside the card */}
                                    {total > 1 && (
                                        <>
                                            <button
                                                onClick={prev}
                                                aria-label="Previous event"
                                                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 flex items-center justify-center rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white hover:bg-[#F26522] hover:border-[#F26522] transition-all duration-200 shadow-lg"
                                            >
                                                <ChevronLeft className="w-5 h-5" />
                                            </button>
                                            <button
                                                onClick={next}
                                                aria-label="Next event"
                                                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 flex items-center justify-center rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white hover:bg-[#F26522] hover:border-[#F26522] transition-all duration-200 shadow-lg"
                                            >
                                                <ChevronRight className="w-5 h-5" />
                                            </button>
                                        </>
                                    )}
                                </div>
                            </motion.div>
                        ) : null
                    )}
                </AnimatePresence>
            </div>

            {/* Mobile arrow buttons — outside/below the card */}
            {total > 1 && (
                <div className="flex sm:hidden items-center justify-center gap-4 mt-4">
                    <button
                        onClick={prev}
                        aria-label="Previous event"
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1E3A8A]/10 border border-[#E2E8F0] text-[#1E3A8A] hover:bg-[#F26522] hover:border-[#F26522] hover:text-white transition-all duration-200"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    {/* Dot indicators inline on mobile */}
                    {events.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            aria-label={`Go to slide ${i + 1}`}
                            className={`rounded-full transition-all duration-300 ${
                                i === current
                                    ? "w-8 h-2.5 bg-[#F26522]"
                                    : "w-2.5 h-2.5 bg-[#E2E8F0] hover:bg-[#F26522]/50"
                            }`}
                        />
                    ))}
                    <button
                        onClick={next}
                        aria-label="Next event"
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1E3A8A]/10 border border-[#E2E8F0] text-[#1E3A8A] hover:bg-[#F26522] hover:border-[#F26522] hover:text-white transition-all duration-200"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            )}

            {/* Desktop dot indicators */}
            {total > 1 && (
                <div className="hidden sm:flex items-center justify-center gap-2 mt-6">
                    {events.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            aria-label={`Go to slide ${i + 1}`}
                            className={`rounded-full transition-all duration-300 ${
                                i === current
                                    ? "w-8 h-2.5 bg-[#F26522]"
                                    : "w-2.5 h-2.5 bg-[#E2E8F0] hover:bg-[#F26522]/50"
                            }`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

function PastEventCard({ event, idx }: { event: EventItem; idx: number }) {
    const isEven = idx % 2 === 0;
    return (
        <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`flex flex-col md:flex-row gap-10 lg:gap-16 items-center relative ${!isEven ? "md:flex-row-reverse" : ""}`}
        >
            {/* Timeline Node */}
            <div className="absolute left-[30px] md:left-1/2 top-1/2 w-4 h-4 bg-white border-4 border-[#94A3B8] rounded-full z-20 transform -translate-x-1/2 -translate-y-1/2 hidden md:block shadow-md" />

            {/* Image Side */}
            <div className="w-full md:w-1/2 flex-shrink-0">
                <div className="relative aspect-[16/10] rounded-[32px] overflow-hidden shadow-xl group cursor-pointer opacity-90 grayscale-[20%] hover:grayscale-0 transition-all duration-500">
                    <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/30 to-transparent opacity-60" />
                    {/* PAST badge */}
                    <div className="absolute top-4 left-4">
                        <span className="flex items-center gap-1.5 bg-white/90 text-[#64748B] text-[9px] font-black tracking-widest uppercase px-3 py-1 rounded-full shadow">
                            <CheckCircle2 className="w-3 h-3 text-[#94A3B8]" />
                            Completed
                        </span>
                    </div>
                </div>
            </div>

            {/* Content Side */}
            <div className="w-full md:w-1/2">
                <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-4">
                        <span className="px-4 py-1.5 rounded-full border border-[#E2E8F0] text-[10px] font-black tracking-widest text-[#94A3B8] uppercase">
                            {event.category}
                        </span>
                        <div className="h-[1px] flex-grow bg-[#E2E8F0]" />
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-black text-[#1E3A8A] leading-tight hover:text-[#F26522] transition-colors duration-300">
                        {event.title}
                    </h2>

                    <div className="flex flex-wrap items-center gap-4 text-[#64748B] font-bold text-sm">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-[#94A3B8]" />
                            <span>{event.day} {event.month}, {event.year}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-[#94A3B8]" />
                            <span>{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1 bg-[#F8FAFC] rounded-lg">
                            <Landmark className="w-4 h-4 text-[#94A3B8]" />
                            <span className="text-[#94A3B8] uppercase tracking-tighter text-xs">{event.booth}</span>
                        </div>
                    </div>

                    <p className="text-[#64748B] leading-relaxed text-base font-medium">
                        {event.description}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

export default function EventsDisplay() {
    return (
        <section className="bg-white py-24 font-outfit min-h-screen relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#F26522]/5 rounded-full blur-[120px] -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#1E3A8A]/5 rounded-full blur-[100px] -ml-24 -mb-24" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 mb-6"
                    >
                        <div className="h-[1px] w-12 bg-[#F26522]" />
                        <span className="text-[#F26522] font-bold tracking-[0.2em] uppercase text-xs">
                            Global Engagement Timeline
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-6xl font-black text-[#1E3A8A] leading-tight mb-8"
                    >
                        Events &amp; <span className="text-[#94A3B8]">Conferences</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="max-w-2xl text-[#64748B] text-lg font-medium leading-relaxed"
                    >
                        Tracing our journey across the globe's premier biotechnology platforms, fostering innovation and strategic collaborations.
                    </motion.div>
                </div>

                {/* ── UPCOMING EVENTS ── */}
                {upcomingEvents.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-28"
                    >
                        <SectionLabel label="Upcoming Events" upcoming />
                        <UpcomingEventsSlider events={upcomingEvents} />
                    </motion.div>
                )}

                {/* ── PAST EVENTS ── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <SectionLabel label="Past Events" />

                    {/* Timeline Container */}
                    <div className="relative mt-8">
                        {/* Vertical Timeline Line */}
                        <div className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#E2E8F0] via-[#E2E8F0] to-transparent hidden md:block transform -translate-x-1/2" />
                        <div className="space-y-28">
                            {pastEvents.map((event, idx) => (
                                <PastEventCard key={event.id} event={event} idx={idx} />
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
