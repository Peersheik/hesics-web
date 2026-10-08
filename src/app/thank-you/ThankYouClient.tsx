"use client";

import React from "react";
import { CheckCircle2, MessageSquare } from "lucide-react";
import FunnelHeader from "@/components/funnel/FunnelHeader";
import FunnelFooter from "@/components/funnel/FunnelFooter";
import ParallaxBackground from "@/components/funnel/ParallaxBackground";
import { waLink } from "@/config/site";
import { trackEvent } from "@/lib/analytics";

export default function ThankYouClient() {
  const handleWaClick = () => {
    trackEvent("click_whatsapp", { location: "thank_you_page" });
  };

  return (
    <div className="relative min-h-screen bg-[#050608] text-[#f8fafc] overflow-x-hidden selection:bg-[#d4af37] selection:text-black flex flex-col justify-between">
      {/* Scroll-Reactive Parallax Dubai Noir Skyline Background */}
      <ParallaxBackground imageSrc="/dubai-skyline.jpg" overlayOpacity={0.9} />

      <FunnelHeader />

      <main className="relative z-10 flex-1 flex items-center justify-center px-4 py-20">
        <div className="max-w-md w-full text-center p-8 sm:p-10 rounded-2xl border-2 border-[#10b981]/40 bg-[#090b10]/95 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.9)] relative group">
          <div className="tactical-crosshair crosshair-tl" />
          <div className="tactical-crosshair crosshair-tr" />
          <div className="tactical-crosshair crosshair-bl" />
          <div className="tactical-crosshair crosshair-br" />

          <div className="w-16 h-16 rounded-full bg-[#10b981]/20 text-[#10b981] flex items-center justify-center mx-auto mb-6 border border-[#10b981]/40 shadow-[0_0_25px_rgba(16,185,129,0.35)]">
            <CheckCircle2 size={36} />
          </div>

          <h1 className="font-cinzel text-3xl sm:text-4xl font-black text-white mb-3 tracking-wide">
            Got it.
          </h1>

          <p className="font-syne text-base text-[#94a3b8] mb-8 leading-relaxed font-semibold">
            We&apos;ll reach out within 24 hours.
          </p>

          <a
            href={waLink("Hi Sheikh, I just submitted my details on HESICS. Want to connect directly.")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWaClick}
            className="inline-flex items-center justify-center gap-2.5 w-full py-4 px-6 rounded-xl font-syne font-black text-sm bg-[#22c55e] hover:bg-[#15803d] text-white shadow-[0_0_25px_rgba(34,197,94,0.4)] transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
          >
            <MessageSquare size={17} />
            <span>Chat on WhatsApp Directly</span>
          </a>
        </div>
      </main>

      <FunnelFooter />
    </div>
  );
}
