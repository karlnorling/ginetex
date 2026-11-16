import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{i as n,r}from"./react-BAXoOo-V.js";import{c as i,s as a}from"./blocks-Cd2MCDxn.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,p:`p`,pre:`pre`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`Care Symbols/Assets & API`}),`
`,(0,c.jsx)(t.h1,{id:`assets--programmatic-api`,children:`Assets & Programmatic API`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`@ginetex/core`}),` package exposes typed data for all laundry care symbols alongside helper functions for filtering and lookup. The `,(0,c.jsx)(t.code,{children:`@ginetex/assets`}),` package provides pre-built image files at multiple resolutions.`]}),`
`,(0,c.jsx)(t.hr,{}),`
`,(0,c.jsx)(t.h2,{id:`installation`,children:`Installation`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-sh`,children:`npm install @ginetex/core @ginetex/assets
`})}),`
`,(0,c.jsx)(t.hr,{}),`
`,(0,c.jsx)(t.h2,{id:`programmatic-api`,children:`Programmatic API`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-ts`,children:`import {
  getAllSymbols,
  getSymbol,
  getSymbolsByCategory,
} from '@ginetex/core';
`})}),`
`,(0,c.jsx)(t.h3,{id:`getallsymbols`,children:(0,c.jsx)(t.code,{children:`getAllSymbols()`})}),`
`,(0,c.jsx)(t.p,{children:`Returns all care symbols.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-ts`,children:`const all = getAllSymbols();
// → CareSymbol[]
`})}),`
`,(0,c.jsx)(t.h3,{id:`getsymbolid`,children:(0,c.jsx)(t.code,{children:`getSymbol(id)`})}),`
`,(0,c.jsx)(t.p,{children:`Look up a single symbol by its slug ID.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-ts`,children:`const wash30 = getSymbol('wash-30');
// → CareSymbol | undefined

const noTumbleDry = getSymbol('do-not-tumble-dry');
`})}),`
`,(0,c.jsx)(t.h3,{id:`getsymbolsbycategorycategory`,children:(0,c.jsx)(t.code,{children:`getSymbolsByCategory(category)`})}),`
`,(0,c.jsx)(t.p,{children:`Filter symbols by care treatment.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-ts`,children:`const washing          = getSymbolsByCategory('washing');           // wash tub
const bleaching        = getSymbolsByCategory('bleaching');         // triangle
const drying           = getSymbolsByCategory('drying');            // square
const ironing          = getSymbolsByCategory('ironing');           // iron
const professionalCare = getSymbolsByCategory('professional-care'); // circle
`})}),`
`,(0,c.jsx)(t.hr,{}),`
`,(0,c.jsxs)(t.h2,{id:`caresymbol-type`,children:[(0,c.jsx)(t.code,{children:`CareSymbol`}),` type`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-ts`,children:`interface CareSymbol {
  id: string;          // e.g. 'wash-30'
  code: string;        // e.g. 'wash-30' (same as id)
  name: string;        // e.g. 'Wash at or below 30 °C'
  category: CareSymbolCategory;
  description: string; // accessible description
  svg: string;         // inline SVG markup
  assets: CareSymbolAssets;
}

interface CareSymbolAssets {
  svg: string;                    // relative path to original SVG
  png: Record<number, string>;    // size → relative path (240, 512, 768, 1024, 2048)
  jpg: Record<number, string>;    // same sizes
  webp: Record<number, string>;   // same sizes
}

type CareSymbolCategory = 'washing' | 'bleaching' | 'drying' | 'ironing' | 'professional-care';
`})}),`
`,(0,c.jsx)(t.hr,{}),`
`,(0,c.jsx)(t.h2,{id:`categories`,children:`Categories`}),`
`,(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:`Category`}),(0,c.jsx)(t.th,{children:`Symbols`}),(0,c.jsx)(t.th,{children:`Base shape`}),(0,c.jsx)(t.th,{children:`Covers`})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`washing`})}),(0,c.jsx)(t.td,{children:`9`}),(0,c.jsx)(t.td,{children:`Wash tub`}),(0,c.jsx)(t.td,{children:`Maximum temperature, mild / very mild process, hand wash`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`bleaching`})}),(0,c.jsx)(t.td,{children:`5`}),(0,c.jsx)(t.td,{children:`Triangle`}),(0,c.jsx)(t.td,{children:`Any bleach, oxygen / non-chlorine only, do not bleach`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`drying`})}),(0,c.jsx)(t.td,{children:`12`}),(0,c.jsx)(t.td,{children:`Square`}),(0,c.jsx)(t.td,{children:`Tumble drying (dots = heat) and natural drying (line, flat, drip, shade)`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`ironing`})}),(0,c.jsx)(t.td,{children:`5`}),(0,c.jsx)(t.td,{children:`Iron`}),(0,c.jsx)(t.td,{children:`Maximum soleplate temperature (dots = heat)`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`professional-care`})}),(0,c.jsx)(t.td,{children:`12`}),(0,c.jsx)(t.td,{children:`Circle`}),(0,c.jsx)(t.td,{children:`Professional dry cleaning (P, F solvents) and wet cleaning (W)`})]})]})]}),`
`,(0,c.jsx)(t.hr,{}),`
`,(0,c.jsx)(t.h2,{id:`asset-files`,children:`Asset files`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`@ginetex/assets`}),` package ships pre-converted raster images at five resolutions in PNG, JPG, and WebP formats alongside the original SVGs.`]}),`
`,(0,c.jsx)(t.h3,{id:`directory-layout`,children:`Directory layout`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{children:`assets/
  washing/
    wash-30/
      wash-30.svg
      wash-30_240x240.png
      wash-30_512x512.png
      wash-30_768x768.png
      wash-30_1024x1024.png
      wash-30_2048x2048.png
      wash-30_240x240.jpg
      wash-30_240x240.webp
      …
  bleaching/
    do-not-bleach/
      do-not-bleach.svg
      …
  drying/
  ironing/
  professional-care/
`})}),`
`,(0,c.jsx)(t.h3,{id:`resolve-asset-paths-via-the-api`,children:`Resolve asset paths via the API`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-ts`,children:`import { getSymbol } from '@ginetex/core';

const symbol = getSymbol('wash-30');
if (symbol) {
  console.log(symbol.assets.svg);       // 'washing/wash-30/wash-30.svg'
  console.log(symbol.assets.png[512]);  // 'washing/wash-30/wash-30_512x512.png'
  console.log(symbol.assets.webp[240]); // 'washing/wash-30/wash-30_240x240.webp'
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=t(),r(),i()})))()}l();export{s as default};