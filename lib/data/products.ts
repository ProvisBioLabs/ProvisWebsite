export interface ProductGrade {
    name: string;
    sku: string;
    description: string;
}

export interface QuickSpec {
    purity?: string;
    activity?: string;
    endotoxin?: string;
    storage?: string;
    formulation?: string;
    molecularWeight?: string;
    casNumber?: string;
}

export interface Product {
    id: string;
    slug: string;
    name: string;
    category: 'api' | 'reagent' | 'cdmo';
    grade: string;
    tagline: string;
    shortDescription: string;
    description: string;
    longDescription?: string;
    image: string;
    aof?: boolean;
    badge?: string;
    casNumber?: string;
    dmfAvailable?: boolean;
    keyFeatures?: string[];
    applications: string[];
    href: string;
    seoTitle?: string;
    seoDescription?: string;
    // New scientific fields
    quickSpecs?: QuickSpec;
    workflow?: string[];
    grades?: ProductGrade[];
    documentation?: { label: string; url: string }[];
    technicalImages?: { url: string; caption: string }[];
    cleavageImages?: string[];
}


export const products: Product[] = [
    {
        id: '1',
        slug: 'l-asparaginase',
        name: 'L-Asparaginase Bulk',
        category: 'api',
        grade: 'GMP Grade',
        tagline: 'High-Purity Oncology Enzyme | WHO-GMP Manufactured | DMF Available',
        shortDescription: 'High-Purity Oncology Enzyme | WHO-GMP Manufactured | DMF Available',
        description: 'L-Asparaginase is an enzyme-based bulk API with a well-established role in the treatment of Acute Lymphoblastic Leukemia (ALL). It works by depleting asparagine  an amino acid that leukemic cells cannot produce on their own  making it a targeted and effective component of oncology treatment protocols.',
        longDescription: 'Manufactured under WHO-GMP conditions and compliant with ICH quality guidelines, this bulk API is produced through a validated fermentation and purification process. Each batch is rigorously tested to ensure consistent potency, ultra-low endotoxin levels and full documentation readiness for global regulatory submissions.',
        image: '/bioapi/L-Asparaginase Bulk.webp',
        casNumber: '9015-68-3',
        keyFeatures: ['WHO-GMP Certified Manufacturing', 'ICH-Compliant Quality System', 'Scalable Supply Capacity', 'Complete Documentation Package'],
        applications: ['Oncology Therapeutics', 'Formulation Development', 'Clinical Research & Bioanalytical Studies'],
        href: '/l-asparaginase',
        seoTitle: 'L-Asparaginase Bulk API (CAS 9015-68-3) | WHO-GMP Certified Manufacturer',
        seoDescription: 'Source high-purity L-Asparaginase Bulk API (CAS 9015-68-3) manufactured under WHO-GMP and ICH guidelines for oncology therapeutics. Contact a certified manufacturer today.',
        quickSpecs: {
            purity: '≥99%',
            molecularWeight: '~141 kDa',
            casNumber: '9015-68-3',
            storage: '2-8°C',
            formulation: 'Liquid/Frozen'
        },
        workflow: ['Cell Culture Harvest', 'Primary Recovery', 'Chromatography', 'Formulation', 'Sterile Fill'],
        documentation: [
            { label: 'Technical Data Sheet', url: '#' },
            { label: 'SDS (Safety Data Sheet)', url: '#' }
        ],
        dmfAvailable: true
    },
    {
        id: '2',
        slug: 'provinase',
        name: 'Provinase®',
        category: 'reagent',
        grade: 'Bioprocessing Grade',
        tagline: 'Trusted by Leading Vaccine & CGT Companies in India',
        shortDescription: 'Flagship GMP-grade endonuclease for host cell DNA removal',
        description: 'Provinase® is our Flagship Product, highly active recombinant endonuclease designed to digest all forms of DNA and RNA, reducing viscosity and improving downstream host cell DNA removal efficiency',
        longDescription: 'Provinase® is a robust, animal-origin-free endonuclease designed specifically to address challenges in modern bioprocessing. It efficiently digests single-stranded, double-stranded, linear and circular DNA and RNA, significantly reducing sample viscosity. It performs reliably across a wide range of operational pH and temperature parameters, delivering optimal removal of host-cell nucleic acid impurities in complex bioproduction workflows.',
        image: '/products/provinase.webp',
        aof: true,
        badge: 'Bestseller',
        casNumber: '9025-65-4',
        keyFeatures: ['Animal-Origin Free', 'High Specific Activity', 'Low Endotoxin', 'Validated for Viral Vector Manufacturing'],
        applications: ['Viral Vector Purification', 'Recombinant Protein Production', 'Vaccine Manufacturing', 'Downstream Processing'],
        href: '/provinase',
        seoTitle: 'Provinase® — GMP Grade Recombinant Endonuclease | Host Cell DNA Removal Enzyme',
        seoDescription: 'Provinase® is a GMP-grade, animal-origin-free recombinant endonuclease for host cell DNA removal in viral vector and vaccine bioprocessing. CAS 9025-65-4. Request quote.',
        quickSpecs: {
            purity: '≥99%',
            activity: '≥250 U/µL',
            casNumber: '9025-65-4',
            storage: '-20°C',
            formulation: '50% Glycerol'
        },
        workflow: ['Clarification', 'Benzonase/Provinase Treatment', 'Tangential Flow Filtration', 'Ion Exchange Chromatography'],
        grades: [
            { name: 'Research Grade', sku: 'PRO-RUO-001', description: 'For R&D use only' },
            { name: 'GMP Grade', sku: 'PRO-GMP-001', description: 'Validated for clinical manufacturing' }
        ],
        documentation: [
            { label: 'CoA (Sample)', url: '#' },
            { label: 'SDS', url: '#' },
            { label: 'AOF Certificate', url: '#' }
        ],
        cleavageImages: ['/products/cleavage/provinasev2.png']
    },
    {
        id: '4',
        slug: 'pngase-f',
        name: 'PNGase F',
        category: 'reagent',
        grade: 'Research Grade',
        tagline: 'High-Purity N-Glycan Removal Enzyme for mAb Characterization',
        shortDescription: 'High-Purity N-Glycan Removal Enzyme for mAb Characterization',
        description: 'PNGase F is a highly specific N-glycan removal enzyme that cleaves the bond between the innermost GlcNAc and asparagine residues of high mannose, hybrid, and complex oligosaccharides.',
        longDescription: 'Manufactured to high purity and providing excellent batch-to-batch consistency, our standard PNGase F efficiently removes high-mannose, hybrid and complex N-glycans from native or denatured proteins. It is widely used in biopharmaceutical characterization, including glycan profiling and protein mass determination, maintaining the integrity of the primary protein structure for downstream analysis.',
        image: '/products/pnfgase f.webp',
        casNumber: '83534-39-8',
        keyFeatures: [
            'Cleaves All Classes of N-Linked Glycans',
            'Active on Both Native & Denatured Substrates',
            'High Specific Activity  Minimal Enzyme Required',
            'Validated for Biosimilar Glycan Profiling Workflows'
        ],
        applications: [
            'Glycoprotein analysis',
            'Protein structure determination',
            'Antibody deglycosylation',
            'Amino acid sequencing',
            'X-ray crystallography'
        ],
        href: '/pngase-f',
        seoTitle: 'Buy PNGase F (CAS 83534-39-8) — N-Glycan Removal Enzyme for mAb Characterization',
        seoDescription: 'High-purity PNGase F (CAS 83534-39-8) for complete N-glycan removal from native or denatured glycoproteins. High batch consistency. Request a quote from a global supplier.',
        quickSpecs: {
            purity: 'Ultra-pure',
            activity: 'High',
            storage: '-20°C',
            formulation: 'Standard incubation (2-16 hr.)'
        },
        workflow: ['Protein Denaturation', 'PNGase F Addition', 'Incubation', 'Glycan Extraction', 'Mass Spec Analysis'],
        documentation: [
            { label: 'Protocol Guide', url: '#' },
            { label: 'Product Flyer', url: '#' }
        ],
        cleavageImages: ['/products/cleavage/pngase-fv2.png']
    },
    {
        id: '6',
        slug: 'pegaspargase',
        name: 'Pegaspargase Bulk',
        category: 'api',
        grade: 'GMP Grade',
        tagline: 'PEGylated Oncology Enzyme | WHO-GMP Manufactured | DMF Available',
        shortDescription: 'PEGylated Oncology Enzyme | WHO-GMP Manufactured | DMF Available',
        description: 'Pegaspargase is a PEGylated form of L-Asparaginase engineered for extended plasma half-life and reduced immunogenicity compared to native asparaginase formulations. It functions by depleting circulating L-asparagine  selectively targeting leukemic cells that lack the ability to synthesize this amino acid independently  making it a preferred therapeutic option in ALL treatment protocols including first-line and relapsed/refractory settings.',
        longDescription: 'Manufactured under WHO-GMP conditions and compliant with ICH quality guidelines, this bulk API is produced through a validated conjugation and purification process. Each batch is rigorously tested to ensure consistent PEGylation profile, enzymatic activity, ultra-low endotoxin levels and full documentation readiness for global regulatory submissions.',
        image: '/bioapi/pegaspargase.webp',
        casNumber: '130167-69-0',
        keyFeatures: ['WHO-GMP Certified Manufacturing', 'Controlled PEGylation Profile', 'Scalable Supply Capacity', 'Complete Documentation Package'],
        applications: ['Oncology Therapeutics', 'Formulation Development', 'Clinical Research & Bioanalytical Studies'],
        href: '/pegaspargase',
        seoTitle: 'Pegaspargase Bulk API Manufacturer | PEG L-Asparaginase | WHO-GMP',
        seoDescription: 'Source high-purity Pegaspargase Bulk API (PEGylated L-Asparaginase, CAS 130167-69-0). WHO-GMP certified manufacturer for global pharmaceutical supply.',
        quickSpecs: {
            purity: '≥99%',
            casNumber: '130167-69-0',
            storage: '2-8°C',
            formulation: 'Liquid'
        },
        documentation: [
            { label: 'Technical Data Sheet', url: '#' },
            { label: 'SDS', url: '#' }
        ],
        dmfAvailable: true
    },
    {
        id: '7',
        slug: 'streptokinase',
        name: 'Streptokinase Bulk',
        category: 'api',
        grade: 'GMP Grade',
        tagline: 'High-Purity Thrombolytic Enzyme | WHO-GMP Manufactured | DMF Available',
        shortDescription: 'High-Purity Thrombolytic Enzyme | WHO-GMP Manufactured | DMF Available',
        description: 'Streptokinase is a thrombolytic enzyme with a well-established role in the treatment of acute myocardial infarction, deep vein thrombosis and pulmonary embolism. It acts by binding to plasminogen to form an activator complex which converts plasminogen to plasmin  the key enzyme responsible for fibrin clot dissolution.',
        longDescription: 'Manufactured under WHO-GMP conditions and compliant with ICH quality guidelines, this bulk API is produced through a validated fermentation and purification process. Each batch is rigorously tested to ensure consistent thrombolytic activity, ultra-low endotoxin levels and full documentation readiness for global regulatory submissions.',
        image: '/bioapi/streptokinase.webp',
        casNumber: '9002-01-1',
        keyFeatures: ['WHO-GMP Certified Manufacturing', 'Consistent Thrombolytic Activity', 'Scalable Supply Capacity', 'Complete Documentation Package'],
        applications: ['Cardiovascular Therapeutics', 'Formulation Development', 'Clinical Research & Bioanalytical Studies'],
        href: '/streptokinase',
        seoTitle: 'Streptokinase Bulk API Supplier | Thrombolytic Enzyme Manufacturer',
        seoDescription: 'Source high-purity Streptokinase Bulk API (CAS 9002-01-1), a thrombolytic enzyme manufactured under WHO-GMP guidelines for cardiovascular therapeutics. Request a quote.',
        quickSpecs: {
            purity: '≥99%',
            casNumber: '9002-01-1',
            storage: '2-8°C',
            formulation: 'Lyophilized'
        },
        dmfAvailable: true
    },
    {
        id: '8',
        slug: 'sodium-hyaluronate',
        name: 'Sodium Hyaluronate',
        category: 'api',
        grade: 'GMP Grade',
        tagline: 'High-purity sodium hyaluronate for orthopedics and ophthalmic applications',
        shortDescription: 'High-purity sodium hyaluronate API',
        description: 'Sodium hyaluronate manufactured for consistent molecular weight distribution and dependable performance in sterile formulations',
        longDescription: 'Our Sodium Hyaluronate API is engineered to offer exceptional purity and a tightly controlled diverse range of molecular weights, suitable for the most sensitive and demanding medical applications. It guarantees flawless sterile process compatibility, extremely low endotoxin units and unparalleled viscoelastic behavior, perfectly tailored for progressive orthopedic visco-supplementation and intraocular ophthalmic solutions.',
        image: '/bioapi/sodiumhyaluronate.webp',
        casNumber: '9067-32-7',
        keyFeatures: ['Controlled viscosity grades', 'Low endotoxin levels', 'Sterile process compatibility', 'Consistent molecular weight distribution'],
        applications: ['Orthopedics', 'Ophthalmics', 'Medical Devices', 'Dermatology'],
        href: '/sodium-hyaluronate',
        seoTitle: 'Sodium Hyaluronate API (CAS 9067-32-7) | Ophthalmic & Orthopedic Grade',
        seoDescription: 'Buy pharmaceutical grade Sodium Hyaluronate API (CAS 9067-32-7). GMP-certified, controlled molecular weight for ophthalmic and orthopedic viscosurgical applications.',
        quickSpecs: {
            purity: 'Sterile Grade',
            casNumber: '9067-32-7',
            storage: 'Ambient',
            formulation: 'Powder/Liquid'
        },
        dmfAvailable: true
    },
    {
        id: '9',
        slug: 'recombinant-albumin',
        name: 'Recombinant Human Albumin',
        category: 'reagent',
        grade: 'Bioprocessing Grade',
        tagline: 'Animal-Origin Free',
        shortDescription: 'Animal origin-free recombinant albumin excipient',
        description: 'Recombinant human albumin for cell culture, vaccine formulation and biologics stabilization workflows',
        longDescription: 'Recombinant Human Albumin is an animal-origin-free (AOF) protein that eliminates the risks of adventitious agents while mimicking the structural and functional attributes of native human serum albumin. With exceptional lot-to-lot consistency and superior purity profiles, it stabilizes labile therapeutics, enhances cell culture media viability and serves securely in advanced vaccine formulations.',
        image: '/products/recombinant-albumin.webp',
        aof: true,
        casNumber: '70024-90-7',
        keyFeatures: ['Animal-Origin Free | BSE/TSE Risk Eliminated', 'High Purity >99% by SDS-PAGE', 'Validated for Vaccine & Biopharmaceutical Stabilization', 'Consistent Physicochemical Profile Across All Lots'],
        applications: ['Cell Culture', 'Vaccine Formulation', 'Protein Stabilization', 'Cryopreservation'],
        href: '/recombinant-albumin',
        seoTitle: 'Recombinant Human Albumin (CAS 70024-90-7) | Animal-Origin-Free BSA Alternative',
        seoDescription: 'Source animal-origin-free Recombinant Human Albumin (rHSA, CAS 70024-90-7) for cell culture and biomanufacturing. A safe, high-purity BSA replacement. Request quote.',
        quickSpecs: {
            purity: '≥99%',
            casNumber: '70024-90-7',
            storage: '2-8°C',
            formulation: 'Liquid'
        },
        cleavageImages: ['/products/cleavage/recombinant-albuminv2.png']
    },
    {
        id: '10',
        slug: 'trypsin',
        name: 'Trypsin',
        category: 'reagent',
        grade: 'USP Grade',
        tagline: 'High-Purity Animal-Origin-Free Enzyme for Cell Dissociation',
        shortDescription: 'High-Purity Animal-Origin-Free Enzyme for Cell Dissociation',
        description: 'Our Recombinant Trypsin is a highly purified, animal-origin-free enzyme ideal for cell dissociation, bioprocessing, and robust cell culture scale-up operations.',
        longDescription: 'Setting an elevated standard in bioprocessing, our USP-grade recombinant Trypsin replaces traditional animal-derived sources, bringing absolute uniformity and zero viral contamination risks. Designed precisely for managed proteolysis operations, cell dissociation mechanics and complex biological manufacturing steps, it guarantees distinguished specific activity and pure compliance with stringent pharmacopeia regulations.',
        image: '/products/trypsin-gmp.webp',
        aof: true,
        casNumber: '9002-07-7',
        keyFeatures: ['Recombinant  No Autolytic Degradation', 'Free from Contaminating Protease Activities', 'Suitable for Vero, CHO & HEK Cell Dissociation', 'High Specific Activity ≥3800 USP Units/mg'],
        applications: ['Cell Culture', 'Protein Processing', 'Peptide Mapping', 'Cell Therapy'],
        href: '/trypsin',
        seoTitle: 'Recombinant Trypsin USP Grade (CAS 9002-07-7) | Animal-Origin-Free Enzyme',
        seoDescription: 'Buy animal-origin-free recombinant Trypsin (CAS 9002-07-7) for cell dissociation and bioprocessing. Consistent activity, zero contaminating proteases. Request quote.',
        quickSpecs: {
            activity: 'High Specific Activity',
            casNumber: '9002-07-7',
            storage: '-20°C',
            formulation: 'Lyophilized'
        },
        cleavageImages: ['/products/cleavage/trypsin-v2.png']
    },
    {
        id: '11',
        slug: 'carboxypeptidase-b',
        name: 'Carboxypeptidase B',
        category: 'reagent',
        grade: 'Bioprocessing Grade',
        tagline: 'Recombinant C-Terminal Cleavage Enzyme for Biologics & Insulin',
        shortDescription: 'Recombinant C-Terminal Cleavage Enzyme for Biologics & Insulin',
        description: 'Carboxypeptidase B is a highly specific exopeptidase utilized in the maturation of recombinant proteins, insulin processing, and the removal of C-terminal lysine residues in monoclonal antibodies.',
        longDescription: 'A meticulously expressed recombinant serine protease, Carboxypeptidase B selectively targets the rapid and exact cleavage of basic amino acid terminals (Arginine, Lysine). It is globally deployed across high-yielding industrial purification processes most notably in recombinant insulin processing where uncompromised enzyme specificity and scalable, consistent downstream capabilities are non-negotiable.',
        image: '/products/carboxypeptidase.webp',
        casNumber: '9025-24-5',
        keyFeatures: ['Validated for Insulin & Biosimilar Manufacturing', 'IEX-Compatible for Downstream Processing', 'High Purity >99% by SDS-PAGE', 'High Specific Activity  Pharmacopoeial Grade'],
        applications: ['Bioprocessing', 'Protein Characterization', 'Insulin Manufacturing'],
        href: '/carboxypeptidase-b',
        seoTitle: 'Buy Recombinant Carboxypeptidase B (CAS 9025-24-5) | C-Terminal Processing Enzyme',
        seoDescription: 'Source recombinant Carboxypeptidase B for C-terminal lysine removal in mAb characterization and insulin processing. Animal-origin-free, high specificity. Request quote.',
        quickSpecs: {
            purity: 'High Specificity',
            casNumber: '9025-24-5',
            storage: '-20°C',
            formulation: 'Stability Buffer'
        },
        cleavageImages: ['/products/cleavage/carboxypeptidase-bv2.png']
    },
    {
        id: '12',
        slug: 'streptavidin',
        name: 'Streptavidin',
        category: 'reagent',
        grade: 'Research Grade',
        tagline: 'Highest Biotin-Binding Capacity',
        shortDescription: 'High-affinity recombinant streptavidin binding protein',
        description: 'Streptavidin with strong biotin affinity for immunoassays, molecular diagnostics and affinity purification workflows',
        longDescription: 'Streptavidin forms one of the strongest non-covalent interactions known in biological systems due to its unparalleled affinity for biotin. Extensively purified and rigorously assayed, this homotetrameric protein exhibits negligible nonspecific binding, enabling robust and reproducible performance in sensitive molecular diagnostics, advanced immunoassays and precision affinity-purification techniques.',
        image: '/products/streptavidin.webp',
        casNumber: '9013-20-1',
        keyFeatures: ['Exceptional Biotin-Binding Affinity', 'High Purity >99% by SDS-PAGE', 'Minimal Non-Specific Background Binding', 'Compatible with ELISA, Lateral Flow & Blotting'],
        applications: ['Diagnostics', 'Molecular Biology', 'Affinity Purification', 'Microarray Development'],
        href: '/streptavidin',
        seoTitle: 'Buy Recombinant Streptavidin (CAS 9013-20-1) | Diagnostics & ELISA Grade',
        seoDescription: 'Ultra-pure recombinant Streptavidin (CAS 9013-20-1) with exceptional biotin affinity for diagnostics, ELISA, and lateral flow assays. Low non-specific binding. Request quote.',
        quickSpecs: {
            purity: '>98%',
            casNumber: '9013-20-1',
            storage: '-20°C',
            formulation: 'Carrier-free'
        },
        cleavageImages: ['/products/cleavage/streptavidin.png']
    },
    {
        id: '13',
        slug: 'pngase-f-flash',
        name: 'PNGase F Flashᵀᴹ',
        category: 'reagent',
        grade: 'Research Grade',
        tagline: 'Fastest N-Glycan Release',
        shortDescription: 'Rapid N-glycan removal enzyme for antibody analysis',
        description: 'Optimized for high-throughput characterization, PNGase F Flash completes N-glycan removal in approximately 10 minutes',
        longDescription: 'PNGase F Flashᵀᴹ is a rapid deglycosylation protocol designed for time-critical and high-throughput analytical workflows. Maintaining the same high specificity and low protease activity as standard PNGase F, this accelerated formulation is perfect for rapid LC-MS peptide mapping, biosimilar characterization and rapid QC testing of mAbs.',
        image: '/products/pngflash.webp',
        casNumber: '83534-39-8',
        keyFeatures: [
            'Complete N-Glycan Release in Under 10 Minutes',
            'No Prior Protein Denaturation Step Required',
            'High Throughput & Automation Compatible',
            'Consistent Reproducible Results Across All Batches'
        ],
        applications: [
            'Rapid glycoprotein deglycosylation',
            'High-throughput mAb/Fc glycan analysis',
            'LC-MS & peptide mapping',
            'Biosimilar characterization',
            'QC testing'
        ],
        href: '/pngase-f-flash',
        seoTitle: 'PNGase F FLASH® — 10-Minute Rapid Deglycosylation Enzyme | High-Throughput QC',
        seoDescription: 'PNGase F FLASH® rapid deglycosylation enzyme completes N-glycan removal in 10 minutes. Ideal for high-throughput mAb characterization and LC-MS QC testing.',
        quickSpecs: {
            activity: 'Flash Reaction',
            storage: '-20°C',
            formulation: 'Liquid'
        },
        workflow: ['Protein Prep', 'Flash Enzyme Addition', 'Rapid Incubation (10m)', 'Direct Analytics Injection'],
        cleavageImages: ['/products/cleavage/pngase-f-flashv2.png']
    },
    {
        id: '14',
        slug: 'enterokinase',
        name: 'Enterokinase',
        category: 'reagent',
        grade: 'Research Grade',
        tagline: 'Precision Cleavage at DDDDK Recognition Site for Fusion Tag Removal',
        shortDescription: 'Precision Cleavage at DDDDK Recognition Site for Fusion Tag Removal',
        description: 'Enterokinase (Enteropeptidase) is a highly specific serine protease that recognizes the sequence Asp-Asp-Asp-Asp-Lys (DDDDK) and cleaves after the lysine residue, ideal for fusion tag removal.',
        longDescription: 'A remarkably precise biochemical tool, Enterokinase perfectly recognizes and cleaves downstream of the Asp-Asp-Asp-Asp-Lys sequence marker. Functioning as a supreme sequence-specific protease, it guarantees minimal extraneous digestion, resulting in pure native target proteins. Essential for removing affinity fusion tags, its bioprocess-tolerant properties cater dynamically to stringent laboratory upscaling tasks.',
        image: '/products/enterokinase.webp',
        casNumber: '9014-74-8',
        keyFeatures: ['Highly Specific Cleavage at DDDDK↓ Recognition Site', 'Minimal Non-Specific Proteolysis at Low Concentrations', 'Compatible with Multiple Fusion Protein Tag Systems', 'Stable Activity Across a Range of Buffer Conditions'],
        applications: ['Protein Purification', 'Recombinant Protein Workflows', 'Fusion Tag Removal'],
        href: '/enterokinase',
        seoTitle: 'Buy Recombinant Enterokinase (CAS 9014-74-8) | DDDDK Fusion Tag Removal Enzyme',
        seoDescription: 'Highly sequence-specific recombinant Enterokinase (CAS 9014-74-8) for fusion tag cleavage in protein purification. High cleavage efficiency. Request a quote.',
        quickSpecs: {
            purity: 'High Specificity',
            casNumber: '9014-74-8',
            storage: '-20°C',
            formulation: 'Liquid'
        },
        cleavageImages: ['/products/cleavage/enterokinasev2.png']
    },
    {
        id: '15',
        slug: 'kex2-protease',
        name: 'Kex2 Protease',
        category: 'reagent',
        grade: 'Bioprocessing Grade',
        tagline: 'Dibasic Site Cleavage Enzyme for Insulin & Peptide Processing',
        shortDescription: 'Dibasic Site Cleavage Enzyme for Insulin & Peptide Processing',
        description: 'Kex2 Protease is a recombinant serine protease that specifically cleaves peptide bonds at the carboxyl side of Lys-Arg, Arg-Arg and Pro-Arg, critical for insulin maturation.',
        longDescription: 'KeX2 Protease, also known as Kexin, is a highly specific calcium-dependent endopeptidase. Originally derived from Saccharomyces cerevisiae, our recombinant KeX2 is expressed in an optimized host system and purified to homogeneity without animal-derived components. It precisely cleaves after dibasic amino acid sequences, predominantly Lys-Arg and Arg-Arg, making it an essential processing formulation for the maturation of recombinant fusion proteins and precursor peptides in commercial biomanufacturing workflows.',
        image: '/products/kex2.webp',
        aof: true,
        casNumber: '77257-14-8',
        keyFeatures: ['Highly Specific Cleavage at Lys-Arg & Arg-Arg Sites', 'Optimised for Yeast Recombinant Expression Systems', 'Efficient Processing of Fusion Proteins & Peptides', 'High Specific Activity with Minimal Off-Target Cleavage'],
        applications: ['Biomanufacturing', 'Fusion Protein Cleavage', 'Peptide Processing', 'Biotherapeutics Development'],
        href: '/kex2-protease',
        seoTitle: 'Buy Kex2 Protease (CAS 77257-14-8) | Dibasic Site Cleavage | Insulin Processing',
        seoDescription: 'Recombinant animal-origin-free Kex2 Protease (CAS 77257-14-8). Highly specific dibasic site cleavage enzyme for insulin and peptide manufacturing. Request a quote.',
        quickSpecs: {
            purity: '≥90% by SDS-PAGE',
            casNumber: '77257-14-8',
            storage: '-20°C',
            formulation: 'Liquid'
        },
        cleavageImages: ['/products/cleavage/kex2-proteasev2.png']
    }
];

export function getProductBySlug(slug: string): Product | undefined {
    return products.find(p => p.slug === slug);
}
