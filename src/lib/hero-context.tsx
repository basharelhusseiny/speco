'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'

interface HeroState {
  /** Whether the header logo should be visible (hero ended / first loop done / bypassed). */
  heroEnded: boolean
  setHeroEnded: (v: boolean) => void
}

const HeroContext = createContext<HeroState>({
  heroEnded: true,
  setHeroEnded: () => {},
})

export function HeroProvider({ children }: { children: ReactNode }) {
  const [heroEnded, setHeroEnded] = useState(true)
  return (
    <HeroContext.Provider value={{ heroEnded, setHeroEnded }}>
      {children}
    </HeroContext.Provider>
  )
}

export function useHero() {
  return useContext(HeroContext)
}
