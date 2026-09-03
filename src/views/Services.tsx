'use client'

import { HeroVideo } from '@/components/HeroVideo'
import { PrimaryButton, SecondaryButton } from '@/components/Buttons'
import { Band, Eyebrow, SectionHead } from '@/components/Sections'
import { usePageMeta } from '@/hooks/usePageMeta'
import { contact } from '@/lib/content'
import { Package, Wrench, Building2, ClipboardList, GraduationCap, CheckCircle2, ArrowUpRight } from 'lucide-react'

const services = [
  {
    title: 'Material Supply',
    icon: Package,
    tag: 'Factory Direct',
    highlights: ['EPS 3D Wall Panels', 'Sandwich Wall & Roof Panels', 'Roofing Iron Sheets', 'Delivery across South Sudan'],
    copy: 'Direct provision of high-quality building materials including EPS 3D Wall Panels, Sandwich Panels, and Roofing Iron Sheets to contractors, developers, and construction companies. Efficient delivery across South Sudan.',
  },
  {
    title: 'Professional Installation',
    icon: Wrench,
    tag: 'Trained Crews',
    highlights: ['Certified install teams', 'Adherence to spec', 'Site safety standards', 'Completion sign-off'],
    copy: 'Expert installation of EPS 3D Wall Panels and Sandwich Panels by trained and experienced teams, ensuring optimal performance and adherence to specifications.',
  },
  {
    title: 'Design & Build / Turnkey',
    icon: Building2,
    tag: 'Full Delivery',
    highlights: ['Concept to handover', 'Engineering & design', 'Procurement & logistics', 'Final quality assurance'],
    copy: 'Comprehensive project execution from initial design and planning through to construction and final handover. We manage all aspects of the project, providing a seamless and efficient experience for our clients.',
  },
  {
    title: 'Project Management',
    icon: ClipboardList,
    tag: 'On Schedule',
    highlights: ['Timeline oversight', 'Budget adherence', 'Multi-trade coordination', 'Quality control at every stage'],
    copy: 'Professional oversight and coordination of construction projects, ensuring timely completion, budget adherence, and quality control at every stage.',
  },
  {
    title: 'Consulting & Training',
    icon: GraduationCap,
    tag: 'Skills Transfer',
    highlights: ['Material selection advice', 'Sustainable build practices', 'Local team training', 'Installation methodology'],
    copy: 'Expert advice on material selection, construction methodologies, and sustainable building practices. Training programs for local teams on the proper handling and installation of advanced building systems.',
  },
]

