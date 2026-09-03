'use client'

import { useEffect } from 'react'

const SITE = 'SPECO Building Technology'
export const BASE_URL = 'https://specobt.com'
const SHARE_IMAGE = `${BASE_URL}/assets/images/projects/h-brothers/11-completed-desktop.webp`

interface PageMeta {
  title: string
  description: string
  path: string
  keywords?: string
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export function usePageMeta({ title, description, path, keywords }: PageMeta) {
  useEffect(() => {
    document.title = title
    const canonical = `${BASE_URL}${path}`
    upsertMeta('name', 'description', description)
    if (keywords) upsertMeta('name', 'keywords', keywords)
    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:url', canonical)
    upsertMeta('property', 'og:image', SHARE_IMAGE)
    upsertMeta('property', 'og:site_name', SITE)
    upsertMeta('property', 'og:type', 'website')
    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', title)
    upsertMeta('name', 'twitter:description', description)
    upsertMeta('name', 'twitter:image', SHARE_IMAGE)

    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.rel = 'canonical'
      document.head.appendChild(link)
    }
    link.href = canonical
  }, [title, description, path, keywords])
}
