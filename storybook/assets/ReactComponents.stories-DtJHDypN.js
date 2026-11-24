import{a as e,n as t,r as n}from"./rolldown-runtime-sJBDdmOt.js";import{f as r}from"./iframe-9ZrHl7t4.js";import{t as i}from"./jsx-runtime-MKhVqBIO.js";import{c as a,i as o,n as s,o as c,r as l,s as u,t as d}from"./src-DO_Eb1my.js";var f,p,m;function h(){return(h=t((()=>{f=e(r()),o(),p=i(),m=({"aria-label":e,className:t,defaultDescription:n,defaultTitle:r,description:i=n,height:o,style:s,svg:c,title:l=r,width:d})=>{let m=a(f.useId()),h=u(c,{ariaLabel:e,description:i,height:o,instanceId:m,title:l,width:d});return(0,p.jsx)(`span`,{className:t,dangerouslySetInnerHTML:{__html:h},style:{display:`contents`,...s}})},m.__docgenInfo={description:"Renders a parsed symbol SVG inside a `display: contents` wrapper.\n\nIds are derived from `React.useId()`, so any number of instances of the\nsame symbol can share a page and still match between server and client.",methods:[],displayName:`SymbolSvg`,props:{className:{required:!1,tsType:{name:`string`},description:"CSS class forwarded to the wrapping `<span>`."},description:{required:!1,tsType:{name:`string`},description:"Accessible description injected as `<desc>` inside the SVG. Defaults to the symbol name.",defaultValue:{value:`defaultDescription`,computed:!1}},height:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:"Height applied to the `<svg>` element (pixels or any CSS length)."},style:{required:!1,tsType:{name:`ReactCSSProperties`,raw:`React.CSSProperties`},description:"Inline styles forwarded to the wrapping `<span>`."},title:{required:!1,tsType:{name:`string`},description:"Accessible title injected as `<title>` inside the SVG. Defaults to the symbol name.",defaultValue:{value:`defaultTitle`,computed:!1}},width:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:"Width applied to the `<svg>` element (pixels or any CSS length)."},"aria-label":{required:!1,tsType:{name:`string`},description:"Labels the `<svg>` directly, replacing its `aria-labelledby` title/description reference."},svg:{required:!0,tsType:{name:`ParsedSvg`},description:`The symbol's parsed SVG.`},defaultTitle:{required:!0,tsType:{name:`string`},description:"Title used when the `title` prop is omitted."},defaultDescription:{required:!0,tsType:{name:`string`},description:"Description used when the `description` prop is omitted."}}}})))()}var g,_,v;function y(){return(y=t((()=>{g=e(r()),o(),h(),_=i(),v=g.memo(({id:e,...t})=>{let n=s(e);return n?(0,_.jsx)(m,{...t,defaultDescription:n.description,defaultTitle:n.name,svg:c(n.svg)}):null}),v.displayName=`SymbolById`,v.__docgenInfo={description:`Renders any laundry care symbol by slug ID.

Useful for data-driven rendering where the symbol ID comes from an API
response or user input rather than being known at compile time.

Returns \`null\` for unrecognised IDs so callers can handle missing symbols
gracefully without a try/catch.

@example
\`\`\`tsx
<SymbolById id="wash-30" width={64} />
\`\`\``,methods:[],displayName:`SymbolById`}})))()}var b=n({AllSymbols:()=>M,Bleaching:()=>O,DoNotTumbleDry:()=>T,Drying:()=>k,Ironing:()=>A,ProfessionalCare:()=>j,UnknownId:()=>E,Wash30:()=>w,Washing:()=>D,__namedExportsOrder:()=>N,default:()=>C}),x,S,C,w,T,E,D,O,k,A,j,M,N;function P(){return(P=t((()=>{r(),y(),o(),x=i(),S=({size:e=96,category:t})=>{let n=t?l(t):d();return n.length===0?(0,x.jsxs)(`p`,{style:{color:`#888`,fontFamily:`sans-serif`},children:[`No symbols loaded. Run `,(0,x.jsx)(`code`,{children:`yarn update`}),` to populate symbol data.`]}):(0,x.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`0.75rem`,padding:`1rem`,alignItems:`flex-start`},children:n.map(t=>(0,x.jsxs)(`div`,{title:`${t.code} — ${t.name}`,style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`0.25rem`,width:e+16},children:[(0,x.jsx)(v,{id:t.id,width:e,height:e}),(0,x.jsx)(`span`,{style:{fontSize:`0.6rem`,textAlign:`center`,color:`#555`,lineHeight:1.2},children:t.code})]},t.id))})},C={title:`Care Symbols/React Components`,component:v,parameters:{layout:`centered`},argTypes:{id:{control:`text`},width:{control:`number`},height:{control:`number`},title:{control:`text`},description:{control:`text`}}},w={args:{id:`wash-30`,width:128}},T={args:{id:`do-not-tumble-dry`,width:128}},E={args:{id:`not-a-real-symbol`,width:128}},D={name:`Washing (wash tub)`,render:({size:e})=>(0,x.jsx)(S,{size:e,category:`washing`}),args:{size:96}},O={name:`Bleaching (triangle)`,render:({size:e})=>(0,x.jsx)(S,{size:e,category:`bleaching`}),args:{size:96}},k={name:`Drying (square)`,render:({size:e})=>(0,x.jsx)(S,{size:e,category:`drying`}),args:{size:96}},A={name:`Ironing (iron)`,render:({size:e})=>(0,x.jsx)(S,{size:e,category:`ironing`}),args:{size:96}},j={name:`Professional care (circle)`,render:({size:e})=>(0,x.jsx)(S,{size:e,category:`professional-care`}),args:{size:96}},M={name:`All Symbols`,render:({size:e})=>(0,x.jsx)(S,{size:e}),args:{size:96}},N=[`Wash30`,`DoNotTumbleDry`,`UnknownId`,`Washing`,`Bleaching`,`Drying`,`Ironing`,`ProfessionalCare`,`AllSymbols`],w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'wash-30',
    width: 128
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'do-not-tumble-dry',
    width: 128
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'not-a-real-symbol',
    width: 128
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Washing (wash tub)',
  render: ({
    size
  }) => <SymbolGrid size={size} category="washing" />,
  args: {
    size: 96
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Bleaching (triangle)',
  render: ({
    size
  }) => <SymbolGrid size={size} category="bleaching" />,
  args: {
    size: 96
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Drying (square)',
  render: ({
    size
  }) => <SymbolGrid size={size} category="drying" />,
  args: {
    size: 96
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'Ironing (iron)',
  render: ({
    size
  }) => <SymbolGrid size={size} category="ironing" />,
  args: {
    size: 96
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'Professional care (circle)',
  render: ({
    size
  }) => <SymbolGrid size={size} category="professional-care" />,
  args: {
    size: 96
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'All Symbols',
  render: ({
    size
  }) => <SymbolGrid size={size} />,
  args: {
    size: 96
  }
}`,...M.parameters?.docs?.source}}}})))()}export{b as a,P as c,j as i,k as n,w as o,A as r,D as s,O as t};