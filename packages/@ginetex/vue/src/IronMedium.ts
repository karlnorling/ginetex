// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@ginetex/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 375 375\"",
  body: "<path d=\"M183.925 235c0-10.355-7.735-18.75-17.275-18.75s-17.275 8.395-17.275 18.75 7.734 18.75 17.275 18.75 17.275-8.395 17.275-18.75zm72.1 0c0-10.355-7.734-18.75-17.275-18.75s-17.275 8.395-17.275 18.75 7.734 18.75 17.275 18.75 17.275-8.395 17.275-18.75z\" style=\"fill:#000;fill-opacity:.75;fill-rule:evenodd;stroke:#000;stroke-width:1pt;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1\"/><path d=\"M112.667 98.262h188.15l37.5 182.95h-300s56.25-93.75 112.5-93.75h166.25\" style=\"fill:none;fill-opacity:.75;fill-rule:evenodd;stroke:#000;stroke-width:12.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-opacity:1\"/>",
  height: "375",
  width: "375",
};
const _title = "Iron at medium temperature";
const _description = "Iron at medium temperature";

export const IronMedium = defineComponent({
  name: 'IronMedium',
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
