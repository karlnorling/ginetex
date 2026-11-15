// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@ginetex/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 375 375\"",
  body: "<path d=\"M46.352 145.547c23.458 0 23.458-20.89 46.917-20.89 23.458 0 23.458 20.89 46.916 20.89 23.459 0 23.459-20.89 46.917-20.89s23.458 20.89 46.916 20.89c23.459 0 23.459-20.89 46.917-20.89s23.458 20.89 46.916 20.89\" style=\"fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#000;stroke-width:12.5;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1\"/><path d=\"m37.456 106.87 34.398 171.987h230.314l35.434-171.986\" style=\"fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#000;stroke-width:12.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dashoffset:0;stroke-opacity:1\"/>",
  height: "375",
  width: "375",
};
const _title = "Washing symbol";
const _description = "Washing symbol";

export const Wash = defineComponent({
  name: 'Wash',
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
