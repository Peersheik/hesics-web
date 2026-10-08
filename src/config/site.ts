export const SITE_CONFIG = {
  name: "HESICS",
  domain: process.env.NEXT_PUBLIC_SITE_URL || "https://hesics-web.vercel.app",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "917867999298",
  slotsRemaining: 2,
  guaranteeText:
    "Delivered on time, or your Rapid Delivery fee is fully refunded. Unlimited revisions before final handover.",
  founder: {
    name: "Sheikh",
    role: "Founder, HESICS",
    image: "/founder-sheikh.jpg",
    credentials: "MSME-registered. First international client delivered in Dubai, UAE.",
  },
  stats: [
    { value: "1st", label: "International Client (Dubai, UAE)" },
    { value: "100%", label: "On-Time Delivery Rate" },
    { value: "2–3 Wks", label: "Turnaround Time" },
    { value: "0", label: "Revision Delays" },
  ],
} as const;

export function waLink(message?: string): string {
  const number = SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, "");
  const base = `https://wa.me/${number}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
