"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Product, products as allProducts } from "../../lib/data/products";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import { span } from "framer-motion/client";

export default function ProductView({ product }: { product: Product }) {
    // Find related products in the same category (max 3)
    const relatedProducts = allProducts
        .filter((p) => p.category === product.category && p.id !== product.id)
        .slice(0, 3);

    const categoryLinks: Record<string, string> = {
        'api': '/products/bio-apis',
        'reagent': '/products/recombinant-bio-reagents',
        'cdmo': '/cdmo'
    };
    const categoryHref = categoryLinks[product.category] || '/products';

    return (
        <div className="bg-[#fcfdff] selection:bg-[#F26522]/20 min-h-screen pb-12">
            {/* Main Content Container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 pb-8">

                {/* Minimal Breadcrumb */}
                <nav className="flex items-center text-[13px] font-bold tracking-widest uppercase text-gray-400 mb-8 pt-4">
                    <Link href="/products" className="hover:text-[#F26522] transition-colors">Products</Link>
                    <ChevronRight className="w-3.5 h-3.5 mx-2" />
                    <Link href={categoryHref} className="hover:text-[#F26522] transition-colors line-clamp-1 max-w-[120px] sm:max-w-none">
                        {product.category === 'api' ? 'API' : product.category === 'reagent' ? 'Reagents' : product.category}
                    </Link>
                    <ChevronRight className="w-3.5 h-3.5 mx-2" />
                    <span className="text-[#1E3A8A] truncate max-w-[150px] sm:max-w-[300px]">{product.name}</span>
                </nav>

                <div className="flex flex-col lg:flex-row gap-12 xl:gap-16 items-start relative">
                    {/* LEFT COLUMN: Sticky Image Side (5 columns) */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="w-full lg:w-[42%] xl:w-[45%] lg:sticky lg:top-32 z-10 flex flex-col gap-5"
                    >
                        {/* Integrated Info Bar Above Image */}
                        {(product.casNumber || product.dmfAvailable) && (
                            <div className="flex flex-wrap items-center justify-start w-full px-5   ">
                                {product.casNumber && (
                                    <div className="flex items-center gap-2 bg-white px-3.5 mr-4 h-10 rounded-xl border border-[#E2E8F0] shadow-sm">
                                        <span className="font-black text-[#94A3B8] uppercase tracking-[0.15em] text-[10px]">CAS No.</span>
                                        <span className="font-mono font-bold text-[#1E3A8A] text-[15px]">{product.casNumber}</span>
                                    </div>
                                )}
                                {product.dmfAvailable && (
                                    <div className="flex items-center gap-2 bg-[#1E3A8A] text-white px-4 h-10 rounded-xl shadow-[0_8px_20px_rgba(30,58,138,0.15)]">
                                        <span className="font-bold text-sm">DMF Available</span>
                                    </div>
                                )}
                            </div>
                        )}

                        <div className="w-full min-h-[360px] lg:h-[calc(100vh-200px)] lg:max-h-[650px] rounded-[2.5rem] overflow-hidden bg-white border border-[#E2E8F0] shadow-sm hover:shadow-[0_24px_60px_rgba(30,58,138,0.06)] hover:border-[#1E3A8A]/10 transition-all duration-500 relative group">

                            {product.cleavageImages && product.cleavageImages.length > 0 ? (
                                product.cleavageImages.length === 1 ? (
                                    <Image
                                        src={product.cleavageImages[0]}
                                        alt={`${product.name} Cleavage Diagram`}
                                        fill
                                        className={`transition-transform duration-500 group-hover:scale-[1.02] ${product.category === 'reagent'
                                                ? 'object-cover'
                                                : 'object-contain p-8 sm:p-12'
                                            }`}
                                        priority
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex flex-col gap-0 w-full items-center overflow-y-auto custom-scrollbar">
                                        {product.cleavageImages.map((imgSrc, index) => (
                                            <div key={index} className="relative w-full h-[280px] sm:h-[380px] shrink-0">
                                                <Image
                                                    src={imgSrc}
                                                    alt={`${product.name} Cleavage Site ${index + 1}`}
                                                    fill
                                                    className={`transition-transform duration-500 group-hover:scale-[1.02] ${product.category === 'reagent'
                                                            ? 'object-cover'
                                                            : 'object-contain p-8'
                                                        }`}
                                                    priority={index === 0}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                )
                            ) : product.image ? (
                                <>
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className={`transition-transform duration-700 group-hover:scale-105 ${product.category === 'reagent'
                                                ? 'object-cover'
                                                : 'object-contain p-8 sm:p-12 lg:p-16'
                                            }`}
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                </>
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#F8FAFC] to-[#EFF6FF]">
                                    <span className="text-[#64748B] font-bold uppercase tracking-widest text-sm opacity-50">No Image provided</span>
                                </div>
                            )}

                        </div>
                    </motion.div>

                    {/* RIGHT COLUMN: Scrolling Details (7 columns) */}
                    <div className="w-full lg:w-[58%] xl:w-[55%] flex flex-col pt-2 lg:pt-6">

                        {/* Title & Short Desc */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="mb-10"
                        >

                            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-outfit font-black text-[#1E3A8A] leading-[1.1] mb-3">
                                {product.slug === 'pngase-f-flash' ? (
                                    <img
                                        src="/pngase f flash.png"
                                        alt="PNGase F Flash™"
                                        className="h-16 sm:h-20 lg:h-24 w-auto object-contain -ml-2"
                                    />
                                ) : (
                                    product.name
                                )}
                            </h1>
                            {product.shortDescription && (
                                <p className="text-[#F26522] font-black tracking-[0.2em] text-xs uppercase mb-4 opacity-90 drop-shadow-sm">
                                    {product.shortDescription}
                                </p>
                            )}
                            {/* Tagline + Bulk Available pills */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="flex flex-wrap pt-4 gap-3 mb-14"
                            >

                                {product.tagline && (
                                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#FFF5F0] border border-[#F26522]/20 text-[#F26522] text-sm font-black tracking-wide shadow-sm">
                                        {product.tagline}
                                    </span>
                                )}
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-bold shadow-sm">
                                    <span className="relative flex h-2.5 w-2.5">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                                    </span>
                                    Bulk Available
                                </div>
                            </motion.div>


                            <div className="text-lg text-[#475569] leading-relaxed font-medium space-y-4">
                                <p>{product.description}</p>
                                {product.longDescription && <p>{product.longDescription}</p>}
                            </div>
                        </motion.div>
                        {/* PNGase Special Section */}
                        {(product.slug === 'pngase-f' || product.slug === 'pngase-f-flash') && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className="pt-8 border-t border-dashed border-[#E2E8F0]"
                            >
                                {/* Scientific Background */}
                                <div className="mb-12 bg-gradient-to-br from-white to-[#F8FAFC] p-8 sm:p-10 rounded-[2.5rem] border border-[#E2E8F0] shadow-sm">
                                    <h2 className="text-2xl font-outfit font-black text-[#1E3A8A] mb-4">Scientific Background</h2>
                                    <p className="text-[#64748B] font-medium mb-8 leading-relaxed text-[15px]">
                                        Catalyzes site-specific removal of N-linked oligosaccharides by hydrolyzing the asparagine-linked glycosylation site
                                    </p>
                                    <div className="grid gap-4">
                                        <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm flex items-start gap-4 hover:border-[#1E3A8A]/20 transition-colors">
                                            <li className="flex gap-4">
                                                <div className="mt-1 w-6 h-6 rounded-full bg-[#1E3A8A]/10 flex items-center justify-center shrink-0">
                                                    <div className="w-2 h-2 rounded-full bg-[#1E3A8A]" />
                                                </div>
                                                <p className="text-[#64748B] text-sm font-medium leading-relaxed">Manufactured to high purity, providing excellent batch-to-batch consistency</p>
                                            </li>
                                        </div>
                                        <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm flex items-start gap-4 hover:border-[#1E3A8A]/20 transition-colors">
                                            <li className="flex gap-4">
                                                <div className="mt-1 w-6 h-6 rounded-full bg-[#1E3A8A]/10 flex items-center justify-center shrink-0">
                                                    <div className="w-2 h-2 rounded-full bg-[#1E3A8A]" />
                                                </div>
                                                <p className="text-[#64748B] text-sm font-medium leading-relaxed">Efficiently removes high-mannose, hybrid and complex N-glycans</p>
                                            </li>
                                        </div>
                                        <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm flex items-start gap-4 hover:border-[#1E3A8A]/20 transition-colors">
                                            <li className="flex gap-4">
                                                <div className="mt-1 w-6 h-6 rounded-full bg-[#1E3A8A]/10 flex items-center justify-center shrink-0">
                                                    <div className="w-2 h-2 rounded-full bg-[#1E3A8A]" />
                                                </div>
                                                <p className="text-[#64748B] text-sm font-medium leading-relaxed">Widely used in biopharmaceutical characterization and analytical biology workflows</p>
                                            </li>
                                        </div>
                                    </div>
                                </div>

                                {/* Comparison Table */}
                                <div>
                                    <h2 className="text-2xl font-outfit font-black text-[#1E3A8A] mb-6">PNGase Product Range</h2>
                                    <div className="overflow-x-auto rounded-[2rem] shadow-sm border border-[#E2E8F0] bg-white">
                                        <table className="w-full text-left border-collapse min-w-[500px]">
                                            <thead>
                                                <tr>
                                                    <th className="p-6 bg-[#F8FAFC] text-[#64748B] font-bold tracking-widest text-[11px] uppercase border-b border-[#E2E8F0] w-1/4">Parameter</th>
                                                    <th className={`p-6 font-outfit font-black text-xl border-b border-[#E2E8F0] border-l border-[#E2E8F0] w-[37.5%] text-center ${product.slug === 'pngase-f' ? 'bg-[#FFF5F0] text-[#F26522]' : 'bg-[#FAFAFA] text-[#1E3A8A]'}`}>PNGase F</th>
                                                    <th className={`p-6 font-outfit font-black text-xl border-b border-[#E2E8F0] border-l border-[#E2E8F0] w-[37.5%] text-center ${product.slug === 'pngase-f-flash' ? 'bg-[#FFF5F0] text-[#F26522]' : 'bg-[#FAFAFA] text-[#1E3A8A]'}`}>
                                                        <div className="flex justify-center h-7 items-center">
                                                            <img
                                                                src="/pngase f flash.png"
                                                                alt="PNGase F Flash™"
                                                                className={`h-full w-auto object-contain ${product.slug === 'pngase-f-flash' ? 'filter-none grayscale-0' : 'grayscale opacity-50'}`}
                                                            />
                                                        </div>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="text-[15px]">
                                                <tr className="border-b border-[#E2E8F0] hover:bg-[#F8FAFC]/50 transition-colors">
                                                    <td className="p-5 px-6 font-bold text-[#1E3A8A] bg-[#FAFAFA]/50 align-top">Primary Focus</td>
                                                    <td className="p-5 px-6 text-[#475569] font-medium border-l border-[#E2E8F0] align-top leading-relaxed">General glycoprotein deglycosylation and structural analysis</td>
                                                    <td className="p-5 px-6 text-[#475569] font-bold border-l border-[#E2E8F0] align-top leading-relaxed">Rapid antibody deglycosylation for high-throughput workflows</td>
                                                </tr>
                                                <tr className="border-b border-[#E2E8F0] hover:bg-[#F8FAFC]/50 transition-colors">
                                                    <td className="p-5 px-6 font-bold text-[#1E3A8A] bg-[#FAFAFA]/50 align-top">Reaction Time</td>
                                                    <td className="p-5 px-6 text-[#475569] font-medium border-l border-[#E2E8F0] align-top">Standard incubation tracking (2-16 hr.)</td>
                                                    <td className="p-5 px-6 text-[#F26522] font-black border-l border-[#E2E8F0] align-top bg-[#FFF5F0]/30 tracking-wide text-base">Complete N-glycan removal in ~ 10 minutes</td>
                                                </tr>
                                                <tr className="hover:bg-[#F8FAFC]/50 transition-colors">
                                                    <td className="p-5 px-6 font-bold text-[#1E3A8A] bg-[#FAFAFA]/50 align-top">Applications</td>
                                                    <td className="p-5 px-6 text-[#475569] font-medium border-l border-[#E2E8F0] align-top">
                                                        <ul className="list-disc pl-4 space-y-2 opacity-90 marker:text-[#E2E8F0]">
                                                            <li>Glycoprotein analysis</li>
                                                            <li>Antibody deglycosylation</li>
                                                        </ul>
                                                    </td>
                                                    <td className="p-5 px-6 text-[#475569] font-medium border-l border-[#E2E8F0] align-top">
                                                        <ul className="list-disc pl-4 space-y-2 opacity-90 marker:text-[#E2E8F0]">
                                                            <li>Rapid glycoprotein deglycosylation</li>
                                                            <li>High-throughput mAb analysis</li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                        <hr className="border-[#E2E8F0] m-6" />
                        {/* Key Features */}
                        {product.keyFeatures && product.keyFeatures.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className="mb-14"
                            >
                                <h2 className="text-2xl font-outfit font-black text-[#1E3A8A] mb-6 flex items-center gap-4">
                                    Key Features
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {product.keyFeatures.map((feature, i) => (
                                        <div key={i} className="flex gap-4 items-start p-5 bg-white rounded-2xl border border-[#E2E8F0] shadow-sm hover:shadow-md hover:border-[#1E3A8A]/20 hover:-translate-y-0.5 transition-all duration-300 group">
                                            <div className="w-6 h-6 rounded-full bg-[#FFF5F0] flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#F26522] transition-colors">
                                                <CheckCircle2 className="w-3.5 h-3.5 text-[#F26522] group-hover:text-white transition-colors" />
                                            </div>
                                            <span className="text-[#475569] font-medium leading-relaxed">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* Applications */}
                        {product.applications && product.applications.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className="mb-10"
                            >
                                <h2 className="text-2xl font-outfit font-black text-[#1E3A8A] mb-6 flex items-center gap-4">
                                    Applications
                                </h2>
                                <div className="flex flex-wrap gap-3">
                                    {product.applications.map((app, i) => (
                                        <span key={i} className="px-5 py-2.5 rounded-xl bg-white border border-[#E2E8F0] shadow-[0_2px_8px_rgba(0,0,0,0.02)] text-[#1E3A8A] font-bold text-[13px] tracking-wide hover:border-[#F26522]/30 hover:bg-[#FFF5F0] transition-colors cursor-default">
                                            {app}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                        {/* Integrated CTA right below description */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex flex-col pt-4 sm:flex-row gap-4 items-center sm:items-stretch mb-14"
                        >
                            <Link
                                href="/contact"
                                className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-[#F26522] text-white hover:bg-[#d95a1e] font-bold py-4 px-8 rounded-2xl transition-all duration-300 shadow-[0_8px_24px_rgba(242,101,34,0.25)] hover:shadow-[0_12px_30px_rgba(242,101,34,0.3)] hover:-translate-y-0.5"
                            >
                                Request Quote / CoA
                                <ArrowRight className="w-4 h-4 ml-1" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Related Products Section (Full Width Background, Max-W Content) */}
            {relatedProducts.length > 0 && (
                <section className="pt-20 pb-10 mt-12 bg-white border-t border-[#E2E8F0]/60">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
                            <div>
                                <h2 className="text-3xl sm:text-4xl font-outfit font-black text-[#1E3A8A] mb-3">
                                    Related Products
                                </h2>
                                <p className="text-[#64748B] font-medium text-base">Explore more solutions in this category</p>
                            </div>
                            <Link href={categoryHref} className="group hidden sm:flex items-center text-sm font-bold text-[#F26522] py-3 px-6 rounded-2xl border-2 border-[#FFF5F0] bg-white hover:bg-[#FFF5F0] hover:border-[#F26522]/20 transition-all shadow-sm">
                                View All Category
                                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {relatedProducts.map((relProduct) => (
                                <Link
                                    key={relProduct.id}
                                    href={relProduct.href}
                                    className="group bg-[#F8FAFC] border border-[#E2E8F0] rounded-[2rem] p-8 hover:shadow-[0_24px_60px_rgba(30,58,138,0.06)] hover:border-[#1E3A8A]/20 hover:bg-white transition-all duration-500 flex flex-col h-full"
                                >
                                    <div className="flex items-center justify-between mb-6">
                                        <span className="inline-block px-3 py-1.5 bg-white shadow-sm border border-gray-100 text-[#F26522] text-[10px] font-black tracking-widest uppercase rounded-lg flex-shrink-0 group-hover:bg-[#FFF5F0] group-hover:border-[#FFF5F0] transition-colors">
                                            {relProduct.category === 'api' ? 'API' : relProduct.category === 'reagent' ? 'REAGENT' : 'CDMO'}
                                        </span>
                                        {relProduct.casNumber && (
                                            <span className="text-[10px] font-mono font-bold tracking-wider text-[#94A3B8]">CAS: {relProduct.casNumber}</span>
                                        )}
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-[#1E3A8A] mb-4 group-hover:text-[#F26522] transition-colors line-clamp-2 leading-tight">
                                        {relProduct.name}
                                    </h3>
                                    <p className="text-[15px] text-[#64748B] line-clamp-3 mb-8 flex-grow font-medium leading-relaxed">
                                        {relProduct.shortDescription || relProduct.tagline}
                                    </p>
                                    <div className="mt-auto flex items-center justify-between text-[#1E3A8A] border-t border-[#E2E8F0] pt-6 group-hover:border-[#F26522]/20 transition-colors">
                                        <span className="text-sm font-bold group-hover:text-[#F26522] transition-colors">
                                            View Details
                                        </span>
                                        <div className="w-8 h-8 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center group-hover:bg-[#F26522] group-hover:border-[#F26522] group-hover:text-white transition-all">
                                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}
