---
'@ginetex/assets': patch
'@ginetex/core': patch
'@ginetex/elements': patch
'@ginetex/react': patch
'@ginetex/sprite': patch
'@ginetex/vue': patch
---

Shorter symbol names and clean "wash 30 mild" artwork.

- Names, which are also the accessible titles, drop the US dot notes and Fahrenheit conversions: `wash-30` is now "Wash at or below 30 °C". The full Wikipedia caption is kept in `description`.
- `do-not-bleach-legacy` is named "Do not bleach (older symbol)" so it no longer shares a name with `do-not-bleach`.
- `wash-30-mild` and `wash-30-very-mild` no longer show the grey corner crop marks from their ISO 7000 source artwork, in the SVGs, the raster images and the sprite.
