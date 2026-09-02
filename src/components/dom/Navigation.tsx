"use client";

import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { id: "hero", label: "01 // HERO" },
  { id: "problem-solution-experience", label: "02 // PROBLEM & SOLUTION" },
  { id: "vision-experience", label: "03 // VISION" },
  { id: "mission-experience", label: "04 // MISSION" },
  { id: "services-experience", label: "05 // SERVICES" },
  { id: "process-experience", label: "06 // PROCESS" },
  { id: "projects-experience", label: "07 // PROJECTS" },
  { id: "testimonials-experience", label: "08 // ENDORSEMENTS" },
  { id: "about-experience", label: "09 // ABOUT" },
  { id: "values-experience", label: "10 // VALUES" },
  { id: "future-experience", label: "11 // FUTURE" },
  { id: "contact", label: "12 // CONTACT" },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY + window.innerHeight / 3;
          
          for (const item of NAV_ITEMS) {
            const element = document.getElementById(item.id);
            if (element) {
              const top = element.offsetTop;
              const height = element.offsetHeight;
              if (scrollPosition >= top && scrollPosition < top + height) {
                setActiveSection(item.id);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top Accessible Header */}
      <header 
        role="banner" 
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-12 py-5 backdrop-blur-md border-b border-white/[0.06] bg-[#040405]/60 pointer-events-auto"
      >
        <button 
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-3 cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-hesics-teal rounded-lg"
          aria-label="HESICS Home"
        >
          <div className="w-8 h-8 rounded-lg border border-hesics-primary/40 bg-hesics-primary/20 flex items-center justify-center font-mono font-bold text-hesics-teal group-hover:border-hesics-teal transition-colors">
            H
          </div>
          <span className="font-mono text-lg font-bold tracking-widest text-white">
            HESICS
          </span>
        </button>

        <div className="flex items-center gap-4 text-xs font-mono">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" aria-hidden="true" />
            <span className="text-neutral-400">ENGINE ONLINE</span>
          </div>

          <button
            onClick={() => scrollTo("contact")}
            className="px-4 py-2 rounded-lg bg-hesics-primary hover:bg-hesics-teal text-white font-medium transition-all shadow-[0_0_20px_rgba(12,116,93,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-hesics-teal"
            aria-label="Initiate contact"
          >
            INITIATE
          </button>
        </div>
      </header>

      {/* Right Story Timeline Indicator */}
      <nav 
        aria-label="Story Timeline" 
        className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-3 pointer-events-auto"
      >
        {NAV_ITEMS.map((sec) => {
          const isActive = activeSection === sec.id;
          return (
            <button
              key={sec.id}
              onClick={() => scrollTo(sec.id)}
              className="group flex items-center gap-3 justify-end text-right focus:outline-none focus-visible:ring-1 focus-visible:ring-hesics-teal rounded"
              aria-label={`Scroll to ${sec.label}`}
              aria-current={isActive ? "step" : undefined}
            >
              <span
                className={`text-[10px] font-mono tracking-wider transition-all duration-300 opacity-0 group-hover:opacity-100 ${
                  isActive ? "text-hesics-teal opacity-100 font-semibold" : "text-neutral-500"
                }`}
              >
                {sec.label}
              </span>
              <span
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-hesics-teal scale-150 shadow-[0_0_10px_#149a7c]"
                    : "bg-white/20 group-hover:bg-white/60"
                }`}
              />
            </button>
          );
        })}
      </nav>
    </>
  );
}
