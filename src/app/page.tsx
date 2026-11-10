import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="h-screen w-screen overflow-hidden bg-[#030303] text-[#F4F4F4] select-none relative">
      <Navbar />
      <Hero />
    </main>
  );
}
