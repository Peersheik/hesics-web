"use client";

import React from "react";
import Hesics3DLogo from "./Hesics3DLogo";
import CyberButton from "./ui/CyberButton";
import ParadigmShiftBadge from "./ui/ParadigmShiftBadge";
import AuthorityPillars from "./AuthorityPillars";
import SocialConnectBar from "./SocialConnectBar";
import { MessageCircle, ArrowDown } from "lucide-react";

export default function Hero() {
  const whatsappUrl =
    "https://wa.me/917867999298?text=Hello%20Hesics%2C%20I%20would%20like%20to%20discuss%20a%20project.";

  return (
    <section className="relative min-h-screen pt-28 pb-20 px-6 md:px-14 flex flex-col justify-start items-center overflow-hidden bg-[#040405]">
      {/* 1. Deep Atmospheric Background (Predominantly Black & White Void with Architectural Depth) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Subtle Architectural Silhouette */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.11] grayscale contrast-125"
          style={{
            backgroundImage: `url('/hero-architecture.jpg')`,
          }}
        />

        {/* Minimal Obsidian Vignette Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#040405]/60 via-[#040405]/95 to-[#040405]" />

        {/* Surgical Emerald Focal Glow (Accent Only) */}
        <div className="absolute top-[18%] left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#0c745d]/16 blur-[140px] rounded-full pointer-events-none" />

        {/* Precision Micro-Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-15" />
      </div>

      {/* 2. Main Hero Content Container */}
      <div className="relative z-10 max-w-6xl w-full mx-auto flex flex-col items-center text-center">
        {/* Live 3D Interactive Hesics Logo Emblem */}
        <div className="relative mb-2 flex items-center justify-center">
          <Hesics3DLogo size={160} />
        </div>

        {/* Official Brand Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 mb-6 backdrop-blur-xl">
          <span className="w-2 h-2 rounded-full bg-[#0c745d] shadow-[0_0_8px_#0c745d]" />
          <span className="text-[11px] uppercase tracking-[0.25em] font-mono font-bold text-white">
            HESICS • MAKE IT SIMPLE
          </span>
        </div>

        {/* Bold Big Headline (Exact Copy with High-Contrast Power) */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[72px] font-black text-white tracking-[-0.035em] leading-[1.06] max-w-5xl">
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

          {/* Clean, Perfectly Aligned Paradigm Shift Badge: ~~Web~~(Growth)Sites */}
          <div className="mt-1">
            <ParadigmShiftBadge />
          </div>
        </div>

        {/* 3. Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <CyberButton
            href={whatsappUrl}
            variant="primary"
            badge="WHATSAPP"
          >
            Chat: 7867999298
          </CyberButton>

          <CyberButton href="#social-channels" variant="secondary">
            View All Channels
          </CyberButton>
        </div>

        {/* 4. Three Authentic Core Pillars (No Fake Slop, Matches Subheadline Exactly) */}
        <div className="mt-16 w-full">
          <AuthorityPillars />
        </div>

        {/* 5. Official Social Channels Grid */}
        <div id="social-channels" className="mt-16 w-full pt-12 border-t border-white/[0.08]">
          <SocialConnectBar />
        </div>

        {/* 6. Authentic Footer */}
        <footer className="mt-16 pt-8 border-t border-white/[0.06] w-full flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-4">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold tracking-widest">H≡SICS</span>
            <span>•</span>
            <span>MAKE IT SIMPLE</span>
          </div>
          <div>
            Direct Inquiries:{" "}
            <a
              href="tel:7867999298"
              className="text-slate-300 hover:text-white underline transition-colors"
            >
              +91 7867999298
            </a>
          </div>
          <div>
            © {new Date().getFullYear()} Hesics. All rights reserved.
          </div>
        </footer>
      </div>
    </section>
  );
}
