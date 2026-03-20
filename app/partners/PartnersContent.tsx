"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Globe, Map } from "lucide-react";
import Image from "next/image";

// Pre-defined partner data matching the user's specific hierarchical list
const partnersData = [
    {
        region: "Asia",
        country: "Singapore",
        company: "i-DNA Biotechnology Pte Ltd",
        logo: "/partners/Dna.webp",
        address: "237 Pandan Loop, #07-08 Westech Building, Singapore 128424",
        phone: "+(65) 9622 1086",
        emails: ["thuan@i-dna.sg"],
        website: "www.i-dna.sg"
    },
    {
        region: "Asia",
        country: "Republic of Korea (South Korea)",
        company: "Dongilbio",
        logo: "/partners/Dongilbiotech.webp",
        address: "HANMAUM B/D 5th, Baumoe-ro 225, Seocho-gu, Seoul, Republic of Korea (06740)",
        phone: "+82-2-571-3790",
        emails: ["js.mok@dongilbio.co.kr", "info@dongilbio.co.kr"],
        website: "www.dongilbio.co.kr"
    },
    {
        region: "North America",
        country: "USA",
        company: "Amerigo Scientific",
        logo: "/partners/amerigo.webp",
        address: "500-G Wheeler Rd, Hauppauge, NY 11788, USA",
        phone: "+1-631-629-1460 / +1-516-755-7097",
        emails: ["info@amerigoscientific.com"],
        website: "www.amerigoscientific.com"
    },
    {
        region: "North America",
        country: "USA",
        company: "Labscoop LLC",
        logo: "/partners/labscoop.webp",
        address: "417 Main St, Little Rock, AR 72201, USA",
        phone: "+1-800-316-3081",
        emails: ["support@labscoop.com"],
        website: "www.labscoop.com"
    },
    {
        region: "North America",
        country: "USA",
        company: "Zageno",
        logo: "/partners/zageno.webp",
        address: "Cambridge, 625 Massachusetts Ave 2nd Floor, USA",
        phone: "+1-857-477-8479",
        emails: ["Sales@zageno.com"],
        website: "go.zageno.com"
    },
    {
        region: "North America",
        country: "Canada",
        company: "Cedarlane",
        logo: "/partners/cedarlane.webp",
        address: "4410 Paletta Court Burlington, Ontario L7L 5R2, Canada.",
        phone: "+1-289-288-0001 / Toll Free (N.A.): 1-800-268-5058",
        emails: ["general@cedarlanelabs.com"],
        website: "www.cedarlanelabs.com"
    },
    {
        region: "North America",
        country: "Canada",
        company: "BioScotia Technologies Inc.",
        logo: "/partners/bioscotia.webp",
        address: "5991, Spring Garden Road, Suite #740 Halifax, Nova Scotia, B3H 1Y6 Canada.",
        phone: "+1-902-702-0795",
        emails: ["contact@bioscotia.com"],
        website: "www.bioscotia.com"
    },
    {
        region: "Europe",
        country: "The Netherlands",
        company: "Bio-Connect",
        logo: "/partners/bioconnect.webp",
        address: "Begonialaan 3a 6851, TE in Huissen, The Netherlands",
        phone: "+31 26 326 4450",
        emails: ["info@bio-connect.nl"],
        website: "www.bio-connect.nl"
    },
    {
        region: "Europe",
        country: "France",
        company: "CliniSciences",
        logo: "/partners/clinisciences_new.png",
        address: "74, rue des Suisses 92000 Nanterre - France",
        phone: "+33 9 77 40 09 09 / +33 9 77 40 10 11",
        emails: ["info@clinisciences.com"],
        website: "www.clinisciences.com"
    },
    {
        region: "Asia",
        country: "India",
        company: "BioMall",
        logo: "/partners/biomall.png",
        address: "Chargen Life Sciences LLP, 1010, Hubtown Solaris, NS Phadke Marg Andheri (E), Mumbai - 400069",
        phone: "+91-7977202692",
        emails: ["sales@biomall.in", "support@biomall.in"],
        website: "www.biomall.in"
    },
    {
        region: "North America",
        country: "USA",
        company: "Avantor ScienceCentral™",
        logo: "/partners/avantor.png",
        address: "VWR Corporate Headquarters Radnor Corporate Center, Building One, Suite 200 100 Matsonford Road, Radnor, PA 19087-8660",
        phone: "1-800-932-5000",
        emails: ["CS.Specialist@avantorinc.com"],
        website: "www.avantorsciences.com/us/en/search/PROVIS%20BIOLABS%20PRIVATE%20LIMITED%20MS"
    }
];

