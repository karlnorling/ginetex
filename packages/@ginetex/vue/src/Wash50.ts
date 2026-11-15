// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@ginetex/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 375 375\"",
  body: "<path d=\"M110.993 117.153h27.879v5.977h-21.375v12.867a18.7 18.7 0 0 1 3.094-.774 17.3 17.3 0 0 1 3.093-.28q8.79 0 13.922 4.816t5.133 13.043q0 8.472-5.273 13.183-5.274 4.676-14.872 4.676-3.305 0-6.75-.563a54 54 0 0 1-7.066-1.687v-7.137a27.7 27.7 0 0 0 6.54 2.567q3.375.843 7.136.843 6.082 0 9.633-3.199 3.55-3.2 3.55-8.683 0-5.485-3.55-8.684-3.551-3.2-9.633-3.2-2.848 0-5.695.634-2.812.632-5.766 1.968zm60.96 4.676q-5.484 0-8.26 5.414-2.743 5.379-2.743 16.207 0 10.793 2.742 16.207 2.778 5.379 8.262 5.379 5.52 0 8.262-5.379 2.777-5.415 2.777-16.207 0-10.828-2.777-16.207-2.744-5.415-8.262-5.414m0-5.625q8.823 0 13.465 6.996 4.675 6.96 4.675 20.25 0 13.254-4.675 20.25-4.64 6.96-13.465 6.96t-13.5-6.96q-4.64-6.996-4.64-20.25 0-13.29 4.64-20.25 4.676-6.996 13.5-6.996\" style=\"font-size:72px;font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;writing-mode:lr-tb;text-anchor:start;fill:#000;fill-opacity:1;stroke:none;stroke-width:1pt;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;font-family:Bitstream Vera Sans\" transform=\"scale(1.25574 1.4535)\"/><path d=\"M46.352 145.547c23.458 0 23.458-20.89 46.917-20.89 23.458 0 23.458 20.89 46.916 20.89 23.459 0 23.459-20.89 46.917-20.89s23.458 20.89 46.916 20.89c23.459 0 23.459-20.89 46.917-20.89s23.458 20.89 46.916 20.89\" style=\"fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#000;stroke-width:12.5;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1\"/><path d=\"m37.456 106.87 34.398 171.987h230.314l35.434-171.986\" style=\"fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#000;stroke-width:12.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dashoffset:0;stroke-opacity:1\"/>",
  height: "375",
  width: "375",
};
const _title = "Wash at or below 50 °C (122 °F) (US, 3 dots, ●●●)";
const _description = "Wash at or below 50 °C (122 °F) (US, 3 dots, ●●●)";

export const Wash50 = defineComponent({
  name: 'Wash50',
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
