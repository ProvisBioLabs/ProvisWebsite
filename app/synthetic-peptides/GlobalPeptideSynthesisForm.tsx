"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
    Send,
    Loader2,
    Plus,
    Trash2,
    FlaskConical,
    Beaker,
    ChevronDown,
    CheckCircle2,
    AlertCircle,
    Atom,
} from "lucide-react";

interface PeptideEntry {
    id: number;
    peptideName: string;
    quantity: string;
    quantityUnit: string;
    purity: string;
    sequence: string;
    nTerminal: string;
    cTerminal: string;
    otherModifications: string;
    disulfideBridges: string;
    solubilityTest: string[];
    solubilityOther: string;
    remarks: string;
}

const createEmptyPeptide = (id: number): PeptideEntry => ({
    id,
    peptideName: "",
    quantity: "",
    quantityUnit: "mg",
    purity: ">75%",
    sequence: "",
    nTerminal: "",
    cTerminal: "",
    otherModifications: "",
    disulfideBridges: "",
    solubilityTest: [],
    solubilityOther: "",
    remarks: "",
});

const purityOptions = [">75%", ">80%", ">85%", ">90%", ">95%", ">98%", "Crude", "Desalted"];

const commonModifications = [
    "Acetylation (Ac-)",
    "Amidation (-NH₂)",
    "Biotinylation",
    "FITC Labeling",
    "Phosphorylation",
    "Methylation",
    "PEGylation",
    "D-amino acids",
    "Cyclic Peptides",
    "Fatty Acid Conjugation",
    "DOTA/NOTA Chelation",
    "Click Chemistry (Azide/Alkyne)",
];

const fade = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
});

