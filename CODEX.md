# Codex Handoff — Knead To Know

## Project summary

Client-ready luxury artisan bakery demo for **Knead To Know · Sweet & Sour**. The application contains the complete first-version information architecture and a demo commerce flow with no backend dependencies.

## Tech stack and path

- Next.js 14 App Router, TypeScript, React, Tailwind CSS
- Project path: `C:\Users\Skyler B. Brown\Desktop\Knead To Know Website`
- Vercel-ready; no environment variables or external services

## Current build status

Initial site implementation is complete. Run `npm install`, `npm run lint`, and `npm run build` after any handoff to confirm local environment status.

## Commands

```bash
npm install
npm run dev
npm run lint
npm run build
npm start
```

## Page inventory

`/`, `/menu`, `/order-online`, `/sourdough`, `/cookies`, `/pastries`, `/catering`, `/about`, `/gallery`, `/faq`, `/contact`, `/cart`, `/checkout`, `/confirmation`.

## Component inventory

Header, Footer, Logo, Button, Container, SectionHeading, ProductCard, ProductGrid, CategoryFilter, CartProvider, CartButton, CartSummary, QuantitySelector, FAQAccordion, ContactForm, CateringForm, NewsletterForm, GalleryGrid, EmptyState, PageHero, FeatureCard, and CTASection.

## Data inventory

`data/products.ts`, `testimonials.ts`, `faqs.ts`, `cateringPackages.ts`, `galleryItems.ts`, and `site.ts`.

## Styling system

White and warm ivory foundation; matte `ink`, antique `gold`, and `beige` accents. Serif editorial headings, compact sans-serif navigation, thin borders, restrained shadows, responsive mobile-first grids. Shared primitives are in `app/globals.css` and `tailwind.config.ts`.

## Known limitations

- Checkout, inquiries, newsletter, and contact forms are intentional client-only demos; no information is sent.
- Tax is a flat demo estimate of 8.75%.
- Gallery cards are visual placeholders until approved food photography arrives.
- The original root logo remains untouched. The supplied bakery banner is safely stored in `public/assets/` and used in the home, About, and Catering hero treatments.

## Next steps for Codex

1. Replace gallery panels with optimized approved photography.
2. Add a transactional provider, order storage, and inventory/pickup rules.
3. Add business location, real hours, social destinations, and map embed.
4. Implement structured data, Open Graph assets, analytics, and product detail pages.

## Rules for continuing development

- Keep components reusable; update local data rather than hard-coding repeat products.
- Preserve the current cart context API and mobile-first responsiveness.
- Keep no external integration secret in client-side code.
- Use semantic labels and keyboard-safe controls.

## Quality standards

Run lint and build before handoff. Test cart persistence across refresh, mobile nav, every CTA, required-form success states, empty bag behavior, and desktop/mobile layouts.

## Asset warning

Do not delete, rename, or overwrite `Knead To Know Logo v1.png` at the workspace root. It is the original provided asset. The web app uses a safe copy in `public/assets/`.
