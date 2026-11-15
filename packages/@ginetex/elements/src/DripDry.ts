// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@ginetex/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 375 375\"",
  body: "<path d=\"M63.728 63.728h247.544v247.544H63.728z\" style=\"fill:none;fill-opacity:.75;fill-rule:evenodd;stroke:#000;stroke-width:12.5;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\"/><path d=\"M187.5 112.5v150m-60-150v150m120-150v150\" style=\"fill:none;fill-opacity:.75;fill-rule:evenodd;stroke:#000;stroke-width:12.5;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\"/>",
  height: "375",
  width: "375",
};
const _title = "Drip dry";
const _description = "Drip dry";

export class DripDry extends SymbolElement {
  static readonly tagName = 'ginetex-drip-dry';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
