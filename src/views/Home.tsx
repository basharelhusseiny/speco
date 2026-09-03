"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Zap,
  TrendingDown,
  ShieldCheck,
  Leaf,
  CheckCircle2,
  MapPin,
  Phone,
} from "lucide-react";
import { HeroVideo, VideoBand } from "@/components/HeroVideo";
import { PrimaryButton, SecondaryButton } from "@/components/Buttons";
import { Band, Eyebrow, SectionHead } from "@/components/Sections";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { WhatsAppIcon } from "@/components/SocialIcons";
import { usePageMeta } from "@/hooks/usePageMeta";
import { img, hBrothersImages, msfTujurImages, contact } from "@/lib/content";

const stats = [
  { value: "2023", label: "Founded" },
  { value: "Juba", label: "South Sudan" },
  { value: "3", label: "Product categories" },
  { value: "Juba & Region", label: "Projects delivered" },
];

const pillars = [
  {
    number: "01",
    title: "Speed & Efficiency",
    tag: "Up to 50% Faster",
    copy: "Advanced building technologies including EPS 3D Wall Panels and Sandwich Panels significantly reduce construction timelines, enabling faster project completion without compromising quality.",
    icon: Zap,
  },
  {
    number: "02",
    title: "Cost Effectiveness",
    tag: "Optimized Economics",
    copy: "Modern materials and streamlined processes optimize resource utilization and minimize waste, leading to substantial cost savings across every project.",
    icon: TrendingDown,
  },
  {
    number: "03",
    title: "Uncompromising Quality",
    tag: "Certified Standards",
    copy: "International standards in production and execution ensure durability, structural integrity, and long-term performance on every build.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Sustainable Solutions",
    tag: "Thermal & Eco-Efficient",
    copy: "Energy-efficient and environmentally friendly building technologies promote sustainable development while reducing environmental impact.",
    icon: Leaf,
  },
];

const featured = [
  {
    to: "/products/eps-panels",
    image: img.epsEdgeProfile,
    badge: "Category Pioneer",
    category: "Wall & Slab Systems",
    title: "EPS 3D Wall Panels",
    copy: "Lightweight, high-strength panels that form monolithic, load-bearing structures with exceptional insulation.",
    specs: ["Thermal & Acoustic", "Load-Bearing Wire Mesh", "Rapid Assembly"],
  },
  {
    to: "/products/prefab-panels",
    image: img.prefabCorner,
    badge: "Local Manufacturing",
    category: "Composite Panels",
    title: "Sandwich Wall & Roof Panels",
    copy: "Engineered composite panels with pre-painted galvanized facings, manufactured in Juba.",
    specs: [
      "EPS / Rockwool Core",
      "Pre-painted Galvanized",
      "Zero Import Delays",
    ],
  },
  {
    to: "/products/prefab-panels#roofing",
    image: img.prefabRoofInsulated,
    badge: "Engineered in Juba",
    category: "Complete Roofing",
    title: "Roofing Iron Sheets & Accessories",
    copy: "Durable roofing sheets and a complete range of accessories for a secure, watertight installation.",
    specs: ["Trapeze & Corrugated", "Watertight Trims", "Custom Cut Lengths"],
  },
];

const proof = [
  {
    image: hBrothersImages[10], // 11-completed
    name: "H Brothers G+6 Tower",
    place: "Katoor, Juba",
    category: "Commercial Multi-Storey",
    scope: "EPS 3D Wall Panels · 6 Floors Monolithic Structure",
    tag: "Landmark Project",
  },
  {
    image: msfTujurImages[4], // 03-roof-panel-lift
    name: "MSF South Sudan Warehouse",
    place: "Tujur, Southern Kordofan",
    category: "Logistics & Humanitarian",
    scope: "Insulated Sandwich Panels · Turnkey Roof & Wall Erection",
    tag: "Humanitarian Facility",
  },
];

