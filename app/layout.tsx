import type { Metadata } from "next";
import { SiteShell } from "../components/SiteShell";
import { ServiceWorker } from "../components/ServiceWorker";
import "./globals.css";
import "./enhancements.css";

const siteUrl = "https://satitech-official.github.io/celebration-life-indore";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Celebrate Life Indore | Premium Event & Balloon Decoration",
    template: "%s | Celebrate Life Indore"
  },
  description:
    "Premium customized event and balloon decoration for birthdays, weddings, baby showers, proposals and special occasions in Indore.",
  icons: {
    icon: "/celebration-life-indore/icon.svg",
    apple: "/celebration-life-indore/icon.svg"
  },
  manifest: "/celebration-life-indore/manifest.webmanifest",
  openGraph: {
    title: "Celebrate Life Indore",
    description: "Celebrate beautifully. Remember forever.",
    type: "website",
    url: siteUrl,
    images: [
      {
        url: `${siteUrl}/og.png`,
        width: 1732,
        height: 908,
        alt: "Celebrate Life — Celebrate Beautifully. Remember Forever."
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Celebrate Life Indore",
    description: "Celebrate Beautifully. Remember Forever.",
    images: [`${siteUrl}/og.png`]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Celebrate Life",
    email: "celebratelife4444@gmail.com",
    telephone: ["+91 91115 46339", "+91 93404 93726"],
    areaServed: "Indore, Madhya Pradesh",
    url: siteUrl,
    sameAs: ["https://www.instagram.com/celebratelife_indore"]
  };

  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <SiteShell>{children}</SiteShell>
        <ServiceWorker />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
