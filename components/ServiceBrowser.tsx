"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, Search } from "lucide-react";
import { services } from "../content/site";
export function ServiceBrowser() {
  const [query, setQuery] = useState(""); const [category, setCategory] = useState("All");
  const categories = ["All", ...Array.from(new Set(services.map(s => s.category)))];
  const filtered = useMemo(() => services.filter(s => (category === "All" || s.category === category) && `${s.title} ${s.shortDescription}`.toLowerCase().includes(query.toLowerCase())), [query, category]);
  return <><div className="toolbar"><label className="sr-only" htmlFor="service-search">Search services</label><input id="service-search" value={query} onChange={e => setQuery(e.target.value)} placeholder="Search decoration services…" /><select value={category} onChange={e => setCategory(e.target.value)} aria-label="Filter by category">{categories.map(c => <option key={c}>{c}</option>)}</select></div>{filtered.length ? <div className="services-all">{filtered.map(s => <article className="simple-service" key={s.slug}><span>{s.category}</span><h2>{s.title}</h2><p>{s.shortDescription}</p><div><Link href={`/services/${s.slug}`}>View details <ArrowRight size={14} /></Link><Link href={`/book?service=${s.slug}`}>Book</Link></div></article>)}</div> : <div className="empty-state"><Search /><h2>No matching services</h2><p>Try a broader search or choose another category.</p></div>}</>;
}
