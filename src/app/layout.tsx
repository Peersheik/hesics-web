import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const serifFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const sansFont = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "HESICS — Make It Simple | Sovereign Digital Infrastructure",
  description:
    "Your Business Deserves to Be Trusted Before the First Meeting Even Starts. The Exact way to wins tenders, wins leads, and works even while you sleep.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${serifFont.variable} ${sansFont.variable} dark scroll-smooth`}>
      <body className="bg-[#030303] text-[#F4F4F4] font-sans antialiased selection:bg-[#00A982]/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
