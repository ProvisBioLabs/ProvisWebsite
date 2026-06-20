'use client';
import { motion } from 'framer-motion';
import { ShieldCheck, FlaskConical, Truck, Clock4, Globe2, Award } from 'lucide-react';
import USAuroraBackground from './USAuroraBackground';

const pillars = [
    {
        Icon: ShieldCheck,
        title: 'FDA & cGMP Ready',
        desc: 'All products manufactured under WHO-GMP, ISO 9001:2015 and GLP. Full regulatory documentation for IND, ANDA, and DMF filings.',
        color: '#1E3A8A',
        bg: '#EEF2FF',
    },
    {
        Icon: FlaskConical,
        title: 'Animal-Origin Free',
        desc: 'Our AOF recombinant bioreagents eliminate BSE/TSE risk, meeting the strictest FDA and EU requirements for biopharma applications.',
        color: '#F26522',
        bg: '#FFF7ED',
    },
    {
        Icon: Truck,
        title: 'USA Stocking Partner',
        desc: 'In-stock inventory at our East Hartford, CT facility ensures fast shipping and supply chain continuity for US biotech and pharma.',
        color: '#0047CC',
        bg: '#EFF6FF',
    },
    {
        Icon: Clock4,
        title: 'Speed to Clinic',
        desc: 'Integrated end-to-end capabilities from cell line development to GMP release batch dramatically compress your development timeline.',
        color: '#1E3A8A',
        bg: '#EEF2FF',
    },
    {
        Icon: Globe2,
        title: 'Global-Scale, Local Access',
        desc: 'Backed by multi-kL fermentation capacity with dedicated US-based technical support, business development, and account management.',
        color: '#F26522',
        bg: '#FFF7ED',
    },
    {
        Icon: Award,
        title: 'Certified Excellence',
        desc: 'Halal, Kosher, WHO-GMP, and GLP certified. Built for the quality expectations of top-tier US pharmaceutical clients.',
        color: '#0047CC',
        bg: '#EFF6FF',
    },
];

const stats = [
    { value: '5,000L+', label: 'Max Fermentation Capacity' },
    { value: 'Since 2019', label: 'Serving Global Pharma' },
    { value: '4', label: 'Quality Certifications' },
    { value: '30+', label: 'Countries Shipped To' },
];

export default function USTrustSection() {
    return (
        <section id="why-provis-us" className="py-24 lg:py-24 relative overflow-hidden">
            
            <USAuroraBackground />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* ── Header ── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#1E3A8A] leading-[1.08] mb-6">
                        Why  Clients <span className="text-[#F26522]">Choose Provis</span>
                    </h2>
                    <p className="text-lg sm:text-xl text-[#475569] max-w-2xl mx-auto font-medium leading-relaxed">
                        Precision-engineered bioreagents and CDMO services, built to the quality benchmarks
                        demanded by America's top pharmaceutical and biotech companies.
                    </p>
                </motion.div>

                {/* ── Stats Strip ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20"
                >
                    {stats.map((s, i) => (
                        <motion.div
                            key={s.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            className="bg-white/80 backdrop-blur-sm border border-[#E2E8F0] rounded-2xl px-6 py-8 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                        >
                            <p className="text-3xl lg:text-4xl font-black text-[#1E3A8A] mb-2">{s.value}</p>
                            <p className="text-sm font-semibold text-[#94A3B8] tracking-wide uppercase">{s.label}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* ── Value Pillar Cards ── */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {pillars.map((p, i) => (
                        <motion.div
                            key={p.title}
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-60px' }}
                            transition={{ duration: 0.65, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] }}
                            className="group relative bg-white/80 backdrop-blur-sm border border-[#E2E8F0] rounded-3xl p-8 hover:shadow-[0_20px_60px_rgba(30,58,138,0.10)] hover:-translate-y-2 transition-all duration-400 overflow-hidden"
                        >
                            {/* Hover accent glow */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"
                                style={{ background: `radial-gradient(circle at 0% 100%, ${p.color}08 0%, transparent 70%)` }}
                            />

                          

                            <h3 className="text-xl font-extrabold text-[#1E3A8A] mb-3 leading-tight">{p.title}</h3>
                            <p className="text-[#475569] text-sm leading-relaxed font-medium">{p.desc}</p>

                            {/* Bottom accent bar */}
                            <div
                                className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 rounded-b-3xl"
                                style={{ backgroundColor: p.color }}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* ── CTA Row ── */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="/us/contact"
                        className="flex-1 sm:flex-none inline-flex items-center justify-center px-10 py-5 rounded-full font-bold text-white bg-[#F26522] hover:bg-[#E85B18] shadow-[0_8px_30px_rgb(242,101,34,0.3)] hover:-translate-y-1 transition-all duration-300"
                    >
                        Schedule a Consultation
                    </a>
                    <a
                        href="/us/products"
                        className="group px-10 py-4 rounded-full font-bold text-[#1E3A8A] bg-white border border-[#E2E8F0] hover:border-[#1E3A8A] transition-all duration-300 flex items-center gap-2 text-base shadow-sm"
                    >
                        View All Products
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
