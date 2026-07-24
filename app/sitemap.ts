import type { MetadataRoute } from "next";
import { services } from "../content/site";
export default function sitemap():MetadataRoute.Sitemap{const base="https://celebrate-life-indore.example";const pages=["","about","services","gallery","packages","book","testimonials","contact","privacy-policy","terms-and-conditions"];return [...pages.map(p=>({url:`${base}/${p}`,lastModified:new Date(),changeFrequency:"monthly" as const,priority:p===""?1:.7})),...services.map(s=>({url:`${base}/services/${s.slug}`,lastModified:new Date(),changeFrequency:"monthly" as const,priority:.6}))]}
