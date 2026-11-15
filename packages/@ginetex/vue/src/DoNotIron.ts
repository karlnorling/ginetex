// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@ginetex/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 375 375\"",
  body: "<path d=\"M113.088 98.547h188.15l37.5 182.951h-300s56.25-93.75 112.5-93.75h168.75\" style=\"fill:none;fill-opacity:.75;fill-rule:evenodd;stroke:#000;stroke-width:12.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-opacity:1\"/><path d=\"m55.8 93.75 262.95 225.304m.45-225.304L56.25 319.054\" style=\"fill:none;fill-opacity:.75;fill-rule:evenodd;stroke:#000;stroke-width:12.483806;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\" transform=\"matrix(1.14744 0 0 .87377 -12.887 34.31)\"/>",
  height: "375",
  width: "375",
};
const _title = "Do not iron";
const _description = "Do not iron";

export const DoNotIron = defineComponent({
  name: 'DoNotIron',
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
