# Website Project Action Plan

This checklist breaks work into practical phases so you can improve the site without getting overwhelmed.

## 1) Launch-readiness (high priority)
- [ ] Verify every page has consistent **phone, email, and CTA wording**.
- [ ] Test all internal links and anchor links (`#contact`, service links, gallery links) on desktop + mobile.
- [ ] Add a custom `404.html` page and configure hosting to serve it.
- [ ] Confirm `sitemap.xml` includes every live page and correct canonical URLs.
- [ ] Ensure favicon, social share image, and logo render correctly on all pages.
- [ ] Run a full pre-launch pass from `GO-LIVE-GUIDE.html` and `DEPLOY.md`.

## 2) Contact & conversion improvements
- [ ] Add a dedicated contact form endpoint/service (Formspree, Netlify Forms, or custom backend).
- [ ] Add clear success/error states and spam protection (honeypot or CAPTCHA).
- [ ] Add a sticky “Call now” and “Get quote” CTA on all service pages.
- [ ] Add a “Service Areas” section on each key page for local intent.
- [ ] Add stronger trust signals near CTAs (review count, guarantee, years of experience).

## 3) SEO foundations
- [ ] Review each page title/meta description for unique, non-duplicated copy.
- [ ] Add/verify JSON-LD on all service pages (LocalBusiness + Service schema where relevant).
- [ ] Add missing Open Graph/Twitter tags on every page.
- [ ] Set up and verify Google Search Console + Bing Webmaster Tools.
- [ ] Submit `sitemap.xml` after deployment and monitor index coverage.
- [ ] Create location-focused pages if targeting multiple towns around Glasgow.

## 4) Performance & Core Web Vitals
- [ ] Compress and resize all large JPG/PNG assets; generate WebP alternatives.
- [ ] Lazy-load non-critical gallery and below-the-fold images.
- [ ] Preload the hero image and key font files where beneficial.
- [ ] Audit render-blocking CSS and remove unused styles.
- [ ] Run Lighthouse on mobile and fix LCP/CLS/INP bottlenecks.

## 5) Accessibility & UX polish
- [ ] Add a visible focus state for keyboard users on all interactive elements.
- [ ] Verify heading structure (one `h1` per page; logical `h2/h3` hierarchy).
- [ ] Ensure all image `alt` text is meaningful (especially gallery images).
- [ ] Check color contrast for buttons, overlays, and text on image backgrounds.
- [ ] Add `aria-expanded`/`aria-controls` behavior to hamburger menu for screen readers.

## 6) Content & social proof
- [ ] Expand service pages with process sections: survey → quote → install → handover.
- [ ] Add before/after case studies with project details (area, materials, timeline).
- [ ] Add more customer testimonials with location and job type.
- [ ] Add FAQs addressing pricing, timelines, planning permission, and maintenance.
- [ ] Add a clear warranty/guarantee section site-wide.

## 7) Measurement & growth
- [ ] Install analytics (GA4 or Plausible) with conversion events (call clicks, form submits).
- [ ] Track calls using click-to-call event tags on `tel:` links.
- [ ] Define monthly KPI targets (leads, conversion rate, top pages, top queries).
- [ ] Create a monthly content/update routine (new project photos + fresh reviews).

## Suggested execution order
1. Launch-readiness checks
2. Contact form + conversion CTAs
3. SEO metadata/schema consistency
4. Performance pass (image optimization)
5. Accessibility and UX improvements
6. Content expansion and case studies
7. Analytics and monthly iteration cadence
