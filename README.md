# Celebrate Life Indore

Premium multi-route event-decoration website for Celebrate Life, Indore.

## Local setup

1. Copy `.env.example` to `.env.local`.
2. Leave `NEXT_PUBLIC_WHATSAPP_NUMBER` empty until the official WhatsApp number is confirmed.
3. Add a Resend key and verified sender to enable enquiry notification emails.
4. Install dependencies with `npm install`, then run `npm run dev`.
5. Generate a D1 migration after schema changes with `npm run db:generate`.

## Content and media

- Business details: `config/business.ts`
- Services, packages and FAQs: `content/site.ts`
- Gallery placeholders: `components/GalleryBrowser.tsx`
- Hero/demo photography: `public/celebrate-life-hero.png`

Replace demo media with original, owner-approved photographs. Do not hotlink Instagram media. Curated mode is the default until the official Meta Instagram Graph API is configured server-side.

## Launch checklist

- Confirm official WhatsApp number.
- Replace the example domain in metadata, sitemap and robots.
- Add verified owner story, testimonials, statistics, business hours and map listing.
- Confirm package inclusions, pricing, travel availability and all legal policies.
- Configure D1, email sender and environment values.
- Test form saving and email delivery in production.
- Replace demo imagery with original project media and optimized AVIF/WebP variants.
- Add final app icons and social card.
- Run accessibility, performance, mobile and reduced-motion checks.

## Deployment

The project is configured for Sites/Vercel-style environment variables and App Router deployment. Set production environment variables in the hosting dashboard, deploy the validated build, then connect the verified domain.
