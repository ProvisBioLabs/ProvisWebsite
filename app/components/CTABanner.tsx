"use client";
import { motion } from "framer-motion";

export default function CTABanner() {
    return (
        <section
            id="cta"
            className="py-24 lg:pb-32 relative overflow-hidden bg-[#FAFAFA]"
        >
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-[#0047CC] opacity-[0.02] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
                <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-[#F26522] opacity-[0.03] rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-[#1E3A8A]">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className="inline-block px-3 py-1 mb-8 rounded-full border border-[#E2E8F0] bg-white text-xs font-bold tracking-widest uppercase text-[#F26522]">
                        Ready to Accelerate Your Pipeline?
                    </span>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
                        Partner With <span className="text-[#F26522]">Provis Biolabs</span>
                    </h2>

                    <p className="text-lg sm:text-xl text-[#475569] max-w-2xl mx-auto font-medium leading-relaxed mb-12">
                        Whether you need premium AOF bioreagents or comprehensive CDMO
                        services from R&D to multi-kL GMP manufacturing, our team is ready to deliver.
                    </p>

                    <a
                        href="/contact"
                        className="inline-flex items-center justify-center px-10 py-5 text-lg rounded-full font-bold text-white bg-[#F26522] shadow-[0_8px_30px_rgb(242,101,34,0.3)] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgb(242,101,34,0.4)] active:translate-y-0 transition-all duration-300"
                    >
                        Get in Touch →
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
