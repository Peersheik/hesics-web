import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/dom/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#040405",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://hesics.com"),
  title: "HESICS | THE EMPIRE — Digital Systems For What's Next",
  description:
    "HESICS builds digital empires. Enterprise web engineering, applied AI automation, scalable SaaS architecture, and precision digital marketing — all under one roof.",
  keywords: [
    "HESICS",
    "Web Development",
    "AI Automation",
    "SaaS Development",
    "Digital Marketing",
    "Digital Systems",
    "Technology Company",
    "Enterprise Architecture",
  ],
  authors: [{ name: "HESICS Technologies", url: "https://hesics.com" }],
  creator: "HESICS Technologies",
  publisher: "HESICS Technologies",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hesics.com",
    siteName: "HESICS",
    title: "HESICS | THE EMPIRE — Digital Systems For What's Next",
    description:
      "Enter the HESICS Empire. Web, AI, SaaS and digital marketing — engineered for impact.",
  },
  twitter: {
    card: "summary_large_image",
    title: "HESICS | THE EMPIRE",
    description:
      "Enter the HESICS Empire. Digital systems engineered for what's next.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <body className="bg-[#040405] text-white font-sans antialiased overflow-x-hidden">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
