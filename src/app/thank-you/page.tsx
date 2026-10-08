import type { Metadata } from "next";
import ThankYouClient from "./ThankYouClient";

export const metadata: Metadata = {
  title: "Thank You — HESICS",
  description: "We have received your audit request and will reach out within 24 hours.",
  alternates: {
    canonical: "/thank-you",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function ThankYouPage() {
  return <ThankYouClient />;
}
