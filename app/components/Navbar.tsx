'use client';

import React, { useState, useCallback, useEffect, useRef } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import GlobalSearch from './GlobalSearch';

interface NavChild { name: string; href: string; desc?: string; }
interface NavColumn { heading: string; headingHref?: string; items: NavChild[]; gridCols?: number; center?: boolean; }
interface NavItem { label: string; href: string; dropdown?: NavChild[]; mega?: boolean; columns?: NavColumn[]; }

export const navItems: NavItem[] = [
    {
        label: 'About',
        href: '/about',
        dropdown: [
            { name: 'Company', href: '/about#about', desc: 'Who we are & our story' },
            { name: 'Our Founder', href: '/about#founder', desc: 'Meet the leadership' },
            { name: 'Vision & Mission', href: '/about#about-purpose', desc: 'Our purpose and direction' },
        ],
    },
    {
        label: 'Products',
        href: '/products',
        mega: true,
        columns: [
            {
                heading: 'Bio-APIs',
                headingHref: '/products/bio-apis',
                items: [
                    { name: 'L-Asparaginase Bulk', href: '/l-asparaginase', desc: 'Oncology therapeutic enzyme' },
                    { name: 'Pegaspargase Bulk', href: '/pegaspargase', desc: 'PEGylated L-Asparaginase' },
                    { name: 'Streptokinase Bulk', href: '/streptokinase', desc: 'Cardiovascular thrombolytic' },
                    { name: 'Sodium Hyaluronate', href: '/sodium-hyaluronate', desc: 'Joint injection grade' },
                ],
            },
            {
                heading: 'Recombinant Bio-Reagents',
                headingHref: '/products/recombinant-bio-reagents',
                gridCols: 2,
                center: true,
                items: [
                    { name: 'Provinase®', href: '/provinase', desc: 'Flagship endonuclease' },
                    { name: 'Recombinant Human Albumin', href: '/recombinant-albumin', desc: 'Vaccine stabilizer' },
                    { name: 'Trypsin ', href: '/trypsin', desc: 'enzyme for biopharmaceuticals' },
                    { name: 'Carboxypeptidase B', href: '/carboxypeptidase-b', desc: 'Serine protease' },
                    { name: 'PNGase F', href: '/pngase-f', desc: 'Standard N-glycan release' },
                    { name: 'PNGase F Flash™', href: '/pngase-f-flash', desc: 'Ultra-fast N-glycan release' },
                    { name: 'Streptavidin', href: '/streptavidin', desc: 'Biotin-binding protein' },
                    { name: 'Enterokinase', href: '/enterokinase', desc: 'Tag cleavage enzyme' },
                    { name: 'Kex2 Protease', href: '/kex2-protease', desc: 'Recombinant fusion protein cleavage' },
                    { name: 'All Products →', href: '/products', desc: 'View complete catalog' },
                ],
            },
        ],
    },
    { label: 'Biosimilars', href: '/biosimilars' },
    { label: 'Peptides', href: '/synthetic-peptides' },
    { label: 'Science & Technology', href: '/science' },
    { label: 'CDMO', href: '/cdmo' },
    {
        label: 'News & Blogs',
        href: '/news',
        dropdown: [
            { name: 'Blogs', href: '/blogs', desc: 'Insights and articles' },
            { name: 'News', href: '/news', desc: 'Latest milestones' },
            { name: 'Events', href: '/events', desc: 'Conferences & launches' },
        ],
    },
    {
        label: 'Connect With Us',
        href: '/contact',
        dropdown: [
            { name: 'BUSINESS ENQUIRY', href: '/contact', desc: 'Get in touch for business' },
            { name: 'PARTNERS', href: '/partners', desc: 'Explore partnerships' },
            { name: 'CAREERS', href: '/careers', desc: 'Join our team' },
        ],
    },
];

