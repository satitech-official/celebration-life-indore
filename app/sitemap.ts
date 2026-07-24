import type { MetadataRoute } from "next";
import { services } from "../content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://satitech-official.github.io/celebration-life-indore";
  const pages = [
    "",
    "about",
    "services",
    "gallery",
    "packages",
    "book",
    "testimonials",
    "contact",
    "privacy-policy",
    "terms-and-conditions"
  ];

  return [
    ...pages.map((page) => ({
      url: `${base}/${page}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: page === "" ? 1 : 0.7
    })),
    ...services.map((service) => ({
      url: `${base}/services/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6
    }))
  ];
}
