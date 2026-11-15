// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { symbols } from '@ginetex/core';

/**
 * Derives the CSS class name for a care symbol from its SVG asset path.
 *
 * Symbols are stored as `category/code/code.svg`, e.g.
 * `washing/wash-30/wash-30.svg` → class `ginetex-wash-30`.
 */
function cssClassForPath(assetPath: string): string {
  const filename = assetPath.replace(/\\/g, '/').split('/').pop() ?? '';
  return 'ginetex-' + filename.replace(/\.svg$/i, '').toLowerCase().replace(/[^a-z0-9]+/g, '-');
}

/**
 * Map of symbol slug ID → CSS sprite class name.
 *
 * Import `@ginetex/css/sprite.css` and apply the class to a
 * block element to show the symbol as a background image.
 */
export const symbolCssClasses: Readonly<Record<string, string>> = Object.fromEntries(
  symbols.map((s) => [s.id, cssClassForPath(s.assets.svg)]),
);

/**
 * Returns the CSS sprite class name for a symbol by its slug ID.
 *
 * @param id - Symbol slug ID, e.g. `"wash-30"`.
 * @returns The CSS class name string, or `undefined` if the ID is not found.
 */
export const getCssClassName = (id: string): string | undefined => symbolCssClasses[id];
