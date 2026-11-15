// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@ginetex/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 375 375\"",
  body: "<path d=\"M45.365 145.608c23.458 0 23.458-20.89 46.916-20.89 23.459 0 23.459 20.89 46.917 20.89s23.458-20.89 46.916-20.89c23.459 0 23.459 20.89 46.917 20.89s23.458-20.89 46.917-20.89c23.458 0 23.458 20.89 46.916 20.89\" style=\"fill:none;fill-opacity:.75;fill-rule:evenodd;stroke:#000;stroke-width:12.5;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1\" transform=\"translate(2.5)\"/><path d=\"m36.469 106.932 34.397 171.985h230.315l35.433-171.985\" style=\"fill:none;fill-opacity:0;fill-rule:evenodd;stroke:#000;stroke-width:12.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dashoffset:0;stroke-opacity:1\" transform=\"translate(2.5)\"/><path d=\"M13.313 123.141 336.612 281.13\" style=\"fill:none;fill-opacity:.75;fill-rule:evenodd;stroke:#000;stroke-width:12.5;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1\" transform=\"translate(2.5)\"/><path d=\"M322.46 87.682 69.874 317.537\" style=\"fill:none;fill-opacity:.75;fill-rule:evenodd;stroke:#000;stroke-width:13.298285;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1\" transform=\"matrix(1.29395 0 .01215 .68283 -56.492 63.27)\"/>",
  height: "375",
  width: "375",
};
const _title = "Do not wash";
const _description = "Do not wash";

export const DoNotWash = defineComponent({
  name: 'DoNotWash',
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
