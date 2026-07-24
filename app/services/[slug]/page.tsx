import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Phone } from "lucide-react";
import { businessConfig, phoneHref, whatsappHref } from "../../../config/business";
import { getServiceImage, services } from "../../../content/site";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  return service
    ? {
        title: service.title,
        description: `${service.shortDescription} Explore customized ${service.title.toLowerCase()} in Indore with Celebrate Life.`
      }
    : {};
}

export default async function Service({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  const whatsapp = whatsappHref(`Selected service: ${service.title}`);

  return (
    <>
      <section className="service-detail-hero">
        <div>
          <p className="eyebrow">{service.category} · Indore</p>
          <h1>{service.title}</h1>
          <p>{service.fullDescription}</p>
          <div className="feature-chips">
            {service.features.map((feature) => <span key={feature}>{feature}</span>)}
          </div>
          <div className="hero-actions">
            <Link className="button" href={`/book?service=${service.slug}`}>
              Book this service <ArrowRight />
            </Link>
            <a className="text-link" href={phoneHref(businessConfig.primaryPhone)}>
              <Phone /> Call
            </a>
          </div>
        </div>
        <figure>
          <Image
            src={getServiceImage(service.slug)}
            alt={`${service.title} decoration inspiration`}
            fill
            priority
            sizes="(max-width: 900px) 100vw, 50vw"
            className="service-detail-image"
          />
        </figure>
      </section>
      <section className="page-content">
        <div className="prose-grid">
          <div>
            <p className="eyebrow dark">Made around your moment</p>
            <h2>What we can<br /><em>shape together.</em></h2>
          </div>
          <div>
            <h3>Best for</h3>
            <p>Celebrations where a focused visual setting, personalised colour direction and photo-ready focal point are important.</p>
            <h3>Possible elements</h3>
            <p>Backdrop styling, balloon arrangements, personalised signs, lighting accents, cake-table details, floral elements and props can be discussed. Your quotation will confirm actual inclusions.</p>
            <h3>How customisation works</h3>
            <p>Share the venue, date, event type, preferred colours and inspiration. The team will discuss what is achievable before confirming the concept.</p>
            {whatsapp ? (
              <a className="button button-dark" href={whatsapp} target="_blank" rel="noopener noreferrer">
                Enquire on WhatsApp
              </a>
            ) : null}
          </div>
        </div>
      </section>
    </>
  );
}
