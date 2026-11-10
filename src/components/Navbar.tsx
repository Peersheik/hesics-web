"use client";

import React from "react";
import Image from "next/image";
import { Instagram, Linkedin, Youtube, MessageCircle, ArrowUpRight } from "lucide-react";
import CyberButton from "./ui/CyberButton";

export default function Navbar() {
  const whatsappUrl = "https://wa.me/917867999298?text=Hello%20Hesics%2C%20I%20would%20like%20to%20schedule%20a%20briefing.";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-14 py-4 backdrop-blur-2xl bg-[#040405]/80 border-b border-white/[0.08]">
      {/* Official Hesics Brand Mark */}
      <a href="/" className="flex items-center gap-3.5 group">
        <div className="relative w-9 h-9 flex items-center justify-center rounded-xl bg-white/[0.04] border border-white/10 group-hover:border-[#0c745d]/60 transition-colors duration-300">
          <Image
            src="/hesics-emblem-silver.png"
            alt="Hesics Official Emblem"
            width={30}
            height={30}
            className="object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.25)] group-hover:scale-105 transition-transform duration-300"
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

      {/* Official Social Platform Links */}
      <div className="hidden md:flex items-center gap-6">
        <a
          href="https://www.instagram.com/hesics__/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs font-mono font-medium text-slate-400 hover:text-white transition-colors"
        >
          <Instagram className="w-3.5 h-3.5 text-slate-400" />
          <span>Instagram</span>
          <ArrowUpRight className="w-3 h-3 text-slate-500" />
        </a>

        <a
          href="https://www.linkedin.com/company/143572934/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs font-mono font-medium text-slate-400 hover:text-white transition-colors"
        >
          <Linkedin className="w-3.5 h-3.5 text-slate-400" />
          <span>LinkedIn</span>
          <ArrowUpRight className="w-3 h-3 text-slate-500" />
        </a>

        <a
          href="https://www.youtube.com/@peer_sheik_mydeen"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs font-mono font-medium text-slate-400 hover:text-white transition-colors"
        >
          <Youtube className="w-3.5 h-3.5 text-slate-400" />
          <span>YouTube</span>
          <ArrowUpRight className="w-3 h-3 text-slate-500" />
        </a>
      </div>

      {/* Primary Action Button (Direct WhatsApp Briefing Link) */}
      <div className="flex items-center gap-4">
        <CyberButton
          href={whatsappUrl}
          variant="primary"
          className="!py-2.5 !px-5"
        >
          Connect on WhatsApp
        </CyberButton>
      </div>
    </header>
  );
}
