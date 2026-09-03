'use client'

import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import { Play } from 'lucide-react'
import { useHero } from '@/lib/hero-context'
import { useIsMobile, usePrefersReducedMotion } from '@/hooks/useIsMobile'

interface HeroTitleLine {
  text: string
  className?: string
}

interface HeroVideoProps {
  /** Base video name, e.g. "home-hero" → /assets/video/home-hero-desktop.mp4 */
  video: string
  /** H1 lines, rendered uppercase in KoHo. A line may be an object to add classes (e.g. whitespace-nowrap). */
  titleLines: (string | HeroTitleLine)[]
  tagline?: string
  sub?: string
  /** CTA buttons */
  children?: ReactNode
  /** 'bottom' = default lower-left on desktop; 'left' = vertically centred left (services hero clear area) */
  align?: 'bottom' | 'left'
  eyebrow?: string
  /** Loop the video instead of play-once-hold (client decision: EPS, Prefab, About). */
  loop?: boolean
  /** Reveal the title lines and subtitle with a load animation (client decision: Contact). */
  revealText?: boolean
}

/**
 * Hero video behaviour:
 * - Autoplays muted on every page visit, desktop or mobile file by breakpoint
 *   (JS swap — older Safari ignores <source media> and grabs the wrong file).
 * - The muted ATTRIBUTE is set imperatively: React's muted prop only sets the
 *   property, and Safari/iOS checks the attribute for autoplay eligibility.
 * - Non-looping heroes play once and hold the final frame; looping heroes loop.
 * - The header logo reveals when the video ends, or after one full playthrough
 *   for looping videos, or immediately under reduced-motion / on error.
 * - If a browser blocks autoplay (Low Power Mode), a tap-to-play button shows
 *   so the hero never looks frozen.
 */
