import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatsAppCTA from "@/components/WhatsAppCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#040405] text-white flex flex-col selection:bg-[#0c745d] selection:text-white relative">
      <Navbar />
      <Hero />
      {/* Floating WhatsApp CTA in bottom right corner */}
      <WhatsAppCTA />
    </main>
  );
}
