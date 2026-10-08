"use client";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export type AnalyticsEvent =
  | "view_story"
  | "view_pricing"
  | "click_whatsapp"
  | "submit_lead";

export function trackEvent(name: AnalyticsEvent, params?: Record<string, any>) {
  if (typeof window === "undefined") return;

  // Google Analytics 4
  if (typeof window.gtag === "function") {
    try {
      window.gtag("event", name, params || {});
    } catch {}
  }

  // Meta Pixel
  if (typeof window.fbq === "function") {
    try {
      window.fbq("trackCustom", name, params || {});
      if (name === "submit_lead") {
        window.fbq("track", "Lead", params || {});
      }
    } catch {}
  }
}
