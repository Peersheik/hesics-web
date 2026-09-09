import type { Metadata, Viewport } from "next";
import { DM_Sans, Bebas_Neue } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/dom/SmoothScroll";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#070810",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://hesics.com"),
  title: "HESICS — Digital Systems For What's Next",
  description: "HESICS builds digital empires. Web engineering, AI automation, SaaS and precision digital marketing — all under one roof.",
  keywords: ["HESICS", "Web Development", "AI Automation", "SaaS", "Digital Marketing"],
  authors: [{ name: "HESICS Technologies", url: "https://hesics.com" }],
  creator: "HESICS Technologies",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hesics.com",
    siteName: "HESICS",
    title: "HESICS — Digital Systems For What's Next",
    description: "Enter the HESICS Empire. Web, AI, SaaS — engineered for impact.",
  },
  twitter: {
    card: "summary_large_image",
    title: "HESICS",
    description: "Digital systems engineered for what's next.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${bebasNeue.variable} dark`}>
      <body className="overflow-x-hidden" style={{ background: "#070810", color: "#fff" }}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
