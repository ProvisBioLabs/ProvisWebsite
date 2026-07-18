export interface EventItem {
    id: string;
    day: string;
    month: string;
    year: string;
    category: string;
    title: string;
    description: string;
    iconName: "Globe" | "FlaskConical" | "Microscope" | "Landmark" | "Presentation" | "Users" | "Rocket";
    location: string;
    booth: string;
    type: string;
    image: string;
    status: "upcoming" | "past";
    highlight?: boolean;
    startDate: string; // ISO 8601 Date: YYYY-MM-DD
    endDate: string;   // ISO 8601 Date: YYYY-MM-DD
}

export const eventItems: EventItem[] = [
    {
        id: "bioprocess-international-2026",
        day: "22–25",
        month: "SEP",
        year: "2026",
        category: "BIOPROCESSING CONFERENCE",
        title: "BioProcess International 2026 — Boston",
        description: "Provis Biolabs will be participating in BioProcess International 2026, one of the leading global events for bioprocessing and biomanufacturing professionals. Visit our team at Booth 1500 to explore our comprehensive portfolio, including recombinant proteins, peptides, enzymes, custom synthesis services, and specialty reagents. Connect with our experts to discuss innovative solutions and partnership opportunities for advancing life science research and biopharmaceutical development.",
        iconName: "Globe",
        location: "Hynes Convention Center, Massachusetts, USA",
        booth: "1500",
        type: "Conference",
        image: "/events/biointernational.webp",
        status: "upcoming",
        startDate: "2026-09-22",
        endDate: "2026-09-25"
    },
    {
        id: "bio-international-convention-2026",
        day: "22–25",
        month: "JUN",
        year: "2026",
        category: "BIOTECHNOLOGY CONVENTION",
        title: "BIO International Convention 2026 — San Diego",
        description: "Provis Biolabs will be participating in BIO International Convention 2026, the world's premier biotechnology event. Visit our team to explore high-quality solutions for research, discovery and development, including recombinant proteins, peptides & custom synthesis, enzymes and specialty reagents. Connect with our experts to discuss partnership opportunities and innovative solutions for biotech and life science applications.",
        iconName: "Globe",
        location: "San Diego Convention Center, California, USA",
        booth: "3351-S9",
        type: "Convention",
        image: "/events/BIOInternationalConvention.png",
        status: "past",
        startDate: "2026-06-22",
        endDate: "2026-06-25"
    },
    {
        id: "cphi-japan-2026",
        day: "21–23",
        month: "APR",
        year: "2026",
        category: "PHARMA EXHIBITION",
        title: "CPHI Japan 2026 — Tokyo",
        description: "Provis Biolabs will be attending CPHI Japan 2026, Asia's premier pharmaceutical industry exhibition. Join us in Tokyo as we showcase our portfolio of high-quality bioreagents, Bio-APIs, recombinant proteins and CDMO capabilities. Meet our team to explore partnership opportunities and discover how we can accelerate your next biologics project.",
        iconName: "Globe",
        location: "Tokyo Big Sight, Tokyo, Japan",
        booth: "TBA",
        type: "Exhibition",
        image: "/events/cphijapan.png",
        status: "past",
        startDate: "2026-04-21",
        endDate: "2026-04-23"
    },
    {
        id: "biologics-workshop-2026",
        day: "27-28",
        month: "JAN",
        year: "2026",
        category: "CORPORATE EVENT",
        title: "Biologics Workshop 2026 — Mumbai",
        description: "Successfully wrapped up participation at the Biologics Workshop. Our team had engaging discussions at Booth M17, exploring opportunities in biologics development and biomanufacturing. To support our rapidly growing global ambitions, Provis Biolabs has initiated a massive scale-up of R&D operations alongside the construction of a state-of-the-art facility",
        iconName: "FlaskConical",
        location: "Mumbai, India",
        booth: "Booth M17",
        type: "Workshop",
        image: "/events/biologicsv2.jpg",
        status: "past",
        startDate: "2026-01-27",
        endDate: "2026-01-28"
    },
    {
        id: "bioasia-2026",
        day: "17-18",
        month: "FEB",
        year: "2026",
        category: "PHARMA CONFERENCE",
        title: "BioAsia 2026 — Hyderabad",
        description: "One of Asia's most prominent life sciences conferences. Our team connected with biotech innovators, pharma partners and industry leaders to explore bioprocessing and product development. The event provided a valuable platform to showcase our capabilities in recombinant proteins and CDMO services",
        iconName: "Globe",
        location: "HICC, Hyderabad",
        booth: "Stand #P27",
        type: "Conference",
        image: "/events/bioasia.jpg",
        status: "past",
        startDate: "2026-02-17",
        endDate: "2026-02-18"
    },
    {
        id: "medica-2025",
        day: "NOV",
        month: "2025",
        year: "2025",
        category: "DIAGNOSTICS SUMMIT",
        title: "MEDICA 2025 — Düsseldorf",
        description: "Returned with valuable industry insights and new connections in the IVD and diagnostics space. Showcased how our portfolio of recombinant proteins and enzymes can support reliable, scalable and high-quality diagnostic solutions for partners across the global diagnostics community",
        iconName: "Microscope",
        location: "Düsseldorf, Germany",
        booth: "Germany Pavilion",
        type: "Exhibition",
        image: "/events/medica.webp",
        status: "past",
        startDate: "2025-11-17",
        endDate: "2025-11-20"
    },
    {
        id: "cphi-frankfurt-2025",
        day: "28-30",
        month: "OCT",
        year: "2025",
        category: "GLOBAL PHARMA",
        title: "CPHI Frankfurt 2025 — Germany",
        description: "One of the world's largest pharma events. Key discussions centred around high-quality API manufacturing, custom peptide synthesis and strategic CDMO partnerships. We connected with global partners and innovators, reinforcing Provis Biolabs' growing global footprint",
        iconName: "Landmark",
        location: "Frankfurt, Germany",
        booth: "Stall G60, Hall 12.0",
        type: "Trade Show",
        image: "/events/cphi.jpg",
        status: "past",
        startDate: "2025-10-28",
        endDate: "2025-10-30"
    },
    {
        id: "peptides-symposium-2025",
        day: "25-26",
        month: "SEP",
        year: "2025",
        category: "PEPTIDE SYMPOSIUM",
        title: "Peptides & Complex Generics Symposium 2025",
        description: "Proud sponsor and participant. Engaging with researchers on custom peptide synthesis, peptide APIs, impurities and end-to-end CDMO services. The symposium brought together experts for high-value scientific exchanges",
        iconName: "FlaskConical",
        location: "The Lalit, Mumbai, India",
        booth: "Stall No. 10",
        type: "Symposium",
        image: "/events/symposium.jpg",
        status: "past",
        startDate: "2025-09-25",
        endDate: "2025-09-26"
    },
    {
        id: "bio-boston-2025",
        day: "16-19",
        month: "JUN",
        year: "2025",
        category: "BIOTECH CONVENTION",
        title: "BIO International Convention 2025 — Boston",
        description: "Representing India at the India Pavilion, our team showcased our portfolio of recombinant bioreagents designed to boost bioprocess efficiency. High engagement from global innovators in our Animal Origin-Free Trypsin and Endonuclease products",
        iconName: "Presentation",
        location: "Boston, USA",
        booth: "Booth #1065-C16",
        type: "Convention",
        image: "/events/biointernationalboston2025.jpg",
        status: "past",
        startDate: "2025-06-16",
        endDate: "2025-06-19"
    },
    {
        id: "global-biologics-2025",
        day: "16-17",
        month: "APR",
        year: "2025",
        category: "BIOLOGICS INDIA",
        title: "Global Biologics India 2025 — Hyderabad",
        description: "Focus on biologics and biomanufacturing. Engaged in meaningful conversations to strengthen business connections and explore collaboration opportunities. Expanding our presence in the biologics sector through technical excellence",
        iconName: "Users",
        location: "Hyderabad, India",
        booth: "BiotechStage",
        type: "Industry Meet",
        image: "/events/globalbiologics.jpg",
        status: "past",
        startDate: "2025-04-16",
        endDate: "2025-04-17"
    },
    {
        id: "ddd-workshop-2025",
        day: "28-31",
        month: "August",
        year: "2025",
        category: "ACADEMIC WORKSHOP",
        title: "Drug Discovery & Development (DDD) Workshop",
        description: "Our Founder presenting on bridging industry and academia. Themes included cell & gene therapies and strengthening India's global biotech leadership. Empowering the next generation of innovators with real-world biotech insights",
        iconName: "Presentation",
        location: "Univ. of Hyderabad, India",
        booth: "Speaker Session",
        type: "Workshop",
        image: "/events/ddd.jpg",
        status: "past",
        startDate: "2025-08-28",
        endDate: "2025-08-31"
    }
];
