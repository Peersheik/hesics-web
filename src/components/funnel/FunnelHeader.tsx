"use client";

import Link from "next/link";
import { MessageSquare } from "lucide-react";
import { waLink } from "@/config/site";
import { trackEvent } from "@/lib/analytics";

export default function FunnelHeader() {
  const handleWaClick = () => {
    trackEvent("click_whatsapp", { location: "header" });
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#050608]/90 border-b border-[#d4af37]/20 shadow-[0_4px_30px_rgba(0,0,0,0.8)]">
      <div className="max-w-6xl mx-auto px-4 py-3.5 flex items-center justify-between">
        {/* Mastermind Brand Mark */}
        <Link href="/" className="flex items-center gap-2.5 group text-decoration-none">
          <div className="relative w-9 h-9 rounded-lg bg-gradient-to-tr from-[#b8860b] via-[#ffd700] to-[#f3ce5e] flex items-center justify-center font-black text-black text-lg shadow-[0_0_20px_rgba(212,175,55,0.4)] group-hover:scale-105 transition-transform">
            <span className="font-cinzel">H</span>
            <div className="tactical-crosshair crosshair-tl" />
            <div className="tactical-crosshair crosshair-br" />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-cinzel font-black text-base tracking-[0.2em] uppercase text-white drop-shadow-[0_2px_10px_rgba(212,175,55,0.3)]">
              HESICS
            </span>
            <span className="font-syne text-[9px] uppercase tracking-[0.25em] text-[#d4af37] font-bold">
              GROWTHSITES // UAE
            </span>
          </div>
        </Link>

        {/* Mastermind Telemetry Pill (Desktop) */}
        <div className="hidden md:inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/60 border border-[#d4af37]/25 text-[10px] font-mono tracking-wider text-zinc-300">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
          <span className="text-zinc-400">OPERATION:</span>
          <span className="text-[#ffd700] font-bold">GULF EXPANSION</span>
        </div>

        {/* Small WhatsApp button ONLY */}
        <a
          href={waLink("Hi Sheikh, I'd like to ask a quick question about HESICS GrowthSites.")}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWaClick}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-syne font-bold rounded-full bg-[#10b981]/15 text-[#10b981] border border-[#10b981]/40 hover:bg-[#10b981] hover:text-black hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] transition-all duration-300"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare size={13} className="text-[#10b981] group-hover:text-black" />
          <span>WhatsApp</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-ping" />
        </a>
      </div>
    </header>
  );
}
