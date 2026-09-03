import type { ReactNode } from 'react'
import type { GalleryImage } from '@/lib/content'
import { ResponsiveImage } from './ResponsiveImage'

export type Tone = 'dark' | 'light'

export function Eyebrow({ tone = 'dark', children }: { tone?: Tone; children: ReactNode }) {
  return <p className={`eyebrow text-base font-semibold ${tone === 'light' ? 'eyebrow-light' : 'eyebrow-dark'}`}>{children}</p>
}

interface SectionHeadProps {
  tone?: Tone
  eyebrow: string
  title: ReactNode
  lead?: string
  className?: string
}

export function SectionHead({ tone = 'dark', eyebrow, title, lead, className }: SectionHeadProps) {
  return (
    <div className={className}>
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <h2 className={`h-section mt-5 max-w-2xl ${tone === 'light' ? 'text-body-dark' : 'text-white'}`}>{title}</h2>
      {lead && (
        <p className={`mt-4 max-w-xl text-base leading-[1.65] ${tone === 'light' ? 'text-mutedlight' : 'text-body-ondark/75'}`}>
          {lead}
        </p>
      )}
    </div>
  )
}

interface SplitProps {
  tone?: Tone
  image: GalleryImage
  /** Image on the right when true */
  reverse?: boolean
  children: ReactNode
  imageAspect?: string
  id?: string
}

/**
 * Content-paired split block: image one side, copy the other, alternating
 * direction down the page. Every image sits beside the copy it supports.
 */
export function Split({ tone = 'dark', image, reverse, children, imageAspect, id }: SplitProps) {
  const aspect = imageAspect ?? (image.orientation === 'portrait' ? 'aspect-[3/4]' : image.orientation === 'wide' ? 'aspect-[16/9]' : 'aspect-[3/2]')
  const frameBorder = tone === 'light' ? 'border-black/[0.08]' : 'border-white/[0.08]'
  return (
    <div id={id} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div className={`img-frame border ${frameBorder} ${aspect} ${reverse ? 'lg:order-2' : ''}`}>
        <ResponsiveImage image={image} />
      </div>
      <div className={reverse ? 'lg:order-1' : ''}>{children}</div>
    </div>
  )
}

/** Wrapper that tags a section with its tone for the header colour swap. */
export function Band({
  tone,
  mid,
  children,
  className,
  id,
  ariaLabelledby,
}: {
  tone: Tone
  mid?: boolean
  children: ReactNode
  className?: string
  id?: string
  ariaLabelledby?: string
}) {
  const bg = tone === 'light' ? 'bg-white text-body-dark' : mid ? 'bg-surface-dark text-body-ondark' : 'bg-ink text-body-ondark'
  return (
    <section id={id} data-tone={tone} aria-labelledby={ariaLabelledby} className={`${bg} ${className ?? ''}`}>
      {children}
    </section>
  )
}
