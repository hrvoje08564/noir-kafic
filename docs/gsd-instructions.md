# GSD Agent Instructions
> This file tells the AI exactly how to behave when building a client website.
> Read this file completely before writing a single line of code.

---

## Step 1 — Before Any Code, Read These Files

Read all of the following in this exact order:
1. `/docs/client-brief.md` — what the client needs
2. `/docs/design-system.md` — colors, fonts, spacing rules
3. `/docs/component-rules.md` — how every component must be built
4. `/docs/page-structure.md` — what sections go on which pages

Do not proceed until you have read all four files. Confirm by summarizing:
- Client name and business type
- Pages to build
- Primary and secondary colors
- Heading and body fonts
- Style vibe

---

## Step 2 — Create the Task Plan

Using GSD, break the project into tasks in this order:

```
Task 1: Project setup (tailwind config, fonts, global CSS, color variables)
Task 2: Reusable UI components (Button, Card, SectionHeading)
Task 3: Layout components (Navbar, Footer)
Task 4: Home page — build all sections
Task 5: About page
Task 6: Services page
Task 7: Contact page (with working form)
Task 8: Additional pages from client-brief.md
Task 9: Responsiveness check — all pages, all breakpoints
Task 10: Final polish (spacing, hover states, transitions, accessibility)
```

Present this task list and wait for approval before starting.

---

## Step 3 — Project Setup Rules

### tailwind.config.ts
Always extend the theme with client brand colors:

```typescript
theme: {
  extend: {
    colors: {
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
      background: 'var(--color-background)',
      surface: 'var(--color-surface)',
      'text-muted': 'var(--color-text-muted)',
    },
    fontFamily: {
      heading: ['var(--font-heading)', 'sans-serif'],
      body: ['var(--font-body)', 'sans-serif'],
    },
  },
}
```

### globals.css
Define all CSS variables at the top:

```css
:root {
  --color-primary: #000000;
  --color-secondary: #000000;
  --color-background: #ffffff;
  --color-surface: #f5f5f5;
  --color-text: #111111;
  --color-text-muted: #666666;
  --color-border: #e5e5e5;
}
```

Replace hex values with those from design-system.md.

### layout.tsx
- Import fonts using next/font/google
- Apply font variables to the html element
- Include Navbar and Footer
- Include metadata (title, description)

---

## Step 4 — Build Rules

### One task at a time
Complete each task fully before moving to the next. Do not start Task 4 while Task 3 is unfinished.

### After each page, stop and report:
```
✅ [PAGE NAME] complete
- Sections built: [list]
- Components created: [list]
- Notes: [anything unusual or worth reviewing]

Ready for next task? Type 'continue' to proceed.
```

### Never skip these on any component:
- [ ] Mobile responsive
- [ ] Correct colors from design-system.md
- [ ] Correct fonts from design-system.md
- [ ] Hover states on interactive elements
- [ ] Alt text on all images
- [ ] TypeScript types (no `any`)
- [ ] No console errors

---

## Step 5 — Component Creation Rules

### Always create reusable components, never repeat code
If the same pattern appears twice → extract it into a component.

### Component file template:
```typescript
// /src/components/[folder]/ComponentName.tsx

interface ComponentNameProps {
  // define props here
}

export default function ComponentName({ }: ComponentNameProps) {
  return (
    // JSX here
  )
}
```

### Server vs Client components:
- Default: server component (no `'use client'`)
- Add `'use client'` only when needed:
  - useState or useEffect
  - onClick handlers
  - Browser APIs
  - Framer Motion animations

---

## Step 6 — Content Rules

### If client provides text:
Use it exactly as given. Do not rewrite unless asked.

### If AI generates text:
- Tone must match design-system.md brand tone notes
- Headlines: short, punchy, benefit-focused
- Body text: clear, no jargon, scannable
- CTAs: action verbs ("Get a Free Quote", "See Our Work", "Book a Call")
- Never use filler placeholder text (no Lorem Ipsum in final output)

### If images are not provided:
Use placeholder images from:
- `https://picsum.photos/[width]/[height]` for general images
- Note in a comment `// TODO: Replace with client image`

---

## Step 7 — Contact Form

Always use this setup for contact forms:
- Frontend: controlled React form with validation
- Email sending: **Resend** (resend.com) via Next.js API route
- API route: `/app/api/contact/route.ts`
- On success: show green success message in the form
- On error: show red error message, keep form data intact
- Never clear the form on error

---

## Step 8 — Final Checklist Before Marking Complete

Run through this before telling the user the site is done:

### Functionality
- [ ] All pages load without errors
- [ ] Navigation links work correctly
- [ ] Contact form submits and shows success message
- [ ] All buttons have correct hover/active states
- [ ] External links open in new tab

### Responsive
- [ ] Mobile (375px) — no horizontal scroll, text readable
- [ ] Tablet (768px) — layout adjusts correctly
- [ ] Desktop (1280px) — full layout, max width respected

### Design
- [ ] Colors match design-system.md
- [ ] Fonts match design-system.md
- [ ] Consistent spacing throughout
- [ ] No misaligned elements
- [ ] Section backgrounds alternate correctly

### Code Quality
- [ ] No TypeScript errors
- [ ] No unused imports
- [ ] No console errors or warnings
- [ ] All images use next/image
- [ ] All fonts use next/font

### Accessibility
- [ ] All images have alt text
- [ ] All form inputs have labels
- [ ] Keyboard navigation works
- [ ] Focus states visible

---

## Common Mistakes to Avoid

```
❌ Using <img> instead of next/image
❌ Using <a href> instead of next/link for internal links
❌ Adding 'use client' to every component
❌ Hardcoding colors instead of using CSS variables
❌ Building for desktop first
❌ Skipping hover states
❌ Forgetting alt text
❌ Using Lorem Ipsum in final output
❌ Putting everything in one giant file
❌ Not checking mobile after building desktop
```
