'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { products as allProducts } from '../../../lib/data/usProducts';

// Filter products: Recombinant bio-reagents and synthetic peptides only
const usProducts = allProducts.filter(p => p.category === 'reagent' || p.slug === 'synthetic-peptides');

// We duplicate the array to create a seamless infinite marquee effect
const marqueeItems = [...usProducts, ...usProducts];

export default function USProducts() {
    return (
        <section id="products" className="py-12  bg-[#F8FAFC] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-16 text-center max-w-3xl mx-auto"
                >
                    <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#1E3A8A] mb-6 leading-tight">
                        Our <span className="text-[#F26522]">Products</span>
                    </h3>
                </motion.div>

            </div>

            {/* Marquee Container */}
            <div className="relative w-full flex overflow-hidden group">
                {/* Gradient Fades for Marquee edges */}
                <div className="absolute top-0 left-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none" />
                <div className="absolute top-0 right-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none" />

                <motion.div
                    className="flex gap-6 pr-6 w-max"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 120,
                    }}
                >
                    {marqueeItems.map((product, i) => (
                        <Link
                            key={`${product.id}-${i}`}
                            href={`/us${product.href}`}
                            className="block w-[300px] sm:w-[360px] flex-shrink-0"
                        >
                            <div className="relative w-full h-[400px] rounded-3xl bg-white border border-[#E2E8F0] flex flex-col overflow-hidden group/card hover:border-[#F26522]/40 hover:-translate-y-1 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(30,58,138,0.08)]">
                                
                                {/* Top: Image Section */}
                                <div className="w-full h-[200px] bg-[#F8FAFC] relative flex items-center justify-center p-6 border-b border-[#E2E8F0] shrink-0">
                                    {/* Solid Badges instead of Glassmorphism */}
                                    <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-10">
                                        <span className="text-[10px] font-black tracking-widest uppercase px-3 py-1.5 rounded-full bg-white border border-[#E2E8F0] text-[#F26522] shadow-sm">
                                            {product.category === 'reagent' ? 'REAGENT' : 'PEPTIDES'}
                                        </span>
                                        <div className="w-8 h-8 rounded-full bg-white border border-[#E2E8F0] flex items-center justify-center text-[#1E3A8A] shadow-sm group-hover/card:bg-[#F26522] group-hover/card:text-white group-hover/card:border-[#F26522] transition-colors duration-300">
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="m12 5 7 7-7 7"></path>
                                            </svg>
                                        </div>
                                    </div>

                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-contain p-2 group-hover/card:scale-105 transition-transform duration-700 ease-out relative z-0"
                                    />
                                </div>

                                {/* Bottom: Content Section */}
                                <div className="flex-1 bg-white p-6 flex flex-col">
                                    <div>
                                        <span className="inline-block text-[10px] font-semibold px-2 py-0.5 rounded bg-[#EFF6FF] text-[#1E3A8A] uppercase tracking-wide mb-3">
                                            {product.grade}
                                        </span>
                                        <h4 className="text-xl font-bold mb-2 text-[#1E3A8A] group-hover/card:text-[#F26522] transition-colors leading-tight">
                                            {product.name}
                                        </h4>
                                        <p className="text-sm text-[#64748B] font-medium leading-relaxed line-clamp-2">
                                            {product.shortDescription}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </motion.div>
            </div>

            <div className="mt-16 text-center">
                <Link
                    href="/us/products"
                    className="inline-block px-8 py-4 rounded-xl text-sm font-bold border-2 border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white transition-all duration-300"
                >
                    View All Products
                </Link>
            </div>
        </section>
    );
}
