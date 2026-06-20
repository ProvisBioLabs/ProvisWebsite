'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function USScrollBackground() {
    const { scrollY } = useScroll();
    const [mounted, setMounted] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    const yFast   = useTransform(scrollY, [0, 5000], [0, -900]);
    const yMedium = useTransform(scrollY, [0, 5000], [0, -450]);
    const ySlow   = useTransform(scrollY, [0, 5000], [0, -180]);

    if (!mounted) return null;

    const dnaPairs   = Array.from({ length: 56 });
    const netNodes   = Array.from({ length: 38 });

    return (
        <div ref={containerRef} className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">

            {/* ── Deep Navy gradient canvas ── */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#F0F4FF] via-white to-[#FFF7F2] opacity-100" />

            {/* ── Ambient orbs ── */}
            <motion.div
                animate={{ scale: [1, 1.06, 1], opacity: [0.06, 0.10, 0.06] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-[20%] left-[10%] w-[70vw] h-[70vw] bg-[#1E3A8A] rounded-full blur-[160px]"
            />
            <motion.div
                animate={{ scale: [1, 1.08, 1], opacity: [0.04, 0.07, 0.04] }}
                transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
                className="absolute bottom-[-20%] right-[-5%] w-[65vw] h-[65vw] bg-[#F26522] rounded-full blur-[180px]"
            />
            <motion.div
                animate={{ scale: [1, 1.05, 1], opacity: [0.03, 0.055, 0.03] }}
                transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 7 }}
                className="absolute top-[45%] left-[35%] w-[50vw] h-[50vw] bg-[#0047CC] rounded-full blur-[140px]"
            />

            {/* ── Layer 1: Precision Engineering Grid (slowest) ── */}
            <motion.div style={{ y: ySlow }} className="absolute inset-0 w-full h-[220vh] opacity-[0.045] text-[#1E3A8A]">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="bioGrid" width="80" height="80" patternUnits="userSpaceOnUse">
                            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="0.4" strokeOpacity="0.35"/>
                            {/* Biotech cross-hairs at every intersection */}
                            <line x1="-4" y1="0" x2="4" y2="0" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.6"/>
                            <line x1="0" y1="-4" x2="0" y2="4" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.6"/>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#bioGrid)" />
                </svg>
            </motion.div>

            {/* ── Layer 2: Global Biotech Network (medium speed) ── */}
            <motion.div style={{ y: yMedium }} className="absolute inset-0 w-full h-[220vh] opacity-[0.07] text-[#1E3A8A]">
                <svg width="100%" height="100%" viewBox="0 0 1440 2400" preserveAspectRatio="xMidYMid slice" fill="none" stroke="currentColor" strokeWidth="0.4">
                    {netNodes.map((_, i) => {
                        // Use a deterministic spread across the full 1440-wide canvas
                        const col = i % 8;
                        const row = Math.floor(i / 8);
                        const x   = 90 + col * 185 + (row % 2) * 92;
                        const y   = 120 + row * 220;
                        const nx  = 90 + ((col + 1) % 8) * 185 + ((row) % 2) * 92;
                        const ny  = 120 + row * 220;
                        const dnx = 90 + col * 185 + ((row + 1) % 2) * 92;
                        const dny = 120 + (row + 1) * 220;
                        return (
                            <g key={`net-${i}`}>
                                <circle cx={x} cy={y} r="4" fill="currentColor" stroke="none" />
                                <circle cx={x} cy={y} r="10" fill="currentColor" opacity="0.12" stroke="none" />
                                {/* Horizontal connection */}
                                {col < 7 && <line x1={x} y1={y} x2={nx} y2={ny} strokeOpacity="0.25" />}
                                {/* Diagonal connection down */}
                                {row < 4 && <line x1={x} y1={y} x2={dnx} y2={dny} strokeOpacity="0.15" />}
                                {/* Hexagon ring at every 3rd node */}
                                {i % 3 === 0 && (
                                    <path
                                        d={`M${x} ${y - 22} L${x + 19} ${y - 11} L${x + 19} ${y + 11} L${x} ${y + 22} L${x - 19} ${y + 11} L${x - 19} ${y - 11} Z`}
                                        strokeWidth="0.4" strokeOpacity="0.3"
                                    />
                                )}
                            </g>
                        );
                    })}
                </svg>
            </motion.div>

            {/* ── Layer 3: Sweeping Diagonal DNA Helix (fastest) ── */}
            <motion.div style={{ y: yFast }} className="absolute inset-0 w-full h-[220vh] opacity-[0.13] text-[#F26522]">
                <svg width="100%" height="100%" viewBox="0 0 1440 2400" preserveAspectRatio="xMidYMid slice" fill="none" stroke="currentColor" strokeWidth="0.6">
                    {dnaPairs.map((_, i) => {
                        const progress = i / (dnaPairs.length - 1);
                        // Sweep from top-left to bottom-right across the full canvas
                        const cx  = 80  + progress * 1280;
                        const y   = 60  + progress * 2280;
                        const rad = 160;
                        const ph1 = i * 0.38;
                        const ph2 = ph1 + Math.PI;
                        const x1  = cx + Math.sin(ph1) * rad;
                        const x2  = cx + Math.sin(ph2) * rad;
                        const d1  = Math.cos(ph1);
                        const d2  = Math.cos(ph2);
                        const o1  = (d1 + 1) / 2;
                        const o2  = (d2 + 1) / 2;
                        const nProg = (i + 1) / (dnaPairs.length - 1);
                        const ncx  = 80 + nProg * 1280;
                        const ny   = 60 + nProg * 2280;
                        const nx1  = ncx + Math.sin(ph1 + 0.38) * rad;
                        const nx2  = ncx + Math.sin(ph2 + 0.38) * rad;
                        return (
                            <g key={`dna-${i}`}>
                                <line x1={x1} y1={y} x2={x2} y2={y} strokeWidth="0.5" strokeOpacity={0.18} />
                                <circle cx={x1} cy={y} r={3 + d1 * 2.5} fill="currentColor" fillOpacity={0.35 + o1 * 0.65} stroke="none" />
                                <circle cx={x2} cy={y} r={3 + d2 * 2.5} fill="currentColor" fillOpacity={0.35 + o2 * 0.65} stroke="none" />
                                {i < dnaPairs.length - 1 && (
                                    <>
                                        <path
                                            d={`M${x1} ${y} Q ${cx + Math.sin(ph1 + 0.19) * rad * 1.1} ${y + 20} ${nx1} ${ny}`}
                                            strokeOpacity={0.12 + o1 * 0.36} strokeWidth="0.9"
                                        />
                                        <path
                                            d={`M${x2} ${y} Q ${cx + Math.sin(ph2 + 0.19) * rad * 1.1} ${y + 20} ${nx2} ${ny}`}
                                            strokeOpacity={0.12 + o2 * 0.36} strokeWidth="0.9"
                                        />
                                    </>
                                )}
                            </g>
                        );
                    })}
                </svg>
            </motion.div>
        </div>
    );
}
