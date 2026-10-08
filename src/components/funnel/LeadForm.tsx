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
      className={`p-6 sm:p-8 rounded-2xl border border-[var(--f-gold,#d4af37)]/30 bg-[var(--f-bg-glass,#08090d)]/90 backdrop-blur-md shadow-2xl ${className}`}
    >
      <div className="text-center mb-6">
        <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--f-gold,#d4af37)]">
          Free 3-Point Website Audit
        </span>
        <h3 className="text-xl sm:text-2xl font-black text-white font-[var(--f-font-display,sans-serif)] mt-1 mb-2">
          Find Out Where Your Current Site Is Losing Deals
        </h3>
        <p className="text-xs sm:text-sm text-[var(--f-fg-muted,#94a3b8)]">
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
          <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
            Your Name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Rahul Sharma"
            className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/[0.03] text-white text-sm focus:outline-none focus:border-[var(--f-gold,#d4af37)] transition-colors placeholder:text-zinc-600"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
            Business Type
          </label>
          <select
            value={businessType}
            onChange={(e) => setBusinessType(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#0f121a] text-white text-sm focus:outline-none focus:border-[var(--f-gold,#d4af37)] transition-colors"
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
          <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
            WhatsApp Number <span className="text-red-400">*</span>
          </label>
          <input
            type="tel"
            required
            value={whatsappNumber}
            onChange={(e) => setWhatsappNumber(e.target.value)}
            placeholder="e.g. +971 50 123 4567 or +91 98765 43210"
            className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/[0.03] text-white text-sm focus:outline-none focus:border-[var(--f-gold,#d4af37)] transition-colors placeholder:text-zinc-600"
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="w-full mt-2 py-3.5 px-6 rounded-xl font-bold text-sm text-black bg-gradient-to-r from-[var(--f-gold,#d4af37)] to-[var(--f-gold-light,#f3ce5e)] shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.45)] hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
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
