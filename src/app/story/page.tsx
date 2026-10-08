import type { Metadata } from "next";
import StoryClient from "./StoryClient";

export const metadata: Metadata = {
  title: "Dubai Client Case Study: Alsama Almonika — HESICS",
  description:
    "How Alsama Almonika Technical Services in Dubai turned an outdated presence into a client-winning website in under 3 weeks.",
  alternates: {
    canonical: "/story",
  },
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: "Dubai Client Case Study: Alsama Almonika — HESICS",
    description:
      "How Alsama Almonika Technical Services in Dubai turned an outdated presence into a client-winning website in under 3 weeks.",
    url: "/story",
  },
};

export default function StoryPage() {
  return <StoryClient />;
}
