/**
 * Main entry point for the @ginetex/core package.
 *
 * Provides typed access to all laundry care symbol data including inline SVGs,
 * asset paths, and metadata.
 *
 * @module @ginetex/core
 */

import { symbols } from './symbols.generated.js';
import type { CareSymbol, CareSymbolCategory } from './types.js';

export type { CareSymbol, CareSymbolAssets, CareSymbolCategory } from './types.js';
export { symbols } from './symbols.generated.js';
export {
  createInstanceId,
  escapeHtml,
  parseSvg,
  renderSvg,
  scopeIds,
  toInstanceId,
} from './render.js';
export type { ParsedSvg, RenderSvgOptions } from './render.js';

/** Returns every symbol in the registry. */
export const getAllSymbols = (): CareSymbol[] => symbols;

/** Returns a symbol by its slug ID (e.g. `"wash-30"`). */
export const getSymbol = (id: string): CareSymbol | undefined => symbols.find((s) => s.id === id);

/** Returns all symbols that belong to the given category. */
export const getSymbolsByCategory = (category: CareSymbolCategory): CareSymbol[] =>
  symbols.filter((s) => s.category === category);
