import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Sitemap | Provis Biolabs',
    description: 'Explore the full structure and directory of the Provis Biolabs website.',
};

export default function SitemapPage() {
    return (
        <div className="min-h-screen bg-white pt-32 pb-24 font-outfit">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12 border-b border-[#E2E8F0] pb-8">
                    <h1 className="text-4xl sm:text-5xl font-black text-[#1E3A8A] mb-4">Sitemap</h1>
                    <p className="text-[#64748B] text-lg">Navigate through the Provis Biolabs digital presence</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
                    {/* Main Navigation */}
                    <div>
                        <h2 className="text-xl font-bold text-[#F26522] mb-6 uppercase tracking-widest text-xs">Main Navigation</h2>
                        <ul className="space-y-4">
                            <li><Link href="/" className="text-[#1E3A8A] font-bold hover:text-[#F26522] transition-colors">Home</Link></li>
                            <li><Link href="/about" className="text-[#1E3A8A] font-bold hover:text-[#F26522] transition-colors">About Us</Link></li>
                            <li><Link href="/science" className="text-[#1E3A8A] font-bold hover:text-[#F26522] transition-colors">Science & Technology</Link></li>
                            <li><Link href="/products" className="text-[#1E3A8A] font-bold hover:text-[#F26522] transition-colors">Products</Link></li>
                            <li><Link href="/cdmo" className="text-[#1E3A8A] font-bold hover:text-[#F26522] transition-colors">CDMO Services</Link></li>
                            <li><Link href="/contact" className="text-[#1E3A8A] font-bold hover:text-[#F26522] transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Products Directory */}
                    <div>
                        <h2 className="text-xl font-bold text-[#F26522] mb-6 uppercase tracking-widest text-xs">Products Directory</h2>
                        <ul className="space-y-4">
                            <li><Link href="/products/bio-apis" className="text-[#1E3A8A] font-medium hover:text-[#F26522] transition-colors">Bio-APIs</Link></li>
                            <li><Link href="/products/recombinant-bio-reagents" className="text-[#1E3A8A] font-medium hover:text-[#F26522] transition-colors">Recombinant Bio-Reagents</Link></li>
                            <li><Link href="/synthetic-peptides" className="text-[#1E3A8A] font-medium hover:text-[#F26522] transition-colors">Synthetic Peptides</Link></li>
                            <li><Link href="/biosimilars" className="text-[#1E3A8A] font-medium hover:text-[#F26522] transition-colors">Biosimilars</Link></li>
                            <li><Link href="/provinase" className="text-gray-500 text-sm hover:text-[#F26522] transition-colors block pl-4 border-l border-gray-100">Provinase®</Link></li>
                            <li><Link href="/l-asparaginase" className="text-gray-500 text-sm hover:text-[#F26522] transition-colors block pl-4 border-l border-gray-100">L-Asparaginase</Link></li>
                        </ul>
                    </div>

                    {/* Company & Insights */}
                    <div>
                        <h2 className="text-xl font-bold text-[#F26522] mb-6 uppercase tracking-widest text-xs">News & Insights</h2>
                        <ul className="space-y-4">
                            <li><Link href="/blogs" className="text-[#1E3A8A] font-medium hover:text-[#F26522] transition-colors">Blogs</Link></li>
                            <li><Link href="/news" className="text-[#1E3A8A] font-medium hover:text-[#F26522] transition-colors">Company News</Link></li>
                            <li><Link href="/events" className="text-[#1E3A8A] font-medium hover:text-[#F26522] transition-colors">Upcoming Events</Link></li>
                            <li className="pt-4 border-t border-gray-100 mt-4">
                                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Corporate</h3>
                            </li>
                            <li><Link href="/partners" className="text-[#1E3A8A] font-medium hover:text-[#F26522] transition-colors">Partners</Link></li>
                            <li><Link href="/careers" className="text-[#1E3A8A] font-medium hover:text-[#F26522] transition-colors">Careers</Link></li>
                        </ul>
                    </div>

                    {/* Support & Legal */}
                    <div>
                        <h2 className="text-xl font-bold text-[#F26522] mb-6 uppercase tracking-widest text-xs">Legal & Support</h2>
                        <ul className="space-y-4">
                            <li><Link href="/privacy-policy" className="text-[#1E3A8A] font-medium hover:text-[#F26522] transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/cookie-policy" className="text-[#1E3A8A] font-medium hover:text-[#F26522] transition-colors">Cookie Policy</Link></li>
                            <li><Link href="/terms" className="text-[#1E3A8A] font-medium hover:text-[#F26522] transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
