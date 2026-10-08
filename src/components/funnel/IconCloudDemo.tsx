"use client";

import { IconCloud } from "@/registry/magicui/icon-cloud";
import Highlighter from "@/registry/magicui/highlighter";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export function IconCloudDemo() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}`
  );

  return (
    <div className="w-full py-16 my-8 relative overflow-hidden rounded-3xl border border-[var(--f-border)] bg-[var(--f-bg-glass)] backdrop-blur-sm">
      <div className="text-center px-4 mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--f-gold-dim)] border border-[var(--f-gold)]/30 text-[var(--f-gold)] text-xs font-semibold uppercase tracking-wider mb-3">
          Full-Stack Capabilities
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--f-fg)] font-[var(--f-font-display)]">
          Experts in Modern{" "}
          <Highlighter action="underline" color="var(--f-gold)">
            Engineering & Tech Stack
          </Highlighter>
        </h2>
        <p className="text-sm md:text-base text-[var(--f-fg-muted)] max-w-xl mx-auto mt-2">
          From high-performance Next.js architectures to cloud deployments and custom automations — we build with world-class toolchains.
        </p>
      </div>

      <div className="relative flex size-full items-center justify-center overflow-hidden">
        <IconCloud images={images} />
      </div>
    </div>

  );
}

export default IconCloudDemo;
