"use client";

import { useEffect, useState, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { X, ArrowRight, Building2, Home as HomeIcon, UtensilsCrossed, ShieldAlert } from "lucide-react";
import FunnelHeader from "@/components/funnel/FunnelHeader";
import FunnelFooter from "@/components/funnel/FunnelFooter";
import VideoVisualSlot from "@/components/funnel/VideoVisualSlot";
import ParallaxBackground from "@/components/funnel/ParallaxBackground";
import { SITE_CONFIG } from "@/config/site";
import { trackEvent } from "@/lib/analytics";

type SegmentKey = "technical" | "realestate" | "restaurant" | "default";

interface SegmentContent {
  badge: string;
  headlineAccent?: string;
  subheadline: string;
  pains: string[];
}

const SEGMENT_DATA: Record<SegmentKey, SegmentContent> = {
  default: {
    badge: "Gulf-Based Indian Business Owners // Level 1",
    subheadline:
      "AI-powered websites for Gulf-based Indian business owners that win clients while you sleep.",
    pains: [
      "Losing tenders and contracts because your website looks outdated or amateurish",
      "Paying exorbitant Dubai agency rates for basic templates that take months",
      "A website that just 'exists' — zero leads, no WhatsApp automation, no results",
    ],
  },
  technical: {
    badge: "Technical & Contracting Sector // Level 1",
    headlineAccent: "Win Subcontract Tenders Before The Pre-Bid Meeting",
    subheadline:
      "AI-powered websites for Gulf-based Indian technical, MEP, and contracting firms that pass vendor pre-qualification while you sleep.",
    pains: [
      "Losing high-value commercial tenders because your digital profile fails contractor due-diligence",
      "Paying 20,000+ AED agency rates for static pages that don't showcase technical compliance",
      "No verified project portfolio or instant WhatsApp routing for urgent project managers",
    ],
  },
  realestate: {
    badge: "Real Estate & Capital Brokerage // Level 1",
    headlineAccent: "Capture High-Intent Property Buyers on WhatsApp",
    subheadline:
      "AI-powered websites for Gulf-based Indian real estate agencies that attract affluent investors and qualify buyer leads while you sleep.",
    pains: [
      "Losing high-net-worth investors because your landing page looks unverified and slow",
      "Wasting advertising budget on pages that fail to convert traffic into WhatsApp inquiries",
      "Zero automated lead qualification, forcing your brokers to waste time on cold tire-kickers",
    ],
  },
  restaurant: {
    badge: "Hospitality & Dining Chains // Level 1",
    headlineAccent: "Own Your Direct Customers Without 30% Aggregator Cuts",
    subheadline:
      "AI-powered websites for Gulf-based Indian restaurant owners that drive direct party bookings and catering leads while you sleep.",
    pains: [
      "Losing high-margin catering and bulk orders because you have no direct ordering funnel",
      "Slow, unoptimized mobile menus that drive hungry customers straight to third-party apps",
      "No direct WhatsApp reservation routing or automated customer re-engagement",
    ],
  },
};

function FunnelHomeContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const segParam = (searchParams.get("seg") as SegmentKey) || "default";
  const [currentSeg, setCurrentSeg] = useState<SegmentKey>("default");

  useEffect(() => {
    if (segParam && SEGMENT_DATA[segParam]) {
      setCurrentSeg(segParam);
    } else {
      setCurrentSeg("default");
    }
  }, [segParam]);

  const activeContent = SEGMENT_DATA[currentSeg] || SEGMENT_DATA.default;

  const handleSelectSegment = (key: SegmentKey) => {
    setCurrentSeg(key);
    const params = new URLSearchParams(window.location.search);
    if (key === "default") {
      params.delete("seg");
    } else {
      params.set("seg", key);
    }
    const newUrl = params.toString() ? `/?${params.toString()}` : "/";
    router.replace(newUrl, { scroll: false });

    // Smooth scroll back to top of hero
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCtaClick = () => {
    trackEvent("view_story", { from_segment: currentSeg });
  };

  return (
    <div className="relative min-h-screen bg-[#050608] text-[#f8fafc] overflow-x-hidden selection:bg-[#d4af37] selection:text-black">
      {/* Scroll-Reactive Moving Parallax Vault Background */}
      <ParallaxBackground imageSrc="/mastermind-vault.jpg" overlayOpacity={0.86} />

      <FunnelHeader />

      <main className="relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-20 flex flex-col items-center text-center">
          
          {/* SECTION 1: HERO */}
          <div className="flex flex-col items-center w-full">
            
            {/* Tactical Intelligence Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/80 border border-[#d4af37]/40 text-[#ffd700] text-[11px] font-syne font-bold uppercase tracking-[0.2em] mb-6 shadow-[0_0_20px_rgba(212,175,55,0.15)]">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-ping" />
              <span>{activeContent.badge}</span>
            </div>

            {/* H1 — Cinematic Authority Headline */}
            <h1 className="font-cinzel text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12] max-w-3xl mb-6 drop-shadow-[0_4px_25px_rgba(0,0,0,0.9)]">
              Your Business Deserves to Be Trusted Before the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffd700] via-[#f3ce5e] to-[#d4af37] drop-shadow-[0_0_25px_rgba(212,175,55,0.35)]">
                First Meeting
              </span>{" "}
              Even Starts
            </h1>

            {/* Subheadline */}
            <p className="font-syne text-base sm:text-lg md:text-xl text-[#94a3b8] max-w-2xl leading-relaxed mb-10 font-normal">
              {activeContent.subheadline}
            </p>
          </div>

          {/* SECTION 2: VIDEO / VISUAL SLOT (Surveillance / Before-After Console) */}
          <div className="w-full max-w-2xl mb-12">
            <VideoVisualSlot
              caption="This is how we turned an outdated presence into a client-winning website — in under 3 weeks."
            />
          </div>

          {/* SECTION 3: CREDIBILITY LINE (Mastermind Clearance Dossier) */}
          <div className="w-full max-w-xl mb-14 p-4 sm:p-5 rounded-2xl border border-[#d4af37]/25 bg-[#090b10]/85 backdrop-blur-md flex items-center gap-4 text-left shadow-[0_10px_30px_rgba(0,0,0,0.7)] relative group hover:border-[#d4af37]/45 transition-colors">
            <div className="tactical-crosshair crosshair-tl" />
            <div className="tactical-crosshair crosshair-br" />

            <div className="relative w-14 h-14 rounded-full overflow-hidden bg-gradient-to-tr from-[#d4af37] to-[#10b981] flex-shrink-0 border-2 border-[#d4af37]/40 shadow-[0_0_15px_rgba(212,175,55,0.3)]">
              <Image
                src={SITE_CONFIG.founder.image}
                alt={SITE_CONFIG.founder.name}
                fill
                className="object-cover"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = "none";
                }}
              />
              <div className="w-full h-full flex items-center justify-center font-cinzel font-black text-black text-xl">
                S
              </div>
            </div>

            <div>
              <div className="font-cinzel text-sm sm:text-base font-bold text-white flex items-center gap-2">
                <span>{SITE_CONFIG.founder.name}</span>
                <span className="text-[#d4af37] font-syne font-semibold text-xs tracking-wider">
                  // {SITE_CONFIG.founder.role}
                </span>
              </div>
              <div className="text-xs text-[#94a3b8] mt-1 leading-snug font-mono">
                {SITE_CONFIG.founder.credentials}
              </div>
            </div>
          </div>

          {/* SECTION 4: 3 PAIN BULLETS (Fatal Business Leaks) */}
          <div className="w-full max-w-2xl mb-14 text-left">
            <div className="flex items-center justify-between gap-2 mb-3 px-1">
              <div className="font-syne text-xs uppercase font-black tracking-[0.2em] text-red-400 flex items-center gap-2">
                <ShieldAlert size={14} className="text-red-400 animate-pulse" />
                <span>The 3 Fatal Revenue Leaks in the Gulf</span>
              </div>
              <span className="text-[10px] font-mono text-zinc-500 uppercase">STATUS: CRITICAL</span>
            </div>

            <div className="space-y-3">
              {activeContent.pains.map((pain, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3.5 p-4 rounded-xl border border-red-500/25 bg-red-950/15 backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.5)] relative overflow-hidden"
                >
                  <div className="p-1 rounded-md bg-red-500/20 text-red-400 flex-shrink-0 mt-0.5 border border-red-500/30">
                    <X size={15} strokeWidth={2.5} />
                  </div>
                  <p className="text-sm sm:text-base text-zinc-200 leading-snug font-medium">
                    {pain}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 5: 3 SEGMENT CARDS (Vault Access Keys) */}
          <div className="w-full max-w-2xl mb-14">
            <div className="font-syne text-xs uppercase font-bold tracking-[0.2em] text-[#d4af37] mb-3 text-center">
              Select Your Industry To Calibrate This Trap
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => handleSelectSegment("technical")}
                className={`p-3.5 rounded-xl border text-xs font-syne font-bold flex items-center justify-center gap-2.5 transition-all cursor-pointer ${
                  currentSeg === "technical"
                    ? "border-[#10b981] bg-[#10b981]/20 text-white shadow-[0_0_25px_rgba(16,185,129,0.35)] scale-[1.02]"
                    : "border-white/10 bg-black/50 text-zinc-400 hover:text-white hover:border-[#10b981]/40"
                }`}
              >
                <Building2 size={16} className="text-[#10b981]" />
                <span>Technical & MEP</span>
              </button>

              <button
                type="button"
                onClick={() => handleSelectSegment("realestate")}
                className={`p-3.5 rounded-xl border text-xs font-syne font-bold flex items-center justify-center gap-2.5 transition-all cursor-pointer ${
                  currentSeg === "realestate"
                    ? "border-[#d4af37] bg-[#d4af37]/20 text-white shadow-[0_0_25px_rgba(212,175,55,0.35)] scale-[1.02]"
                    : "border-white/10 bg-black/50 text-zinc-400 hover:text-white hover:border-[#d4af37]/40"
                }`}
              >
                <HomeIcon size={16} className="text-[#ffd700]" />
                <span>Real Estate</span>
              </button>

              <button
                type="button"
                onClick={() => handleSelectSegment("restaurant")}
                className={`p-3.5 rounded-xl border text-xs font-syne font-bold flex items-center justify-center gap-2.5 transition-all cursor-pointer ${
                  currentSeg === "restaurant"
                    ? "border-emerald-400 bg-emerald-500/20 text-white shadow-[0_0_25px_rgba(52,211,153,0.35)] scale-[1.02]"
                    : "border-white/10 bg-black/50 text-zinc-400 hover:text-white hover:border-emerald-500/40"
                }`}
              >
                <UtensilsCrossed size={16} className="text-emerald-400" />
                <span>Restaurants</span>
              </button>
            </div>
          </div>

          {/* SECTION 6: SINGLE PRIMARY CTA */}
          <div className="w-full flex flex-col items-center">
            <Link
              href="/story"
              onClick={handleCtaClick}
              className="group relative inline-flex items-center justify-center gap-3 px-9 py-5 rounded-xl text-base sm:text-lg font-syne font-black text-black bg-gradient-to-r from-[#b8860b] via-[#ffd700] to-[#f3ce5e] shadow-[0_0_35px_rgba(212,175,55,0.4)] hover:shadow-[0_0_55px_rgba(212,175,55,0.6)] hover:scale-[1.03] active:scale-[0.99] transition-all duration-300"
            >
              <span>See How We Solved This For a Real Client</span>
              <ArrowRight size={20} className="group-hover:translate-x-1.5 transition-transform" />
            </Link>

            <p className="font-syne text-xs text-zinc-400 mt-4 tracking-wider uppercase font-semibold">
              Real Dubai Case Breakdown · 3-Minute Read · No Pitch
            </p>
          </div>

        </div>
      </main>

      <FunnelFooter />
    </div>
  );
}

export default function HomeClient() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#050608]" />}>
      <FunnelHomeContent />
    </Suspense>
  );
}
