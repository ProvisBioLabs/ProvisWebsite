"use client";
/**
 * ClientSections: a dedicated 'use client' wrapper that holds the dynamic
 * imports requiring ssr:false (AboutStrip uses framer-motion's useScroll;
 * Products uses AnimatePresence). This keeps the root page.tsx as a Server
 * Component while still deferring these heavy components from the critical
 * hydration path, reducing Total Blocking Time.
 */
import dynamic from "next/dynamic";

const AboutStrip = dynamic(() => import("./AboutStrip"), { ssr: false });
const Products = dynamic(() => import("./Products"), { ssr: false });

export default function ClientSections() {
    return (
        <>
            <AboutStrip />
            <Products />
        </>
    );
}
