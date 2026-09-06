'use client'

import { useSyncExternalStore } from 'react'

function subscribeMobile(callback: () => void) {
  if (typeof window === 'undefined') return () => {}
  const mq = window.matchMedia('(max-width: 767px)')
  mq.addEventListener('change', callback)
  return () => mq.removeEventListener('change', callback)
}

function getMobileSnapshot(): boolean {
  return typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches
}

function getServerMobileSnapshot(): boolean {
  return false
}

/** True when the viewport is below the md breakpoint (768px). */
export function useIsMobile(): boolean {
  return useSyncExternalStore(subscribeMobile, getMobileSnapshot, getServerMobileSnapshot)
}

function subscribeReduced(callback: () => void) {
  if (typeof window === 'undefined') return () => {}
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
  mq.addEventListener('change', callback)
  return () => mq.removeEventListener('change', callback)
}

function getReducedSnapshot(): boolean {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function getServerReducedSnapshot(): boolean {
  return false
}

/** True when the user prefers reduced motion. */
export function usePrefersReducedMotion(): boolean {
  return useSyncExternalStore(subscribeReduced, getReducedSnapshot, getServerReducedSnapshot)
}
