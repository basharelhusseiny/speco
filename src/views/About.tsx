'use client'

import { HeroVideo } from '@/components/HeroVideo'
import { PrimaryButton, SecondaryButton } from '@/components/Buttons'
import { Band, SectionHead, Split, Eyebrow } from '@/components/Sections'
import { ResponsiveImage } from '@/components/ResponsiveImage'
import { usePageMeta } from '@/hooks/usePageMeta'
import { img, contact } from '@/lib/content'
import { CheckCircle2, Zap, Leaf, Users, ShieldCheck } from 'lucide-react'

const values = [
  {
    title: 'Quality',
    icon: ShieldCheck,
    tag: 'ISO-Aligned Standards',
    copy: 'Unwavering commitment to delivering products and services that meet and exceed international standards, ensuring durability, safety, and long-term performance.',
  },
  {
    title: 'Innovation',
    icon: Zap,
    tag: 'Advanced Building Tech',
    copy: 'Continuous exploration and adoption of the latest advancements in building technology to provide the most efficient, sustainable, and cost-effective solutions.',
  },
  {
    title: 'Sustainability',
    icon: Leaf,
    tag: 'Eco-Responsible',
    copy: 'Dedicated to promoting environmentally responsible construction practices, utilizing materials and methods that reduce ecological impact.',
  },
  {
    title: 'Community',
    icon: Users,
    tag: 'Local Workforce',
    copy: 'Deeply committed to contributing to the social and economic development of South Sudan through job creation, skill transfer, and supporting local initiatives.',
  },
]

const models = [
  {
    title: 'Supply-Only',
    tag: 'Materials · Factory Direct',
    bullets: [
      'Factory-direct pricing from Juba',
      'Delivery across South Sudan',
      'EPS 3D Panels, Sandwich Panels & Roofing',
      'BOQ and technical support included',
    ],
    copy: 'Direct provision of cutting-edge building materials to contractors, developers, and construction companies. Ideal for clients with their own construction teams who require high-quality materials delivered efficiently.',
  },
  {
    title: 'Supply-and-Build',
    tag: 'Full Turnkey Delivery',
    bullets: [
      'End-to-end project management',
      'Local labour & skills transfer',
      'Structural & engineering backing',
      'Transparent project-specific quoting',
    ],
    copy: 'Comprehensive solutions where we supply materials and undertake the building process. Project scope and pricing are always project-specific and quoted separately, ensuring transparency and tailored solutions.',
  },
]

