// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@ginetex/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 375 375\"",
  body: "<path d=\"M187.5 75 56.25 318.75h262.5z\" style=\"font-size:12px;fill:#000;fill-opacity:1;fill-rule:evenodd;stroke:#000;stroke-width:12.5;stroke-linecap:butt;stroke-linejoin:miter\"/><path d=\"m55.8 93.75 262.95 225.304m.45-225.304L56.25 319.054\" style=\"fill:none;fill-opacity:.75;fill-rule:evenodd;stroke:#000;stroke-width:11.251204;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1\" transform=\"matrix(1 0 0 1.00063 -.45 25.745)\"/>",
  height: "375",
  width: "375",
};
const _title = "Do not bleach";
const _description = "Do not bleach";

export const DoNotBleachLegacy = defineComponent({
  name: 'DoNotBleachLegacy',
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
