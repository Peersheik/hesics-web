"use client";

import { useState } from "react";

export default function ContactSequence() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "Web & SaaS Development",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Emulate smooth submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const narrativeSteps = [
    { label: "01 // THE INCEPTION", title: "YOUR IDEA", desc: "A visionary concept or strategic transformation." },
    { label: "02 // THE FRICTION", title: "YOUR PROBLEM", desc: "Complexity, scalability, or technical bottlenecks." },
    { label: "03 // THE ENGINE", title: "HESICS", desc: "Precision systems engineering & intelligent execution." },
    { label: "04 // THE OUTCOME", title: "LET'S BUILD", desc: "Turning ambitious digital roadmaps into sovereign reality." },
  ];

  return (
    <section id="contact" className="relative w-full min-h-screen py-24 sm:py-32 px-6 sm:px-12 md:px-20 z-20">
      
      {/* 1. Narrative Journey Sequence: YOUR IDEA → YOUR PROBLEM → HESICS → LET'S BUILD */}
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center mb-20 sm:mb-28">
        
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-hesics-primary/40 bg-hesics-primary/10 backdrop-blur-md mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-hesics-teal animate-pulse" />
          <span className="font-mono text-xs tracking-[0.25em] text-hesics-teal uppercase font-bold">
            INITIATION // PARTNERSHIP
          </span>
        </div>

        {/* Narrative Flow Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full mb-12">
          {narrativeSteps.map((step, idx) => (
            <div
              key={step.title}
              className="relative p-6 rounded-2xl border border-white/[0.08] bg-[#040405]/70 backdrop-blur-xl flex flex-col items-center text-center transition-all duration-300 hover:border-hesics-teal/40 group"
            >
              <span className="font-mono text-[11px] text-hesics-teal tracking-[0.25em] mb-2 uppercase">
                {step.label}
              </span>
              <h3 className="font-sans font-black text-2xl sm:text-3xl text-white tracking-tight uppercase mb-2 group-hover:text-hesics-teal transition-colors">
                {step.title}
              </h3>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                {step.desc}
              </p>

              {/* Indicator Arrow for all but last item */}
              {idx < narrativeSteps.length - 1 && (
                <div className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-30 text-hesics-teal/60 font-mono text-sm">
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Action Anchor Header */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-white uppercase tracking-tight font-sans mb-4 drop-shadow-[0_0_40px_rgba(12,116,93,0.3)]">
          START A PROJECT
        </h2>
        <p className="font-mono text-xs sm:text-sm text-neutral-300 uppercase tracking-widest max-w-xl">
          Direct engineering dialogue. No middlemen, no generic sales pitch.
        </p>
      </div>

      {/* 2. Responsive Accessible Contact Form */}
      <div className="max-w-3xl mx-auto rounded-3xl border border-white/10 bg-[#040405]/85 backdrop-blur-2xl p-8 sm:p-12 shadow-[0_0_60px_rgba(4,4,5,0.9)]">
        {isSubmitted ? (
          <div className="flex flex-col items-center justify-center text-center py-12">
            <div className="w-14 h-14 rounded-full bg-hesics-primary/20 border border-hesics-teal flex items-center justify-center text-hesics-teal text-2xl mb-6">
              ✓
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight mb-2">
              TRANSMISSION RECEIVED
            </h3>
            <p className="text-sm text-neutral-400 max-w-md font-mono mb-8">
              Our engineering leadership will review your specifications and contact you directly within 24 hours.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="px-6 py-2.5 rounded-full border border-hesics-teal/40 text-xs font-mono text-hesics-teal tracking-widest uppercase hover:bg-hesics-teal/10 transition-colors"
            >
              SUBMIT ANOTHER SPECIFICATION
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            
            {/* Name & Email Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-mono text-xs text-neutral-400 uppercase tracking-wider">
                  Your Name <span className="text-hesics-teal">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="e.g. Alex Morgan"
                  className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-hesics-teal focus:ring-1 focus:ring-hesics-teal transition-all font-sans"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-mono text-xs text-neutral-400 uppercase tracking-wider">
                  Your Email <span className="text-hesics-teal">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="alex@company.com"
                  className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-hesics-teal focus:ring-1 focus:ring-hesics-teal transition-all font-sans"
                />
              </div>
            </div>

            {/* Company & Project Type Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="company" className="font-mono text-xs text-neutral-400 uppercase tracking-wider">
                  Company / Organization
                </label>
                <input
                  id="company"
                  type="text"
                  value={formState.company}
                  onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                  placeholder="Company name"
                  className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-hesics-teal focus:ring-1 focus:ring-hesics-teal transition-all font-sans"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="projectType" className="font-mono text-xs text-neutral-400 uppercase tracking-wider">
                  Project Type
                </label>
                <select
                  id="projectType"
                  value={formState.projectType}
                  onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#08080a] border border-white/10 text-white text-sm focus:outline-none focus:border-hesics-teal focus:ring-1 focus:ring-hesics-teal transition-all font-sans"
                >
                  <option value="Web & SaaS Development">Web & SaaS Engineering</option>
                  <option value="AI & Automation Systems">AI & Autonomous Systems</option>
                  <option value="Digital Platform Architecture">Digital Platform Architecture</option>
                  <option value="Comprehensive Digital Ecosystem">Comprehensive Ecosystem</option>
                </select>
              </div>
            </div>

            {/* Project Details Message */}
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-mono text-xs text-neutral-400 uppercase tracking-wider">
                Tell Us About Your Project <span className="text-hesics-teal">*</span>
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                placeholder="Describe the challenge, technical requirements, timeline, or objectives..."
                className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-hesics-teal focus:ring-1 focus:ring-hesics-teal transition-all resize-none font-sans leading-relaxed"
              />
            </div>

            {/* Main Primary CTA Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-2 py-4 rounded-xl bg-hesics-teal hover:bg-hesics-teal/90 text-white font-mono text-sm tracking-[0.25em] font-bold uppercase transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(20,154,124,0.4)] hover:shadow-[0_0_45px_rgba(20,154,124,0.6)] disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>TRANSMITTING SPECIFICATION...</span>
                </>
              ) : (
                <>
                  <span>START A PROJECT</span>
                  <span>→</span>
                </>
              )}
            </button>

            {/* Security & Direct SLA Note */}
            <div className="flex items-center justify-center gap-2 text-center text-[11px] font-mono text-neutral-500 uppercase tracking-wider mt-2">
              <span className="w-1.5 h-1.5 rounded-full bg-hesics-teal" />
              <span>ENCRYPTED TRANSMISSION // 24-HOUR DIRECT ARCHITECT RESPONSE</span>
            </div>

          </form>
        )}
      </div>

    </section>
  );
}
