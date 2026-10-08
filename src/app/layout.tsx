import type { Metadata, Viewport } from "next";
import { Cinzel, Syne, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import "./funnel/funnel.css";
import SmoothScroll from "@/components/dom/SmoothScroll";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-cinzel",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

import { SITE_CONFIG } from "@/config/site";
import AnalyticsProvider from "@/components/analytics/AnalyticsProvider";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#050608",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.domain),
  title: "HESICS — GrowthSites That Win Tenders & Leads",
  description:
    "AI-powered websites for Gulf-based Indian business owners that win clients while you sleep.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.domain,
    siteName: "HESICS",
    title: "Your Business Deserves to Be Trusted Before the First Meeting Even Starts",
    description:
      "AI-powered websites for Gulf-based Indian business owners that win clients while you sleep.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${syne.variable} ${jakarta.variable} dark`}
      suppressHydrationWarning
    >
      <body className="funnel-body overflow-x-hidden min-h-screen relative bg-[#050608] text-[#f8fafc]">
        <AnalyticsProvider />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
