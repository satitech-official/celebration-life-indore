"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, Search } from "lucide-react";
import { getServiceImage, services } from "../content/site";

export function ServiceBrowser() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const categories = ["All", ...Array.from(new Set(services.map((service) => service.category)))];
  const filtered = useMemo(
    () =>
      services.filter(
        (service) =>
          (category === "All" || service.category === category) &&
          `${service.title} ${service.shortDescription}`.toLowerCase().includes(query.toLowerCase())
      ),
    [query, category]
  );

  return (
    <>
      <div className="toolbar">
        <label className="sr-only" htmlFor="service-search">Search services</label>
        <input
          id="service-search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search decoration services…"
        />
        <select value={category} onChange={(event) => setCategory(event.target.value)} aria-label="Filter by category">
          {categories.map((item) => <option key={item}>{item}</option>)}
        </select>
      </div>
      {filtered.length ? (
        <div className="services-all">
          {filtered.map((service) => (
            <article className="simple-service" key={service.slug}>
              <div className="service-card-media">
                <Image
                  src={getServiceImage(service.slug)}
                  alt={`${service.title} decoration inspiration`}
                  fill
                  sizes="(max-width: 700px) 92vw, (max-width: 1100px) 45vw, 30vw"
                  className="service-card-image"
                />
              </div>
              <div className="simple-service-content">
                <span>{service.category}</span>
                <h2>{service.title}</h2>
                <p>{service.shortDescription}</p>
                <div>
                  <Link href={`/services/${service.slug}`}>View details <ArrowRight size={14} /></Link>
                  <Link href={`/book?service=${service.slug}`}>Book</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <Search />
          <h2>No matching services</h2>
          <p>Try a broader search or choose another category.</p>
        </div>
      )}
    </>
  );
}
