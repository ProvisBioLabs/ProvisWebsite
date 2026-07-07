"use client";
import Link from 'next/link';
import Image from "next/image";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";

const companyLinks = [
    { label: "About Us", href: "/us/about" },
    { label: "Contact", href: "/us/contact" },
];

const productLinks = [
    { label: "Recombinant Bio-Reagents", href: "/us/products" },
    { label: "Custom Peptide Synthesis", href: "/us/custom-peptide-synthesis" },
    { label: "CDMO Services", href: "/us/cdmo" },
];


const legalLinks = [
    { label: "Privacy Policy", href: "/us/privacy-policy" },
    { label: "Terms & Conditions", href: "/us/terms" },
    { label: "Cookie Policy", href: "/us/cookie-policy" },
    { label: "Sitemap", href: "/us/site-map" },
];

const certBadges = ["WHO-GMP", "ISO 9001", "GLP", "AOF"];

export default function Footer() {
    return (
        <footer className="relative bg-[#F8FAFC]/70 backdrop-blur-md pt-20 pb-12 border-t border-[#E2E8F0] overflow-hidden">
            {/* Watermark Logo — hidden on mobile to avoid visual noise */}
            <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[1200px] opacity-[0.04] pointer-events-none justify-center items-center select-none z-0">
                <Image
                    src="/logo.webp"
                    alt="Provis Biolabs"
                    width={1200}
                    height={400}
                    className="w-full h-auto object-contain"
                    priority
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Top row */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">

                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <Image
                            src="/logo.webp"
                            alt="Provis Biolabs"
                            width={160}
                            height={42}
                            className="h-10 w-auto mb-6"
                        />
                        <p className="text-[#475569] text-sm leading-relaxed mb-8 max-w-sm font-medium">
                            Your integrated partner for Bioreagents, peptides, enzymes and biosimilars
                            from discovery through development to GMP manufacturing
                        </p>
                        {/* Cert badges */}
                        <div className="flex flex-wrap gap-4 mt-8">
                            <img
                                src="/certifications/who-gmp.webp"
                                alt="WHO GMP Certified"
                                className="h-10 w-auto object-contain transition-all duration-300"
                            />
                            <img
                                src="/certifications/gmp.webp"
                                alt="GMP Certified Practice"
                                className="h-10 w-auto object-contain transition-all duration-300"
                            />
                            <img
                                src="/certifications/iso.webp"
                                alt="ISO Certified"
                                className="h-10 w-auto object-contain transition-all duration-300"
                            />
                            <img
                                src="/certifications/is012485.png"
                                alt="ISO 13485 Certified"
                                className="h-10 w-auto object-contain transition-all duration-300"
                            />
                            <img
                                src="/certifications/halal.webp"
                                alt="Halal Certified"
                                className="h-10 w-auto object-contain transition-all duration-300"
                            />
                            <img
                                src="/certifications/kosher.webp"
                                alt="Kosher Certified"
                                className="h-10 w-auto object-contain transition-all duration-300"
                            />
                        </div>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-[#1E3A8A] mb-6">
                            Company
                        </h4>
                        <ul className="space-y-4">
                            {companyLinks.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-sm font-medium text-[#475569] hover:text-[#E8721A] transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-[#1E3A8A] mb-6">
                            Products & Services
                        </h4>
                        <ul className="space-y-4">
                            {productLinks.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-sm font-medium text-[#475569] hover:text-[#E8721A] transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>


                </div>

                {/* Contact row */}
                <div className=" py-12 border-y border-[#E2E8F0] mb-8">


                    {/* USA */}
                    <div className="flex gap-4 items-start">
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-[#E2E8F0] flex-shrink-0">
                            <MapPin className="w-4 h-4 text-[#1E3A8A]" />
                        </div>
                        <div>
                            <h4 className="text-sm font-bold text-[#1E3A8A] mb-2">USA Office</h4>
                            <p className="text-sm text-[#475569] mb-1">Provis Biolabs Inc.</p>
                            <p className="text-sm text-[#475569] mb-3">111 Roberts St, F #109, East Hartford, CT 06108</p>
                            <div className="flex items-center gap-4 text-sm font-medium text-[#475569]">
                                <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5" /> +1 (650) 996-4951</span>
                                <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5" /> bdusa@provisbiolabs.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
                    <p className="text-xs font-medium text-[#94A3B8]" suppressHydrationWarning>
                        © {new Date().getFullYear()} Provis Biolabs Private Limited. All rights reserved.
                    </p>

                    <div className="flex flex-wrap justify-center items-center gap-6">
                        {legalLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-xs font-medium text-[#94A3B8] hover:text-[#1E3A8A] transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    <a
                        href="https://www.linkedin.com/company/provis-biolabs-private-limited/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white border border-[#E2E8F0] flex items-center justify-center hover:bg-[#1E3A8A] hover:border-[#1E3A8A] hover:text-white text-[#94A3B8] transition-colors"
                        aria-label="LinkedIn"
                    >
                        <Linkedin className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
