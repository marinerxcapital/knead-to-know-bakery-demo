# Claude Code Handoff — Knead To Know

## Project summary

Knead To Know · Sweet & Sour is a premium white-themed artisan bakery demo. It is a polished Next.js App Router project with menu browsing, client-side cart, demo checkout, and lead capture flows.

## Brand direction and visual identity

The feeling is clean, delicious, elegant, warm, modern heritage, and high-end bakery packaging. Keep white/ivory space generous, typography matte-black and editorial, accents antique gold, and borders thin. Avoid rustic clichés, cartoon imagery, saturated colors, or generic template patterns.

## UX goals

Make browsing feel effortless and editorial; make ordering feel tangible but lightweight; make catering feel polished and lead-ready. Every page should always point to the next useful action without being pushy.

## Page-by-page intent

- Home: taste, brand promise, collection highlights, proof, conversion.
- Menu/order online: product discovery and intuitive demo add-to-bag flow.
- Sourdough/cookies/pastries: distinct collection stories with an order CTA.
- Catering: compelling packages plus a low-friction inquiry form.
- About: thoughtful brand world and standards.
- Gallery/FAQ/contact: confidence builders and practical answers.
- Cart/checkout/confirmation: complete demo commerce journey.

## Component architecture

Reusable pieces live in `components/`; local editorial data lives in `data/`; routes use composition rather than duplicated UI. `CartProvider` wraps the application in `app/layout.tsx` and persists data under `ktk-cart` in localStorage.

## Design polish priorities

1. Replace gallery concept cards with strong, consistent food photography.
2. Preserve spacious rhythm and small uppercase labels.
3. Favor fewer, stronger details rather than decorative clutter.
4. Test small-screen type wrapping, touch targets, and sticky header behavior.

## Copywriting tone

Warm, restrained, precise, and sensory. Short sentences are welcome. Never use filler or lorem ipsum; write with quiet confidence and a sense of appetite.

## Recommended refinements

Add product photography, real product availability, pickup calendar logic, a transactional backend/payment flow, proper map/social URLs, analytics, and schema markup. Introduce product-detail routes only once photo/content assets are robust.

## Important constraints and asset notes

No paid APIs or database are included. All forms are demo-only. Keep the original root asset untouched: `Knead To Know Logo v1.png`. Safe app copies live at `public/assets/knead-to-know-logo-v1.png` and `public/assets/knead-to-know-bakery-banner.jpg`; use the banner in home, About, and Catering hero treatments.

## Claude Code testing checklist

- `npm run lint` and `npm run build` pass.
- Check every nav item and visible CTA.
- Add cart items, refresh, update quantity, remove, and check totals.
- Submit each demo form and verify its success state.
- Verify menu filters/search and mobile navigation.
- Review at mobile, tablet, desktop, and large-desktop widths.
