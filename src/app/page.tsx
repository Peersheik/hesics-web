import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProofSection from "@/components/ProofSection";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#030303] text-[#F4F4F4] select-none relative scroll-smooth">
      <Navbar />
      <Hero />
      <ProofSection />
    </main>
  );
}
