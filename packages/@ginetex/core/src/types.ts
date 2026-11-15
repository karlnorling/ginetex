/**
 * Shared TypeScript types for the ginetex package.
 * @module @ginetex/types
 */

/**
 * Care treatment a laundry symbol belongs to, following the five GINETEX /
 * ISO 3758 groups.
 * - `washing`           — wash tub: temperature, process and hand wash
 * - `bleaching`         — triangle: chlorine / oxygen bleach
 * - `drying`            — square: tumble drying and natural drying
 * - `ironing`           — iron: soleplate temperature
 * - `professional-care` — circle: professional dry cleaning and wet cleaning
 */
export type CareSymbolCategory =
  | 'washing'
  | 'bleaching'
  | 'drying'
  | 'ironing'
  | 'professional-care';

/**
 * Pre-built image asset paths for a symbol, relative to the package `assets/` directory.
 * Each raster format is available at five sizes: 240, 512, 768, 1024 and 2048 px².
 */
export interface CareSymbolAssets {
  /** Map of pixel size to relative path for JPEG variants. */
  jpg: Record<number, string>;
  /** Map of pixel size to relative path for PNG variants. */
  png: Record<number, string>;
  /** Relative path to the SVG source file. */
  svg: string;
  /** Map of pixel size to relative path for WebP variants. */
  webp: Record<number, string>;
}

/**
 * A single laundry care symbol with all associated metadata and assets.
 */
export interface CareSymbol {
  /** Pre-built image asset paths at multiple sizes and formats. */
  assets: CareSymbolAssets;
  /** Symbol category — see {@link CareSymbolCategory}. */
  category: CareSymbolCategory;
  /** Stable symbol code, e.g. `"wash-30"`. */
  code: string;
  /** Human-readable description of the symbol. */
  description: string;
  /** Slug identifier used to look up the symbol; equal to `code`, e.g. `"wash-30"`. */
  id: string;
  /** Human-readable name, e.g. `"Do not tumble dry"`. */
  name: string;
  /** Full inline SVG string, optimised by SVGO, with internal ids prefixed by the symbol `id`. */
  svg: string;
}
