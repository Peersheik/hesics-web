import type { Metadata } from "next";
import ConvertClient from "./ConvertClient";

export const metadata: Metadata = {
  title: "GrowthSite Packages, Pricing & Guarantee — HESICS",
  description:
    "Fixed-investment GrowthSite packages for Gulf-based Indian business owners. 100% on-time delivery guarantee, built-in WhatsApp lead routing.",
  alternates: {
    canonical: "/convert",
  },
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: "GrowthSite Packages, Pricing & Guarantee — HESICS",
    description:
      "Predictable packages, verified Dubai client proof, and guaranteed on-time delivery.",
    url: "/convert",
  },
};

export default function ConvertPage() {
  return <ConvertClient />;
}
