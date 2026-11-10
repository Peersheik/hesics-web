"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Instagram, Linkedin, Youtube, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const whatsappUrl =
    "https://wa.me/917867999298?text=Hello%20Hesics%2C%20I%20would%20like%20to%20discuss%20a%20project.";

  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-5xl">
      <div className="glass rounded-full px-4 sm:px-6 py-2.5 flex items-center justify-between transition-luxury hover:border-white/20">
        {/* 1. Left: Hesics Emblem & Brandmark */}
        <a href="/" className="flex items-center gap-3 group select-none">
          <div className="relative w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center transition-luxury group-hover:border-white/30">
            <Image
              src="/hesics-emblem-silver.png"
              alt="Hesics Emblem"
              width={22}
              height={22}
              className="object-contain drop-shadow-[0_0_6px_rgba(255,255,255,0.3)] transition-transform duration-300 group-hover:scale-110"
              priority
            />
          </div>
          <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#F4F4F4] group-hover:text-white transition-colors">
            HESICS
          </span>
        </a>

        {/* 2. Center: Refined Navigation Links with Dropdown Elegance */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-medium text-[#A0A0A0]">
          <a
            href="https://www.instagram.com/hesics__/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-[#F4F4F4] transition-colors"
          >
            <span>Instagram</span>
            <ChevronDown className="w-3 h-3 text-[#656565] -rotate-45" />
          </a>

          <a
            href="https://www.linkedin.com/company/143572934/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-[#F4F4F4] transition-colors"
          >
            <span>LinkedIn</span>
            <ChevronDown className="w-3 h-3 text-[#656565] -rotate-45" />
          </a>

          <a
            href="https://www.youtube.com/@peer_sheik_mydeen"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-[#F4F4F4] transition-colors"
          >
            <span>YouTube</span>
            <ChevronDown className="w-3 h-3 text-[#656565] -rotate-45" />
          </a>
        </nav>

        {/* 3. Right: Solid White Capsule CTA */}
        <div className="flex items-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 rounded-full bg-white text-[#030303] text-xs font-semibold tracking-wide transition-all duration-300 hover:bg-[#EAEAEA] hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] active:scale-[0.98]"
          >
            <span>Connect on WhatsApp</span>
            <div className="w-5 h-5 rounded-full bg-[#030303] text-white flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
              <ArrowRight className="w-3 h-3" />
            </div>
          </a>
        </div>
      </div>
    </header>
  );
}
