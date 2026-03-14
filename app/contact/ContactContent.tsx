"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, ArrowRight } from "lucide-react";
import ContactForm from "../components/ContactForm";

export default function ContactContent() {
    return (
        <section className="py-16 lg:py-24 bg-[#FAFAFA] font-outfit">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-sm font-bold tracking-widest uppercase text-[#F26522] mb-3 block"
                    >
                        Connect With Us
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1E3A8A] mb-6 tracking-tight"
                    >
                        Get in touch with us!
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-[#64748B] text-lg sm:text-xl leading-relaxed"
                    >
                        Whether you're looking for a CDMO partner, have a business enquiry, or want to explore career opportunities, our team is here to help.
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                    {/* Left: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white p-8 sm:p-12 rounded-3xl shadow-[0_20px_60px_rgba(30,58,138,0.08)] border border-[#E2E8F0]"
                    >
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#1E3A8A] mb-2">Business Enquiry</h2>
                        <p className="text-[#64748B] mb-8">Enter Your Details below and we'll get back to you shortly</p>

                        <ContactForm />
                    </motion.div>

                    {/* Right: Contact Details */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col gap-8"
                    >
                        {/* USA Office */}
                        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#E2E8F0] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#1E3A8A]/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />

                            <div className="flex items-center gap-4 mb-6 relative">
                                <div className="w-12 h-12 rounded-2xl bg-[#1E3A8A]/10 flex items-center justify-center border border-[#1E3A8A]/20">
                                    <MapPin className="w-6 h-6 text-[#1E3A8A]" />
                                </div>
                                <h3 className="text-2xl font-bold text-[#1E3A8A]">USA</h3>
                            </div>

                            <div className="space-y-4 relative">
                                <p className="text-[#475569] font-sans text-lg leading-relaxed">
                                    111 Roberts St, F #109,<br />
                                    East Hartford, CT 06108, USA.
                                </p>

                                <div className="h-px w-12 bg-[#E2E8F0] my-6" />

                                <a href="tel:+16509964951" className="flex items-center gap-3 text-[#1E3A8A] font-bold hover:text-[#F26522] transition-colors group/link">
                                    <div className="w-8 h-8 rounded-full bg-[#f8fafc] flex items-center justify-center group-hover/link:bg-[#FFF7F2] transition-colors">
                                        <Phone className="w-4 h-4" />
                                    </div>
                                    +1 (650) 996-4951
                                </a>

                                <a href="mailto:bdusa@provisbiolabs.com" className="flex items-center gap-3 text-[#1E3A8A] font-bold hover:text-[#F26522] transition-colors group/link">
                                    <div className="w-8 h-8 rounded-full bg-[#f8fafc] flex items-center justify-center group-hover/link:bg-[#FFF7F2] transition-colors">
                                        <Mail className="w-4 h-4" />
                                    </div>
                                    bdusa@provisbiolabs.com
                                </a>
                            </div>
                        </div>

                        {/* INDIA Office */}
                        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#E2E8F0] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#F26522]/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />

                            <div className="flex items-center gap-4 mb-6 relative">
                                <div className="w-12 h-12 rounded-2xl bg-[#F26522]/15 flex items-center justify-center border border-[#F26522]/20">
                                    <MapPin className="w-6 h-6 text-[#F26522]" />
                                </div>
                                <h3 className="text-2xl font-bold text-[#1E3A8A]">INDIA</h3>
                            </div>

                            <div className="space-y-4 relative">
                                <p className="text-[#475569] font-sans text-lg leading-relaxed">
                                    Hyderabad – 500072,<br />
                                    Telangana, India.
                                </p>

                                <div className="h-px w-12 bg-[#E2E8F0] my-6" />

                                <a href="mailto:bd@provisbiolabs.com" className="flex items-center gap-3 text-[#1E3A8A] font-bold hover:text-[#F26522] transition-colors group/link">
                                    <div className="w-8 h-8 rounded-full bg-[#f8fafc] flex items-center justify-center group-hover/link:bg-[#FFF7F2] transition-colors">
                                        <Mail className="w-4 h-4" />
                                    </div>
                                    bd@provisbiolabs.com
                                </a>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}
