# AFRI General Laundry Website Rebuild — Cody Brief

## Project
Rebuild the AFRI General Laundry website. Transform the current single-page dark site into a multi-page white-themed site using the client's PDF as the single source of truth for all content.

## Source Files (on this Mac)
- **Current website:** `/Users/hashimelmagzoub/.hermes/cache/documents/afri_laundry_extracted/AFRI-General-Laundry-Website/`
- **Client PDF:** `/Users/hashimelmagzoub/.hermes/cache/documents/doc_a0de1e3541fb_LAUNDRY MAGAZINE FINALE PRINT.pdf`

## Client Feedback (Locked)
1. Design: White background with red (#E4002B) elements. Flip dark theme to light.
2. Hero: Keep the cinematic hero video section exactly as-is. Add gradient/shadow transition from dark hero into white body below.
3. Multi-page: Pricing must be a separate page.
4. Content: Replace all copy with exact information from the PDF. No improvisation.

## Corrected Business Information (from PDF)

- **Business Name:** LG Pick & Drop Laundry
- **Operated by:** Afri General Trading Ltd (sole distributor of LG Electronics in Juba)
- **Location:** Hai Tijjaria Road, around Freedom Hospital, Juba, South Sudan
- **Address:** AFRI Shopping Centre, Hai Tijaria Road - Juba
- **Hours:** Mon – Sat: 8:00 AM – 6:00 PM
- **Phone 1:** +211 922 723 289
- **Phone 2:** +211 926 605 084
- **Tagline:** "Experience Original Quality, Every Time"

## Equipment (Correct)
- 5 LG Commercial Washing Machines
- 5 LG Commercial Dryers
- Professional Steam Ironing Equipment
- Commercial Finishing & Pressing Machines

## Services (Correct, from PDF)
1. Professional washing
2. Stain treatment (where possible)
3. Gentle drying
4. Steam ironing
5. Neat folding or hanging
6. Protective packaging

### Special Item Services
- **Suits & Gowns:** professional washing, steam pressing, hanging, protective garment cover
- **Blankets & Comforters:** deep wash, sanitizing, fresh fragrance, proper drying, neatly folded & packed
- **Curtains:** deep cleaning, ironing (if required), folded or hung, ready to install

## B2B Offering (New Page: "Start Your Own Laundry")
- Sell genuine LG Commercial Washing Machines and Dryers
- Competitive prices
- Professional installation
- Machine setup and testing
- FREE operator training for laundry staff
- Technical support by skilled LG technicians
- After-sales service and spare parts support

## Pricing (Separate Page — Exact from PDF)

| Item | Price |
|------|-------|
| Skirt | $2 |
| Casual Dress | $3 |
| Event Dress | $5 |
| Sweaters | $3 |
| Jacket | $3 |
| Coat | $4 |
| Shirt | $2 / $3 |
| Suit | $7 |
| Trouser | $4 |
| Hats/Caps | $2 |
| Army Uniforms | $7 |
| Gowns | $4 |
| Normal Uniforms | $3.50 |
| Kaunda Suits/African Dress | $4.50 |
| Jalabiya | $4.50 |
| Blouse | $2.50 |
| Vest | $1 |
| Shorts | $2 |
| Table Covers | $4.50 |
| Set Covers | $4 |
| T-Shirt | $2 |
| Towel | $3 |
| Bed Sheet | $3 |
| Pillow Case | $2 |
| Curtains | $10 |
| Wedding Dress | $10 |
| Tie | $1 |
| Bed Package (2 pillows + 2 bed sheets) | $6 |
| Socks | $3 |
| Bra | $4 |
| Men's Underwear | $5 |
| Scarf | $2 |
| Big/Heavy Blanket | $7 |
| Small Comforter | $4 |
| Big Comforters | $6 |
| Small Blanket | $5 |
| Two Pieces | $4 |

## Proposed Site Structure

| Page | Content |
|------|---------|
| **Home** | Hero (keep as-is with white transition) → The People → Services → The Machines → How It Works → Book a Pickup CTA |
| **Pricing** | Full pricing table from PDF, organized by category |
| **Services** | Detailed service descriptions from PDF |
| **Equipment / B2B** | LG Commercial Laundry Equipment sales, training, installation, support |
| **Contact** | Full contact info, map link, WhatsApp CTA, both phone numbers |

## Design Specifications
- Base background: white (#FFFFFF)
- Surface/cards: light gray (#F5F5F5 or #FAFAFA)
- Text: dark (#1A1A1A or #111111)
- Accent: red (#E4002B) — headlines, labels, CTAs, icons, borders
- Muted text: #666666
- Hero section: KEEP DARK exactly as current. Add gradient transition from hero bottom into white body.
- Fonts: Keep Anton (display) + Inter (body)
- Card style: White background, subtle border, red top accent line
- Maintain GSAP scroll animations and Lenis smooth scroll
- Keep responsive breakpoints (1023px, 767px)
- Keep WhatsApp booking form functionality

## Skills to Load (Mandatory)
Load ALL of these skills before starting work. Do not skip any:

1. **frontend-ui-engineering** — For production-quality, accessible, responsive UI
2. **make-interfaces-feel-better** — For design engineering principles and polish
3. **higgsfield-websites** — For website build, edit, and deployment workflows
4. **shipping-and-launch** — For production launch preparation
5. **superpowers** — For plan execution and verification workflows
6. **github** — For version control and deployment via git
7. **incremental-implementation** — For delivering changes incrementally
8. **spec-driven-development** — For building from a spec (this brief)

## Technical Requirements
- Multi-page HTML site (not single page)
- Preserve existing GSAP + ScrollTrigger + Lenis animations
- Preserve hero video scroll-scrub behavior
- WhatsApp form must pre-fill message with booking details
- All phone numbers must be clickable tel: links
- Both WhatsApp numbers must have wa.me links
- Google Maps link to AFRI Shopping Centre, Hai Tijaria Road, Juba
- SEO: Update schema.org LocalBusiness JSON-LD with correct info
- **Deploy to Vercel and provide a preview link for Hash to review**

## Assets to Preserve
- Hero video (hero-720.mp4, hero-1080.mp4)
- Hero poster and last frame images
- Staff pressing photos (desktop + mobile)
- Machines wall photos (desktop + mobile)
- AFRI logo (PNG + WebP)

## Deliverables
1. Complete multi-page website files ready for deployment
2. All pages linked with correct navigation
3. All copy matching the PDF exactly
4. Pricing page with full table
5. B2B equipment sales page
6. Working WhatsApp booking on all relevant pages
7. **Vercel preview link for client review**

## Output Location
Save all files to: `/Users/hashimelmagzoub/HASH SOLUTIONS Co. Ltd./AFRI Laundry Website/`

Post results in the Technology & AI Systems topic (thread 323) in HASH HQ.
