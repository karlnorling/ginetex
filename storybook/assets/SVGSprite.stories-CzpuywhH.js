import{a as e,n as t,r as n}from"./rolldown-runtime-sJBDdmOt.js";import{f as r}from"./iframe-Brc8TBT8.js";import{t as i}from"./jsx-runtime-MKhVqBIO.js";import{i as a,r as o,t as s}from"./src-DO_Eb1my.js";var c=n({AllSymbols:()=>x,Bleaching:()=>_,Drying:()=>v,Ironing:()=>y,ProfessionalCare:()=>b,SingleIcon:()=>S,Washing:()=>g,__namedExportsOrder:()=>C,default:()=>h}),l,u,d,f,p,m,h,g,_,v,y,b,x,S,C;function w(){return(w=t((()=>{l=e(r()),a(),u=i(),d=()=>{let[e,t]=l.useState(``);return l.useEffect(()=>{fetch(`/ginetex/storybook/assets/sprites/sprite.svg`).then(e=>e.text()).then(t).catch(()=>{})},[]),e?(0,u.jsx)(`div`,{"aria-hidden":`true`,style:{position:`absolute`,width:0,height:0,overflow:`hidden`},dangerouslySetInnerHTML:{__html:e}}):null},f=({id:e,label:t,size:n=96})=>(0,u.jsxs)(`svg`,{width:n,height:n,role:`img`,"aria-label":t,style:{display:`block`},children:[(0,u.jsx)(`title`,{children:t}),(0,u.jsx)(`use`,{href:`#${e}`})]}),p=({size:e=96,category:t})=>{let n=t?o(t):s();return n.length===0?(0,u.jsxs)(`p`,{style:{color:`#888`,fontFamily:`sans-serif`},children:[`No symbols loaded. Run `,(0,u.jsx)(`code`,{children:`yarn update`}),` to populate symbol data.`]}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(d,{}),(0,u.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(120px, 1fr))`,gap:`1.5rem`,padding:`1rem`},children:n.map(t=>(0,u.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`0.4rem`},children:[(0,u.jsx)(f,{id:t.code.toLowerCase(),label:t.name,size:e}),(0,u.jsx)(`span`,{style:{fontSize:`0.7rem`,textAlign:`center`,color:`#555`},children:t.code}),(0,u.jsx)(`span`,{style:{fontSize:`0.65rem`,textAlign:`center`,color:`#888`},children:t.name})]},t.id))})]})},m=({id:e,label:t,size:n})=>(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(d,{}),(0,u.jsx)(f,{id:e,label:t,size:n})]}),h={title:`Care Symbols/SVG Sprite`,component:p,parameters:{layout:`padded`},argTypes:{size:{control:{type:`number`,min:32,max:256,step:8}}}},g={name:`Washing (wash tub)`,render:({size:e})=>(0,u.jsx)(p,{size:e,category:`washing`}),args:{size:96}},_={name:`Bleaching (triangle)`,render:({size:e})=>(0,u.jsx)(p,{size:e,category:`bleaching`}),args:{size:96}},v={name:`Drying (square)`,render:({size:e})=>(0,u.jsx)(p,{size:e,category:`drying`}),args:{size:96}},y={name:`Ironing (iron)`,render:({size:e})=>(0,u.jsx)(p,{size:e,category:`ironing`}),args:{size:96}},b={name:`Professional care (circle)`,render:({size:e})=>(0,u.jsx)(p,{size:e,category:`professional-care`}),args:{size:96}},x={name:`All Symbols`,render:({size:e})=>(0,u.jsx)(p,{size:e}),args:{size:96}},S={parameters:{layout:`centered`},render:e=>(0,u.jsx)(m,{...e}),args:{id:`wash-30`,label:`Wash at or below 30 °C`,size:200},argTypes:{id:{control:`text`,description:`Symbol code in lowercase, e.g. wash-30, iron-low, do-not-bleach`},label:{control:`text`,description:`Accessible label`},size:{control:{type:`number`,min:32,max:512,step:8}}}},C=[`Washing`,`Bleaching`,`Drying`,`Ironing`,`ProfessionalCare`,`AllSymbols`,`SingleIcon`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Washing (wash tub)',
  render: ({
    size
  }) => <SpriteGrid size={size} category="washing" />,
  args: {
    size: 96
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Bleaching (triangle)',
  render: ({
    size
  }) => <SpriteGrid size={size} category="bleaching" />,
  args: {
    size: 96
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Drying (square)',
  render: ({
    size
  }) => <SpriteGrid size={size} category="drying" />,
  args: {
    size: 96
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Ironing (iron)',
  render: ({
    size
  }) => <SpriteGrid size={size} category="ironing" />,
  args: {
    size: 96
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Professional care (circle)',
  render: ({
    size
  }) => <SpriteGrid size={size} category="professional-care" />,
  args: {
    size: 96
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'All Symbols',
  render: ({
    size
  }) => <SpriteGrid size={size} />,
  args: {
    size: 96
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered'
  },
  render: args => <SingleSpriteIcon {...args} />,
  args: {
    id: 'wash-30',
    label: 'Wash at or below 30 °C',
    size: 200
  },
  argTypes: {
    id: {
      control: 'text',
      description: 'Symbol code in lowercase, e.g. wash-30, iron-low, do-not-bleach'
    },
    label: {
      control: 'text',
      description: 'Accessible label'
    },
    size: {
      control: {
        type: 'number',
        min: 32,
        max: 512,
        step: 8
      }
    }
  }
}`,...S.parameters?.docs?.source}}}})))()}export{b as a,g as c,y as i,w as l,_ as n,c as o,v as r,S as s,x as t};