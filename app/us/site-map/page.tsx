import { Metadata } from 'next';
import Link from 'next/link';
import USNavbar from '../components/Navbar';
import Footer from '../components/Footer';
import { products } from '@/lib/data/products';
import blogsData from '../blogs/blogsData.json';

export const metadata: Metadata = {
    title: 'Sitemap USA | Provis Biolabs',
    description: 'Explore the full structure and directory of the Provis Biolabs USA website.',
    alternates: {
        canonical: 'https://www.provisbiolabs.com/us/site-map'
    }
};

export default function SitemapPage() {
    const apis = products.filter(p => p.category === 'api');
    const reagents = products.filter(p => p.category === 'reagent');
    const cdmoServices = products.filter(p => p.category === 'cdmo');

    return (
        <>
            <USNavbar />
            <div className="min-h-screen bg-white pt-32 pb-24 font-outfit">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12 border-b border-[#E2E8F0] pb-8">
                    <h1 className="text-4xl sm:text-5xl font-black text-[#1E3A8A] mb-4">Sitemap</h1>
                    <p className="text-[#64748B] text-lg">Navigate through the Provis Biolabs digital presence</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
                    {/* Main Navigation */}
                    <div>
                        <h2 className="text-[#F26522] mb-6 uppercase tracking-widest text-xs font-bold">Main Navigation</h2>
                        <ul className="space-y-4">
                            <li><Link href="/us/" className="text-[#1E3A8A] font-bold hover:text-[#F26522] transition-colors">Home</Link></li>
                            <li><Link href="/us/about" className="text-[#1E3A8A] font-bold hover:text-[#F26522] transition-colors">About Us</Link></li>
                            <li><Link href="/us/products" className="text-[#1E3A8A] font-bold hover:text-[#F26522] transition-colors">Products</Link></li>
                            <li>
                                <Link href="/us/cdmo" className="text-[#1E3A8A] font-bold hover:text-[#F26522] transition-colors">CDMO Services</Link>
                                <ul className="pl-4 mt-2 space-y-2 border-l border-gray-100">
                                    {cdmoServices.map(p => (
                                        <li key={p.slug}>
                                            <Link href={`/us/${p.slug}`} className="text-gray-500 text-sm hover:text-[#F26522] transition-colors block">
                                                {p.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            <li><Link href="/us/contact" className="text-[#1E3A8A] font-bold hover:text-[#F26522] transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Products Directory */}
                    <div>
                        <h2 className="text-[#F26522] mb-6 uppercase tracking-widest text-xs font-bold">Products Directory</h2>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/us/products/bio-apis" className="text-[#1E3A8A] font-bold hover:text-[#F26522] transition-colors">Bio-APIs</Link>
                                <ul className="pl-4 mt-2 space-y-2 border-l border-gray-100">
                                    {apis.map(p => (
                                        <li key={p.slug}>
                                            <Link href={`/us/${p.slug}`} className="text-gray-500 text-sm hover:text-[#F26522] transition-colors block">
                                                {p.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            <li className="pt-2">
                                <Link href="/us/products/recombinant-bio-reagents" className="text-[#1E3A8A] font-bold hover:text-[#F26522] transition-colors">Recombinant Bio-Reagents</Link>
                                <ul className="pl-4 mt-2 space-y-2 border-l border-gray-100">
                                    {reagents.map(p => (
                                        <li key={p.slug}>
                                            <Link href={`/us/${p.slug}`} className="text-gray-500 text-sm hover:text-[#F26522] transition-colors block">
                                                {p.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            <li className="pt-2">
                                <Link href="/us/custom-peptide-synthesis" className="text-[#1E3A8A] font-medium hover:text-[#F26522] transition-colors">Custom Peptide Synthesis</Link>
                            </li>
                            <li>
                                <Link href="/us/biosimilars" className="text-[#1E3A8A] font-medium hover:text-[#F26522] transition-colors">Biosimilars</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company & Insights */}
                    <div>
                        <h2 className="text-[#F26522] mb-6 uppercase tracking-widest text-xs font-bold">News & Insights</h2>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/us/blogs" className="text-[#1E3A8A] font-bold hover:text-[#F26522] transition-colors">Blogs</Link>
                                <ul className="pl-4 mt-2 space-y-2 border-l border-gray-100 max-h-80 overflow-y-auto pr-1">
                                    {blogsData.map(b => (
                                        <li key={b.slug}>
                                            <Link href={`/us/blogs/${b.slug}`} className="text-gray-500 text-sm hover:text-[#F26522] transition-colors block truncate" title={b.title}>
                                                {b.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            <li className="pt-2"><Link href="/us/news" className="text-[#1E3A8A] font-medium hover:text-[#F26522] transition-colors">Company News</Link></li>
                            <li><Link href="/us/events" className="text-[#1E3A8A] font-medium hover:text-[#F26522] transition-colors">Upcoming Events</Link></li>
                            <li className="pt-4 border-t border-gray-100 mt-4">
                                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Corporate</h3>
                            </li>
                            <li><Link href="/us/partners" className="text-[#1E3A8A] font-medium hover:text-[#F26522] transition-colors">Partners</Link></li>
                            <li><Link href="/us/careers" className="text-[#1E3A8A] font-medium hover:text-[#F26522] transition-colors">Careers</Link></li>
                        </ul>
                    </div>

                    {/* Support & Legal */}
                    <div>
                        <h2 className="text-[#F26522] mb-6 uppercase tracking-widest text-xs font-bold">Legal & Support</h2>
                        <ul className="space-y-4">
                            <li><Link href="/us/privacy-policy" className="text-[#1E3A8A] font-medium hover:text-[#F26522] transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/us/cookie-policy" className="text-[#1E3A8A] font-medium hover:text-[#F26522] transition-colors">Cookie Policy</Link></li>
                            <li><Link href="/us/terms" className="text-[#1E3A8A] font-medium hover:text-[#F26522] transition-colors">Terms of Service</Link></li>
                            <li><Link href="/site-map" className="text-[#1E3A8A] font-medium hover:text-[#F26522] transition-colors">Sitemap</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
            <Footer />
        </>
    );
}