export default function About() {
  usePageMeta({
    title: 'About SPECO Building Technology | Pioneering Construction in South Sudan',
    description:
      'Learn about SPECO Building Technology, founded in 2023 in Juba, South Sudan. Our mission is to revolutionize construction through innovative and sustainable building solutions.',
    path: '/about',
  })

  return (
    <>
      <HeroVideo
        video="about-hero"
        loop
        eyebrow="About SPECO Building Technology"
        titleLines={['Pioneering Modern Construction', { text: 'In South Sudan', className: 'whitespace-nowrap' }]}
        sub="Founded in 2023, SPECO Building Technology is at the forefront of the construction revolution in East Africa — manufacturing locally, building smarter."
      />

      {/* Our Story — Editorial Feature Section */}
      <Band tone="light" className="section-pad" ariaLabelledby="story">
        <div className="container-x">

          {/* Top header row */}
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow tone="light">Our Story</Eyebrow>
              <h2 id="story" className="h-section mt-5 max-w-2xl text-body-dark">
                Founded in Juba,{' '}
                <span className="text-speco-dark">built for South Sudan.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-mutedlight md:text-right">
              Established in 2023, SPECO is the first local manufacturer of advanced EPS and sandwich building panels in South Sudan.
            </p>
          </div>

          {/* Cinematic Image with overlaid stat badges */}
          <div className="relative mt-12 overflow-hidden rounded-sm border border-black/[0.07]">
            <div className="img-frame aspect-[16/7] md:aspect-[21/8] lg:aspect-[21/7]">
              <ResponsiveImage image={img.prefabWarehouseWide} />
            </div>
            {/* Dark gradient overlay for legibility */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background: 'linear-gradient(120deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.2) 55%, rgba(0,0,0,0.45) 100%)',
              }}
            />
            {/* Orange top accent line */}
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-speco via-speco/60 to-transparent" />

            {/* Overlay stat strip — bottom left */}
            <div className="hidden md:flex absolute bottom-5 left-5 right-5  flex-wrap items-end justify-between gap-4 sm:bottom-7 sm:left-7 sm:right-7">
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {[
                  { value: '2023', label: 'Year Founded' },
                  { value: 'Juba', label: 'South Sudan' },
                  { value: '3', label: 'Product Lines' },
                  { value: '1st', label: 'Local EPS Factory' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xs border border-white/20 bg-black/60 px-3 py-2 backdrop-blur-md sm:px-4 sm:py-2.5"
                  >
                    <p className="font-heading text-xl font-bold tabular-nums text-speco sm:text-2xl">
                      {stat.value}
                    </p>
                    <p className="mt-0.5 font-heading text-[10px] font-semibold uppercase tracking-[0.12em] text-white/70">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
              <span className="hidden rounded-xs border border-white/15 bg-black/50 px-3 py-1.5 font-mono text-[11px] text-white/60 backdrop-blur-md sm:block">
                SPECO Prefab Warehouse · Juba
              </span>
            </div>
          </div>

          {/* Editorial body — 2-column split: timeline left, paragraphs right */}
          <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-16">

            {/* Left: numbered milestone timeline */}
            <div className="space-y-8">
              {[
                {
                  year: '2022',
                  title: 'The Vision',
                  copy: 'Founding team identifies a critical gap: South Sudan has no local manufacturer of EPS or prefabricated sandwich panels, forcing costly imports.',
                },
                {
                  year: '2023',
                  title: 'Factory Launched',
                  copy: 'SPECO opens its first production facility in Juba — South Sudan\'s first EPS 3D panel and sandwich panel manufacturing plant.',
                },
                {
                  year: '2024',
                  title: 'First Projects Delivered',
                  copy: 'Landmark projects completed: H Brothers G+6 Tower in Katoor and MSF South Sudan warehouse in Tujur — proof on the ground.',
                },
                {
                  year: '2025+',
                  title: 'Regional Expansion',
                  copy: 'Extending supply reach and building the next generation of South Sudanese construction engineers and site teams.',
                },
              ].map((m, i) => (
                <div key={m.year} className="group relative flex gap-5">
                  {/* Vertical connector line */}
                  {i < 3 && (
                    <div className="absolute left-[19px] top-10 h-[calc(100%+2rem)] w-[2px] bg-black/[0.06]" />
                  )}
                  {/* Circle node */}
                  <div className="relative mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-speco/30 bg-white shadow-sm transition-all duration-300 group-hover:border-speco group-hover:bg-speco">
                    <span className="font-heading text-[10px] font-bold text-speco transition-colors group-hover:text-white">
                      {m.year.slice(-2)}
                    </span>
                  </div>
                  <div className="pb-2">
                    <div className="flex flex-wrap items-baseline gap-2">
                      <span className="font-heading text-xs font-semibold uppercase tracking-[0.12em] text-speco-dark">
                        {m.year}
                      </span>
                      <h3 className="font-heading text-base font-bold text-body-dark">
                        {m.title}
                      </h3>
                    </div>
                    <p className="mt-1.5 text-sm leading-[1.7] text-mutedlight">{m.copy}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: editorial paragraphs + credentials */}
            <div className="flex flex-col justify-center">
              <div className="space-y-5 text-base leading-[1.75] text-mutedlight">
                <p>
                  SPECO Building Technology was founded in 2023 in Juba, South Sudan, with a clear vision: to
                  revolutionize the construction industry in the region. Recognizing the immense potential for growth
                  and the critical need for modern, efficient, and sustainable building practices, we set out to
                  introduce advanced construction materials and services that would elevate the standards of
                  infrastructure development across the nation.
                </p>
                <p>
                  The construction industry in South Sudan is experiencing a transformative phase. As the nation
                  rebuilds and modernizes, there is a growing demand for innovative building materials that offer
                  durability, efficiency, and cost-effectiveness. The introduction of advanced construction
                  technologies is crucial in addressing the housing deficit, enhancing infrastructure, and supporting
                  economic growth.
                </p>
              </div>

              {/* Pull quote */}
              <blockquote className="mt-8 border-l-[3px] border-speco pl-5">
                <p className="font-heading text-lg font-semibold leading-snug text-body-dark">
                  &ldquo;We didn&rsquo;t just build a factory — we built South Sudan&rsquo;s first EPS production line, so every structure raised here is made from materials engineered right here.&rdquo;
                </p>
                <footer className="mt-3 font-heading text-xs font-semibold uppercase tracking-[0.1em] text-speco-dark">
                  — Eng. Hanibal Yohannes, Managing Director
                </footer>
              </blockquote>

              {/* Credential tags */}
              <div className="mt-8 flex flex-wrap gap-2.5">
                {['First Local EPS Manufacturer', 'Juba Factory · Est. 2023', 'Turnkey & Supply-Only'].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 rounded-xs border border-black/[0.08] bg-surface-light px-3 py-1 font-heading text-xs font-semibold uppercase tracking-[0.1em] text-body-dark transition-colors hover:border-speco/30 hover:bg-white"
                  >
                    <span className="h-1 w-1 rounded-full bg-speco" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </Band>

      {/* Mission & Vision */}
      <Band tone="dark" className="section-pad relative overflow-hidden" ariaLabelledby="mission">
        <div className="pointer-events-none absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-speco/[0.08] blur-[120px]" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden="true" />

        <div className="container-x relative z-10">
          <Eyebrow>Mission &amp; Vision</Eyebrow>
          <h2 id="mission" className="sr-only">Mission and Vision</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="group relative overflow-hidden rounded-sm border border-white/[0.08] bg-surface-dark p-7 transition-all duration-300 hover:border-speco/40 md:p-9">
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-speco/30 via-speco to-speco/30" />
              <div className="absolute -right-8 -bottom-8 h-28 w-28 rounded-full bg-speco/[0.05] blur-2xl transition-all duration-500 group-hover:bg-speco/10" />
              <span className="font-heading text-xs font-semibold uppercase tracking-[0.14em] text-speco">Mission</span>
              <h3 className="mt-3 font-heading text-2xl font-bold leading-snug text-white">Build smarter.<br />Build together.</h3>
              <p className="mt-4 text-base leading-[1.7] text-body-ondark/75">
                To provide superior building solutions that meet the evolving needs of the construction industry in
                South Sudan, offering innovative products and services that ensure sustainability, efficiency, and affordability.
              </p>
              <div className="mt-7 space-y-2.5">
                {['Locally manufactured materials', 'Transparent project pricing', 'Skills transfer on every build'].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-sm text-body-ondark/70">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-speco" aria-hidden="true" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-sm border border-white/[0.08] bg-surface-dark p-7 transition-all duration-300 hover:border-white/20 md:p-9">
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-white/5 via-white/20 to-white/5" />
              <div className="absolute -right-8 -bottom-8 h-28 w-28 rounded-full bg-white/[0.03] blur-2xl transition-all duration-500 group-hover:bg-white/[0.06]" />
              <span className="font-heading text-xs font-semibold uppercase tracking-[0.14em] text-white/60">Vision</span>
              <h3 className="mt-3 font-heading text-2xl font-bold leading-snug text-white">Lead. Transform.<br />Elevate South Sudan.</h3>
              <p className="mt-4 text-base leading-[1.7] text-body-ondark/75">
                To lead the transformation of South Sudan's construction landscape through innovative and sustainable
                building solutions, contributing to the country's infrastructural development and economic growth.
              </p>
              <div className="mt-7 space-y-2.5">
                {['Regional construction leader', 'Modern infrastructure standards', 'Long-term economic contribution'].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-sm text-body-ondark/70">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-white/40" aria-hidden="true" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Band>

      {/* Core Values */}
      <Band tone="light" className="section-pad" ariaLabelledby="values">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow tone="light">Core Values</Eyebrow>
              <h2 id="values" className="h-section mt-5 max-w-xl text-body-dark">
                What we hold <span className="text-speco-dark">ourselves to.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-mutedlight md:text-right">
              These principles guide every product we manufacture, every project we deliver, and every team we train.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {values.map((v, i) => {
              const Icon = v.icon
              return (
                <div
                  key={v.title}
                  className="group relative overflow-hidden rounded-sm border border-black/[0.07] bg-surface-light p-7 transition-all duration-300 hover:border-speco/30 hover:bg-white hover:shadow-[0_16px_40px_-12px_rgba(0,0,0,0.07)]"
                >
                  <div className="absolute left-0 top-0 h-[2px] w-10 bg-speco transition-all duration-500 ease-out group-hover:w-full" />
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-sm bg-speco/10 text-speco transition-colors duration-300 group-hover:bg-speco group-hover:text-white">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <span className="font-heading text-xs font-semibold tabular-nums text-speco-dark/60">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="mt-4">
                    <div className="flex flex-wrap items-baseline gap-2">
                      <h3 className="font-heading text-xl font-bold text-body-dark transition-colors group-hover:text-speco-dark">
                        {v.title}
                      </h3>
                      <span className="rounded-full border border-speco/20 bg-speco/[0.07] px-2 py-0.5 font-heading text-[10px] font-semibold uppercase tracking-wider text-speco-dark">
                        {v.tag}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-[1.7] text-mutedlight">{v.copy}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Band>

      {/* How We Work */}
      <Band tone="dark" className="section-pad relative overflow-hidden" ariaLabelledby="how-we-work">
        <div className="pointer-events-none absolute -right-24 -top-24 h-[400px] w-[400px] rounded-full bg-speco/[0.08] blur-[100px]" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden="true" />

        <div className="container-x relative z-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow>How We Work</Eyebrow>
              <h2 id="how-we-work" className="h-section mt-5 max-w-xl text-white">
                Two ways to build <span className="text-speco">with SPECO.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-body-ondark/60 md:text-right">
              Choose the engagement model that fits your project. Both come with factory-direct quality and full technical support.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {models.map((m, idx) => (
              <div
                key={m.title}
                className="group relative overflow-hidden rounded-sm border border-white/[0.08] bg-surface-dark p-7 transition-all duration-300 hover:border-speco/40 md:p-9"
              >
                <div className={`absolute inset-x-0 top-0 h-[2px] ${idx === 0 ? 'bg-gradient-to-r from-speco/30 via-speco to-speco/30' : 'bg-gradient-to-r from-white/5 via-white/20 to-white/5'}`} />
                <div className="flex items-start justify-between">
                  <span className={`rounded-xs px-2.5 py-1 font-heading text-[11px] font-semibold uppercase tracking-[0.1em] ${idx === 0 ? 'border border-speco/25 bg-speco/10 text-speco' : 'border border-white/15 bg-white/[0.04] text-white/70'}`}>
                    {m.tag}
                  </span>
                  <span className="font-heading text-xs font-semibold tabular-nums text-white/30">0{idx + 1}</span>
                </div>
                <h3 className="mt-5 font-heading text-2xl font-bold text-white">{m.title}</h3>
                <p className="mt-3 text-sm leading-[1.7] text-body-ondark/65">{m.copy}</p>
                <ul className="mt-6 space-y-2.5 border-t border-white/[0.07] pt-5">
                  {m.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2.5 text-sm text-body-ondark/75">
                      <CheckCircle2 className={`h-4 w-4 shrink-0 ${idx === 0 ? 'text-speco' : 'text-white/40'}`} aria-hidden="true" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Band>

      {/* Team */}
      <Band tone="light" className="section-pad" ariaLabelledby="team">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow tone="light">Our Team</Eyebrow>
              <h2 id="team" className="h-section mt-5 max-w-xl text-body-dark">
                The people <span className="text-speco-dark">behind SPECO.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-mutedlight md:text-right">
              Factory operators, engineers, and installation crews. Every project transfers skills to South Sudanese teams, because that is part of what we deliver.
            </p>
          </div>

          <figure className="mt-12 overflow-hidden rounded-sm border border-black/[0.08] bg-surface-light transition-all duration-300 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)]">
            <div className="img-frame relative aspect-[16/9] overflow-hidden md:aspect-[21/9]">
              <ResponsiveImage image={img.team} />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            <figcaption className="flex flex-wrap items-center justify-between gap-2 border-t border-black/[0.06] px-6 py-4 text-sm text-mutedlight">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-speco" />
                {img.team.caption}
              </span>
              <span className="font-heading text-xs font-semibold uppercase tracking-[0.08em] text-body-dark">
                Eng. Hanibal Yohannes — Managing Director
              </span>
            </figcaption>
          </figure>
        </div>
      </Band>

      {/* CTA */}
      <Band tone="dark" className="section-pad relative overflow-hidden" ariaLabelledby="about-cta">
        <div className="pointer-events-none absolute -right-24 -bottom-24 h-[450px] w-[450px] rounded-full bg-speco/10 blur-[130px]" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden="true" />

        <div className="container-x relative z-10">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Eyebrow>Start Your Project</Eyebrow>
              <h2 id="about-cta" className="h-section mt-5 max-w-xl text-white">
                {"Let's"} <span className="text-speco">build together.</span>
              </h2>
              <p className="mt-5 max-w-xl text-base leading-[1.7] text-body-ondark/80 md:text-lg">
                {"Whether you're a developer, contractor, or government agency, SPECO's"} factory team is ready to review your project needs and deliver a transparent quote.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <PrimaryButton to="/contact">Contact Us Today</PrimaryButton>
                <SecondaryButton to="/gallery">View Our Projects</SecondaryButton>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-white/[0.08] pt-6 text-xs text-body-ondark/60">
                {['Free BOQ & Structural Assessment', 'Factory Direct · Juba', 'Local Labour & Skills Transfer'].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-speco" aria-hidden="true" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-sm border border-white/[0.1] bg-surface-dark/90 p-7 shadow-2xl shadow-black/70 backdrop-blur-md sm:p-8">
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-speco/40 via-speco to-speco/40" />
                <div className="flex items-center justify-between">
                  <span className="font-heading text-xs font-semibold uppercase tracking-[0.14em] text-speco">Quick Contact</span>
                  <span className="flex h-2 w-2 rounded-full bg-emerald-500" title="Open for inquiries" />
                </div>
                <h3 className="mt-3 font-heading text-lg font-semibold text-white">Talk to our team today</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-body-ondark/60">
                  Our engineering and sales teams are available for direct inquiries from Juba.
                </p>
                <div className="mt-5 space-y-3 border-t border-white/[0.08] pt-4">
                  <a href={contact.phoneHref} className="group flex items-center gap-3 rounded-xs border border-white/[0.06] bg-white/[0.02] p-3 transition-colors hover:border-speco/40 hover:bg-white/[0.05]">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-speco/15 font-heading text-xs font-bold text-speco">☎</div>
                    <div>
                      <span className="block text-[10px] font-medium uppercase tracking-wider text-body-ondark/50">Call Direct</span>
                      <span className="font-heading text-sm font-semibold text-white transition-colors group-hover:text-speco">{contact.phoneDisplay}</span>
                    </div>
                  </a>
                  <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 rounded-xs border border-white/[0.06] bg-white/[0.02] p-3 transition-colors hover:border-emerald-500/40 hover:bg-white/[0.05]">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-emerald-500/15 font-heading text-xs font-bold text-emerald-400">WA</div>
                    <div>
                      <span className="block text-[10px] font-medium uppercase tracking-wider text-body-ondark/50">WhatsApp</span>
                      <span className="font-heading text-sm font-semibold text-white transition-colors group-hover:text-emerald-400">Instant Project Support</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Band>
    </>
  )
}
