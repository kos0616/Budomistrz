import{_ as u}from"./nuxt-link.70807f95.js";import{u as p,_ as x}from"./index.vue.63be5bcb.js";import{f as b,r as f,h,c as o,b as i,l as n,s as w,a as t,F as y,k as v,o as r,t as d,w as k,d as g}from"./entry.e97955ec.js";const N={class:"container mx-auto"},V=t("h1",{class:"mb-10 border-b pb-3"},"News",-1),z={class:"mx-auto mb-10 flex max-w-xl flex-col gap-2 bg-zinc-300/75 p-5 dark:bg-zinc-800/75"},$={class:"truncate"},B={class:"text-right"},A=b({__name:"index",async setup(C){let s,l;const a=f([{name:"Home",value:"/"},{name:"News",value:"/news"}]),{data:_}=([s,l]=h(()=>p("https://jsonplaceholder.typicode.com/posts","$v1z7EKdfk2")),s=await s,l(),s);return(E,c)=>{const m=u;return r(),o("article",N,[i(n(x),{modelValue:n(a),"onUpdate:modelValue":c[0]||(c[0]=e=>w(a)?a.value=e:null),class:"my-3"},null,8,["modelValue"]),V,t("div",z,[(r(!0),o(y,null,v(n(_),(e,F)=>(r(),o("section",{key:`news_${e.id}`,class:"border-b border-zinc-300/25 py-3 last:border-0"},[t("h2",null,d(e.title),1),t("p",$,d(e.body),1),t("div",B,[i(m,{to:`/news/${e.id}`,title:e.title,class:"text-primary-400 hover:text-primary-500 hover:underline"},{default:k(()=>[g(" MORE ")]),_:2},1032,["to","title"])])]))),128))])])}}});export{A as default};