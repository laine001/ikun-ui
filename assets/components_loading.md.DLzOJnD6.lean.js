import{l as c}from"./chunks/theme.MeDF2mUV.js";import{m as e,G as u,ao as _,o as E,b as d,e as s,L as l,w as h,g as i,a5 as g,am as k}from"./chunks/framework.IGMpLL1P.js";const F=s("h1",{id:"loading-组件、指令",tabindex:"-1"},[i("loading 组件、指令 "),s("a",{class:"header-anchor",href:"#loading-组件、指令","aria-label":'Permalink to "loading 组件、指令"'},"​")],-1),m=s("p",null,"用于页面和区块的加载中状态",-1),v=s("h2",{id:"基本使用",tabindex:"-1"},[i("基本使用 "),s("a",{class:"header-anchor",href:"#基本使用","aria-label":'Permalink to "基本使用"'},"​")],-1),C={style:{margin:"10px 0"}},A=s("div",null,"雨霖铃",-1),D=s("div",null,"寒蝉凄切",-1),b=s("div",null,"对长亭晚",-1),B=s("div",null,"骤雨初歇",-1),f=[A,D,b,B],T=k("",2),q=k("",2),P=k("",1),w=JSON.parse('{"title":"loading 组件、指令","description":"","frontmatter":{},"headers":[],"relativePath":"components/loading.md","filePath":"components/loading.md"}'),S={name:"components/loading.md"},R=Object.assign(S,{setup(L){const a=e(!1),t=e(!1),r=()=>{a.value=!a.value},o=()=>{t.value=!0,setTimeout(()=>{t.value=!1},2e3)},y=()=>{c.service({duration:1e3})};return(V,x)=>{const n=u("ik-button"),p=_("loading");return E(),d("div",null,[F,m,v,s("div",C,[l(n,{onClick:r},{default:h(()=>[i("切换loading")]),_:1})]),g((E(),d("div",null,f)),[[p,a.value]]),T,l(n,{onClick:o,type:"primary"},{default:h(()=>[i("切换全屏 loading")]),_:1}),g(s("div",null,null,512),[[p,t.value,void 0,{fullscreen:!0}]]),q,l(n,{onClick:y},{default:h(()=>[i("打开 loading")]),_:1}),P])}}});export{w as __pageData,R as default};