# SPECO Building Technology — Asset Package

All assets are optimised and production ready. Place the `assets` folder at the web root so paths resolve as `/assets/...`.

## Structure

```
assets/
  video/    16 hero videos + 16 posters
  logo/     white + orange, PNG and WebP
  images/
    eps-products/          8 images
    prefab-products/       8 images
    projects/
      h-brothers/          11 images (numbered by build stage)
      msf-tujur/            6 images
      prefab-projects/      4 images
      septic-tank/          2 images
    team/                   1 image
```

## Video

- Desktop 1920x1080, mobile 1080x1920, H.264, silent, faststart enabled
- Normalised to CRF 22 (desktop) / 23 (mobile) for consistent quality across pages
- Play once and hold the final frame. Do NOT add a `loop` attribute
- Posters are the video's first frame so playback starts seamlessly
- Several posters are near black by design (the footage fades in). Headline text must render on top immediately

## Images

- Every image has `-desktop.webp` and `-mobile.webp`
- Desktop capped at 2400px long edge, mobile at 1200px
- Nothing upscaled
- Pre-compressed sources encoded at q90 to avoid stacking compression artifacts, everything else q82

## Known limits

- `eps-products/` and `prefab-products/` sources max out at 2048–2400px. Do not use as full-bleed desktop backgrounds
- `projects/h-brothers/11-completed` is the most important image on the site but the lowest resolution in the gallery set (2079x2989 source). Request the original from the client if available
- No product photography exists for loose roofing iron sheets or accessories

## Dropped from the set

Three superseded 720p videos, two low-resolution EPS factory shots, one low-resolution prefab factory shot, and one duplicate of `prefab-units-juba` at lower resolution.