export default function Services() {
  usePageMeta({
    title: 'Construction Services | Supply, Installation, Design & Build | SPECO Building Technology',
    description:
      'Beyond materials, SPECO offers installation, design and build, project management, consulting, and training services for construction projects across South Sudan.',
    path: '/services',
  })

  return (
    <>
      <HeroVideo
        video="services-hero"
        align="left"
        eyebrow="SPECO Services · South Sudan"
        titleLines={['End-to-End Construction Services']}
        sub="From material supply to complete project delivery. Professional services to support your project from conception to completion."
      >
        <PrimaryButton to="/contact">Contact Us</PrimaryButton>
        <SecondaryButton to="/gallery">View Projects</SecondaryButton>
      </HeroVideo>

      {/* Services list */}
      <Band tone="light" className="section-pad" ariaLabelledby="services-list">
        <div className="container-x">
          {/* Header */}
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow tone="light">Our Services</Eyebrow>
              <h2 id="services-list" className="h-section mt-5 max-w-xl text-body-dark">
                Five services.{' '}
                <span className="text-speco-dark">One accountable team.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-mutedlight md:text-right">
              Engage SPECO for materials only, or hand us the whole project — from foundation to final handover.
            </p>
          </div>

          {/* Service rows */}
          <ol className="mt-14 space-y-5">
            {services.map((s, i) => {
              const Icon = s.icon
              return (
                <li
                  key={s.title}
                  className="group relative overflow-hidden rounded-sm border border-black/[0.07] bg-surface-light transition-all duration-300 hover:border-speco/30 hover:bg-white hover:shadow-[0_16px_40px_-12px_rgba(0,0,0,0.07)]"
                >
                  {/* Animated left accent bar */}
                  <div className="absolute inset-y-0 left-0 w-[3px] bg-speco scale-y-0 transition-transform duration-300 origin-top group-hover:scale-y-100" />
                  {/* Orange top line for first item always visible */}
                  <div className="absolute inset-x-0 top-0 h-[2px] w-12 bg-speco transition-all duration-500 group-hover:w-full" />

                  <div className="grid gap-6 p-6 md:grid-cols-[72px_1fr_1fr] md:gap-8 md:p-8 lg:grid-cols-[80px_240px_1fr_auto] lg:gap-10">
                    {/* Number */}
                    <div className="flex items-start">
                      <span className="font-heading text-4xl font-bold tabular-nums text-speco/25 transition-colors duration-300 group-hover:text-speco-dark/60 lg:text-5xl">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Title + icon + tag */}
                    <div>
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-speco/10 text-speco transition-all duration-300 group-hover:bg-speco group-hover:text-white">
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </div>
                        <span className="rounded-full border border-speco/20 bg-speco/[0.07] px-2 py-0.5 font-heading text-[10px] font-semibold uppercase tracking-wider text-speco-dark">
                          {s.tag}
                        </span>
                      </div>
                      <h3 className="mt-4 font-heading text-xl font-bold text-body-dark transition-colors group-hover:text-speco-dark md:text-2xl">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-sm leading-[1.7] text-mutedlight lg:hidden">{s.copy}</p>
                    </div>

                    {/* Copy — hidden on mobile, shown on lg */}
                    <div className="hidden lg:block">
                      <p className="text-base leading-[1.7] text-mutedlight">{s.copy}</p>
                    </div>

                    {/* Highlights */}
                    <div className="md:col-span-2 lg:col-span-1">
                      <ul className="space-y-2">
                        {s.highlights.map((h) => (
                          <li key={h} className="flex items-center gap-2 text-sm text-body-dark/70">
                            <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-speco/60 transition-colors group-hover:text-speco" aria-hidden="true" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </Band>

      {/* CTA */}
      <Band tone="dark" className="section-pad relative overflow-hidden" ariaLabelledby="services-cta">
        <div className="pointer-events-none absolute -right-24 -bottom-24 h-[450px] w-[450px] rounded-full bg-speco/10 blur-[130px]" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden="true" />

        <div className="container-x relative z-10">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Eyebrow>Start a Project</Eyebrow>
              <h2 id="services-cta" className="h-section mt-5 max-w-xl text-white">
                {"Let's"}{' '}
                <span className="text-speco">work together.</span>
              </h2>
              <p className="mt-5 text-base leading-[1.7] text-body-ondark/80 md:text-lg">
                Whether you need materials, installation, or complete project management, our team is ready to help.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <PrimaryButton to="/contact">Contact Us Today</PrimaryButton>
                <SecondaryButton to="/about">Learn About SPECO</SecondaryButton>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-white/[0.08] pt-6 text-xs text-body-ondark/60">
                {['Free Project Consultation', 'Factory Direct · Juba', 'End-to-End or Supply-Only'].map((item) => (
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
                  <span className="font-heading text-xs font-semibold uppercase tracking-[0.14em] text-speco">
                    Quick Contact
                  </span>
                  <span className="flex h-2 w-2 rounded-full bg-emerald-500" title="Open for inquiries" />
                </div>

                <h3 className="mt-3 font-heading text-lg font-semibold text-white">
                  Talk to our team today
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-body-ondark/60">
                  Our engineering and sales teams are available for direct project inquiries from Juba.
                </p>

                <div className="mt-5 space-y-3 border-t border-white/[0.08] pt-4">
                  <a
                    href={contact.phoneHref}
                    className="group flex items-center gap-3 rounded-xs border border-white/[0.06] bg-white/[0.02] p-3 transition-colors hover:border-speco/40 hover:bg-white/[0.05]"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-speco/15 font-heading text-xs font-bold text-speco">☎</div>
                    <div>
                      <span className="block text-[10px] font-medium uppercase tracking-wider text-body-ondark/50">Call Direct</span>
                      <span className="font-heading text-sm font-semibold text-white transition-colors group-hover:text-speco">{contact.phoneDisplay}</span>
                    </div>
                  </a>
                  <a
                    href={contact.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-xs border border-white/[0.06] bg-white/[0.02] p-3 transition-colors hover:border-emerald-500/40 hover:bg-white/[0.05]"
                  >
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
