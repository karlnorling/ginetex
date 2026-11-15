import { getSymbol, parseSvg } from '@ginetex/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

/**
 * Generic laundry care symbol custom element — renders any symbol by slug ID.
 *
 * Accepts every {@link SymbolElement} attribute, plus:
 * - `symbol-id` — slug ID, e.g. `"wash-30"` or `"do-not-tumble-dry"`
 *
 * @example
 * ```html
 * <ginetex-symbol symbol-id="wash-30" width="64"></ginetex-symbol>
 * ```
 */
export class GinetexSymbol extends SymbolElement {
  static readonly tagName = 'ginetex-symbol';
  static readonly observedAttributes = ['symbol-id', ...SymbolElement.observedAttributes];

  protected content(): SymbolElementContent | undefined {
    const symbolId = this.getAttribute('symbol-id');
    const symbol = symbolId ? getSymbol(symbolId) : undefined;
    if (!symbol) return undefined;
    return { description: symbol.description, svg: parseSvg(symbol.svg), title: symbol.name };
  }
}
