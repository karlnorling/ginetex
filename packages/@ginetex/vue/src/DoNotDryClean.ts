// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@ginetex/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 375 375\"",
  body: "<path d=\"M311.486 187.5c.01-68.705-55.503-124.408-123.986-124.408S63.504 118.795 63.514 187.5c-.01 68.705 55.503 124.408 123.986 124.408S311.496 256.205 311.486 187.5z\" style=\"fill:none;fill-opacity:.75;fill-rule:evenodd;stroke:#000;stroke-width:13.58843;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1\" transform=\"matrix(.9053 0 0 .93474 17.756 20.966)\"/><path d=\"m55.8 93.75 262.95 225.304m.45-225.304L56.25 319.054\" style=\"fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#000;stroke-width:13.758195;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\" transform=\"matrix(1 0 0 .82546 .45 30.022)\"/>",
  height: "375",
  width: "375",
};
const _title = "Do not dry clean";
const _description = "Do not dry clean";

export const DoNotDryClean = defineComponent({
  name: 'DoNotDryClean',
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
