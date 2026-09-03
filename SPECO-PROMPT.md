# SPECO BUILDING TECHNOLOGY — PRODUCTION WEBSITE BUILD
## Execution target: Kimi K3

---

## EXECUTION DIRECTIVES (read first)

Build the complete website specified below. All seven pages, fully implemented, no stubs and no deferred pages.

This prompt is fully self-contained. Every design decision you need is specified here — colours, typography, spacing, motion rules, layout patterns, and component behaviour. Do not substitute a design system of your own and do not reach for an external component library or connector. Implement directly from this specification.

**Where this prompt is explicit, follow it exactly.** Sections 6 (motion), 7 (hero video), 8 (header), and 9 (image layout) are hard constraints — they encode direct client decisions and cannot be reinterpreted.

**Where this prompt is silent** — micro-interaction easing curves, exact shadow values, icon selection, precise grid gutters — use your own judgement and aim for a considered, premium, industrial editorial feel. Reference points for the intended quality bar: modern industrial manufacturer sites with strong typographic hierarchy, generous whitespace, and restrained use of a single accent colour.

When finished, output the complete file tree and every file in full.

---

## 1. PROJECT

Build a 7-page marketing website for **SPECO Building Technology**, Juba, South Sudan.

SPECO is the first local manufacturer of EPS 3D wall panels and prefabricated sandwich panels in South Sudan. Founded 2023. Managing Director: Eng. Hanibal Yohannes.

This is a production website for a real client. It must be original, not templated.

---

## 2. POSITIONING (drives all copy and hierarchy)

**One-line value proposition:**
South Sudan's first local manufacturer of EPS and prefabricated building panels. Engineered here. Built faster.

**Two distinct product narratives — do not blend them:**

- **EPS panels — category creation.** This material has never been used in South Sudan before. The audience does not know what it is. The EPS page must teach before it sells. Education comes before specifications.
- **Prefab panels — local manufacturing.** Sandwich panels are already well known and widely used by contractors and NGOs here, but every competitor imports them. SPECO manufactures locally. The prefab page does not explain what a sandwich panel is. It argues why local beats imported.

**Messaging pillars:** local manufacturing and speed · engineering credibility · category pioneer · nation building.

**Brand tone:** industrial, precise, grounded. Confident without hype. No exclamation marks, no marketing superlatives, no "revolutionary" or "cutting-edge" beyond what is already in the supplied copy. Short declarative sentences.

---

## 3. AUDIENCE (three tiers, one journey)

| Tier | Who | What they need |
|---|---|---|
| Primary | Contractors, developers, construction companies | Specifications, thickness options, applications, supply model clarity |
| Secondary | NGOs and humanitarian organisations | Credibility, named clients, local manufacturing, procurement-ready contact |
| Tertiary | Homeowners and small builders | Plain language, visual proof, simple route to a quote |

Do not build three separate paths. Page depth handles segmentation: product pages carry the technical detail, Home and About carry the credibility story, everyone converges on the same quote CTA.

**Primary conversion:** quote request via the contact form.
**Secondary conversion:** direct phone and WhatsApp.
A quote CTA must be reachable from every page, not only at the end of the funnel.

---

## 4. TECH STACK

- Next.js (App Router) + TypeScript, or clean HTML/CSS/JS if the framework is not available. Framework choice is secondary to output quality.
- Tailwind CSS.
- No CMS, no backend, no database. Contact form posts to a placeholder handler with clearly marked TODO for the client's endpoint.
- Fully static, deployable to any static host.
- No jQuery, no Bootstrap, no page builders.

---

## 5. DESIGN SYSTEM

**Colours**
```
--speco-orange:      #F15E22   /* brand, single accent — use with restraint */
--speco-orange-dark: #C2431A   /* hover states only */
--black:             #0A0A0A   /* dark section background */
--surface-dark:      #141414   /* dark section cards and panels */
--white:             #FFFFFF   /* light section background */
--surface-light:     #F6F5F3   /* light section cards and panels */
--text-dark:         #1A1A1A   /* body text on light */
--text-muted:        #6B6B6B   /* secondary text on light */
--text-on-dark:      #E8E8E8   /* body text on dark */
--border-subtle:     rgba(255,255,255,0.08)
```

Orange is an accent, never a background wash. Use it for: primary buttons, active states, key numerals in the stats bar, section eyebrow labels, and thin rules. Never orange headline blocks, never orange body text.

**Typography**
- Headings: **KoHo** (Google Fonts). Weights 500, 600, 700. Uppercase for H1 and section eyebrows. Tight letter spacing on large sizes (-0.02em).
- Body: **Roboto** (Google Fonts). Weights 300, 400, 500. Line height 1.65 for paragraphs.
- Fluid type scale using `clamp()`. H1 should be genuinely large on desktop (clamp minimum 2.5rem, maximum 6rem).

