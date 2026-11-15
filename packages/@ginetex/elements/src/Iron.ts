// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@ginetex/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 375 375\"",
  body: "<path d=\"M112.667 98.262h188.15l37.5 182.95h-300s56.25-93.75 112.5-93.75h166.25\" style=\"fill:none;fill-opacity:.75;fill-rule:evenodd;stroke:#000;stroke-width:12.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\"/>",
  height: "375",
  width: "375",
};
const _title = "Ironing symbol";
const _description = "Ironing symbol";

export class Iron extends SymbolElement {
  static readonly tagName = 'ginetex-iron';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
