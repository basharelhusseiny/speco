'use client'

import { ShieldCheck, Feather, Palette, Package, CheckCircle2, ArrowUpRight, ThermometerSun, Zap, CloudRain, Flame, LayoutGrid, Sparkles } from 'lucide-react'
import { HeroVideo } from '@/components/HeroVideo'
import { PrimaryButton, SecondaryButton } from '@/components/Buttons'
import { Band, Eyebrow, SectionHead, Split } from '@/components/Sections'
import { ResponsiveImage } from '@/components/ResponsiveImage'
import { SpecTable } from '@/components/SpecTable'
import { usePageMeta } from '@/hooks/usePageMeta'
import { img, msfTujurImages, prefabProjectImages, prefabProductImages } from '@/lib/content'

const localPoints = ['Shorter lead times', 'No import cost stacking', 'Local supply for repairs and expansion']

const specs: [string, string][] = [
  ['Core Thickness', '50mm, 75mm, 100mm, 150mm'],
  ['Wall Panel Width', '950mm'],
  ['Roof Panel Width', '1050mm'],
  ['Core Materials', 'EPS, Rock Wool, Polyurethane'],
  ['Facings', 'Pre-painted galvanized iron sheets'],
]

const benefits = [
  { title: 'Thermal Performance', icon: ThermometerSun, copy: 'Multiple core material options for optimal insulation' },
  { title: 'Structural Rigidity', icon: Zap, copy: 'Dual metal facings provide excellent strength' },
  { title: 'Weather Protection', icon: CloudRain, copy: 'Fully sealed panels resist rain, wind, and UV' },
  { title: 'Fire Resistance', icon: Flame, copy: 'Rock wool core options for enhanced fire ratings' },
  { title: 'Quick Assembly', icon: LayoutGrid, copy: 'Interlocking panels reduce installation time dramatically' },
  { title: 'Aesthetic Appeal', icon: Sparkles, copy: 'Clean, modern finish available in multiple colours' },
]

const accessories = ['Ridge caps', 'Gutters and downpipes', 'Fasteners and screws', 'Flashing and trim', 'Complete roofing system components']

const roofingBenefits = [
  { icon: ShieldCheck, title: 'Durability', copy: "Built to withstand South Sudan's harsh weather" },
  { icon: Feather, title: 'Lightweight', copy: 'Easy to handle and install, reducing structural load' },
  { icon: Palette, title: 'Variety', copy: 'Multiple profiles and colours' },
  { icon: Package, title: 'Complete System', copy: 'Full range of accessories for a secure, watertight installation' },
]

