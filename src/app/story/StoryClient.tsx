"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, XCircle, ShieldCheck, Clock, Zap } from "lucide-react";
import FunnelHeader from "@/components/funnel/FunnelHeader";
import FunnelFooter from "@/components/funnel/FunnelFooter";
import ParallaxBackground from "@/components/funnel/ParallaxBackground";
import { SITE_CONFIG } from "@/config/site";
import { trackEvent } from "@/lib/analytics";

export default function StoryClient() {
  useEffect(() => {
    trackEvent("view_story");
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050608] text-[#f8fafc] overflow-x-hidden selection:bg-[#d4af37] selection:text-black">
      {/* Scroll-Reactive Parallax Dubai Noir Skyline Background */}
      <ParallaxBackground imageSrc="/dubai-skyline.jpg" overlayOpacity={0.88} />

      <FunnelHeader />

      <main className="relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-20">
          
          {/* HEADER / INTRO */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/80 border border-[#10b981]/40 text-[#10b981] text-[11px] font-syne font-bold uppercase tracking-[0.2em] mb-5 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-ping" />
              <span>Declassified Case Dossier // Level 2</span>
            </div>
            <h1 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-5 drop-shadow-[0_4px_25px_rgba(0,0,0,0.9)]">
              How Alsama Almonika Turned an Outdated Presence into a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffd700] via-[#f3ce5e] to-[#d4af37]">
                Client-Winning Asset
              </span>
            </h1>
            <p className="font-syne text-sm sm:text-base text-[#94a3b8] leading-relaxed">
              In under 3 weeks, we replaced a 7-year-old static website with a high-trust digital platform that passes enterprise client pre-qualification.
            </p>
          </div>

          {/* PART 1: THE PROBLEM */}
          <div className="mb-14 p-6 sm:p-8 rounded-2xl border border-red-500/25 bg-[#090b10]/90 backdrop-blur-md shadow-[0_15px_40px_rgba(0,0,0,0.8)] relative group">
            <div className="tactical-crosshair crosshair-tl" />
            <div className="tactical-crosshair crosshair-br" />

            <div className="flex items-center gap-2 text-xs font-syne font-black uppercase tracking-[0.2em] text-red-400 mb-3">
              <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
              <span>The Diagnostic Problem</span>
            </div>
            <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-white mb-4">
              A High-Caliber Firm Behind an Outdated Digital Gate
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#94a3b8] leading-relaxed font-sans">
              <p>
                Alsama Almonika Technical Services is an established Dubai-based technical contracting firm delivering commercial projects across the UAE.
              </p>
              <p>
                Their on-site work was top-tier. But their website had been built years ago — slow on mobile, difficult to navigate, and lacking verified contractor certifications. Whenever enterprise procurement managers or general contractors searched for them during vendor evaluations, the outdated site undermined their hard-earned credibility.
              </p>
            </div>
          </div>

          {/* PART 2: WHAT WE BUILT (With exactly one clean screenshot) */}
          <div className="mb-14 p-6 sm:p-8 rounded-2xl border border-[#10b981]/30 bg-[#090b10]/90 backdrop-blur-md shadow-[0_15px_40px_rgba(0,0,0,0.8)] relative group">
            <div className="tactical-crosshair crosshair-tl" />
            <div className="tactical-crosshair crosshair-tr" />
            <div className="tactical-crosshair crosshair-bl" />
            <div className="tactical-crosshair crosshair-br" />

            <div className="flex items-center gap-2 text-xs font-syne font-black uppercase tracking-[0.2em] text-[#10b981] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
              <span>The Strategic Execution</span>
            </div>
            <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-white mb-4">
              A Complete GrowthSite Delivered in Under 3 Weeks
            </h2>

            {/* The One Clean Screenshot */}
            <div className="my-6 relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-[#d4af37]/30 shadow-[0_0_35px_rgba(0,0,0,0.9)] bg-black">
              <Image
                src="/funnel-mockup.jpg"
                alt="Alsama Almonika — Dubai client website built by HESICS"
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                priority
                className="object-cover"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              <div className="p-4 rounded-xl bg-black/60 border border-[#d4af37]/20">
                <div className="text-[#ffd700] font-syne font-bold text-sm mb-1.5 flex items-center gap-2">
                  <ShieldCheck size={16} className="text-[#ffd700]" />
                  <span>Credibility Core</span>
                </div>
                <p className="text-xs text-[#94a3b8] leading-relaxed">
                  Clear UAE commercial trade license verification, structured services, and completed project highlights.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-black/60 border border-[#10b981]/20">
                <div className="text-[#10b981] font-syne font-bold text-sm mb-1.5 flex items-center gap-2">
                  <Zap size={16} className="text-[#10b981]" />
                  <span>Instant Lead Routing</span>
                </div>
                <p className="text-xs text-[#94a3b8] leading-relaxed">
                  WhatsApp automation routing new inquiries straight to management, eliminating delayed responses.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-black/60 border border-white/10">
                <div className="text-white font-syne font-bold text-sm mb-1.5 flex items-center gap-2">
                  <Clock size={16} className="text-white" />
                  <span>3-Week Delivery</span>
                </div>
                <p className="text-xs text-[#94a3b8] leading-relaxed">
                  Full custom build delivered on schedule with zero revision delays.
                </p>
              </div>
            </div>
          </div>

          {/* PART 3: THE RESULT & CLIENT TESTIMONIAL */}
          <div className="mb-14 p-6 sm:p-8 rounded-2xl border border-[#d4af37]/35 bg-gradient-to-b from-[#d4af37]/10 to-[#090b10] backdrop-blur-md shadow-[0_15px_40px_rgba(0,0,0,0.8)] relative group">
            <div className="tactical-crosshair crosshair-tl" />
            <div className="tactical-crosshair crosshair-br" />

            <div className="flex items-center gap-2 text-xs font-syne font-black uppercase tracking-[0.2em] text-[#ffd700] mb-4">
              <span className="w-2 h-2 rounded-full bg-[#ffd700] animate-pulse" />
              <span>Verified Client Impact</span>
            </div>
            
            <blockquote className="font-cinzel text-base sm:text-lg text-white font-medium italic leading-relaxed mb-6">
              &quot;HESICS completely transformed our digital presence. For the first time, when potential clients and contractors look us up, our website matches the caliber of work we deliver on site. Delivered cleanly in 3 weeks without headaches.&quot;
            </blockquote>

            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#b8860b] via-[#ffd700] to-[#f3ce5e] text-black font-cinzel font-black flex items-center justify-center text-sm shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                AA
              </div>
              <div>
                <div className="font-syne text-sm font-bold text-white">Management Team</div>
                <div className="text-xs text-[#94a3b8] font-mono">Alsama Almonika Technical Services · Dubai, UAE</div>
              </div>
            </div>
          </div>

          {/* STATS STRIP (Verifiable Facts Only) */}
          <div className="mb-16 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {SITE_CONFIG.stats.map((stat, i) => (
              <div
                key={i}
                className="p-5 rounded-xl border border-[#d4af37]/20 bg-[#090b10]/80 backdrop-blur-md text-center shadow-[0_4px_20px_rgba(0,0,0,0.6)]"
              >
                <div className="font-cinzel text-2xl sm:text-3xl font-black text-[#ffd700] mb-1">
                  {stat.value}
                </div>
                <div className="font-syne text-[11px] uppercase tracking-wider text-[#94a3b8] font-bold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* COMPARISON: Traditional Agencies vs. HESICS */}
          <div className="mb-16">
            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white text-center mb-8">
              Traditional Agencies vs. HESICS GrowthSites
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Traditional */}
              <div className="p-6 rounded-2xl border border-red-500/20 bg-red-950/10 backdrop-blur-md">
                <div className="font-syne text-xs font-black text-red-400 mb-4 uppercase tracking-[0.2em]">
                  Typical Agency Retainers
                </div>
                <ul className="space-y-3.5 text-xs sm:text-sm text-zinc-400">
                  <li className="flex items-start gap-3">
                    <XCircle size={16} className="text-red-400 flex-shrink-0 mt-0.5" />
                    <span>Typically higher retainers with hidden add-on costs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle size={16} className="text-red-400 flex-shrink-0 mt-0.5" />
                    <span>6 to 12 weeks of delayed delivery schedules</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle size={16} className="text-red-400 flex-shrink-0 mt-0.5" />
                    <span>Generic templates with zero conversion strategy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle size={16} className="text-red-400 flex-shrink-0 mt-0.5" />
                    <span>No automated WhatsApp lead workflows included</span>
                  </li>
                </ul>
              </div>

              {/* HESICS */}
              <div className="p-6 rounded-2xl border-2 border-[#10b981]/40 bg-[#10b981]/10 backdrop-blur-md shadow-[0_0_30px_rgba(16,185,129,0.15)] relative">
                <div className="font-syne text-xs font-black text-[#10b981] mb-4 uppercase tracking-[0.2em]">
                  The HESICS Standard
                </div>
                <ul className="space-y-3.5 text-xs sm:text-sm text-white">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-[#10b981] flex-shrink-0 mt-0.5" />
                    <span>Transparent fixed investment with 50/50 milestones</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-[#10b981] flex-shrink-0 mt-0.5" />
                    <span>Guaranteed 2–3 week delivery turnaround</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-[#10b981] flex-shrink-0 mt-0.5" />
                    <span>Custom brand credibility built to win corporate tenders</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-[#10b981] flex-shrink-0 mt-0.5" />
                    <span>24/7 automated WhatsApp lead routing included</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* ONE CURIOSITY CTA TO /convert */}
          <div className="w-full flex flex-col items-center text-center p-8 sm:p-10 rounded-2xl border border-[#d4af37]/40 bg-gradient-to-b from-[#d4af37]/10 via-[#090b10] to-[#050608] shadow-[0_20px_50px_rgba(0,0,0,0.9)] relative group">
            <div className="tactical-crosshair crosshair-tl" />
            <div className="tactical-crosshair crosshair-tr" />
            <div className="tactical-crosshair crosshair-bl" />
            <div className="tactical-crosshair crosshair-br" />

            <span className="font-syne text-xs font-bold uppercase tracking-[0.25em] text-[#ffd700] mb-2">
              LEVEL 3 REVELATION // INEVITABLE CONCLUSION
            </span>
            <h3 className="font-cinzel text-2xl sm:text-3xl font-black text-white mb-3">
              Ready to See How We Package This?
            </h3>
            <p className="font-syne text-sm text-[#94a3b8] max-w-lg mb-8 leading-relaxed">
              Every HESICS GrowthSite includes something traditional web designers completely overlook.
            </p>

            <Link
              href="/convert"
              className="group relative inline-flex items-center justify-center gap-3 px-9 py-5 rounded-xl text-base sm:text-lg font-syne font-black text-black bg-gradient-to-r from-[#b8860b] via-[#ffd700] to-[#f3ce5e] shadow-[0_0_35px_rgba(212,175,55,0.4)] hover:shadow-[0_0_55px_rgba(212,175,55,0.6)] hover:scale-[1.03] active:scale-[0.99] transition-all duration-300"
            >
              <span>There&apos;s One More Thing We Include That Nobody Else Does</span>
              <ArrowRight size={20} className="group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>

        </div>
      </main>

      <FunnelFooter />
    </div>
  );
}
