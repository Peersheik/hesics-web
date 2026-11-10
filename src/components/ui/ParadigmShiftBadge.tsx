"use client";

import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";

export default function ParadigmShiftBadge() {
  return (
    <div className="group relative inline-flex items-center gap-3 sm:gap-4 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/10 hover:border-[#0c745d]/50 backdrop-blur-xl transition-all duration-300 shadow-lg cursor-default select-none">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-[#0c745d]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Traditional / Websites (Strikethrough without any messy overlapping text) */}
      <div className="flex items-center gap-2">
        <span className="text-[11px] uppercase tracking-widest text-slate-500 font-mono font-medium">
          Legacy
        </span>
        <span className="text-sm font-medium text-slate-400 line-through decoration-rose-500 decoration-2 px-0.5">
          Websites
        </span>
      </div>

      {/* Clean Divider Arrow */}
      <div className="flex items-center justify-center w-5 h-5 rounded-full bg-white/5 text-slate-400 group-hover:text-white transition-colors">
        <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-200" />
      </div>

      {/* The Standard: (Growth)Sites */}
      <div className="flex items-center gap-2">
        <span className="text-[11px] uppercase tracking-widest text-[#a2dbcb] font-mono font-semibold">
          The New Standard
        </span>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-black font-extrabold text-sm shadow-[0_0_20px_rgba(255,255,255,0.2)]">
          <Sparkles className="w-3.5 h-3.5 text-[#0c745d]" />
          <span>(Growth)Sites™</span>
        </div>
      </div>
    </div>
  );
}
