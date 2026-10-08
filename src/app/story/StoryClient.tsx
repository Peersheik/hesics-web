"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, XCircle, ShieldCheck, Clock, Zap } from "lucide-react";
import FunnelHeader from "@/components/funnel/FunnelHeader";
import FunnelFooter from "@/components/funnel/FunnelFooter";
import { SITE_CONFIG } from "@/config/site";
import { trackEvent } from "@/lib/analytics";

export default function StoryClient() {
  useEffect(() => {
    trackEvent("view_story");
  }, []);

  return (
    <>
      <FunnelHeader />

      <main className="min-h-screen bg-[var(--f-bg,#08090d)] text-[var(--f-fg,#f8fafc)]">
        {/* Subtle top glow */}
        <div
          aria-hidden="true"
          className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.06),transparent_70%)] pointer-events-none z-0"
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
          
          {/* HEADER / INTRO */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--f-teal-dim,rgba(16,185,129,0.12))] border border-[var(--f-teal,#10b981)]/30 text-[var(--f-teal,#10b981)] text-xs font-semibold uppercase tracking-wider mb-4">
              Real Client Case Study · Dubai, UAE
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-[var(--f-font-display,sans-serif)] leading-tight mb-4">
              How Alsama Almonika Turned an Outdated Presence into a Client-Winning Asset
            </h1>
            <p className="text-sm sm:text-base text-[var(--f-fg-muted,#94a3b8)] leading-relaxed">
              In under 3 weeks, we replaced a 7-year-old static website with a high-trust digital platform that passes enterprise client pre-qualification.
            </p>
          </div>

          {/* PART 1: THE PROBLEM */}
          <div className="mb-12 p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-400 mb-3">
              <span className="w-2 h-2 rounded-full bg-red-400" />
              <span>The Problem</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              A Strong Company Behind a Weak Digital Door
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[var(--f-fg-muted,#94a3b8)] leading-relaxed">
              <p>
                Alsama Almonika Technical Services is an established Dubai-based technical contracting firm delivering commercial projects across the UAE.
              </p>
              <p>
                Their work was top-tier. But their website had been built years ago — slow on mobile, difficult to navigate, and lacking verified contractor certifications. Whenever enterprise procurement managers or general contractors searched for them during vendor evaluations, the outdated site undermined their hard-earned credibility.
              </p>
            </div>
          </div>

          {/* PART 2: WHAT WE BUILT (With exactly one clean screenshot) */}
          <div className="mb-12 p-6 sm:p-8 rounded-2xl border border-[var(--f-teal,#10b981)]/20 bg-[var(--f-teal-dim,rgba(16,185,129,0.03))]">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--f-teal,#10b981)] mb-3">
              <span className="w-2 h-2 rounded-full bg-[var(--f-teal,#10b981)]" />
              <span>What We Built</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              A Complete GrowthSite Delivered in Under 3 Weeks
            </h2>

            {/* The One Clean Screenshot */}
            <div className="my-6 relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-black">
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
              <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                <div className="text-[var(--f-gold,#d4af37)] font-bold text-sm mb-1 flex items-center gap-1.5">
                  <ShieldCheck size={16} /> Credibility Core
                </div>
                <p className="text-xs text-[var(--f-fg-muted,#94a3b8)] leading-relaxed">
                  Clear UAE commercial trade license verification, structured services, and completed project highlights.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                <div className="text-[var(--f-teal,#10b981)] font-bold text-sm mb-1 flex items-center gap-1.5">
                  <Zap size={16} /> Instant Lead Routing
                </div>
                <p className="text-xs text-[var(--f-fg-muted,#94a3b8)] leading-relaxed">
                  WhatsApp automation routing new inquiries straight to management, eliminating delayed responses.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                <div className="text-white font-bold text-sm mb-1 flex items-center gap-1.5">
                  <Clock size={16} /> 3-Week Delivery
                </div>
                <p className="text-xs text-[var(--f-fg-muted,#94a3b8)] leading-relaxed">
                  Full custom build delivered on schedule with zero revision delays.
                </p>
              </div>
            </div>
          </div>

          {/* PART 3: THE RESULT & CLIENT TESTIMONIAL */}
          <div className="mb-14 p-6 sm:p-8 rounded-2xl border border-[var(--f-gold,#d4af37)]/25 bg-[var(--f-gold-dim,rgba(212,175,55,0.04))]">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--f-gold,#d4af37)] mb-3">
              <span className="w-2 h-2 rounded-full bg-[var(--f-gold,#d4af37)]" />
              <span>Client Result & Feedback</span>
            </div>
            
            <blockquote className="text-base sm:text-lg text-white font-medium italic leading-relaxed mb-6">
              &quot;HESICS completely transformed our digital presence. For the first time, when potential clients and contractors look us up, our website matches the caliber of work we deliver on site. Delivered cleanly in 3 weeks without headaches.&quot;
            </blockquote>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[var(--f-gold,#d4af37)] to-amber-200 text-black font-black flex items-center justify-center text-sm">
                AA
              </div>
              <div>
                <div className="text-sm font-bold text-white">Management Team</div>
                <div className="text-xs text-[var(--f-fg-muted,#94a3b8)]">Alsama Almonika Technical Services · Dubai, UAE</div>
              </div>
            </div>
          </div>

          {/* STATS STRIP (Verifiable Facts Only) */}
          <div className="mb-14 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {SITE_CONFIG.stats.map((stat, i) => (
              <div
                key={i}
                className="p-4 rounded-xl border border-white/10 bg-white/[0.02] text-center"
              >
                <div className="text-2xl sm:text-3xl font-black text-[var(--f-gold,#d4af37)] font-[var(--f-font-display,sans-serif)] mb-1">
                  {stat.value}
                </div>
                <div className="text-[11px] uppercase tracking-wider text-[var(--f-fg-muted,#94a3b8)] font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* COMPARISON: Traditional Agencies vs. HESICS */}
          <div className="mb-16">
            <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-6 font-[var(--f-font-display,sans-serif)]">
              Traditional Agencies vs. HESICS GrowthSites
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Traditional */}
              <div className="p-6 rounded-xl border border-red-500/20 bg-red-500/[0.02]">
                <div className="text-sm font-bold text-red-400 mb-4 uppercase tracking-wider">
                  Traditional Agencies
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-zinc-400">
                  <li className="flex items-start gap-2.5">
                    <XCircle size={16} className="text-red-400 flex-shrink-0 mt-0.5" />
                    <span>Typically higher retainers with hidden add-on costs</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <XCircle size={16} className="text-red-400 flex-shrink-0 mt-0.5" />
                    <span>6 to 12 weeks of delayed delivery schedules</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <XCircle size={16} className="text-red-400 flex-shrink-0 mt-0.5" />
                    <span>Generic templates with zero conversion strategy</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <XCircle size={16} className="text-red-400 flex-shrink-0 mt-0.5" />
                    <span>No automated WhatsApp lead workflows included</span>
                  </li>
                </ul>
              </div>

              {/* HESICS */}
              <div className="p-6 rounded-xl border border-[var(--f-teal,#10b981)]/30 bg-[var(--f-teal-dim,rgba(16,185,129,0.06))] shadow-lg">
                <div className="text-sm font-bold text-[var(--f-teal,#10b981)] mb-4 uppercase tracking-wider">
                  HESICS Standard
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-white">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-[var(--f-teal,#10b981)] flex-shrink-0 mt-0.5" />
                    <span>Transparent fixed investment with 50/50 milestones</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-[var(--f-teal,#10b981)] flex-shrink-0 mt-0.5" />
                    <span>Guaranteed 2–3 week delivery turnaround</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-[var(--f-teal,#10b981)] flex-shrink-0 mt-0.5" />
                    <span>Custom brand credibility built to win corporate tenders</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-[var(--f-teal,#10b981)] flex-shrink-0 mt-0.5" />
                    <span>24/7 automated WhatsApp lead routing included</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* ONE CURIOSITY CTA TO /convert */}
          <div className="w-full flex flex-col items-center text-center p-8 rounded-2xl border border-[var(--f-gold,#d4af37)]/30 bg-gradient-to-b from-white/[0.03] to-transparent">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--f-gold,#d4af37)] mb-2">
              Next Step
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white font-[var(--f-font-display,sans-serif)] mb-3">
              Ready to See How We Package This?
            </h3>
            <p className="text-sm text-[var(--f-fg-muted,#94a3b8)] max-w-lg mb-6 leading-relaxed">
              Every HESICS GrowthSite includes something traditional web designers completely overlook.
            </p>

            <Link
              href="/convert"
              className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold text-black bg-gradient-to-r from-[var(--f-gold,#d4af37)] to-[var(--f-gold-light,#f3ce5e)] shadow-[0_0_25px_rgba(212,175,55,0.35)] hover:shadow-[0_0_35px_rgba(212,175,55,0.5)] hover:scale-[1.02] transition-all duration-200"
            >
              <span>There&apos;s One More Thing We Include That Nobody Else Does</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </main>

      <FunnelFooter />
    </>
  );
}