**Dark and light hybrid — the core structural rule**
Sections alternate between dark (#0A0A0A) and light (#FFFFFF) full-bleed bands. Never more than two consecutive sections of the same tone. Each page should read as a rhythm, not a single-tone scroll.

Logo colour follows the surface beneath it: white logo on dark, orange logo on light. Swap programmatically, do not hardcode one.

**Spacing**
8px base unit. Section vertical padding: clamp(5rem, 10vw, 9rem). Generous whitespace. Content max width 1280px, with full-bleed exceptions for hero video, image bands, and the stats bar.

---

## 6. MOTION — READ THIS CAREFULLY

**This is NOT a scroll-animated website.** The client has explicitly ruled that out.

**Forbidden:**
- No Lenis or any smooth-scroll library
- No GSAP ScrollTrigger
- No scroll-linked parallax
- No scroll-triggered reveals, fade-ups, or staggered entrances
- No pinned sections, no scroll-jacking
- Native browser scroll must remain completely untouched

**Where the motion comes from instead:**
1. **Hero video.** Each page opens with a full-bleed video. This carries the entire sense of movement.
2. **Hover and interaction states.** Magnetic buttons (subtle cursor-follow translate, max 6px), card lift on hover (translateY -4px with shadow), image scale within a fixed overflow-hidden frame (scale 1.04, 600ms ease), animated underlines on links, orange fill sweep on secondary buttons.
3. **Page transitions.** Brief fade or wipe between routes, 300–400ms.
4. **Lightbox transitions** in the gallery.

All transitions 200–600ms, ease-out. Respect `prefers-reduced-motion` and disable non-essential motion when set.

---

## 7. HERO VIDEO BEHAVIOUR — EXACT SPEC

Every page has a full-bleed hero video. Behaviour is identical on all of them.

```
autoplay · muted · playsinline · NO loop
```

- The video **plays once and holds its final frame permanently.** Do not loop. Do not replay. Do not restart on re-entry.
- `poster` is set to the supplied poster image (this is the video's first frame, so playback starts seamlessly from it).
- Several videos open on a near-black frame and fade in. This is intentional and cinematic. **The headline text must be rendered and visible immediately on page load, on top of the poster, before the video has played.** The hero must never appear empty.
- Serve desktop and mobile files by breakpoint. Do not crop one master to serve both — the two files are separately framed.
  - Desktop file: 1920×1080, served at ≥768px viewport width
  - Mobile file: 1080×1920, served below 768px
  - Implement with `<source media="...">` inside the `<video>` element, or a JS breakpoint swap. Never load both.
- `object-fit: cover` with **`object-position: center top`**. Where any crop is unavoidable, it must be taken from the bottom. The top of the frame is protected. This is a hard client requirement.
- Hero height: `100svh` on mobile, `min(100vh, 900px)` on desktop.
- **Overlay:** every hero needs a dark gradient overlay for text legibility — roughly `linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 45%, rgba(0,0,0,0.7) 100%)`. Tune per page but never remove it.
- Videos are silent (audio stripped). Do not add audio controls.

---

## 8. HEADER BEHAVIOUR — EXACT SPEC

Several hero videos have the SPECO wordmark burned into the footage. The header must not duplicate it.

1. On page load, the header is **transparent** and the **logo is hidden**.
2. When the hero video reaches its end (`onended`), the logo **fades in** over ~400ms.
3. Once the user scrolls past the hero, the header gains a solid background (dark or light matching the section below) and the logo colour swaps accordingly.
4. Navigation links remain visible and legible throughout — only the logo is hidden during video playback.
5. If the video fails to load or `prefers-reduced-motion` is set, show the logo immediately.

Mobile: full-screen overlay menu, orange accent on the active item.

---

## 9. IMAGE LAYOUT — HARD CONSTRAINT

**Both product pages must NOT dump images into a generic grid.**

Required treatment on the EPS page and the Prefab page:

- Images are **integrated into alternating content sections**, each one paired with the copy it supports. Panel anatomy sits beside the specification table. Worker and site images sit beside the speed and lightweight claims. Warehouse images sit beside the local manufacturing story. **No image appears without relevant copy adjacent to it.**
- Use split layouts (image one side, text the other, alternating direction), full-bleed image bands with overlaid or adjacent text, and offset/overlapping compositions. Vary the treatment down the page.
- **One grid only, placed at the very end of the page, immediately before the footer**, holding the remaining images. That is the single permitted grid on a product page.

**Aspect ratios are a layout instruction, not a problem to crop away. Never crop to force uniformity.**

| Source ratio | Layout role |
|---|---|
| 16:9 (2400×1350) | Full-width bands, wide section breaks |
| 3:2 landscape (2048×1365) | Standard content-paired blocks, end grid |
| 2:3 portrait (1365×2048) | Tall split sections — image one side, copy the other |
| 4:3 / 3:4 (MSF set) | Case-study blocks and gallery |

**Colour grading is also a layout instruction.** The image set has three treatments. Map them to the section tone:
- Neutral daylight (all `DSC*` sourced product images) → light/white sections
- Warm graded (`prefab-warehouse-aisle`, `prefab-warehouse-stacks`, `prefab-roof-*`) → mid-tone and dark sections
- Cool graded (`prefab-warehouse-wide`) → dark sections

**Product photos are capped at 2048px.** Do not use any image from `eps-products/` or `prefab-products/` as a full-bleed desktop background. Full-bleed treatment is reserved for hero videos and the `projects/` images, which are higher resolution.

Every image needs descriptive, SEO-useful alt text. Never "image" or "photo".

---

## 10. ASSET INVENTORY

All assets are supplied, optimised, and correctly named. Use these exact paths. **Do not source stock imagery. Do not generate placeholder images.**

### Video — `/assets/video/`
Each page has three files: desktop, mobile, poster.

| Page | Desktop | Mobile | Poster |
|---|---|---|---|
| Home | `home-hero-desktop.mp4` | `home-hero-mobile.mp4` | `home-hero-poster.jpg` |
| About | `about-hero-desktop.mp4` | `about-hero-mobile.mp4` | `about-hero-poster.jpg` |
| EPS Panels | `eps-hero-desktop.mp4` | `eps-hero-mobile.mp4` | `eps-hero-poster.jpg` |
| Prefab Panels | `prefab-hero-desktop.mp4` | `prefab-hero-mobile.mp4` | `prefab-hero-poster.jpg` |
| Services | `services-hero-desktop.mp4` | `services-hero-mobile.mp4` | `services-hero-poster.jpg` |
| Gallery | `gallery-hero-desktop.mp4` | `gallery-hero-mobile.mp4` | `gallery-hero-poster.jpg` |
| Contact | `contact-hero-desktop.mp4` | `contact-hero-mobile.mp4` | `contact-hero-poster.jpg` |
| Local labour feature (Home) | `labour-feature-desktop.mp4` | `labour-feature-mobile.mp4` | `labour-feature-poster.jpg` |

Mobile posters also exist as `*-poster-mobile.jpg`.

All are 1920×1080 (desktop) / 1080×1920 (mobile), H.264, silent, faststart enabled, 5–6 seconds.

### Logo — `/assets/logo/`
`speco-logo-white.png` · `speco-logo-white.webp` · `speco-logo-orange.png` · `speco-logo-orange.webp`
(832×194, transparent. White for dark surfaces, orange for light surfaces.)

### Images — `/assets/images/`
Every image has a `-desktop.webp` and a `-mobile.webp` variant. Use `srcset`/`sizes` or `<picture>` to serve the right one.

**`eps-products/`** (8) — max 2048px, not for full-bleed
`eps-panels-stacked` (portrait) · `eps-panel-edge-profile` (portrait, best technical shot) · `eps-warehouse-inventory` (landscape) · `eps-panel-mesh-face` (portrait) · `eps-staircase-handling` (landscape) · `eps-staircase-detail` (landscape) · `eps-install-site-wide` (landscape) · `eps-install-site-lift` (portrait)

**`prefab-products/`** (8) — max 2400px, not for full-bleed
`prefab-panel-corner` (portrait) · `prefab-panel-corner-wide` (landscape) · `prefab-panel-carry` (portrait) · `prefab-roof-panels-insulated` (16:9) · `prefab-roof-panel-profile` (16:9) · `prefab-warehouse-wide` (16:9) · `prefab-warehouse-aisle` (16:9) · `prefab-warehouse-stacks` (16:9)

**`projects/h-brothers/`** (11) — H Brothers G+6 tower, Katoor, Juba. **Numbered by build stage. Preserve this order.**
`01-panels-installed` · `02-rooftop-wall-plaster` · `03-services-in-wall` (portrait) · `04-interior-structure` · `05-interior-finished` · `06-ceiling-grid` · `07-facade-panels` · `08-tower-golden-hour` · `09-tower-exterior-a` (portrait) · `10-tower-exterior-b` (portrait) · **`11-completed` (portrait — the finished building. This is the single most important image on the site.)**

**`projects/msf-tujur/`** (6) — MSF South Sudan warehouse, Tujur, Nuba Mountains
`01-slab-reinforcement` (portrait) · `02-panels-offloaded` · `03-roof-panel-lift` · `04-panels-staged` · `05-panel-carry` · `06-container-unload` (portrait)

**`projects/prefab-projects/`** (4)
`prefab-units-juba` · `prefab-office-gutters` (gutters and downpipes visible) · `prefab-two-storey-stairs` · `prefab-two-storey-spiral` (portrait)

**`projects/septic-tank/`** (2) — EPS panels as permanent formwork for a below-grade septic tank
`eps-septic-tank-formwork-a` · `eps-septic-tank-formwork-b`

**`team/`** (1)
`speco-team` — full SPECO team at a company event. Use on the About page.

---

## 11. SITE MAP

```
/                          Home
/about                     About Us
/products/eps-panels       EPS 3D Wall Panels
/products/prefab-panels    Prefabricated Sandwich Panels & Roofing
/services                  Services
/gallery                   Project Gallery
/contact                   Contact
```

---

## 12. PAGE SPECIFICATIONS

### 12.1 HOME — `/`

**SEO**
- Title: `SPECO Building Technology | South Sudan's First Building Materials Factory`
- Description: `SPECO Building Technology is South Sudan's first building materials factory. EPS panels, sandwich panels, and roofing solutions engineered for speed, built for durability.`
- Keywords: construction materials South Sudan, EPS panels Juba, sandwich panels, prefab building, roofing sheets South Sudan, building materials factory, SPECO

**Sections in order:**

1. **Hero** — `home-hero`. Dark.
   - H1 line 1: `SOUTH SUDAN'S`
   - H1 line 2: `FIRST BUILDING MATERIALS FACTORY`
   - Tagline: `Shaping The Future Of Building In South Sudan`
   - Primary CTA: `Explore Our Products` → `/products/eps-panels`
   - Secondary CTA: `Get a Quote` → `/contact`

2. **Stats bar** — full-bleed orange or dark band. Four items, large numerals in KoHo.
   `Founded 2023` · `Juba, South Sudan` · `3 Product Categories` · `Projects Delivered Across Juba & The Region`

3. **Why Choose SPECO** — light section. Four pillars, not a plain card grid — give them an editorial treatment with generous spacing and thin orange rules.
   - **Speed & Efficiency** — Advanced building technologies including EPS 3D Wall Panels and Sandwich Panels significantly reduce construction timelines, enabling faster project completion without compromising quality.
   - **Cost Effectiveness** — Modern materials and streamlined processes optimize resource utilization and minimize waste, leading to substantial cost savings across every project.
   - **Uncompromising Quality** — International standards in production and execution ensure durability, structural integrity, and long-term performance on every build.
   - **Sustainable Solutions** — Energy-efficient and environmentally friendly building technologies promote sustainable development while reducing environmental impact.

4. **Featured products** — dark section. Three cards with hover lift and image scale.
   - `EPS 3D Wall Panels` → `/products/eps-panels` — image: `eps-products/eps-panel-edge-profile`
   - `Sandwich Wall & Roof Panels` → `/products/prefab-panels` — image: `prefab-products/prefab-panel-corner`
   - `Roofing Iron Sheets & Accessories` → `/products/prefab-panels#roofing` — image: `prefab-products/prefab-roof-panels-insulated`

5. **Local labour feature** — full-bleed video band using `labour-feature`. Same play-once-hold-final-frame behaviour as the heroes. Dark.
   - **Caption positioned in the TOP LEFT of the frame** (the footage is composed with this area deliberately clear):
     - Eyebrow: `BUILT LOCALLY`
     - Headline: `Built by local hands`
     - Body: `Every SPECO project trains and employs South Sudanese teams. Skills transfer is part of what we deliver.`

6. **Proof strip** — light section. Two case-study teasers side by side, linking to `/gallery`.
   - `H Brothers G+6 Tower — Katoor, Juba` using `projects/h-brothers/11-completed`
   - `MSF South Sudan Warehouse — Tujur, Southern Kordofan` using `projects/msf-tujur/03-roof-panel-lift`

7. **Closing CTA** — dark section.
   - Headline: `Ready to Build Smarter?`
   - Body: `Whether you need material supply or a complete turnkey solution, SPECO has you covered. Let's discuss your project.`
   - CTA: `Contact Us Today` → `/contact`

---

### 12.2 ABOUT — `/about`

**SEO**
- Title: `About SPECO Building Technology | Pioneering Construction in South Sudan`
- Description: `Learn about SPECO Building Technology, founded in 2023 in Juba, South Sudan. Our mission is to revolutionize construction through innovative and sustainable building solutions.`

**Sections:**

1. **Hero** — `about-hero`. 
   - H1: `Pioneering Modern Construction in South Sudan`
   - Sub: `Founded in 2023, SPECO Building Technology is at the forefront of the construction revolution in East Africa.`

2. **Our Story** — light. Two paragraphs, editorial layout, paired with `prefab-products/prefab-warehouse-wide`.
   > SPECO Building Technology was founded in 2023 in Juba, South Sudan, with a clear vision: to revolutionize the construction industry in the region. Recognizing the immense potential for growth and the critical need for modern, efficient, and sustainable building practices, we set out to introduce advanced construction materials and services that would elevate the standards of infrastructure development across the nation.
   >
   > The construction industry in South Sudan is experiencing a transformative phase. As the nation rebuilds and modernizes, there is a growing demand for innovative building materials that offer durability, efficiency, and cost-effectiveness. The introduction of advanced construction technologies is crucial in addressing the housing deficit, enhancing infrastructure, and supporting economic growth.

3. **Mission & Vision** — dark, two-column.
   - **Mission:** To provide superior building solutions that meet the evolving needs of the construction industry in South Sudan, offering innovative products and services that ensure sustainability, efficiency, and affordability.
   - **Vision:** To lead the transformation of South Sudan's construction landscape through innovative and sustainable building solutions, contributing to the country's infrastructural development and economic growth.

4. **Core Values** — light. Four values with numerals or thin orange rules.
   - **Quality** — Unwavering commitment to delivering products and services that meet and exceed international standards, ensuring durability, safety, and long-term performance.
   - **Innovation** — Continuous exploration and adoption of the latest advancements in building technology to provide the most efficient, sustainable, and cost-effective solutions.
   - **Sustainability** — Dedicated to promoting environmentally responsible construction practices, utilizing materials and methods that reduce ecological impact.
   - **Community** — Deeply committed to contributing to the social and economic development of South Sudan through job creation, skill transfer, and supporting local initiatives.

5. **How We Work** — dark. Two business models, side by side.
   - **Supply-Only** — Direct provision of cutting-edge building materials to contractors, developers, and construction companies. Ideal for clients with their own construction teams who require high-quality materials delivered efficiently.
   - **Supply-and-Build** — Comprehensive solutions where we supply materials and undertake the building process. Project scope and pricing are always project-specific and quoted separately, ensuring transparency and tailored solutions.

6. **Our Team** — light. Full-bleed or large contained treatment of `team/speco-team`.
   - Headline: `The People Behind SPECO`
   - Body: one or two lines on the team and skills transfer commitment, consistent with the Community value.
   - Leadership credit: `Eng. Hanibal Yohannes — Managing Director`

7. **CTA** — `Let's Build Together` → `/contact`

---

### 12.3 EPS PANELS — `/products/eps-panels`

**This page carries an education burden. The material is new to the South Sudan market. Teach first, specify second.**

**SEO**
- Title: `EPS 3D Wall Panels | Expanded Polystyrene Panels | SPECO Building Technology`
- Description: `SPECO EPS 3D Wall Panels are lightweight, high-strength construction panels with thermal insulation, soundproofing, and fire resistance. Ideal for residential, commercial, and industrial buildings in South Sudan.`
- Keywords: EPS panels, expanded polystyrene panels, 3D wall panels, insulated panels, thermal insulation panels, lightweight construction panels

**Sections in order:**

1. **Hero** — `eps-hero`.
   - H1: `CHANGING THE CONSTRUCTION CULTURE OF SOUTH SUDAN`
   - Sub: `EPS 3D Wall Panels — Revolutionary lightweight construction panels that form monolithic, load-bearing structures with exceptional insulation.`

2. **What is EPS?** — light. Education block, sits BEFORE any specification. Pair with `eps-products/eps-panel-edge-profile` (portrait, tall split layout).
   - Eyebrow: `NEW TO SOUTH SUDAN`
   - Headline: `What is EPS?`
   - Body: `EPS stands for Expanded Polystyrene, a high-quality, lightweight foam material used in modern construction worldwide. It is recognised for its strength, versatility, and outstanding insulation properties. SPECO is the first company to manufacture and apply it in South Sudan.`

3. **How It's Made** — dark. Four numbered steps, horizontal or stepped layout. Pair with `eps-products/eps-panel-mesh-face`.
   1. `Made from high-quality polystyrene`
   2. `Expanded, moulded, and cut into custom panels`
   3. `Reinforced with galvanised wire mesh for strength`
   4. `Finished ready for versatile construction use`

4. **Quality & Consistency** — light, compact band.
   - `Every panel is manufactured under strict quality control for durability and compliance with international standards.`

5. **Product description** — light. Paired with `eps-products/eps-panels-stacked` (portrait split).
   > Our Expanded Polystyrene (EPS) 3D Wall Panels represent a revolutionary approach to modern construction. These lightweight yet incredibly strong panels are composed of a core of high-density EPS foam, reinforced with a steel mesh on both sides. Once installed and plastered with concrete, they form a monolithic, load-bearing structure that offers exceptional thermal insulation, soundproofing, and fire resistance.
   >
   > They are ideal for rapid construction of residential, commercial, and industrial buildings, significantly reducing construction time and labour costs.

6. **Specifications** — dark. Table beside `eps-products/eps-panel-mesh-face` or `eps-panel-edge-profile`. Style the table properly — thin orange rules, KoHo labels, generous row height. Do not use a default HTML table.

   | Specification | Details |
   |---|---|
   | Thickness | 60mm, 80mm, 100mm (single wall); 60mm (double wall) |
   | Standard Dimensions | 1200mm width × 3000mm length |
   | Density Options | Density 15, Density 25 |
   | Applications | External walls, internal walls, floor slabs, partitions |

7. **Key Benefits** — light. Six items.
   - **Thermal Insulation** — High-density EPS core provides excellent thermal performance, reducing energy costs for heating and cooling.
   - **Soundproofing** — Dense construction naturally dampens sound transmission between spaces.
   - **Fire Resistance** — Concrete plaster coating provides significant fire resistance ratings.
   - **Speed of Installation** — Large panel sizes mean faster coverage and reduced labour time.
   - **Structural Integrity** — Steel mesh reinforcement creates a monolithic structure when plastered.
   - **Cost Effective** — Reduced construction time and labour costs compared to traditional methods.

8. **Environmental Benefits** — dark. Four items. Pair with `eps-products/eps-warehouse-inventory`.
   - **Energy Efficient** — Improves building performance, making structures cooler in hot climates and warmer in cold weather.
   - **Sustainable** — Lower embodied energy than traditional blocks; reduces site waste and carbon footprint.
   - **Locally Produced** — Cuts down on transport emissions and supports the local economy.
   - **Versatile** — Suitable for homes, schools, offices, and more.

9. **Applications** — light. **Critical section: place `eps-products/eps-staircase-handling` and `eps-staircase-detail` directly against this list.** Contractors will not believe EPS works for stairs and slabs until they see it. Also include the two `projects/septic-tank/` images here as proof of the septic tank claim.
   - Wall panels (external and internal)
   - Roofing
   - Floor slabs
   - Staircases
   - Septic tanks
   - Partitions
   - Suitable for residential homes, apartments, commercial offices, industrial facilities, schools, and healthcare facilities.

10. **Case Study — H Brothers G+6 Tower** — dark. **This is the structural credibility proof. A six-storey building with EPS slabs, walls, and stairs answers the load-bearing question better than any specification.**
    - Client: `H Brothers General Trading & Investments`
    - Location: `Katoor, Juba, South Sudan`
    - Scope: `G+6 residential and commercial tower. Concrete foundation with EPS slabs, walls, and staircases throughout.`
    - Present the images **in their numbered build-stage order** as a sequence, not a grid: `01-panels-installed` → `02-rooftop-wall-plaster` → `03-services-in-wall` → `04-interior-structure` → `05-interior-finished` → `06-ceiling-grid` → `07-facade-panels` → `08-tower-golden-hour`, closing on **`11-completed`** as the payoff.
    - Link to `/gallery`.

11. **Installation proof band** — full-bleed or large split using `eps-products/eps-install-site-lift` and `eps-install-site-wide`. Short copy on installation speed and crew size.

12. **End grid** — the single permitted grid. Remaining EPS images. Immediately before the footer.

13. **CTA** — `Build Smarter with EPS Panels` / `Request a Quote` → `/contact`

---

### 12.4 PREFAB PANELS — `/products/prefab-panels`

**Do NOT explain what a sandwich panel is. The audience already knows. The argument is local manufacturing versus import dependency.**

**SEO**
- Title: `Prefabricated Sandwich Panels & Roofing | SPECO Building Technology`
- Description: `SPECO prefabricated sandwich panels and roofing iron sheets for walls, roofs, and industrial applications. Superior thermal performance, structural rigidity, and quick assembly.`
- Keywords: sandwich panels, prefab panels, roofing iron sheets, insulated roof panels, wall panels South Sudan, industrial building panels

**Sections in order:**

1. **Hero** — `prefab-hero`.
   - H1: `CHANGING THE CONSTRUCTION CULTURE OF SOUTH SUDAN`
   - Sub: `Prefabricated Sandwich Panels & Roofing — Engineered composite panels and roofing solutions for industrial, commercial, and residential construction.`

2. **Manufactured Here, Not Imported** — dark. **This is the page's core argument and must sit immediately after the hero.** Pair with `prefab-products/prefab-warehouse-wide` (cool graded, full-bleed band suits the dark tone).
   - Eyebrow: `LOCAL MANUFACTURING`
   - Headline: `Manufactured here. Not imported.`
   - Body: `Nearly every sandwich panel used in South Sudan arrives by truck across a border. Ours does not. SPECO manufactures panels in Juba, which changes what a project timeline can look like: no customs clearance, no import duty stacked onto material cost, and no waiting weeks for a replacement panel or an additional order. Specify it, collect it, build.`
   - Three supporting points: `Shorter lead times` · `No import cost stacking` · `Local supply for repairs and expansion`

3. **Sandwich Wall & Roof Panels** — light. Description paired with `prefab-products/prefab-panel-corner` (portrait split).
   > SPECO Sandwich Panels are engineered composite panels consisting of an insulating core bonded between two structural facings of pre-painted galvanized iron sheets. Renowned for superior thermal performance, structural rigidity, and aesthetic appeal, they are an excellent choice for industrial facilities, cold storage units, commercial buildings, and residential structures where energy efficiency and quick assembly are paramount.

4. **Specifications** — dark. Styled table beside `prefab-products/prefab-panel-corner-wide`.

   | Specification | Details |
   |---|---|
   | Core Thickness | 50mm, 75mm, 100mm, 150mm |
   | Wall Panel Width | 950mm |
   | Roof Panel Width | 1050mm |
   | Core Materials | EPS, Rock Wool, Polyurethane |
   | Facings | Pre-painted galvanized iron sheets |

5. **Key Benefits** — light. Six items.
   - **Thermal Performance** — Multiple core material options for optimal insulation
   - **Structural Rigidity** — Dual metal facings provide excellent strength
   - **Weather Protection** — Fully sealed panels resist rain, wind, and UV
   - **Fire Resistance** — Rock wool core options for enhanced fire ratings
   - **Quick Assembly** — Interlocking panels reduce installation time dramatically
   - **Aesthetic Appeal** — Clean, modern finish available in multiple colours

6. **Roofing** — `id="roofing"` anchor. Dark. Two parts.
   - **Insulated roof panels** — paired with `prefab-products/prefab-roof-panels-insulated` and `prefab-roof-panel-profile`.
   - **Roofing iron sheets & accessories:**
     > High-quality roofing iron sheets designed to provide robust and long-lasting protection against the elements. Manufactured to withstand harsh weather conditions prevalent in South Sudan, these sheets are lightweight, easy to install, and available in various profiles and colours to complement any architectural design.
     - Accessories: Ridge caps · Gutters and downpipes · Fasteners and screws · Flashing and trim · Complete roofing system components
     - Benefits: **Durability** (built to withstand South Sudan's harsh weather) · **Lightweight** (easy to handle and install, reducing structural load) · **Variety** (multiple profiles and colours) · **Complete System** (full range of accessories for a secure, watertight installation)
   - **NOTE:** there is no dedicated product photography of loose iron sheets or accessories. Do not fake it and do not use stock. Treat this sub-section as specification and benefit led, using icons or typographic treatment. `projects/prefab-projects/prefab-office-gutters` shows gutters and downpipes installed in the field and may be used here as installed-system proof.

7. **Production capacity band** — full-bleed using `prefab-products/prefab-warehouse-aisle` or `prefab-warehouse-stacks` (both warm graded — suits a mid-tone or dark band). Short copy on in-country stock and manufacturing capacity.

8. **Case Study — MSF South Sudan** — dark. **This is the NGO credibility unlock. A named international humanitarian client, a remote site, and a climate-controlled build — exactly the profile NGO procurement teams screen for.**
   - Client: `MSF South Sudan (Médecins Sans Frontières)`
   - Location: `Tujur, Nuba Mountains, Southern Kordofan`
   - Scope: `Remote-site temperature-controlled warehouse with air conditioning.`
   - Frame this as **regional delivery capability**, not as a South Sudan project. Tujur is in Sudan. Accurate framing: SPECO delivers beyond Juba and across the region. Do not write "projects across South Sudan" over this one.
   - Sequence the six `projects/msf-tujur/` images: slab → offload → staging → carry → lift → unload. Show the logistics story, since remote-site delivery is the actual differentiator.

9. **Delivered projects** — light. `projects/prefab-projects/` (4 images) with short captions covering offices, accommodation units, and two-storey builds.

10. **End grid** — single permitted grid, before the footer.

11. **CTA** — `Engineered for Performance` / `Get a Quote` → `/contact`

---

### 12.5 SERVICES — `/services`

**SEO**
- Title: `Construction Services | Supply, Installation, Design & Build | SPECO Building Technology`
- Description: `Beyond materials, SPECO offers installation, design and build, project management, consulting, and training services for construction projects across South Sudan.`

1. **Hero** — `services-hero`. **This footage has a large deliberately clear area on the left of the frame — place the headline there, not centred.**
   - H1: `End-to-End Construction Services`
   - Sub: `From material supply to complete project delivery. Professional services to support your project from conception to completion.`

2. **Services** — five services, alternating dark and light sections or a strong editorial list. Number them 01–05.
   1. **Material Supply** — Direct provision of high-quality building materials including EPS 3D Wall Panels, Sandwich Panels, and Roofing Iron Sheets to contractors, developers, and construction companies. Efficient delivery across South Sudan.
   2. **Professional Installation** — Expert installation of EPS 3D Wall Panels and Sandwich Panels by trained and experienced teams, ensuring optimal performance and adherence to specifications.
   3. **Design & Build / Turnkey Solutions** — Comprehensive project execution from initial design and planning through to construction and final handover. We manage all aspects of the project, providing a seamless and efficient experience for our clients.
   4. **Project Management** — Professional oversight and coordination of construction projects, ensuring timely completion, budget adherence, and quality control at every stage.
   5. **Consulting & Training** — Expert advice on material selection, construction methodologies, and sustainable building practices. Training programs for local teams on the proper handling and installation of advanced building systems.

3. **CTA** — `Let's Work Together` / `Whether you need materials, installation, or complete project management, our team is ready to help.` / `Contact Us`

---

### 12.6 GALLERY — `/gallery`

**SEO**
- Title: `Project Gallery | SPECO Building Technology Construction Projects`
- Description: `View our completed construction projects and product installations across South Sudan. See SPECO building materials in action.`

1. **Hero** — `gallery-hero`.
   - H1: `Our Work in Action`
   - Sub: `A visual showcase of our products, projects, and construction achievements across South Sudan and the region.`

2. **Featured case study — H Brothers G+6.** Do NOT flatten this into the grid. It is a complete build narrative and should lead the page as a **sequenced story ordered by build stage** (images 01 → 11), with a short caption per stage: panels installed → plaster and services → interior fit-out → facade → completed. Closing frame is `11-completed`.

3. **Filterable grid** below, with categories:
   - `All`
   - `EPS Panel Projects` — h-brothers + septic-tank
   - `Prefab Panel Projects` — prefab-projects + msf-tujur
   - `Product Showcase` — eps-products + prefab-products

   Masonry or mixed-ratio grid that respects original aspect ratios. No forced square crops.

4. **Lightbox** — click to open, keyboard navigation (arrows, Escape), captions, smooth open/close transition. This is one of the few places a richer transition is welcome.

5. Every image needs descriptive alt text naming the project, location, and what is shown.

---

### 12.7 CONTACT — `/contact`

**SEO**
- Title: `Contact SPECO Building Technology | Get a Quote | Juba, South Sudan`
- Description: `Contact SPECO Building Technology for construction material supply, project inquiries, and consultations. Located in Gombo Soug, Juba, South Sudan.`

1. **Hero** — `contact-hero`.
   - H1: `Let's Build Together`
   - Sub: `Get in touch for material supply, project consultations, or any inquiries about our products and services.`

2. **Contact details + form**, two columns.

   **Details:**
   - Phone: `+211 921 982 030` (click-to-call `tel:+211921982030`)
   - WhatsApp: same number, `https://wa.me/211921982030` with a prefilled message such as `Hello SPECO, I would like a quote for...`
   - Email: `sales@specobt.com`
   - Address: `Gombo Soug Block 1, Juba, South Sudan`
   - Google Maps: `https://maps.app.goo.gl/swHPgLqdjfdTYftUA` — embed a map, lazy-loaded
   - Office hours: Monday to Friday 8:00 AM — 5:00 PM · Saturday 9:00 AM — 1:00 PM · Sunday Closed

   **Form fields:**
   - Full Name (required)
   - Company Name
   - Phone Number (required)
   - Email Address (required)
   - Subject (select: General Inquiry, Material Supply, Project Consultation, Training, Other)
   - Message (required)
   - Client-side validation with inline errors. Loading and success states. Handler is a clearly marked TODO placeholder.

3. **Social:** Facebook `https://www.facebook.com/profile.php?id=61581429820186` · Instagram `https://www.instagram.com/specobt`

---

## 13. GLOBAL COMPONENTS

**Footer** — dark. Logo (white), short positioning line, navigation columns (Company / Products / Services), full contact block, social icons, Google Maps link, copyright `© 2026 SPECO Building Technology. All rights reserved.`

**Floating WhatsApp button** — fixed bottom-right on all pages, subtle, does not obstruct content on mobile.

**404 page** — on brand, links back to Home and Contact.

---

## 14. PERFORMANCE

The audience is in South Sudan on mid-range Android devices and constrained bandwidth. This is a functional requirement, not a nice-to-have.

- Lighthouse performance ≥ 85 on mobile.
- LCP under 2.5s on a simulated 4G connection.
- Hero video: `preload="metadata"` only. The poster carries first paint.
- Never load both desktop and mobile video variants.
- All images lazy-loaded except the above-the-fold hero poster.
- Explicit `width` and `height` on every image to prevent layout shift. Target CLS < 0.1.
- Self-host or `preconnect` the Google Fonts. Subset to Latin.
- No render-blocking JavaScript.

## 15. ACCESSIBILITY

- Semantic HTML5 landmarks.
- WCAG AA contrast minimum. Check white text over video — the gradient overlay must carry it.
- Keyboard navigable throughout, visible focus states.
- Descriptive alt text on every image.
- `aria-label` on icon-only buttons.
- `prefers-reduced-motion` respected: disable hover translations, page transitions, and image scale effects.

## 16. SEO & METADATA

- Unique title and meta description per page (supplied above).
- OpenGraph and Twitter card tags. Use `projects/h-brothers/11-completed` as the default share image.
- `LocalBusiness` and `Organization` JSON-LD schema with the address, phone, email, and geo coordinates for Juba.
- `sitemap.xml` and `robots.txt`.
- Canonical URLs.
- One `<h1>` per page, correct heading hierarchy throughout.

## 17. WHAT NOT TO DO

- Do not use scroll-triggered animation of any kind.
- Do not loop the hero videos.
- Do not crop the top of any video frame.
- Do not dump product images into a generic grid mid-page.
- Do not use stock photography or generated placeholder images.
- Do not use any `eps-products/` or `prefab-products/` image as a full-bleed desktop background.
- Do not explain what a sandwich panel is on the Prefab page.
- Do not describe the MSF Tujur project as being in South Sudan.
- Do not invent statistics, certifications, client names, or project counts beyond what is supplied here.
- Do not use orange as a large background fill.
- Do not ship a templated or generic layout. This must look like a considered, custom build.


---

## ADDITIONAL IMPLEMENTATION NOTES FOR THIS BUILD

Because no external component library is in use, implement these patterns directly:

**Magnetic button.** On `mousemove` within the button's bounding box, translate the button toward the cursor by up to 6px, easing back to origin on `mouseleave` over ~400ms. Disable entirely on touch devices and under `prefers-reduced-motion`.

**Image hover frame.** Wrap the image in a container with `overflow: hidden`. On hover, `transform: scale(1.04)` on the image over 600ms `cubic-bezier(0.22, 1, 0.36, 1)`. The frame itself does not move.

**Card lift.** On hover, `translateY(-4px)` plus a soft shadow, 250ms ease-out.

**Styled specification table.** Do not use browser default table styling. Left column in KoHo 500, uppercase, letter-spacing 0.04em, muted colour. Right column in Roboto 400. Row separators are 1px rules at 8% opacity of the text colour. Row padding 1.25rem vertical minimum. On mobile, collapse to stacked label-over-value blocks.

**Section eyebrow.** Small uppercase KoHo label in orange, letter-spacing 0.12em, sitting above the section headline with a short 32px orange rule beneath or beside it.

**Gallery lightbox.** Build it yourself: fixed overlay at 92% black, image centred with `object-fit: contain`, previous/next controls, close button, arrow-key and Escape support, caption beneath. Fade in over 250ms. Lock body scroll while open and restore focus to the triggering element on close.

**Page transition.** Fade the outgoing view to 0 opacity over 200ms, then fade the incoming view in over 300ms. Keep it subtle.

**Video breakpoint swap.** Use `<source media="(min-width: 768px)">` for the desktop file and a second `<source>` for the mobile file. Confirm in the network tab that only one file downloads per breakpoint — if both download, switch to a JS-driven `src` assignment on load instead.

---

## DELIVERABLES

1. Complete file tree.
2. Every file written in full.
3. A short README covering local setup, the contact form endpoint TODO, and asset replacement.

Verify before you finish:
- [ ] All 8 hero videos play once and hold their final frame. None loop.
- [ ] Only one video variant downloads per breakpoint.
- [ ] Header logo hidden during hero playback, fades in on video end.
- [ ] `object-position: center top` on every hero video.
- [ ] Zero scroll-triggered animation in the build.
- [ ] Neither product page has a generic image grid outside the single end-of-page grid.
- [ ] Every image has descriptive alt text.
- [ ] Dark and light sections genuinely alternate — never three of the same tone in a row.
- [ ] All CTAs route to `/contact`. Phone and WhatsApp links work.