export default function PartnersContent() {
    const [selectedCountry, setSelectedCountry] = useState<string>("All Countries");

    // Extract unique sorted countries
    const uniqueCountries = useMemo(() => {
        const countries = Array.from(new Set(partnersData.map(p => p.country)));
        return ["All Countries", ...countries.sort()];
    }, []);

    // Filter partners based on country selection
    const filteredPartners = useMemo(() => {
        if (selectedCountry === "All Countries") return partnersData;
        return partnersData.filter(p => p.country === selectedCountry);
    }, [selectedCountry]);

    // Group filtered results by Region
    const groupedPartners = useMemo(() => {
        return filteredPartners.reduce((acc, partner) => {
            if (!acc[partner.region]) {
                acc[partner.region] = [];
            }
            acc[partner.region].push(partner);
            return acc;
        }, {} as Record<string, typeof partnersData>);
    }, [filteredPartners]);

    return (
        <section className="bg-[#FAFAFA] min-h-screen pb-24 font-outfit">
            {/* Hero Header */}
            <div className="bg-[#1E3A8A] pt-24 pb-32 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md mb-8 border border-white/20 shadow-xl"
                    >
                        <Map className="w-8 h-8 text-[#F26522]" />
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight"
                    >
                        Global <span className="text-[#F26522]">Partners</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-blue-100/90 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed font-light"
                    >
                        At Provis Biolabs, we value strong collaborations and trusted partnerships. To better serve our customers globally, we work closely with our authorized partners who provide local support, reliable delivery and expert advice.
                    </motion.p>
                </div>

                {/* Decorative Bottom Arch */}
                <div className="absolute -bottom-px left-0 right-0 h-16 bg-[#FAFAFA]" style={{ borderTopLeftRadius: "50% 100%", borderTopRightRadius: "50% 100%" }} />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
                {/* Search / Filter Card */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-[#E2E8F0] mb-16 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div className="flex-1 text-center sm:text-left">
                        <h2 className="text-[#1E3A8A] font-bold text-xl mb-1">Find a Local Partner</h2>
                        <p className="text-[#64748B] text-sm">Select your country to find an authorized distributor.</p>
                    </div>

                    <div className="w-full sm:w-auto min-w-[280px]">
                        <div className="relative">
                            <select
                                value={selectedCountry}
                                onChange={(e) => setSelectedCountry(e.target.value)}
                                className="w-full appearance-none bg-[#F8FAFC] border border-[#E2E8F0] text-[#1E3A8A] font-bold py-4 pl-6 pr-12 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F26522]/50 focus:border-[#F26522] transition-all cursor-pointer shadow-inner"
                            >
                                {uniqueCountries.map(country => (
                                    <option key={country} value={country}>{country}</option>
                                ))}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-6 text-[#1E3A8A]">
                                <Globe className="w-5 h-5 opacity-50" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Partner Grid Rendered By Region */}
                <AnimatePresence mode="popLayout">
                    {Object.entries(groupedPartners).map(([region, regionPartners], idx) => (
                        <motion.div
                            key={region}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            className="mb-16"
                        >
                            <h3 className="text-3xl font-black text-[#1E3A8A] mb-8 flex items-center gap-4">
                                {region}
                                <div className="h-px bg-gray-200 flex-grow mt-2" />
                            </h3>

                            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
                                {regionPartners.map((partner, partnerIdx) => (
                                    <div
                                        key={partner.company}
                                        className="bg-white rounded-3xl border border-[#E2E8F0] p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group relative overflow-hidden"
                                    >
                                        <div className="absolute top-0 right-0 bg-[#F26522] text-white text-xs font-bold px-4 py-1 rounded-bl-xl shadow-sm z-10">
                                            {partner.country}
                                        </div>

                                        {/* Logo Section */}
                                        <div className="h-32 mb-8 bg-white rounded-2xl relative overflow-hidden group/logo border border-[#E2E8F0] transition-colors">
                                            <Image
                                                src={partner.logo}
                                                alt={`${partner.company} Logo`}
                                                fill
                                                sizes="(max-width: 768px) 90vw, (max-width: 1280px) 45vw, 30vw"
                                                className="object-contain opacity-100 transition-opacity"
                                            />
                                        </div>

                                        {/* Company Info */}
                                        <div className="flex-grow flex flex-col gap-4">
                                            <div className="flex items-start gap-3">
                                                <MapPin className="w-5 h-5 text-[#F26522] shrink-0 mt-0.5" />
                                                <p className="text-sm text-[#475569] font-sans leading-relaxed">
                                                    {partner.address}
                                                </p>
                                            </div>

                                            {partner.phone && (
                                                <div className="flex items-start gap-3">
                                                    <Phone className="w-5 h-5 text-[#F26522] shrink-0 mt-0.5" />
                                                    <a href={`tel:${partner.phone.split(' / ')[0]}`} className="text-sm text-[#1E3A8A] font-bold hover:text-[#F26522] transition-colors">
                                                        {partner.phone}
                                                    </a>
                                                </div>
                                            )}

                                            {partner.emails.length > 0 && partner.emails[0] !== "" && (
                                                <div className="flex items-start gap-3">
                                                    <Mail className="w-5 h-5 text-[#F26522] shrink-0 mt-0.5" />
                                                    <div className="flex flex-col gap-1">
                                                        {partner.emails.map(email => (
                                                            <a key={email} href={`mailto:${email}`} className="text-sm text-[#1E3A8A] font-bold hover:text-[#F26522] transition-colors">
                                                                {email}
                                                            </a>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        {/* Website CTA */}
                                        <div className="mt-8 pt-6 border-t border-[#E2E8F0]/50">
                                            <a
                                                href={`https://${partner.website}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="block w-full text-center py-3 rounded-xl bg-[#F8FAFC] text-[#1E3A8A] font-bold text-sm border border-[#E2E8F0] hover:bg-[#1E3A8A] hover:text-white transition-colors"
                                            >
                                                Visit Website
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>

                {/* Not Listed CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-16 bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] rounded-3xl p-8 sm:p-12 text-center shadow-xl relative overflow-hidden"
                >
                    <div className="absolute inset-0 opacity-10 mix-blend-overlay" />
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 relative z-10">Don't see your country listed?</h3>
                    <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg relative z-10">
                        We are continually expanding our global reach. If your country is not listed, or you are interested in becoming an authorized partner, please get in touch.
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-[#F26522] text-white font-bold py-4 px-10 rounded-xl hover:bg-white hover:text-[#F26522] transition-all duration-300 shadow-lg relative z-10"
                    >
                        Contact Us
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
