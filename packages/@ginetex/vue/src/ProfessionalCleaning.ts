// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@ginetex/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 375 375\"",
  body: "<path d=\"M299.745 186.53c.01-64.222-50.246-116.29-112.244-116.29S75.247 122.309 75.257 186.53c-.01 64.22 50.246 116.288 112.244 116.288s112.254-52.067 112.244-116.289z\" style=\"fill:none;fill-opacity:.75;fill-rule:evenodd;stroke:#000;stroke-width:12.500001;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1\"/>",
  height: "375",
  width: "375",
};
const _title = "Professional cleaning symbol";
const _description = "Professional cleaning symbol";

export const ProfessionalCleaning = defineComponent({
  name: 'ProfessionalCleaning',
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
