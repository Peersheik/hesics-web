import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "../globals.css";
import "./funnel.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});


export const metadata: Metadata = {
  metadataBase: new URL("https://hesics.com"),
  title: "HESICS — Gulf Growth Sites | Win Tenders, Win Leads",
  description:
    "HESICS builds trust-first websites for Gulf-based Indian business owners. AI-powered lead automation, professional design, delivered on time — at a fraction of Dubai agency rates.",
  keywords: [
    "HESICS",
    "Dubai website",
    "Gulf business website",
    "Indian business Dubai",
    "website design UAE",
    "lead automation Dubai",
    "AI website",
    "WhatsApp automation",
  ],
  authors: [{ name: "Sheikh — HESICS", url: "https://hesics.com" }],
  creator: "HESICS",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hesics.com/funnel",
    siteName: "HESICS",
    title: "Your Business Deserves to Be Trusted Before the First Meeting",
    description:
      "The exact system that wins tenders, wins leads, and works while you sleep.",
  },
};

import type { Metadata } from "next";
import ThemePullCord from "@/components/funnel/ThemePullCord";

export default function FunnelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}



