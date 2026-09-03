# SPECO Building Technology — Website (Next.js)

Production marketing website for SPECO Building Technology, Juba, South Sudan.
This is the Next.js port of the React + Vite build. All design, copy, assets and
behaviour carry over 1:1, rebuilt on the Next.js App Router.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 3.4 |
| Icons | Lucide React |
| Routing | Next.js App Router |

## Quick Start

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # static export → out/
npm start         # serve the production build
```

Deploy: the project is pre-configured for static export (`output: "export"` in
`next.config.ts`). Push to Vercel or any static host. Previews were deployed
through Vercel.

## Pages & Routes

| Route | Page |
|---|---|
| `/` | Home |
| `/about` | About |
| `/products/eps-panels` | EPS 3D Wall Panels |
| `/products/prefab-panels` | Prefabricated Sandwich Panels & Roofing |
| `/services` | Services |
| `/gallery` | Project Gallery (filterable, lightbox) |
| `/contact` | Contact + quote form |
| `*` | 404 |

## Project Structure

```
app/                    # Next.js routes (metadata + page mounts)
  layout.tsx            # Root layout, SEO defaults, JSON-LD, fonts
  page.tsx              # Home
  about/  services/  gallery/  contact/
  products/eps-panels/  products/prefab-panels/
src/
  components/           # Layout (nav+footer), HeroVideo, Buttons, Sections,
                        # SpecTable, ResponsiveImage, SocialIcons, RootLayout
  hooks/                # useIsMobile, usePageMeta
  lib/                  # content.ts (all site copy + assets), hero-context
  views/                # Page components: Home, About, EpsPanels, PrefabPanels,
                        # Services, Gallery, Contact, NotFound
public/
  assets/               # video, images, logo (desktop + mobile variants)
  fonts/                # self-hosted KoHo + Roboto
  robots.txt  sitemap.xml
```

## Key Files for Common Edits

| What to edit | File(s) |
|---|---|
| Page content / text | `src/views/*.tsx` |
| Navigation / Footer | `src/components/Layout.tsx` |
| Shared text content | `src/lib/content.ts` |
| Brand colors / fonts | `tailwind.config.js`, `app/globals.css`, `public/fonts/` |
| Hero video component | `src/components/HeroVideo.tsx` |
| SEO per page | metadata export at top of each `app/**/page.tsx` |

## Behaviour Notes

- Hero videos autoplay muted, play once and hold final frame (looping heroes on
  EPS, Prefab, About per client decision). Header logo hidden during playback,
  fades in when video ends.
- No scroll-triggered animation anywhere, by client requirement. Motion comes
  from hero video, hover states and the gallery lightbox. Native scroll only.
- Sections alternate dark/light; header detects the section beneath it and
  swaps background + logo colour to match.
- Images served with desktop/mobile WebP variants via `<picture>`.

## Contact Form Endpoint — TODO

`src/views/Contact.tsx` contains a placeholder submit handler marked
`TODO(client)`. It currently simulates a successful submission. Replace it with
the client's form endpoint (POST the form state as JSON) when available.

## Assets

All media lives in `public/assets/` and is referenced as `/assets/...`:
- `assets/video/` — hero/feature videos (desktop + mobile + posters)
- `assets/images/` — product, project, team photography (desktop + mobile WebP)
- `assets/logo/` — SPECO wordmark in white and orange (PNG + WebP)

To replace an asset, overwrite the file with the exact same name and keep the
desktop/mobile variant pairs intact. Do not rename files — paths are referenced
throughout `src/lib/content.ts`.