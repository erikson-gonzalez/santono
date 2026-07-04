# Abasi Solo Contest — Santono Music

Landing page for the **Abasi Solo Contest**, organized by Santono Music, official distributor of Abasi Concepts in Costa Rica.

## Stack

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **shadcn/ui** component library
- **pnpm**
- Deployed on **Vercel**

## Route

```
yourdomain.com/abasisolocontest
```

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000/abasisolocontest](http://localhost:3000/abasisolocontest) in your browser.

## Build

```bash
pnpm build
pnpm start
```

## Environment

Copy `.env.example` to `.env.local` and fill in any required values.

```bash
cp .env.example .env.local
```

## Project Structure

```
app/
  layout.tsx              # Root layout with next/font and global metadata
  globals.css             # Tailwind v4 + design tokens
  abasisolocontest/
    page.tsx              # Contest landing page
  not-found.tsx

components/
  nav-bar.tsx
  sections/
    hero-section.tsx
    how-to-section.tsx
    steps-section.tsx
    demo-section.tsx
    prize-section.tsx
    reglamento-section.tsx
    footer-section.tsx
  ui/                     # shadcn/ui + custom components

hooks/
lib/
types/
public/
```
