"use client";

import { globalLenis } from "@/components/dom/SmoothScroll";
import { useChapterNav, CHAPTERS } from "@/lib/navigation/useChapterNav";

/**
 * ChapterCTA — shared "Next District" link at the bottom of every chapter.
 * Teal resting state, --power red on hover (the one place we allow it on a button).
 */
export function ChapterCTA({ currentId }: { currentId: number }) {
  const jumpToChapter = useChapterNav((s) => s.jumpToChapter);
  const next = CHAPTERS.find((c) => c.id === currentId + 1);
  if (!next) return null;

  return (
    <div className="mt-16 flex items-center gap-6">
      <div
        className="h-px flex-none w-12"
        style={{ background: "var(--accent)", opacity: 0.3 }}
      />
      <button
        onClick={() => jumpToChapter(next.id, globalLenis || undefined)}
        className="group flex items-center gap-3 font-mono text-xs tracking-[0.2em] uppercase transition-all duration-300"
        style={{ color: "var(--accent-light)", letterSpacing: "0.2em" }}
        aria-label={`Proceed to ${next.codename}`}
        onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "var(--power)"; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "var(--accent-light)"; }}
      >
        <span>NEXT DISTRICT</span>
        <span
          className="border px-2 py-1 transition-all duration-300"
          style={{
            borderColor: "currentColor",
            fontSize: "0.6rem",
            letterSpacing: "0.15em",
          }}
        >
          {next.codename}
        </span>
        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </button>
    </div>
  );
}

/**
 * ChapterShell — standardized outer wrapper every chapter uses.
 * Provides the tall scroll space + sticky centering.
 */
export function ChapterShell({
  id,
  sectionId,
  scrollHeight = "350vh",
  children,
}: {
  id: number;
  sectionId: string;
  scrollHeight?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={sectionId}
      aria-label={`Chapter ${String(id).padStart(2, "0")}`}
      className="relative w-full"
    >
      <div style={{ height: scrollHeight }} className="relative">
        <div
          className="sticky top-0 h-screen flex flex-col items-start justify-center overflow-hidden"
          style={{ padding: "6rem 2rem 4rem clamp(2rem, 8vw, 6rem)" }}
        >
          {children}
        </div>
      </div>
    </section>
  );
}

/**
 * ChapterNumber — huge ghost numeral watermark behind content.
 */
export function ChapterNumber({ id }: { id: number }) {
  return (
    <span
      className="type-chapter-num absolute"
      style={{
        top: "50%",
        left: "clamp(1rem, 4vw, 3rem)",
        transform: "translateY(-50%)",
        zIndex: 0,
        pointerEvents: "none",
        userSelect: "none",
      }}
      aria-hidden="true"
    >
      {String(id).padStart(2, "0")}
    </span>
  );
}
