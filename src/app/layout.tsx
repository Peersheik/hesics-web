import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const serifFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Hesics | High-Trust GrowthSites For Market Leaders",
  description:
    "Your Business Deserves to Be Trusted Before the First Meeting Even Starts. The exact way to win tenders, win leads, and work even while you sleep.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sansFont.variable} ${serifFont.variable} dark scroll-smooth`}>
      <body className="bg-[#040405] text-[#ffffff] font-sans antialiased selection:bg-[#0c745d] selection:text-white">
        {children}
      </body>
    </html>
  );
}

