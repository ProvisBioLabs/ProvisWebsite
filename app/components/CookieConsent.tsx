"use client";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already made a choice
        const consent = localStorage.getItem("provis_cookie_consent");
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("provis_cookie_consent", "accepted");
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem("provis_cookie_consent", "declined");
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 150, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 150, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
                    className="fixed bottom-0 left-0 right-0 z-[100] p-4 sm:p-6 pb-6 sm:pb-8 pointer-events-none"
                >
                    <div className="max-w-5xl mx-auto bg-white border border-[#E2E8F0] shadow-[0_20px_60px_rgba(30,58,138,0.15)] rounded-2xl p-6 sm:p-8 pointer-events-auto flex flex-col md:flex-row gap-6 md:items-center relative">

                        <button
                            onClick={() => setIsVisible(false)}
                            className="absolute top-4 right-4 text-[#94a3b8] hover:text-[#1E3A8A] transition-colors p-1"
                            aria-label="Close"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="flex-grow pr-8 md:pr-0">
                            <h3 className="text-[#1E3A8A] font-bold text-lg mb-2">We value your privacy</h3>
                            <p className="text-[#64748B] text-sm leading-relaxed">
                                We use cookies and similar technologies to enhance your browsing experience, serve personalized content and analyze our traffic.
                                By clicking "Accept All", you consent to our use of cookies as described in our <Link href="/cookie-policy" className="text-[#F26522] font-semibold hover:underline">Cookie Policy</Link> and <Link href="/privacy-policy" className="text-[#F26522] font-semibold hover:underline">Privacy Policy</Link>.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                            <button
                                onClick={handleDecline}
                                className="px-6 py-2.5 rounded-xl text-sm font-bold border-2 border-[#E2E8F0] text-[#64748B] hover:border-[#94a3b8] hover:text-[#1E3A8A] transition-all whitespace-nowrap"
                            >
                                Reject Non-Essential
                            </button>
                            <button
                                onClick={handleAccept}
                                className="px-6 py-2.5 rounded-xl text-sm font-bold text-white bg-[#1E3A8A] hover:bg-[#152c6b] transition-all whitespace-nowrap shadow-sm"
                            >
                                Accept All Cookies
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
