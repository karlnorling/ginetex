// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { GinetexSymbol } from './GinetexSymbol.js';
import { Wash } from './Wash.js';
import { Wash30 } from './Wash30.js';
import { Wash40 } from './Wash40.js';
import { Wash50 } from './Wash50.js';
import { Wash60 } from './Wash60.js';
import { Wash30Mild } from './Wash30Mild.js';
import { Wash30VeryMild } from './Wash30VeryMild.js';
import { HandWash } from './HandWash.js';
import { DoNotWash } from './DoNotWash.js';
import { Bleach } from './Bleach.js';
import { BleachChlorine } from './BleachChlorine.js';
import { BleachNonChlorine } from './BleachNonChlorine.js';
import { DoNotBleach } from './DoNotBleach.js';
import { DoNotBleachLegacy } from './DoNotBleachLegacy.js';
import { TumbleDry } from './TumbleDry.js';
import { TumbleDryLow } from './TumbleDryLow.js';
import { TumbleDryNormal } from './TumbleDryNormal.js';
import { DoNotTumbleDry } from './DoNotTumbleDry.js';
import { NaturalDry } from './NaturalDry.js';
import { LineDry } from './LineDry.js';
import { DryFlat } from './DryFlat.js';
import { DripDry } from './DripDry.js';
import { DryInShade } from './DryInShade.js';
import { LineDryInShade } from './LineDryInShade.js';
import { DryFlatInShade } from './DryFlatInShade.js';
import { DripDryInShade } from './DripDryInShade.js';
import { Iron } from './Iron.js';
import { IronLow } from './IronLow.js';
import { IronMedium } from './IronMedium.js';
import { IronHigh } from './IronHigh.js';
import { DoNotIron } from './DoNotIron.js';
import { ProfessionalCleaning } from './ProfessionalCleaning.js';
import { DryCleanHcs } from './DryCleanHcs.js';
import { DryCleanHcsMild } from './DryCleanHcsMild.js';
import { DryCleanHcsVeryMild } from './DryCleanHcsVeryMild.js';
import { DryCleanPce } from './DryCleanPce.js';
import { DryCleanPceMild } from './DryCleanPceMild.js';
import { DryCleanPceVeryMild } from './DryCleanPceVeryMild.js';
import { DoNotDryClean } from './DoNotDryClean.js';
import { WetClean } from './WetClean.js';
import { WetCleanMild } from './WetCleanMild.js';
import { WetCleanVeryMild } from './WetCleanVeryMild.js';
import { DoNotWetClean } from './DoNotWetClean.js';

const _elements: Array<[CustomElementConstructor, string]> = [
  [GinetexSymbol, GinetexSymbol.tagName],
  [Wash, Wash.tagName],
  [Wash30, Wash30.tagName],
  [Wash40, Wash40.tagName],
  [Wash50, Wash50.tagName],
  [Wash60, Wash60.tagName],
  [Wash30Mild, Wash30Mild.tagName],
  [Wash30VeryMild, Wash30VeryMild.tagName],
  [HandWash, HandWash.tagName],
  [DoNotWash, DoNotWash.tagName],
  [Bleach, Bleach.tagName],
  [BleachChlorine, BleachChlorine.tagName],
  [BleachNonChlorine, BleachNonChlorine.tagName],
  [DoNotBleach, DoNotBleach.tagName],
  [DoNotBleachLegacy, DoNotBleachLegacy.tagName],
  [TumbleDry, TumbleDry.tagName],
  [TumbleDryLow, TumbleDryLow.tagName],
  [TumbleDryNormal, TumbleDryNormal.tagName],
  [DoNotTumbleDry, DoNotTumbleDry.tagName],
  [NaturalDry, NaturalDry.tagName],
  [LineDry, LineDry.tagName],
  [DryFlat, DryFlat.tagName],
  [DripDry, DripDry.tagName],
  [DryInShade, DryInShade.tagName],
  [LineDryInShade, LineDryInShade.tagName],
  [DryFlatInShade, DryFlatInShade.tagName],
  [DripDryInShade, DripDryInShade.tagName],
  [Iron, Iron.tagName],
  [IronLow, IronLow.tagName],
  [IronMedium, IronMedium.tagName],
  [IronHigh, IronHigh.tagName],
  [DoNotIron, DoNotIron.tagName],
  [ProfessionalCleaning, ProfessionalCleaning.tagName],
  [DryCleanHcs, DryCleanHcs.tagName],
  [DryCleanHcsMild, DryCleanHcsMild.tagName],
  [DryCleanHcsVeryMild, DryCleanHcsVeryMild.tagName],
  [DryCleanPce, DryCleanPce.tagName],
  [DryCleanPceMild, DryCleanPceMild.tagName],
  [DryCleanPceVeryMild, DryCleanPceVeryMild.tagName],
  [DoNotDryClean, DoNotDryClean.tagName],
  [WetClean, WetClean.tagName],
  [WetCleanMild, WetCleanMild.tagName],
  [WetCleanVeryMild, WetCleanVeryMild.tagName],
  [DoNotWetClean, DoNotWetClean.tagName],
];

/**
 * Registers all laundry care symbol custom elements.
 *
 * Safe to call more than once, including with different prefixes or after
 * registering some classes yourself: tags that are already defined are skipped,
 * and a class that is already registered under another name is registered via
 * a subclass (the registry rejects one constructor under two names).
 *
 * @param prefix — tag-name prefix (default `"ginetex"`). Each element is registered
 *   as `{prefix}-{id}`, e.g. `ginetex-wash`, plus the generic `{prefix}-symbol`.
 *   Pass a custom string to avoid conflicts with other libraries.
 * @example
 * ```ts
 * import { defineCustomElements } from '@ginetex/elements';
 * defineCustomElements(); // registers ginetex-symbol, ginetex-wash, ginetex-wash-30, etc.
 * ```
 */
export function defineCustomElements(prefix = 'ginetex'): void {
  for (const [cls, defaultTag] of _elements) {
    const tag = prefix === 'ginetex' ? defaultTag : `${prefix}-${defaultTag.replace(/^ginetex-/, '')}`;
    if (customElements.get(tag)) continue;
    try {
      customElements.define(tag, cls);
    } catch {
      customElements.define(tag, class extends cls {});
    }
  }
}
