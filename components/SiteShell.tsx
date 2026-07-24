"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUp, Camera as Instagram, Mail, Menu, Phone, Sparkles, X } from "lucide-react";
import { businessConfig, phoneHref, whatsappHref } from "../config/business";
import { nav } from "../content/site";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 36);
    update(); window.addEventListener("scroll", update);
    return () => window.removeEventListener("scroll", update);
  }, []);
  const wa = whatsappHref();
  return (
    <>
      <header className={`site-header ${scrolled || pathname !== "/" ? "solid" : ""}`}>
        <Link className="brand" href="/" aria-label="Celebrate Life home"><span>CL</span><b>Celebrate Life</b></Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {nav.map(([label, href]) => <Link className={pathname === href ? "active" : ""} key={href} href={href}>{label}</Link>)}
        </nav>
        <Link className="button button-small" href="/book">Book now <Sparkles size={15} /></Link>
        <button className="menu-button" onClick={() => setMenu(true)} aria-label="Open menu"><Menu /></button>
      </header>
      <div className={`mobile-menu ${menu ? "open" : ""}`} aria-hidden={!menu}>
        <button onClick={() => setMenu(false)} aria-label="Close menu"><X /></button>
        <p className="eyebrow">Celebrate beautifully</p>
        {nav.map(([label, href]) => <Link onClick={() => setMenu(false)} key={href} href={href}>{label}</Link>)}
        <div className="menu-actions"><a href={phoneHref(businessConfig.primaryPhone)}>Call</a><Link href="/book">Book your event</Link></div>
      </div>
      <main id="main">{children}</main>
      <aside className="floating-actions" aria-label="Quick contact">
        <a href={phoneHref(businessConfig.primaryPhone)} aria-label="Call Celebrate Life"><Phone /></a>
        <a href={businessConfig.instagram} target="_blank" rel="noopener noreferrer" aria-label="Open Instagram"><Instagram /></a>
        {wa && <a href={wa} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Celebrate Life">W</a>}
        <Link href="/book" aria-label="Book an event"><Sparkles /></Link>
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top"><ArrowUp /></button>
      </aside>
      <footer>
        <div className="footer-brand"><p className="eyebrow">Celebrate Life · Indore</p><h2>Let’s make your next<br /><em>moment unforgettable.</em></h2><Link className="button" href="/book">Start planning</Link></div>
        <div><h3>Explore</h3>{nav.slice(1, 6).map(([l, h]) => <Link key={h} href={h}>{l}</Link>)}</div>
        <div><h3>Contact</h3><a href={phoneHref(businessConfig.primaryPhone)}>+91 91115 46339</a><a href={phoneHref(businessConfig.secondaryPhone)}>+91 93404 93726</a><a href={`mailto:${businessConfig.email}`}><Mail size={14} /> {businessConfig.email}</a><a href={businessConfig.instagram} target="_blank" rel="noopener noreferrer">@celebratelife_indore</a></div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Celebrate Life</span><Link href="/privacy-policy">Privacy</Link><Link href="/terms-and-conditions">Terms</Link><span>Indore, Madhya Pradesh</span></div>
      </footer>
      <div className="mobile-bar">
        <a href={phoneHref(businessConfig.primaryPhone)}><Phone size={18} /> Call</a><Link href="/book"><Sparkles size={18} /> Book</Link>{wa && <a href={wa}>WhatsApp</a>}
      </div>
    </>
  );
}
