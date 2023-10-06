import{_ as u}from"./nuxt-link.1c88e50e.js";import{f as p,r as x,h as b,c as o,b as i,l as n,s as f,a as t,F as h,k as w,o as r,t as d,w as y,d as v}from"./entry.bb3d757c.js";import{u as k,_ as g}from"./index.vue.776bab8a.js";const N={class:"container mx-auto"},V=t("h1",{class:"mb-10 border-b pb-3"},"News",-1),z={class:"mx-auto mb-10 flex max-w-xl flex-col gap-2 bg-zinc-300/75 p-5 dark:bg-zinc-800/75"},$={class:"truncate"},B={class:"text-right"},A=p({__name:"index",async setup(C){let s,l;const a=x([{name:"Home",value:"/"},{name:"News",value:"/news"}]),{data:_}=([s,l]=b(()=>k("https://jsonplaceholder.typicode.com/posts","$v1z7EKdfk2")),s=await s,l(),s);return(E,c)=>{const m=u;return r(),o("article",N,[i(n(g),{modelValue:n(a),"onUpdate:modelValue":c[0]||(c[0]=e=>f(a)?a.value=e:null),class:"my-3"},null,8,["modelValue"]),V,t("div",z,[(r(!0),o(h,null,w(n(_),(e,F)=>(r(),o("section",{key:`news_${e.id}`,class:"border-b border-zinc-300/25 py-3 last:border-0"},[t("h2",null,d(e.title),1),t("p",$,d(e.body),1),t("div",B,[i(m,{to:`/news/${e.id}`,title:e.title,class:"text-primary-400 hover:text-primary-500 hover:underline"},{default:y(()=>[v(" MORE ")]),_:2},1032,["to","title"])])]))),128))])])}}});export{A as default};
