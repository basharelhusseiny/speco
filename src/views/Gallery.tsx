'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { X, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react'
import { HeroVideo } from '@/components/HeroVideo'
import { PrimaryButton, SecondaryButton } from '@/components/Buttons'
import { Band, Eyebrow, SectionHead } from '@/components/Sections'
import { ResponsiveImage } from '@/components/ResponsiveImage'
import { usePageMeta } from '@/hooks/usePageMeta'
import {
  img,
  hBrothersImages,
  msfTujurImages,
  prefabProjectImages,
  septicTankImages,
  epsProductImages,
  prefabProductImages,
  type GalleryImage,
} from '@/lib/content'

type Category = 'all' | 'eps' | 'prefab' | 'products'

interface TaggedImage extends GalleryImage {
  category: Exclude<Category, 'all'>
}

const FILTERS: { key: Category; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'eps', label: 'EPS Panel Projects' },
  { key: 'prefab', label: 'Prefab Panel Projects' },
  { key: 'products', label: 'Product Showcase' },
]

/** H Brothers set as displayed here: position 11 uses the client-supplied
 *  replacement shot (Aug 2026); the original stays on the Home proof strip. */
const hBrothersDisplay = hBrothersImages.map((im) =>
  im.path.endsWith('/11-completed') ? img.hbCompletedV2 : im,
)

const ALL_IMAGES: TaggedImage[] = [
  ...hBrothersDisplay.map((i) => ({ ...i, category: 'eps' as const })),
  ...septicTankImages.map((i) => ({ ...i, category: 'eps' as const })),
  ...prefabProjectImages.map((i) => ({ ...i, category: 'prefab' as const })),
  ...msfTujurImages.map((i) => ({ ...i, category: 'prefab' as const })),
  ...epsProductImages.map((i) => ({ ...i, category: 'products' as const })),
  ...prefabProductImages.map((i) => ({ ...i, category: 'products' as const })),
]

interface LightboxProps {
  images: TaggedImage[]
  index: number
  onClose: () => void
  onNavigate: (index: number) => void
}

function Lightbox({ images, index, onClose, onNavigate }: LightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const image = images[index]

  const prev = useCallback(
    () => onNavigate((index - 1 + images.length) % images.length),
    [index, images.length, onNavigate],
  )
  const next = useCallback(() => onNavigate((index + 1) % images.length), [index, images.length, onNavigate])

  useEffect(() => {
    closeRef.current?.focus()
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, prev, next])

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/[0.92] p-4 md:p-10"
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
      style={{ animation: 'lightbox-in 250ms ease-out' }}
      onClick={onClose}
    >
      <style>{`@keyframes lightbox-in { from { opacity: 0 } to { opacity: 1 } }`}</style>

      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label="Close image viewer"
        className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center border border-white/20 text-white transition-colors hover:border-speco hover:text-speco"
      >
        <X className="h-5 w-5" aria-hidden="true" />
      </button>

      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); prev() }}
        aria-label="Previous image"
        className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/20 text-white transition-colors hover:border-speco hover:text-speco md:left-6"
      >
        <ChevronLeft className="h-5 w-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); next() }}
        aria-label="Next image"
        className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/20 text-white transition-colors hover:border-speco hover:text-speco md:right-6"
      >
        <ChevronRight className="h-5 w-5" aria-hidden="true" />
      </button>

      <figure
        className="flex max-h-full max-w-5xl flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={`${image.path}-desktop.webp`}
          alt={image.alt}
          className="max-h-[78vh] w-auto max-w-full object-contain"
        />
        <figcaption className="mt-4 text-center text-sm text-white/70">
          {image.caption}
          <span className="ml-3 tabular-nums text-white/40">
            {index + 1} / {images.length}
          </span>
        </figcaption>
      </figure>
    </div>
  )
}

