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
    <div className="service-browser">
      <div className="service-toolbar">
        <div className="service-search-wrap">
          <Search aria-hidden="true" />
          <label className="sr-only" htmlFor="service-search">Search services</label>
          <input
            id="service-search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search decoration services…"
          />
        </div>
        <label className="service-filter">
          <span>Filter by category</span>
          <select value={category} onChange={(event) => setCategory(event.target.value)}>
            {categories.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
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
                  sizes="(max-width: 720px) 92vw, (max-width: 1100px) 46vw, 31vw"
                />
                <span className="service-card-number">{String(service.id).padStart(2, "0")}</span>
              </div>

              <div className="simple-service-content">
                <span className="service-card-category">{service.category}</span>
                <h2>{service.title}</h2>
                <p>{service.shortDescription}</p>

                <div className="service-card-actions">
                  <Link className="service-details-link" href={`/services/${service.slug}`}>
                    View details <ArrowRight size={15} />
                  </Link>
                  <Link className="service-book-link" href={`/book?service=${service.slug}`}>
                    Book now
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="empty-state service-empty-state">
          <Search />
          <h2>No matching services</h2>
          <p>Try a broader search or choose another category.</p>
        </div>
      )}
    </div>
  );
}
