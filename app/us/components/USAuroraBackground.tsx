'use client';
import { motion } from 'framer-motion';

export default function USAuroraBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 bg-white">
            {/* Animated slow-moving soft orbs */}
            <motion.div
                animate={{
                    x: [0, 50, 0, -50, 0],
                    y: [0, -50, 0, 50, 0],
                    scale: [1, 1.1, 1, 0.9, 1],
                    opacity: [0.3, 0.4, 0.3]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-[-10%] left-[10%] w-[50vw] h-[50vw] bg-[#E0E7FF] rounded-full blur-[120px] mix-blend-multiply"
            />
            
            <motion.div
                animate={{
                    x: [0, -40, 0, 40, 0],
                    y: [0, 40, 0, -40, 0],
                    scale: [1, 1.2, 1, 0.8, 1],
                    opacity: [0.15, 0.25, 0.15]
                }}
                transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                className="absolute bottom-[-10%] right-[10%] w-[60vw] h-[60vw] bg-[#FFEDD5] rounded-full blur-[140px] mix-blend-multiply"
            />

            {/* Faint subtle grid to add texture */}
            <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#1E3A8A 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>
    );
}
