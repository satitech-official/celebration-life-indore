"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, Camera as Instagram, Check, ChevronDown, Phone, Sparkles } from "lucide-react";
import { businessConfig, phoneHref } from "../config/business";
import { eventImages, faqs, packages, services } from "../content/site";

export function Home() {
  const [loading, setLoading] = useState(true);
  const [openFaq, setOpenFaq] = useState(0);
  useEffect(() => {
    const seen = sessionStorage.getItem("cl-loaded");
    const t = setTimeout(() => { setLoading(false); if (!seen) sessionStorage.setItem("cl-loaded", "1"); }, seen ? 0 : 2200);
    return () => clearTimeout(t);
  }, []);
  return (
    <>
      <div className={`loader ${loading ? "" : "done"}`} aria-hidden={!loading}>
        <div className="loader-balloons"><i /><i /><i /></div>
        <p>Celebrate Life</p><span>Decorating Moments. Creating Memories.</span>
      </div>
      <section className="hero">
        <Image src="/celebrate-life-hero.png" alt="Elegant plum and rose balloon celebration setting" fill priority sizes="100vw" />
        <div className="hero-overlay" />
        <div className="hero-orbit one" /><div className="hero-orbit two" />
        <div className="hero-content">
          <p className="eyebrow">Premium event decoration · Indore</p>
          <h1>Decor that turns<br />beautiful moments<br />into <em>lifelong memories.</em></h1>
          <p>Thoughtfully designed decoration experiences for birthdays, weddings, proposals, baby showers and life’s happiest milestones.</p>
          <div className="hero-actions"><Link className="button" href="/gallery">Explore decorations <ArrowRight /></Link><Link className="text-link" href="/book">Book your event</Link></div>
        </div>
        <div className="hero-contact"><a href={phoneHref(businessConfig.primaryPhone)}><Phone /> Call now</a><a href={businessConfig.instagram} target="_blank" rel="noopener noreferrer"><Instagram /> Instagram</a></div>
        <a href="#story" className="scroll-cue">Discover <ChevronDown /></a>
      </section>
      <div className="trust-marquee"><div>{["Premium Balloon Decoration","Customized Themes","Timely Setup","Indore-Based Team","Direct Booking Support","Indoor & Outdoor Events"].map(x => <span key={x}><Sparkles /> {x}</span>)}</div></div>
      <section id="story" className="story section">
        <div className="section-kicker">The feeling behind the details</div>
        <div><h2>We don’t just decorate spaces.<br /><em>We create feelings.</em></h2><p>Every celebration begins with a feeling you want people to carry home. We shape the colours, textures and focal moments around that feeling—always with the venue, occasion and people in mind.</p><Link className="text-link dark" href="/about">Discover our approach <ArrowRight /></Link></div>
        <div className="story-visual"><Image src="/events/wedding-stage.jpg" alt="Elegant floral wedding stage decoration" fill sizes="(max-width: 900px) 90vw, 40vw" /><span>Personalized in Indore</span></div>
      </section>
      <section className="services-section section">
        <div className="section-heading"><div><p className="eyebrow dark">Ways to celebrate</p><h2>Designed for your<br /><em>kind of beautiful.</em></h2></div><Link className="button button-dark" href="/services">Explore all 27 services</Link></div>
        <div className="service-grid">
          {services.filter(s => s.featured).map((service, i) => (
            <article className="service-card" key={service.slug}>
              <div className="service-image"><Image src={eventImages[i].src} alt={`${service.title} decoration inspiration`} fill sizes="(max-width: 700px) 90vw, 25vw" /><span>{String(i + 1).padStart(2, "0")}</span></div>
              <p>{service.category}</p><h3>{service.title}</h3><p>{service.shortDescription}</p>
              <div><Link href={`/services/${service.slug}`}>View details <ArrowRight /></Link><Link href={`/book?service=${service.slug}`}>Book</Link></div>
            </article>
          ))}
        </div>
      </section>
      <section className="experience-band">
        <p className="eyebrow">One vision · beautifully considered</p>
        <h2>Dream it. <em>Decorate it.</em><br />Celebrate it.</h2>
        <div className="feature-list">{["Creative concepts","Personalized themes","Premium-quality details","Organized setup","Latest decoration trends","Friendly booking support"].map((x, i) => <span key={x}><b>0{i + 1}</b>{x}</span>)}</div>
      </section>
      <section className="packages-preview section">
        <div className="section-heading"><div><p className="eyebrow dark">Flexible starting points</p><h2>Choose the scale.<br /><em>Make it yours.</em></h2></div><p>Prices are shared on request after the event, venue and customisation needs are understood.</p></div>
        <div className="package-row">{packages.map((pkg) => <article className={`package ${pkg.tone}`} key={pkg.name}><span>Celebrate Life</span><h3>{pkg.name}</h3><p>{pkg.ideal}</p><strong>Price available on request</strong><ul>{pkg.features.map(f => <li key={f}><Check />{f}</li>)}</ul><Link href={`/book?package=${pkg.name}`}>Enquire for {pkg.name} <ArrowRight /></Link></article>)}</div>
      </section>
      <section className="process section">
        <p className="eyebrow dark">A clear, thoughtful process</p><h2>From first idea to<br /><em>the final reveal.</em></h2>
        <ol>{[
          ["Share your event","Tell us the event type, date and location."],["Consultation","Discuss your colours, theme, space and budget."],["Design & planning","Shape a customized decoration concept."],["Setup","The team prepares the venue to the approved plan."],["Celebrate","Step into the moment and make memories."],
        ].map(([t,d],i) => <li key={t}><span>{i+1}</span><div><h3>{t}</h3><p>{d}</p></div></li>)}</ol>
      </section>
      <section className="instagram-section section">
        <div><p className="eyebrow">Curated social showcase</p><h2>Celebrations from<br /><em>our Instagram.</em></h2><p>Project media will appear here as original, owner-approved photographs and reels are added.</p><a className="button" href={businessConfig.instagram} target="_blank" rel="noopener noreferrer">Follow @celebratelife_indore <Instagram /></a></div>
        <div className="ig-grid">{eventImages.slice(0,4).map((item) => <a key={item.src} href={businessConfig.instagram} target="_blank" rel="noopener noreferrer" aria-label="View Celebrate Life on Instagram"><Image src={item.src} alt={item.title} fill sizes="30vw" /><span>View on Instagram ↗</span></a>)}</div>
      </section>
      <section id="faq" className="faq section">
        <div><p className="eyebrow dark">Before you book</p><h2>Questions, answered<br /><em>with clarity.</em></h2><Link href="/contact" className="text-link dark">Ask us something else <ArrowRight /></Link></div>
        <div>{faqs.map(([q,a],i) => <div className={`faq-item ${openFaq === i ? "open" : ""}`} key={q}><button onClick={() => setOpenFaq(openFaq === i ? -1 : i)} aria-expanded={openFaq === i}><span>{q}</span><b>+</b></button><p>{a}</p></div>)}</div>
      </section>
      <section className="final-cta"><p className="eyebrow">Your date. Your story. Your celebration.</p><h2>Let’s plan something<br /><em>beautiful.</em></h2><Link className="button" href="/book">Book your event <ArrowRight /></Link></section>
    </>
  );
}
