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
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[var(--f-bg-glass,#08090d)] border-b border-[var(--f-border,rgba(255,255,255,0.08))]">
      <div className="max-w-6xl mx-auto px-4 py-3.5 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 group text-decoration-none">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[var(--f-gold,#d4af37)] to-[var(--f-gold-light,#f3ce5e)] flex items-center justify-center font-black text-black text-base shadow-[0_0_15px_rgba(212,175,55,0.3)]">
            H
          </div>
          <div className="flex flex-col text-left">
            <span className="font-bold text-sm tracking-widest uppercase text-[var(--f-fg,#f8fafc)] font-[var(--f-font-display,sans-serif)]">
              HESICS
            </span>
            <span className="text-[9px] uppercase tracking-wider text-[var(--f-gold,#d4af37)]">
              GrowthSites
            </span>
          </div>
        </Link>

        {/* Small WhatsApp button ONLY */}
        <a
          href={waLink("Hi Sheikh, I'd like to ask a quick question about HESICS GrowthSites.")}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWaClick}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full bg-[var(--f-teal-dim,rgba(16,185,129,0.12))] text-[var(--f-teal,#10b981)] border border-[var(--f-teal,#10b981)]/30 hover:bg-[var(--f-teal,#10b981)] hover:text-white transition-all duration-200"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare size={13} />
          <span>WhatsApp</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--f-teal,#10b981)] animate-ping" />
        </a>
      </div>
    </header>
  );
}
