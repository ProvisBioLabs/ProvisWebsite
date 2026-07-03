"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Product, products as usProducts } from "../../../lib/data/usProducts";
import {
    ArrowRight, CheckCircle2, ChevronRight, ChevronDown,
    ShoppingCart, FileText, FlaskConical, Layers,
    HelpCircle, Zap, ChevronLeft, Tag, Star,
    ClipboardList, Phone
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

/* ─── helpers ─── */
type SectionDef = { id: string; label: string; icon: React.ElementType };

function buildSections(product: Product): SectionDef[] {
    return [
        ...(product.skuList?.length ? [{ id: "ordering", label: "Ordering", icon: ShoppingCart }] : []),
        { id: "overview", label: "Overview", icon: FileText },
        ...(product.benefits?.length ? [{ id: "benefits", label: "Key Benefits", icon: CheckCircle2 }] : []),
        ...(product.specifications?.length ? [{ id: "specifications", label: "Specifications", icon: FlaskConical }] : []),
        ...(product.applications?.length ? [{ id: "applications", label: "Applications", icon: Layers }] : []),
        ...(product.faqs?.length ? [{ id: "faqs", label: "FAQs", icon: HelpCircle }] : []),
    ];
}

/* ─── sub-components ─── */
function SectionHeading({ icon: Icon, title }: { icon: React.ElementType; title: string }) {
    return (
        <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#FFF0E6] flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-[#F26522]" />
            </div>
            <h2 className="text-2xl font-black text-[#0F2351] tracking-tight">{title}</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-[#E2E8F0] to-transparent" />
        </div>
    );
}

/* ─── main component ─── */
export default function ProductViewUS({ product }: { product: Product }) {
    const [activeSection, setActiveSection] = useState(product.skuList?.length ? "ordering" : "overview");
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [activeImg, setActiveImg] = useState(0);
    const navRef = useRef<HTMLDivElement>(null);
    const sections = buildSections(product);

    /* Image list: product image first, then diagrams */
    const images: string[] = [
        ...(product.image ? [product.image] : []),
        ...(product.cleavageImages ?? []),
    ];

    /* Scroll-spy */
    useEffect(() => {
        const onScroll = () => {
            const offset = 140;
            for (const sec of [...sections].reverse()) {
                const el = document.getElementById(sec.id);
                if (el && el.getBoundingClientRect().top <= offset) {
                    setActiveSection(sec.id);
                    break;
                }
            }
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, [sections]);

    /* Scroll nav button into view */
    useEffect(() => {
        const btn = navRef.current?.querySelector(`[data-section="${activeSection}"]`) as HTMLElement;
        btn?.scrollIntoView({ block: "nearest", inline: "center" });
    }, [activeSection]);

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (!el) return;
        window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 110, behavior: "smooth" });
    };

    const related = usProducts
        .filter((p: Product) => p.category === product.category && p.id !== product.id)
        .slice(0, 3);

    const catHref = product.category === "api"
        ? "/us/products/bio-apis"
        : product.category === "reagent"
            ? "/us/products/recombinant-bio-reagents"
            : "/us/cdmo";

    const catLabel = product.category === "api" ? "Bio-APIs" : product.category === "reagent" ? "Reagents" : "CDMO";

    return (
        <div className="bg-[#F7F9FC] font-sans">

            {/* ══════════ HERO ══════════ */}
            <div className="bg-gradient-to-br from-[#071a4a] via-[#0f2a6e] to-[#1a3a8a] text-white min-h-[calc(100vh-120px)] flex flex-col justify-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    {/* Breadcrumb */}
                    <nav aria-label="breadcrumb" className="flex items-center gap-1.5 pt-[88px] pb-6 text-[11px] font-bold uppercase tracking-[0.15em] text-white/40">
                        <Link href="/us" className="hover:text-white/80 transition-colors">Home</Link>
                        <ChevronRight className="w-3 h-3" />
                        <Link href="/us/products" className="hover:text-white/80 transition-colors">Products</Link>
                        <ChevronRight className="w-3 h-3" />
                        <Link href={catHref} className="hover:text-white/80 transition-colors">{catLabel}</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-white truncate max-w-[180px]">{product.name}</span>
                    </nav>

                    <div className="grid lg:grid-cols-2 gap-10 xl:gap-20 items-end pb-0 ">
                        {/* ── Info col ── */}
                        <div className="pb-12 lg:pb-16">
                            {/* Badges */}
                            <div className="flex flex-wrap gap-2 mb-5">
                                {product.grade && (
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/90 text-xs font-bold">
                                        <Zap className="w-3 h-3 text-[#F26522]" />{product.grade}
                                    </span>
                                )}
                                {product.aof && (
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F26522]/20 border border-[#F26522]/40 text-orange-300 text-xs font-bold">
                                        Animal-Origin Free
                                    </span>
                                )}
                                {product.badge && (
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-400/15 border border-yellow-400/30 text-yellow-300 text-xs font-bold">
                                        <Star className="w-3 h-3" /> {product.badge}
                                    </span>
                                )}
                                {product.dmfAvailable && (
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-400/15 border border-emerald-400/30 text-emerald-300 text-xs font-bold">
                                        DMF Available
                                    </span>
                                )}
                            </div>

                            {/* Title */}
                            <h1 className="text-[clamp(2rem,5vw,3.75rem)] font-black text-white leading-[1.05] tracking-tight mb-3">
                                {product.name}
                            </h1>
                            {product.casNumber && (
                                <p className="text-white text-sm font-mono mb-5">CAS No. {product.casNumber}</p>
                            )}
                            <p className="text-white text-[17px] leading-[1.75] mb-8 max-w-lg">
                                {product.shortDescription}
                            </p>

                            {/* CTA */}
                            <div className="flex flex-wrap gap-3">
                                <Link href="/us/contact" className="inline-flex items-center gap-2 bg-[#F26522] hover:bg-[#d95c1a] text-white font-bold py-3.5 px-7 rounded-xl transition-all shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5">
                                    <ShoppingCart className="w-4 h-4" /> Request Quote
                                </Link>
                                <Link href="/us/contact" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold py-3.5 px-7 rounded-xl transition-all">
                                    <ClipboardList className="w-4 h-4" /> Request CoA / SDS
                                </Link>
                                <Link href="/us/contact" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold py-3.5 px-7 rounded-xl transition-all">
                                    <Phone className="w-4 h-4" /> Talk to an Expert
                                </Link>
                            </div>
                        </div>

                        {/* ── Image col (bleeds into white below) ── */}
                        <div className="hidden lg:flex flex-col items-center self-end">
                            {/* Main image card */}
                            <div className="w-full max-w-[440px] rounded-t-[2.5rem] overflow-hidden bg-white/5 border border-white/10 shadow-2xl relative aspect-square">
                                <AnimatePresence mode="wait" initial={false}>
                                    <motion.div
                                        key={activeImg}
                                        initial={{ opacity: 0, scale: 0.97 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 1.03 }}
                                        transition={{ duration: 0.3 }}
                                        className="absolute inset-0"
                                    >
                                        <Image
                                            src={images[activeImg] ?? product.image}
                                            alt={`${product.name} product image`}
                                            fill
                                            className="object-contain p-10"
                                            priority
                                            sizes="440px"
                                        />
                                    </motion.div>
                                </AnimatePresence>
                                {images.length > 1 && (
                                    <>
                                        <button onClick={() => setActiveImg(i => (i - 1 + images.length) % images.length)}
                                            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/20 hover:bg-black/40 backdrop-blur-sm flex items-center justify-center text-white transition-all">
                                            <ChevronLeft className="w-4 h-4" />
                                        </button>
                                        <button onClick={() => setActiveImg(i => (i + 1) % images.length)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/20 hover:bg-black/40 backdrop-blur-sm flex items-center justify-center text-white transition-all">
                                            <ChevronRight className="w-4 h-4" />
                                        </button>
                                    </>
                                )}
                            </div>
                            {/* Thumbnails */}
                            {images.length > 1 && (
                                <div className="flex gap-2 py-3">
                                    {images.map((img, i) => (
                                        <button key={i} onClick={() => setActiveImg(i)}
                                            className={`w-12 h-12 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 relative ${activeImg === i ? "border-[#F26522]" : "border-white/20 opacity-50 hover:opacity-80"}`}>
                                            <Image src={img} alt={`View ${i + 1}`} fill className="object-contain p-1" sizes="48px" />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* ══════════ STICKY SCROLLSPY NAV ══════════ */}
            <div className="sticky top-[80px] z-[1001] bg-white/98 backdrop-blur-md border-b border-[#E2E8F0] shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div ref={navRef} className="flex items-center overflow-x-auto no-scrollbar">
                        {sections.map(sec => {
                            const Icon = sec.icon;
                            const isActive = activeSection === sec.id;
                            return (
                                <button
                                    key={sec.id}
                                    data-section={sec.id}
                                    onClick={() => scrollTo(sec.id)}
                                    className={`flex items-center gap-2 px-4 py-[14px] text-[13px] font-bold whitespace-nowrap border-b-2 transition-all ${isActive
                                        ? "border-[#F26522] text-[#F26522]"
                                        : "border-transparent text-[#64748B] hover:text-[#0F2351]"
                                        }`}
                                >
                                    <Icon className="w-3.5 h-3.5 flex-shrink-0" />
                                    {sec.label}
                                </button>
                            );
                        })}
                        {/* Spacer + Quick CTA */}
                        <div className="ml-auto pl-4 flex-shrink-0 py-2">
                            <Link href="/us/contact" className="inline-flex items-center gap-1.5 bg-[#F26522] hover:bg-[#d95c1a] text-white text-xs font-bold px-4 py-2 rounded-lg transition-all">
                                Get Quote <ArrowRight className="w-3 h-3" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* ══════════ CONTENT ══════════ */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
                <div className="grid lg:grid-cols-[1fr_300px] gap-12 xl:gap-16 items-start">

                    {/* ── Main scrollable content ── */}
                    <div className="space-y-20 min-w-0">

                        {/* Mobile image */}
                        <div className="lg:hidden -mx-4 sm:-mx-6">
                            <div className="relative aspect-square bg-white border-y border-[#E2E8F0]">
                                <Image src={images[activeImg] ?? product.image} alt={product.name} fill className="object-contain p-8" priority sizes="100vw" />
                            </div>
                            {images.length > 1 && (
                                <div className="flex gap-2 justify-center py-3 px-4">
                                    {images.map((img, i) => (
                                        <button key={i} onClick={() => setActiveImg(i)}
                                            className={`w-10 h-10 rounded-lg border-2 overflow-hidden relative transition-all ${activeImg === i ? "border-[#F26522]" : "border-[#E2E8F0] opacity-60"}`}>
                                            <Image src={img} alt="" fill className="object-contain p-1" sizes="40px" />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* ORDERING */}
                        {product.skuList?.length ? (
                            <section id="ordering" className="scroll-mt-[110px]">
                                <SectionHeading icon={ShoppingCart} title="Ordering Information" />
                                <div className="overflow-hidden rounded-2xl border border-[#E8EDF3] bg-white shadow-sm">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="bg-[#0F2351]">
                                                <th className="p-4 px-6 text-white font-bold text-xs uppercase tracking-wider">Size / Format</th>
                                                <th className="p-4 px-6 text-white font-bold text-xs uppercase tracking-wider">Cat. No.</th>
                                                <th className="p-4 px-6 text-white font-bold text-xs uppercase tracking-wider">Description</th>
                                                <th className="p-4 px-6 text-white font-bold text-xs uppercase tracking-wider text-right">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {product.skuList.map((sku: { sku: string; catNo: string; description: string; price?: string }, i: number) => (
                                                <tr key={i} className="border-t border-[#F1F5F9] hover:bg-[#FAFBFF] transition-colors group">
                                                    <td className="p-4 px-6 font-black text-[#F26522] text-sm">{sku.sku}</td>
                                                    <td className="p-4 px-6 font-mono text-[#475569] text-sm font-semibold">{sku.catNo}</td>
                                                    <td className="p-4 px-6 text-[#475569] font-medium text-sm">{sku.description}</td>
                                                    <td className="p-4 px-6 text-right">
                                                        <Link href="/us/contact" className="inline-flex items-center gap-1 text-xs font-bold text-[#F26522] transition-colors ">
                                                            Order <ArrowRight className="w-3 h-3" />
                                                        </Link>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="mt-4 flex justify-end">
                                    <Link href="/us/contact" className="inline-flex items-center gap-2 bg-[#F26522] hover:bg-[#d95c1a] text-white font-bold py-3 px-6 rounded-xl text-sm transition-all shadow-md hover:-translate-y-0.5">
                                        Request a Quote <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </section>
                        ) : null}

                        {/* OVERVIEW */}
                        <section id="overview" className="scroll-mt-[110px]">
                            <SectionHeading icon={FileText} title="Overview" />
                            <div className="text-[#475569] text-[16.5px] leading-[1.85] space-y-5 font-medium">
                                <p>{product.overview ?? product.description}</p>
                                {!product.overview && product.longDescription && (
                                    <p>{product.longDescription}</p>
                                )}
                            </div>

                            {/* Key features inline */}
                            {product.keyFeatures?.length ? (
                                <div className="mt-8 grid sm:grid-cols-2 gap-3">
                                    {product.keyFeatures.map((f, i) => (
                                        <div key={i} className="flex items-start gap-3 bg-white rounded-xl border border-[#E8EDF3] p-4 hover:border-[#F26522]/30 transition-colors">
                                            <div className="w-2 h-2 rounded-full bg-[#F26522] flex-shrink-0 mt-1.5" />
                                            <span className="text-[#334155] font-semibold text-sm leading-snug">{f}</span>
                                        </div>
                                    ))}
                                </div>
                            ) : null}

                            {/* Workflow */}
                            {product.workflow?.length ? (
                                <div className="mt-8">
                                    <p className="text-xs font-black uppercase tracking-widest text-[#94A3B8] mb-4">Workflow</p>
                                    <div className="flex flex-wrap items-center gap-0">
                                        {product.workflow.map((step, i) => (
                                            <div key={i} className="flex items-center gap-0">
                                                <div className="flex flex-col items-center px-4 py-3 bg-white rounded-xl border border-[#E8EDF3] shadow-sm text-center min-w-[110px]">
                                                    <span className="text-xs font-black text-[#F26522] mb-1">{String(i + 1).padStart(2, "0")}</span>
                                                    <span className="text-xs font-bold text-[#334155] leading-tight">{step}</span>
                                                </div>
                                                {i < product.workflow!.length - 1 && (
                                                    <ArrowRight className="w-4 h-4 text-[#CBD5E1] flex-shrink-0 mx-1" />
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ) : null}
                        </section>

                        {/* BENEFITS */}
                        {product.benefits?.length ? (
                            <section id="benefits" className="scroll-mt-[110px]">
                                <SectionHeading icon={CheckCircle2} title="Key Benefits" />
                                <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4">
                                    {product.benefits.map((benefit: string, i: number) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 14 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true, margin: "-50px" }}
                                            transition={{ delay: i * 0.055, duration: 0.38 }}
                                            className="group flex gap-4 items-start bg-white rounded-2xl border border-[#E8EDF3] p-5 hover:border-[#F26522]/40 hover:shadow-md transition-all"
                                        >
                                            <div className="w-8 h-8 rounded-full bg-[#FFF0E6] flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                                                <CheckCircle2 className="w-4.5 h-4.5 text-[#F26522]" />
                                            </div>
                                            <p className="text-[#475569] font-medium leading-relaxed text-sm">{benefit}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </section>
                        ) : null}

                        {/* SPECIFICATIONS */}
                        {product.specifications?.length ? (
                            <section id="specifications" className="scroll-mt-[110px]">
                                <SectionHeading icon={FlaskConical} title="Product Specifications" />
                                <div className="overflow-hidden rounded-2xl border border-[#E8EDF3] bg-white shadow-sm">
                                    <table className="w-full text-left border-collapse">
                                        <tbody>
                                            {product.specifications.map((spec: { parameter: string; details: string }, i: number) => (
                                                <tr key={i} className="border-b border-[#F1F5F9] last:border-0 hover:bg-[#FAFBFF] transition-colors">
                                                    <td className={`p-4 px-6 font-bold text-[#0F2351] text-sm align-top w-[38%] border-r border-[#F1F5F9] ${i % 2 === 0 ? "bg-[#F8FAFD]" : "bg-white"}`}>
                                                        {spec.parameter}
                                                    </td>
                                                    <td className={`p-4 px-6 text-[#475569] font-medium text-sm align-top ${i % 2 === 0 ? "bg-[#F8FAFD]" : ""}`}>
                                                        {spec.details}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </section>
                        ) : null}



                        {/* APPLICATIONS */}
                        {product.applications?.length ? (
                            <section id="applications" className="scroll-mt-[110px]">
                                <SectionHeading icon={Layers} title="Applications" />
                                <div className="flex flex-wrap gap-3">
                                    {product.applications.map((app: string, i: number) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, scale: 0.92 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.04 }}
                                            className="flex items-center gap-2 bg-white border border-[#E8EDF3] rounded-xl px-4 py-2.5 hover:border-[#F26522]/50 hover:bg-[#FFF5EE] group transition-all cursor-default shadow-sm"
                                        >
                                            <Tag className="w-3.5 h-3.5 text-[#94A3B8] group-hover:text-[#F26522] transition-colors" />
                                            <span className="text-[#334155] font-semibold text-sm group-hover:text-[#F26522] transition-colors">{app}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </section>
                        ) : null}

                        {/* FAQs */}
                        {product.faqs?.length ? (
                            <section id="faqs" className="scroll-mt-[110px]">
                                <SectionHeading icon={HelpCircle} title="Frequently Asked Questions" />
                                <div className="space-y-3">
                                    {product.faqs.map((faq: { question: string; answer: string }, i: number) => (
                                        <div key={i} className="bg-white rounded-2xl border border-[#E8EDF3] overflow-hidden shadow-sm">
                                            <button
                                                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                                className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-[#FAFBFF] transition-colors"
                                                aria-expanded={openFaq === i}
                                            >
                                                <span className="font-bold text-[#0F2351] text-[15px] leading-snug">{faq.question}</span>
                                                <span className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-200 ${openFaq === i ? "bg-[#F26522] text-white rotate-180" : "bg-[#F1F5F9] text-[#64748B]"}`}>
                                                    <ChevronDown className="w-4 h-4 transition-transform duration-200" />
                                                </span>
                                            </button>
                                            <AnimatePresence initial={false}>
                                                {openFaq === i && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.22, ease: "easeInOut" }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="px-5 pb-6 pt-3 text-[#475569] leading-[1.8] text-[15px] font-medium border-t border-[#F1F5F9]">
                                                            {faq.answer}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        ) : null}

                        {/* RELATED PRODUCTS */}
                        {related.length > 0 && (
                            <section className="pt-8 border-t border-[#E8EDF3]">
                                <h2 className="text-xl font-black text-[#0F2351] mb-6">Related Products</h2>
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {related.map((rp: Product) => (
                                        <Link
                                            key={rp.id}
                                            href={`/us/${rp.slug}`}
                                            className="group bg-white rounded-2xl border border-[#E8EDF3] p-5 hover:border-[#F26522]/40 hover:shadow-lg transition-all flex gap-4 items-center"
                                        >
                                            <div className="w-16 h-16 rounded-xl bg-[#F8FAFD] border border-[#E8EDF3] overflow-hidden flex-shrink-0 relative">
                                                <Image src={rp.image} alt={rp.name} fill className="object-contain p-2" sizes="64px" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="font-bold text-[#0F2351] text-sm leading-snug group-hover:text-[#F26522] transition-colors line-clamp-2">{rp.name}</p>
                                                <p className="text-xs text-[#94A3B8] mt-1 font-medium">{rp.grade}</p>
                                            </div>
                                            <ArrowRight className="w-4 h-4 text-[#CBD5E1] group-hover:text-[#F26522] flex-shrink-0 transition-colors" />
                                        </Link>
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>

                    {/* ── Sticky sidebar ── */}
                    <aside className="hidden lg:block">
                        <div className="sticky top-[80px] space-y-4">

                            {/* Quick specs card */}
                            {product.quickSpecs && (
                                <div className="bg-white rounded-2xl border border-[#E8EDF3] shadow-sm overflow-hidden">
                                    <div className="bg-[#0F2351] px-5 py-3">
                                        <p className="text-white font-black text-xs uppercase tracking-widest">Quick Specs</p>
                                    </div>
                                    <div className="divide-y divide-[#F1F5F9]">
                                        {Object.entries(product.quickSpecs).filter(([, v]) => v).map(([k, v]) => (
                                            <div key={k} className="px-5 py-3 flex justify-between gap-4">
                                                <span className="text-[#94A3B8] font-bold text-xs uppercase tracking-wide flex-shrink-0">
                                                    {k.replace(/([A-Z])/g, " $1").trim()}
                                                </span>
                                                <span className="font-bold text-[#0F2351] text-sm text-right">{v as string}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Grades */}
                            {product.grades?.length ? (
                                <div className="bg-white rounded-2xl border border-[#E8EDF3] shadow-sm overflow-hidden">
                                    <div className="bg-[#0F2351] px-5 py-3">
                                        <p className="text-white font-black text-xs uppercase tracking-widest">Available Grades</p>
                                    </div>
                                    <div className="divide-y divide-[#F1F5F9]">
                                        {product.grades.map((g, i) => (
                                            <div key={i} className="px-5 py-3">
                                                <p className="font-bold text-[#0F2351] text-sm">{g.name}</p>
                                                <p className="text-xs text-[#64748B] font-mono mt-0.5">{g.sku}</p>
                                                <p className="text-xs text-[#94A3B8] mt-0.5">{g.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ) : null}

                            {/* Documentation */}
                            {product.documentation?.length ? (
                                <div className="bg-white rounded-2xl border border-[#E8EDF3] shadow-sm overflow-hidden">
                                    <div className="bg-[#0F2351] px-5 py-3">
                                        <p className="text-white font-black text-xs uppercase tracking-widest">Documentation</p>
                                    </div>
                                    <div className="divide-y divide-[#F1F5F9]">
                                        {product.documentation.map((doc, i) => (
                                            <a key={i} href={doc.url} className="flex items-center gap-3 px-5 py-3 hover:bg-[#FFF5EE] group transition-colors">
                                                <FileText className="w-4 h-4 text-[#94A3B8] group-hover:text-[#F26522] transition-colors flex-shrink-0" />
                                                <span className="text-sm font-semibold text-[#334155] group-hover:text-[#F26522] transition-colors">{doc.label}</span>
                                                <ArrowRight className="w-3.5 h-3.5 text-[#CBD5E1] group-hover:text-[#F26522] ml-auto transition-colors" />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            ) : null}

                            {/* CTA Card */}
                            <div className="bg-gradient-to-br from-[#0F2351] to-[#1a3a8a] rounded-2xl p-5 text-white">
                                <p className="font-black text-base mb-2">Need a custom quantity?</p>
                                <p className="text-white/70 text-sm mb-4 leading-relaxed">Our experts can help with custom formulations and regulatory documentation.</p>
                                <Link href="/us/contact" className="w-full flex items-center justify-center gap-2 bg-[#F26522] hover:bg-[#d95c1a] text-white font-bold py-3 px-5 rounded-xl text-sm transition-all">
                                    Contact Our Team <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}
