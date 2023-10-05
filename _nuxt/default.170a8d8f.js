import{r as b,x as V,o as c,c as r,a as t,f as p,g as M,E as B,M as L,l as e,D as $,j as f,t as g,N as h,b as d,w as _,d as x,O as C,T as y,P as k,p as S,e as A,m as H,Q as N}from"./entry.0031b47e.js";import{_ as R}from"./nuxt-link.5f07e524.js";import{_ as m}from"./_plugin-vue_export-helper.c27b6911.js";const D=()=>{const a=b("dark"),o=i=>{document.documentElement.dataset.mode=i,localStorage.theme=i},n=()=>{window.localStorage.theme==="dark"||!("theme"in window.localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?(o("dark"),a.value="dark"):(a.value="light",o("light"))};return V(a,o),{init:n,setTheme:o,theme:a}},E={},Z={xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 512 512"},I=t("path",{d:"M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"},null,-1),O=[I];function T(a,o){return c(),r("svg",Z,O)}const j=m(E,[["render",T]]),P={},U={xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 384 512"},F=t("path",{d:"M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"},null,-1),G=[F];function Q(a,o){return c(),r("svg",U,G)}const X=m(P,[["render",Q]]),Y={class:"relative inline-flex cursor-pointer items-center fill-current"},q={class:"ml-1 font-medium capitalize"},J=p({__name:"index",setup(a){const{init:o,theme:n}=D();return M(()=>{o()}),(i,s)=>(c(),r("label",Y,[B(t("input",{"onUpdate:modelValue":s[0]||(s[0]=v=>$(n)?n.value=v:null),type:"checkbox",class:"peer sr-only","true-value":"light","false-value":"dark"},null,512),[[L,e(n)]]),e(n)==="light"?(c(),f(j,{key:0})):(c(),f(X,{key:1})),t("span",q,g(e(n)),1)]))}}),K=""+new URL("brand.bd67d89e.svg",import.meta.url).href,z=a=>(S("data-v-d03b9afc"),a=a(),A(),a),W={class:"sticky top-0 z-20 border-b border-zinc-300 bg-zinc-100 pt-2 shadow-sm dark:border-zinc-600 dark:bg-zinc-800"},t1={class:"container mx-auto flex"},e1=["href"],s1={class:"flex items-baseline gap-2"},a1=z(()=>t("img",{src:K,alt:"LOGO",height:"25px",class:"inline-block h-6"},null,-1)),o1={class:"text-lg"},n1={class:"fixed right-0 top-0 z-50 md:hidden"},c1=z(()=>t("span",{class:"sr-only"},"isOpen main menu",-1)),l1={class:"absolute left-1/2 top-1/2 block w-5 -translate-x-1/2 -translate-y-1/2 transform"},i1={class:"home-nav-link px-3"},r1=p({__name:"index",setup(a){const o=k(),n=o.public.BASE_URL,i=o.public.BRAND_NAME,s=b(!1);return(v,l)=>{const w=R;return c(),r("header",W,[t("div",t1,[t("a",{href:e(n),class:"mr-auto block"},[t("strong",s1,[a1,t("span",o1,g(e(i)),1)])],8,e1),t("div",n1,[t("button",{onClick:l[0]||(l[0]=u=>s.value=!e(s)),class:"relative h-8 w-8 focus:outline-none"},[c1,t("div",l1,[t("span",{"aria-hidden":"true",class:h(["absolute block h-0.5 w-5 transform bg-current transition duration-500 ease-in-out",{"rotate-45":e(s)," -translate-y-1.5":!e(s)}])},null,2),t("span",{"aria-hidden":"true",class:h(["absolute block h-0.5 w-5 transform bg-current transition duration-500 ease-in-out",{"opacity-0":e(s)}])},null,2),t("span",{"aria-hidden":"true",class:h(["absolute block h-0.5 w-5 transform bg-current transition duration-500 ease-in-out",{"-rotate-45":e(s)," translate-y-1.5":!e(s)}])},null,2)])])]),t("nav",{class:h([e(s)?"translate-x-0":"translate-x-full","fixed bottom-0 right-0 top-0 z-10 flex w-full max-w-[150px] flex-col content-center gap-3 bg-zinc-200/95 pt-10 transition-all dark:bg-zinc-900/95 md:static md:w-auto md:translate-x-0 md:flex-row md:bg-transparent md:pt-0 dark:md:bg-transparent"])},[d(w,{onClick:l[1]||(l[1]=u=>s.value=!1),class:"home-nav-link px-3 md:hidden",to:"/"},{default:_(()=>[x(" Home ")]),_:1}),d(w,{onClick:l[2]||(l[2]=u=>s.value=!1),class:"home-nav-link px-3",to:"projects"},{default:_(()=>[x(" Projects ")]),_:1}),t("div",i1,[d(e(J))])],2),d(y,null,{default:_(()=>[e(s)?(c(),r("div",{key:0,onClick:l[3]||(l[3]=u=>s.value=!1),class:"fixed inset-0 bg-zinc-900/50 backdrop-blur-sm"})):C("",!0)]),_:1})])])}}});const d1=m(r1,[["__scopeId","data-v-d03b9afc"]]),h1={},m1={class:"container mx-auto py-5"},u1=H('<div class="grid grid-cols-2 gap-4 sm:grid-cols-3"><nav><h2>Social</h2><ul><li><a href="http://instagram.com/Budomistrz"><svg class="inline-block fill-current" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z"></path></svg> instagram </a></li><li><a href="http://twitter.com/Budomistrz"><svg class="inline-block fill-current" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path></svg> twitter(X) </a></li><li><a href="http://www.linkedin.com/in/Budomistrz"><svg class="inline-block fill-current" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg> linkdIn </a></li></ul></nav><nav><h2>News</h2><ul><li><a href="http://www.facebook.com/Budomistrz"><svg class="inline-block w-6 fill-current" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path></svg> Facebook </a></li><li><a href="http://youtube.com/Budomistrz"><svg class="inline-block w-6 fill-current" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg> Youtube </a></li><li><a href="http://plus.google.com/Budomistrz"><svg class="inline-block w-6 fill-current" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M192 32c0 17.7 14.3 32 32 32c123.7 0 224 100.3 224 224c0 17.7 14.3 32 32 32s32-14.3 32-32C512 128.9 383.1 0 224 0c-17.7 0-32 14.3-32 32zm0 96c0 17.7 14.3 32 32 32c70.7 0 128 57.3 128 128c0 17.7 14.3 32 32 32s32-14.3 32-32c0-106-86-192-192-192c-17.7 0-32 14.3-32 32zM96 144c0-26.5-21.5-48-48-48S0 117.5 0 144V368c0 79.5 64.5 144 144 144s144-64.5 144-144s-64.5-144-144-144H128v96h16c26.5 0 48 21.5 48 48s-21.5 48-48 48s-48-21.5-48-48V144z"></path></svg> Blog </a></li></ul></nav><nav><h2>Contact</h2><ul><li><a href="mailto:hello@Budomistrz.com"><svg class="inline-block w-6 fill-current" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376V479.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z"></path></svg> hello@Budomistrz.com </a></li><li><a href="tel:+886-912345678"><svg class="inline-block w-6 fill-current" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M384 32c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H384zm-90.7 96.7c-9.7-2.6-19.9 2.3-23.7 11.6l-20 48c-3.4 8.2-1 17.6 5.8 23.2L280 231.7c-16.6 35.2-45.1 63.7-80.3 80.3l-20.2-24.7c-5.6-6.8-15-9.2-23.2-5.8l-48 20c-9.3 3.9-14.2 14-11.6 23.7l12 44C111.1 378 119 384 128 384c123.7 0 224-100.3 224-224c0-9-6-16.9-14.7-19.3l-44-12z"></path></svg> +886 912-345-678 </a></li><li><a href="https://maps.app.goo.gl"><svg class="inline-block w-6 fill-current" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M408 120c0 54.6-73.1 151.9-105.2 192c-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120C168 53.7 221.7 0 288 0s120 53.7 120 120zm8 80.4c3.5-6.9 6.7-13.8 9.6-20.6c.5-1.2 1-2.5 1.5-3.7l116-46.4C558.9 123.4 576 135 576 152V422.8c0 9.8-6 18.6-15.1 22.3L416 503V200.4zM137.6 138.3c2.4 14.1 7.2 28.3 12.8 41.5c2.9 6.8 6.1 13.7 9.6 20.6V451.8L32.9 502.7C17.1 509 0 497.4 0 480.4V209.6c0-9.8 6-18.6 15.1-22.3l122.6-49zM327.8 332c13.9-17.4 35.7-45.7 56.2-77V504.3L192 449.4V255c20.5 31.3 42.3 59.6 56.2 77c20.5 25.6 59.1 25.6 79.6 0zM288 152a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"></path></svg> MAP </a></li></ul></nav></div>',1),_1=[u1];function p1(a,o){return c(),r("div",m1,_1)}const g1=m(h1,[["render",p1]]),v1={class:"flex min-h-[100dvh] flex-col"},w1={class:"grow"},f1={class:"border-b border-zinc-600 bg-slate-200 pb-5 dark:bg-zinc-800"},x1={class:"bg-slate-200 py-10 text-center dark:bg-zinc-800"},V1=p({__name:"default",setup(a){const n=k().public.BRAND_NAME;return(i,s)=>(c(),r("div",v1,[d(e(d1)),t("main",w1,[N(i.$slots,"default")]),t("div",f1,[d(e(g1))]),t("footer",x1," Copyright © 2023 "+g(e(n))+". All rights reserved. ",1)]))}});export{V1 as default};
