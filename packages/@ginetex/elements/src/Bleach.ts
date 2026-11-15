// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@ginetex/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 375 375\"",
  body: "<path d=\"M187.5 75 56.25 318.75h262.5z\" style=\"font-size:12px;fill:none;fill-rule:evenodd;stroke:#000;stroke-width:12.5;stroke-linecap:butt;stroke-linejoin:miter\"/>",
  height: "375",
  width: "375",
};
const _title = "Bleaching symbol (allowed for both chlorine and non-chlorine bleach)";
const _description = "Bleaching symbol (allowed for both chlorine and non-chlorine bleach)";

export class Bleach extends SymbolElement {
  static readonly tagName = 'ginetex-bleach';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
