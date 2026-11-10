"use client";

import React from "react";
import CinematicBackground from "./CinematicBackground";
import HesicsTiltedEmblem from "./HesicsTiltedEmblem";
import { ArrowRight, ArrowDown } from "lucide-react";

export default function Hero() {
  const whatsappUrl =
    "https://wa.me/917867999298?text=Hello%20Hesics%2C%20I%20would%20like%20to%20discuss%20a%20project.";

  const handleScrollDown = () => {
    const el = document.getElementById("proof-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between items-center bg-[#030303] select-none px-4 sm:px-8 pt-24 pb-7 overflow-hidden">
      {/* 1. Cinematic Black Chrome Background (Curved Horizon, Glass Ribbons, Floating Chrome Spheres) */}
      <CinematicBackground />

      {/* 2. Main Central Content Container (Perfect Vertical & Horizontal Centering) */}
      <div className="relative z-10 max-w-4xl w-full mx-auto flex flex-col items-center text-center my-auto">
        {/* Tilted 3D Glass & Chrome Coin Emblem with Orbit Rings */}
        <div className="relative mb-1 flex items-center justify-center">
          <HesicsTiltedEmblem size={220} />
        </div>

        {/* Minimal Pill Badge matching Reference Image */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-subtle border border-white/10 mb-4 select-none">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00A982] shadow-[0_0_6px_#00A982]" />
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] font-mono text-[#A0A0A0]">
            HESICS • MAKE IT SIMPLE
          </span>
        </div>

        {/* Refined Editorial Serif Headline (Exact 3-Line Composition from Reference Image) */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[66px] font-normal text-[#F4F4F4] tracking-[-0.015em] leading-[1.12] max-w-3xl mx-auto">
          Your Business Deserves to Be<br />
          <span className="italic font-light text-white">Trusted</span> Before the First<br />
          Meeting Even Starts
        </h1>

        {/* Subheadline (Exact 2-Line Composition from Reference Image) */}
        <p className="mt-4 max-w-xl text-sm sm:text-base text-[#A0A0A0] font-normal leading-relaxed">
          This is the Exact way to wins tenders, wins leads, and works even<br className="hidden sm:inline" />
          while you sleep.
        </p>

        {/* The Unified Glass CTA Dock (Exact Match to Reference Image) */}
        <div className="mt-7 flex items-center justify-center">
          <div className="glass-dock rounded-full p-1.5 flex flex-wrap items-center justify-center gap-2 shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
            {/* WhatsApp Pill Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#080808]/90 border border-white/10 hover:border-white/25 text-[#F4F4F4] transition-luxury hover:bg-[#101214] active:scale-[0.98]"
            >
              <div className="w-4 h-4 rounded-full flex items-center justify-center text-[#00A982]">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.301-.15-1.782-.879-2.058-.98-.277-.1-.478-.15-.68.15-.201.3-.779.98-.956 1.18-.176.2-.353.226-.654.076-.301-.15-1.272-.469-2.424-1.496-.895-.8-1.5-1.787-1.677-2.088-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.201-.3.301-.501.1-.2.05-.376-.025-.526-.076-.15-.68-1.637-.931-2.242-.245-.589-.494-.509-.68-.519-.176-.01-.377-.01-.578-.01-.201 0-.527.075-.803.376s-1.055 1.03-1.055 2.511 1.08 2.912 1.231 3.113c.15.2 2.126 3.246 5.15 4.553.719.311 1.28.497 1.718.636.722.23 1.378.197 1.9.119.58-.088 1.782-.728 2.033-1.431.251-.703.251-1.306.176-1.431-.075-.125-.276-.201-.577-.351zM12.04 2C6.505 2 2 6.502 2 12.037c0 1.97.57 3.805 1.554 5.353L2 22l4.743-1.517c1.498.895 3.255 1.411 5.297 1.411 5.535 0 10.04-4.502 10.04-10.037C22.08 6.502 17.575 2 12.04 2zm0 18.286c-1.802 0-3.475-.544-4.87-1.474l-.349-.232-2.812.898.917-2.738-.255-.386c-1.037-1.474-1.61-3.239-1.61-5.117 0-4.542 3.702-8.243 8.249-8.243 4.548 0 8.25 3.701 8.25 8.243 0 4.542-3.702 8.243-8.25 8.243z" />
                </svg>
              </div>
              <span className="text-[11px] font-mono tracking-widest uppercase text-white font-semibold">
                WHATSAPP
              </span>
              <span className="text-white/20">|</span>
              <span className="text-[11px] font-mono tracking-wider text-[#A0A0A0]">
                CHAT: 7867999298
              </span>
              <div className="w-5 h-5 rounded-full bg-white/10 group-hover:bg-white text-white group-hover:text-black flex items-center justify-center transition-colors">
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-200" />
              </div>
            </a>

            {/* View Proof & Channels Button */}
            <button
              onClick={handleScrollDown}
              className="group flex items-center gap-2 px-5 py-2.5 rounded-full text-[11px] font-mono uppercase tracking-widest text-[#A0A0A0] hover:text-white transition-colors cursor-pointer"
            >
              <span>VIEW ALL CHANNELS</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-200 text-[#656565] group-hover:text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* 3. Peripheral Controls Matching Reference Image */}
      {/* Bottom Left: Vertical Capsule Index */}
      <div className="absolute bottom-6 left-6 z-40 hidden sm:flex flex-col items-center gap-1.5 px-2.5 py-3 rounded-full glass border border-white/10 text-[10px] font-mono text-[#656565] select-none">
        <span className="text-[#A0A0A0] font-semibold">0</span>
        <span className="w-1.5 h-[1px] bg-white/20" />
        <span className="text-white font-bold">1</span>
        <span className="w-1.5 h-[1px] bg-white/20" />
        <span>N</span>
      </div>

      {/* Bottom Center: Circular Down Arrow resting on the curved horizon */}
      <button
        onClick={handleScrollDown}
        aria-label="Scroll down to proof section"
        className="absolute bottom-3 left-1/2 -translate-x-1/2 z-40 flex items-center justify-center w-8 h-8 rounded-full glass border border-white/15 text-[#A0A0A0] hover:text-white hover:border-white/30 transition-luxury active:scale-90 cursor-pointer shadow-lg"
      >
        <ArrowDown className="w-3.5 h-3.5" />
      </button>

      {/* Bottom Right: Circular Glass WhatsApp CTA Button with Emerald Dot */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="absolute bottom-6 right-6 z-40 flex items-center justify-center w-11 h-11 rounded-full glass border border-white/15 text-white shadow-xl hover:scale-105 transition-luxury active:scale-95"
      >
        <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.301-.15-1.782-.879-2.058-.98-.277-.1-.478-.15-.68.15-.201.3-.779.98-.956 1.18-.176.2-.353.226-.654.076-.301-.15-1.272-.469-2.424-1.496-.895-.8-1.5-1.787-1.677-2.088-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.201-.3.301-.501.1-.2.05-.376-.025-.526-.076-.15-.68-1.637-.931-2.242-.245-.589-.494-.509-.68-.519-.176-.01-.377-.01-.578-.01-.201 0-.527.075-.803.376s-1.055 1.03-1.055 2.511 1.08 2.912 1.231 3.113c.15.2 2.126 3.246 5.15 4.553.719.311 1.28.497 1.718.636.722.23 1.378.197 1.9.119.58-.088 1.782-.728 2.033-1.431.251-.703.251-1.306.176-1.431-.075-.125-.276-.201-.577-.351zM12.04 2C6.505 2 2 6.502 2 12.037c0 1.97.57 3.805 1.554 5.353L2 22l4.743-1.517c1.498.895 3.255 1.411 5.297 1.411 5.535 0 10.04-4.502 10.04-10.037C22.08 6.502 17.575 2 12.04 2zm0 18.286c-1.802 0-3.475-.544-4.87-1.474l-.349-.232-2.812.898.917-2.738-.255-.386c-1.037-1.474-1.61-3.239-1.61-5.117 0-4.542 3.702-8.243 8.249-8.243 4.548 0 8.25 3.701 8.25 8.243 0 4.542-3.702 8.243-8.25 8.243z" />
        </svg>
        <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00A982] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00A982] border-2 border-[#030303]"></span>
        </span>
      </a>
    </section>
  );
}
