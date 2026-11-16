// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@ginetex/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 375 375\"",
  body: "<path fill=\"none\" stroke=\"#000\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"12\" d=\"M48 138q9 8 21 0 24-24 48 0t48 0 48 0 48 0 48 0q9 8 21 0m8-34-35 175H72L37 104\"/><text x=\"128\" y=\"252\" font-family=\"DejaVu Sans\" font-size=\"108\">30</text>",
  height: "375",
  width: "375",
};
const _title = "Wash at or below 30 °C";
const _description = "Wash at or below 30 °C (86 °F) (US, 1 dot, ●)";

export class Wash30 extends SymbolElement {
  static readonly tagName = 'ginetex-wash-30';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
