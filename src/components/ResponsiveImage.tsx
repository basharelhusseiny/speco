import type { GalleryImage } from '@/lib/content'

interface ResponsiveImageProps {
  image: GalleryImage
  className?: string
  /** Load eagerly (above the fold only). */
  eager?: boolean
}

const INTRINSIC: Record<string, [number, number]> = {
  wide: [2400, 1350],
  landscape: [2048, 1365],
  portrait: [1365, 2048],
}

/**
 * Serves the -mobile.webp variant below 768px and -desktop.webp above.
 * Explicit width/height plus an aspect-ratio container keep CLS at zero.
 */
export function ResponsiveImage({ image, className, eager }: ResponsiveImageProps) {
  const [w, h] = INTRINSIC[image.orientation] ?? INTRINSIC.landscape
  return (
    <picture>
      <source media="(max-width: 767px)" srcSet={`${image.path}-mobile.webp`} />
      <img
        src={`${image.path}-desktop.webp`}
        alt={image.alt}
        width={w}
        height={h}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        className={className ?? 'h-full w-full object-cover'}
      />
    </picture>
  )
}