export default function GlobalPeptideSynthesisForm() {
    const [applicantName, setApplicantName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [organization, setOrganization] = useState("");
    const [country, setCountry] = useState("Select Country");
    const [peptides, setPeptides] = useState<PeptideEntry[]>([createEmptyPeptide(1)]);
    const [status, setStatus] = useState<"" | "success" | "error">("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const submittingRef = useRef(false);
    const nextId = useRef(2);

    const addPeptide = () => {
        setPeptides((prev) => [...prev, createEmptyPeptide(nextId.current++)]);
    };

    const removePeptide = (id: number) => {
        setPeptides((prev) => prev.filter((p) => p.id !== id));
    };

    const updatePeptide = (id: number, field: keyof PeptideEntry, value: any) => {
        setPeptides((prev) =>
            prev.map((p) => (p.id === id ? { ...p, [field]: value } : p))
        );
    };

    const toggleSolubility = (id: number, val: string) => {
        setPeptides((prev) =>
            prev.map((p) => {
                if (p.id !== id) return p;
                const arr = p.solubilityTest.includes(val)
                    ? p.solubilityTest.filter((s) => s !== val)
                    : [...p.solubilityTest, val];
                return { ...p, solubilityTest: arr };
            })
        );
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (submittingRef.current) return;
        submittingRef.current = true;
        setIsSubmitting(true);
        setStatus("");

        try {
            const peptideDetails = peptides
                .map(
                    (p, i) =>
                        `--- Peptide ${i + 1} ---\n` +
                        `Name: ${p.peptideName}\n` +
                        `Quantity: ${p.quantity} ${p.quantityUnit}\n` +
                        `Purity: ${p.purity}\n` +
                        `Sequence (N'-C'): ${p.sequence}\n` +
                        `N-terminal: ${p.nTerminal || "None"}\n` +
                        `C-terminal: ${p.cTerminal || "None"}\n` +
                        `Other modifications: ${p.otherModifications || "None"}\n` +
                        `Disulfide bridges: ${p.disulfideBridges || "None"}\n` +
                        `Solubility test: ${p.solubilityTest.length > 0 ? p.solubilityTest.join(", ") : "None"}${p.solubilityOther ? ` (Other: ${p.solubilityOther})` : ""}\n` +
                        `Remarks: ${p.remarks || "None"}`
                )
                .join("\n\n");

            const nameParts = applicantName.trim().split(/\s+/);
            const data = {
                firstName: nameParts[0] || applicantName,
                lastName: nameParts.slice(1).join(" ") || ".",
                email,
                phone,
                interest: "Custom Peptide Synthesis",
                message: `Organization: ${organization}\nCountry: ${country}\n\n${peptideDetails}`,
            };

            // Routes to global /api/contact — sends to customersupport@ and global Google Sheet
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (result.success) {
                setStatus("success");
                setApplicantName("");
                setEmail("");
                setPhone("");
                setOrganization("");
                setCountry("Select Country");
                setPeptides([createEmptyPeptide(1)]);
                nextId.current = 2;
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        } finally {
            setIsSubmitting(false);
            submittingRef.current = false;
            setTimeout(() => setStatus(""), 8000);
        }
    };

    return (
        <section className="py-20 bg-gradient-to-b from-[#F8FAFC] to-white relative" id="peptide-request">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-[#F26522]/5 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1E3A8A]/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div {...fade()} className="text-center mb-14">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFF7F2] border border-[#F26522]/20 text-[#F26522] text-xs font-bold tracking-widest uppercase mb-6">
                        <FlaskConical className="w-3.5 h-3.5" /> Request a Quote
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E3A8A] mb-5 leading-tight">
                        Custom Peptide Synthesis Request
                    </h2>
                    <p className="text-[#64748B] text-lg max-w-2xl mx-auto leading-relaxed">
                        Complete the form below for a detailed quotation. Our peptide synthesis experts will review your requirements and respond within 24 hours.
                    </p>
                </motion.div>

                {/* Info Cards */}
                <motion.div {...fade(0.1)} className="grid sm:grid-cols-3 gap-4 mb-12">
                    {[
                        { icon: <Beaker className="w-5 h-5" />, title: "Flexible Quantities", desc: "From mg to kg scale" },
                        { icon: <Atom className="w-5 h-5" />, title: "300+ Modifications", desc: "Phosphorylation, PEGylation & more" },
                        { icon: <CheckCircle2 className="w-5 h-5" />, title: "Guaranteed Quality", desc: "MS & HPLC analysis included" },
                    ].map((card) => (
                        <div
                            key={card.title}
                            className="flex items-start gap-3 p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm hover:shadow-md hover:border-[#F26522]/30 transition-all duration-300"
                        >
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F26522] to-[#FF8C55] text-white flex items-center justify-center flex-shrink-0">
                                {card.icon}
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-[#1E3A8A]">{card.title}</h4>
                                <p className="text-xs text-[#64748B] mt-0.5">{card.desc}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Form */}
                <motion.form
                    {...fade(0.15)}
                    onSubmit={handleSubmit}
                    className="bg-white rounded-3xl border border-[#E2E8F0] shadow-[0_20px_60px_rgba(30,58,138,0.06)] overflow-hidden"
                >
                    {/* Status Alerts */}
                    {status === "success" && (
                        <div className="mx-6 mt-6 p-4 bg-green-50 text-green-700 rounded-xl border border-green-200 font-sans shadow-sm flex items-center gap-3">
                            <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                            <div>
                                <strong>Request Submitted!</strong> Our peptide synthesis team will review your requirements and respond within 24 hours.
                            </div>
                        </div>
                    )}
                    {status === "error" && (
                        <div className="mx-6 mt-6 p-4 bg-red-50 text-red-700 rounded-xl border border-red-200 font-sans shadow-sm flex items-center gap-3">
                            <AlertCircle className="w-5 h-5 flex-shrink-0" />
                            <div>
                                <strong>Submission failed.</strong> Please try again or email us at customersupport@provisbiolabs.com.
                            </div>
                        </div>
                    )}

                    {/* ─── Contact Information ─── */}
                    <div className="p-6 sm:p-8 lg:p-10 border-b border-[#E2E8F0]">
                        <h3 className="text-lg font-bold text-[#1E3A8A] mb-6 flex items-center gap-2">
                            <span className="w-7 h-7 rounded-lg bg-[#1E3A8A] text-white text-xs font-black flex items-center justify-center">1</span>
                            Contact Information
                        </h3>

                        <div className="grid sm:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-[13px] font-bold text-[#1E3A8A] mb-2">Full Name *</label>
                                <input
                                    type="text"
                                    required
                                    value={applicantName}
                                    onChange={(e) => setApplicantName(e.target.value)}
                                    placeholder="Full Name"
                                    className="w-full bg-[#f8fafc] border border-[#e2e8f0] rounded-xl px-4 py-3 text-[#0f172a] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#F26522]/20 focus:border-[#F26522] transition-all text-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-[13px] font-bold text-[#1E3A8A] mb-2">Email Address *</label>
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="your@email.com"
                                    className="w-full bg-[#f8fafc] border border-[#e2e8f0] rounded-xl px-4 py-3 text-[#0f172a] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#F26522]/20 focus:border-[#F26522] transition-all text-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-[13px] font-bold text-[#1E3A8A] mb-2">Organization Name *</label>
                                <input
                                    type="text"
                                    required
                                    value={organization}
                                    onChange={(e) => setOrganization(e.target.value)}
                                    placeholder="Company or Institution"
                                    className="w-full bg-[#f8fafc] border border-[#e2e8f0] rounded-xl px-4 py-3 text-[#0f172a] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#F26522]/20 focus:border-[#F26522] transition-all text-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-[13px] font-bold text-[#1E3A8A] mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    placeholder="+1 (xxx) xxx-xxxx"
                                    className="w-full bg-[#f8fafc] border border-[#e2e8f0] rounded-xl px-4 py-3 text-[#0f172a] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#F26522]/20 focus:border-[#F26522] transition-all text-sm"
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <label className="block text-[13px] font-bold text-[#1E3A8A] mb-2">Country or Region *</label>
                                <div className="relative">
                                    <select
                                        required
                                        value={country}
                                        onChange={(e) => setCountry(e.target.value)}
                                        className="w-full bg-[#f8fafc] border border-[#e2e8f0] rounded-xl px-4 py-3 text-[#0f172a] focus:outline-none focus:ring-2 focus:ring-[#F26522]/20 focus:border-[#F26522] transition-all text-sm appearance-none pr-10"
                                    >
                                        <option value="Select Country" disabled>Select Country</option>
                                        <option>United States</option>
                                        <option>United Kingdom</option>
                                        <option>Germany</option>
                                        <option>France</option>
                                        <option>Netherlands</option>
                                        <option>Switzerland</option>
                                        <option>Japan</option>
                                        <option>South Korea</option>
                                        <option>Singapore</option>
                                        <option>Australia</option>
                                        <option>Canada</option>
                                        <option>India</option>
                                        <option>China</option>
                                        <option>Brazil</option>
                                        <option>Other</option>
                                    </select>
                                    <ChevronDown className="w-4 h-4 text-[#94a3b8] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ─── Peptide Entries ─── */}
                    <div className="p-6 sm:p-8 lg:p-10 border-b border-[#E2E8F0]">
                        <h3 className="text-lg font-bold text-[#1E3A8A] mb-6 flex items-center gap-2">
                            <span className="w-7 h-7 rounded-lg bg-[#F26522] text-white text-xs font-black flex items-center justify-center">2</span>
                            Peptide Details
                        </h3>

                        <div className="space-y-8">
                            {peptides.map((pep, idx) => (
                                <div key={pep.id} className="relative bg-[#FAFBFC] border border-[#E2E8F0] rounded-2xl p-5 sm:p-6">
                                    <div className="flex items-center justify-between mb-5">
                                        <div className="flex items-center gap-3">
                                            <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] text-white text-xs font-black flex items-center justify-center">
                                                {idx + 1}
                                            </span>
                                            <h4 className="text-sm font-bold text-[#1E3A8A] uppercase tracking-wider">Peptide {idx + 1}</h4>
                                        </div>
                                        {peptides.length > 1 && (
                                            <button
                                                type="button"
                                                onClick={() => removePeptide(pep.id)}
                                                className="text-red-400 hover:text-red-600 transition-colors p-1.5 rounded-lg hover:bg-red-50"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        )}
                                    </div>

                                    {/* Row 1: Name, Quantity, Purity */}
                                    <div className="grid sm:grid-cols-3 gap-4 mb-4">
                                        <div>
                                            <label className="block text-[12px] font-bold text-[#475569] mb-1.5 uppercase tracking-wider">Peptide Name *</label>
                                            <input type="text" required value={pep.peptideName}
                                                onChange={(e) => updatePeptide(pep.id, "peptideName", e.target.value)}
                                                placeholder="e.g. GLP-1 Analog"
                                                className="w-full bg-white border border-[#e2e8f0] rounded-xl px-3.5 py-2.5 text-[#0f172a] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#F26522]/20 focus:border-[#F26522] transition-all text-sm"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-[12px] font-bold text-[#475569] mb-1.5 uppercase tracking-wider">Quantity *</label>
                                            <div className="flex gap-2">
                                                <input type="text" required value={pep.quantity}
                                                    onChange={(e) => updatePeptide(pep.id, "quantity", e.target.value)}
                                                    placeholder="e.g. 50"
                                                    className="flex-1 bg-white border border-[#e2e8f0] rounded-xl px-3.5 py-2.5 text-[#0f172a] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#F26522]/20 focus:border-[#F26522] transition-all text-sm"
                                                />
                                                <select value={pep.quantityUnit} onChange={(e) => updatePeptide(pep.id, "quantityUnit", e.target.value)}
                                                    className="w-20 bg-white border border-[#e2e8f0] rounded-xl px-2 py-2.5 text-[#0f172a] focus:outline-none focus:ring-2 focus:ring-[#F26522]/20 focus:border-[#F26522] text-sm">
                                                    <option value="mg">mg</option>
                                                    <option value="g">g</option>
                                                    <option value="kg">kg</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-[12px] font-bold text-[#475569] mb-1.5 uppercase tracking-wider">Purity *</label>
                                            <div className="relative">
                                                <select value={pep.purity} onChange={(e) => updatePeptide(pep.id, "purity", e.target.value)}
                                                    className="w-full bg-white border border-[#e2e8f0] rounded-xl px-3.5 py-2.5 text-[#0f172a] focus:outline-none focus:ring-2 focus:ring-[#F26522]/20 focus:border-[#F26522] transition-all text-sm appearance-none pr-8">
                                                    {purityOptions.map((p) => <option key={p} value={p}>{p}</option>)}
                                                </select>
                                                <ChevronDown className="w-3.5 h-3.5 text-[#94a3b8] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Sequence */}
                                    <div className="mb-4">
                                        <label className="block text-[12px] font-bold text-[#475569] mb-1.5 uppercase tracking-wider">Sequence (N&apos;→C&apos;) *</label>
                                        <textarea required rows={3} value={pep.sequence}
                                            onChange={(e) => updatePeptide(pep.id, "sequence", e.target.value)}
                                            placeholder="Enter amino acid sequence using one-letter or three-letter codes..."
                                            className="w-full bg-white border border-[#e2e8f0] rounded-xl px-3.5 py-2.5 text-[#0f172a] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#F26522]/20 focus:border-[#F26522] transition-all text-sm font-mono resize-y"
                                        />
                                    </div>

                                    {/* Terminal Modifications */}
                                    <div className="grid sm:grid-cols-2 gap-4 mb-4">
                                        <div>
                                            <label className="block text-[12px] font-bold text-[#475569] mb-1.5 uppercase tracking-wider">N-Terminal Modification</label>
                                            <input type="text" value={pep.nTerminal} onChange={(e) => updatePeptide(pep.id, "nTerminal", e.target.value)}
                                                placeholder="e.g. Ac- (Acetylation)"
                                                className="w-full bg-white border border-[#e2e8f0] rounded-xl px-3.5 py-2.5 text-[#0f172a] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#F26522]/20 focus:border-[#F26522] transition-all text-sm"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-[12px] font-bold text-[#475569] mb-1.5 uppercase tracking-wider">C-Terminal Modification</label>
                                            <input type="text" value={pep.cTerminal} onChange={(e) => updatePeptide(pep.id, "cTerminal", e.target.value)}
                                                placeholder="e.g. -NH₂ (Amidation)"
                                                className="w-full bg-white border border-[#e2e8f0] rounded-xl px-3.5 py-2.5 text-[#0f172a] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#F26522]/20 focus:border-[#F26522] transition-all text-sm"
                                            />
                                        </div>
                                    </div>

                                    {/* Other Modifications & Disulfide */}
                                    <div className="grid sm:grid-cols-2 gap-4 mb-4">
                                        <div>
                                            <label className="block text-[12px] font-bold text-[#475569] mb-1.5 uppercase tracking-wider">Other Modifications</label>
                                            <input type="text" value={pep.otherModifications} onChange={(e) => updatePeptide(pep.id, "otherModifications", e.target.value)}
                                                placeholder="e.g. Phospho-Ser(3), PEG-Lys(8)"
                                                className="w-full bg-white border border-[#e2e8f0] rounded-xl px-3.5 py-2.5 text-[#0f172a] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#F26522]/20 focus:border-[#F26522] transition-all text-sm"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-[12px] font-bold text-[#475569] mb-1.5 uppercase tracking-wider">Disulfide Bridges</label>
                                            <input type="text" value={pep.disulfideBridges} onChange={(e) => updatePeptide(pep.id, "disulfideBridges", e.target.value)}
                                                placeholder="e.g. N2-9 (2nd-9th from N-terminal)"
                                                className="w-full bg-white border border-[#e2e8f0] rounded-xl px-3.5 py-2.5 text-[#0f172a] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#F26522]/20 focus:border-[#F26522] transition-all text-sm"
                                            />
                                        </div>
                                    </div>

                                    {/* Solubility Test */}
                                    <div className="mb-4">
                                        <label className="block text-[12px] font-bold text-[#475569] mb-2 uppercase tracking-wider">Solubility Test</label>
                                        <div className="flex flex-wrap gap-2">
                                            {["DMSO/DMF", "H₂O", "Other Solvents"].map((sol) => (
                                                <button key={sol} type="button" onClick={() => toggleSolubility(pep.id, sol)}
                                                    className={`px-4 py-2 rounded-lg text-xs font-bold border transition-all duration-200 ${pep.solubilityTest.includes(sol) ? "bg-[#F26522] text-white border-[#F26522] shadow-md" : "bg-white text-[#475569] border-[#e2e8f0] hover:border-[#F26522]/40"}`}>
                                                    {sol}
                                                </button>
                                            ))}
                                        </div>
                                        {pep.solubilityTest.includes("Other Solvents") && (
                                            <input type="text" value={pep.solubilityOther}
                                                onChange={(e) => updatePeptide(pep.id, "solubilityOther", e.target.value)}
                                                placeholder="Please specify solvent(s)"
                                                className="mt-2 w-full bg-white border border-[#e2e8f0] rounded-xl px-3.5 py-2.5 text-[#0f172a] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#F26522]/20 focus:border-[#F26522] transition-all text-sm"
                                            />
                                        )}
                                    </div>

                                    {/* Remarks */}
                                    <div>
                                        <label className="block text-[12px] font-bold text-[#475569] mb-1.5 uppercase tracking-wider">Remarks</label>
                                        <textarea rows={2} value={pep.remarks} onChange={(e) => updatePeptide(pep.id, "remarks", e.target.value)}
                                            placeholder="Any special instructions, labeling requirements, or additional details..."
                                            className="w-full bg-white border border-[#e2e8f0] rounded-xl px-3.5 py-2.5 text-[#0f172a] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#F26522]/20 focus:border-[#F26522] transition-all text-sm resize-y"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button type="button" onClick={addPeptide}
                            className="mt-5 w-full flex items-center justify-center gap-2 py-3.5 rounded-xl border-2 border-dashed border-[#E2E8F0] text-[#64748B] hover:border-[#F26522] hover:text-[#F26522] hover:bg-[#FFF7F2] transition-all duration-300 text-sm font-bold">
                            <Plus className="w-4 h-4" /> Add Another Peptide
                        </button>
                    </div>

                    {/* Available Modifications Reference */}
                    <div className="p-6 sm:p-8 lg:p-10 border-b border-[#E2E8F0] bg-[#FAFBFC]">
                        <h3 className="text-lg font-bold text-[#1E3A8A] mb-4 flex items-center gap-2">
                            <span className="w-7 h-7 rounded-lg bg-[#1E3A8A]/10 text-[#1E3A8A] text-xs font-black flex items-center justify-center">i</span>
                            Available Modifications
                        </h3>
                        <p className="text-[#64748B] text-sm mb-4">We support 300+ peptide modifications. Commonly requested:</p>
                        <div className="flex flex-wrap gap-2">
                            {commonModifications.map((mod) => (
                                <span key={mod} className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white border border-[#E2E8F0] text-[#475569] hover:border-[#F26522]/30 hover:text-[#F26522] transition-colors cursor-default">{mod}</span>
                            ))}
                        </div>
                        <div className="mt-5 p-4 bg-[#EFF6FF] rounded-xl border border-[#BFDBFE]">
                            <p className="text-xs text-[#1E3A8A] leading-relaxed">
                                <strong>Notes:</strong> (1) Amino acids are synthesized in L-configuration by default. (2) Disulfide bridge format: <code className="bg-white/70 px-1.5 py-0.5 rounded text-[#F26522] font-mono">N2-9</code> = bridge between the 2nd and 9th residues. (3) For complex modifications, describe them in the remarks field.
                            </p>
                        </div>
                    </div>

                    {/* Submit */}
                    <div className="p-6 sm:p-8 lg:p-10">
                        <button type="submit" disabled={isSubmitting}
                            className={`group w-full bg-gradient-to-r from-[#F26522] to-[#FF8C55] hover:from-[#d95a1e] hover:to-[#F26522] text-white font-bold text-base rounded-2xl py-4 transition-all flex items-center justify-center gap-2.5 shadow-lg shadow-[#F26522]/20 hover:shadow-xl hover:shadow-[#F26522]/30 hover:-translate-y-0.5 ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}>
                            {isSubmitting ? (
                                <>Submitting Request... <Loader2 className="w-5 h-5 animate-spin" /></>
                            ) : (
                                <>Submit Peptide Synthesis Request <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" /></>
                            )}
                        </button>
                        <p className="text-center text-xs text-[#94a3b8] mt-4">
                            By submitting, you agree to our <a href="/privacy-policy" className="text-[#F26522] hover:underline">Privacy Policy</a>. Our team will respond within 1 business day.
                        </p>
                    </div>
                </motion.form>
            </div>
        </section>
    );
}