export default function Home() {
  usePageMeta({
    title:
      "SPECO Building Technology | South Sudan's First Building Materials Factory",
    description:
      "SPECO Building Technology is South Sudan's first building materials factory. EPS panels, sandwich panels, and roofing solutions engineered for speed, built for durability.",
    path: "/",
    keywords:
      "construction materials South Sudan, EPS panels Juba, sandwich panels, prefab building, roofing sheets South Sudan, building materials factory, SPECO",
  });

  return (
    <>
      <HeroVideo
        video="home-hero"
        titleLines={["South Sudan's", "First Building Materials Factory"]}
        tagline="Shaping The Future Of Building In South Sudan"
      >
        <PrimaryButton to="/products/eps-panels">
          Explore Our Products
        </PrimaryButton>
        <SecondaryButton to="/contact">Get a Quote</SecondaryButton>
      </HeroVideo>

      {/* Stats bar */}
      <Band tone="dark" mid ariaLabelledby="stats">
        <h2 id="stats" className="sr-only">
          SPECO at a glance
        </h2>
        <div className="container-x grid grid-cols-2 gap-y-10 py-12 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="border-l-2 border-speco pl-5">
              <p className="font-heading text-3xl font-bold tabular-nums text-speco md:text-4xl">
                {s.value}
              </p>
              <p className="mt-1 font-heading text-xs font-medium uppercase tracking-[0.12em] text-body-ondark/60">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </Band>

      {/* Why Choose SPECO */}
      <Band tone="light" className="section-pad" ariaLabelledby="why-speco">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow tone="light">Why Choose SPECO</Eyebrow>
              <h2
                id="why-speco"
                className="h-section mt-5 max-w-2xl text-body-dark"
              >
                Built for how construction{" "}
                <span className="text-speco-dark">actually works</span> here.
              </h2>
            </div>
            <p className="max-w-md text-base leading-[1.65] text-mutedlight">
              Engineered locally in Juba to eliminate supply chain bottlenecks,
              reduce structural weight, and withstand South Sudan's demanding
              climate.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:gap-8">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-sm border border-black/[0.08] bg-surface-light/70 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-speco/40 hover:bg-white hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.07)] md:p-8"
                >
                  {/* Animated top accent line */}
                  <div className="absolute left-0 top-0 h-[2px] w-12 bg-speco transition-all duration-500 ease-out-expo group-hover:w-full" />

                  <div>
                    {/* Header with Icon, Number, Tag */}
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-sm border border-black/[0.08] bg-white text-speco-dark transition-colors duration-300 group-hover:border-speco group-hover:bg-speco group-hover:text-white group-hover:shadow-md group-hover:shadow-speco/20">
                          <Icon
                            className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                            aria-hidden="true"
                          />
                        </div>
                        <span className="font-heading text-xs font-semibold uppercase tracking-[0.14em] text-speco-dark">
                          Pillar {p.number}
                        </span>
                      </div>
                      <span className="rounded-full border border-black/[0.06] bg-white px-3 py-1 text-[11px] font-medium text-body-dark/70 shadow-2xs">
                        {p.tag}
                      </span>
                    </div>

                    <h3 className="mt-6 font-heading text-xl font-semibold text-body-dark transition-colors duration-200 group-hover:text-speco-dark">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-base leading-[1.65] text-mutedlight">
                      {p.copy}
                    </p>
                  </div>

                  {/* Card bottom indicator line */}
                  <div className="mt-8 flex items-center gap-2 border-t border-black/[0.06] pt-4 text-xs font-medium text-mutedlight transition-colors group-hover:text-body-dark">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-speco" />
                    <span>Engineered in South Sudan</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Reassurance verification bar */}
          <div className="mt-12 grid grid-cols-1 divide-y divide-black/[0.06] border-y border-black/[0.08] bg-white sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            <div className="flex items-center gap-3.5 py-4 px-4 sm:px-6">
              <CheckCircle2
                className="h-5 w-5 shrink-0 text-speco-dark"
                aria-hidden="true"
              />
              <span className="font-heading text-xs font-semibold uppercase tracking-wider text-body-dark">
                100% Manufactured in Juba
              </span>
            </div>
            <div className="flex items-center gap-3.5 py-4 px-4 sm:px-6">
              <CheckCircle2
                className="h-5 w-5 shrink-0 text-speco-dark"
                aria-hidden="true"
              />
              <span className="font-heading text-xs font-semibold uppercase tracking-wider text-body-dark">
                Structural & Engineering Backing
              </span>
            </div>
            <div className="flex items-center gap-3.5 py-4 px-4 sm:px-6">
              <CheckCircle2
                className="h-5 w-5 shrink-0 text-speco-dark"
                aria-hidden="true"
              />
              <span className="font-heading text-xs font-semibold uppercase tracking-wider text-body-dark">
                Full Turnkey Installation Available
              </span>
            </div>
          </div>
        </div>
      </Band>

      {/* Featured products */}
      <Band
        tone="dark"
        className="section-pad"
        ariaLabelledby="featured-products"
      >
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow>Our Products</Eyebrow>
              <h2
                id="featured-products"
                className="h-section mt-5 max-w-2xl text-white"
              >
                Three product categories.{" "}
                <span className="text-speco">One factory in Juba.</span>
              </h2>
            </div>
            <p className="max-w-md text-base leading-[1.65] text-body-ondark/75">
              Every product is manufactured locally in South Sudan, engineered
              for high thermal performance, and backed by specialized SPECO
              installation teams.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {featured.map((f, i) => (
              <Link
                key={f.title}
                href={f.to}
                className="card-lift group relative flex flex-col justify-between overflow-hidden rounded-sm border border-white/[0.08] bg-surface-dark transition-all duration-300 hover:border-speco/40 hover:shadow-[0_20px_50px_-15px_rgba(241,94,34,0.12)]"
              >
                {/* Subtle top ambient glow line */}
                <div className="absolute inset-x-0 top-0 z-20 h-[2px] bg-gradient-to-r from-transparent via-speco to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div>
                  {/* Image frame with badge overlay and subtle bottom gradient fade */}
                  <div className="img-frame relative aspect-[4/3] w-full overflow-hidden bg-black/40">
                    <ResponsiveImage image={f.image} />
                    {/* Dark gradient fade over bottom of image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-transparent to-black/30 pointer-events-none" />

                    {/* Top Badges */}
                    <div className="absolute left-4 top-4 z-10 flex items-center gap-2">
                      <span className="rounded-sm border border-white/15 bg-black/75 px-2.5 py-1 font-heading text-[11px] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-md">
                        {f.badge}
                      </span>
                    </div>

                    <div className="absolute right-4 top-4 z-10">
                      <span className="font-heading text-xs font-semibold tabular-nums text-white/50">
                        0{i + 1} / 03
                      </span>
                    </div>
                  </div>

                  {/* Content area */}
                  <div className="p-6 md:p-7">
                    <p className="font-heading text-xs font-semibold uppercase tracking-[0.14em] text-speco">
                      {f.category}
                    </p>
                    <h3 className="mt-2 font-heading text-xl font-semibold text-white transition-colors duration-200 group-hover:text-speco">
                      {f.title}
                    </h3>
                    <p className="mt-3 text-sm leading-[1.65] text-body-ondark/70">
                      {f.copy}
                    </p>

                    {/* Technical Specs Tags */}
                    <div className="mt-6 flex flex-wrap gap-1.5">
                      {f.specs.map((spec) => (
                        <span
                          key={spec}
                          className="rounded-xs border border-white/[0.07] bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-body-ondark/80 transition-colors group-hover:border-white/15"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Card Footer with Animated CTA */}
                <div className="mx-6 mb-6 flex items-center justify-between border-t border-white/[0.08] pt-4 md:mx-7 md:mb-7">
                  <span className="font-heading text-xs font-semibold uppercase tracking-[0.12em] text-white/60 transition-colors group-hover:text-white">
                    Explore Specifications
                  </span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/60 transition-all duration-300 group-hover:border-speco group-hover:bg-speco group-hover:text-white group-hover:shadow-md group-hover:shadow-speco/30">
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Band>

      {/* Local labour feature — caption top left (frame composed clear there) */}
      <Band tone="dark" ariaLabelledby="labour-heading" className="relative">
        <div className="relative h-[92svh] min-h-[640px] overflow-hidden sm:h-[80svh] sm:min-h-[500px]">
          <VideoBand
            video="labour-feature"
            labelledBy="labour-heading"
            className="object-[center_bottom] sm:object-[center_top]"
          />
          <div
            className="absolute inset-0"
            aria-hidden="true"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 38%, rgba(0,0,0,0.05) 60%, rgba(0,0,0,0.25) 100%)",
            }}
          />
          <div className="container-x relative z-10 pt-6 sm:pt-12 md:pt-16">
            <div className="max-w-xl">
              <Eyebrow>Built Locally</Eyebrow>
              <h2
                id="labour-heading"
                className="h-section mt-3 text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white"
              >
                Built by <span className="text-speco">local</span> hands
              </h2>
              <p className="mt-3 max-w-lg text-sm sm:text-base md:text-lg leading-relaxed text-white/90">
                Every SPECO project trains and employs South Sudanese teams.
                Skills transfer is part of what we deliver.
              </p>

              {/* Glassmorphic feature tags */}
              <div className="mt-4 flex flex-wrap items-center gap-2 sm:gap-3">
                <div className="flex items-center gap-1.5 rounded-xs border border-white/15 bg-black/40 px-2.5 py-1 text-[11px] sm:px-3 sm:py-1.5 sm:text-xs backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-speco" />
                  <span className="font-heading font-medium uppercase tracking-[0.08em] text-white/90">
                    100% Local Workforce
                  </span>
                </div>
                <div className="flex items-center gap-1.5 rounded-xs border border-white/15 bg-black/40 px-2.5 py-1 text-[11px] sm:px-3 sm:py-1.5 sm:text-xs backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-speco" />
                  <span className="font-heading font-medium uppercase tracking-[0.08em] text-white/90">
                    Skills Transfer On Every Build
                  </span>
                </div>
              </div>

              {/* CTA Link */}
              <div className="mt-5 sm:mt-7">
                <Link
                  href="/about"
                  className="link-underline inline-flex items-center gap-2 font-heading text-xs font-semibold uppercase tracking-[0.14em] text-speco transition-colors hover:text-white"
                >
                  <span>Learn about our mission and team</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Band>

      {/* Proof strip */}
      <Band tone="light" className="section-pad" ariaLabelledby="proof">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow tone="light">Selected Work</Eyebrow>
              <h2
                id="proof"
                className="h-section mt-5 max-w-2xl text-body-dark"
              >
                Proof on the <span className="text-speco-dark">ground.</span>
              </h2>
            </div>
            <div className="flex flex-col items-start gap-3 md:items-end">
              <p className="max-w-md text-base leading-[1.65] text-mutedlight md:text-right">
                Real structures engineered and delivered across Juba and the
                region using SPECO EPS and sandwich panels.
              </p>
              <Link
                href="/gallery"
                className="link-underline inline-flex items-center gap-2 font-heading text-xs font-semibold uppercase tracking-[0.14em] text-speco-dark transition-colors hover:text-speco"
              >
                <span>Explore Full Project Gallery</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {proof.map((p) => (
              <Link
                key={p.name}
                href="/gallery"
                className="card-lift group relative flex flex-col justify-between overflow-hidden rounded-sm border border-black/[0.08] bg-surface-light transition-all duration-300 hover:border-speco/40 hover:bg-white hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)]"
              >
                {/* Animated top accent bar */}
                <div className="absolute left-0 top-0 z-20 h-[2px] w-12 bg-speco transition-all duration-500 ease-out-expo group-hover:w-full" />

                <div>
                  <div
                    className={`img-frame relative ${p.image.orientation === "portrait" ? "aspect-[4/5] md:aspect-[4/3]" : "aspect-[4/3]"} overflow-hidden bg-black/10`}
                  >
                    <ResponsiveImage image={p.image} />
                    {/* Dark gradient overlay at bottom of image */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                    {/* Category badge */}
                    <div className="absolute left-4 top-4 z-10">
                      <span className="rounded-xs border border-white/20 bg-black/70 px-3 py-1 font-heading text-[11px] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-md">
                        {p.category}
                      </span>
                    </div>

                    <div className="absolute right-4 top-4 z-10">
                      <span className="rounded-full border border-black/10 bg-white/90 px-2.5 py-0.5 font-heading text-[10px] font-medium uppercase tracking-wider text-body-dark shadow-2xs backdrop-blur-sm">
                        {p.tag}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 md:p-7">
                    <div className="flex items-center gap-1.5 text-xs font-medium text-speco-dark">
                      <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>{p.place}</span>
                    </div>
                    <h3 className="mt-2 font-heading text-xl font-semibold text-body-dark transition-colors duration-200 group-hover:text-speco-dark">
                      {p.name}
                    </h3>
                    <p className="mt-2.5 text-sm leading-[1.6] text-mutedlight">
                      {p.scope}
                    </p>
                  </div>
                </div>

                <div className="mx-6 mb-6 flex items-center justify-between border-t border-black/[0.06] pt-4 md:mx-7 md:mb-7">
                  <span className="font-heading text-xs font-semibold uppercase tracking-[0.12em] text-mutedlight transition-colors group-hover:text-body-dark">
                    Explore Case Study
                  </span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-black/[0.08] bg-white text-mutedlight transition-all duration-300 group-hover:border-speco-dark group-hover:bg-speco group-hover:text-white group-hover:shadow-md group-hover:shadow-speco/20">
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Band>

      {/* Closing CTA */}
      <Band
        tone="dark"
        className="section-pad relative overflow-hidden"
        ariaLabelledby="cta"
      >
        {/* Ambient background glow and top subtle gradient rule */}
        <div
          className="pointer-events-none absolute -right-24 -bottom-24 h-[450px] w-[450px] rounded-full bg-speco/10 blur-[130px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute left-0 top-0 h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
          aria-hidden="true"
        />

        <div className="container-x relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Column: Heading, description, CTA buttons */}
            <div className="lg:col-span-7">
              <Eyebrow>Start Your Project</Eyebrow>
              <h2 id="cta" className="h-section mt-5 max-w-xl text-white">
                Ready to build{" "}
                <span className="text-speco">faster, lighter & stronger?</span>
              </h2>
              <p className="mt-5 max-w-xl text-base leading-[1.7] text-body-ondark/80 md:text-lg">
                Whether you need direct factory supply of EPS and sandwich
                panels, or a complete turnkey supply-and-build solution, SPECO
                engineers are ready to review your architectural drawings and
                provide a transparent quote.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <PrimaryButton to="/contact">
                  Request a Project Quote
                </PrimaryButton>
                <SecondaryButton to="/products/eps-panels">
                  Explore Specifications
                </SecondaryButton>
              </div>

              {/* Trust markers */}
              <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-white/[0.08] pt-6 text-xs text-body-ondark/65">
                <div className="flex items-center gap-2">
                  <CheckCircle2
                    className="h-4 w-4 text-speco"
                    aria-hidden="true"
                  />
                  <span>Free BOQ & Structural Assessment</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2
                    className="h-4 w-4 text-speco"
                    aria-hidden="true"
                  />
                  <span>Juba Factory Direct Pricing</span>
                </div>
              </div>
            </div>

            {/* Right Column: Direct Contact & Factory Card */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-sm border border-white/[0.1] bg-surface-dark/95 p-7 shadow-2xl shadow-black/80 backdrop-blur-md sm:p-8">
                {/* Accent top glow line */}
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-speco/40 via-speco to-speco/40" />

                <div className="flex items-center justify-between">
                  <span className="font-heading text-xs font-semibold uppercase tracking-[0.14em] text-speco">
                    Factory & Sales Office
                  </span>
                  <span
                    className="flex h-2 w-2 rounded-full bg-emerald-500"
                    title="Open for inquiries"
                  />
                </div>

                <h3 className="mt-3 font-heading text-xl font-semibold text-white">
                  Direct Inquiries & Consultations
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-body-ondark/70">
                  Speak directly with our technical sales and engineering teams
                  in Juba.
                </p>

                <div className="mt-6 space-y-3.5 border-t border-white/[0.08] pt-5">
                  <a
                    href={contact.phoneHref}
                    className="group flex items-center gap-3.5 rounded-xs border border-white/[0.06] bg-white/[0.02] p-3 transition-colors hover:border-speco/40 hover:bg-white/[0.05]"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-speco/15 text-speco">
                      <Phone className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <div>
                      <span className="block text-[11px] font-medium uppercase tracking-wider text-body-ondark/60">
                        Call Direct
                      </span>
                      <span className="font-heading text-sm font-semibold text-white transition-colors group-hover:text-speco">
                        {contact.phoneDisplay}
                      </span>
                    </div>
                  </a>

                  <a
                    href={contact.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3.5 rounded-xs border border-white/[0.06] bg-white/[0.02] p-3 transition-colors hover:border-emerald-500/40 hover:bg-white/[0.05]"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-emerald-500/15 text-emerald-400">
                      <WhatsAppIcon className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="block text-[11px] font-medium uppercase tracking-wider text-body-ondark/60">
                        Chat on WhatsApp
                      </span>
                      <span className="font-heading text-sm font-semibold text-white transition-colors group-hover:text-emerald-400">
                        Instant Project Support
                      </span>
                    </div>
                  </a>
                </div>

                <div className="mt-5 flex items-center gap-2 text-xs text-body-ondark/60">
                  <MapPin
                    className="h-3.5 w-3.5 shrink-0 text-speco"
                    aria-hidden="true"
                  />
                  <span className="truncate">{contact.address}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Band>
    </>
  );
}
