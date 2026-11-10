"use client";

import React, { useState, useEffect } from "react";
import {
  ShieldCheck,
  TrendingUp,
  FileCheck2,
  Clock,
  Sparkles,
  Award,
  Terminal,
  Activity,
  Layers,
  CheckCircle,
} from "lucide-react";

export default function TrustConsole() {
  const [activeTab, setActiveTab] = useState<"tender" | "leads" | "reputation">("tender");
  const [pulseMetric, setPulseMetric] = useState(94.2);

  // Subtle live ticker effect
  useEffect(() => {
    const interval = setInterval(() => {
      setPulseMetric((prev) => {
        const delta = (Math.random() - 0.5) * 0.4;
        return parseFloat((prev + delta).toFixed(1));
      });
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-5xl rounded-3xl bg-[#08090a]/90 border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.85)] backdrop-blur-2xl overflow-hidden">
      {/* 1. Terminal Top Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#040405]/80 gap-4">
        {/* Console Status */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#0c745d] shadow-[0_0_8px_#0c745d]" />
          </div>
          <span className="text-[11px] font-mono tracking-widest uppercase text-slate-400">
            HESICS // PRE-MEETING TRUST ENGINE
          </span>
          <span className="hidden md:inline-flex px-2 py-0.5 rounded text-[9px] font-mono uppercase tracking-wider bg-white/5 border border-white/10 text-slate-300">
            v4.2.0 • LIVE
          </span>
        </div>

        {/* Tab Switcher - Custom Cybernetic Pill */}
        <div className="flex items-center p-1 rounded-xl bg-black/60 border border-white/10">
          <button
            onClick={() => setActiveTab("tender")}
            className={`px-4 py-1.5 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
              activeTab === "tender"
                ? "bg-white text-black shadow-lg"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Tender Clearance
          </button>
          <button
            onClick={() => setActiveTab("leads")}
            className={`px-4 py-1.5 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
              activeTab === "leads"
                ? "bg-white text-black shadow-lg"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Inbound Leads
          </button>
          <button
            onClick={() => setActiveTab("reputation")}
            className={`px-4 py-1.5 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
              activeTab === "reputation"
                ? "bg-white text-black shadow-lg"
                : "text-slate-400 hover:text-white"
            }`}
          >
            24/7 Sovereign
          </button>
        </div>
      </div>

      {/* 2. Interactive Console Core */}
      <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {activeTab === "tender" && (
          <>
            {/* Card 1 */}
            <div className="group relative p-6 rounded-2xl bg-[#0d0f12]/80 border border-white/10 hover:border-white/30 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                  <FileCheck2 className="w-5 h-5 text-white" />
                </div>
                <span className="w-2 h-2 rounded-full bg-[#0c745d] shadow-[0_0_6px_#0c745d]" />
              </div>
              <div className="text-4xl font-extrabold tracking-tight text-white">
                {pulseMetric}%
              </div>
              <div className="text-xs uppercase tracking-widest font-bold text-slate-300 mt-2">
                Procurement Clearance
              </div>
              <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                Passes enterprise due diligence, government boards, and compliance audits before your first pitch deck is sent.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group relative p-6 rounded-2xl bg-[#0d0f12]/80 border border-white/10 hover:border-white/30 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <span className="text-[10px] font-mono text-[#0c745d] font-bold uppercase">
                  VERIFIED
                </span>
              </div>
              <div className="text-4xl font-extrabold tracking-tight text-white">
                $4.2M+
              </div>
              <div className="text-xs uppercase tracking-widest font-bold text-slate-300 mt-2">
                Avg Tender Value
              </div>
              <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                Commands market dominance above commodity price wars so you win on institutional authority, not discounts.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group relative p-6 rounded-2xl bg-[#0d0f12]/80 border border-white/10 hover:border-white/30 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                  <ShieldCheck className="w-5 h-5 text-white" />
                </div>
                <span className="w-2 h-2 rounded-full bg-[#0c745d] shadow-[0_0_6px_#0c745d]" />
              </div>
              <div className="text-4xl font-extrabold tracking-tight text-white">
                0% Friction
              </div>
              <div className="text-xs uppercase tracking-widest font-bold text-slate-300 mt-2">
                Pre-Meeting Vetting
              </div>
              <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                Stakeholders research your infrastructure prior to meeting. Your credibility is recognized before you even speak.
              </p>
            </div>
          </>
        )}

        {activeTab === "leads" && (
          <>
            {/* Card 1 */}
            <div className="group relative p-6 rounded-2xl bg-[#0d0f12]/80 border border-white/10 hover:border-white/30 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <span className="w-2 h-2 rounded-full bg-[#0c745d] shadow-[0_0_6px_#0c745d]" />
              </div>
              <div className="text-4xl font-extrabold tracking-tight text-white">
                4.8x
              </div>
              <div className="text-xs uppercase tracking-widest font-bold text-slate-300 mt-2">
                Qualified Pipeline
              </div>
              <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                Attracts serious institutional buyers while eliminating low-intent inquiries automatically.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group relative p-6 rounded-2xl bg-[#0d0f12]/80 border border-white/10 hover:border-white/30 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                  <Layers className="w-5 h-5 text-white" />
                </div>
                <span className="text-[10px] font-mono text-[#0c745d] font-bold uppercase">
                  DIRECT
                </span>
              </div>
              <div className="text-4xl font-extrabold tracking-tight text-white">
                C-Suite
              </div>
              <div className="text-xs uppercase tracking-widest font-bold text-slate-300 mt-2">
                Direct Decision-Maker Entry
              </div>
              <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                Architected specifically for Managing Directors, Board Principals, and Procurement Heads.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group relative p-6 rounded-2xl bg-[#0d0f12]/80 border border-white/10 hover:border-white/30 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="w-2 h-2 rounded-full bg-[#0c745d] shadow-[0_0_6px_#0c745d]" />
              </div>
              <div className="text-4xl font-extrabold tracking-tight text-white">
                -52%
              </div>
              <div className="text-xs uppercase tracking-widest font-bold text-slate-300 mt-2">
                Sales Cycle Length
              </div>
              <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                Because prospects are pre-sold on your methodologies, meetings become closing sessions rather than pitches.
              </p>
            </div>
          </>
        )}

        {activeTab === "reputation" && (
          <>
            {/* Card 1 */}
            <div className="group relative p-6 rounded-2xl bg-[#0d0f12]/80 border border-white/10 hover:border-white/30 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <span className="w-2 h-2 rounded-full bg-[#0c745d] shadow-[0_0_6px_#0c745d]" />
              </div>
              <div className="text-4xl font-extrabold tracking-tight text-white">
                24/7/365
              </div>
              <div className="text-xs uppercase tracking-widest font-bold text-slate-300 mt-2">
                Active While You Sleep
              </div>
              <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                Engages and qualifies prospects across global markets from Dubai, Riyadh, and London to Singapore continuously.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group relative p-6 rounded-2xl bg-[#0d0f12]/80 border border-white/10 hover:border-white/30 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                  <Activity className="w-5 h-5 text-white" />
                </div>
                <span className="text-[10px] font-mono text-[#0c745d] font-bold uppercase">
                  ACTIVE
                </span>
              </div>
              <div className="text-4xl font-extrabold tracking-tight text-white">
                Sovereign
              </div>
              <div className="text-xs uppercase tracking-widest font-bold text-slate-300 mt-2">
                Digital Infrastructure
              </div>
              <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                An owned institutional ecosystem that compounds brand equity rather than depending on rented third-party ad algorithms.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group relative p-6 rounded-2xl bg-[#0d0f12]/80 border border-white/10 hover:border-white/30 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                  <ShieldCheck className="w-5 h-5 text-white" />
                </div>
                <span className="w-2 h-2 rounded-full bg-[#0c745d] shadow-[0_0_6px_#0c745d]" />
              </div>
              <div className="text-4xl font-extrabold tracking-tight text-white">
                Prestige
              </div>
              <div className="text-xs uppercase tracking-widest font-bold text-slate-300 mt-2">
                Category Dominance
              </div>
              <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                Instantly separates your enterprise from conventional vendors, setting the standard for your entire industry.
              </p>
            </div>
          </>
        )}
      </div>

      {/* 3. Terminal Footer Telemetry */}
      <div className="px-6 py-3 bg-[#040405] border-t border-white/[0.06] flex flex-wrap items-center justify-between text-[11px] text-slate-500 font-mono gap-3">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0c745d]" />
          <span className="text-slate-400">STATUS: ENGINE ONLINE & OPTIMIZING</span>
        </div>
        <div className="flex items-center gap-4">
          <span>LATENCY: 0.12s</span>
          <span>•</span>
          <span>SECURITY: ENTERPRISE LEVEL 4</span>
          <span>•</span>
          <span className="text-white">HESICS DIGITAL PROTOCOL</span>
        </div>
      </div>
    </div>
  );
}

