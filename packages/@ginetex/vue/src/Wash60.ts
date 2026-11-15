// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@ginetex/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 375 375\"",
  body: "<path d=\"M126.989 140.567q-4.782 0-7.594 3.27-2.777 3.27-2.777 8.965 0 5.66 2.777 8.964 2.812 3.27 7.594 3.27 4.78 0 7.559-3.27 2.812-3.304 2.812-8.964 0-5.696-2.812-8.965-2.778-3.27-7.559-3.27m14.098-22.254v6.469a28.3 28.3 0 0 0-5.414-1.934 22.4 22.4 0 0 0-5.38-.668q-7.03 0-10.757 4.747-3.691 4.746-4.219 14.343 2.074-3.058 5.203-4.675 3.13-1.653 6.89-1.653 7.91 0 12.481 4.817 4.606 4.78 4.606 13.043 0 8.085-4.781 12.972-4.782 4.887-12.727 4.887-9.105 0-13.922-6.961-4.815-6.996-4.816-20.25 0-12.445 5.906-19.828 5.906-7.418 15.855-7.418 2.673 0 5.38.527 2.741.529 5.695 1.582m30.867 3.516q-5.484 0-8.262 5.414-2.742 5.379-2.742 16.207 0 10.793 2.742 16.207 2.778 5.379 8.262 5.379 5.52 0 8.262-5.379 2.777-5.415 2.777-16.207 0-10.828-2.777-16.207-2.744-5.415-8.262-5.414m0-5.625q8.823 0 13.465 6.996 4.675 6.96 4.675 20.25 0 13.254-4.675 20.25-4.64 6.96-13.465 6.96t-13.5-6.96q-4.64-6.996-4.64-20.25 0-13.29 4.64-20.25 4.676-6.996 13.5-6.996\" style=\"font-size:72px;font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;writing-mode:lr-tb;text-anchor:start;fill:#000;fill-opacity:1;stroke:none;stroke-width:1pt;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;font-family:Bitstream Vera Sans\" transform=\"scale(1.25574 1.4535)\"/><path d=\"M46.352 145.547c23.458 0 23.458-20.89 46.917-20.89 23.458 0 23.458 20.89 46.916 20.89 23.459 0 23.459-20.89 46.917-20.89s23.458 20.89 46.916 20.89c23.459 0 23.459-20.89 46.917-20.89s23.458 20.89 46.916 20.89\" style=\"fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#000;stroke-width:12.5;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1\"/><path d=\"m37.456 106.87 34.398 171.987h230.314l35.434-171.986\" style=\"fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#000;stroke-width:12.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dashoffset:0;stroke-opacity:1\"/>",
  height: "375",
  width: "375",
};
const _title = "Wash at or below 60 °C (140 °F) (US, 4 dots, ●●●●)";
const _description = "Wash at or below 60 °C (140 °F) (US, 4 dots, ●●●●)";

export const Wash60 = defineComponent({
  name: 'Wash60',
  inheritAttrs: false,
  props: symbolProps,
  setup(props, { attrs }) {
    const instanceId = useInstanceId();
    return () =>
      renderSymbol({
        attrs,
        description: props.description ?? _description,
        height: props.height,
        instanceId,
        svg: _svg,
        title: props.title ?? _title,
        width: props.width,
      });
  },
});
