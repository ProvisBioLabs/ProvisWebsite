"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const slides = [
    {
        id: 1,
        type: "video",
        src: "/provis-biolabs-hero-background.mp4",
        poster: "/hero-bg.webp",
        title: (
            <>
                Empowered <br />
                by <span className="text-[#F26522]"> Science</span><br />
            </>
        ),
        subtitle: "Your integrated partner for Bioreagents, BioAPIs, peptides, enzymes and biosimilars from discovery through development to GMP manufacturing",
        cta1: { text: "Explore Products", link: "/products" },
        cta2: { text: "CDMO Services", link: "/cdmo" }
    },
    {
        id: 2,
        type: "image",
        src: "/hero/slide-2.jpg",
        title: (
            <>
                Innovating <br />
                the <span className="text-[#F26522]">Future</span><br />
            </>
        ),
        subtitle: "State-of-the-art facilities delivering high-quality CDMO services globally",
        cta1: { text: "Our Facilities", link: "/cdmo" },
        cta2: { text: "Partner With Us", link: "/contact" }
    },
    {
        id: 3,
        type: "image",
        src: "/hero/slide-3.jpg",
        title: (
            <>
                Global Scale.<br />
                <span className="text-[#F26522]">Local Impact</span><br />
            </>
        ),
        subtitle: "Trusted by leading pharmaceutical innovators worldwide",
        cta1: { text: "Global Reach", link: "/partners" },
        cta2: { text: "View Products", link: "/products" }
    }
];

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto-advance slider
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000); // 6 seconds per slide
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="hero" className="relative min-h-screen flex text-left items-center overflow-hidden bg-white">
            
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="absolute inset-0 z-0 bg-[#F8FAFC]"
                >
                    {slides[currentSlide].type === "video" ? (
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            poster={slides[currentSlide].poster}
                            preload="metadata"
                            className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-multiply filter contrast-125"
                        >
                            <source src={slides[currentSlide].src} type="video/mp4" />
                        </video>
                    ) : (
                        <Image
                            src={slides[currentSlide].src}
                            alt="Provis Biolabs Slider Image"
                            fill
                            priority
                            className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-multiply filter contrast-125"
                        />
                    )}

                    {/* Ultra-clean white gradient overlay to fade the media into the background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/69 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-80" />
                </motion.div>
            </AnimatePresence>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pointer-events-none">
                <div className="max-w-3xl pointer-events-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`content-${currentSlide}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] font-outfit font-black tracking-tight leading-[1.1] text-[#1E3A8A] mb-8 drop-shadow-sm">
                                {slides[currentSlide].title}
                            </h1>
                            <p className="text-base sm:text-xl lg:text-2xl text-[#475569] font-normal leading-relaxed mb-10 sm:mb-12 max-w-2xl drop-shadow-sm">
                                {slides[currentSlide].subtitle}
                            </p>
                            <div className="flex flex-wrap items-center gap-6">
                                <Link
                                    href={slides[currentSlide].cta1.link}
                                    className="px-8 py-4 rounded-full font-bold text-white bg-[#F26522] hover:bg-[#E85B18] shadow-[0_8px_30px_rgb(242,101,34,0.3)] hover:-translate-y-0.5 transition-all duration-300 inline-block"
                                >
                                    {slides[currentSlide].cta1.text}
                                </Link>
                                <Link
                                    href={slides[currentSlide].cta2.link}
                                    className="group px-8 py-4 rounded-full font-bold text-[#1E3A8A] bg-white/80 backdrop-blur-sm hover:bg-white border border-[#E2E8F0] transition-all flex items-center gap-2 shadow-sm"
                                >
                                    {slides[currentSlide].cta2.text}
                                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </Link>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Slide Navigation Indicators */}
            <div className="absolute bottom-10 left-0 right-0 z-30 flex justify-center items-center gap-2 pointer-events-auto">
                {slides.map((_, index) => {
                    const isVideo = slides[currentSlide].type === "video";
                    const activeColor = "bg-[#F26522]";
                    const inactiveColor = isVideo ? "bg-[#1E3A8A]/30 hover:bg-[#1E3A8A]/50" : "bg-white/60 hover:bg-white shadow-[0_2px_4px_rgba(0,0,0,0.3)]";
                    
                    return (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className="p-2 cursor-pointer group flex items-center justify-center"
                            aria-label={`Go to slide ${index + 1}`}
                        >
                            <div className={`transition-all duration-500 rounded-full h-2.5 ${
                                currentSlide === index
                                    ? `w-12 ${activeColor} shadow-md`
                                    : `w-2.5 ${inactiveColor}`
                            }`} />
                        </button>
                    );
                })}
            </div>
        </section>
    );
}
