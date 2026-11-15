// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@ginetex/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 375 375\"",
  body: "<path d=\"M187.5 75 56.25 318.75h262.5z\" style=\"font-size:12px;fill:none;fill-rule:evenodd;stroke:#000;stroke-width:12.5;stroke-linecap:butt;stroke-linejoin:miter\"/><path d=\"M152.063 127.686v7.489q-3.585-3.34-7.664-4.992-4.042-1.653-8.613-1.653-9 0-13.781 5.52-4.782 5.484-4.782 15.89 0 10.371 4.782 15.891 4.78 5.484 13.78 5.484 4.572 0 8.614-1.652 4.079-1.653 7.664-4.992v7.418a29 29 0 0 1-7.91 3.797q-4.148 1.265-8.789 1.265-11.918 0-18.773-7.277-6.855-7.313-6.856-19.934 0-12.656 6.856-19.933 6.855-7.313 18.773-7.313 4.71 0 8.86 1.266a27.7 27.7 0 0 1 7.84 3.726m11.038-4.043h7.102v46.512h25.558v5.977h-32.66z\" style=\"font-size:72px;font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;writing-mode:lr-tb;text-anchor:start;fill:#000;fill-opacity:1;stroke:none;stroke-width:1pt;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;font-family:Bitstream Vera Sans\" transform=\"scale(1.26774 1.58157)\"/>",
  height: "375",
  width: "375",
};
const _title = "Bleaching with chlorine allowed (obsolete)";
const _description = "Bleaching with chlorine allowed (obsolete)";

export const BleachChlorine = defineComponent({
  name: 'BleachChlorine',
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