export function HeroVideo({ video, eyebrow, titleLines, tagline, sub, children, align = 'bottom', loop = false, revealText = false }: HeroVideoProps) {
  const isMobile = useIsMobile()
  const reducedMotion = usePrefersReducedMotion()
  const { setHeroEnded } = useHero()
  const videoRef = useRef<HTMLVideoElement>(null)
  const loopTimer = useRef<number | undefined>(undefined)
  const [blocked, setBlocked] = useState(false)

  const variant = isMobile ? 'mobile' : 'desktop'
  const src = `/assets/video/${video}-${variant}.mp4`
  const poster = `/assets/video/${video}-poster${isMobile ? '-mobile' : ''}.jpg`

  useEffect(() => {
    setHeroEnded(reducedMotion)
    return () => window.clearTimeout(loopTimer.current)
  }, [video, reducedMotion, setHeroEnded])

  // Set muted/defaultMuted as real attributes, then drive playback explicitly.
  useEffect(() => {
    const el = videoRef.current
    if (!el || reducedMotion) return
    el.muted = true
    el.defaultMuted = true
    el.setAttribute('muted', '')
    el.play().catch(() => setBlocked(true))
  }, [video, src, reducedMotion])

  const finish = useCallback(() => setHeroEnded(true), [setHeroEnded])

  // For looping videos there is no "ended" event — reveal the logo after one
  // full playthrough instead.
  const onLoadedMetadata = useCallback(() => {
    const el = videoRef.current
    if (el && loop && !reducedMotion && el.duration && Number.isFinite(el.duration)) {
      window.clearTimeout(loopTimer.current)
      loopTimer.current = window.setTimeout(finish, el.duration * 1000)
    }
  }, [loop, reducedMotion, finish])

  const manualPlay = () => {
    const el = videoRef.current
    if (!el) return
    el.play().then(() => setBlocked(false)).catch(() => {})
  }

  return (
    <section
      data-tone="dark"
      data-hero
      className="relative h-[100svh] overflow-hidden bg-black md:h-[min(100vh,900px)]"
      aria-label={titleLines.map((l) => (typeof l === 'string' ? l : l.text)).join(' ')}
    >
      <video
        key={src}
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: isMobile ? 'center 60%' : 'center top' }}
        src={src}
        poster={poster}
        muted
        playsInline
        disablePictureInPicture
        preload="auto"
        loop={loop}
        onEnded={loop ? undefined : finish}
        onError={finish}
        onLoadedMetadata={onLoadedMetadata}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background: isMobile
            ? 'linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.35) 40%, rgba(0,0,0,0.1) 65%, rgba(0,0,0,0.3) 100%)'
            : 'linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 45%, rgba(0,0,0,0.7) 100%)',
        }}
      />

      {/* Tap-to-play fallback if the browser blocks autoplay */}
      {blocked && (
        <button
          type="button"
          onClick={manualPlay}
          aria-label="Play intro video"
          className="absolute left-1/2 top-1/2 z-20 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/40 text-white backdrop-blur-sm transition-colors hover:border-speco hover:text-speco"
        >
          <Play className="ml-1 h-7 w-7" aria-hidden="true" />
        </button>
      )}

      {/* Content: top of frame on mobile (compact responsive font leaves footage clear below), bottom-left on desktop */}
      <div
        className={`container-x relative z-10 flex h-full flex-col px-5 pt-20 sm:pt-24 md:justify-end md:pb-24 md:pt-36 lg:px-12 ${
          align === 'left' ? 'md:justify-center md:pb-0' : ''
        }`}
      >
        <div className={`max-w-4xl ${revealText ? ' hero-text-reveal' : ''}`}>
          {eyebrow && <p className="eyebrow eyebrow-dark mb-4">{eyebrow}</p>}
          <h1 className="h-display text-3xl leading-[1.08] sm:text-5xl md:text-7xl lg:text-[88px] xl:text-[92px] text-white">
            {titleLines.map((line) => {
              const l: HeroTitleLine = typeof line === 'string' ? { text: line } : line
              return (
                <span key={l.text} className={`block${l.className ? ` ${l.className}` : ''}`}>
                  {l.text}
                </span>
              )
            })}
          </h1>
          {tagline && (
            <p className="mt-3 sm:mt-4 font-heading text-sm sm:text-base md:text-xl font-bold uppercase tracking-[0.08em] text-speco">
              {tagline}
            </p>
          )}
          {sub && <p className="mt-4 max-w-xl text-sm sm:text-base leading-[1.65] text-white/85 md:text-lg">{sub}</p>}
          {children && <div className="mt-6 sm:mt-7 md:mt-9 flex flex-wrap items-center gap-3 sm:gap-4">{children}</div>}
        </div>
      </div>
    </section>
  )
}

/** Inline (non-hero) play-once video band, e.g. the local labour feature.
 *  Below the fold: the src is only assigned when the band nears the viewport,
 *  so it never competes with the hero video for bandwidth on page load. */
export function VideoBand({
  video,
  labelledBy,
  className,
  style,
}: {
  video: string
  labelledBy: string
  className?: string
  style?: React.CSSProperties
}) {
  const isMobile = useIsMobile()
  const videoRef = useRef<HTMLVideoElement>(null)
  const variant = isMobile ? 'mobile' : 'desktop'
  const src = `/assets/video/${video}-${variant}.mp4`
  const poster = `/assets/video/${video}-poster${isMobile ? '-mobile' : ''}.jpg`

  useEffect(() => {
    const el = videoRef.current
    if (!el) return
    el.muted = true
    el.defaultMuted = true
    el.setAttribute('muted', '')
    el.setAttribute('playsinline', '')
    el.setAttribute('webkit-playsinline', '')
    el.play().catch(() => {})
  }, [src])

  return (
    <video
      key={src}
      ref={videoRef}
      className={`absolute inset-0 h-full w-full object-cover ${className ?? ''}`}
      style={{ objectPosition: 'center top', ...style }}
      src={src}
      poster={poster}
      autoPlay
      muted
      playsInline
      loop
      disablePictureInPicture
      preload="auto"
      aria-labelledby={labelledBy}
    />
  )
}
