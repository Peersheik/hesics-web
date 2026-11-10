"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  FileCheck2,
  Clock,
  Sparkles,
  Award,
  ChevronRight,
  CheckCircle2,
  Zap,
} from "lucide-react";

export default function Hero() {
  const [activeTab, setActiveTab] = useState<"tenders" | "leads" | "reputation">("tenders");

  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6 md:px-12 flex flex-col justify-center items-center overflow-hidden bg-[#040405]">
      {/* 1. Architectural Background Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Background Image: High-End Architecture & Glass Skyscraper */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.22] scale-105"
          style={{
            backgroundImage: `url('/hero-architecture.jpg'), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2600&auto=format&fit=crop')`,
          }}
        />

        {/* Hesics Vertical Gradient Wash (Matches Swatch 5: #0c745d to #040405) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c745d]/45 via-[#040405]/85 to-[#040405]" />

        {/* Ambient Emerald Radiance Spheres */}
        <div className="absolute top-[18%] left-1/2 -translate-x-1/2 w-[720px] h-[480px] bg-[#0c745d]/30 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 left-[15%] w-[400px] h-[400px] bg-[#159c7e]/20 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute top-1/2 right-[12%] w-[420px] h-[420px] bg-[#07483a]/35 blur-[140px] rounded-full pointer-events-none" />

        {/* Precision Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />

        {/* Deep Vignette */}
        <div className="absolute inset-0 shadow-[inset_0_0_140px_rgba(4,4,5,0.95)]" />
      </div>

      {/* 2. Main Hero Content Container */}
      <div className="relative z-10 max-w-6xl w-full mx-auto text-center flex flex-col items-center">
        {/* Top Prestige Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-pill border border-[#0c745d]/50 mb-8 shadow-emerald-glow">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#159c7e] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#159c7e]"></span>
          </span>
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#a2dbcb]">
            Institutional Revenue Architecture
          </span>
          <span className="w-1 h-1 rounded-full bg-[#0c745d]" />
          <span className="text-[11px] text-slate-300 font-medium">B2B & Enterprise Grade</span>
        </div>

        {/* Main Headline (User's Exact Copy with Editorial Prestige Styling) */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-semibold text-white tracking-tight leading-[1.14] max-w-5xl">
          Your Business Deserves to Be{" "}
          <span className="gradient-text-emerald italic font-bold">Trusted</span>{" "}
          Before the{" "}
          <span className="relative inline-block text-white">
            First Meeting
            <span className="absolute bottom-1.5 left-0 w-full h-[5px] bg-gradient-to-r from-[#0c745d] via-[#159c7e] to-[#a2dbcb] rounded-full opacity-80" />
          </span>{" "}
          Even Starts
        </h1>

        {/* Subheadline (User's Exact Copy) & The ~~Web~~(Growth)Sites Paradigm Shift */}
        <div className="mt-7 max-w-3xl flex flex-col items-center gap-4">
          <p className="text-lg sm:text-xl md:text-2xl text-slate-300 font-normal leading-relaxed">
            This is the Exact way to <span className="text-white font-semibold">wins tenders</span>,{" "}
            <span className="text-white font-semibold">wins leads</span>, and{" "}
            <span className="text-white font-semibold">works even while you sleep</span>.
          </p>

          {/* ~~Web~~(Growth)Sites Transformation Badge */}
          <div className="mt-3 inline-flex flex-wrap items-center justify-center gap-3 px-5 py-2.5 rounded-2xl glass-surface border border-[#0c745d]/40 shadow-emerald-glow">
            <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">
              The Paradigm Shift:
            </span>
            <span className="relative inline-flex items-center text-slate-400 line-through decoration-rose-500 decoration-2 text-base font-medium px-2">
              Websites
            </span>
            <ChevronRight className="w-4 h-4 text-[#a2dbcb]" />
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-xl bg-gradient-to-r from-[#0c745d] to-[#07483a] border border-[#159c7e]/60 shadow-[0_0_25px_rgba(12,116,93,0.45)]">
              <Sparkles className="w-4 h-4 text-[#a2dbcb]" />
              <span className="font-serif font-bold tracking-wide text-white text-base sm:text-lg">
                (Growth)Sites™
              </span>
            </div>
          </div>
        </div>

        {/* 3. High-Converting Call-to-Action Group */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href="#audit"
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-sm font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[#0c745d] via-[#159c7e] to-[#0c745d] border border-[#159c7e]/60 shadow-emerald-glow hover:shadow-emerald-glow-lg transition-all duration-300 hover:scale-[1.02]"
          >
            <span>Commission Your GrowthSite</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            <div className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </a>

          <a
            href="#proof"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-sm font-medium tracking-wide text-slate-200 glass-surface glass-surface-hover transition-all duration-200 hover:text-white"
          >
            <ShieldCheck className="w-4 h-4 text-[#a2dbcb]" />
            <span>Review Tender Proof Deck</span>
          </a>
        </div>

        {/* 4. Live Institutional Impact Interactive Preview Card */}
        <div className="mt-14 w-full max-w-4xl relative">
          <div className="relative rounded-2xl glass-surface border border-[#0c745d]/35 p-6 md:p-8 text-left shadow-2xl backdrop-blur-2xl overflow-hidden">
            {/* Top Card Bar with Tabs */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-[#159c7e]" />
                <span className="ml-2 text-xs font-mono text-slate-400">
                  engine://hesics-growthsite.authority
                </span>
              </div>

              {/* Dynamic Feature Switcher */}
              <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#040405]/80 border border-white/[0.08]">
                <button
                  onClick={() => setActiveTab("tenders")}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    activeTab === "tenders"
                      ? "bg-[#0c745d] text-white shadow-emerald-glow"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Tender Winning
                </button>
                <button
                  onClick={() => setActiveTab("leads")}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    activeTab === "leads"
                      ? "bg-[#0c745d] text-white shadow-emerald-glow"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Inbound Pipeline
                </button>
                <button
                  onClick={() => setActiveTab("reputation")}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    activeTab === "reputation"
                      ? "bg-[#0c745d] text-white shadow-emerald-glow"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  24/7 Authority
                </button>
              </div>
            </div>

            {/* Dynamic Tab Body */}
            <div className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              {activeTab === "tenders" && (
                <>
                  <div className="p-5 rounded-xl bg-[#08090a]/80 border border-[#0c745d]/20 hover:border-[#0c745d]/50 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-[#0c745d]/20 flex items-center justify-center text-[#a2dbcb] mb-3">
                      <FileCheck2 className="w-5 h-5" />
                    </div>
                    <div className="text-2xl font-serif font-bold text-white">93.4%</div>
                    <div className="text-xs uppercase tracking-wider text-[#a2dbcb] font-semibold mt-1">
                      Procurement Clearance
                    </div>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                      Passes institutional due diligence, government tender committees, and vendor scorecards effortlessly.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-[#08090a]/80 border border-[#0c745d]/20 hover:border-[#0c745d]/50 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-[#0c745d]/20 flex items-center justify-center text-[#a2dbcb] mb-3">
                      <Award className="w-5 h-5" />
                    </div>
                    <div className="text-2xl font-serif font-bold text-white">$4.2M+</div>
                    <div className="text-xs uppercase tracking-wider text-[#a2dbcb] font-semibold mt-1">
                      Avg Tender Pipeline
                    </div>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                      Positions your brand above commodity price-wars so you win on authority, not discounts.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-[#08090a]/80 border border-[#0c745d]/20 hover:border-[#0c745d]/50 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-[#0c745d]/20 flex items-center justify-center text-[#a2dbcb] mb-3">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div className="text-2xl font-serif font-bold text-white">Zero Friction</div>
                    <div className="text-xs uppercase tracking-wider text-[#a2dbcb] font-semibold mt-1">
                      Pre-Meeting Vetting
                    </div>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                      By the time buyers enter the room, your legitimacy and track record are already undisputed.
                    </p>
                  </div>
                </>
              )}

              {activeTab === "leads" && (
                <>
                  <div className="p-5 rounded-xl bg-[#08090a]/80 border border-[#0c745d]/20 hover:border-[#0c745d]/50 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-[#0c745d]/20 flex items-center justify-center text-[#a2dbcb] mb-3">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <div className="text-2xl font-serif font-bold text-white">4.8x</div>
                    <div className="text-xs uppercase tracking-wider text-[#a2dbcb] font-semibold mt-1">
                      High-Intent Leads
                    </div>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                      Filters out tire-kickers and delivers qualified enterprise buyers ready for high-ticket contracts.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-[#08090a]/80 border border-[#0c745d]/20 hover:border-[#0c745d]/50 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-[#0c745d]/20 flex items-center justify-center text-[#a2dbcb] mb-3">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div className="text-2xl font-serif font-bold text-white">C-Suite Direct</div>
                    <div className="text-xs uppercase tracking-wider text-[#a2dbcb] font-semibold mt-1">
                      Decision-Maker Funnel
                    </div>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                      Tailored specifically for Managing Directors, Board Members, and High-Net-Worth principals.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-[#08090a]/80 border border-[#0c745d]/20 hover:border-[#0c745d]/50 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-[#0c745d]/20 flex items-center justify-center text-[#a2dbcb] mb-3">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div className="text-2xl font-serif font-bold text-white">Pre-Sold Deals</div>
                    <div className="text-xs uppercase tracking-wider text-[#a2dbcb] font-semibold mt-1">
                      Closing Velocity
                    </div>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                      Prospects understand your core value before the discovery call, cutting sales cycles in half.
                    </p>
                  </div>
                </>
              )}

              {activeTab === "reputation" && (
                <>
                  <div className="p-5 rounded-xl bg-[#08090a]/80 border border-[#0c745d]/20 hover:border-[#0c745d]/50 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-[#0c745d]/20 flex items-center justify-center text-[#a2dbcb] mb-3">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div className="text-2xl font-serif font-bold text-white">24/7/365</div>
                    <div className="text-xs uppercase tracking-wider text-[#a2dbcb] font-semibold mt-1">
                      Always Operating
                    </div>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                      While your sales team sleeps, your GrowthSite qualifies prospects across London, Dubai, Riyadh, and Singapore.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-[#08090a]/80 border border-[#0c745d]/20 hover:border-[#0c745d]/50 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-[#0c745d]/20 flex items-center justify-center text-[#a2dbcb] mb-3">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div className="text-2xl font-serif font-bold text-white">100% Sovereign</div>
                    <div className="text-xs uppercase tracking-wider text-[#a2dbcb] font-semibold mt-1">
                      Owned Digital Asset
                    </div>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                      No reliance on ad algorithms. An institutional digital property that compounds equity for years.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-[#08090a]/80 border border-[#0c745d]/20 hover:border-[#0c745d]/50 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-[#0c745d]/20 flex items-center justify-center text-[#a2dbcb] mb-3">
                      <Award className="w-5 h-5" />
                    </div>
                    <div className="text-2xl font-serif font-bold text-white">Prestige Grade</div>
                    <div className="text-xs uppercase tracking-wider text-[#a2dbcb] font-semibold mt-1">
                      Market Dominance
                    </div>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                      Transforms your digital appearance from an ordinary vendor into the market-defining category leader.
                    </p>
                  </div>
                </>
              )}
            </div>

            {/* Bottom Status Bar */}
            <div className="mt-6 pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between text-[11px] text-slate-400 gap-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#159c7e]" />
                <span className="text-slate-300 font-medium">Growth Engine Status: Active & Optimizing</span>
              </div>
              <div className="flex items-center gap-4">
                <span>Enterprise Encrypted</span>
                <span>•</span>
                <span>Sub-Second Latency</span>
                <span>•</span>
                <span className="text-[#a2dbcb] font-medium">Gulf & International Ready</span>
              </div>
            </div>
          </div>
        </div>

        {/* 5. Trust Bar / Credibility Strip */}
        <div className="mt-14 pt-8 border-t border-white/[0.08] w-full flex flex-col items-center">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-400 font-medium mb-6">
            Engineered For High-Stakes Industries
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 text-sm font-semibold tracking-wider text-slate-400">
            <span className="hover:text-white transition-colors">GOVERNMENT CONTRACTING</span>
            <span className="text-[#0c745d]">•</span>
            <span className="hover:text-white transition-colors">INFRASTRUCTURE & LOGISTICS</span>
            <span className="text-[#0c745d]">•</span>
            <span className="hover:text-white transition-colors">FINANCIAL ADVISORY</span>
            <span className="text-[#0c745d]">•</span>
            <span className="hover:text-white transition-colors">OIL & GAS CONGLOMERATES</span>
          </div>
        </div>
      </div>
    </section>
  );
}
