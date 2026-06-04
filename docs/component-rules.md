# Component Rules
> These rules apply to every website you build unless client-brief.md says otherwise.
> Cursor must follow these exactly when building components.

---

## 1. General Rules

- Always use **Next.js App Router** (`/app` directory)
- Always use **Tailwind CSS** for all styling — no inline styles, no CSS modules
- Always use **TypeScript** — no `.js` files, only `.tsx` and `.ts`
- Always use **`next/image`** for images — never a plain `<img>` tag
- Always use **`next/font`** for fonts — import in `layout.tsx`
- Always use **`next/link`** for internal navigation — never `<a>` tags
- Keep components **small and focused** — one job per component
- All components must be **fully responsive** — mobile first

---

## 2. File Structure

```
/src
  /app
    /page.tsx              ← home page
    /about/page.tsx
    /services/page.tsx
    /contact/page.tsx
    /layout.tsx            ← navbar + footer + fonts go here
    /globals.css
  /components
    /layout
      Navbar.tsx
      Footer.tsx
    /sections
      Hero.tsx
      Services.tsx
      Testimonials.tsx
      CTASection.tsx
      AboutSnippet.tsx
    /ui
      Button.tsx
      Card.tsx
      SectionHeading.tsx
      ContactForm.tsx
```

---

## 3. Navbar

```
- Logo on the left (use next/image or SVG)
- Navigation links on the right
- Mobile: hamburger icon → full screen or slide-in menu
- Sticky on scroll (position: sticky, top: 0)
- Background: white with subtle bottom border or shadow on scroll
- Active link: highlighted with primary color
- Max width: 1200px, centered
- Height: 64px on desktop, 56px on mobile
- CTA button (e.g. "Get a Quote") on far right — optional
```

---

## 4. Hero Section

```
- Full viewport height on desktop (min-h-screen)
- At minimum 600px on mobile
- Must contain:
  - Short punchy headline (H1)
  - One-sentence subheading
  - One primary CTA button
  - Optional: secondary CTA button (outlined)
- Background options:
  - Full-bleed image with dark overlay (bg-black/50)
  - Gradient background using brand colors
  - Solid brand color
- Text always white if on dark background
- CTA button always clearly visible
```

---

## 5. Section Layout

```
- Every section: py-16 md:py-24
- Every section: max-w-7xl mx-auto px-4 md:px-8
- Alternate background: white → surface color → white
- Every section starts with a SectionHeading component
- SectionHeading contains: label (small caps) + H2 heading + optional subtext
- Never stack two sections of the same background color
```

---

## 6. Cards

```
- Padding: p-6
- Background: white
- Border radius: rounded-lg (8px)
- Shadow: shadow-md
- Hover: hover:-translate-y-1 hover:shadow-lg transition-all duration-200
- Always include: icon or image at top, title (H3), description text
- Never mix card sizes on the same row
- Grid: 1 col mobile → 2 col md → 3 col lg
- Gap: gap-6 md:gap-8
```

---

## 7. Buttons

```
Primary button:
- Background: primary color
- Text: white
- Padding: px-6 py-3
- Border radius: rounded-md
- Hover: slightly darker background (brightness-90)
- Active: scale-95

Secondary / Outline button:
- Background: transparent
- Border: 2px solid primary color
- Text: primary color
- Hover: fill with primary color, text turns white

Rules:
- Never more than 2 button styles per page
- Always include cursor-pointer
- Always include focus-visible ring for accessibility
- Font weight: font-medium
```

---

## 8. Forms

```
- Label above every input (never placeholder-only)
- Input padding: px-4 py-3
- Input border: 1px solid border color
- Input border radius: rounded-md
- Focus state: ring-2 ring-primary outline-none
- Error state: border-red-500 + red error message below
- Submit button: full width on mobile, auto width on desktop
- Show loading state on submit (spinner or disabled)
- Show success message after submit (green, friendly text)
- Show error message if it fails (red, helpful text)
- Required fields marked with * and explained above form
```

---

## 9. Images

```
- Always use next/image
- Always include meaningful alt text (describe what's in the image)
- Hero images: fill layout with object-cover
- Card images: fixed aspect ratio (e.g. aspect-video or aspect-square)
- Lazy load all images below the fold (Next.js does this by default)
- Never use images wider than they need to be
- Always provide width and height to avoid layout shift
```

---

## 10. Footer

```
- Dark background (dark gray or primary color)
- Light text
- Sections:
  1. Logo + short tagline (left column)
  2. Navigation links grouped by category (middle)
  3. Contact info + social icons (right column)
- Bottom bar: copyright line + optional privacy policy link
- Social icons: simple SVGs or lucide-react icons
- Grid: 1 col mobile → 3 col desktop
```

---

## 11. Testimonials

```
- Card per testimonial
- Include: quote text, star rating (if applicable), name, role/company
- Optional: photo (rounded-full avatar)
- Layout: grid 1 col → 2-3 col on desktop
- Background: surface color section
- Quote marks: decorative large quotation mark in primary color
```

---

## 12. Accessibility (Non-Negotiable)

```
- All interactive elements must be keyboard accessible
- Minimum color contrast ratio: 4.5:1 for text
- All images must have alt text
- Use semantic HTML: <nav> <main> <section> <footer> <article>
- Buttons must have accessible labels (aria-label if icon-only)
- Forms must have associated labels (htmlFor + id)
- Focus states must be clearly visible
- Never remove outline on focus without a custom replacement
```

---

## 13. Performance Rules

```
- Use next/image for all images (automatic optimization)
- Use next/font for all fonts (no layout shift)
- Keep component files under 150 lines — split if larger
- No unused imports
- Use dynamic imports for heavy components (e.g. maps, carousels)
- Minimize client components — use server components by default
- Only add "use client" when truly needed (interactivity, hooks)
```
