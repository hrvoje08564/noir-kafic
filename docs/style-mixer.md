# Style Mixer
> This file tells Cursor how to combine 2-3 brand design styles from the /design-md library.
> Use this at the start of every project where you want a custom mixed aesthetic.

---

## How to Use This File

At the start of a new project, tell Cursor:

```
Read /docs/style-mixer.md and then mix the following styles: [BRAND 1], [BRAND 2], [BRAND 3 optional]
Apply the mixed design system to this project before building anything.
```

Cursor will read each brand's DESIGN.md, extract the relevant tokens, and produce a unified design system for your project.

---

## Mixing Rules

### Rule 1 — One brand owns the colors
Pick ONE brand for the primary color palette. Never blend two brands' colors — it creates visual noise.

```
Example:
- Colors from: Airbnb
- Layout from: Linear
- Typography from: Stripe
```

### Rule 2 — One brand owns the shape language
Pick ONE brand for border radius, shadow, and spacing philosophy. Mixing shape languages creates inconsistency.

```
Soft/rounded brands: Airbnb, Apple, Framer, Notion
Sharp/structured brands: Linear, Figma, Coinbase, Vercel
Minimal/flat brands: Stripe, Clerk, Resend
```

### Rule 3 — One brand owns the typography feel
Pick ONE brand's type scale and weight philosophy — either trust their exact sizes or adapt to Google Fonts equivalents.

---

## How to Specify a Mix

Fill this out per client project:

```yaml
# Style Mix for: [CLIENT NAME]

color_source: ""         # Which brand's colors to use (e.g. "Airbnb", "Stripe")
shape_source: ""         # Which brand's radius/shadow/spacing (e.g. "Linear", "Apple")
typography_source: ""    # Which brand's type scale and weights (e.g. "Vercel", "Figma")

accent_override: ""      # Optional: replace accent color with client's brand color (hex)
primary_override: ""     # Optional: replace primary color with client's brand color (hex)

vibe_notes: ""           # Describe the overall feel (e.g. "clean SaaS with warm tones")
```

---

## Pre-Built Mix Recipes

These are tested combinations that work well together. Use them as starting points.

---

### Mix A — "Warm Professional"
Good for: local businesses, consultants, restaurants, service companies

```yaml
color_source: "Airbnb"
shape_source: "Airbnb"
typography_source: "Stripe"
vibe_notes: "Warm, human, trustworthy. Rounded corners, generous whitespace, strong CTAs."
font_substitute: "Inter for Stripe's system font. Lora or Merriweather for Airbnb Cereal display headings."
```

What you get:
- Airbnb's warm canvas (pure white) with their border/surface token system
- Airbnb's soft rounded shapes (8px buttons, 14px cards, pill search bars)
- Stripe's clean, readable typography scale with moderate weights
- Replace Airbnb's Rausch red with the client's brand color as primary

---

### Mix B — "Sharp Modern SaaS"
Good for: tech startups, software products, agencies, portfolios

```yaml
color_source: "Vercel"
shape_source: "Linear"
typography_source: "Figma"
vibe_notes: "Dark, precise, high-contrast. Sharp corners, tight spacing, confident type."
font_substitute: "Inter throughout. Geist Mono for code elements."
```

What you get:
- Vercel's dark/light mode color system (black backgrounds, white text, gray surfaces)
- Linear's structured spacing and minimal shadow philosophy
- Figma's clear typographic hierarchy with strong heading weights
- Great for dark mode sites

---

### Mix C — "Minimal Clean"
Good for: photographers, creatives, architects, luxury brands

```yaml
color_source: "Apple"
shape_source: "Apple"
typography_source: "Framer"
vibe_notes: "Ultra clean, generous whitespace, subtle everything. Let the content breathe."
font_substitute: "Inter or Plus Jakarta Sans. No bold display weights — keep headings at 500-600 max."
```

What you get:
- Apple's near-white surfaces, subtle grays, single accent color
- Apple's consistent 8-12px radius, almost no shadows
- Framer's spacious section padding and restrained type weights
- Best for image-heavy sites where design gets out of the way

---

### Mix D — "Bold & Energetic"
Good for: gyms, events, youth brands, e-commerce, food

```yaml
color_source: "Binance"
shape_source: "Coinbase"
typography_source: "BMW"
vibe_notes: "High contrast, bold type, strong CTAs. Black/yellow or strong brand color energy."
font_substitute: "Barlow Condensed or Oswald for headings. Inter for body."
```

What you get:
- Binance's high-contrast dark palette (replace yellow with client's accent)
- Coinbase's structured card system and clean form components
- BMW's confident display typography with strong heading weight hierarchy
- Great for brands that want to feel powerful and energetic

---

### Mix E — "Soft E-Commerce"
Good for: online shops, beauty brands, home goods, fashion

```yaml
color_source: "Airbnb"
shape_source: "Framer"
typography_source: "Apple"
vibe_notes: "Soft, shoppable, photography-forward. Cards feel like a curated feed."
font_substitute: "Nunito or DM Sans for friendly feel. Cormorant Garamond for luxury variant."
```

What you get:
- Airbnb's photo-first card system adapted for products
- Framer's generous section spacing and smooth hover transitions
- Apple's clean typography hierarchy that never competes with product images
- Best for brands where the product photography needs to shine

---

## Font Substitutes Reference

Since most brand fonts are proprietary, always substitute with Google Fonts equivalents:

| Brand Font | Closest Google Font | Notes |
|---|---|---|
| Airbnb Cereal / Circular | **Inter** | Reduce line-height by ~2% |
| SF Pro (Apple) | **Inter** | Very close match |
| Söhne (Figma) | **Inter** or **DM Sans** | |
| Geist (Vercel) | **Inter** | Use Geist Mono for code |
| BMW Type (BMW) | **Barlow** or **Oswald** | For condensed bold headers |
| Gotham (Coinbase) | **Montserrat** | Slightly more geometric |
| Graphik (Framer) | **Plus Jakarta Sans** | |
| Stripe's system stack | **Inter** | Already uses system fonts |

---

## How Cursor Should Apply a Mix

When given a style mix, Cursor must:

1. Read the specified brands' DESIGN.md files from `/design-md/[brand]/DESIGN.md`
2. Extract: colors from `color_source`, radius/shadow/spacing from `shape_source`, typography from `typography_source`
3. Replace proprietary fonts with the nearest Google Fonts substitute
4. Apply any `accent_override` or `primary_override` values from the client brief
5. Write the merged tokens into `globals.css` as CSS variables
6. Write the Tailwind config extension with the merged tokens
7. Document the final merged design system in `design-system.md` before building any components

---

## Example Prompt to Give Cursor

```
Read /docs/style-mixer.md.
Read /design-md/airbnb/DESIGN.md and /design-md/linear/DESIGN.md.

Mix them using these rules:
- Colors: Airbnb (replace Rausch #ff385c with client primary #2563eb)
- Shape language: Linear (sharp, structured, minimal shadow)
- Typography: Airbnb scale with Inter as font substitute

Write the merged design tokens into /docs/design-system.md, then write 
globals.css and tailwind.config.ts, then confirm you are ready to build.
```
