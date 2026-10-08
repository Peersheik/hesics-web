"use client";

import React from "react";
import { CheckCircle2, MessageSquare } from "lucide-react";
import FunnelHeader from "@/components/funnel/FunnelHeader";
import FunnelFooter from "@/components/funnel/FunnelFooter";
import { waLink } from "@/config/site";
import { trackEvent } from "@/lib/analytics";

export default function ThankYouClient() {
  const handleWaClick = () => {
    trackEvent("click_whatsapp", { location: "thank_you_page" });
  };

  return (
    <>
      <FunnelHeader />

      <main className="min-h-[80vh] flex items-center justify-center bg-[var(--f-bg,#08090d)] text-[var(--f-fg,#f8fafc)] px-4 py-16">
        <div className="max-w-md w-full text-center p-8 rounded-2xl border border-[var(--f-teal,#10b981)]/30 bg-[var(--f-teal-dim,rgba(16,185,129,0.04))] shadow-2xl backdrop-blur-md">
          <div className="w-16 h-16 rounded-full bg-[var(--f-teal,#10b981)]/20 text-[var(--f-teal,#10b981)] flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={36} />
          </div>

          <h1 className="text-3xl font-black text-white font-[var(--f-font-display,sans-serif)] mb-3">
            Got it.
          </h1>

          <p className="text-base text-[var(--f-fg-muted,#94a3b8)] mb-8 leading-relaxed font-normal">
            We&apos;ll reach out within 24 hours.
          </p>

          <a
            href={waLink("Hi Sheikh, I just submitted my details on HESICS. Want to connect directly.")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWaClick}
            className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl font-bold text-sm bg-[var(--f-whatsapp,#22c55e)] hover:bg-[var(--f-whatsapp-dark,#15803d)] text-white shadow-lg transition-all"
          >
            <MessageSquare size={16} />
            <span>Chat on WhatsApp Directly</span>
          </a>
        </div>
      </main>

      <FunnelFooter />
    </>
  );
}
