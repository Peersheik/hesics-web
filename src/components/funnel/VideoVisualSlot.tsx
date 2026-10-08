"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CheckCircle2, AlertTriangle, Play } from "lucide-react";

interface VideoVisualSlotProps {
  videoUrl?: string;
  caption?: string;
}

export default function VideoVisualSlot({
  videoUrl,
  caption = "This is how we turned an outdated presence into a client-winning website — in under 3 weeks.",
}: VideoVisualSlotProps) {
  const [activeTab, setActiveTab] = useState<"after" | "before">("after");

  if (videoUrl) {
    return (
      <div className="w-full rounded-2xl overflow-hidden border border-[var(--f-border,rgba(255,255,255,0.1))] bg-[var(--f-bg-glass,#08090d)] shadow-2xl">
        <div className="relative aspect-video w-full bg-black">
          <video
            src={videoUrl}
            controls
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
        {caption && (
          <p className="p-4 text-center text-xs md:text-sm text-[var(--f-fg-muted,#94a3b8)] italic">
            &quot;{caption}&quot;
          </p>
        )}
      </div>
    );
  }

  // Fallback: Before / After transformation viewer for Alsama Almonika (Dubai, UAE)
  return (
    <div className="relative w-full rounded-2xl border border-[#d4af37]/30 bg-[#090b10]/90 backdrop-blur-md p-4 sm:p-5 shadow-[0_15px_40px_rgba(0,0,0,0.8)] group">
      <div className="tactical-crosshair crosshair-tl" />
      <div className="tactical-crosshair crosshair-tr" />
      <div className="tactical-crosshair crosshair-bl" />
      <div className="tactical-crosshair crosshair-br" />

      {/* Top Header & Toggle */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
        <div>
          <span className="text-[10px] font-syne font-black uppercase tracking-[0.2em] text-[#ffd700]">
            DEPUTY CLEARANCE // DUBAI DEPLOYMENT
          </span>
          <h4 className="font-cinzel text-sm sm:text-base font-bold text-white tracking-wide">
            Alsama Almonika Technical Services
          </h4>
        </div>

        {/* Tab Switcher */}
        <div className="inline-flex items-center p-1 rounded-full bg-black/60 border border-white/10 text-xs">
          <button
            type="button"
            onClick={() => setActiveTab("after")}
            className={`px-3 py-1 rounded-full font-syne font-bold transition-all cursor-pointer ${
              activeTab === "after"
                ? "bg-gradient-to-r from-[#d4af37] to-[#ffd700] text-black shadow-md"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            GrowthSite (After)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("before")}
            className={`px-3 py-1 rounded-full font-syne font-bold transition-all cursor-pointer ${
              activeTab === "before"
                ? "bg-red-500/20 text-red-400 border border-red-500/30"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Old Site (Before)
          </button>
        </div>
      </div>

      {/* Visual Window */}
      <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-white/10 bg-black">
        {activeTab === "after" ? (
          <>
            <Image
              src="/funnel-mockup.jpg"
              alt="Alsama Almonika — Dubai client website built by HESICS"
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between p-2.5 rounded-lg bg-black/85 backdrop-blur-md border border-[var(--f-teal,#10b981)]/30 text-xs text-white">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[var(--f-teal,#10b981)] flex-shrink-0" />
                <span>
                  <strong className="text-white">Delivered in under 3 weeks</strong> — Live Dubai commercial presence
                </span>
              </div>
              <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-[var(--f-teal,#10b981)]/20 text-[var(--f-teal,#10b981)] border border-[var(--f-teal,#10b981)]/30">
                Verified
              </span>
            </div>
          </>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-zinc-950/90 text-zinc-400">
            <AlertTriangle size={32} className="text-red-400 mb-2" />
            <div className="text-sm font-bold text-red-400 mb-1">Outdated 2017 Static Presence</div>
            <p className="text-xs max-w-sm text-zinc-400 leading-relaxed">
              Slow mobile speed, zero WhatsApp inquiry routing, unverified credentials — losing commercial tender bids silently before the first meeting.
            </p>
          </div>
        )}
      </div>

      {/* Required Caption */}
      <p className="mt-3.5 text-center text-xs md:text-sm text-[var(--f-fg-muted,#94a3b8)] italic leading-relaxed">
        &quot;{caption}&quot;
      </p>
    </div>
  );
}
