"use client";

import React, { useEffect } from "react";
import { Check, ShieldCheck, ChevronDown, MessageSquare, ArrowRight, Sparkles } from "lucide-react";
import FunnelHeader from "@/components/funnel/FunnelHeader";
import FunnelFooter from "@/components/funnel/FunnelFooter";
import LeadForm from "@/components/funnel/LeadForm";
import ParallaxBackground from "@/components/funnel/ParallaxBackground";
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
    badge: "Most Selected",
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
    <div className="relative min-h-screen bg-[#050608] text-[#f8fafc] overflow-x-hidden selection:bg-[#d4af37] selection:text-black">
      {/* Scroll-Reactive Parallax Mastermind Background */}
      <ParallaxBackground imageSrc="/mastermind-vault.jpg" overlayOpacity={0.88} />

      <FunnelHeader />

      <main className="relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-20">
          
          {/* SECTION 1: THE REVEAL */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/80 border border-[#10b981]/40 text-[#10b981] text-[11px] font-syne font-bold uppercase tracking-[0.2em] mb-5 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-ping" />
              <span>Level 3 BOFU // Mastermind Reveal</span>
            </div>
            <h1 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-5 drop-shadow-[0_4px_25px_rgba(0,0,0,0.9)]">
              Every GrowthSite Includes Built-In{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffd700] via-[#f3ce5e] to-[#d4af37]">
                WhatsApp Lead Routing
              </span>
            </h1>
            <p className="font-syne text-sm sm:text-base text-[#94a3b8] leading-relaxed">
              Traditional web designers build pretty brochures that sit idle. We engineer a conversion system that captures buyer intent, qualifies prospects, and routes high-intent inquiries straight to your phone.
            </p>
          </div>

          {/* SECTION 2: LOW-FRICTION PRIMARY CTA (Above Pricing) */}
          <div className="max-w-xl mx-auto mb-16 text-center p-6 sm:p-7 rounded-2xl border border-[#10b981]/30 bg-[#090b10]/90 backdrop-blur-md shadow-[0_10px_35px_rgba(0,0,0,0.7)] relative group">
            <div className="tactical-crosshair crosshair-tl" />
            <div className="tactical-crosshair crosshair-br" />

            <span className="font-syne text-xs font-black uppercase tracking-[0.2em] text-[#10b981]">
              Zero-Risk Audit Reconnaissance
            </span>
            <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-white mt-1.5 mb-2">
              Get a Free 3-Point Website Audit
            </h2>
            <p className="text-xs sm:text-sm text-[#94a3b8] mb-6">
              We&apos;ll inspect your current mobile speed, WhatsApp conversion flow, and trust signals — free of charge.
            </p>
            <button
              type="button"
              onClick={handleAuditClick}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-syne font-bold text-sm bg-gradient-to-r from-[#10b981] to-emerald-400 text-black shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:shadow-[0_0_35px_rgba(16,185,129,0.6)] hover:scale-[1.02] transition-all cursor-pointer"
            >
              <span>Get My Free 3-Point Audit</span>
              <ArrowRight size={17} />
            </button>
          </div>

          {/* SECTION 3: PRICING (Rewritten as USE CASES, no page counts) */}
          <div className="mb-20">
            <div className="text-center mb-10">
              <span className="font-syne text-xs font-black uppercase tracking-[0.25em] text-[#ffd700]">
                Tactical Investment Tiers
              </span>
              <h2 className="font-cinzel text-2xl sm:text-4xl font-black text-white mt-2">
                Predictable Packages. Guaranteed Delivery.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {PRICING_TIERS.map((tier) => (
                <div
                  key={tier.name}
                  className={`relative p-6 sm:p-7 rounded-2xl flex flex-col justify-between transition-all backdrop-blur-md ${
                    tier.featured
                      ? "border-2 border-[#ffd700] bg-gradient-to-b from-[#d4af37]/15 via-[#090b10] to-[#050608] shadow-[0_0_40px_rgba(212,175,55,0.25)] scale-[1.02]"
                      : "border border-white/10 bg-[#090b10]/80 shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
                  }`}
                >
                  <div className="tactical-crosshair crosshair-tl" />
                  <div className="tactical-crosshair crosshair-br" />

                  {tier.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#b8860b] via-[#ffd700] to-[#f3ce5e] text-black text-[10px] font-syne font-black uppercase tracking-wider shadow-lg">
                      {tier.badge}
                    </div>
                  )}

                  <div>
                    <h3 className="font-cinzel text-xl font-black text-white mb-1">{tier.name}</h3>
                    <p className="font-syne text-xs text-[#ffd700] font-semibold mb-4 min-h-[32px]">
                      &quot;{tier.useCase}&quot;
                    </p>

                    <div className="flex items-baseline gap-1.5 mb-6">
                      <span className="text-xs text-[#94a3b8] font-bold font-syne">{tier.currency}</span>
                      <span className="font-cinzel text-3xl sm:text-4xl font-black text-white">
                        {tier.price}
                      </span>
                      <span className="text-xs text-[#94a3b8] font-mono">/ one-time</span>
                    </div>

                    <div className="border-t border-white/10 pt-4 mb-6">
                      <div className="text-[11px] font-syne uppercase tracking-wider font-bold text-zinc-400 mb-3">
                        Use Cases & Outcomes:
                      </div>
                      <ul className="space-y-2.5">
                        {tier.bullets.map((b, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300 leading-snug">
                            <Check size={14} className="text-[#10b981] flex-shrink-0 mt-0.5" />
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
                    className={`w-full py-3.5 px-4 rounded-xl text-xs font-syne font-bold text-center transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      tier.featured
                        ? "bg-gradient-to-r from-[#b8860b] via-[#ffd700] to-[#f3ce5e] text-black shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-[1.02]"
                        : "border border-white/20 bg-white/5 text-white hover:border-[#ffd700]/50"
                    }`}
                  >
                    <span>Claim This Package</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 4: SINGLE STANDARDIZED GUARANTEE (Vault Sealed Guarantee) */}
          <div className="mb-20 p-7 sm:p-9 rounded-2xl border-2 border-[#10b981]/35 bg-[#090b10]/90 backdrop-blur-md text-center max-w-2xl mx-auto shadow-[0_15px_45px_rgba(0,0,0,0.8)] relative group">
            <div className="tactical-crosshair crosshair-tl" />
            <div className="tactical-crosshair crosshair-tr" />
            <div className="tactical-crosshair crosshair-bl" />
            <div className="tactical-crosshair crosshair-br" />

            <div className="w-14 h-14 rounded-full bg-[#10b981]/20 text-[#10b981] flex items-center justify-center mx-auto mb-4 border border-[#10b981]/40 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              <ShieldCheck size={28} />
            </div>
            <h3 className="font-cinzel text-xl sm:text-2xl font-black text-white mb-3">
              The HESICS Ironclad Delivery Guarantee
            </h3>
            <p className="font-syne text-sm sm:text-base text-zinc-200 font-medium leading-relaxed max-w-lg mx-auto">
              {SITE_CONFIG.guaranteeText}
            </p>
          </div>

          {/* SECTION 5: 5 FAQS */}
          <div className="mb-20 max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <span className="font-syne text-xs font-bold uppercase tracking-[0.25em] text-[#ffd700]">
                Pre-Contract Briefing
              </span>
              <h2 className="font-cinzel text-2xl sm:text-3xl font-black text-white mt-1">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-3.5">
              {FAQS.map((faq, i) => (
                <details
                  key={i}
                  className="group p-5 rounded-xl border border-white/10 bg-[#090b10]/80 backdrop-blur-md cursor-pointer transition-colors hover:border-[#ffd700]/30"
                >
                  <summary className="flex items-center justify-between gap-3 text-sm sm:text-base font-syne font-bold text-white list-none">
                    <span>{faq.q}</span>
                    <ChevronDown size={18} className="text-[#ffd700] group-open:rotate-180 transition-transform flex-shrink-0" />
                  </summary>
                  <p className="mt-3.5 text-xs sm:text-sm text-[#94a3b8] leading-relaxed font-sans">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>

          {/* SECTION 6: SCARCITY LINE FROM CONFIG */}
          <div className="mb-14 max-w-xl mx-auto text-center p-4 sm:p-5 rounded-xl border border-red-500/25 bg-red-950/20 backdrop-blur-md">
            <p className="font-syne text-xs sm:text-sm text-zinc-200 font-semibold tracking-wide">
              We accept a strict maximum of <strong className="text-red-400">3 clients per month</strong> to protect full architectural bandwidth.{" "}
              <strong className="text-[#ffd700]">{SITE_CONFIG.slotsRemaining} slots remaining this cycle.</strong>
            </p>
          </div>

          {/* SECTION 7: LEAD FORM + WHATSAPP */}
          <div className="max-w-xl mx-auto mb-16">
            <LeadForm id="lead-form" />

            {/* Direct WhatsApp Alternative */}
            <div className="mt-8 text-center">
              <p className="font-syne text-xs text-[#94a3b8] mb-3 uppercase tracking-wider font-semibold">
                Prefer immediate direct communication?
              </p>
              <a
                href={waLink("Hi Sheikh, I'd like to discuss building a GrowthSite for my business directly.")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("click_whatsapp", { location: "convert_bottom" })}
                className="inline-flex items-center justify-center gap-2.5 py-3.5 px-7 rounded-xl font-syne text-xs font-bold bg-[#22c55e] hover:bg-[#15803d] text-white shadow-[0_0_25px_rgba(34,197,94,0.35)] transition-all cursor-pointer"
              >
                <MessageSquare size={16} />
                <span>Message Sheikh on WhatsApp Directly</span>
              </a>
            </div>
          </div>

        </div>
      </main>

      <FunnelFooter />
    </div>
  );
}
