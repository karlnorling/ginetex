// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@ginetex/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 375 375\"",
  body: "<path d=\"M187.5 75 56.25 318.75h262.5z\" style=\"font-size:12px;fill:none;fill-rule:evenodd;stroke:#000;stroke-width:12.5;stroke-linecap:butt;stroke-linejoin:miter\"/><path d=\"M56.398 321.128 182.547 84.233m18.851 236.895 58.837-111.125M126.398 321.128l95.976-181.147\" style=\"fill:none;fill-opacity:.75;fill-rule:evenodd;stroke:#000;stroke-width:12.5;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1\"/>",
  height: "375",
  width: "375",
};
const _title = "Non-chlorine bleach when needed";
const _description = "Non-chlorine bleach when needed";

export class BleachNonChlorine extends SymbolElement {
  static readonly tagName = 'ginetex-bleach-non-chlorine';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
