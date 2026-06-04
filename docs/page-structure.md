# Page Structure
> Standard section order for each page type.
> Use this as the default. Adjust per client-brief.md if needed.

---

## Home Page (`/`)

| Order | Section | Component | Notes |
|---|---|---|---|
| 1 | Navigation | `Navbar` | Sticky, always first |
| 2 | Hero | `Hero` | Full height, strong headline + CTA |
| 3 | Social Proof | `SocialProof` | Logos, stats, or short trust line |
| 4 | Services Overview | `ServicesGrid` | 3 cards, brief description each |
| 5 | About Snippet | `AboutSnippet` | 2-col: text left, image right |
| 6 | How It Works | `ProcessSteps` | 3-4 numbered steps (optional) |
| 7 | Testimonials | `Testimonials` | 2-3 client quotes |
| 8 | CTA Banner | `CTASection` | Strong headline + contact button |
| 9 | Footer | `Footer` | Always last |

---

## About Page (`/about`)

| Order | Section | Component | Notes |
|---|---|---|---|
| 1 | Navigation | `Navbar` | |
| 2 | Page Hero | `PageHero` | Title + short subtitle, shorter than home hero |
| 3 | Story / Background | `StorySection` | Who they are, how they started |
| 4 | Mission & Values | `ValuesGrid` | 3-4 value cards with icons |
| 5 | Team / Owner | `TeamSection` | Photo + name + role + short bio |
| 6 | Why Choose Us | `WhyUs` | 3-4 differentiators |
| 7 | CTA | `CTASection` | "Ready to work together?" |
| 8 | Footer | `Footer` | |

---

## Services Page (`/services`)

| Order | Section | Component | Notes |
|---|---|---|---|
| 1 | Navigation | `Navbar` | |
| 2 | Page Hero | `PageHero` | Title + subtitle |
| 3 | Services List | `ServicesDetailed` | One detailed card per service |
| 4 | Process / How It Works | `ProcessSteps` | Step-by-step how you work |
| 5 | Pricing (optional) | `PricingCards` | Only if client wants public pricing |
| 6 | FAQ | `FAQAccordion` | 5-8 common questions |
| 7 | CTA | `CTASection` | "Get a free quote" or similar |
| 8 | Footer | `Footer` | |

---

## Portfolio / Gallery Page (`/portfolio`)

| Order | Section | Component | Notes |
|---|---|---|---|
| 1 | Navigation | `Navbar` | |
| 2 | Page Hero | `PageHero` | Title + subtitle |
| 3 | Filter Bar | `PortfolioFilter` | Filter by category (optional) |
| 4 | Portfolio Grid | `PortfolioGrid` | Masonry or uniform grid |
| 5 | CTA | `CTASection` | "Like what you see? Let's talk." |
| 6 | Footer | `Footer` | |

---

## Pricing Page (`/pricing`)

| Order | Section | Component | Notes |
|---|---|---|---|
| 1 | Navigation | `Navbar` | |
| 2 | Page Hero | `PageHero` | Title + subtitle |
| 3 | Pricing Cards | `PricingCards` | 2-3 tiers, highlight recommended |
| 4 | Feature Comparison | `ComparisonTable` | What's included in each (optional) |
| 5 | FAQ | `FAQAccordion` | Pricing-specific questions |
| 6 | CTA | `CTASection` | "Not sure which plan? Contact us." |
| 7 | Footer | `Footer` | |

---

## Contact Page (`/contact`)

| Order | Section | Component | Notes |
|---|---|---|---|
| 1 | Navigation | `Navbar` | |
| 2 | Page Hero | `PageHero` | "Get In Touch" or similar |
| 3 | Contact Split | `ContactSection` | Form left, info right |
| 4 | Google Maps | `MapEmbed` | Optional — only if physical location |
| 5 | Footer | `Footer` | |

### Contact Form Fields (standard)
```
- Full Name (required)
- Email Address (required)
- Phone Number (optional)
- Subject / Service of interest (optional dropdown)
- Message (required, textarea)
- Submit button: "Send Message"
```

---

## Blog Page (`/blog`)

| Order | Section | Component | Notes |
|---|---|---|---|
| 1 | Navigation | `Navbar` | |
| 2 | Page Hero | `PageHero` | "Blog" or "News & Updates" |
| 3 | Featured Post | `FeaturedPost` | Latest post, large card (optional) |
| 4 | Posts Grid | `BlogGrid` | 6-9 posts, paginated |
| 5 | Footer | `Footer` | |

---

## Single Blog Post (`/blog/[slug]`)

| Order | Section | Notes |
|---|---|---|
| 1 | Navigation | `Navbar` |
| 2 | Post Header | Title, date, author, category |
| 3 | Featured Image | Full width, max 800px tall |
| 4 | Post Content | Properly styled markdown/rich text |
| 5 | Author Bio | Small card below content (optional) |
| 6 | Related Posts | 2-3 cards |
| 7 | Footer | |

---

## E-commerce: Product Listing (`/shop`)

| Order | Section | Notes |
|---|---|---|
| 1 | Navigation | With cart icon |
| 2 | Filter + Sort Bar | Category, price, sort order |
| 3 | Products Grid | 3-4 col, image + name + price + add to cart |
| 4 | Pagination | Load more or numbered pages |
| 5 | Footer | |

---

## E-commerce: Product Page (`/shop/[slug]`)

| Order | Section | Notes |
|---|---|---|
| 1 | Navigation | |
| 2 | Product Detail | Image gallery left, info + add to cart right |
| 3 | Description Tabs | Description / Details / Reviews |
| 4 | Related Products | 3-4 similar products |
| 5 | Footer | |

---

## Page Hero Component Variants

```
Variant A — Simple (text centered, solid or gradient bg)
  - Use for: About, Contact, Blog, Pricing

Variant B — Split (text left, image right)
  - Use for: Services, Portfolio

Variant C — Full height with background image
  - Use for: Home page only

Variant D — Minimal (just a title + breadcrumb)
  - Use for: inner pages, blog posts, product pages
```
