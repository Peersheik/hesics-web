import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/story", "/convert", "/thank-you", "/api/*", "/privacy-policy", "/terms"],
      },
    ],
    sitemap: `${SITE_CONFIG.domain}/sitemap.xml`,
  };
}
