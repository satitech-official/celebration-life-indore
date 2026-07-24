import type { Metadata } from "next";
import { headers } from "next/headers";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { SiteShell } from "../components/SiteShell";
import { ServiceWorker } from "../components/ServiceWorker";
import "./globals.css";
import "./enhancements.css";

const display = Cormorant_Garamond({ variable: "--font-display", subsets: ["latin"], weight: ["500", "600", "700"] });
const body = Manrope({ variable: "--font-body", subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const h = await headers();
  const host = h.get("x-forwarded-host") || h.get("host") || "celebrate-life-indore.example";
  const protocol = h.get("x-forwarded-proto") || (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  return {
    metadataBase: new URL(origin),
    title: { default: "Celebrate Life Indore | Premium Event & Balloon Decoration", template: "%s | Celebrate Life Indore" },
    description: "Premium customized event and balloon decoration for birthdays, weddings, baby showers, proposals and special occasions in Indore.",
    icons: { icon: "/icon.svg", apple: "/icon.svg" },
    manifest: "/manifest.webmanifest",
    openGraph: { title: "Celebrate Life Indore", description: "Celebrate beautifully. Remember forever.", type: "website", images: [{ url: `${origin}/og.png`, width: 1732, height: 908, alt: "Celebrate Life — Celebrate Beautifully. Remember Forever." }] },
    twitter: { card: "summary_large_image", title: "Celebrate Life Indore", description: "Celebrate Beautifully. Remember Forever.", images: [`${origin}/og.png`] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Celebrate Life",
    email: "celebratelife4444@gmail.com",
    telephone: ["+91 91115 46339", "+91 93404 93726"],
    areaServed: "Indore, Madhya Pradesh",
    sameAs: ["https://www.instagram.com/celebratelife_indore"],
  };
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable}`}>
        <a className="skip-link" href="#main">Skip to content</a>
        <SiteShell>{children}</SiteShell>
        <ServiceWorker />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
