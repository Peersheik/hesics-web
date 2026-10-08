"use client";

import { useEffect, useState, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { X, ArrowRight, Building2, Home as HomeIcon, UtensilsCrossed } from "lucide-react";
import FunnelHeader from "@/components/funnel/FunnelHeader";
import FunnelFooter from "@/components/funnel/FunnelFooter";
import VideoVisualSlot from "@/components/funnel/VideoVisualSlot";
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
    badge: "Gulf-Based Indian Business Owners",
    subheadline:
      "AI-powered websites for Gulf-based Indian business owners that win clients while you sleep.",
    pains: [
      "Losing tenders and contracts because your website looks outdated or amateurish",
      "Paying exorbitant Dubai agency rates for basic templates that take months",
      "A website that just 'exists' — zero leads, no WhatsApp automation, no results",
    ],
  },
  technical: {
    badge: "Technical & Contracting Companies",
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
    badge: "Real Estate Agencies & Brokerages",
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
    badge: "Restaurants & Hospitality",
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
    <>
      <FunnelHeader />

      <main className="min-h-screen bg-[var(--f-bg,#08090d)] text-[var(--f-fg,#f8fafc)]">
        {/* Top ambient glow */}
        <div
          aria-hidden="true"
          className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.08),transparent_70%)] pointer-events-none z-0"
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-20 flex flex-col items-center text-center">
          
          {/* SECTION 1: HERO */}
          <div className="flex flex-col items-center">
            {/* Segment Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--f-teal-dim,rgba(16,185,129,0.12))] border border-[var(--f-teal,#10b981)]/30 text-[var(--f-teal,#10b981)] text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--f-teal,#10b981)] animate-pulse" />
              <span>{activeContent.badge}</span>
            </div>

            {/* H1 */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white font-[var(--f-font-display,sans-serif)] leading-[1.1] max-w-3xl mb-5">
              Your Business Deserves to Be Trusted Before the First Meeting Even Starts
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl text-[var(--f-fg-muted,#94a3b8)] max-w-2xl leading-relaxed mb-10 font-normal">
              {activeContent.subheadline}
            </p>
          </div>

          {/* SECTION 2: VIDEO / VISUAL SLOT */}
          <div className="w-full max-w-2xl mb-12">
            <VideoVisualSlot
              caption="This is how we turned an outdated presence into a client-winning website — in under 3 weeks."
            />
          </div>

          {/* SECTION 3: CREDIBILITY LINE */}
          <div className="w-full max-w-xl mb-12 p-4 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm flex items-center gap-4 text-left">
            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gradient-to-tr from-[var(--f-gold,#d4af37)] to-[var(--f-teal,#10b981)] flex-shrink-0 border border-white/20">
              <Image
                src={SITE_CONFIG.founder.image}
                alt={SITE_CONFIG.founder.name}
                fill
                className="object-cover"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = "none";
                }}
              />
              <div className="w-full h-full flex items-center justify-center font-bold text-black text-lg">
                S
              </div>
            </div>
            <div>
              <div className="text-sm font-bold text-white flex items-center gap-1.5">
                <span>{SITE_CONFIG.founder.name}</span>
                <span className="text-[var(--f-fg-muted,#94a3b8)] font-normal text-xs">· {SITE_CONFIG.founder.role}</span>
              </div>
              <div className="text-xs text-[var(--f-fg-muted,#94a3b8)] mt-0.5 leading-snug">
                {SITE_CONFIG.founder.credentials}
              </div>
            </div>
          </div>

          {/* SECTION 4: 3 PAIN BULLETS (X style with Lucide X icon) */}
          <div className="w-full max-w-2xl mb-14 text-left">
            <div className="text-xs uppercase font-bold tracking-widest text-red-400/80 mb-3 text-center sm:text-left">
              The Cost of an Outdated Presence
            </div>
            <div className="space-y-3">
              {activeContent.pains.map((pain, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3.5 p-3.5 rounded-xl border border-red-500/20 bg-red-500/[0.04]"
                >
                  <div className="p-1 rounded-md bg-red-500/10 text-red-400 flex-shrink-0 mt-0.5">
                    <X size={14} strokeWidth={2.5} />
                  </div>
                  <p className="text-sm sm:text-base text-zinc-300 leading-snug font-medium">
                    {pain}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 5: 3 SEGMENT CARDS (one line each, sets ?seg) */}
          <div className="w-full max-w-2xl mb-12">
            <div className="text-xs uppercase font-bold tracking-widest text-[var(--f-gold,#d4af37)] mb-3 text-center">
              Select Your Industry To Tailor This Page
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <button
                type="button"
                onClick={() => handleSelectSegment("technical")}
                className={`p-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                  currentSeg === "technical"
                    ? "border-[var(--f-teal,#10b981)] bg-[var(--f-teal-dim,rgba(16,185,129,0.15))] text-white shadow-lg"
                    : "border-white/10 bg-white/[0.02] text-zinc-400 hover:text-white hover:border-white/20"
                }`}
              >
                <Building2 size={15} className="text-[var(--f-teal,#10b981)]" />
                <span>Technical & Contracting</span>
              </button>

              <button
                type="button"
                onClick={() => handleSelectSegment("realestate")}
                className={`p-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                  currentSeg === "realestate"
                    ? "border-[var(--f-gold,#d4af37)] bg-[var(--f-gold-dim,rgba(212,175,55,0.15))] text-white shadow-lg"
                    : "border-white/10 bg-white/[0.02] text-zinc-400 hover:text-white hover:border-white/20"
                }`}
              >
                <HomeIcon size={15} className="text-[var(--f-gold,#d4af37)]" />
                <span>Real Estate</span>
              </button>

              <button
                type="button"
                onClick={() => handleSelectSegment("restaurant")}
                className={`p-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                  currentSeg === "restaurant"
                    ? "border-emerald-500 bg-emerald-500/15 text-white shadow-lg"
                    : "border-white/10 bg-white/[0.02] text-zinc-400 hover:text-white hover:border-white/20"
                }`}
              >
                <UtensilsCrossed size={15} className="text-emerald-400" />
                <span>Restaurants</span>
              </button>
            </div>
          </div>

          {/* SECTION 6: SINGLE PRIMARY CTA */}
          <div className="w-full flex flex-col items-center">
            <Link
              href="/story"
              onClick={handleCtaClick}
              className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold text-black bg-gradient-to-r from-[var(--f-gold,#d4af37)] to-[var(--f-gold-light,#f3ce5e)] shadow-[0_0_25px_rgba(212,175,55,0.35)] hover:shadow-[0_0_35px_rgba(212,175,55,0.5)] hover:scale-[1.02] transition-all duration-200"
            >
              <span>See How We Solved This For a Real Client</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <p className="text-xs text-[var(--f-fg-muted,#94a3b8)] mt-4">
              Real Dubai case breakdown · 3-minute read · No pitch
            </p>
          </div>

        </div>
      </main>

      <FunnelFooter />
    </>
  );
}

export default function HomeClient() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#08090d]" />}>
      <FunnelHomeContent />
    </Suspense>
  );
}