export default function Gallery() {
  usePageMeta({
    title: 'Project Gallery | SPECO Building Technology Construction Projects',
    description:
      'View our completed construction projects and product installations across South Sudan. See SPECO building materials in action.',
    path: '/gallery',
  })

  const [filter, setFilter] = useState<Category>('all')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const triggerRef = useRef<HTMLElement | null>(null)

  const visible = useMemo(
    () => (filter === 'all' ? ALL_IMAGES : ALL_IMAGES.filter((i) => i.category === filter)),
    [filter],
  )

  const openLightbox = (index: number, trigger: HTMLElement) => {
    triggerRef.current = trigger
    setLightboxIndex(index)
  }

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null)
    // Restore focus to the triggering thumbnail
    triggerRef.current?.focus()
    triggerRef.current = null
  }, [])

  return (
    <>
      <HeroVideo
        video="gallery-hero"
        eyebrow="SPECO Project Gallery · South Sudan"
        titleLines={['Our Work in Action']}
        sub="A visual showcase of our products, projects, and construction achievements across South Sudan and the region."
      />

      {/* Featured case study — H Brothers G+6, sequenced by build stage */}
      <Band tone="dark" className="section-pad relative overflow-hidden" ariaLabelledby="featured-case">
        <div className="pointer-events-none absolute -right-20 top-0 h-[450px] w-[450px] rounded-full bg-speco/[0.06] blur-[120px]" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden="true" />

        <div className="container-x relative z-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow>Featured Case Study · Katoor, Juba</Eyebrow>
              <h2 id="featured-case" className="h-section mt-5 max-w-2xl text-white">
                H Brothers <span className="text-speco">G+6 Tower</span>, stage by stage.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-body-ondark/60 md:text-right">
              Panels installed, plaster and services, interior fit-out, facade, completed — a full build narrative in eleven frames.
            </p>
          </div>

          <ol className="mt-14 space-y-5">
            {hBrothersDisplay.map((im, i) => (
              <li key={im.path}>
                <button
                  type="button"
                  onClick={(e) => {
                    setFilter('all')
                    openLightbox(ALL_IMAGES.findIndex((a) => a.path === im.path), e.currentTarget)
                  }}
                  className="group relative w-full cursor-pointer overflow-hidden rounded-sm border border-white/[0.08] bg-surface-dark text-left transition-all duration-300 hover:border-speco/40"
                  aria-label={`Open image: ${im.alt}`}
                >
                  {/* Animated top accent */}
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-speco/30 via-speco to-speco/30 opacity-0 transition-opacity group-hover:opacity-100" />

                  <div className="grid items-center gap-0 md:grid-cols-[80px_1fr]">
                    {/* Step number */}
                    <div className="hidden items-center justify-center md:flex">
                      <span className="font-heading text-3xl font-bold tabular-nums text-speco/40 transition-colors group-hover:text-speco">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    {/* Image */}
                    <div className={`img-frame relative overflow-hidden ${im.orientation === 'portrait' ? 'aspect-[3/4] md:aspect-[21/9]' : 'aspect-[16/9]'}`}>
                      <ResponsiveImage image={im} />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t border-white/[0.06] px-5 py-3">
                    <span className="text-sm text-body-ondark/60 transition-colors group-hover:text-body-ondark/80">{im.caption}</span>
                    <span className="font-heading text-[10px] font-semibold uppercase tracking-[0.1em] text-speco/50 transition-colors group-hover:text-speco md:hidden">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                </button>
              </li>
            ))}
          </ol>
        </div>
      </Band>

      {/* Filterable grid */}
      <Band tone="light" className="section-pad" ariaLabelledby="gallery-grid">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow tone="light">Browse Projects</Eyebrow>
              <h2 id="gallery-grid" className="h-section mt-5 max-w-xl text-body-dark">
                The full <span className="text-speco-dark">archive.</span>
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-mutedlight md:text-right">
              Filter by category to find EPS projects, prefab builds, or product shots.
            </p>
          </div>

          {/* Filter buttons */}
          <div className="mt-10 flex flex-wrap gap-2" role="group" aria-label="Filter images by category">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                type="button"
                onClick={() => setFilter(f.key)}
                aria-pressed={filter === f.key}
                className={`relative rounded-xs border px-5 py-2.5 font-heading text-[12px] font-semibold uppercase tracking-[0.1em] transition-all duration-200 ${
                  filter === f.key
                    ? 'border-speco bg-speco text-white shadow-[0_4px_16px_-4px_rgba(241,94,34,0.4)]'
                    : 'border-black/[0.12] text-body-dark hover:border-speco/40 hover:text-speco-dark'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Masonry grid */}
          <div className="mt-10 gap-4 sm:columns-2 lg:columns-3">
            {visible.map((im, i) => (
              <button
                key={im.path}
                type="button"
                onClick={(e) => openLightbox(i, e.currentTarget)}
                className="group mb-4 block w-full cursor-pointer break-inside-avoid overflow-hidden rounded-sm border border-black/[0.08] bg-surface-light text-left transition-all duration-300 hover:border-speco/30 hover:shadow-[0_12px_30px_-8px_rgba(0,0,0,0.1)]"
                aria-label={`Open image: ${im.alt}`}
              >
                <div className={`img-frame relative overflow-hidden ${im.orientation === 'portrait' ? 'aspect-[3/4]' : im.orientation === 'wide' ? 'aspect-[16/9]' : 'aspect-[3/2]'}`}>
                  <ResponsiveImage image={im} />
                  {/* Hover overlay */}
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-black/50 backdrop-blur-md">
                      <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                  {/* Top accent */}
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-speco/40 via-speco to-speco/40 opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <span className="block border-t border-black/[0.06] px-4 py-3 text-xs text-mutedlight transition-colors group-hover:text-body-dark">{im.caption}</span>
              </button>
            ))}
          </div>
        </div>
      </Band>

      {/* CTA */}
      <Band tone="dark" className="section-pad relative overflow-hidden" ariaLabelledby="gallery-cta">
        <div className="pointer-events-none absolute -right-24 -bottom-24 h-[450px] w-[450px] rounded-full bg-speco/10 blur-[130px]" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden="true" />

        <div className="container-x relative z-10">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-8">
              <Eyebrow>Start Your Project</Eyebrow>
              <h2 id="gallery-cta" className="h-section mt-5 max-w-xl text-white">
                Your project could <span className="text-speco">be next.</span>
              </h2>
              <p className="mt-5 max-w-xl text-base leading-[1.7] text-body-ondark/80 md:text-lg">
                Every project in this gallery started with a quote. Talk to our team and let&apos;s plan yours — factory direct from Juba.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <PrimaryButton to="/contact">Get a Quote</PrimaryButton>
                <SecondaryButton to="/services">Our Services</SecondaryButton>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-white/[0.08] pt-6 text-xs text-body-ondark/60">
                {['Free BOQ Assessment', 'Factory Direct · Juba', 'Supply-Only or Full Build'].map((item) => (
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

      {lightboxIndex !== null && (
        <Lightbox images={visible} index={lightboxIndex} onClose={closeLightbox} onNavigate={setLightboxIndex} />
      )}
    </>
  )
}
