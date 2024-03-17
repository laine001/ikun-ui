import{an as E,_ as f,G as B,o as b,b as g,L as i,w as y,e as s,g as l}from"./chunks/framework.cE8yBDJm.js";const{defineComponent:w}=E,N=w({name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:e,resolveComponent:F,resolveDirective:a,withCtx:n,openBlock:o,createBlock:c,withDirectives:t,createElementBlock:p}=E,D=e("按钮1"),m=e("按钮2"),u={class:"ripple-box"},v=[e("click me")];function d(k,x){const C=F("ik-button"),_=F("ik-space"),r=a("ripple");return o(),c(_,null,{default:n(()=>[t((o(),c(C,{type:"primary"},{default:n(()=>[D]),_:1})),[[r]]),t((o(),c(C,{type:"warning"},{default:n(()=>[m]),_:1})),[[r]]),t((o(),p("div",u,v)),[[r]])]),_:1})}return{render:d,...{}}}(),"render-demo-1":function(){const{createTextVNode:e,resolveDirective:F,openBlock:a,createElementBlock:n,withDirectives:o,resolveComponent:c,withCtx:t,createBlock:p}=E,D={class:"ripple-box"},u=[e("click me")],h={class:"ripple-box"},d=[e("click me")];function A(x,C){const _=c("ik-space"),r=F("ripple");return a(),p(_,null,{default:t(()=>[o((a(),n("div",D,u)),[[r,{color:"#6379f6"}]]),o((a(),n("div",h,d)),[[r,{color:"pink"}]])]),_:1})}return{render:A,...{}}}()}}),S=JSON.parse('{"title":"水波纹 Ripple","description":"","frontmatter":{},"headers":[],"relativePath":"components/ripple.md","filePath":"components/ripple.md"}'),V=s("h1",{id:"水波纹-ripple",tabindex:"-1"},[l("水波纹 Ripple "),s("a",{class:"header-anchor",href:"#水波纹-ripple","aria-label":'Permalink to "水波纹 Ripple"'},"​")],-1),P=s("p",null,[l("使元素点击时生成一个水波扩散的效果，此效果通过"),s("code",null,"自定义指令"),l("实现 🏀")],-1),T=s("h2",{id:"基本使用",tabindex:"-1"},[l("基本使用 "),s("a",{class:"header-anchor",href:"#基本使用","aria-label":'Permalink to "基本使用"'},"​")],-1),j=s("p",null,[l("直接添加指令"),s("code",null,"v-ripple"),l("即可")],-1),$=s("div",{class:"language-vue"},[s("pre",{class:"shiki material-theme-palenight vp-code","v-pre":""},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"  <"),s("span",{style:{color:"#F07178"}},"ik-space"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"    <"),s("span",{style:{color:"#F07178"}},"ik-button"),s("span",{style:{color:"#C792EA"}}," type"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"primary"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C792EA"}}," v-ripple"),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#BABED8"}},"按钮1"),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"ik-button"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"    <"),s("span",{style:{color:"#F07178"}},"ik-button"),s("span",{style:{color:"#C792EA"}}," type"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"warning"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C792EA"}}," v-ripple"),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#BABED8"}},"按钮2"),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"ik-button"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"    <"),s("span",{style:{color:"#F07178"}},"div"),s("span",{style:{color:"#C792EA"}}," class"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"ripple-box"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C792EA"}}," v-ripple"),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#BABED8"}},"click me"),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"div"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"  </"),s("span",{style:{color:"#F07178"}},"ik-space"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"style"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#FFCB6B"}},"ripple-box"),s("span",{style:{color:"#89DDFF"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B2CCD6"}},"  width"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F78C6C"}}," 200px"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B2CCD6"}},"  height"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F78C6C"}}," 120px"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B2CCD6"}},"  border-radius"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#82AAFF"}}," var"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#BABED8"}},"--default-radius"),s("span",{style:{color:"#89DDFF"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B2CCD6"}},"  background"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#82AAFF"}}," var"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#BABED8"}},"--default-color"),s("span",{style:{color:"#89DDFF"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B2CCD6"}},"  cursor"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," pointer"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B2CCD6"}},"  user-select"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," none"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B2CCD6"}},"  display"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," flex"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B2CCD6"}},"  justify-content"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," center"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B2CCD6"}},"  align-items"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," center"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"style"),s("span",{style:{color:"#89DDFF"}},">")])])])],-1),R=s("h2",{id:"自定义波纹颜色",tabindex:"-1"},[l("自定义波纹颜色 "),s("a",{class:"header-anchor",href:"#自定义波纹颜色","aria-label":'Permalink to "自定义波纹颜色"'},"​")],-1),G=s("p",null,[s("code",null,"v-ripple"),l("指令中字面量传参可自定义颜色")],-1),J=s("div",{class:"language-vue"},[s("pre",{class:"shiki material-theme-palenight vp-code","v-pre":""},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"  <"),s("span",{style:{color:"#F07178"}},"ik-space"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"    <"),s("span",{style:{color:"#F07178"}},"div"),s("span",{style:{color:"#C792EA"}}," class"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"ripple-box"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C792EA"}}," v-ripple"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},"{"),s("span",{style:{color:"#FFCB6B"}}," color"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#89DDFF"}}," '"),s("span",{style:{color:"#C3E88D"}},"#6379f6"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}}," }"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#BABED8"}},"click me"),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"div"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"    <"),s("span",{style:{color:"#F07178"}},"div"),s("span",{style:{color:"#C792EA"}}," class"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"ripple-box"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C792EA"}}," v-ripple"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},"{"),s("span",{style:{color:"#FFCB6B"}}," color"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#89DDFF"}}," '"),s("span",{style:{color:"#C3E88D"}},"pink"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}}," }"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#BABED8"}},"click me"),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"div"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"  </"),s("span",{style:{color:"#F07178"}},"ik-space"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"style"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#FFCB6B"}},"ripple-box"),s("span",{style:{color:"#89DDFF"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B2CCD6"}},"  width"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F78C6C"}}," 200px"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B2CCD6"}},"  height"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F78C6C"}}," 120px"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B2CCD6"}},"  border-radius"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#82AAFF"}}," var"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#BABED8"}},"--default-radius"),s("span",{style:{color:"#89DDFF"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B2CCD6"}},"  background"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#82AAFF"}}," var"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#BABED8"}},"--default-color"),s("span",{style:{color:"#89DDFF"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B2CCD6"}},"  cursor"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," pointer"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B2CCD6"}},"  user-select"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," none"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B2CCD6"}},"  display"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," flex"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B2CCD6"}},"  justify-content"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," center"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B2CCD6"}},"  align-items"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," center"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"style"),s("span",{style:{color:"#89DDFF"}},">")])])])],-1);function L(e,F,a,n,o,c){const t=B("render-demo-0"),p=B("demo"),D=B("render-demo-1");return b(),g("div",null,[V,P,T,j,i(p,{customClass:"undefined",sourceCode:`<template>
  <ik-space>
    <ik-button type="primary" v-ripple>按钮1</ik-button>
    <ik-button type="warning" v-ripple>按钮2</ik-button>
    <div class="ripple-box" v-ripple>click me</div>
  </ik-space>
</template>
<style>
.ripple-box {
  width: 200px;
  height: 120px;
  border-radius: var(--default-radius);
  background: var(--default-color);
  cursor: pointer;
  user-select: none;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
`},{highlight:y(()=>[$]),default:y(()=>[i(t)]),_:1}),R,G,i(p,{customClass:"undefined",sourceCode:`<template>
  <ik-space>
    <div class="ripple-box" v-ripple="{ color: '#6379f6' }">click me</div>
    <div class="ripple-box" v-ripple="{ color: 'pink' }">click me</div>
  </ik-space>
</template>
<style>
.ripple-box {
  width: 200px;
  height: 120px;
  border-radius: var(--default-radius);
  background: var(--default-color);
  cursor: pointer;
  user-select: none;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
`},{highlight:y(()=>[J]),default:y(()=>[i(D)]),_:1})])}const q=f(N,[["render",L]]);export{S as __pageData,q as default};
