import{an as n,_ as E,G as y,o as d,b as m,L as u,w as i,e as s,g as l}from"./chunks/framework.cE8yBDJm.js";const{defineComponent:_}=n,k=_({name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:a,openBlock:c,createBlock:D}=n;function F(o,e){const p=a("ik-menu");return c(),D(p,{items:o.menuList},null,8,["items"])}const{defineComponent:t}=n;return{render:F,...t({setup(o,{expose:e}){e();const r={menuList:[{label:"菜单一",key:"1",icon:"home"},{label:"菜单二",key:"2",icon:"user",type:"group",isExpand:!0,children:[{label:"菜单二-1",key:"2-1"},{label:"菜单二-2",key:"2-2"}]},{label:"菜单三",key:"3",icon:"files",children:[{label:"菜单三-1",key:"3-1"},{label:"菜单三-2",key:"3-2",children:[{label:"菜单三-2-1",key:"3-2-1"}]},{label:"菜单三-3",key:"3-3"},{label:"菜单三-4",key:"3-4"}]}]};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}})}}()}}),v=JSON.parse('{"title":"导航菜单","description":"","frontmatter":{},"headers":[],"relativePath":"components/menu.md","filePath":"components/menu.md"}'),B=s("h1",{id:"导航菜单",tabindex:"-1"},[l("导航菜单 "),s("a",{class:"header-anchor",href:"#导航菜单","aria-label":'Permalink to "导航菜单"'},"​")],-1),h=s("p",null,"为页面和功能提供导航的菜单列表",-1),b=s("h2",{id:"基础使用",tabindex:"-1"},[l("基础使用 "),s("a",{class:"header-anchor",href:"#基础使用","aria-label":'Permalink to "基础使用"'},"​")],-1),A=s("p",null,[l("支持直接传入字段渲染，默认根据 "),s("code",null,"children"),l("字段渲染子菜单")],-1),f=s("div",{class:"language-vue"},[s("pre",{class:"shiki material-theme-palenight vp-code","v-pre":""},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#C792EA"}}," lang"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"ts"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C792EA"}}," setup"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#BABED8"}}," menuList "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#BABED8"}}," [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"  {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    label"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#89DDFF"}}," '"),s("span",{style:{color:"#C3E88D"}},"菜单一"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    key"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#89DDFF"}}," '"),s("span",{style:{color:"#C3E88D"}},"1"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    icon"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#89DDFF"}}," '"),s("span",{style:{color:"#C3E88D"}},"home"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"  },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"  {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    label"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#89DDFF"}}," '"),s("span",{style:{color:"#C3E88D"}},"菜单二"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    key"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#89DDFF"}}," '"),s("span",{style:{color:"#C3E88D"}},"2"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    icon"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#89DDFF"}}," '"),s("span",{style:{color:"#C3E88D"}},"user"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    type"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#89DDFF"}}," '"),s("span",{style:{color:"#C3E88D"}},"group"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    isExpand"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#FF9CAC"}}," true"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    children"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"      {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"        label"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#89DDFF"}}," '"),s("span",{style:{color:"#C3E88D"}},"菜单二-1"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"        key"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#89DDFF"}}," '"),s("span",{style:{color:"#C3E88D"}},"2-1"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"      {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"        label"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#89DDFF"}}," '"),s("span",{style:{color:"#C3E88D"}},"菜单二-2"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"        key"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#89DDFF"}}," '"),s("span",{style:{color:"#C3E88D"}},"2-2"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"    ]"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"  },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"  {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    label"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#89DDFF"}}," '"),s("span",{style:{color:"#C3E88D"}},"菜单三"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    key"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#89DDFF"}}," '"),s("span",{style:{color:"#C3E88D"}},"3"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    icon"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#89DDFF"}}," '"),s("span",{style:{color:"#C3E88D"}},"files"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    children"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"      {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"        label"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#89DDFF"}}," '"),s("span",{style:{color:"#C3E88D"}},"菜单三-1"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"        key"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#89DDFF"}}," '"),s("span",{style:{color:"#C3E88D"}},"3-1"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"      {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"        label"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#89DDFF"}}," '"),s("span",{style:{color:"#C3E88D"}},"菜单三-2"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"        key"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#89DDFF"}}," '"),s("span",{style:{color:"#C3E88D"}},"3-2"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"        children"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"          {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"            label"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#89DDFF"}}," '"),s("span",{style:{color:"#C3E88D"}},"菜单三-2-1"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"            key"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#89DDFF"}}," '"),s("span",{style:{color:"#C3E88D"}},"3-2-1"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"          },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"        ]"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"      {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"        label"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#89DDFF"}}," '"),s("span",{style:{color:"#C3E88D"}},"菜单三-3"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"        key"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#89DDFF"}}," '"),s("span",{style:{color:"#C3E88D"}},"3-3"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"      {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"        label"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#89DDFF"}}," '"),s("span",{style:{color:"#C3E88D"}},"菜单三-4"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"        key"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#89DDFF"}}," '"),s("span",{style:{color:"#C3E88D"}},"3-4"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"    ]"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"  },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"  <"),s("span",{style:{color:"#F07178"}},"ik-menu"),s("span",{style:{color:"#89DDFF"}}," :"),s("span",{style:{color:"#C792EA"}},"items"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#BABED8"}},"menuList"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")])])])],-1);function g(a,c,D,F,t,C){const o=y("render-demo-0"),e=y("demo");return d(),m("div",null,[B,h,b,A,u(e,{customClass:"undefined",sourceCode:`<script lang="ts" setup>
const menuList = [
  {
    label: '菜单一',
    key: '1',
    icon: 'home',
  },
  {
    label: '菜单二',
    key: '2',
    icon: 'user',
    type: 'group',
    isExpand: true,
    children: [
      {
        label: '菜单二-1',
        key: '2-1',
      },
      {
        label: '菜单二-2',
        key: '2-2',
      },
    ],
  },
  {
    label: '菜单三',
    key: '3',
    icon: 'files',
    children: [
      {
        label: '菜单三-1',
        key: '3-1',
      },
      {
        label: '菜单三-2',
        key: '3-2',
        children: [
          {
            label: '菜单三-2-1',
            key: '3-2-1',
          },
        ],
      },
      {
        label: '菜单三-3',
        key: '3-3',
      },
      {
        label: '菜单三-4',
        key: '3-4',
      },
    ],
  },
]
<\/script>
<template>
  <ik-menu :items="menuList" />
</template>
`},{highlight:i(()=>[f]),default:i(()=>[u(o)]),_:1})])}const L=E(k,[["render",g]]);export{v as __pageData,L as default};
