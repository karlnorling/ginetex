import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{i as n,r}from"./react-Y2AikhPz.js";import{c as i,i as a,n as o,s}from"./blocks-C_UmtPIw.js";import{a as c,c as l,i as u,l as d,n as f,o as p,r as m,s as h,t as g}from"./SVGSprite.stories-DX3nYkNC.js";function _(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...n(),...e.components};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(s,{of:p}),`
`,(0,y.jsx)(t.h1,{id:`svg-sprite`,children:`SVG Sprite`}),`
`,(0,y.jsxs)(t.p,{children:[`A single `,(0,y.jsx)(t.code,{children:`sprite.svg`}),` contains all laundry care symbols as `,(0,y.jsx)(t.code,{children:`<symbol>`}),` elements. Reference any symbol with `,(0,y.jsx)(t.code,{children:`<use href="#id">`}),` — one HTTP request serves every symbol.`]}),`
`,(0,y.jsx)(t.h2,{id:`installation`,children:`Installation`}),`
`,(0,y.jsx)(t.pre,{children:(0,y.jsx)(t.code,{className:`language-sh`,children:`npm install @ginetex/sprite
`})}),`
`,(0,y.jsx)(t.h2,{id:`when-to-use`,children:`When to use`}),`
`,(0,y.jsxs)(t.table,{children:[(0,y.jsx)(t.thead,{children:(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.th,{children:`Approach`}),(0,y.jsx)(t.th,{children:`Best for`})]})}),(0,y.jsxs)(t.tbody,{children:[(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:(0,y.jsx)(t.strong,{children:`SVG sprite`})}),(0,y.jsx)(t.td,{children:`Plain HTML, no framework, single network request`})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:`React components`}),(0,y.jsx)(t.td,{children:`React/JSX — richer props, TypeScript, tree-shakeable`})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:`CSS sprite`}),(0,y.jsx)(t.td,{children:`Class-name driven usage, CMS output, no JavaScript`})]})]})]}),`
`,(0,y.jsx)(t.hr,{}),`
`,(0,y.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,y.jsx)(t.h3,{id:`external-file-reference-recommended`,children:`External file reference (recommended)`}),`
`,(0,y.jsx)(t.pre,{children:(0,y.jsx)(t.code,{className:`language-html`,children:`<svg width="64" height="64" role="img" aria-label="Wash at or below 30 °C">
  <title>Wash at or below 30 °C</title>
  <use href="/assets/sprites/sprite.svg#wash-30" />
</svg>
`})}),`
`,(0,y.jsx)(t.h3,{id:`inline-sprite`,children:`Inline sprite`}),`
`,(0,y.jsx)(t.pre,{children:(0,y.jsx)(t.code,{className:`language-html`,children:`<div aria-hidden="true" style="position:absolute;width:0;height:0;overflow:hidden">
  <!-- paste contents of sprite.svg here -->
</div>

<svg width="64" height="64" role="img" aria-label="Wash at or below 30 °C">
  <title>Wash at or below 30 °C</title>
  <use href="#wash-30" />
</svg>
`})}),`
`,(0,y.jsx)(t.h3,{id:`react-with-bundler-import`,children:`React with bundler import`}),`
`,(0,y.jsx)(t.pre,{children:(0,y.jsx)(t.code,{className:`language-tsx`,children:`import spriteUrl from '@ginetex/sprite/sprite.svg';

<svg width={64} height={64} role="img" aria-label="Wash at or below 30 °C">
  <title>Wash at or below 30 °C</title>
  <use href={\`\${spriteUrl}#wash-30\`} />
</svg>
`})}),`
`,(0,y.jsx)(t.hr,{}),`
`,(0,y.jsx)(t.h2,{id:`symbol-id-pattern`,children:`Symbol ID pattern`}),`
`,(0,y.jsxs)(t.p,{children:[`Symbol IDs are the symbol codes: `,(0,y.jsx)(t.code,{children:`wash-30`}),`, `,(0,y.jsx)(t.code,{children:`do-not-tumble-dry`}),`, `,(0,y.jsx)(t.code,{children:`iron-low`}),`, etc. Enumerate all IDs from `,(0,y.jsx)(t.code,{children:`sprite-ids.json`}),`:`]}),`
`,(0,y.jsx)(t.pre,{children:(0,y.jsx)(t.code,{className:`language-ts`,children:`import ids from '@ginetex/sprite/sprite-ids.json';
`})}),`
`,(0,y.jsx)(t.hr,{}),`
`,(0,y.jsx)(t.h2,{id:`washing-symbols`,children:`Washing symbols`}),`
`,(0,y.jsx)(o,{of:l}),`
`,(0,y.jsx)(t.hr,{}),`
`,(0,y.jsx)(t.h2,{id:`bleaching-symbols`,children:`Bleaching symbols`}),`
`,(0,y.jsx)(o,{of:f}),`
`,(0,y.jsx)(t.hr,{}),`
`,(0,y.jsx)(t.h2,{id:`drying-symbols`,children:`Drying symbols`}),`
`,(0,y.jsx)(o,{of:m}),`
`,(0,y.jsx)(t.hr,{}),`
`,(0,y.jsx)(t.h2,{id:`ironing-symbols`,children:`Ironing symbols`}),`
`,(0,y.jsx)(o,{of:u}),`
`,(0,y.jsx)(t.hr,{}),`
`,(0,y.jsx)(t.h2,{id:`professional-care-symbols`,children:`Professional care symbols`}),`
`,(0,y.jsx)(o,{of:c}),`
`,(0,y.jsx)(t.hr,{}),`
`,(0,y.jsx)(t.h2,{id:`all-symbols`,children:`All symbols`}),`
`,(0,y.jsx)(o,{of:g}),`
`,(0,y.jsx)(t.hr,{}),`
`,(0,y.jsx)(t.h2,{id:`single-icon-with-controls`,children:`Single icon with controls`}),`
`,(0,y.jsx)(o,{of:h}),`
`,(0,y.jsx)(a,{of:h})]})}function v(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,y.jsx)(t,{...e,children:(0,y.jsx)(_,{...e})}):_(e)}var y;function b(){return(b=e((()=>{y=t(),r(),i(),d()})))()}b();export{v as default};