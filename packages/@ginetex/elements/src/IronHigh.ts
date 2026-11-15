// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@ginetex/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 375 375\"",
  body: "<path d=\"M111.85 98.3H300l37.5 182.95h-300S93.75 187.5 150 187.5h168.75\" style=\"fill:none;fill-opacity:.75;fill-rule:evenodd;stroke:#000;stroke-width:12.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-opacity:1\"/><path d=\"M177.787 243.75c0-10.355-7.735-18.75-17.275-18.75s-17.275 8.395-17.275 18.75 7.734 18.75 17.275 18.75 17.275-8.395 17.275-18.75z\" style=\"fill:#000;fill-opacity:.75;fill-rule:evenodd;stroke:#000;stroke-width:1pt;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1\" transform=\"translate(-14.262 -8.125)\"/><path d=\"M177.787 243.75c0-10.355-7.735-18.75-17.275-18.75s-17.275 8.395-17.275 18.75 7.734 18.75 17.275 18.75 17.275-8.395 17.275-18.75z\" style=\"fill:#000;fill-opacity:.75;fill-rule:evenodd;stroke:#000;stroke-width:1pt;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1\" transform=\"translate(46.588 -8.125)\"/><path d=\"M177.787 243.75c0-10.355-7.735-18.75-17.275-18.75s-17.275 8.395-17.275 18.75 7.734 18.75 17.275 18.75 17.275-8.395 17.275-18.75z\" style=\"fill:#000;fill-opacity:.75;fill-rule:evenodd;stroke:#000;stroke-width:1pt;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1\" transform=\"translate(109.488 -8.125)\"/>",
  height: "375",
  width: "375",
};
const _title = "Iron at high temperature";
const _description = "Iron at high temperature";

export class IronHigh extends SymbolElement {
  static readonly tagName = 'ginetex-iron-high';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
