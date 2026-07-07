"use client";

import React, { useState, useRef } from 'react';
import { Send, Loader2 } from 'lucide-react';

interface ContactFormProps {
    prefilledInterest?: string;
}

export default function ContactForm({ prefilledInterest = "" }: ContactFormProps) {
    const [status, setStatus] = useState<'' | 'success' | 'error'>('');
    const [interest, setInterest] = useState(prefilledInterest);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const submittingRef = useRef(false); // prevents duplicate submissions

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Guard against duplicate clicks
        if (submittingRef.current) return;
        submittingRef.current = true;
        setIsSubmitting(true);
        setStatus('');

        try {
            const form = e.currentTarget;
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());

            const response = await fetch('/api/us/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (result.success) {
                setStatus('success');
                setInterest(prefilledInterest || "");
                form.reset();
            } else {
                console.error('API Error:', result.errors);
                setStatus('error');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
        } finally {
            setIsSubmitting(false);
            submittingRef.current = false;
            setTimeout(() => setStatus(''), 7000);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {status === 'success' && (
                <div className="p-4 bg-green-50 text-green-700 rounded-xl border border-green-200 font-sans shadow-sm flex items-center gap-3">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <strong>Success!</strong> Thank you for your message. We will get back to you shortly.
                </div>
            )}

            {status === 'error' && (
                <div className="p-4 bg-red-50 text-red-700 rounded-xl border border-red-200 font-sans shadow-sm flex items-center gap-3">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <strong>Error.</strong> Something went wrong. Please try again or email us directly at bdusa@provisbiolabs.com.
                </div>
            )}

            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="firstName" className="block text-[14px] font-bold text-[#1E3A8A] mb-2 font-sans">First Name *</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        placeholder="First Name"
                        className="w-full bg-[#f8fafc] border border-[#e2e8f0] rounded-xl px-4 py-3.5 text-[#0f172a] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#F26522]/20 focus:border-[#F26522] transition-all font-sans"
                    />
                </div>
                <div>
                    <label htmlFor="lastName" className="block text-[14px] font-bold text-[#1E3A8A] mb-2 font-sans">Last Name *</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        placeholder="Last Name"
                        className="w-full bg-[#f8fafc] border border-[#e2e8f0] rounded-xl px-4 py-3.5 text-[#0f172a] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#F26522]/20 focus:border-[#F26522] transition-all font-sans"
                    />
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="email" className="block text-[14px] font-bold text-[#1E3A8A] mb-2 font-sans">Email Address *</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="Email Address"
                        className="w-full bg-[#f8fafc] border border-[#e2e8f0] rounded-xl px-4 py-3.5 text-[#0f172a] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#F26522]/20 focus:border-[#F26522] transition-all font-sans"
                    />
                </div>
                <div>
                    <label htmlFor="phone" className="block text-[14px] font-bold text-[#1E3A8A] mb-2 font-sans">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Phone Number"
                        className="w-full bg-[#f8fafc] border border-[#e2e8f0] rounded-xl px-4 py-3.5 text-[#0f172a] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#F26522]/20 focus:border-[#F26522] transition-all font-sans"
                    />
                </div>
            </div>

            <div>
                <label htmlFor="interest" className="block text-[14px] font-bold text-[#1E3A8A] mb-2 font-sans">Area of Interest *</label>
                <select
                    id="interest"
                    name="interest"
                    required
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    className="w-full bg-[#f8fafc] border border-[#e2e8f0] rounded-xl px-4 py-3.5 text-[#0f172a] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#F26522]/20 focus:border-[#F26522] transition-all font-sans appearance-none"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: `right 0.5rem center`, backgroundRepeat: `no-repeat`, backgroundSize: `1.5em 1.5em` }}
                >
                    <option value="">Select an option</option>
                    <option value="Recombinant Bio-Reagents">Recombinant Bio-Reagents</option>
                    <option value="CDMO Services">CDMO Services</option>
                    <option value="Custom Peptide Synthesis">Custom Peptide Synthesis</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Other">Other</option>
                </select>
            </div>

            <div>
                <label htmlFor="message" className="block text-[14px] font-bold text-[#1E3A8A] mb-2 font-sans">Message *</label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Your Message..."
                    className="w-full bg-[#f8fafc] border border-[#e2e8f0] rounded-xl px-4 py-3.5 text-[#0f172a] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#F26522]/20 focus:border-[#F26522] transition-all font-sans resize-y"
                ></textarea>
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className={`group w-full bg-gradient-to-r from-[#F26522] to-[#FF8C55] hover:opacity-90 text-white font-bold text-lg rounded-xl py-4 transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#F26522]/20 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
                {isSubmitting ? (
                    <>Sending... <Loader2 className="w-5 h-5 animate-spin" /></>
                ) : (
                    <>Send Message <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                )}
            </button>
        </form>
    );
}
