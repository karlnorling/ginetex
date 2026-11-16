# @ginetex/core

## 0.1.1

### Patch Changes

- 0eea429: Shorter symbol names and clean "wash 30 mild" artwork.

  - Names, which are also the accessible titles, drop the US dot notes and Fahrenheit conversions: `wash-30` is now "Wash at or below 30 °C". The full Wikipedia caption is kept in `description`.
  - `do-not-bleach-legacy` is named "Do not bleach (older symbol)" so it no longer shares a name with `do-not-bleach`.
  - `wash-30-mild` and `wash-30-very-mild` no longer show the grey corner crop marks from their ISO 7000 source artwork, in the SVGs, the raster images and the sprite.

## 0.1.0

### Minor Changes

- 4a634c5: First release: the 43 GINETEX / ISO 3758 laundry care symbols from Wikipedia's "Laundry symbol" article, as React, Vue 3 and Web Components, a CSS sprite, an SVG sprite, static SVG/PNG/JPG/WebP assets and a typed core registry.
