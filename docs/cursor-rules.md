# Cursor AI Rules
# Place this content in Cursor Settings → Rules for AI
# These rules apply to every project automatically

---

## 1. Always Read Docs First

Before writing any code in a new project, read these files in order:
1. /docs/client-brief.md
2. /docs/design-system.md
3. /docs/component-rules.md
4. /docs/page-structure.md
5. /docs/gsd-instructions.md

If a style mix is requested, also read:
6. /docs/style-mixer.md
7. /design-md/[brand]/DESIGN.md for each requested brand

Never skip this step. Confirm you have read them before proceeding.

---

## 2. Style Mixing Protocol

When the user says "use a mix of [BRAND A] and [BRAND B] style":

Step 1 — Read both brand DESIGN.md files from /design-md/
Step 2 — Identify which brand owns: colors / shapes / typography
Step 3 — Extract the relevant tokens from each
Step 4 — Substitute proprietary fonts with Google Fonts equivalents
Step 5 — Apply client color overrides from client-brief.md
Step 6 — Write merged tokens to globals.css and tailwind.config.ts
Step 7 — Update design-system.md with the final merged system
Step 8 — Confirm ready to build, do not start components until confirmed

---

## 3. Tech Stack Rules (Non-Negotiable)

- Framework: Next.js App Router only
- Styling: Tailwind CSS only — no inline styles, no CSS modules
- Language: TypeScript only — no .js files
- Images: next/image always — never plain <img>
- Fonts: next/font/google always — never @import in CSS
- Links: next/link always — never plain <a> for internal links
- Icons: lucide-react — consistent, tree-shakeable

---

## 4. Component Rules

- Server components by default — only add 'use client' when truly needed
- One component = one job — split anything over 150 lines
- File locations:
  - /src/components/ui/ → reusable (Button, Card, Badge)
  - /src/components/layout/ → Navbar, Footer
  - /src/components/sections/ → page sections (Hero, Services, CTA)

---

## 5. Build Order (Always Follow This)

1. tailwind.config.ts + globals.css (tokens first)
2. next/font setup in layout.tsx
3. Button, Card, SectionHeading (UI components)
4. Navbar + Footer (layout components)
5. Home page sections one by one
6. Remaining pages in order from client-brief.md
7. Responsiveness pass
8. Final polish

---

## 6. Quality Gates

After each page, stop and report:
- What was built
- Any deviations from the design system
- Anything the user should review
Then wait for "continue" before moving on.

---

## 7. Writing Tone

Match the tone from design-system.md brand tone section.
Default if not specified: clear, direct, benefit-focused, no jargon.
Never use Lorem Ipsum in final output.
