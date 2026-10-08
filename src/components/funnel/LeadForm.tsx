"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Send, Loader2, ShieldCheck } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

interface LeadFormProps {
  id?: string;
  className?: string;
}

export default function LeadForm({ id = "lead-form", className = "" }: LeadFormProps) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [businessType, setBusinessType] = useState("Technical / Contracting");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !whatsappNumber.trim()) {
      setErrorMsg("Please fill in your name and WhatsApp number.");
      return;
    }

    setSubmitting(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          businessType,
          whatsappNumber: whatsappNumber.trim(),
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to submit");
      }

      // Track event
      trackEvent("submit_lead", {
        business_type: businessType,
      });

      // Redirect to /thank-you
      router.push("/thank-you");
    } catch (err) {
      console.error(err);
      setErrorMsg("Something went wrong. Please reach out via WhatsApp directly.");
      setSubmitting(false);
    }
  };

  return (
    <div
      id={id}
      className={`relative p-6 sm:p-8 rounded-2xl border border-[#d4af37]/35 bg-[#090b10]/95 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.9)] ${className}`}
    >
      <div className="tactical-crosshair crosshair-tl" />
      <div className="tactical-crosshair crosshair-tr" />
      <div className="tactical-crosshair crosshair-bl" />
      <div className="tactical-crosshair crosshair-br" />

      <div className="text-center mb-6">
        <span className="font-syne text-[10px] font-black uppercase tracking-[0.25em] text-[#ffd700]">
          CONFIDENTIAL INTAKE // 3-POINT AUDIT
        </span>
        <h3 className="font-cinzel text-xl sm:text-2xl font-black text-white mt-1.5 mb-2">
          Find Out Where Your Current Site Is Losing Deals
        </h3>
        <p className="font-syne text-xs sm:text-sm text-[#94a3b8]">
          We&apos;ll inspect your mobile speed, WhatsApp conversion flow, and trust signals. No spam, no sales pressure.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {errorMsg && (
          <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs">
            {errorMsg}
          </div>
        )}

        <div>
          <label className="block text-xs font-syne font-bold text-zinc-300 mb-1.5">
            Your Name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Rahul Sharma"
            className="w-full px-4 py-3 rounded-xl border border-white/10 bg-black/60 text-white text-sm focus:outline-none focus:border-[#ffd700] transition-colors placeholder:text-zinc-600 font-sans"
          />
        </div>

        <div>
          <label className="block text-xs font-syne font-bold text-zinc-300 mb-1.5">
            Business Type
          </label>
          <select
            value={businessType}
            onChange={(e) => setBusinessType(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#090b10] text-white text-sm focus:outline-none focus:border-[#ffd700] transition-colors font-sans"
          >
            <option value="Technical / Contracting">Technical, Contracting & MEP</option>
            <option value="Real Estate">Real Estate Agency / Brokerage</option>
            <option value="Restaurant / Hospitality">Restaurant & Food Business</option>
            <option value="Trading / Commercial">Trading & Commercial B2B</option>
            <option value="Professional Services">Consulting & Professional Services</option>
            <option value="Other">Other Business</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-syne font-bold text-zinc-300 mb-1.5">
            WhatsApp Number <span className="text-red-400">*</span>
          </label>
          <input
            type="tel"
            required
            value={whatsappNumber}
            onChange={(e) => setWhatsappNumber(e.target.value)}
            placeholder="e.g. +971 50 123 4567 or +91 98765 43210"
            className="w-full px-4 py-3 rounded-xl border border-white/10 bg-black/60 text-white text-sm focus:outline-none focus:border-[#ffd700] transition-colors placeholder:text-zinc-600 font-sans"
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="w-full mt-3 py-4 px-6 rounded-xl font-syne font-black text-sm text-black bg-gradient-to-r from-[#b8860b] via-[#ffd700] to-[#f3ce5e] shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
        >
          {submitting ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              <span>Submitting Request...</span>
            </>
          ) : (
            <>
              <span>Get My Free 3-Point Audit</span>
              <Send size={15} />
            </>
          )}
        </button>

        <div className="flex items-center justify-center gap-1.5 text-[11px] text-[var(--f-fg-muted,#94a3b8)] mt-3">
          <ShieldCheck size={14} className="text-[var(--f-teal,#10b981)]" />
          <span>Strictly confidential. No automated marketing spam.</span>
        </div>
      </form>
    </div>
  );
}
