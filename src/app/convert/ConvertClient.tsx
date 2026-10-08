"use client";

import React, { useEffect } from "react";
import { Check, ShieldCheck, ChevronDown, MessageSquare, ArrowRight } from "lucide-react";
import FunnelHeader from "@/components/funnel/FunnelHeader";
import FunnelFooter from "@/components/funnel/FunnelFooter";
import LeadForm from "@/components/funnel/LeadForm";
import { SITE_CONFIG, waLink } from "@/config/site";
import { trackEvent } from "@/lib/analytics";

interface PricingTier {
  name: string;
  badge?: string;
  price: string;
  currency: string;
  featured: boolean;
  useCase: string;
  bullets: string[];
}

const PRICING_TIERS: PricingTier[] = [
  {
    name: "Starter",
    price: "2,999",
    currency: "AED",
    featured: false,
    useCase: "Build trust and pass client checks",
    bullets: [
      "Pass enterprise & vendor pre-qualification reviews",
      "Establish a verified company profile that looks established",
      "Direct WhatsApp inquiry routing straight to your phone",
      "Sub-second mobile speed built on modern Next.js",
      "Fast 2-week delivery with unlimited revisions",
    ],
  },
  {
    name: "Growth",
    badge: "Most Popular",
    price: "5,499",
    currency: "AED",
    featured: true,
    useCase: "Showcase wins and qualify buyers",
    bullets: [
      "Showcase project wins, technical specs, and credentials",
      "Automated lead qualification pre-screening high-intent buyers",
      "Interactive case study deck that proves contractor competence",
      "Fast 2–3 week delivery with priority development",
      "30 days of post-handover engineering support",
    ],
  },
  {
    name: "Authority",
    price: "8,999",
    currency: "AED",
    featured: false,
    useCase: "Dominate your market, bilingual, full automation",
    bullets: [
      "Bilingual English & Arabic architecture for total Gulf market reach",
      "Enterprise workflow integration & CRM lead routing",
      "Procurement compliance hub for government & master developers",
      "Advanced technical SEO & corporate schema markup",
      "60 days of dedicated engineering & conversion support",
    ],
  },
];

const FAQS = [
  {
    q: "Can you really deliver remotely from India for our Gulf business?",
    a: "Yes — 100% remote delivery with direct WhatsApp and video check-ins. We have already delivered our first international project in Dubai this way. Remote engineering allows us to maintain elite standards without charging 30,000 AED Dubai agency retainers.",
  },
  {
    q: "What is your delivery guarantee?",
    a: SITE_CONFIG.guaranteeText,
  },
  {
    q: "How does the payment structure work?",
    a: "50% upfront to initiate architecture and milestone delivery, and 50% only after you review and approve the completed site before final DNS handover. No hidden fees.",
  },
  {
    q: "How long does delivery take?",
    a: "Starter delivers in 2 weeks. Growth delivers in 2 to 3 weeks. Authority delivers in 3 to 4 weeks. If we are late on the agreed deadline, your Rapid Delivery fee is refunded in full.",
  },
  {
    q: "Do I need to prepare content or technical assets beforehand?",
    a: "Just your company logo, a list of your core services, and photos of past projects or equipment. We guide you through the rest and draft the conversion copy for you.",
  },
];

