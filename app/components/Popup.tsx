"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Popup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if the popup has been shown in this session
    const hasShownPopup = sessionStorage.getItem("provis_popup_shown");
    if (!hasShownPopup) {
      // Show the popup after a small delay
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("provis_popup_shown", "true");
      }, 1500); // 1.5 second delay
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }} 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }} 
            animate={{ scale: 1, opacity: 1, y: 0 }} 
            exit={{ scale: 0.9, opacity: 0, y: 20 }} 
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative max-w-3xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur-md transition-colors"
              aria-label="Close popup"
            >
              <X className="w-5 h-5" />
            </button>
            
            <Link href="/events" onClick={() => setIsOpen(false)} className="block relative w-full group">
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image 
                  src="/events/BIOInternationalConvention.png" 
                  alt="Upcoming Event" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>
              
              <div className="p-6 sm:p-8 bg-white text-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1E3A8A] mb-3">Join Us at the BIO International Convention!</h2>
                <p className="text-[#475569] mb-6 max-w-xl mx-auto">Discover our latest innovations in custom peptide synthesis, bioreagents, and CDMO services.</p>
                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-[#F26522] hover:bg-[#d95a1e] transition-colors shadow-lg shadow-[#F26522]/30">
                  Learn More
                </div>
              </div>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
