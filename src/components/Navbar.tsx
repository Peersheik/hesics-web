"use client";

import React from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 backdrop-blur-xl bg-[#040405]/70 border-b border-white/[0.06]">
      {/* Brand Logo */}
      <div className="flex items-center gap-3">
        <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#0c745d] to-[#040405] border border-[#0c745d]/40 shadow-emerald-glow">
          <span className="font-serif text-xl font-bold tracking-wider text-white">H</span>
          <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#159c7e] shadow-[0_0_8px_#159c7e]" />
        </div>
        <div className="flex flex-col">
          <span className="font-serif text-lg font-bold tracking-[0.2em] text-white">
            HESICS
          </span>
          <span className="text-[10px] tracking-[0.25em] uppercase text-[#a2dbcb]/80 font-medium">
            Institutional Growth
          </span>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
        <a href="#premise" className="hover:text-white transition-colors duration-200">
          The Trust Equation
        </a>
        <a href="#tenders" className="hover:text-white transition-colors duration-200">
          Tenders & Pipelines
        </a>
        <a href="#growthsites" className="hover:text-[#a2dbcb] transition-colors duration-200 flex items-center gap-1.5">
          <span>GrowthSites™</span>
          <span className="px-1.5 py-0.5 text-[9px] uppercase tracking-wider rounded bg-[#0c745d]/40 text-[#a2dbcb] border border-[#0c745d]">
            Proprietary
          </span>
        </a>
        <a href="#results" className="hover:text-white transition-colors duration-200">
          Executive Portfolio
        </a>
      </nav>

      {/* Primary Action Button */}
      <div className="flex items-center gap-4">
        <a
          href="#contact"
          className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[#0c745d] via-[#108c70] to-[#0c745d] border border-[#159c7e]/40 shadow-emerald-glow hover:shadow-emerald-glow-lg transition-all duration-300 hover:scale-[1.02]"
        >
          <span>Schedule Private Briefing</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
        </a>
      </div>
    </header>
  );
}
