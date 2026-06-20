"use client";
import { motion } from "framer-motion";

const certs = [
    { name: "WHO-GMP", dot: "#F26522" },
    { name: "ISO 9001:2015", dot: "#0047CC" },
    { name: "ISO 13485", dot: "#10B981" },
    { name: "ISO 14001", dot: "#F26522" },
    { name: "GLP", dot: "#0047CC" },
    { name: "Halal", dot: "#10B981" },
    { name: "Kosher", dot: "#F26522" },
    { name: "ICH Q7", dot: "#0047CC" },
    { name: "TSE/BSE Free", dot: "#10B981" },
    { name: "HACCP", dot: "#F26522" },
    { name: "Drug Master File", dot: "#0047CC" },
];

export default function Certifications() {
    return (
        <section id="certifications" className="py-24 lg:py-32 bg-[#FAFAFA]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-12"
                >
                    <h2 className="text-sm font-bold tracking-widest uppercase text-[#F26522] mb-4">
                        Quality Assurance
                    </h2>
                    <h3 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#1E3A8A] mb-8 leading-tight">
                        Certified at every step.
                    </h3>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-white border border-[#E2E8F0] rounded-[2rem] p-8 lg:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
                >
                    <div className="flex flex-wrap gap-4 mb-8">
                        {/* WHO-GMP badge image with zoom effect */}
                        {/* Removed image badge as requested */}
                    </div>
                    <div className="flex flex-wrap gap-4">
                        {certs.map((cert) => (
                            <div
                                key={cert.name}
                                className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg hover:shadow-sm transition-shadow"
                            >
                                <div
                                    className="w-2 h-2 rounded-full"
                                    style={{ backgroundColor: cert.dot }}
                                />
                                <span className="text-sm font-bold text-[#1E3A8A]">
                                    {cert.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
