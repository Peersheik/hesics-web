import type { Metadata } from "next";
import FunnelHeader from "@/components/funnel/FunnelHeader";
import FunnelFooter from "@/components/funnel/FunnelFooter";

export const metadata: Metadata = {
  title: "Privacy Policy — HESICS",
  description: "Privacy policy for HESICS digital agency.",
  robots: { index: false, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <FunnelHeader />
      <main className="max-w-3xl mx-auto px-4 py-16 text-[var(--f-fg,#f8fafc)]">
        <h1 className="text-3xl font-bold mb-6 font-[var(--f-font-display,sans-serif)]">
          Privacy Policy
        </h1>
        <div className="space-y-6 text-sm text-[var(--f-fg-muted,#94a3b8)] leading-relaxed">
          <p>
            Last updated: October 2026. HESICS is committed to protecting your personal data and respect your privacy.
          </p>
          <h2 className="text-lg font-semibold text-[var(--f-fg,#f8fafc)]">1. Information We Collect</h2>
          <p>
            When you request an audit or contact us via WhatsApp or form, we collect your name, business details, and contact information strictly to respond to your inquiry.
          </p>
          <h2 className="text-lg font-semibold text-[var(--f-fg,#f8fafc)]">2. How We Use Your Data</h2>
          <p>
            Your information is used solely to assess your website, provide project recommendations, and communicate directly regarding HESICS services. We never sell or share your data with third parties.
          </p>
          <h2 className="text-lg font-semibold text-[var(--f-fg,#f8fafc)]">3. Contact Us</h2>
          <p>
            If you have questions regarding your data, reach out to Sheikh directly via our WhatsApp channel.
          </p>
        </div>
      </main>
      <FunnelFooter />
    </>
  );
}
