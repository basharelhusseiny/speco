'use client'

import { PrimaryButton, SecondaryButton } from '@/components/Buttons'
import { usePageMeta } from '@/hooks/usePageMeta'

export default function NotFound() {
  usePageMeta({
    title: 'Page Not Found | SPECO Building Technology',
    description: 'The page you are looking for does not exist. Return to the SPECO Building Technology homepage or contact us.',
    path: '/404',
  })

  return (
    <section data-tone="dark" className="flex min-h-[100svh] items-center bg-ink">
      <div className="container-x py-32">
        <p className="eyebrow eyebrow-dark">Error 404</p>
        <h1 className="h-display mt-6 text-white">Page not found</h1>
        <p className="mt-5 max-w-md text-base leading-[1.65] text-body-ondark/75">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <PrimaryButton to="/">Back to Home</PrimaryButton>
          <SecondaryButton to="/contact">Contact Us</SecondaryButton>
        </div>
      </div>
    </section>
  )
}