export default function ConvertClient() {
  useEffect(() => {
    trackEvent("view_pricing");
  }, []);

  const handleAuditClick = () => {
    const el = document.getElementById("lead-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWaPlanClick = (planName: string) => {
    trackEvent("click_whatsapp", { plan: planName });
  };

  return (
    <>
      <FunnelHeader />

      <main className="min-h-screen bg-[var(--f-bg,#08090d)] text-[var(--f-fg,#f8fafc)]">
        {/* Ambient background glow */}
        <div
          aria-hidden="true"
          className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.06),transparent_70%)] pointer-events-none z-0"
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16">
          
          {/* SECTION 1: THE REVEAL */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--f-teal-dim,rgba(16,185,129,0.12))] border border-[var(--f-teal,#10b981)]/30 text-[var(--f-teal,#10b981)] text-xs font-semibold uppercase tracking-wider mb-4">
              The HESICS Difference · Zero Fluff
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-[var(--f-font-display,sans-serif)] leading-tight mb-4">
              Every GrowthSite Includes Built-In WhatsApp Lead Routing
            </h1>
            <p className="text-sm sm:text-base text-[var(--f-fg-muted,#94a3b8)] leading-relaxed">
              Traditional web designers build pretty brochures that sit idle. We engineer a conversion system that captures buyer intent, qualifies prospects, and routes high-intent inquiries straight to your phone.
            </p>
          </div>

          {/* SECTION 2: LOW-FRICTION PRIMARY CTA (Above Pricing) */}
          <div className="max-w-xl mx-auto mb-14 text-center p-6 rounded-2xl border border-[var(--f-teal,#10b981)]/30 bg-[var(--f-teal-dim,rgba(16,185,129,0.04))]">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--f-teal,#10b981)]">
              Not Ready To Pick A Plan Yet?
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white mt-1 mb-2">
              Get a Free 3-Point Website Audit
            </h2>
            <p className="text-xs sm:text-sm text-[var(--f-fg-muted,#94a3b8)] mb-5">
              We&apos;ll inspect your current mobile speed, WhatsApp conversion flow, and trust signals — free of charge.
            </p>
            <button
              type="button"
              onClick={handleAuditClick}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-[var(--f-teal,#10b981)] hover:bg-[var(--f-teal,#10b981)]/90 text-black shadow-lg hover:scale-[1.02] transition-all cursor-pointer"
            >
              <span>Get My Free 3-Point Audit</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* SECTION 3: PRICING (Rewritten as USE CASES, no page counts) */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--f-gold,#d4af37)]">
                Transparent Investment
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white font-[var(--f-font-display,sans-serif)] mt-1">
                Predictable Packages. Guaranteed Delivery.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {PRICING_TIERS.map((tier) => (
                <div
                  key={tier.name}
                  className={`relative p-6 sm:p-7 rounded-2xl flex flex-col justify-between transition-all ${
                    tier.featured
                      ? "border-2 border-[var(--f-gold,#d4af37)] bg-gradient-to-b from-[var(--f-gold-dim,rgba(212,175,55,0.08))] to-transparent shadow-[0_0_35px_rgba(212,175,55,0.15)] scale-[1.02]"
                      : "border border-white/10 bg-white/[0.02]"
                  }`}
                >
                  {tier.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[var(--f-gold,#d4af37)] text-black text-[10px] font-black uppercase tracking-wider shadow-md">
                      {tier.badge}
                    </div>
                  )}

                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{tier.name}</h3>
                    <p className="text-xs text-[var(--f-gold,#d4af37)] font-medium mb-4 min-h-[32px]">
                      &quot;{tier.useCase}&quot;
                    </p>

                    <div className="flex items-baseline gap-1 mb-6">
                      <span className="text-xs text-[var(--f-fg-muted,#94a3b8)] font-semibold">{tier.currency}</span>
                      <span className="text-3xl sm:text-4xl font-black text-white font-[var(--f-font-display,sans-serif)]">
                        {tier.price}
                      </span>
                      <span className="text-xs text-[var(--f-fg-muted,#94a3b8)]">/ one-time</span>
                    </div>

                    <div className="border-t border-white/10 pt-4 mb-6">
                      <div className="text-[11px] uppercase tracking-wider font-bold text-zinc-400 mb-3">
                        Use Cases & Outcomes:
                      </div>
                      <ul className="space-y-2.5">
                        {tier.bullets.map((b, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300 leading-snug">
                            <Check size={14} className="text-[var(--f-teal,#10b981)] flex-shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <a
                    href={waLink(`Hi Sheikh, I'm interested in the ${tier.name} GrowthSite package (AED ${tier.price}).`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleWaPlanClick(tier.name)}
                    className={`w-full py-3 px-4 rounded-xl text-xs font-bold text-center transition-all flex items-center justify-center gap-1.5 ${
                      tier.featured
                        ? "bg-gradient-to-r from-[var(--f-gold,#d4af37)] to-[var(--f-gold-light,#f3ce5e)] text-black shadow-md hover:scale-[1.01]"
                        : "border border-white/20 bg-white/5 text-white hover:border-white/40"
                    }`}
                  >
                    <span>Claim This Package</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 4: SINGLE STANDARDIZED GUARANTEE */}
          <div className="mb-16 p-6 sm:p-8 rounded-2xl border border-[var(--f-teal,#10b981)]/30 bg-[var(--f-teal-dim,rgba(16,185,129,0.04))] text-center max-w-2xl mx-auto">
            <div className="w-12 h-12 rounded-full bg-[var(--f-teal,#10b981)]/20 text-[var(--f-teal,#10b981)] flex items-center justify-center mx-auto mb-3">
              <ShieldCheck size={26} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 font-[var(--f-font-display,sans-serif)]">
              The HESICS Delivery Guarantee
            </h3>
            <p className="text-sm sm:text-base text-zinc-300 font-medium leading-relaxed max-w-lg mx-auto">
              {SITE_CONFIG.guaranteeText}
            </p>
          </div>

          {/* SECTION 5: 5 FAQS */}
          <div className="mb-16 max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--f-gold,#d4af37)]">
                Frequently Asked Questions
              </span>
              <h2 className="text-2xl font-bold text-white mt-1">
                Clear Answers Before You Begin
              </h2>
            </div>

            <div className="space-y-3">
              {FAQS.map((faq, i) => (
                <details
                  key={i}
                  className="group p-4 sm:p-5 rounded-xl border border-white/10 bg-white/[0.02] cursor-pointer"
                >
                  <summary className="flex items-center justify-between gap-3 text-sm sm:text-base font-bold text-white list-none">
                    <span>{faq.q}</span>
                    <ChevronDown size={18} className="text-[var(--f-gold,#d4af37)] group-open:rotate-180 transition-transform flex-shrink-0" />
                  </summary>
                  <p className="mt-3 text-xs sm:text-sm text-[var(--f-fg-muted,#94a3b8)] leading-relaxed">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>

          {/* SECTION 6: SCARCITY LINE FROM CONFIG */}
          <div className="mb-12 max-w-xl mx-auto text-center p-4 rounded-xl border border-red-500/20 bg-red-500/[0.04]">
            <p className="text-xs sm:text-sm text-zinc-300 font-medium">
              We take a maximum of <strong className="text-red-400">3 clients per month</strong> to ensure full engineering attention on every project.{" "}
              <strong className="text-[var(--f-gold,#d4af37)]">{SITE_CONFIG.slotsRemaining} slots remaining this month.</strong>
            </p>
          </div>

          {/* SECTION 7: LEAD FORM + WHATSAPP */}
          <div className="max-w-xl mx-auto mb-16">
            <LeadForm id="lead-form" />

            {/* Direct WhatsApp Alternative */}
            <div className="mt-6 text-center">
              <p className="text-xs text-[var(--f-fg-muted,#94a3b8)] mb-3">
                Prefer to discuss directly right now?
              </p>
              <a
                href={waLink("Hi Sheikh, I'd like to discuss building a GrowthSite for my business directly.")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("click_whatsapp", { location: "convert_bottom" })}
                className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-xs font-bold bg-[var(--f-whatsapp,#22c55e)] hover:bg-[var(--f-whatsapp-dark,#15803d)] text-white shadow-lg transition-all"
              >
                <MessageSquare size={15} />
                <span>Message Sheikh on WhatsApp Directly</span>
              </a>
            </div>
          </div>

        </div>
      </main>

      <FunnelFooter />
    </>
  );
}
