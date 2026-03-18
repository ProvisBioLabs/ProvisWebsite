"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

const geoUrl = "/countries-110m.json";

// Exact coordinates calculated based on partner locations with custom offsets to prevent text overlap
const markers = [
    // Provis Hubs
    { name: "Provis USA", coordinates: [-72.6368, 41.7634] },
    { name: "Provis India HQ", coordinates: [78.4867, 17.3850] },

    // Asia Partners
    { name: "i-DNA Biotechnology", coordinates: [103.8198, 1.3521] },
    { name: "Dongilbio", coordinates: [126.9780, 37.5665] },

    // North America Partners
    { name: "Amerigo Scientific", coordinates: [-73.1979, 40.8256] },
    { name: "Labscoop LLC", coordinates: [-92.2896, 34.7465] },
    { name: "Zageno", coordinates: [-71.1097, 42.3736] },
    { name: "Cedarlane", coordinates: [-79.7990, 43.3255] },
    { name: "BioScotia", coordinates: [-63.5752, 44.6488] },

    // Europe Partners
    { name: "Bio-Connect", coordinates: [5.9388, 51.9398] },
];

export default function GlobalReach() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section id="global" className="py-24 lg:py-32 bg-[#FAFAFA]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-16"
                >
                    <h2 className="text-sm font-bold tracking-widest uppercase text-[#94A3B8] mb-4">
                        GLOBAL NETWORK
                    </h2>
                    <h3 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#1E3A8A] mb-6">
                        Serving partners worldwide.
                    </h3>
                    <p className="text-lg text-[#475569] max-w-2xl mx-auto font-medium leading-relaxed">
                        Provis Biolabs products power pharmaceutical pipelines across North America,
                        Europe and Asia. Our USA operations enable faster, more compliant supply.
                    </p>
                </motion.div>

                {/* Global Map Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="relative bg-white rounded-[2rem] border border-[#E2E8F0] shadow-sm overflow-hidden p-2 sm:p-4 lg:p-8 min-h-[260px] sm:min-h-[400px]"
                >
                    <div className="overflow-x-auto">
                    {!mounted ? (
                        <div className="w-full h-[260px] sm:h-[400px] bg-[#F8FAFC] animate-pulse rounded-xl flex items-center justify-center">
                            <span className="text-sm font-bold text-[#94A3B8] tracking-widest uppercase">Loading Global Map...</span>
                        </div>
                    ) : (
                        <ComposableMap
                            projectionConfig={{ scale: 140 }}
                            width={800}
                            height={400}
                            style={{ width: "100%", height: "auto", minWidth: "350px" }}
                        >
                            <Geographies geography={geoUrl}>
                                {({ geographies }) =>
                                    geographies.map((geo) => (
                                        <Geography
                                            key={geo.rsmKey}
                                            geography={geo}
                                            fill="#F1F5F9"
                                            stroke="#E2E8F0"
                                            strokeWidth={0.5}
                                            style={{
                                                default: { outline: "none" },
                                                hover: { fill: "#E2E8F0", outline: "none" },
                                                pressed: { outline: "none" },
                                            }}
                                        />
                                    ))
                                }
                            </Geographies>

                            {markers.map(({ name, coordinates }) => (
                                <Marker key={name} coordinates={coordinates as [number, number]}>
                                    <g className="animate-pulse">
                                        <circle r={4} fill="#F26522" stroke="#FFFFFF" strokeWidth={1.5} />
                                        <circle r={10} fill="#F26522" opacity={0.2} />
                                        <circle r={20} fill="#F26522" opacity={0.05} />
                                    </g>
                                </Marker>
                            ))}
                        </ComposableMap>
                    )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
