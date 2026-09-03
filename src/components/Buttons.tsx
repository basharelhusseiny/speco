'use client'

import { useCallback, useRef, type ReactNode } from 'react'
import Link from 'next/link'
import { usePrefersReducedMotion } from '@/hooks/useIsMobile'

/** Subtle cursor-follow translate, max 6px. Disabled on touch and reduced-motion. */
function Magnetic({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLSpanElement>(null)
  const reduced = usePrefersReducedMotion()

  const canHover = useCallback(
    () =>
      !reduced &&
      typeof window !== 'undefined' &&
      window.matchMedia('(hover: hover) and (pointer: fine)').matches,
    [reduced],
  )

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el || !canHover()) return
    const rect = el.getBoundingClientRect()
    const dx = ((e.clientX - rect.left) / rect.width - 0.5) * 12
    const dy = ((e.clientY - rect.top) / rect.height - 0.5) * 12
    const clamp = (v: number) => Math.max(-6, Math.min(6, v))
    el.style.transition = 'transform 150ms ease-out'
    el.style.transform = `translate(${clamp(dx)}px, ${clamp(dy)}px)`
  }

  const onLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transition = 'transform 400ms ease-out'
    el.style.transform = 'translate(0, 0)'
  }

  return (
    <span ref={ref} className="inline-block will-change-transform" onMouseMove={onMove} onMouseLeave={onLeave}>
      {children}
    </span>
  )
}

interface ButtonProps {
  to: string
  children: ReactNode
  ariaLabel?: string
}

const base =
  'inline-flex h-12 items-center justify-center gap-2 px-7 font-heading text-sm font-semibold uppercase tracking-[0.08em] transition-colors duration-200'

/** Primary CTA: SPECO orange, near-black text (7:1 contrast), darkens on hover. */
export function PrimaryButton({ to, children, ariaLabel }: ButtonProps) {
  return (
    <Magnetic>
      <Link href={to} aria-label={ariaLabel} className={`${base} bg-speco text-ink hover:bg-speco-dark`}>
        {children}
      </Link>
    </Magnetic>
  )
}

/** Secondary CTA: outlined, orange fill sweeps in from the left on hover. */
export function SecondaryButton({ to, children, ariaLabel }: ButtonProps) {
  return (
    <Magnetic>
      <Link
        href={to}
        aria-label={ariaLabel}
        className={`${base} group relative overflow-hidden border border-white/40 text-white`}
      >
        <span
          className="absolute inset-0 origin-left scale-x-0 bg-speco transition-transform duration-300 ease-out group-hover:scale-x-100 motion-reduce:transition-none"
          aria-hidden="true"
        />
        <span className="relative z-10 transition-colors duration-300 group-hover:text-ink">{children}</span>
      </Link>
    </Magnetic>
  )
}
