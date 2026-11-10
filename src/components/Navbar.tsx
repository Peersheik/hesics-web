"use client";

import React from "react";
import Image from "next/image";
import CyberButton from "./ui/CyberButton";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-14 py-4 backdrop-blur-2xl bg-[#040405]/80 border-b border-white/[0.08]">
      {/* Official Hesics Brand Mark */}
      <a href="/" className="flex items-center gap-3.5 group">
        <div className="relative w-9 h-9 flex items-center justify-center rounded-xl bg-white/[0.04] border border-white/10 group-hover:border-[#0c745d]/60 transition-colors duration-300">
          <Image
            src="/hesics-emblem-silver.png"
            alt="Hesics Official Emblem"
            width={32}
            height={32}
            className="object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] group-hover:scale-105 transition-transform duration-300"
            priority
          />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="text-base font-extrabold tracking-[0.25em] text-white">
              H<span className="text-[#0c745d] font-bold">≡</span>SICS
            </span>
          </div>
          <span className="text-[9px] tracking-[0.35em] uppercase text-slate-400 font-mono font-medium -mt-0.5">
            MAKE IT SIMPLE
          </span>
        </div>
      </a>

      {/* Center Navigation Matrix */}
      <nav className="hidden lg:flex items-center gap-9 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
        <a href="#premise" className="hover:text-white transition-colors duration-200">
          The Trust Equation
        </a>
        <a href="#tenders" className="hover:text-white transition-colors duration-200">
          Tenders & Pipelines
        </a>
        <a href="#console" className="hover:text-white transition-colors duration-200 flex items-center gap-2">
          <span>Authority Engine</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#0c745d] animate-pulse" />
        </a>
        <a href="#case-studies" className="hover:text-white transition-colors duration-200">
          Portfolio
        </a>
      </nav>

      {/* Custom Action CyberButton */}
      <div className="flex items-center gap-4">
        <CyberButton href="#contact" variant="primary" className="!py-2.5 !px-5">
          Schedule Briefing
        </CyberButton>
      </div>
    </header>
  );
}
