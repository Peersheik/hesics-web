"use client";

import React from "react";
import Hesics3DLogo from "./Hesics3DLogo";
import CyberButton from "./ui/CyberButton";
import ParadigmShiftBadge from "./ui/ParadigmShiftBadge";
import TrustConsole from "./TrustConsole";
import { ArrowDown, Shield } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-28 pb-20 px-6 md:px-14 flex flex-col justify-start items-center overflow-hidden bg-[#040405]">
      {/* 1. Deep Atmospheric Background (Black & White Void with Architectural Depth) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Subtle Architectural Silhouette */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.12] grayscale contrast-125"
          style={{
            backgroundImage: `url('/hero-architecture.jpg')`,
          }}
        />

        {/* Minimal Obsidian Vignette Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#040405]/60 via-[#040405]/95 to-[#040405]" />

        {/* Surgical Emerald Focal Glow (Accent Only) */}
        <div className="absolute top-[18%] left-1/2 -translate-x-1/2 w-[520px] h-[300px] bg-[#0c745d]/18 blur-[130px] rounded-full pointer-events-none" />

        {/* Precision Micro-Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      </div>

      {/* 2. Main Hero Content Container */}
      <div className="relative z-10 max-w-6xl w-full mx-auto flex flex-col items-center text-center">
        {/* Live 3D Interactive Hesics Logo Emblem */}
        <div className="relative mb-2 flex items-center justify-center">
          <Hesics3DLogo size={160} />
        </div>

        {/* Top Minimal Telemetry Pill */}
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 mb-6 backdrop-blur-xl">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0c745d] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0c745d]"></span>
          </span>
          <span className="text-[11px] uppercase tracking-[0.25em] font-mono font-bold text-white">
            HESICS // SOVEREIGN GROWTH ARCHITECTURE
          </span>
          <span className="w-1 h-1 rounded-full bg-white/40" />
          <span className="text-[10px] text-slate-400 font-mono">B2B & ENTERPRISE</span>
        </div>

        {/* Bold Big Headline (Exact Copy with High-Contrast Power) */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[74px] font-black text-white tracking-[-0.035em] leading-[1.05] max-w-5xl">
          Your Business Deserves to Be{" "}
          <span className="relative inline-block">
            <span className="text-white">Trusted</span>
            <span className="absolute -bottom-1 left-0 w-full h-[4px] bg-[#0c745d] rounded-full shadow-[0_0_12px_#0c745d]" />
          </span>{" "}
          Before the First Meeting Even Starts
        </h1>

        {/* Subheadline (Exact Copy) & The Paradigm Shift Badge */}
        <div className="mt-6 max-w-3xl flex flex-col items-center gap-4">
          <p className="text-lg sm:text-xl md:text-2xl text-slate-300 font-medium leading-relaxed">
            This is the Exact way to <span className="text-white font-bold">wins tenders</span>,{" "}
            <span className="text-white font-bold">wins leads</span>, and{" "}
            <span className="text-white font-bold">works even while you sleep</span>.
          </p>

          {/* Custom Paradigm Shift Mechanical Component: ~~Web~~(Growth)Sites */}
          <div className="mt-1">
            <ParadigmShiftBadge />
          </div>
        </div>

        {/* 3. Bespoke Cyber Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <CyberButton href="#audit" variant="primary" badge="SOVEREIGN">
            Commission Your GrowthSite
          </CyberButton>

          <CyberButton href="#console" variant="secondary">
            Inspect Trust Terminal
          </CyberButton>
        </div>

        {/* Subtle Scroll Indicator */}
        <div className="mt-10 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-400">
            Scroll to Explore Console
          </span>
          <ArrowDown className="w-3.5 h-3.5 text-[#0c745d] animate-bounce" />
        </div>

        {/* 4. The Interactive Pre-Meeting Trust Terminal */}
        <div id="console" className="mt-14 w-full flex justify-center">
          <TrustConsole />
        </div>

        {/* 5. Enterprise Industry Trust Strip */}
        <div className="mt-16 pt-10 border-t border-white/[0.08] w-full flex flex-col items-center">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0c745d]" />
            <p className="text-[11px] uppercase tracking-[0.3em] font-mono text-slate-400 font-bold">
              ENGINEERED FOR HIGH-STAKES ENTERPRISE ACQUISITION
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 text-xs font-mono font-bold tracking-[0.2em] text-slate-400">
            <span className="hover:text-white transition-colors duration-200">
              GOVERNMENT CONTRACTING
            </span>
            <span className="text-[#0c745d]">•</span>
            <span className="hover:text-white transition-colors duration-200">
              INFRASTRUCTURE & LOGISTICS
            </span>
            <span className="text-[#0c745d]">•</span>
            <span className="hover:text-white transition-colors duration-200">
              FINANCIAL INSTITUTIONS
            </span>
            <span className="text-[#0c745d]">•</span>
            <span className="hover:text-white transition-colors duration-200">
              GLOBAL ENTERPRISES
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
