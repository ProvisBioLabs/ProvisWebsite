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
    quickSpecs?: QuickSpec;
    workflow?: string[];
    grades?: ProductGrade[];
    documentation?: { label: string; url: string }[];
    technicalImages?: { url: string; caption: string }[];
    cleavageImages?: string[];
    overview?: string;
    benefits?: string[];
    specifications?: { parameter: string; details: string }[];
    skuList?: { sku: string; catNo: string; description: string; price?: string }[];
    faqs?: { question: string; answer: string }[];
}

export const products: Product[] = [
    {
        id: '2',

        slug: 'provinase',
        name: 'Provinaseᵀᴹ (Endonuclease)',
        category: 'reagent',
        grade: 'Research and GMP grade',
        tagline: 'Trusted by Leading Biopharma & CDMOs in the US',
        shortDescription: 'GMP-grade endonuclease for host cell DNA removal',
        description: 'Provinaseᵀᴹ is a recombinant non-specific endonuclease derived from Serratia marcescens, expressed in E. coli and manufactured to GMP grade standards. It hydrolyzes all forms of nucleic acids, single- and double-stranded DNA and RNA, via a Mg²⁺-dependent phosphodiester bond cleavage mechanism, reducing them to 3–5 nucleotide fragments.',
        image: '/products/provinase.webp',
        aof: true,
        badge: 'Bestseller',
        casNumber: '9025-65-4',
        keyFeatures: ['Animal-Origin Free', 'High Specific Activity', 'Low Endotoxin', 'Validated for Viral Vector Manufacturing'],
        applications: ['Host Cell DNA Clearance', 'Viscosity Reduction', 'Viral Vector Manufacturing', 'Vaccine Manufacturing', 'CAR-T and Cell Therapy'],
        href: '/provinase',
        seoTitle: 'Provinaseᵀᴹ — GMP Grade Recombinant Endonuclease | Buy from Provis Biolabs USA',
        seoDescription: 'Provinaseᵀᴹ is a GMP-grade, animal-origin-free recombinant endonuclease for host cell DNA removal in viral vector, vaccine and cell therapy manufacturing. CAS 9025-65-4. Request a quote from Provis Biolabs USA.',
        quickSpecs: {
            purity: '≥99%',
            activity: '≥250 U/µL',
            casNumber: '9025-65-4',
            storage: '-15°C to -25°C',
            formulation: 'Frozen Liquid'
        },
        workflow: ['Clarification', 'Benzonase/Provinase Treatment', 'Tangential Flow Filtration', 'Ion Exchange Chromatography'],
        cleavageImages: ['/products/cleavage/provinasev2.png'],
        overview: 'Provinaseᵀᴹ is a recombinant non-specific endonuclease derived from Serratia marcescens, expressed in E. coli and manufactured to GMP grade standards. It hydrolyzes all forms of nucleic acids, single- and double-stranded DNA and RNA, via a Mg²⁺-dependent phosphodiester bond cleavage mechanism, reducing them to 3–5 nucleotide fragments. Provinaseᵀᴹ is widely used in biopharmaceutical manufacturing for host cell DNA (hcDNA) clearance, a critical step in meeting regulatory nucleic acid limits for injectable biologics.',
        benefits: [
            'GMP-grade recombinant endonuclease for regulatory-compliant hcDNA clearance',
            'Effective against all nucleic acid forms (ssDNA, dsDNA, ssRNA, dsRNA)',
            'Reduces host cell DNA to 3–5 nt oligomers, supporting regulatory limits',
            'Animal-component free; suitable for downstream injectable and gene therapy products',
            'Compatible with a broad range of bioprocessing buffers and pH conditions (pH 6–10)',
            'Available in scalable SKUs (100KU to 5MU) for process development through commercial manufacturing'
        ],
        specifications: [
            { parameter: 'PURITY', details: '≥99% by SDS-PAGE' },
            { parameter: 'ENZYME SOURCE', details: 'Recombinant Serratia marcescens endonuclease expressed in E. coli' },
            { parameter: 'FORM', details: 'Frozen Liquid' },
            { parameter: 'RECOMMENDED STORAGE CONDITIONS', details: '−15°C to −25°C' },
            { parameter: 'COFACTOR REQUIREMENT', details: 'Mg²⁺ (typically 1-2 mM MgCl₂)' },
            { parameter: 'OPTIMAL pH', details: '6-10 (broad range); peak activity ~pH 8' },
            { parameter: 'EXPIRATION', details: 'Per CoA; avoid repeated freeze-thaw cycles' }
        ],
        skuList: [
            { sku: '100KU', catNo: 'PB-01-100KU', description: 'Provinaseᵀᴹ Endonuclease, GMP grade, 100,000 Units', price: '$285' },
            { sku: '500KU', catNo: 'PB-01-500KU', description: 'Provinaseᵀᴹ Endonuclease, GMP grade, 500,000 Units', price: '$1,190' },
            { sku: '5MU', catNo: 'PB-01-5MU', description: 'Provinaseᵀᴹ Endonuclease, GMP grade, 5,000,000 Units', price: '$8,950' }
        ],
        faqs: [
            { question: 'What is the mechanism of action of Provinaseᵀᴹ?', answer: 'Provinaseᵀᴹ cleaves phosphodiester bonds in nucleic acid backbones in a non-sequence-specific manner, producing 3–5 nucleotide oligomers. The reaction requires divalent cations, with Mg²⁺ preferred at 1–2 mM concentration.' },
            { question: 'Is Provinaseᵀᴹ active against both DNA and RNA?', answer: 'Yes. Provinaseᵀᴹ is a non-specific endonuclease with activity against ssDNA, dsDNA, ssRNA and dsRNA, as well as nucleic acid-protein complexes in solution.' },
            { question: 'What concentration of Provinaseᵀᴹ is typically used in bioprocessing?', answer: 'Typical use concentrations range from 1–50 U/mL depending on the nucleic acid load, buffer conditions and process scale. Optimization is recommended for each specific process.' },
            { question: 'Does Provinaseᵀᴹ require removal after treatment?', answer: 'Yes. In GMP processes, Provinaseᵀᴹ removal is typically demonstrated as part of clearance validation. Downstream chromatographic steps (e.g., ion exchange, affinity) generally achieve adequate clearance of the enzyme.' },
            { question: 'Is Provinaseᵀᴹ compatible with common lysis and harvest buffers?', answer: 'Provinaseᵀᴹ is broadly compatible with pH 6–10 and tolerates moderate salt concentrations. It should be evaluated for compatibility with detergents, chelating agents (e.g., EDTA, which chelates Mg²⁺ and inhibits activity) and reducing agents at your specific process conditions.' },
            { question: 'How does Provinaseᵀᴹ compare to other commercial endonucleases?', answer: 'Provinaseᵀᴹ offers comparable endonuclease activity to other commercially available GMP-grade recombinant endonucleases, with the advantage of animal-component-free production and scalable supply formats suited for both process development and commercial campaigns.' }
        ]
    },
    {
        id: '3',

        slug: 'pngase-f',
        name: 'PNGase F',
        category: 'reagent',
        grade: 'MS Grade',
        tagline: 'High-Purity N-Glycan Removal Enzyme for mAb Characterization',
        shortDescription: 'High-Purity N-Glycan Removal Enzyme for mAb Characterization',
        description: 'PNGase F is a highly active amidase that releases all N-linked glycans from glycoproteins by cleaving between the innermost GlcNAc and asparagine residues.',
        image: '/products/pnfgase f.webp',
        casNumber: '83534-39-8',
        keyFeatures: [
            'Cleaves All Classes of N-Linked Glycans',
            'Active on Both Native & Denatured Substrates',
            'High Specific Activity  Minimal Enzyme Required',
            'Validated for Biosimilar Glycan Profiling Workflows'
        ],
        applications: [
            'Intact Mass Spectrometry',
            'Charge Variant Analysis',
            'N-Glycan Profiling',
            'SDS-PAGE and Western Blot',
            'Peptide Mapping'
        ],
        href: '/pngase-f',
        seoTitle: 'Buy PNGase F (CAS 83534-39-8) — N-Glycan Removal Enzyme for mAb Characterization | Provis Biolabs',
        seoDescription: 'High-purity PNGase F (CAS 83534-39-8) for complete N-glycan removal from native or denatured glycoproteins. Research-grade, high batch consistency. Request a quote.',
        quickSpecs: {
            purity: '≥95%',
            activity: 'High',
            storage: '2°C to 8°C',
            formulation: 'Liquid'
        },
        workflow: ['Protein Denaturation', 'PNGase F Addition', 'Incubation', 'Glycan Extraction', 'Mass Spec Analysis'],
        cleavageImages: ['/products/cleavage/pngase-fv2.png'],
        overview: 'PNGase F is a highly active amidase that releases all N-linked glycans from glycoproteins by cleaving between the innermost GlcNAc and asparagine residues. It is the standard enzyme for complete N-glycan removal prior to intact mass spectrometry, charge variant analysis and glycan profiling in mAb characterization workflows. Supplied as a stable ready-to-use liquid formulation.',
        benefits: [
            'Complete removal of all N-linked glycans including complex, high-mannose and hybrid type structures',
            'Enables accurate intact mass determination by eliminating glycoform-related mass heterogeneity',
            'Simplifies icIEF and CZE charge variant profiles by resolving glycosylation-linked charge variants',
            'Compatible with standard denaturing and native deglycosylation protocols',
            'Suitable for N-glycan release prior to HILIC-FLR and LC-MS glycan profiling',
            'Animal-component free recombinant enzyme for use in regulated analytical workflows'
        ],
        specifications: [
            { parameter: 'Grade', details: 'MS Grade' },
            { parameter: 'Enzyme Source', details: 'Recombinant; animal-component free' },
            { parameter: 'Specificity', details: 'Cleaves all N-linked glycans between innermost GlcNAc and Asn' },
            { parameter: 'Form', details: 'Liquid' },
            { parameter: 'Storage Condition', details: '2°C to 8°C' },
            { parameter: 'Optimal pH', details: '7.0–8.5' },
            { parameter: 'Reaction Conditions', details: 'Compatible with denaturing (SDS/BME) and native protocols' },
            { parameter: 'Purity', details: 'Defined by SDS-PAGE and activity assay; CoA provided per lot' }
        ],
        skuList: [
            { sku: '500U', catNo: 'PB-06-500U', description: 'PNGase F, Liquid, 500 Units', price: '$155' }
        ],
        faqs: [
            { question: 'What types of N-glycans does PNGase F cleave?', answer: 'PNGase F cleaves all major N-linked glycan classes including complex-type, high-mannose and hybrid-type glycans. It acts on the amide bond between the innermost GlcNAc and the asparagine residue, releasing the intact glycan chain.' },
            { question: 'Does PNGase F require protein denaturation?', answer: 'For complete deglycosylation of intact proteins, mild denaturing conditions using SDS and beta-mercaptoethanol followed by detergent quenching with NP-40 are commonly used. However, native deglycosylation protocols without denaturation are feasible for many substrates.' },
            { question: 'How does PNGase F treatment affect icIEF pI marker performance?', answer: 'Buffer composition and the presence of glycerol or other stabilizers in the PNGase F formulation can affect the behavior of pI markers in icIEF runs. It is advisable to evaluate pI marker recovery and migration in the context of your specific PNGase F digestion buffer.' },
            { question: 'What is the difference between PNGase F and PNGase F FLASH®?', answer: 'Standard PNGase F is suitable for conventional overnight or extended incubation deglycosylation protocols. PNGase F FLASH® is an engineered variant optimized for rapid deglycosylation, enabling complete N-glycan removal in significantly reduced reaction times.' },
            { question: 'Can PNGase F be used for N-glycan release prior to HILIC-FLR analysis?', answer: 'Yes. PNGase F is the standard enzyme for releasing intact N-glycans prior to fluorescent labeling and HILIC-FLR or LC-MS glycan profiling.' },
            { question: 'How should PNGase F be stored to maintain activity?', answer: 'PNGase F should be stored at 2°C to 8°C in its supplied liquid formulation. Freezing is not recommended as it may reduce enzyme activity. Avoid repeated temperature excursions.' }
        ]
    },
    {
        id: '11',

        slug: 'pngase-f-flash',
        name: 'PNGase F FLASH®',
        category: 'reagent',
        grade: 'MS Grade',
        tagline: '10-Minute Rapid Deglycosylation for High-Throughput QC',
        shortDescription: '10-Minute Rapid Deglycosylation Enzyme for High-Throughput QC',
        description: 'PNGase F FLASH® is an engineered high-activity PNGase F variant designed for rapid and complete N-glycan removal in a fraction of the time required by conventional protocols. It is purpose-built for high-throughput QC release testing, multi-sample comparability studies and PAT environments where same-day sample preparation and analysis are operationally essential.',
        image: '/products/pngflash.webp',
        casNumber: '83534-39-8',
        keyFeatures: [
            'Complete N-Glycan Release in Under 10 Minutes',
            'No Prior Protein Denaturation Step Required',
            'High Throughput & Automation Compatible',
            'Consistent Reproducible Results Across All Batches'
        ],
        applications: [
            'High-Throughput Intact Mass Analysis',
            'QC Release Testing',
            'PAT and At-Line Monitoring',
            'N-Glycan Profiling',
            'Accelerated Peptide Mapping'
        ],
        href: '/pngase-f-flash',
        seoTitle: 'PNGase F FLASH® — 10-Minute Rapid Deglycosylation for High-Throughput QC | Provis Biolabs USA',
        seoDescription: 'PNGase F FLASH® completes N-glycan removal in ~10 minutes. Ideal for high-throughput mAb characterization, LC-MS peptide mapping and biosimilar QC testing. Request quote.',
        quickSpecs: {
            activity: 'Flash Reaction',
            storage: '2°C to 8°C',
            formulation: 'Liquid'
        },
        workflow: ['Protein Prep', 'Flash Enzyme Addition', 'Rapid Incubation (10m)', 'Direct Analytics Injection'],
        cleavageImages: ['/products/cleavage/pngase-f-flashv2.png'],
        overview: 'PNGase F FLASH® is an engineered high-activity PNGase F variant designed for rapid and complete N-glycan removal in a fraction of the time required by conventional protocols. It is purpose-built for high-throughput QC release testing, multi-sample comparability studies and PAT environments where same-day sample preparation and analysis are operationally essential. Supplied as a ready-to-use liquid in a 50-reaction format.',
        benefits: [
            'Dramatically reduced deglycosylation time compared to conventional PNGase F enabling same-day sample preparation and analysis',
            'Complete removal of all N-linked glycans including complex, high-mannose and hybrid-type structures',
            'Supplied in a convenient 50-reaction format supporting high-throughput and multi-sample workflows',
            'Eliminates glycoform-related mass heterogeneity for clean intact mass spectra and accurate molecular weight determination',
            'Simplifies icIEF and CZE charge variant profiles by removing glycosylation-associated charge heterogeneity',
            'Compatible with standard denaturing and native deglycosylation protocols',
            'Liquid formulation, no reconstitution required; ready to use directly from storage',
            'Animal-component free recombinant enzyme suitable for regulated analytical applications'
        ],
        specifications: [
            { parameter: 'Grade', details: 'Analytical Grade' },
            { parameter: 'Enzyme Source', details: 'Recombinant engineered PNGase F; animal-component free' },
            { parameter: 'Specificity', details: 'Cleaves all N-linked glycans between innermost GlcNAc and Asn' },
            { parameter: 'Form', details: 'Liquid' },
            { parameter: 'Storage Condition', details: '2°C to 8°C' },
            { parameter: 'Optimal pH', details: '7.0–8.5' },
            { parameter: 'Reaction Time', details: 'Rapid; significantly reduced versus standard PNGase F protocols' },
            { parameter: 'Format', details: '50 reactions per kit' },
            { parameter: 'Purity', details: 'Defined by SDS-PAGE and activity assay; CoA provided per lot' }
        ],
        skuList: [
            { sku: '50 RXN', catNo: 'PB-16-50RXN', description: 'PNGase F FLASH®, Liquid, 50 Reactions', price: '$245' }
        ],
        faqs: [
            { question: 'How much faster is PNGase F FLASH® compared to standard PNGase F?', answer: 'PNGase F FLASH® is engineered for significantly accelerated deglycosylation, enabling complete N-glycan removal in less than 15 minutes.' },
            { question: 'Does PNGase F FLASH® achieve the same completeness of N-glycan removal as standard PNGase F?', answer: 'Yes. PNGase F FLASH® is designed to achieve complete removal of all N-linked glycan classes including complex, high-mannose and hybrid-type structures within its accelerated reaction window.' },
            { question: 'Is PNGase F FLASH® suitable for native deglycosylation protocols?', answer: 'PNGase F FLASH® is compatible with both denaturing and native deglycosylation conditions. Native protocols are applicable when downstream applications require intact protein structure or biological activity.' },
            { question: 'Can PNGase F FLASH® be used for N-glycan release prior to HILIC-FLR glycan profiling?', answer: 'Yes. PNGase F FLASH® releases intact N-glycans that are fully compatible with downstream fluorescent labeling.' },
            { question: 'What is the format of PNGase F FLASH® and how is it supplied?', answer: 'PNGase F FLASH® is supplied as a liquid formulation in a 50-reaction format. No reconstitution is required. The product is ready to use directly from refrigerated storage at 2°C to 8°C.' },
            { question: 'How does PNGase F FLASH® perform in multi-sample parallel digestion formats?', answer: 'PNGase F FLASH® is well suited to plate-based or multi-tube parallel digestion formats used in high-throughput analytical workflows. Its rapid activity enables consistent deglycosylation across all samples within a batch.' },
            { question: 'Should PNGase F FLASH® be frozen for long-term storage?', answer: 'No. PNGase F FLASH® should be stored at 2°C to 8°C in its liquid formulation. Freezing is not recommended as it may adversely affect enzyme activity.' }
        ]
    },
    {
        id: '8',

        slug: 'trypsin',
        name: 'Recombinant Trypsin, GMP Grade',
        category: 'reagent',
        grade: 'GMP Grade',
        tagline: 'Animal-Origin-Free Enzyme for Cell Dissociation',
        shortDescription: 'GMP-grade recombinant trypsin for cell dissociation',
        description: 'Recombinant Trypsin GMP Grade is an animal-component free serine protease manufactured under GMP conditions for use in mammalian cell culture dissociation, downstream processing and GMP-aligned analytical workflows.',
        image: '/products/trypsin-gmp.webp',
        aof: true,
        casNumber: '9002-07-7',
        keyFeatures: ['Recombinant  No Autolytic Degradation', 'Free from Contaminating Protease Activities', 'Suitable for Vero, CHO & HEK Cell Dissociation', 'High Specific Activity'],
        applications: ['Cell Dissociation and Passaging', 'Cell Harvest', 'CAR-T and Cell Therapy Manufacturing', 'Downstream Processing', 'GMP Analytical Sample Preparation'],
        href: '/trypsin',
        seoTitle: 'Buy Recombinant Trypsin GMP Grade (CAS 9002-07-7) — Animal-Origin-Free | Provis Biolabs USA',
        seoDescription: 'GMP-grade recombinant Trypsin (CAS 9002-07-7), animal-origin-free, for bioprocessing and cell culture. Consistent activity, zero contaminating proteases. Request quote.',
        quickSpecs: {
            purity: '≥98% by SDS-PAGE',
            casNumber: '9002-07-7',
            storage: '-15°C to -25°C',
            formulation: 'Lyophilized Powder'
        },
        cleavageImages: ['/products/cleavage/trypsin-v2.png'],
        overview: 'Recombinant Trypsin GMP Grade is an animal-component free serine protease manufactured under GMP conditions for use in mammalian cell culture dissociation, downstream processing and GMP-aligned analytical workflows. It replaces porcine pancreas-derived trypsin, eliminating adventitious agent risk while delivering defined specific activity and full regulatory documentation. Available as a lyophilized powder in scalable formats from 1 g to 25 g.',
        benefits: [
            'GMP-grade manufacture with full documentation including Certificate of Analysis and Certificate of Origin',
            'Recombinant and animal-component free, eliminates adventitious agent and TSE/BSE risk associated with porcine-derived trypsin',
            'Defined specific activity and cleavage specificity for consistent and reproducible performance in cell culture and manufacturing workflows',
            'Suitable for mammalian cell dissociation, passaging and harvest in GMP cell culture processes',
            'Compatible with standard biopharmaceutical manufacturing buffer systems',
            'Supports regulatory compliance with ICH Q5A and EMA guidelines on use of animal-derived reagents in biological manufacturing',
            'Available in 1 g, 5 g and 25 g formats supporting process development through commercial-scale manufacturing',
            'Lyophilized format offers extended shelf life and flexibility in reconstitution concentration'
        ],
        specifications: [
            { parameter: 'Grade', details: 'GMP Grade' },
            { parameter: 'Enzyme Source', details: 'Recombinant; animal-component free' },
            { parameter: 'Specificity', details: 'Cleaves C-terminal to Lys and Arg residues' },
            { parameter: 'Form', details: 'Lyophilized Powder' },
            { parameter: 'Storage Condition', details: '−15°C to −25°C' },
            { parameter: 'Optimal pH', details: '7.5–8.5' },
            { parameter: 'Activator', details: 'Ca²⁺ stabilizes enzyme; activity in standard buffers without calcium supplementation' },
            { parameter: 'Inhibition', details: 'Inhibited by PMSF, TLCK, soybean trypsin inhibitor and serum' },
            { parameter: 'Purity', details: 'Defined by SDS-PAGE and activity assay; CoA provided per lot' },
            { parameter: 'Documentation', details: 'CoA, Certificate of Origin and GMP compliance documentation available' }
        ],
        skuList: [
            { sku: '1 g', catNo: 'PB-07-001g', description: 'Recombinant Trypsin, GMP Grade, 1 g', price: '$380' },
            { sku: '5 g', catNo: 'PB-07-005g', description: 'Recombinant Trypsin, GMP Grade, 5 g', price: '$1,450' },
            { sku: '25 g', catNo: 'PB-07-025g', description: 'Recombinant Trypsin, GMP Grade, 25 g', price: '$5,200' }
        ],
        faqs: [
            { question: 'How should Recombinant Trypsin GMP Grade be reconstituted for use?', answer: 'Reconstitute the lyophilized powder in sterile water for injection or an appropriate buffer to the desired working concentration. Gently mix to dissolve without vortexing to avoid foaming and potential activity loss.' },
            { question: 'What concentration of Recombinant Trypsin is recommended for mammalian cell dissociation?', answer: 'Typical working concentrations for adherent mammalian cell dissociation range from 0.05% to 0.25% (w/v) depending on cell line, passage number and culture vessel format. Optimization of trypsin concentration and incubation time is recommended.' },
            { question: 'How is trypsin activity inhibited after cell dissociation?', answer: 'Trypsin activity is most commonly inhibited by addition of serum-containing medium or a defined soybean trypsin inhibitor solution following the dissociation step.' },
            { question: 'Is GMP Grade Recombinant Trypsin suitable for use in CAR-T cell manufacturing?', answer: 'Yes. The recombinant and animal-component free origin of this preparation supports its use in xeno-free and GMP-compliant CAR-T cell and other ATMP manufacturing workflows.' },
            { question: 'Does Recombinant Trypsin GMP Grade contain any animal-derived components?', answer: 'No. Recombinant Trypsin GMP Grade from Provis Biolabs is produced in a defined recombinant expression system without the use of animal-derived raw materials at any stage of the manufacturing process.' }
        ]
    },
    {
        id: '14',

        slug: 'trypsin-ms',
        name: 'Recombinant Trypsin, MS Grade',
        category: 'reagent',
        grade: 'MS Grade',
        tagline: 'Ultra-High Purity Trypsin for Mass Spectrometry',
        shortDescription: 'MS-grade recombinant trypsin enzyme',
        description: 'Recombinant Trypsin MS Grade is an ultra-high purity trypsin optimized specifically for mass spectrometry applications, with minimized autolysis peptides and low chymotryptic side activity. It delivers complete and highly specific cleavage at Lys and Arg residues for reproducible tryptic digest performance in peptide mapping, MAM and bottom-up proteomics workflows. Its recombinant animal-component free origin eliminates the variability and contamination risks of porcine-derived preparations.',
        image: '/products/typsinmsgrade.png',
        aof: true,
        casNumber: '9002-07-7',
        keyFeatures: ['Ultra-high purity optimized for mass spectrometry', 'Recombinant and animal-component free', 'High cleavage specificity at Lys and Arg residues'],
        applications: ['Peptide Mapping', 'Multi-Attribute Monitoring', 'Biosimilar Comparability', 'Host Cell Protein Analysis', 'Multi-Enzyme Digestion'],
        href: '/trypsin-ms',
        seoTitle: 'MS-Grade Recombinant Trypsin for Peptide Mapping & MAM | Provis Biolabs USA',
        seoDescription: 'MS-grade recombinant Trypsin (CAS 9002-07-7), animal-origin-free, optimized for mass spectrometry and peptide mapping. Request quote.',
        quickSpecs: {
            purity: '≥98% by SDS-PAGE',
            casNumber: '9002-07-7',
            storage: '-15°C to -25°C',
            formulation: 'Lyophilized Powder'
        },
        overview: 'Recombinant Trypsin MS Grade is an ultra-high purity trypsin optimized specifically for mass spectrometry applications, with minimized autolysis peptides and low chymotryptic side activity. It delivers complete and highly specific cleavage at Lys and Arg residues for reproducible tryptic digest performance in peptide mapping, MAM and bottom-up proteomics workflows. Its recombinant animal-component free origin eliminates the variability and contamination risks of porcine-derived preparations.',
        benefits: [
            'Ultra-high purity optimized for mass spectrometry applications with minimal autolysis peptides and low chymotryptic side activity',
            'High cleavage specificity at Lys and Arg residues generating well-defined peptide fragments for LC-MS/MS analysis',
            'Recombinant and animal-component free, eliminates variability and contamination risks associated with porcine pancreas-derived trypsin',
            'Consistent lot-to-lot digest performance supporting reproducible peptide map profiles across analytical batches',
            'Compatible with standard in-solution and in-gel digestion protocols and common denaturing agents including urea and guanidinium chloride',
            'Suitable for MAM workflows, peptide mapping, bottom-up proteomics and intact/subunit mass analysis sample preparation',
            'Lyophilized format enables flexible reconstitution and long-term reagent stability',
            'Available in 1 mg, 5 mg and 25 mg formats supporting method development through high-throughput routine analytical use'
        ],
        specifications: [
            { parameter: 'Grade', details: 'MS Grade' },
            { parameter: 'Enzyme Source', details: 'Recombinant; animal-component free' },
            { parameter: 'Specificity', details: 'Cleaves C-terminal to Lys and Arg residues; minimal chymotryptic activity' },
            { parameter: 'Form', details: 'Lyophilized Powder' },
            { parameter: 'Storage Condition', details: '−15°C to −25°C' },
            { parameter: 'Optimal pH', details: '7.5–8.5' },
            { parameter: 'Autolysis', details: 'Minimized; MS grade qualification includes autolysis peptide assessment' },
            { parameter: 'Compatibility', details: 'Urea, guanidinium chloride, RapiGest SF and standard digestion buffers' },
            { parameter: 'Purity', details: 'Defined by SDS-PAGE, activity assay and MS qualification' }
        ],
        skuList: [
            { sku: '1 mg', catNo: 'PB-08-001mg', description: 'Recombinant Trypsin, MS Grade, 1 mg', price: '$95' },
            { sku: '5 mg', catNo: 'PB-08-005mg', description: 'Recombinant Trypsin, MS Grade, 5 mg', price: '$385' },
            { sku: '25 mg', catNo: 'PB-08-025mg', description: 'Recombinant Trypsin, MS Grade, 25 mg', price: '$1,650' }
        ],
        faqs: [
            { question: 'What distinguishes MS Grade from GMP Grade Recombinant Trypsin?', answer: 'MS Grade Recombinant Trypsin is optimized for analytical purity and mass spectrometry performance. GMP Grade Recombinant Trypsin is manufactured under GMP-compliant conditions with an expanded regulatory documentation package suited for use in licensed biopharmaceutical manufacturing processes.' },
            { question: 'What enzyme-to-substrate ratio is recommended for mAb tryptic digestion?', answer: 'A typical starting enzyme-to-substrate ratio for in-solution tryptic digestion of monoclonal antibodies is 1:20 to 1:50 (w/w, trypsin:mAb) following reduction and alkylation, with incubation at 37°C for 4–18 hours.' },
            { question: 'How are missed cleavages minimized in tryptic digestion workflows?', answer: 'Missed cleavages are minimized by ensuring complete protein denaturation prior to digestion, using an appropriate enzyme-to-substrate ratio and incubation time and avoiding the presence of trypsin inhibitors in the digestion buffer.' },
            { question: 'Does MS Grade Recombinant Trypsin generate significant autolysis peptides?', answer: 'MS Grade qualification includes assessment of autolysis peptide generation under standard digestion conditions. Autolysis is minimized in the MS Grade preparation to reduce background interference in the peptide map.' },
            { question: 'Can MS Grade Recombinant Trypsin be used for in-gel digestion as well as in-solution digestion?', answer: 'Yes. MS Grade Recombinant Trypsin is suitable for both in-solution and in-gel digestion protocols.' },
            { question: 'How should MS Grade Recombinant Trypsin be reconstituted and stored after reconstitution?', answer: 'Reconstitute the lyophilized powder in 1 mM HCl or the buffer specified in the CoA to the desired working concentration. Reconstituted trypsin should be aliquoted into single-use volumes and stored at −15°C to −25°C to minimize repeated freeze-thaw cycles.' }
        ]
    },
    {
        id: '15',

        slug: 'trypsin-edta',
        name: 'Recombinant Trypsin-EDTA Solution for Cell Culture, GMP Grade',
        category: 'reagent',
        grade: 'GMP Grade',
        tagline: 'Ready-to-use Cell Culture Dissociation',
        shortDescription: 'Sterile ready-to-use recombinant trypsin with EDTA',
        description: 'Recombinant Trypsin-EDTA Solution GMP Grade is a sterile ready-to-use liquid combining recombinant trypsin with EDTA for enhanced cell detachment efficiency in GMP mammalian cell culture. EDTA disrupts divalent cation-dependent adhesion synergistically with trypsin-mediated proteolytic cleavage, enabling complete cell dissociation at lower enzyme concentrations and shorter incubation times.',
        image: '/products/trypsinedta.png',
        aof: true,
        casNumber: '9002-07-7',
        keyFeatures: ['Ready-to-use sterile liquid formulation', 'Recombinant and animal-component free', 'EDTA synergy enhances cell detachment efficiency'],
        applications: ['Routine Cell Passaging', 'Cell Banking', 'Vero Cell Vaccine Manufacturing', 'CAR-T and ATMP Manufacturing', 'Viral Vector and mAb Manufacturing'],
        href: '/trypsin-edta',
        seoTitle: 'Buy Recombinant Trypsin-EDTA Solution GMP Grade | Cell Dissociation Reagent | Provis Biolabs',
        seoDescription: 'GMP-grade recombinant Trypsin-EDTA solution, animal-origin-free, for bioprocessing and cell culture dissociation. Request quote.',
        quickSpecs: {
            purity: '≥98% by SDS-PAGE',
            casNumber: '9002-07-7',
            storage: '-15°C to -25°C',
            formulation: 'Sterile Liquid Solution'
        },
        overview: 'Recombinant Trypsin-EDTA Solution GMP Grade is a sterile ready-to-use liquid combining recombinant trypsin with EDTA for enhanced cell detachment efficiency in GMP mammalian cell culture. EDTA disrupts divalent cation-dependent adhesion synergistically with trypsin-mediated proteolytic cleavage, enabling complete cell dissociation at lower enzyme concentrations and shorter incubation times. It is a direct regulatory-compliant replacement for porcine trypsin-EDTA solutions across GMP cell culture operations.',
        benefits: [
            'Ready-to-use sterile liquid formulation, no reconstitution or preparation required',
            'Recombinant and animal-component free, eliminates adventitious agent and TSE/BSE risk associated with porcine trypsin-EDTA preparations',
            'EDTA synergy enhances cell detachment efficiency by disrupting divalent cation-dependent adhesion prior to enzymatic cleavage',
            'GMP-grade manufacture with full documentation including Certificate of Analysis and Certificate of Origin',
            'Consistent lot-to-lot performance supporting reproducible cell dissociation across seed train and production culture operations',
            'Compatible with standard GMP mammalian cell culture systems including CHO, HEK293, Vero and primary human cells',
            'Supports xeno-free and serum-free cell culture process requirements for cell therapy and ATMP manufacturing',
            'Available in 100 mL and 500 mL formats supporting laboratory-scale and manufacturing-scale GMP cell culture operations'
        ],
        specifications: [
            { parameter: 'Grade', details: 'GMP Grade' },
            { parameter: 'Enzyme Source', details: 'Recombinant trypsin; animal-component free' },
            { parameter: 'Formulation', details: 'Trypsin combined with EDTA in physiological buffer' },
            { parameter: 'Form', details: 'Sterile Liquid Solution' },
            { parameter: 'Storage Condition', details: '−15°C to −25°C' },
            { parameter: 'Optimal pH', details: '7.0–7.6' },
            { parameter: 'Trypsin Concentration', details: '0.05%' },
            { parameter: 'EDTA Concentration', details: '0.02%' },
            { parameter: 'Sterility', details: 'Sterile filtered; refer to CoA' },
            { parameter: 'Documentation', details: 'CoA, Certificate of Origin and GMP compliance documentation available' }
        ],
        skuList: [
            { sku: '100 mL', catNo: 'PB-09-100ml', description: 'Recombinant Trypsin-EDTA Solution, GMP Grade, 100 mL', price: '$195' },
            { sku: '500 mL', catNo: 'PB-09-500ml', description: 'Recombinant Trypsin-EDTA Solution, GMP Grade, 500 mL', price: '$690' }
        ],
        faqs: [
            { question: 'What is the role of EDTA in the Trypsin-EDTA formulation?', answer: 'EDTA is a chelating agent that binds divalent cations including Ca²⁺ and Mg²⁺ in the cell culture medium and at the cell surface, disrupting integrin-mediated cell-to-substrate adhesion and cadherin-mediated cell-to-cell contacts that depend on divalent cation coordination. This weakening of adhesion prior to and during trypsin-mediated proteolytic cleavage enhances overall cell detachment efficiency and allows complete dissociation to be achieved at lower trypsin concentrations.' }
        ]
    },
    {
        id: '9',

        slug: 'carboxypeptidase-b-gmp',
        name: 'Recombinant Carboxypeptidase B, GMP Grade',
        category: 'reagent',
        grade: 'GMP Grade',
        tagline: 'C-Terminal Cleavage Enzyme for Biologics Manufacturing',
        shortDescription: 'GMP-grade C-Terminal Cleavage Enzyme for Biologics Manufacturing',
        description: 'GMP Grade rCPB is the regulatory-compliant manufacturing counterpart to Sequencing Grade CPB, produced under GMP conditions with full documentation support. It is used as a downstream processing reagent in mAb manufacturing to enzymatically control C-terminal Lys/Arg heterogeneity as a CQA management strategy.',
        image: '/products/carboxypeptidase.webp',
        casNumber: '9025-24-5',
        keyFeatures: ['Validated for Insulin & Biosimilar Manufacturing', 'IEX-Compatible for Downstream Processing', 'High Purity >99% by SDS-PAGE', 'High Specific Activity  Pharmacopoeial Grade'],
        applications: ['C-Terminal Processing in mAb Manufacturing', 'Process Development and Scale-Up', 'Release Testing', 'Comparability Studies', 'Multi-Enzyme Manufacturing Workflows'],
        href: '/carboxypeptidase-b-gmp',
        seoTitle: 'Buy Recombinant Carboxypeptidase B GMP Grade — C-Terminal Processing Enzyme | Provis Biolabs',
        seoDescription: 'Recombinant Carboxypeptidase B, GMP Grade (CAS 9025-24-5) for C-terminal cleavage in biologic manufacturing. Request quote.',
        quickSpecs: {
            purity: '>95%',
            casNumber: '9025-24-5',
            storage: '-15°C to -25°C',
            formulation: 'Frozen Liquid'
        },
        cleavageImages: ['/products/cleavage/carboxypeptidase-bv2.png'],
        overview: 'GMP Grade rCPB is the regulatory-compliant manufacturing counterpart to Sequencing Grade CPB, produced under GMP conditions with full documentation support. It is used as a downstream processing reagent in mAb manufacturing to enzymatically control C-terminal Lys/Arg heterogeneity as a CQA management strategy. Full traceability and defined specific activity support process validation across development and commercial manufacturing.',
        benefits: [
            'GMP-grade manufacture with full documentation support including Certificate of Analysis and Certificate of Origin',
            'Specifically cleaves C-terminal Lys and Arg residues for controlled removal of basic C-terminal heterogeneity',
            'Recombinant and animal-component free and is suitable for GMP-compliant downstream processing',
            'Defined specific activity and purity specifications for process validation support',
            'Available in 1 g format for manufacturing-scale applications',
            'Compatible with standard biopharmaceutical processing buffers',
            'Supports ICH Q6B CQA management strategies for therapeutic monoclonal antibodies'
        ],
        specifications: [
            { parameter: 'Grade', details: 'GMP Grade' },
            { parameter: 'Enzyme Source', details: 'Recombinant; animal-component free' },
            { parameter: 'Specificity', details: 'Cleaves C-terminal Lys and Arg residues' },
            { parameter: 'Form', details: 'Frozen Liquid' },
            { parameter: 'Storage Condition', details: '−15°C to −25°C' },
            { parameter: 'Optimal pH', details: '7.5–9.0' },
            { parameter: 'Cofactor', details: 'Zn²⁺ (metalloenzyme; avoid metal chelators such as EDTA)' },
            { parameter: 'Purity', details: '>95% by SDS-PAGE; CoA provided per lot' },
            { parameter: 'Documentation', details: 'CoA, Certificate of Origin, GMP compliance documentation available' }
        ],
        skuList: [
            { sku: '1 g', catNo: 'PB-05-001g', description: 'Recombinant CPB, GMP Grade, 1 g', price: '$580' }
        ],
        faqs: [
            { question: 'What distinguishes GMP Grade CPB from Sequencing Grade CPB?', answer: 'Both grades share the same recombinant enzyme and cleavage specificity. GMP Grade CPB is manufactured under GMP-compliant conditions with an expanded documentation package required for use in licensed biopharmaceutical manufacturing. Sequencing Grade CPB is optimized for analytical purity and performance in research and characterization settings.' },
            { question: 'Is GMP Grade rCPB animal-component free?', answer: 'Yes. Recombinant Carboxypeptidase B from Provis Biolabs is produced in a recombinant expression system without the use of animal-derived raw materials, supporting its use in GMP processes for injectable biologics.' },
            { question: 'Does GMP Grade rCPB require removal after use in processing?', answer: 'In GMP manufacturing processes, enzyme clearance should be evaluated as part of process validation. Standard downstream purification steps such as affinity capture and ion exchange chromatography typically provide adequate clearance of CPB from the product stream.' },
            { question: 'What buffer conditions are compatible with GMP rCPB?', answer: 'GMP rCPB is active across pH 7.5–9.0 and is compatible with standard biopharmaceutical processing buffers. Metal chelators such as EDTA and EGTA must be avoided as they inhibit this Zn²⁺-dependent enzyme.' },
            { question: 'Is documentation available to support reagent qualification in a GMP facility?', answer: 'Yes. Provis Biolabs provides a full GMP documentation package for PB-05, including Certificate of Analysis and Certificate of Origin.' },
            { question: 'How should GMP Grade rCPB be stored and handled to maintain activity?', answer: 'Store at −15°C to −25°C. Minimize freeze-thaw cycles by preparing single-use aliquots upon receipt.' }
        ]
    },
    {
        id: '16',

        slug: 'carboxypeptidase-b-sequencing',
        name: 'Recombinant Carboxypeptidase B, Sequencing Grade',
        category: 'reagent',
        grade: 'Sequencing Grade',
        tagline: 'High Specificity Exopeptidase',
        shortDescription: 'Sequencing grade rCPB for C-terminal peptide cleavage',
        description: 'Sequencing Grade rCPB is a highly purified exopeptidase that removes C-terminal lysine and arginine residues from polypeptides with high specificity. It is used in mAb analytical workflows to eliminate C-terminal heterogeneity artifacts that confound charge variant profiling by icIEF and CZE.',
        image: '/products/carboxypeptidase.webp',
        casNumber: '9025-24-5',
        keyFeatures: ['Sequencing-grade purity', 'Specifically removes C-terminal Lys and Arg residues from polypeptides', 'Eliminates C-terminal charge heterogeneity artifacts'],
        applications: ['Charge Variant Analysis', 'Intact Mass Spectrometry', 'Peptide Mapping', 'Biosimilar Comparability', 'Multi-Enzyme Workflows'],
        href: '/carboxypeptidase-b-sequencing',
        seoTitle: 'Recombinant Carboxypeptidase B Sequencing Grade for Mass Spectrometry | Provis Biolabs',
        seoDescription: 'Sequencing Grade rCPB (CAS 9025-24-5) for C-terminal peptide cleavage in mass spectrometry workflows. Request quote.',
        quickSpecs: {
            purity: '≥99% by SDS-PAGE',
            casNumber: '9025-24-5',
            storage: '-15°C to -25°C',
            formulation: 'Frozen Liquid'
        },
        overview: 'Sequencing Grade rCPB is a highly purified exopeptidase that removes C-terminal lysine and arginine residues from polypeptides with high specificity. It is used in mAb analytical workflows to eliminate C-terminal heterogeneity artifacts that confound charge variant profiling by icIEF and CZE. Its recombinant origin ensures consistent performance across characterization and comparability studies.',
        benefits: [
            'Sequencing-grade purity for reliable, reproducible analytical results',
            'Specifically removes C-terminal Lys and Arg residues from polypeptides',
            'Eliminates C-terminal charge heterogeneity artifacts in icIEF and CZE charge variant profiling',
            'Simplifies intact mass spectra and peptide maps by reducing isoform complexity',
            'Recombinant, animal-component free and is suitable for regulated analytical workflows',
            'Compatible with standard mAb digestion buffers used prior to mass spectrometry and charge variant analysis',
            'Available in three SKUs (1 mg, 5 mg, 10 mg) to support method development through routine QC use'
        ],
        specifications: [
            { parameter: 'Grade', details: 'Sequencing Grade' },
            { parameter: 'Enzyme Source', details: 'Recombinant; animal-component free' },
            { parameter: 'Specificity', details: 'Cleaves C-terminal Lys and Arg residues' },
            { parameter: 'Form', details: 'Frozen Liquid' },
            { parameter: 'Storage Condition', details: '−15°C to −25°C' },
            { parameter: 'Optimal pH', details: '7.5–9.0' },
            { parameter: 'Cofactor', details: 'Zn²⁺ (metalloenzyme; avoid metal chelators)' },
            { parameter: 'Compatibility', details: 'Standard digestion buffers; avoid EDTA/EGTA' },
            { parameter: 'Purity', details: 'Defined by SDS-PAGE and activity assay; Certificate of Analysis provided' }
        ],
        skuList: [
            { sku: '1 mg', catNo: 'PB-04-001mg', description: 'Recombinant CPB, Sequencing Grade, 1 mg', price: '$125' },
            { sku: '5 mg', catNo: 'PB-04-005mg', description: 'Recombinant CPB, Sequencing Grade, 5 mg', price: '$490' },
            { sku: '10 mg', catNo: 'PB-04-010mg', description: 'Recombinant CPB, Sequencing Grade, 10 mg', price: '$890' }
        ],
        faqs: [
            { question: 'What is the difference between Sequencing Grade and GMP Grade Carboxypeptidase B?', answer: 'Sequencing Grade CPB is optimized for analytical purity and performance in research and characterization workflows. GMP Grade CPB meets additional manufacturing documentation and quality system requirements for use as a processing reagent in GMP-regulated biopharmaceutical production.' },
            { question: 'Does rCPB remove only Lys and Arg or other C-terminal residues as well?', answer: 'Carboxypeptidase B is highly specific for basic residues (Lys and Arg) at the C-terminus. It does not cleave acidic, neutral or aromatic C-terminal residues.' },
            { question: 'How does rCPB treatment affect icIEF charge variant profiles?', answer: 'Pre-treatment with rCPB eliminates the K0, K1 and K2 isoforms (0, 1, or 2 C-terminal Lys residues) that appear as distinct acidic and main peaks in icIEF traces. The result is a simplified profile where charge variant peaks reflect authentic PTMs such as deamidation, glycoforms and succinimide intermediates.' },
            { question: 'What enzyme-to-substrate ratio is recommended for mAb digestion?', answer: 'A typical starting ratio is 1:50 to 1:100 (w/w, CPB:mAb) at 37°C for 30–60 minutes, though optimization based on specific antibody format and buffer conditions is recommended. Complete digestion should be confirmed by intact mass spectrometry or charge variant analysis.' },
            { question: 'Can EDTA be present in the digestion buffer?', answer: 'EDTA and other metal chelators should be avoided, as Carboxypeptidase B is a Zn²⁺-dependent metalloenzyme and chelation of the active-site zinc will inhibit enzymatic activity.' },
            { question: 'Is rCPB stable to freeze-thaw cycling?', answer: 'For optimal activity retention, minimize freeze-thaw cycles. Single-use aliquoting is recommended upon receipt.' }
        ]
    },
    {
        id: '10',

        slug: 'streptavidin',
        name: 'Streptavidin',
        category: 'reagent',
        grade: 'diagnostic Grade',
        tagline: 'Highest Biotin-Binding Capacity',
        shortDescription: 'High-affinity recombinant streptavidin binding protein',
        description: 'Streptavidin with strong biotin affinity for immunoassays, molecular diagnostics and affinity purification workflows',
        longDescription: 'Streptavidin forms one of the strongest non-covalent interactions known in biological systems due to its unparalleled affinity for biotin. Extensively purified and rigorously assayed, this homotetrameric protein exhibits negligible nonspecific binding, enabling robust and reproducible performance in sensitive molecular diagnostics, advanced immunoassays and precision affinity-purification techniques.',
        image: '/products/streptavidin.webp',
        casNumber: '9013-20-1',
        keyFeatures: ['Exceptional Biotin-Binding Affinity', 'High Purity >99% by SDS-PAGE', 'Minimal Non-Specific Background Binding', 'Compatible with ELISA, Lateral Flow & Blotting'],
        applications: ['Diagnostics', 'Molecular Biology', 'Affinity Purification', 'Microarray Development'],
        href: '/streptavidin',
        seoTitle: 'Buy Recombinant Streptavidin (CAS 9013-20-1) — Diagnostics & ELISA Grade | Provis Biolabs USA',
        seoDescription: 'Ultra-pure Streptavidin (CAS 9013-20-1) with exceptional biotin affinity for diagnostics, immunoassays and affinity purification. Low non-specific binding. Request quote.',
        quickSpecs: {
            purity: '>98%',
            casNumber: '9013-20-1',
            storage: '-20°C',
            formulation: 'Carrier-free'
        },
        cleavageImages: ['/products/cleavage/streptavidin.png']
    }, {
        id: '12',

        slug: 'enterokinase',
        name: 'Enterokinase',
        category: 'reagent',
        grade: 'Bioprocessing Grade',
        tagline: "Cleave with Precision, Purify with Confidence",
        shortDescription: 'Recombinant enzyme for tag cleavage',
        description: 'Enterokinase enables controlled cleavage of fusion tags for downstream purification and characterization workflows',
        longDescription: 'A remarkably precise biochemical tool, Enterokinase perfectly recognizes and cleaves downstream of the Asp-Asp-Asp-Asp-Lys sequence marker. Functioning as a supreme sequence-specific protease, it guarantees minimal extraneous digestion, resulting in pure native target proteins. Essential for removing affinity fusion tags, its bioprocess-tolerant properties cater dynamically to stringent laboratory upscaling tasks.',
        image: '/products/enterokinase.webp',
        casNumber: '9014-74-8',
        keyFeatures: ['Highly Specific Cleavage at DDDDK↓ Recognition Site', 'Minimal Non-Specific Proteolysis at Low Concentrations', 'Compatible with Multiple Fusion Protein Tag Systems', 'Stable Activity Across a Range of Buffer Conditions'],
        applications: ['Protein Purification', 'Recombinant Protein Workflows', 'Fusion Tag Removal'],
        href: '/enterokinase',
        seoTitle: 'Buy Recombinant Enterokinase (CAS 9014-74-8) — DDDDK Fusion Tag Removal | Provis Biolabs',
        seoDescription: 'Highly sequence-specific Enterokinase (CAS 9014-74-8) for fusion tag removal in recombinant protein purification. Bioprocess-compatible, high cleavage efficiency. Request quote.',
        quickSpecs: {
            purity: 'High Specificity',
            casNumber: '9014-74-8',
            storage: '-20°C',
            formulation: 'Liquid'
        },
        cleavageImages: ['/products/cleavage/enterokinasev2.png']
    },
    {
        id: '13',

        slug: 'kex2-protease',
        name: 'Kex2 Protease',
        category: 'reagent',
        grade: 'Bioprocessing Grade',
        tagline: "India's Only Manufacturer",
        shortDescription: 'Recombinant protease for pro-peptide cleavage',
        description: 'Kex2 Protease is a recombinant serine protease that specifically cleaves peptide bonds at the carboxyl side of Lys-Arg, Arg-Arg and Pro-Arg',
        longDescription: 'KeX2 Protease, also known as Kexin, is a highly specific calcium-dependent endopeptidase. Originally derived from Saccharomyces cerevisiae, our recombinant KeX2 is expressed in an optimized host system and purified to homogeneity without animal-derived components. It precisely cleaves after dibasic amino acid sequences, predominantly Lys-Arg and Arg-Arg, making it an essential processing formulation for the maturation of recombinant fusion proteins and precursor peptides in commercial biomanufacturing workflows.',
        image: '/products/kex2.webp',
        aof: true,
        casNumber: '77257-14-8',
        keyFeatures: ['Highly Specific Cleavage at Lys-Arg & Arg-Arg Sites', 'Optimised for Yeast Recombinant Expression Systems', 'Efficient Processing of Fusion Proteins & Peptides', 'High Specific Activity with Minimal Off-Target Cleavage'],
        applications: ['Biomanufacturing', 'Fusion Protein Cleavage', 'Peptide Processing', 'Biotherapeutics Development'],
        href: '/kex2-protease',
        seoTitle: 'Buy Kex2 Protease (CAS 77257-14-8) — Dibasic Site Cleavage for Insulin & Peptide Processing | Provis Biolabs',
        seoDescription: 'Recombinant animal-origin-free Kex2 Protease (CAS 77257-14-8). Highly specific dibasic site cleavage for biotherapeutic fusion protein maturation. Request a quote.',
        quickSpecs: {
            purity: '≥90% by SDS-PAGE',
            casNumber: '77257-14-8',
            storage: '-20°C',
            formulation: 'Liquid'
        },
        cleavageImages: ['/products/cleavage/kex2-proteasev2.png']
    },

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
        seoTitle: 'L-Asparaginase Bulk API (CAS 9015-68-3) | WHO-GMP Certified Manufacturer | Provis Biolabs USA',
        seoDescription: 'Source high-purity L-Asparaginase Bulk API (CAS 9015-68-3) manufactured under WHO-GMP and ICH guidelines for oncology therapeutics, clinical research, and formulation development. Request a quote today.',
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
        id: '4',

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
        seoTitle: 'Pegaspargase Bulk API Manufacturer | PEG L-Asparaginase | WHO-GMP | Provis Biolabs USA',
        seoDescription: 'Source high-purity Pegaspargase Bulk API (CAS 130167-69-0) PEGylated L-Asparaginase manufactured under WHO-GMP and ICH guidelines for ALL treatment workflows and formulation development. Request a quote today.',
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
        id: '5',

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
        seoTitle: 'Streptokinase Bulk API Supplier | Thrombolytic Enzyme Manufacturer | Provis Biolabs USA',
        seoDescription: 'Source high-purity Streptokinase Bulk API (CAS 9002-01-1) thrombolytic enzyme manufactured under WHO-GMP and ICH guidelines for cardiovascular therapeutics, clinical research and formulation development. Request a quote today.',
        quickSpecs: {
            purity: '≥99%',
            casNumber: '9002-01-1',
            storage: '2-8°C',
            formulation: 'Lyophilized'
        },
        dmfAvailable: true
    },
    {
        id: '6',

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
        seoTitle: 'Sodium Hyaluronate API (CAS 9067-32-7) | Ophthalmic & Orthopedic Grade | Provis Biolabs USA',
        seoDescription: 'Buy Sodium Hyaluronate API (CAS 9067-32-7) from Provis Biolabs. GMP-grade, controlled molecular weight, low endotoxin levels for orthopedic & ophthalmic formulations.',
        quickSpecs: {
            purity: 'Sterile Grade',
            casNumber: '9067-32-7',
            storage: 'Ambient',
            formulation: 'Powder/Liquid'
        },
        dmfAvailable: true
    }
];

export function getProductBySlug(slug: string): Product | undefined {
    return products.find(p => p.slug === slug);
}
