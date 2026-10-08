"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { waLink } from "@/config/site";

export interface NavItem {
  name: string;
}

export interface MorphicNavbarProps {
  items?: Record<string, NavItem>;
  defaultPath?: string;
  className?: string;
}

const DEFAULT_NAV_ITEMS: Record<string, NavItem> = {
  "/": { name: "Home" },
  "/story": { name: "Case Study" },
  "/convert": { name: "Packages & Pricing" },
};

export function MorphicNavbar({
  items,
  defaultPath = "/",
  className,
}: MorphicNavbarProps) {
  const pathname = usePathname();
  const [activePath, setActivePath] = useState(pathname || defaultPath);

  useEffect(() => {
    if (pathname) {
      setActivePath(pathname);
    }
  }, [pathname]);

  // Compute available steps based on current page progression:
  const navItemsToRender = items || (() => {
    if (pathname === "/" || pathname === "/funnel") {
      return { "/": { name: "Home" } };
    }
    if (pathname === "/story" || pathname === "/funnel/story") {
      return {
        "/": { name: "Home" },
        "/story": { name: "Case Study" },
      };
    }
    return {
      "/": { name: "Home" },
      "/story": { name: "Case Study" },
      "/convert": { name: "Packages & Pricing" },
    };
  })();

  const isActiveLink = (path: string) => {
    if (path === "/") {
      return activePath === "/" || activePath === "/funnel";
    }
    return activePath.startsWith(path);
  };

  return (
    <nav className={clsx("w-full max-w-4xl px-4 py-3 mx-auto", className)}>
      <div className="flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 group text-decoration-none">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[var(--f-gold)] to-[var(--f-gold-light)] flex items-center justify-center font-black text-black text-base shadow-[0_0_15px_var(--f-gold-glow)]">
            H
          </div>
          <div className="flex flex-col text-left">
            <span className="font-bold text-sm tracking-widest uppercase text-[var(--f-fg)] font-[var(--f-font-display)]">
              HESICS
            </span>
            <span className="text-[9px] uppercase tracking-wider text-[var(--f-gold)]">
              GrowthSites™
            </span>
          </div>
        </Link>

        {/* Morphic pill menu */}
        <div className="flex items-center justify-center p-1 rounded-full border border-[var(--f-border)] bg-[var(--f-bg-glass)] backdrop-blur-xl shadow-lg">
          {Object.entries(navItemsToRender).map(([path, { name }], index, array) => {
            const isActive = isActiveLink(path);
            const isFirst = index === 0;
            const isLast = index === array.length - 1;
            const prevPath = index > 0 ? array[index - 1][0] : null;
            const nextPath =
              index < array.length - 1 ? array[index + 1][0] : null;

            return (
              <Link
                key={path}
                href={path}
                onClick={() => setActivePath(path)}
                className={clsx(
                  "relative flex items-center justify-center px-4 py-2 text-xs md:text-sm font-medium transition-all duration-300 no-underline whitespace-nowrap",
                  isActive
                    ? "mx-1 rounded-full font-bold text-black shadow-lg"
                    : "text-[var(--f-fg-muted)] hover:text-[var(--f-fg)]",
                  isActive &&
                    "bg-gradient-to-r from-[var(--f-gold)] via-[var(--f-gold-light)] to-[var(--f-gold)] shadow-[0_0_20px_var(--f-gold-glow)] scale-105",
                  !isActive &&
                    clsx(
                      (isActiveLink(prevPath || "") || isFirst) && "rounded-l-full",
                      (isActiveLink(nextPath || "") || isLast) && "rounded-r-full"
                    )
                )}
              >
                {name}
              </Link>
            );
          })}
        </div>

        {/* CTA shortcut */}
        <a
          href={waLink("Hi Sheikh, I am interested in building a high-converting website for my business")}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-full bg-[var(--f-teal-dim)] text-[var(--f-teal)] border border-[var(--f-teal)]/30 hover:bg-[var(--f-teal)] hover:text-white transition-all duration-200"
        >
          <span>WhatsApp</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--f-teal)] animate-ping" />
        </a>
      </div>
    </nav>
  );
}

export default MorphicNavbar;
