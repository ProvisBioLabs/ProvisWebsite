"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "../../../lib/data/usProducts";
import { ChevronRight, Minus, Plus, ShoppingCart, Info, FileText, CheckCircle2, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function USProductView({ product }: { product: Product }) {
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState("overview");
    const [faqOpen, setFaqOpen] = useState<number | null>(null);

    const categoryNames = {
        'api': 'Bio-APIs',
        'reagent': 'Recombinant Bio-Reagents',
        'cdmo': 'CDMO Services'
    };
    
    const categoryName = categoryNames[product.category] || 'Products';
    const categoryLink = `/us/products/${product.category === 'api' ? 'bio-apis' : product.category === 'reagent' ? 'recombinant-bio-reagents' : 'cdmo'}`;

    const dummyPrice = 375;

    const tabs = [
        { id: "overview", label: "Overview" },
        { id: "specifications", label: "Specifications" },
        { id: "applications", label: "Applications" },
        { id: "faqs", label: "FAQs" }
    ];

    const genericFaqs = [
        {
            q: "What purity levels are provided?",
            a: "Each production lot meets our stringent release specifications of high purity determined by SDS-PAGE and highly controlled endotoxin levels, supporting reproducible performance in sensitive applications."
        },
        {
            q: "Is this product suitable for bulk manufacturing?",
            a: "Yes. Provis Biolabs supports bulk supply and tailored formats for organizations requiring dependable, long-term access to critical enzymes and reagents under GMP compliant processes."
        },
        {
            q: "Is it animal-origin-free (AOF)?",
            a: product.aof ? "Yes. This product is manufactured without the use of animal-derived components, eliminating BSE/TSE risks." : "Please refer to the specifications tab or request a Certificate of Analysis for detailed origin information."
        }
    ];

    return (
        <div className="bg-[#fcfdff] min-h-screen pb-20 pt-28 sm:pt-36 font-sans text-[#1E3A8A]">
            
            {/* Minimal Breadcrumb */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                <nav className="flex items-center text-xs font-bold tracking-widest uppercase text-gray-400">
                    <Link href="/us" className="hover:text-[#F26522] transition-colors">Home</Link>
                    <ChevronRight className="w-3.5 h-3.5 mx-2" />
                    <Link href="/us/products" className="hover:text-[#F26522] transition-colors">Products</Link>
                    <ChevronRight className="w-3.5 h-3.5 mx-2" />
                    <Link href={categoryLink} className="hover:text-[#F26522] transition-colors line-clamp-1 max-w-[120px] sm:max-w-none">
                        {categoryName}
                    </Link>
                    <ChevronRight className="w-3.5 h-3.5 mx-2" />
                    <span className="text-[#1E3A8A] truncate max-w-[150px] sm:max-w-[300px]">{product.name}</span>
                </nav>
            </div>

            {/* Top Section: Image & Buy Box */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-12 xl:gap-16 items-start">
                    
                    {/* Left: Product Image */}
                    <div className="w-full lg:w-1/2 flex flex-col">
                        <div className="w-full aspect-square sm:aspect-[4/3] lg:aspect-square bg-white rounded-3xl border border-[#E2E8F0] shadow-sm flex items-center justify-center p-8 sm:p-12 relative">
                            {product.image ? (
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-contain p-8 sm:p-12 transition-transform duration-500 hover:scale-105"
                                    priority
                                />
                            ) : (
                                <div className="text-gray-300 font-bold uppercase tracking-widest">Image Unavailable</div>
                            )}
                        </div>
                    </div>

                    {/* Right: Product Details & Buy Box */}
                    <div className="w-full lg:w-1/2 flex flex-col">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E3A8A] mb-4 leading-tight">
                            {product.name}
                        </h1>
                        <p className="text-lg sm:text-xl text-[#475569] font-medium leading-relaxed mb-6">
                            {product.shortDescription || product.tagline}
                        </p>

                        <div className="flex gap-3 mb-8 flex-wrap">
                            {product.casNumber && (
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-bold font-mono tracking-wider">
                                    CAS: {product.casNumber}
                                </span>
                            )}
                            {product.aof && (
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#FFF5F0] text-[#F26522] border border-[#F26522]/20 text-xs font-bold tracking-wider">
                                    Animal-Origin-Free
                                </span>
                            )}
                        </div>

                        {/* B2B E-commerce Buy Box */}
                        <div className="bg-white border border-[#E2E8F0] rounded-3xl p-6 sm:p-8 shadow-sm">
                            <div className="flex items-end gap-4 mb-6">
                                <span className="text-4xl font-black text-[#1E3A8A]">${dummyPrice}</span>
                                <span className="text-[#64748B] font-medium mb-1">/ unit</span>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 mb-6">
                                <div className="flex items-center border border-[#E2E8F0] rounded-xl overflow-hidden bg-[#F8FAFC]">
                                    <button 
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="px-4 py-3 text-[#64748B] hover:text-[#1E3A8A] hover:bg-white transition-colors"
                                    >
                                        <Minus className="w-4 h-4" />
                                    </button>
                                    <input 
                                        type="number" 
                                        value={quantity}
                                        onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                                        className="w-16 text-center font-bold text-[#1E3A8A] bg-transparent outline-none"
                                        min="1"
                                    />
                                    <button 
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="px-4 py-3 text-[#64748B] hover:text-[#1E3A8A] hover:bg-white transition-colors"
                                    >
                                        <Plus className="w-4 h-4" />
                                    </button>
                                </div>

                                <button className="flex-1 bg-[#F26522] hover:bg-[#d95a1e] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-[0_4px_14px_rgba(242,101,34,0.3)] hover:shadow-[0_6px_20px_rgba(242,101,34,0.4)] flex items-center justify-center gap-2">
                                    <ShoppingCart className="w-5 h-5" />
                                    Buy Now
                                </button>
                            </div>

                            <div className="pt-6 border-t border-[#E2E8F0]">
                                <div className="flex items-start gap-3">
                                    <Info className="w-5 h-5 text-[#F26522] shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-bold text-[#1E3A8A] text-sm mb-1">Bulk Supply & Program Support</h4>
                                        <p className="text-xs text-[#64748B] leading-relaxed mb-3">
                                            Provis Biolabs supports bulk supply and tailored formats for organizations requiring dependable, long-term access to critical enzymes.
                                        </p>
                                        <Link href="/us/contact" className="text-[#F26522] text-xs font-bold hover:underline inline-flex items-center">
                                            Inquire for Bulk Pricing <ChevronRight className="w-3 h-3 ml-1" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Full Page Content Sections (No Tabs) */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-15">
                
                {/* Overview Section */}
                <section id="overview" className="scroll-mt-32">
                    <h2 className="text-3xl font-black mb-8 text-[#1E3A8A] flex items-center gap-4">
                        Overview
                        <div className="h-px bg-[#E2E8F0] flex-grow"></div>
                    </h2>
                    <div className="prose prose-lg text-[#475569] mb-10 max-w-none">
                        <p>{product.description}</p>
                        {product.longDescription && <p className="mt-4">{product.longDescription}</p>}
                    </div>

                    {product.keyFeatures && product.keyFeatures.length > 0 && (
                        <div className="bg-white rounded-3xl p-8 border border-[#E2E8F0] shadow-sm">
                            <h3 className="text-xl font-bold mb-6 text-[#1E3A8A]">Key Benefits</h3>
                            <ul className="space-y-4">
                                {product.keyFeatures.map((feature, idx) => (
                                    <li key={idx} className="flex gap-3 text-[#475569]">
                                        <CheckCircle2 className="w-6 h-6 text-[#F26522] shrink-0" />
                                        <span className="font-medium leading-relaxed">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {product.grades && product.grades.length > 0 && (
                        <div className="bg-white rounded-3xl p-8 border border-[#E2E8F0] shadow-sm mt-6">
                            <h3 className="text-xl font-bold mb-6 text-[#1E3A8A]">Available SKUs</h3>
                            <div className="flex flex-wrap items-center gap-6 text-[#475569] font-medium">
                                {product.grades.map((grade, idx) => (
                                    <div key={idx} className="flex items-center gap-2 border border-[#E2E8F0] rounded-xl px-4 py-3 bg-[#F8FAFC]">
                                        <span className="font-bold text-[#1E3A8A]">{grade.name}:</span>
                                        <span className="font-mono text-sm tracking-wide">{grade.sku}</span>
                                    </div>
                                ))}
                                <div className="flex items-center gap-2 px-4 py-3 border-l-2 border-[#E2E8F0]">
                                    <span className="font-bold text-[#1E3A8A]">Bulk:</span>
                                    <span className="text-sm text-[#F26522] font-bold">Inquire</span>
                                </div>
                            </div>
                        </div>
                    )}
                </section>

                {/* Specifications Section */}
                <section id="specifications" className="scroll-mt-32">
                    <h2 className="text-3xl font-black mb-8 text-[#1E3A8A] flex items-center gap-4">
                        Specifications
                        <div className="h-px bg-[#E2E8F0] flex-grow"></div>
                    </h2>
                    <div className="bg-white border border-[#E2E8F0] rounded-3xl overflow-hidden shadow-sm">
                        <table className="w-full text-left">
                            <tbody className="divide-y divide-[#E2E8F0]">
                                {product.casNumber && (
                                    <tr className="hover:bg-[#F8FAFC] transition-colors">
                                        <td className="py-5 px-6 font-bold text-[#1E3A8A] w-1/3 bg-[#FAFAFA]">CAS Number</td>
                                        <td className="py-5 px-6 text-[#475569] font-mono">{product.casNumber}</td>
                                    </tr>
                                )}
                                {product.quickSpecs && Object.entries(product.quickSpecs).map(([key, value]) => {
                                    if (key === 'casNumber') return null; // Already displayed
                                    const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
                                    return (
                                        <tr key={key} className="hover:bg-[#F8FAFC] transition-colors">
                                            <td className="py-5 px-6 font-bold text-[#1E3A8A] w-1/3 bg-[#FAFAFA]">{formattedKey}</td>
                                            <td className="py-5 px-6 text-[#475569]">{value}</td>
                                        </tr>
                                    );
                                })}
                                {product.aof && (
                                    <tr className="hover:bg-[#F8FAFC] transition-colors">
                                        <td className="py-5 px-6 font-bold text-[#1E3A8A] w-1/3 bg-[#FAFAFA]">Animal-Origin</td>
                                        <td className="py-5 px-6 text-[#475569]">Animal-Origin-Free (AOF)</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Applications Section */}
                <section id="applications" className="scroll-mt-32">
                    <h2 className="text-3xl font-black mb-8 text-[#1E3A8A] flex items-center gap-4">
                        Applications & Workflows
                        <div className="h-px bg-[#E2E8F0] flex-grow"></div>
                    </h2>
                    
                    {product.applications && product.applications.length > 0 && (
                        <div className="mb-10">
                            <h3 className="text-xl font-bold mb-5 text-[#1E3A8A]">Recommended Applications</h3>
                            <div className="flex flex-wrap gap-3">
                                {product.applications.map((app, i) => (
                                    <span key={i} className="px-5 py-2.5 rounded-xl bg-white border border-[#E2E8F0] shadow-sm text-[#1E3A8A] font-bold text-sm tracking-wide">
                                        {app}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {product.workflow && product.workflow.length > 0 && (
                        <div>
                            <h3 className="text-xl font-bold mb-6 text-[#1E3A8A]">Typical Workflow</h3>
                            <div className="space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#E2E8F0] before:to-transparent">
                                {product.workflow.map((step, i) => (
                                    <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                        <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#F26522] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 font-bold z-10">
                                            {i + 1}
                                        </div>
                                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl border border-[#E2E8F0] shadow-sm">
                                            <span className="font-bold text-[#475569]">{step}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </section>

                {/* FAQs Section */}
                <section id="faqs" className="scroll-mt-32">
                    <h2 className="text-3xl font-black mb-8 text-[#1E3A8A] flex items-center gap-4">
                        Frequently Asked Questions
                        <div className="h-px bg-[#E2E8F0] flex-grow"></div>
                    </h2>
                    <div className="space-y-4">
                        {genericFaqs.map((faq, index) => (
                            <div 
                                key={index} 
                                className="bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md"
                            >
                                <button
                                    onClick={() => setFaqOpen(faqOpen === index ? null : index)}
                                    className="w-full px-6 py-5 flex items-center justify-between font-bold text-[#1E3A8A] text-left hover:bg-[#F8FAFC] transition-colors"
                                >
                                    <span className="pr-8">{faq.q}</span>
                                    <ChevronDown className={`w-5 h-5 text-[#F26522] transition-transform duration-300 ${faqOpen === index ? 'rotate-180' : ''}`} />
                                </button>
                                <AnimatePresence>
                                    {faqOpen === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="px-6 pb-5 pt-1 text-[#475569] leading-relaxed border-t border-gray-50">
                                                {faq.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
}
