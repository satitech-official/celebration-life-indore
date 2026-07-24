# Celebrate Life Indore

Premium multi-page event-decoration website for **Celebrate Life, Indore**—built for birthdays, weddings, baby showers, proposals, anniversaries, corporate events and customized celebrations.

## Live Website

[![Open Live Website](https://img.shields.io/badge/Open%20Live%20Website-Celebrate%20Life-6f284f?style=for-the-badge&logo=github)](https://satitech-official.github.io/celebration-life-indore/)

[![Celebrate Life Indore website preview](https://raw.githubusercontent.com/satitech-official/celebration-life-indore/main/public/celebrate-life-hero.png)](https://satitech-official.github.io/celebration-life-indore/)

**Live URL:** https://satitech-official.github.io/celebration-life-indore/

The preview image and button above both open the live GitHub Pages website.

## Website Highlights

- Premium responsive multi-page event decoration design
- Image-rich home, service, gallery and detail pages
- 27 decoration services with relevant visual cards
- Filterable event gallery with image lightbox
- Birthday, wedding, baby shower, kids and anniversary visuals
- Packages, testimonials, FAQs, contact and event booking routes
- Instagram, phone and booking call-to-actions
- GitHub Pages-safe routing, images, favicon and social previews
- Automatic deployment through GitHub Actions

## Image Reliability

- Website visuals are stored inside `public/` and deployed with the project.
- Every service card and detail page uses an event image.
- Every main page includes a visual hero section.
- Next.js images are exported without a server-side image optimizer.
- Repository subfolder paths are handled for GitHub Pages.
- README uses the repository-owned hero image as a clickable preview.

## Local Development

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

The generated static website is written to the `out/` directory.

## GitHub Pages Deployment

Deployment is handled by:

```text
.github/workflows/deploy-pages.yml
```

Repository Pages source must be set to **GitHub Actions**.

## Content Locations

- Business details: `config/business.ts`
- Services, packages, FAQs and gallery data: `content/site.ts`
- Main homepage: `components/Home.tsx`
- Gallery: `components/GalleryBrowser.tsx`
- Service directory: `components/ServiceBrowser.tsx`
- Event images: `public/events/`
- Hero and social preview: `public/celebrate-life-hero.png`, `public/og.png`

---

**Celebrate Beautifully. Remember Forever.**