const Navbar: React.FC = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
    const [scrollY, setScrollY] = useState(0);
    const menuTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
    const pathname = usePathname();

    const isLinkActive = (href: string) => {
        if (!href) return false;
        const linkPath = href.split('#')[0];
        if (linkPath === '/') return pathname === '/';
        return pathname === linkPath || pathname.startsWith(linkPath + '/');
    };

    const isItemActive = (item: NavItem) => {
        if (isLinkActive(item.href)) return true;
        if (item.dropdown) {
            return item.dropdown.some(child => isLinkActive(child.href));
        }
        if (item.mega && item.columns) {
            return item.columns.some(col =>
                col.items.some(child => isLinkActive(child.href))
            );
        }
        return false;
    };

    useEffect(() => {
        const onScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrolled = scrollY > 20;

    const handleMouseEnter = useCallback((label: string) => {
        if (menuTimeout.current) clearTimeout(menuTimeout.current);
        setActiveMenu(label);
    }, []);

    const handleMouseLeave = useCallback(() => {
        menuTimeout.current = setTimeout(() => setActiveMenu(null), 100);
    }, []);

    return (
        <>
            <header className={`nav-header ${scrolled ? 'nav-scrolled bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'}`} suppressHydrationWarning>
                <div className="nav-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" suppressHydrationWarning>
                    {/* Logo */}
                    <a href="/" className="nav-logo flex-shrink-0">
                        <Image
                            src="/logo.webp"
                            alt="Provis Biolabs"
                            width={160} height={44} priority
                        // className={`transition-all duration-300 ${scrolled ? 'h-9 w-auto' : 'h-11 w-auto'}`}
                        />
                    </a>

                    {/* Desktop Nav */}
                    <nav className="nav-links hidden lg:flex items-center gap-5 ml-auto">
                        {navItems.map(item => (
                            <div
                                key={item.label}
                                className="nav-item group flex items-center h-full"
                                onMouseEnter={() => handleMouseEnter(item.label)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <a
                                    href={item.href}
                                    className={`nav-link text-[15px] font-sans font-normal tracking-wide flex items-center gap-1.5 transition-colors duration-200 py-6 ${activeMenu === item.label || isItemActive(item) ? 'text-[#F26522]' : 'text-[#475569]'
                                        } hover:text-[#F26522]`}
                                >
                                    {item.label}
                                    {(item.dropdown || item.mega) && (
                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                                            className={`transition-transform duration-200 ${activeMenu === item.label || isItemActive(item) ? 'text-[#F26522] rotate-180' : ''}`}>
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                    )}
                                </a>

                                {/* Standard Dropdown — Full Width */}
                                {item.dropdown && !item.mega && (
                                    <div
                                        className={`absolute top-full left-0 right-0 w-full pt-4 transition-all duration-300 ${activeMenu === item.label ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                                            }`}
                                    >
                                        <div className="bg-white shadow-[0_25px_50px_-12px_rgba(0,0,0,0.1)] border-t border-[#f1f5f9] relative overflow-hidden">
                                            {/* Top accent line */}
                                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F26522] to-[#FF8C55]" />

                                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex gap-12">
                                                <div className="flex gap-8">
                                                    {item.dropdown.map((child, idx) => (
                                                        <a
                                                            key={idx}
                                                            href={child.href}
                                                            className="flex flex-col p-4 rounded-xl hover:bg-[#fff7f2] transition-colors group/link min-w-[200px]"
                                                            onClick={() => setActiveMenu(null)}
                                                        >
                                                            <span className={`text-[15px] font-sans font-bold transition-colors ${isLinkActive(child.href) ? 'text-[#F26522]' : 'text-[#1E3A8A] group-hover/link:text-[#F26522]'}`}>
                                                                {child.name}
                                                            </span>
                                                            {child.desc && (
                                                                <span className="text-[13px] font-sans text-[#64748b] mt-1">
                                                                    {child.desc}
                                                                </span>
                                                            )}
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Mega Menu */}
                                {item.mega && item.columns && (
                                    <div
                                        className={`absolute top-full left-0 right-0 w-full pt-4 transition-all duration-300 ${activeMenu === item.label ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                                            }`}
                                    >
                                        <div className="bg-white shadow-[0_25px_50px_-12px_rgba(0,0,0,0.1)] border-t border-[#f1f5f9] relative overflow-hidden">
                                            {/* Top accent line */}
                                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F26522] to-[#FF8C55]" />

                                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex gap-12 justify-between">
                                                <div className="flex gap-16 flex-1">
                                                    {item.columns.map((col, idx) => (
                                                        <div key={idx} className={`flex flex-col ${col.gridCols ? 'flex-[2]' : 'min-w-[220px]'}`}>
                                                            <h4 className={`text-[11px] font-bold tracking-widest font-sans text-[#94a3b8] uppercase mb-4 pb-2 border-b border-[#f1f5f9] ${col.center ? 'text-center' : ''}`}>
                                                                {col.headingHref ? (
                                                                    <a href={col.headingHref} className="hover:text-[#F26522] transition-colors" onClick={() => setActiveMenu(null)}>
                                                                        {col.heading} →
                                                                    </a>
                                                                ) : col.heading}
                                                            </h4>
                                                            <div className={col.gridCols ? `grid grid-cols-${col.gridCols} gap-x-8 gap-y-2` : 'flex flex-col gap-2'}>
                                                                {col.items.map((child, cIdx) => (
                                                                    <a
                                                                        key={cIdx}
                                                                        href={child.href}
                                                                        className={`group/link flex flex-col p-2 -mx-2 rounded-lg hover:bg-[#fff7f2] transition-all ${col.center ? 'items-center text-center' : ''}`}
                                                                        onClick={() => setActiveMenu(null)}
                                                                    >
                                                                        <span className={`text-[14px] font-sans font-bold transition-colors flex items-center gap-2 ${isLinkActive(child.href) ? 'text-[#F26522]' : 'text-[#1E3A8A] group-hover/link:text-[#F26522]'}`}>
                                                                            {child.name}
                                                                            {child.name.includes('→') ? '' : <span className={`w-1.5 h-1.5 rounded-full transition-colors flex-shrink-0 ${isLinkActive(child.href) ? 'bg-[#F26522] opacity-100' : 'bg-[#cbd5e1] group-hover/link:bg-[#F26522] opacity-0 group-hover/link:opacity-100'}`} />}
                                                                        </span>
                                                                        {child.desc && (
                                                                            <span className="text-[12px] font-sans text-[#64748b] mt-0.5 group-hover/link:text-[#F26522]/70 transition-colors">
                                                                                {child.desc}
                                                                            </span>
                                                                        )}
                                                                    </a>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>

                                                {/* Right side Featured Panel for Mega Menu */}
                                                <div className="w-[320px] bg-[#f8fafc] rounded-2xl p-8 border border-[#f1f5f9] flex flex-col justify-center relative overflow-hidden group/promo cursor-pointer hover:border-[#F26522]/30 transition-colors">
                                                    <div className="absolute top-0 right-0 w-40 h-40 bg-[#F26522] opacity-5 blur-3xl rounded-full group-hover/promo:opacity-10 transition-opacity" />
                                                    <div className="text-[#F26522] text-[11px] font-bold tracking-widest font-sans uppercase mb-3">Capabilities</div>
                                                    <div className="text-[#1E3A8A] font-outfit font-bold text-2xl mb-4 leading-tight">Scale seamlessly from R&D to GMP</div>
                                                    <div className="text-[#475569] font-sans text-[14px] leading-relaxed mb-6">Explore our state-of-the-art multi-kL manufacturing facility and CDMO services</div>
                                                    <a href="/cdmo" className="text-[#F26522] font-sans text-[14px] font-bold flex items-center gap-2 group-hover/promo:gap-3 transition-all">
                                                        Explore Facilities <span>→</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* Global Search */}
                        <GlobalSearch />
                    </nav>

                    {/* Mobile Hamburger */}
                    <button
                        className="lg:hidden text-[#1E3A8A] p-2 hover:bg-[#f1f5f9] rounded-lg transition-colors ml-auto"
                        onClick={() => setMobileOpen(o => !o)}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    </button>
                </div>
            </header>

            {/* Mobile Drawer Overlay */}
            <div className={`fixed inset-0 bg-[#1E3A8A]/20 backdrop-blur-sm z-[1400] transition-opacity duration-300 ${mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={() => setMobileOpen(false)} />

            {/* Mobile Drawer */}
            <div className={`fixed top-0 right-0 bottom-0 w-[320px] bg-white z-[1500] shadow-2xl transition-transform duration-400 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-y-auto ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`} suppressHydrationWarning>
                <div className="flex items-center justify-between p-6 border-b border-[#f1f5f9]">
                    <Image src="/logo.webp" alt="Provis Biolabs" width={120} height={32} style={{ objectFit: 'contain' }} />
                    <button onClick={() => setMobileOpen(false)} className="p-2 text-[#64748b] hover:bg-[#f1f5f9] rounded-lg transition-colors">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>

                <div className="p-4 border-b border-[#f1f5f9]">
                    <GlobalSearch />
                </div>

                <nav className="p-4 flex flex-col gap-1">
                    {navItems.map(item => (
                        <div key={item.label} className="flex flex-col">
                            {(item.dropdown || item.mega) ? (
                                <>
                                    <button
                                        className={`flex items-center justify-between p-4 rounded-xl text-[15px] font-sans font-bold transition-colors ${isItemActive(item) ? 'text-[#F26522] bg-[#fff7f2]' : 'text-[#1e293b] hover:bg-[#f8fafc]'}`}
                                        onClick={() => setMobileExpanded(p => p === item.label ? null : item.label)}
                                    >
                                        {item.label}
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                                            className={`transition-transform duration-300 text-[#94a3b8] ${mobileExpanded === item.label ? 'rotate-180 text-[#F26522]' : ''}`}>
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                    </button>

                                    <div className={`overflow-hidden transition-all duration-300 ${mobileExpanded === item.label ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                        <div className="bg-[#f8fafc] rounded-xl p-4 mt-2 mb-2 flex flex-col gap-6 border border-[#f1f5f9]">
                                            {item.dropdown && item.dropdown.map((child, i) => (
                                                <a key={i} href={child.href} className="flex flex-col gap-0.5 px-4 py-2 hover:bg-white rounded-lg transition-colors" onClick={() => setMobileOpen(false)}>
                                                    <span className="text-[14px] font-sans font-bold text-[#1E3A8A]">{child.name}</span>
                                                    {child.desc && <span className="text-[12px] font-sans text-[#64748b]">{child.desc}</span>}
                                                </a>
                                            ))}

                                            {item.mega && item.columns && item.columns.map((col, i) => (
                                                <div key={i} className="flex flex-col gap-2">
                                                    <div className="text-[11px] font-bold font-sans tracking-widest uppercase text-[#94a3b8] ml-4 pb-1 border-b border-[#e2e8f0]">{col.heading}</div>
                                                    {col.items.map((child, cIdx) => (
                                                        <a key={cIdx} href={child.href} className="flex flex-col gap-0.5 px-4 py-2 hover:bg-white rounded-lg transition-colors" onClick={() => setMobileOpen(false)}>
                                                            <span className="text-[13px] font-sans font-bold text-[#475569]">{child.name}</span>
                                                            {child.desc && <span className="text-[11px] font-sans text-[#94a3b8]">{child.desc}</span>}
                                                        </a>
                                                    ))}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <a href={item.href} className={`p-4 rounded-xl text-[15px] font-sans font-bold transition-colors ${isItemActive(item) ? 'text-[#F26522] bg-[#fff7f2]' : 'text-[#1e293b] hover:bg-[#f8fafc]'}`} onClick={() => setMobileOpen(false)}>
                                    {item.label}
                                </a>
                            )}
                        </div>
                    ))}
                </nav>
            </div>

            <style>{`
                .nav-header {
                    position: fixed;
                    top: 0; left: 0; right: 0;
                    z-index: 1000;
                    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .nav-container {
                    display: flex;
                    align-items: center;
                    height: 80px;
                }
            `}</style>
        </>
    );
};

export default Navbar;
