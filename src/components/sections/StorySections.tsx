"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import StorySection from "../dom/StorySection";
import { STORY_SECTIONS } from "@/lib/constants";

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!heroRef.current) return;

    // ScrollTrigger timeline for Hero text fading out cleanly as user scrolls
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.8,
        },
      });

      tl.to([titleRef.current, subtitleRef.current, indicatorRef.current], {
        opacity: 0,
        y: -40,
        filter: "blur(8px)",
        stagger: 0.05,
        ease: "power2.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 sm:px-12 text-center pointer-events-none select-none"
    >
      <div className="max-w-4xl w-full flex flex-col items-center justify-center pointer-events-auto">
        {/* Subtle System Status Tag */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 mb-8 rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-hesics-teal animate-pulse" />
          <span className="font-mono text-xs tracking-[0.25em] text-neutral-300 uppercase">
            COMPUTATIONAL FOUNDATIONS
          </span>
        </div>

        {/* Hero Title */}
        <h1
          ref={titleRef}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-[0.18em] text-white uppercase font-mono leading-none mb-6 drop-shadow-[0_0_35px_rgba(12,116,93,0.25)]"
        >
          HESICS
        </h1>

        {/* Hero Subtitle */}
        <p
          ref={subtitleRef}
          className="text-lg sm:text-xl md:text-2xl text-neutral-300 font-light tracking-wide max-w-xl mx-auto leading-relaxed"
        >
          We build digital systems for what’s next.
        </p>

        {/* Scroll Indicator */}
        <div
          ref={indicatorRef}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-neutral-500 font-mono text-[11px] tracking-widest pointer-events-auto cursor-pointer group"
          onClick={() =>
            document.getElementById("problem")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <span className="group-hover:text-hesics-teal transition-colors">SCROLL TO EXPLORE</span>
          <div className="w-4 h-7 rounded-full border border-white/20 flex items-start justify-center p-1 group-hover:border-hesics-teal transition-colors">
            <span className="w-1 h-1.5 rounded-full bg-hesics-teal animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProblemSection() {
  const data = STORY_SECTIONS.find((s) => s.id === "problem")!;
  return (
    <StorySection
      id={data.id}
      tag={data.tag}
      title={data.title}
      description={data.description}
      details={data.details}
      align="left"
    />
  );
}

export function VisionSection() {
  const data = STORY_SECTIONS.find((s) => s.id === "vision")!;
  return (
    <StorySection
      id={data.id}
      tag={data.tag}
      title={data.title}
      description={data.description}
      details={data.details}
      align="right"
    />
  );
}

export function MissionSection() {
  const data = STORY_SECTIONS.find((s) => s.id === "mission")!;
  return (
    <StorySection
      id={data.id}
      tag={data.tag}
      title={data.title}
      description={data.description}
      details={data.details}
      align="left"
    />
  );
}

export function ServicesSection() {
  const data = STORY_SECTIONS.find((s) => s.id === "services")!;
  return (
    <StorySection
      id={data.id}
      tag={data.tag}
      title={data.title}
      description={data.description}
      details={data.details}
      align="left"
    />
  );
}

export function ProcessSection() {
  const data = STORY_SECTIONS.find((s) => s.id === "process")!;
  return (
    <StorySection
      id={data.id}
      tag={data.tag}
      title={data.title}
      description={data.description}
      details={data.details}
      align="right"
    />
  );
}

export function ProjectsSection() {
  const data = STORY_SECTIONS.find((s) => s.id === "projects")!;
  return (
    <StorySection
      id={data.id}
      tag={data.tag}
      title={data.title}
      description={data.description}
      details={data.details}
      align="center"
    />
  );
}

export function TestimonialsSection() {
  const data = STORY_SECTIONS.find((s) => s.id === "testimonials")!;
  return (
    <StorySection
      id={data.id}
      tag={data.tag}
      title={data.title}
      description={data.description}
      details={data.details}
      align="left"
    />
  );
}

export function AboutSection() {
  const data = STORY_SECTIONS.find((s) => s.id === "about")!;
  return (
    <StorySection
      id={data.id}
      tag={data.tag}
      title={data.title}
      description={data.description}
      details={data.details}
      align="right"
    />
  );
}

export function ValuesSection() {
  const data = STORY_SECTIONS.find((s) => s.id === "values")!;
  return (
    <StorySection
      id={data.id}
      tag={data.tag}
      title={data.title}
      description={data.description}
      details={data.details}
      align="left"
    />
  );
}

export function FutureSection() {
  const data = STORY_SECTIONS.find((s) => s.id === "future")!;
  return (
    <StorySection
      id={data.id}
      tag={data.tag}
      title={data.title}
      description={data.description}
      details={data.details}
      align="left"
    />
  );
}

export function ContactSection() {
  const data = STORY_SECTIONS.find((s) => s.id === "contact")!;
  return (
    <StorySection
      id={data.id}
      tag={data.tag}
      title={data.title}
      description={data.description}
      details={data.details}
      align="center"
    >
      <form 
        onSubmit={(e) => e.preventDefault()}
        className="w-full mt-6 flex flex-col gap-4 p-6 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-hesics-teal transition-colors"
          />
          <input
            type="email"
            placeholder="Enterprise Email"
            className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-hesics-teal transition-colors"
          />
        </div>
        <textarea
          rows={3}
          placeholder="Brief description of your systems initiative..."
          className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-hesics-teal transition-colors resize-none"
        />
        <button
          type="submit"
          className="w-full py-3.5 rounded-lg bg-hesics-primary hover:bg-hesics-teal text-white font-mono text-sm tracking-wider font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(12,116,93,0.4)]"
        >
          DISPATCH TRANSMISSION
        </button>
      </form>
    </StorySection>
  );
}
