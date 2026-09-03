'use client'

import Link from 'next/link'
import { ArrowUpRight, CheckCircle2, Zap, ThermometerSun, Volume2, Flame, Clock, DollarSign, Leaf, Recycle, MapPin, Building2 } from 'lucide-react'
import { HeroVideo } from '@/components/HeroVideo'
import { PrimaryButton, SecondaryButton } from '@/components/Buttons'
import { Band, Eyebrow, SectionHead, Split } from '@/components/Sections'
import { ResponsiveImage } from '@/components/ResponsiveImage'
import { SpecTable } from '@/components/SpecTable'
import { usePageMeta } from '@/hooks/usePageMeta'
import { img, hBrothersImages, septicTankImages } from '@/lib/content'

const madeSteps = [
  'Made from high-quality polystyrene',
  'Expanded, moulded, and cut into custom panels',
  'Reinforced with galvanised wire mesh for strength',
  'Finished ready for versatile construction use',
]

const specs: [string, string][] = [
  ['Thickness', '60mm, 80mm, 100mm (single wall); 60mm (double wall)'],
  ['Standard Dimensions', '1200mm width × 3000mm length'],
  ['Density Options', 'Density 15, Density 25'],
  ['Applications', 'External walls, internal walls, floor slabs, partitions'],
]

const benefits = [
  { title: 'Thermal Insulation', icon: ThermometerSun, copy: 'High-density EPS core provides excellent thermal performance, reducing energy costs for heating and cooling.' },
  { title: 'Soundproofing', icon: Volume2, copy: 'Dense construction naturally dampens sound transmission between spaces.' },
  { title: 'Fire Resistance', icon: Flame, copy: 'Concrete plaster coating provides significant fire resistance ratings.' },
  { title: 'Speed of Installation', icon: Clock, copy: 'Large panel sizes mean faster coverage and reduced labour time.' },
  { title: 'Structural Integrity', icon: Zap, copy: 'Steel mesh reinforcement creates a monolithic structure when plastered.' },
  { title: 'Cost Effective', icon: DollarSign, copy: 'Reduced construction time and labour costs compared to traditional methods.' },
]

const environmental = [
  { title: 'Energy Efficient', icon: Zap, copy: 'Improves building performance, making structures cooler in hot climates and warmer in cold weather.' },
  { title: 'Sustainable', icon: Recycle, copy: 'Lower embodied energy than traditional blocks; reduces site waste and carbon footprint.' },
  { title: 'Locally Produced', icon: MapPin, copy: 'Cuts down on transport emissions and supports the local economy.' },
  { title: 'Versatile', icon: Building2, copy: 'Suitable for homes, schools, offices, and more.' },
]

const applications = [
  'Wall panels (external and internal)',
  'Roofing',
  'Floor slabs',
  'Staircases',
  'Septic tanks',
  'Partitions',
]

const caseStudySequence = [...hBrothersImages.slice(0, 8), img.hbCompletedV2]

