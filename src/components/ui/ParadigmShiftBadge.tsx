"use client";

import React, { useState } from "react";
import { Sparkles, ArrowRight, Zap, CheckCircle2 } from "lucide-react";

export default function ParadigmShiftBadge() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative inline-flex items-center gap-4 px-6 py-3 rounded-full bg-[#08090a]/90 border border-white/10 hover:border-[#0c745d]/60 backdrop-blur-2xl transition-all duration-500 shadow-2xl cursor-default select-none"
    >
      {/* Background Pulse Aura */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-[#0c745d]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Legacy State: Websites (Strikethrough) */}
      <div className="flex items-center gap-2">
        <span className="text-[11px] uppercase tracking-widest text-slate-500 font-semibold">
          Legacy:
        </span>
        <span className="relative text-sm font-medium text-slate-400">
          <span className="line-through decoration-rose-500 decoration-[2.5px] opacity-75">
            Websites
          </span>
          <span className="absolute -top-1 -right-2 text-[9px] text-rose-400 font-mono font-bold">
            OBSOLETE
          </span>
        </span>
      </div>

      {/* Kinetic Arrow */}
      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white/5 border border-white/10 text-slate-400 group-hover:text-[#a2dbcb] group-hover:border-[#0c745d] transition-colors">
        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
      </div>

      {/* Future State: (Growth)Sites™ */}
      <div className="flex items-center gap-2">
        <span className="text-[11px] uppercase tracking-widest text-[#a2dbcb] font-semibold">
          The Standard:
        </span>
        <div className="relative inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#040405] font-black tracking-wide text-sm shadow-[0_0_20px_rgba(255,255,255,0.25)] group-hover:shadow-[0_0_25px_rgba(12,116,93,0.45)] transition-all">
          <Sparkles className="w-3.5 h-3.5 text-[#0c745d] fill-[#0c745d]" />
          <span>(Growth)Sites™</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#0c745d] animate-ping" />
        </div>
      </div>
    </div>
  );
}
