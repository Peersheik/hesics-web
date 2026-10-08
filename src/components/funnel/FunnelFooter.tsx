"use client";

import Link from "next/link";

export default function FunnelFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-[var(--f-border,rgba(255,255,255,0.08))] py-8 bg-[var(--f-bg,#08090d)]">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--f-fg-subtle,#64748b)]">
        <div className="flex items-center gap-2">
          <span className="font-bold text-[var(--f-fg,#f8fafc)]">HESICS</span>
          <span>© {currentYear} All rights reserved.</span>
        </div>
        <div className="flex items-center gap-6">
          <Link
            href="/privacy-policy"
            className="text-[var(--f-fg-subtle,#64748b)] hover:text-[var(--f-fg,#f8fafc)] transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-[var(--f-fg-subtle,#64748b)] hover:text-[var(--f-fg,#f8fafc)] transition-colors"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
