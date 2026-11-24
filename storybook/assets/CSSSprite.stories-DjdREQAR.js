import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{f as n}from"./iframe-9ZrHl7t4.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{i,r as a,t as o,u as s}from"./src-DO_Eb1my.js";function c(e){return`ginetex-`+(e.replace(/\\/g,`/`).split(`/`).pop()??``).replace(/\.svg$/i,``).toLowerCase().replace(/[^a-z0-9]+/g,`-`)}var l,u;function d(){return(d=e((()=>{i(),l=Object.fromEntries(s.map(e=>[e.id,c(e.assets.svg)])),u=e=>l[e]})))()}var f=t({AllSymbols:()=>S,Bleaching:()=>v,Drying:()=>y,Ironing:()=>b,ProfessionalCare:()=>x,Washing:()=>_,__namedExportsOrder:()=>C,default:()=>g}),p,m,h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{n(),i(),d(),p=r(),m=({size:e})=>{let t=o().map(e=>{let t=u(e.id);return t?`.${t} { background-image: url('/ginetex/storybook/assets/${e.assets.svg}'); background-size: contain; background-repeat: no-repeat; background-position: center; }`:``}).filter(Boolean).join(`
`),n=`.ginetex-icon { display: inline-block; width: ${e}px; height: ${e}px; }`;return(0,p.jsx)(`style`,{children:`${t}\n${n}`})},h=({size:e=96,category:t})=>{let n=t?a(t):o();return n.length===0?(0,p.jsxs)(`p`,{style:{color:`#888`,fontFamily:`sans-serif`},children:[`No symbols loaded. Run `,(0,p.jsx)(`code`,{children:`yarn update`}),` to populate symbol data.`]}):(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(m,{size:e}),(0,p.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(120px, 1fr))`,gap:`1.5rem`,padding:`1rem`},children:n.map(e=>{let t=u(e.id)??``;return(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`0.4rem`},children:[(0,p.jsx)(`span`,{className:`ginetex-icon ${t}`,role:`img`,"aria-label":e.name,title:e.name}),(0,p.jsx)(`span`,{style:{fontSize:`0.7rem`,textAlign:`center`,color:`#555`},children:e.code}),(0,p.jsx)(`span`,{style:{fontSize:`0.65rem`,textAlign:`center`,color:`#888`},children:e.name})]},e.id)})})]})},g={title:`Care Symbols/CSS Sprite`,component:h,parameters:{layout:`padded`},argTypes:{size:{control:{type:`number`,min:32,max:256,step:8}}}},_={name:`Washing (wash tub)`,render:({size:e})=>(0,p.jsx)(h,{size:e,category:`washing`}),args:{size:96}},v={name:`Bleaching (triangle)`,render:({size:e})=>(0,p.jsx)(h,{size:e,category:`bleaching`}),args:{size:96}},y={name:`Drying (square)`,render:({size:e})=>(0,p.jsx)(h,{size:e,category:`drying`}),args:{size:96}},b={name:`Ironing (iron)`,render:({size:e})=>(0,p.jsx)(h,{size:e,category:`ironing`}),args:{size:96}},x={name:`Professional care (circle)`,render:({size:e})=>(0,p.jsx)(h,{size:e,category:`professional-care`}),args:{size:96}},S={name:`All Symbols`,render:({size:e})=>(0,p.jsx)(h,{size:e}),args:{size:96}},C=[`Washing`,`Bleaching`,`Drying`,`Ironing`,`ProfessionalCare`,`AllSymbols`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Washing (wash tub)',
  render: ({
    size
  }) => <CSSGrid size={size} category="washing" />,
  args: {
    size: 96
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Bleaching (triangle)',
  render: ({
    size
  }) => <CSSGrid size={size} category="bleaching" />,
  args: {
    size: 96
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Drying (square)',
  render: ({
    size
  }) => <CSSGrid size={size} category="drying" />,
  args: {
    size: 96
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Ironing (iron)',
  render: ({
    size
  }) => <CSSGrid size={size} category="ironing" />,
  args: {
    size: 96
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Professional care (circle)',
  render: ({
    size
  }) => <CSSGrid size={size} category="professional-care" />,
  args: {
    size: 96
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'All Symbols',
  render: ({
    size
  }) => <CSSGrid size={size} />,
  args: {
    size: 96
  }
}`,...S.parameters?.docs?.source}}}})))()}export{b as a,w as c,y as i,v as n,x as o,f as r,_ as s,S as t};