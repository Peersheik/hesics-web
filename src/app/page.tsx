import type { Metadata } from "next";
import HomeClient from "./HomeClient";
import { SITE_CONFIG } from "@/config/site";

export const metadata: Metadata = {
  title: "Your Business Deserves to Be Trusted Before the First Meeting Even Starts — HESICS",
  description:
    "AI-powered websites for Gulf-based Indian business owners that win clients while you sleep. MSME-registered digital agency.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Your Business Deserves to Be Trusted Before the First Meeting Even Starts — HESICS",
    description:
      "AI-powered websites for Gulf-based Indian business owners that win clients while you sleep.",
    url: SITE_CONFIG.domain,
  },
};

export default function Home() {
  return <HomeClient />;
}
