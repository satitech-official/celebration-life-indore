import Image from "next/image";

export function PageHero({
  eyebrow,
  title,
  copy,
  image = "/celebrate-life-hero.png",
  imageAlt = "Premium event decoration by Celebrate Life Indore"
}: {
  eyebrow: string;
  title: string;
  copy: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="page-hero page-hero-visual">
      <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="page-hero-image" />
      <div className="page-hero-overlay" aria-hidden="true" />
      <div className="page-hero-content">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{copy}</p>
      </div>
    </section>
  );
}
