# SPECO Website — Complete Source Code

## What your developer needs to know

This is the **full editable source code** for the SPECO Building Technology website. It is a React 19 + Vite + TypeScript project. The previous handover only contained compiled/minified build output (bundled JS/CSS), which is impossible to edit.

This package contains all 83+ source files including React components, pages, hooks, styling configs, and every image/video asset.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 |
| Bundler | Vite 7 |
| Language | TypeScript 5.9 |
| Styling | Tailwind CSS 3.4 |
| UI Library | Radix UI (shadcn/ui components) |
| Routing | React Router v7 |
| Icons | Lucide React |
| Charts | Recharts |
| Carousel | Embla Carousel |

---

## Quick Start

```bash
# 1. Extract the zip
# 2. Navigate to the project folder
cd SPECO-Website-Complete-Source-Code

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev

# 5. Build for production
npm run build
```

The dev server runs on `http://localhost:5173` by default.

---

## Project Structure

```
SPECO-Website-Complete-Source-Code/
├── public/                 # Static assets served as-is
│   ├── assets/
│   │   ├── images/         # Product & project photos (webp)
│   │   ├── video/          # Hero videos (mp4) + posters (jpg)
│   │   └── logo/           # SPECO logo files
│   ├── fonts/              # Koho + Roboto webfonts
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/         # Reusable components
│   │   ├── ui/             # shadcn/ui base components (50+)
│   │   ├── Buttons.tsx
│   │   ├── HeroVideo.tsx
│   │   ├── Layout.tsx      # Main layout (nav + footer)
│   │   ├── Sections.tsx
│   │   ├── SocialIcons.tsx
│   │   ├── SpecTable.tsx
│   │   └── ResponsiveImage.tsx
│   ├── pages/              # Page-level route components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── EpsPanels.tsx
│   │   ├── PrefabPanels.tsx
│   │   ├── Services.tsx
│   │   ├── Gallery.tsx
│   │   ├── Contact.tsx
│   │   └── NotFound.tsx
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utilities & shared data
│   ├── sections/           # Page section components
│   ├── types/              # TypeScript type definitions
│   ├── App.tsx             # Root app component (routing + transitions)
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles + Tailwind directives
├── package.json            # Dependencies & scripts
├── vite.config.ts          # Vite configuration
├── tailwind.config.js      # Tailwind theme + custom colors
├── tsconfig.json           # TypeScript config
├── tsconfig.app.json
├── tsconfig.node.json
├── postcss.config.js       # PostCSS + autoprefixer
├── components.json         # shadcn/ui config
├── eslint.config.js        # ESLint rules
└── index.html              # HTML entry template
```

---

## Pages & Routes

| Route | Page |
|-------|------|
| `/` | Home |
| `/about` | About SPECO |
| `/products/eps-panels` | EPS Sandwich Panels |
| `/products/prefab-panels` | Prefab Building Systems |
| `/services` | Services & Labour Supply |
| `/gallery` | Project Gallery |
| `/contact` | Contact Us |

---

## Key Files for Common Edits

| What to edit | File(s) |
|-------------|---------|
| Page content / text | `src/pages/*.tsx` |
| Navigation / Footer | `src/components/Layout.tsx` |
| Shared text content | `src/lib/content.ts` |
| Brand colors / fonts | `tailwind.config.js`, `src/index.css` |
| Page transitions | `src/App.tsx` |
| Hero video component | `src/components/HeroVideo.tsx` |
| Add a new page | `src/pages/`, update `src/App.tsx` |

---

## Assets

All images and videos are in `public/assets/`. When adding new assets, place them here and reference them with absolute paths from the site root (e.g., `/assets/images/...`).

Images are provided in dual resolution:
- `-desktop.webp` for desktop
- `-mobile.webp` for mobile

Videos are provided in dual resolution:
- `-desktop.mp4` for desktop
- `-mobile.mp4` for mobile
- `-poster.jpg` as static fallback

---

## Deployment

Pre-configured for Vercel. Run `npm run build` to generate a production `dist/` folder.