export default function EpsPanels() {
  usePageMeta({
    title: 'EPS 3D Wall Panels | Expanded Polystyrene Panels | SPECO Building Technology',
    description:
      'SPECO EPS 3D Wall Panels are lightweight, high-strength construction panels with thermal insulation, soundproofing, and fire resistance. Ideal for residential, commercial, and industrial buildings in South Sudan.',
    path: '/products/eps-panels',
    keywords: 'EPS panels, expanded polystyrene panels, 3D wall panels, insulated panels, thermal insulation panels, lightweight construction panels',
  })

  return (
    <>
      <HeroVideo
        video="eps-hero"
        loop
        eyebrow="EPS 3D Wall Panels · South Sudan"
        titleLines={['Changing the Construction Culture of South Sudan']}
        sub="Revolutionary lightweight construction panels that form monolithic, load-bearing structures with exceptional thermal insulation — manufactured in Juba."
      >
        <PrimaryButton to="/contact">Request a Quote</PrimaryButton>
        <SecondaryButton to="/gallery">See Projects</SecondaryButton>
      </HeroVideo>

      {/* What is EPS */}
      <Band tone="light" className="section-pad" ariaLabelledby="what-is-eps">
        <div className="container-x">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Image side */}
            <div className="relative overflow-hidden rounded-sm border border-black/[0.07]">
              <div className="img-frame aspect-[3/4]">
                <ResponsiveImage image={img.epsEdgeProfile} />
              </div>
              {/* Overlay badge */}
              <div className="absolute left-4 top-4">
                <span className="rounded-xs border border-white/20 bg-black/70 px-3 py-1.5 font-heading text-[11px] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-md">
                  New to South Sudan
                </span>
              </div>
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-speco via-speco/60 to-transparent" />
            </div>

            {/* Content side */}
            <div>
              <Eyebrow tone="light">What is EPS?</Eyebrow>
              <h2 id="what-is-eps" className="h-section mt-5 text-body-dark">
                The material shaping{' '}
                <span className="text-speco-dark">modern construction.</span>
              </h2>
              <p className="mt-5 text-base leading-[1.7] text-mutedlight">
                EPS stands for Expanded Polystyrene, a high-quality, lightweight foam material used in modern
                construction worldwide. It is recognised for its strength, versatility, and outstanding insulation
                properties. <strong className="text-body-dark">SPECO is the first company to manufacture and apply it in South Sudan.</strong>
              </p>

              {/* Stat boxes */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { value: '60%', label: 'Faster to build' },
                  { value: '40%', label: 'Less labour cost' },
                  { value: '1st', label: 'In South Sudan' },
                ].map((s) => (
                  <div key={s.label} className="rounded-sm border border-black/[0.07] bg-surface-light p-4">
                    <p className="font-heading text-2xl font-bold text-speco-dark">{s.value}</p>
                    <p className="mt-1 font-heading text-[10px] font-semibold uppercase tracking-[0.1em] text-mutedlight">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Band>

      {/* How It's Made */}
      <Band tone="dark" className="section-pad relative overflow-hidden" ariaLabelledby="how-made">
        <div className="pointer-events-none absolute -left-20 top-0 h-[400px] w-[400px] rounded-full bg-speco/[0.06] blur-[100px]" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden="true" />

        <div className="container-x relative z-10">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Steps */}
            <div>
              <Eyebrow>How It&apos;s Made</Eyebrow>
              <h2 id="how-made" className="h-section mt-5 text-white">
                From raw polystyrene to a{' '}
                <span className="text-speco">structural panel.</span>
              </h2>
              <ol className="mt-10 space-y-0 border-t border-white/[0.07]">
                {madeSteps.map((s, i) => (
                  <li
                    key={s}
                    className="group flex items-center gap-5 border-b border-white/[0.07] py-4 transition-colors hover:border-speco/40"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-speco/30 bg-speco/10 font-heading text-sm font-bold tabular-nums text-speco transition-all group-hover:bg-speco group-hover:text-white">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-base leading-[1.65] text-body-ondark/85">{s}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Image */}
            <div className="relative overflow-hidden rounded-sm border border-white/[0.08]">
              <div className="img-frame aspect-[4/3]">
                <ResponsiveImage image={img.epsMeshFace} />
              </div>
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-speco/30 via-speco to-speco/30" />
            </div>
          </div>
        </div>
      </Band>

      {/* Quality strip */}
      <Band tone="light" ariaLabelledby="quality">
        <div className="container-x py-10 md:py-12">
          <div className="relative overflow-hidden rounded-sm border border-speco/20 bg-speco/[0.04] px-8 py-7 text-center">
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-speco to-transparent" />
            <span className="mb-3 inline-flex items-center gap-2 font-heading text-xs font-semibold uppercase tracking-[0.14em] text-speco-dark">
              <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
              Quality Guarantee
            </span>
            <p id="quality" className="mx-auto max-w-3xl font-heading text-lg font-semibold leading-[1.5] text-body-dark md:text-xl">
              Every panel is manufactured under strict quality control for durability and compliance with
              international standards.
            </p>
          </div>
        </div>
      </Band>

      {/* Product description */}
      <Band tone="light" className="section-pad border-t border-black/[0.08]" ariaLabelledby="product-desc">
        <div className="container-x">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <Eyebrow tone="light">The Product</Eyebrow>
              <h2 id="product-desc" className="h-section mt-5 text-body-dark">
                Lightweight panels.{' '}
                <span className="text-speco-dark">Monolithic strength.</span>
              </h2>
              <div className="mt-5 space-y-4 text-base leading-[1.7] text-mutedlight">
                <p>
                  Our Expanded Polystyrene (EPS) 3D Wall Panels represent a revolutionary approach to modern
                  construction. These lightweight yet incredibly strong panels are composed of a core of high-density
                  EPS foam, reinforced with a steel mesh on both sides. Once installed and plastered with concrete,
                  they form a monolithic, load-bearing structure that offers exceptional thermal insulation,
                  soundproofing, and fire resistance.
                </p>
                <p>
                  They are ideal for rapid construction of residential, commercial, and industrial buildings,
                  significantly reducing construction time and labour costs.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {['Load-bearing', 'Fire resistant', 'Thermally insulated', 'Steel-mesh reinforced'].map((tag) => (
                  <span key={tag} className="inline-flex items-center gap-1.5 rounded-xs border border-black/[0.08] bg-surface-light px-3 py-1 font-heading text-xs font-semibold uppercase tracking-[0.08em] text-body-dark">
                    <span className="h-1 w-1 rounded-full bg-speco" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative overflow-hidden rounded-sm border border-black/[0.07]">
              <div className="img-frame aspect-[3/4]">
                <ResponsiveImage image={img.epsStacked} />
              </div>
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-speco via-speco/60 to-transparent" />
            </div>
          </div>
        </div>
      </Band>

      {/* Specifications */}
      <Band tone="dark" className="section-pad relative overflow-hidden" ariaLabelledby="specs">
        <div className="pointer-events-none absolute -right-20 -top-20 h-[350px] w-[350px] rounded-full bg-speco/[0.07] blur-[90px]" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden="true" />

        <div className="container-x relative z-10">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <Eyebrow>Technical Specs</Eyebrow>
              <h2 id="specs" className="h-section mt-5 text-white">
                Panel{' '}
                <span className="text-speco">specifications.</span>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-body-ondark/65">
                All panels manufactured to international standards at the SPECO factory in Juba. Custom dimensions available on request.
              </p>
              <div className="mt-8">
                <SpecTable rows={specs} tone="dark" label="EPS 3D wall panel specifications" />
              </div>
            </div>
            <div className="relative overflow-hidden rounded-sm border border-white/[0.08]">
              <div className="img-frame aspect-[3/4]">
                <ResponsiveImage image={img.epsEdgeProfile} />
              </div>
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-speco/30 via-speco to-speco/30" />
              <div className="absolute bottom-4 right-4">
                <span className="rounded-xs border border-white/20 bg-black/70 px-3 py-1.5 font-mono text-[11px] text-white/70 backdrop-blur-md">
                  Edge profile detail · Juba factory
                </span>
              </div>
            </div>
          </div>
        </div>
      </Band>

      {/* Key Benefits */}
      <Band tone="light" className="section-pad" ariaLabelledby="benefits">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow tone="light">Key Benefits</Eyebrow>
              <h2 id="benefits" className="h-section mt-5 max-w-xl text-body-dark">
                Why builders{' '}
                <span className="text-speco-dark">switch to EPS.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-mutedlight md:text-right">
              From thermal performance to structural strength — EPS delivers where traditional blockwork cannot.
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
                  <h3 className="mt-4 font-heading text-base font-bold text-body-dark transition-colors group-hover:text-speco-dark">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-sm leading-[1.65] text-mutedlight">{b.copy}</p>
                </div>
              )
            })}
          </div>
        </div>
      </Band>

      {/* Environmental Benefits */}
      <Band tone="dark" className="section-pad relative overflow-hidden" ariaLabelledby="environmental">
        <div className="pointer-events-none absolute -left-20 bottom-0 h-[400px] w-[400px] rounded-full bg-speco/[0.07] blur-[100px]" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden="true" />

        <div className="container-x relative z-10">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="relative overflow-hidden rounded-sm border border-white/[0.08]">
              <div className="img-frame aspect-[3/2]">
                <ResponsiveImage image={img.epsWarehouse} />
              </div>
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-speco/30 via-speco to-speco/30" />
            </div>
            <div>
              <Eyebrow>Environmental Benefits</Eyebrow>
              <h2 id="environmental" className="h-section mt-5 text-white">
                Better for the building.{' '}
                <span className="text-speco">Better for the country.</span>
              </h2>
              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                {environmental.map((e) => {
                  const Icon = e.icon
                  return (
                    <div key={e.title} className="group rounded-sm border border-white/[0.07] bg-surface-dark p-5 transition-colors hover:border-speco/30">
                      <div className="flex h-9 w-9 items-center justify-center rounded-sm bg-speco/10 text-speco">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </div>
                      <h3 className="mt-3 font-heading text-base font-semibold text-white">{e.title}</h3>
                      <p className="mt-2 text-sm leading-[1.65] text-body-ondark/65">{e.copy}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </Band>

      {/* Applications */}
      <Band tone="light" className="section-pad" ariaLabelledby="applications">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow tone="light">Applications</Eyebrow>
              <h2 id="applications" className="h-section mt-5 max-w-xl text-body-dark">
                One system. Walls, roofs,{' '}
                <span className="text-speco-dark">slabs, stairs.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-mutedlight md:text-right">
              Suitable for residential homes, apartments, commercial offices, industrial facilities, schools, and healthcare facilities.
            </p>
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <ul className="space-y-0 border-t border-black/[0.08]">
              {applications.map((a, i) => (
                <li
                  key={a}
                  className="group flex items-center justify-between border-b border-black/[0.08] py-4 transition-colors hover:border-speco/30"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-heading text-xs font-semibold tabular-nums text-speco/60">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-heading text-lg font-medium text-body-dark transition-colors group-hover:text-speco-dark">
                      {a}
                    </span>
                  </div>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-transparent transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-speco" aria-hidden="true" />
                </li>
              ))}
            </ul>
            <div className="grid grid-cols-2 gap-4">
              {[img.epsStairHandling, img.epsStairDetail, ...septicTankImages].map((im) => (
                <figure key={im.path} className="group overflow-hidden rounded-sm border border-black/[0.08] bg-surface-light transition-all hover:border-speco/30">
                  <div className="img-frame relative aspect-[3/2] overflow-hidden">
                    <ResponsiveImage image={im} />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                  <figcaption className="px-4 py-3 text-xs text-mutedlight">{im.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </Band>

      {/* Case Study — H Brothers */}
      <Band tone="dark" className="section-pad relative overflow-hidden" ariaLabelledby="case-study">
        <div className="pointer-events-none absolute -right-20 top-0 h-[500px] w-[500px] rounded-full bg-speco/[0.06] blur-[120px]" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden="true" />

        <div className="container-x relative z-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow>Case Study · Katoor, Juba</Eyebrow>
              <h2 id="case-study" className="h-section mt-5 max-w-2xl text-white">
                H Brothers{' '}
                <span className="text-speco">G+6 Tower.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-body-ondark/60 md:text-right">
              A G+6 residential and commercial tower — concrete foundation with EPS slabs, walls, and staircases throughout. Six storeys answer the load-bearing question better than any specification.
            </p>
          </div>

          <ol className="mt-14 space-y-6 md:space-y-8">
            {caseStudySequence.map((im, i) => (
              <li key={im.path} className="group grid items-start gap-5 md:grid-cols-[56px_1fr]">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-speco/30 bg-surface-dark font-heading text-sm font-bold text-speco transition-all group-hover:border-speco group-hover:bg-speco group-hover:text-white">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <figure className="overflow-hidden rounded-sm border border-white/[0.08] bg-surface-dark transition-all duration-300 group-hover:border-speco/40">
                  <div className={`img-frame ${im.orientation === 'portrait' ? 'aspect-[3/4] md:aspect-[16/9]' : 'aspect-[16/9]'} relative overflow-hidden`}>
                    <ResponsiveImage image={im} />
                    <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-speco/30 via-speco to-speco/30 opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                  <figcaption className="border-t border-white/[0.06] px-5 py-3 text-sm text-body-ondark/60">{im.caption}</figcaption>
                </figure>
              </li>
            ))}
          </ol>

          <div className="mt-10 flex items-center gap-6">
            <Link
              href="/gallery"
              className="link-underline inline-flex items-center gap-2 font-heading text-sm font-semibold uppercase tracking-[0.08em] text-speco"
            >
              See the full project gallery
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </Band>

      {/* Installation proof */}
      <Band tone="light" className="section-pad" ariaLabelledby="install-proof">
        <div className="container-x">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="relative overflow-hidden rounded-sm border border-black/[0.07]">
              <div className="img-frame aspect-[3/4]">
                <ResponsiveImage image={img.epsInstallLift} />
              </div>
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-speco via-speco/60 to-transparent" />
            </div>
            <div className="flex flex-col justify-center">
              <Eyebrow tone="light">On Site</Eyebrow>
              <h2 id="install-proof" className="h-section mt-5 text-body-dark">
                Days,{' '}
                <span className="text-speco-dark">not months.</span>
              </h2>
              <p className="mt-5 text-base leading-[1.7] text-mutedlight">
                Panels arrive ready to place. A small SPECO crew sets, ties, and plasters them in sequence — no
                blockwork, no formwork delays, no heavy plant for most walls.
              </p>
              <div className="mt-8 overflow-hidden rounded-sm border border-black/[0.08]">
                <div className="img-frame aspect-[3/2]">
                  <ResponsiveImage image={img.epsInstallWide} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Band>

      {/* Image grid */}
      <Band tone="dark" mid className="section-pad" ariaLabelledby="eps-grid">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow>Product Gallery</Eyebrow>
              <h2 id="eps-grid" className="h-section mt-5 max-w-xl text-white">
                EPS panels in{' '}
                <span className="text-speco">production & use.</span>
              </h2>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {[img.epsWarehouse, img.epsStacked, img.epsMeshFace, img.epsEdgeProfile, img.epsStairHandling, img.epsStairDetail, img.epsInstallWide, img.epsInstallLift].map((im) => (
              <figure key={im.path} className="group overflow-hidden rounded-sm border border-white/[0.08] bg-surface-dark transition-all hover:border-speco/40">
                <div className={`img-frame relative ${im.orientation === 'portrait' ? 'aspect-[3/4]' : 'aspect-[3/2]'} overflow-hidden`}>
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
      <Band tone="dark" className="section-pad relative overflow-hidden" ariaLabelledby="eps-cta">
        <div className="pointer-events-none absolute -right-24 -bottom-24 h-[450px] w-[450px] rounded-full bg-speco/10 blur-[130px]" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden="true" />

        <div className="container-x relative z-10">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Eyebrow>Get Started</Eyebrow>
              <h2 id="eps-cta" className="h-section mt-5 max-w-xl text-white">
                Build smarter{' '}
                <span className="text-speco">with EPS panels.</span>
              </h2>
              <p className="mt-5 text-base leading-[1.7] text-body-ondark/80 md:text-lg">
                Contact our technical sales team for a free BOQ review and project-specific quote. Factory direct from Juba.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <PrimaryButton to="/contact">Request a Quote</PrimaryButton>
                <SecondaryButton to="/gallery">View Case Studies</SecondaryButton>
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
