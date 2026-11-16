// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@ginetex/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 375 375\"",
  body: "<path d=\"m131.26 123.34-17.93 28.02h17.93zm-1.864-6.187h8.93v34.207h7.488v5.906h-7.488v12.375h-7.067v-12.375h-23.695v-6.855zm43.383 4.676q-5.484 0-8.262 5.414-2.742 5.379-2.742 16.207 0 10.793 2.742 16.207 2.778 5.379 8.262 5.379 5.52 0 8.262-5.379 2.777-5.415 2.777-16.207 0-10.828-2.778-16.207-2.742-5.415-8.261-5.414m0-5.625q8.824 0 13.465 6.996 4.675 6.96 4.675 20.25 0 13.254-4.675 20.25-4.64 6.96-13.465 6.96t-13.5-6.96q-4.64-6.996-4.64-20.25 0-13.29 4.64-20.25 4.675-6.996 13.5-6.996\" style=\"font-size:72px;font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;writing-mode:lr-tb;text-anchor:start;fill:#000;fill-opacity:1;stroke:none;stroke-width:1pt;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;font-family:Bitstream Vera Sans\" transform=\"scale(1.25574 1.4535)\"/><path d=\"M46.352 145.547c23.458 0 23.458-20.89 46.917-20.89 23.458 0 23.458 20.89 46.916 20.89 23.459 0 23.459-20.89 46.917-20.89s23.458 20.89 46.916 20.89c23.459 0 23.459-20.89 46.917-20.89s23.458 20.89 46.916 20.89\" style=\"fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#000;stroke-width:12.5;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1\"/><path d=\"m37.456 106.87 34.398 171.987h230.314l35.434-171.986\" style=\"fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#000;stroke-width:12.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dashoffset:0;stroke-opacity:1\"/>",
  height: "375",
  width: "375",
};
const _title = "Wash at or below 40 °C";
const _description = "Wash at or below 40 °C (104 °F) (US, 2 dots, ●●)";

export class Wash40 extends SymbolElement {
  static readonly tagName = 'ginetex-wash-40';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