export default function PrefabPanels() {
  usePageMeta({
    title: 'Prefabricated Sandwich Panels & Roofing | SPECO Building Technology',
    description:
      'SPECO prefabricated sandwich panels and roofing iron sheets for walls, roofs, and industrial applications. Superior thermal performance, structural rigidity, and quick assembly.',
    path: '/products/prefab-panels',
    keywords: 'sandwich panels, prefab panels, roofing iron sheets, insulated roof panels, wall panels South Sudan, industrial building panels',
  })

  return (
    <>
      <HeroVideo
        video="prefab-hero"
        loop
        eyebrow="Sandwich Panels & Roofing · South Sudan"
        titleLines={['Changing the Construction Culture of South Sudan']}
        sub="Prefabricated Sandwich Panels & Roofing — Engineered composite panels and roofing solutions for industrial, commercial, and residential construction."
      >
        <PrimaryButton to="/contact">Get a Quote</PrimaryButton>
        <SecondaryButton to="/gallery">See Projects</SecondaryButton>
      </HeroVideo>

      {/* Local Manufacturing */}
      <Band tone="dark" className="section-pad relative overflow-hidden" ariaLabelledby="local">
        <div className="pointer-events-none absolute -left-20 top-0 h-[450px] w-[450px] rounded-full bg-speco/[0.07] blur-[110px]" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden="true" />

        <div className="container-x relative z-10">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <Eyebrow>Local Manufacturing</Eyebrow>
              <h2 id="local" className="h-section mt-5 text-white">
                Manufactured here.{' '}
                <span className="text-speco">Not imported.</span>
              </h2>
              <p className="mt-5 text-base leading-[1.7] text-body-ondark/75">
                Nearly every sandwich panel used in South Sudan arrives by truck across a border. Ours does not.
                SPECO manufactures panels in Juba, which changes what a project timeline can look like: no customs
                clearance, no import duty stacked onto material cost, and no waiting weeks for a replacement panel
                or an additional order. Specify it, collect it, build.
              </p>
              <ul className="mt-8 space-y-0 border-t border-white/[0.07]">
                {localPoints.map((p) => (
                  <li key={p} className="group flex items-center justify-between border-b border-white/[0.07] py-4 transition-colors hover:border-speco/40">
                    <div className="flex items-center gap-4">
                      <span className="flex h-2 w-2 shrink-0 rounded-full bg-speco" aria-hidden="true" />
                      <span className="text-base text-white">{p}</span>
                    </div>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-transparent transition-all group-hover:text-speco" aria-hidden="true" />
                  </li>
                ))}
              </ul>

              {/* Stat badges */}
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  { value: 'Juba', label: 'Factory Location' },
                  { value: '3', label: 'Core Materials' },
                  { value: '0', label: 'Import Delays' },
                ].map((s) => (
                  <div key={s.label} className="rounded-xs border border-white/15 bg-white/[0.04] px-4 py-2.5">
                    <p className="font-heading text-xl font-bold text-speco">{s.value}</p>
                    <p className="mt-0.5 font-heading text-[10px] font-semibold uppercase tracking-[0.12em] text-white/60">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-sm border border-white/[0.08]">
              <div className="img-frame aspect-[16/9]">
                <ResponsiveImage image={img.prefabWarehouseWide} />
              </div>
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-speco/30 via-speco to-speco/30" />
              <div className="absolute left-4 top-4">
                <span className="rounded-xs border border-white/20 bg-black/70 px-3 py-1.5 font-heading text-[11px] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-md">
                  SPECO Factory · Juba
                </span>
              </div>
            </div>
          </div>
        </div>
      </Band>

      {/* Sandwich Wall & Roof Panels */}
      <Band tone="light" className="section-pad" ariaLabelledby="sandwich">
        <div className="container-x">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="relative overflow-hidden rounded-sm border border-black/[0.07]">
              <div className="img-frame aspect-[3/4]">
                <ResponsiveImage image={img.prefabCorner} />
              </div>
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-speco via-speco/60 to-transparent" />
              <div className="absolute left-4 top-4">
                <span className="rounded-xs border border-white/20 bg-black/70 px-3 py-1.5 font-heading text-[11px] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-md">
                  Corner joint detail
                </span>
              </div>
            </div>
            <div>
              <Eyebrow tone="light">The Product</Eyebrow>
              <h2 id="sandwich" className="h-section mt-5 text-body-dark">
                Sandwich wall &{' '}
                <span className="text-speco-dark">roof panels.</span>
              </h2>
              <p className="mt-5 text-base leading-[1.7] text-mutedlight">
                SPECO Sandwich Panels are engineered composite panels consisting of an insulating core bonded between
                two structural facings of pre-painted galvanized iron sheets. Renowned for superior thermal
                performance, structural rigidity, and aesthetic appeal, they are an excellent choice for industrial
                facilities, cold storage units, commercial buildings, and residential structures where energy
                efficiency and quick assembly are paramount.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {['EPS Core', 'Rock Wool Core', 'Polyurethane Core', 'Pre-painted Facings'].map((tag) => (
                  <span key={tag} className="inline-flex items-center gap-1.5 rounded-xs border border-black/[0.08] bg-surface-light px-3 py-1 font-heading text-xs font-semibold uppercase tracking-[0.08em] text-body-dark">
                    <span className="h-1 w-1 rounded-full bg-speco" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Band>

      {/* Specifications */}
      <Band tone="dark" className="section-pad relative overflow-hidden" ariaLabelledby="prefab-specs">
        <div className="pointer-events-none absolute -right-20 top-0 h-[380px] w-[380px] rounded-full bg-speco/[0.07] blur-[100px]" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden="true" />

        <div className="container-x relative z-10">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="relative order-2 overflow-hidden rounded-sm border border-white/[0.08] lg:order-1">
              <div className="img-frame aspect-[3/2]">
                <ResponsiveImage image={img.prefabCornerWide} />
              </div>
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-speco/30 via-speco to-speco/30" />
            </div>
            <div className="order-1 lg:order-2">
              <Eyebrow>Technical Specs</Eyebrow>
              <h2 id="prefab-specs" className="h-section mt-5 text-white">
                Panel{' '}
                <span className="text-speco">specifications.</span>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-body-ondark/65">
                All panels manufactured to international standards at the SPECO factory in Juba. Custom sizes available on request.
              </p>
              <div className="mt-8">
                <SpecTable rows={specs} tone="dark" label="Sandwich panel specifications" />
              </div>
            </div>
          </div>
        </div>
      </Band>

      {/* Key Benefits */}
      <Band tone="light" className="section-pad" ariaLabelledby="prefab-benefits">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow tone="light">Key Benefits</Eyebrow>
              <h2 id="prefab-benefits" className="h-section mt-5 max-w-xl text-body-dark">
                Engineered for{' '}
                <span className="text-speco-dark">performance.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-mutedlight md:text-right">
              From thermal performance to structural strength — every panel is designed to outperform traditional construction.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => {
              const Icon = b.icon
              return (
                <div
                  key={b.title}
                  className="group relative overflow-hidden rounded-sm border border-black/[0.07] bg-surface-light p-6 transition-all duration-300 hover:border-speco/30 hover:bg-white hover:shadow-[0_12px_30px_-10px_rgba(0,0,0,0.07)]"
                >
                  <div className="absolute left-0 top-0 h-[2px] w-8 bg-speco transition-all duration-500 group-hover:w-full" />
                  <div className="flex items-start justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-speco/10 text-speco transition-colors duration-300 group-hover:bg-speco group-hover:text-white">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <span className="font-heading text-xs font-semibold tabular-nums text-speco/50">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="mt-4 font-heading text-base font-bold text-body-dark transition-colors group-hover:text-speco-dark">{b.title}</h3>
                  <p className="mt-2 text-sm leading-[1.65] text-mutedlight">{b.copy}</p>
                </div>
              )
            })}
          </div>
        </div>
      </Band>

      {/* Roofing */}
      <Band tone="dark" id="roofing" className="scroll-mt-20 section-pad relative overflow-hidden" ariaLabelledby="roofing-heading">
        <div className="pointer-events-none absolute -left-20 bottom-0 h-[400px] w-[400px] rounded-full bg-speco/[0.06] blur-[100px]" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden="true" />

        <div className="container-x relative z-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow>Roofing</Eyebrow>
              <h2 id="roofing-heading" className="h-section mt-5 max-w-xl text-white">
                Insulated{' '}
                <span className="text-speco">roof panels.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-body-ondark/60 md:text-right">
              High-performance insulated roof panels for industrial, commercial, and residential buildings.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {[img.prefabRoofInsulated, img.prefabRoofProfile].map((im) => (
              <figure key={im.path} className="group overflow-hidden rounded-sm border border-white/[0.08] bg-surface-dark transition-all hover:border-speco/40">
                <div className="img-frame relative aspect-[16/9] overflow-hidden">
                  <ResponsiveImage image={im} />
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-speco/30 via-speco to-speco/30 opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <figcaption className="border-t border-white/[0.06] px-5 py-3 text-sm text-body-ondark/60">{im.caption}</figcaption>
              </figure>
            ))}
          </div>

          {/* Iron sheets & accessories */}
          <div className="mt-20 grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <Eyebrow>Roofing Iron Sheets &amp; Accessories</Eyebrow>
              <h3 className="mt-5 font-heading text-2xl font-semibold text-white md:text-3xl">
                A complete{' '}
                <span className="text-speco">roofing system.</span>
              </h3>
              <p className="mt-5 text-base leading-[1.7] text-body-ondark/75">
                High-quality roofing iron sheets designed to provide robust and long-lasting protection against the
                elements. Manufactured to withstand harsh weather conditions prevalent in South Sudan, these sheets
                are lightweight, easy to install, and available in various profiles and colours to complement any
                architectural design.
              </p>

              <div className="mt-8 rounded-sm border border-white/[0.08] bg-surface-dark p-5">
                <h4 className="font-heading text-xs font-semibold uppercase tracking-[0.12em] text-white/50">Accessories Included</h4>
                <ul className="mt-4 space-y-2.5">
                  {accessories.map((a, i) => (
                    <li key={a} className="flex items-center gap-3 text-sm text-body-ondark/85">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-speco" aria-hidden="true" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <div className="grid gap-4 sm:grid-cols-2">
                {roofingBenefits.map((b) => (
                  <div key={b.title} className="group rounded-sm border border-white/[0.07] bg-surface-dark p-5 transition-colors hover:border-speco/30">
                    <div className="flex h-9 w-9 items-center justify-center rounded-sm bg-speco/10 text-speco">
                      <b.icon className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <h4 className="mt-3 font-heading text-base font-semibold text-white">{b.title}</h4>
                    <p className="mt-2 text-sm leading-[1.65] text-body-ondark/65">{b.copy}</p>
                  </div>
                ))}
              </div>

              <figure className="mt-5 overflow-hidden rounded-sm border border-white/[0.08] bg-surface-dark transition-all hover:border-speco/40">
                <div className="img-frame aspect-[3/2]">
                  <ResponsiveImage image={img.prefabOfficeGutters} />
                </div>
                <figcaption className="border-t border-white/[0.06] px-5 py-3 text-sm text-body-ondark/60">
                  Gutters and downpipes installed on a SPECO prefab office, Juba
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </Band>

      {/* Production capacity — cinematic full-bleed split */}
      <Band tone="dark" mid ariaLabelledby="capacity">
        <div className="grid items-stretch lg:grid-cols-2">
          <div className="relative min-h-[280px] overflow-hidden lg:min-h-[420px]">
            <div className="img-frame h-full w-full">
              <ResponsiveImage image={img.prefabWarehouseAisle} />
            </div>
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-speco/30 via-speco to-speco/30" />
          </div>
          <div className="relative flex items-center overflow-hidden px-5 py-14 sm:px-8 lg:px-16 lg:py-20">
            <div className="pointer-events-none absolute -right-10 -top-10 h-[300px] w-[300px] rounded-full bg-speco/[0.07] blur-[80px]" aria-hidden="true" />
            <div className="relative z-10">
              <Eyebrow>In-Country Stock</Eyebrow>
              <h2 id="capacity" className="h-section mt-5 text-white">
                Panels on the shelf,{' '}
                <span className="text-speco">not on a ship.</span>
              </h2>
              <p className="mt-5 max-w-md text-base leading-[1.7] text-body-ondark/75">
                Our Juba factory holds manufacturing capacity and ready stock in-country. Additional quantities and
                replacement panels are measured in days, not shipping schedules.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {['Days not weeks', 'No customs delays', 'Repair stock available'].map((tag) => (
                  <span key={tag} className="inline-flex items-center gap-1.5 rounded-xs border border-white/15 bg-white/[0.04] px-3 py-1 font-heading text-xs font-semibold uppercase tracking-[0.08em] text-white/70">
                    <span className="h-1 w-1 rounded-full bg-speco" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Band>

      {/* Case Study — MSF */}
      <Band tone="dark" className="section-pad relative overflow-hidden" ariaLabelledby="msf-case">
        <div className="pointer-events-none absolute -right-20 top-0 h-[500px] w-[500px] rounded-full bg-speco/[0.06] blur-[120px]" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden="true" />

        <div className="container-x relative z-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow>Case Study · Regional Delivery</Eyebrow>
              <h2 id="msf-case" className="h-section mt-5 max-w-2xl text-white">
                MSF South Sudan{' '}
                <span className="text-speco">warehouse, Tujur.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-body-ondark/60 md:text-right">
              Client: MSF South Sudan. A remote-site, temperature-controlled warehouse with air conditioning — delivered beyond Juba, across the region.
            </p>
          </div>

          <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {msfTujurImages.map((im, i) => (
              <li key={im.path}>
                <figure className="group overflow-hidden rounded-sm border border-white/[0.08] bg-surface-dark transition-all duration-300 hover:border-speco/40">
                  <div className={`img-frame relative ${im.orientation === 'portrait' ? 'aspect-[3/4]' : 'aspect-[4/3]'} overflow-hidden`}>
                    <ResponsiveImage image={im} />
                    <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-speco/30 via-speco to-speco/30 opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                  <figcaption className="flex items-baseline gap-3 border-t border-white/[0.06] px-5 py-3 text-sm text-body-ondark/60">
                    <span className="font-heading text-sm font-bold tabular-nums text-speco">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {im.caption}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ol>
        </div>
      </Band>

      {/* Delivered projects */}
      <Band tone="light" className="section-pad" ariaLabelledby="delivered">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow tone="light">Delivered</Eyebrow>
              <h2 id="delivered" className="h-section mt-5 max-w-xl text-body-dark">
                Prefab projects{' '}
                <span className="text-speco-dark">in service.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-mutedlight md:text-right">
              Offices, accommodation units, and two-storey builds delivered in Juba.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {prefabProjectImages.map((im) => (
              <figure key={im.path} className="group overflow-hidden rounded-sm border border-black/[0.08] bg-surface-light transition-all duration-300 hover:border-speco/30 hover:shadow-[0_16px_40px_-12px_rgba(0,0,0,0.07)]">
                <div className={`img-frame relative ${im.orientation === 'portrait' ? 'aspect-[3/4]' : 'aspect-[4/3]'} overflow-hidden`}>
                  <ResponsiveImage image={im} />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="absolute left-0 top-0 h-[2px] w-8 bg-speco transition-all duration-500 group-hover:w-full" />
                </div>
                <figcaption className="border-t border-black/[0.06] px-5 py-3 text-sm text-mutedlight">{im.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </Band>

      {/* Image grid gallery */}
      <Band tone="dark" mid className="section-pad" ariaLabelledby="prefab-grid">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow>Product Gallery</Eyebrow>
              <h2 id="prefab-grid" className="h-section mt-5 max-w-xl text-white">
                Panels in{' '}
                <span className="text-speco">production & use.</span>
              </h2>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {prefabProductImages.map((im) => (
              <figure key={im.path} className="group overflow-hidden rounded-sm border border-white/[0.08] bg-surface-dark transition-all hover:border-speco/40">
                <div className="img-frame relative aspect-[4/3] overflow-hidden">
                  <ResponsiveImage image={im} />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-speco/30 via-speco to-speco/30 opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              </figure>
            ))}
          </div>
        </div>
      </Band>

      {/* CTA */}
      <Band tone="dark" className="section-pad relative overflow-hidden" ariaLabelledby="prefab-cta">
        <div className="pointer-events-none absolute -right-24 -bottom-24 h-[450px] w-[450px] rounded-full bg-speco/10 blur-[130px]" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden="true" />

        <div className="container-x relative z-10">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Eyebrow>Get Started</Eyebrow>
              <h2 id="prefab-cta" className="h-section mt-5 max-w-xl text-white">
                Engineered for{' '}
                <span className="text-speco">performance.</span>
              </h2>
              <p className="mt-5 text-base leading-[1.7] text-body-ondark/80 md:text-lg">
                Contact our technical sales team for a free BOQ review and project-specific quote. Factory direct from Juba — no import delays.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <PrimaryButton to="/contact">Get a Quote</PrimaryButton>
                <SecondaryButton to="/gallery">View Projects</SecondaryButton>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-white/[0.08] pt-6 text-xs text-body-ondark/60">
                {['Free BOQ Assessment', 'Juba Factory Direct', 'Full Technical Support'].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-speco" aria-hidden="true" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Band>
    </>
  )
}
