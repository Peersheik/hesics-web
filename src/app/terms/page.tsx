import type { Metadata } from "next";
import FunnelHeader from "@/components/funnel/FunnelHeader";
import FunnelFooter from "@/components/funnel/FunnelFooter";
import { SITE_CONFIG } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms of Service — HESICS",
  description: "Terms of service and delivery guarantee for HESICS.",
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <FunnelHeader />
      <main className="max-w-3xl mx-auto px-4 py-16 text-[var(--f-fg,#f8fafc)]">
        <h1 className="text-3xl font-bold mb-6 font-[var(--f-font-display,sans-serif)]">
          Terms of Service
        </h1>
        <div className="space-y-6 text-sm text-[var(--f-fg-muted,#94a3b8)] leading-relaxed">
          <p>Last updated: October 2026. By engaging with HESICS, you agree to these service terms.</p>
          <h2 className="text-lg font-semibold text-[var(--f-fg,#f8fafc)]">1. Scope of Work</h2>
          <p>
            HESICS delivers bespoke GrowthSites tailored to client specifications. Project milestones, deliverables, and timelines are agreed upon prior to kickoff.
          </p>
          <h2 className="text-lg font-semibold text-[var(--f-fg,#f8fafc)]">2. Delivery Guarantee</h2>
          <p>{SITE_CONFIG.guaranteeText}</p>
          <h2 className="text-lg font-semibold text-[var(--f-fg,#f8fafc)]">3. Payments & Revisions</h2>
          <p>
            Payments are structured into 50% milestone advance and 50% upon final delivery and client approval. Unlimited revisions are provided prior to final production handover.
          </p>
        </div>
      </main>
      <FunnelFooter />
    </>
  );
}
