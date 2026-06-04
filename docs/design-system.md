# Design System — Noir Kafić

## Style Mix

| Element | Brand |
|---|---|
| Boje | Custom dark (inspiracija: Linear + Vercel dark) |
| Oblici | Linear (oštar, minimalan) |
| Tipografija | Miješano — Playfair Display + Inter |

---

## Boje

```css
/* globals.css */
:root {
  --background:        #0a0a0a;
  --background-secondary: #111111;
  --background-card:   #161616;
  --gold:              #D4AF37;
  --gold-hover:        #c9a430;
  --gold-muted:        rgba(212, 175, 55, 0.15);
  --text-primary:      #f5f0e8;
  --text-secondary:    rgba(245, 240, 232, 0.55);
  --text-muted:        rgba(245, 240, 232, 0.35);
  --border:            rgba(212, 175, 55, 0.15);
  --border-subtle:     rgba(245, 240, 232, 0.08);
}
```

---

## Tipografija

| Uloga | Font | Weight | Veličina |
|---|---|---|---|
| Naslovi (H1, H2) | Playfair Display | 400 | 48–64px |
| Podnaslovi (H3) | Playfair Display | 400 | 28–36px |
| Body tekst | Inter | 400 | 15–16px |
| Labels, uppercase | Inter | 500 | 11–13px |
| Gumbi | Inter | 500 | 13px |

### Google Fonts import (layout.tsx)
```tsx
import { Playfair_Display, Inter } from 'next/font/google'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})
```

---

## Spacing

- Max content width: `max-w-7xl mx-auto` (1280px)
- Section padding: `py-20 px-6 md:px-10`
- Component gap: `gap-6` ili `gap-8`
- Card padding: `p-6` ili `p-8`

---

## Border Radius

- Gumbi: `rounded-none` (kvadratni — oštar, premium feel)
- Kartice: `rounded-sm` (2px — jedva vidljivo)
- Input polja: `rounded-none`

---

## Komponente

### Button — Primary
```tsx
<button className="bg-gold text-background px-8 py-3.5 text-xs tracking-widest uppercase font-medium hover:bg-gold-hover transition-colors">
  Rezerviraj stol
</button>
```

### Button — Secondary
```tsx
<button className="border border-white/20 text-primary px-8 py-3.5 text-xs tracking-widest uppercase hover:border-gold hover:text-gold transition-colors">
  Pogledaj menu
</button>
```

### Section Heading
```tsx
<div className="text-center mb-16">
  <p className="text-gold text-xs tracking-widest uppercase mb-4">Eyebrow tekst</p>
  <div className="w-10 h-px bg-gold mx-auto mb-6" />
  <h2 className="font-playfair text-4xl md:text-5xl text-primary">Naslov sekcije</h2>
</div>
```

### Card
```tsx
<div className="bg-card border border-border p-6 hover:border-gold-muted transition-colors">
  {/* sadržaj */}
</div>
```

---

## Tailwind Config

```ts
// tailwind.config.ts
theme: {
  extend: {
    colors: {
      background: 'var(--background)',
      'background-secondary': 'var(--background-secondary)',
      card: 'var(--background-card)',
      gold: 'var(--gold)',
      'gold-hover': 'var(--gold-hover)',
      'gold-muted': 'var(--gold-muted)',
      primary: 'var(--text-primary)',
      secondary: 'var(--text-secondary)',
      muted: 'var(--text-muted)',
      border: 'var(--border)',
    },
    fontFamily: {
      playfair: ['var(--font-playfair)', 'serif'],
      inter: ['var(--font-inter)', 'sans-serif'],
    },
  },
}
```

---

## Micro-animacije

- Svi hover efekti: `transition-colors duration-200`
- Fade-in sekcije: Tailwind `animate-fadeIn` (dodati u config)
- Bez kompleksnih animacija — brzina učitavanja je prioritet

---

## Mobile First

| Breakpoint | Opis |
|---|---|
| Base (375px) | Jedan stupac, manji fontovi |
| md (768px) | Dva stupca gdje ima smisla |
| lg (1024px) | Puni layout |
| xl (1280px) | Max width, centered |

---

## Što NE koristiti

- Gradijenti (osim vrlo suptilnih na hover)
- Drop shadows (border je dovoljan)
- Više od 3 boje u jednoj sekciji
- Font weight 700+ (500 je max za Inter)
- Inline styles — uvijek Tailwind klase
