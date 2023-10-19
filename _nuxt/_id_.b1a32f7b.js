import{_ as A}from"./nuxt-link.1dad9f14.js";import{f as C,r as E,n as M,h as f,q as L,c as a,a as e,b as z,l as t,s as S,t as u,w as F,v as _,d as g,x as P,F as U,k as q,o as i}from"./entry.5cee6c65.js";import{u as G}from"./composable.c18a02d3.js";import{u as J,a as w,_ as R}from"./index.vue.26e54cc9.js";const T={class:"p-10"},W={class:"container mx-auto"},X={key:0},K=e("h1",{class:"mb-4"},"We got something wrong.",-1),O={class:"mb-5"},Q={key:1,itemscope:"",itemtype:"https://schema.org/Article",class:"bg-zinc-300/75 p-5 dark:bg-zinc-800/75"},Y={itemprop:"headline",class:"mb-4"},Z={itemtype:"https://schema.org/Person",itemprop:"author",itemscope:"",class:"flex items-center gap-2 py-2"},ee=["alt"],te=["href"],oe={itemprop:"name"},se=["href"],ae=e("svg",{xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 512 512"},[e("path",{d:"M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"})],-1),ie=[ae],le={class:"mb-10"},ce=["src"],re={itemprop:"articleBody",class:"mb-16"},ne={class:"flex flex-wrap gap-2"},de=["href"],me=["src","alt"],ve=C({__name:"[id]",async setup(pe){let o,l;const v=E([{name:"Home",value:"/"},{name:"News",value:"/news"}]),H=()=>{var c,d,p;G([{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"news",item:"https://kos0616.github.io/Budomistrz/news"}]},{"@context":"https://schema.org","@type":"Article",headline:s.value.title,articleBody:s.value.body,image:(n.value||[]).map(h=>h.download_url),author:{"@type":"Person",name:(c=r.value)==null?void 0:c.name,url:`https://jsonplaceholder.typicode.com/users/${(d=s.value)==null?void 0:d.userId}`,email:`mailto:${(p=r.value)==null?void 0:p.email}`,image:"http://placebeard.it/50/notag"}}])},I=M().params.id,{data:s,pending:j,error:y}=([o,l]=f(()=>w(`https://jsonplaceholder.typicode.com/posts/${I}`,{pick:["userId","body","id","title"],default:()=>({})},"$8trGHJDeE0")),o=await o,l(),o),{data:r}=([o,l]=f(()=>{var c;return w(`https://jsonplaceholder.typicode.com/users/${(c=s.value)==null?void 0:c.userId}`,{pick:["name","email"]},"$Pb6Ggna7hg")}),o=await o,l(),o),{data:n}=([o,l]=f(()=>w("https://picsum.photos/v2/list?limit=5",{default:()=>[]},"$g9UNsXUWEI")),o=await o,l(),o);return H(),J({title:s.value.title,ogTitle:s.value.title,description:s.value.body,ogDescription:s.value.body,ogImage:n.value[0].download_url||void 0}),(c,d)=>{var b,k,x,$,V,B;const p=A,h=L("skeleton-item"),N=L("skeleton");return i(),a("div",T,[e("div",W,[z(t(R),{modelValue:t(v),"onUpdate:modelValue":d[0]||(d[0]=m=>S(v)?v.value=m:null),class:"mb-3"},null,8,["modelValue"]),t(y)?(i(),a("div",X,[K,e("p",O,u(t(y)),1),z(p,{to:"/",title:"Back home",class:"border border-current px-2 py-1 text-primary-400"},{default:F(()=>[g(" Back to Home ")]),_:1})])):_((i(),a("article",Q,[_((i(),a("h1",Y,[g(u((b=t(s))==null?void 0:b.title),1)])),[[h]]),e("div",Z,[e("img",{src:"https://api.lorem.space/image/face?w=100",itemprop:"image",alt:`photo of ${(k=t(r))==null?void 0:k.name}`,width:"50",height:"50",class:"aspect-square rounded-full object-cover"},null,8,ee),e("div",null,[g(" Author: "),e("a",{itemprop:"url",href:`https://jsonplaceholder.typicode.com/users/${(x=t(s))==null?void 0:x.userId}`},[e("span",oe,u(($=t(r))==null?void 0:$.name),1)],8,te),e("a",{itemprop:"email",href:`mailto:${(V=t(r))==null?void 0:V.email}`,class:"mx-2 inline-block fill-current align-middle"},ie,8,se)])]),_(e("figure",le,[e("img",{itemprop:"image",height:"450",width:"450",src:t(n)[0].download_url,class:"aspect-video object-cover",alt:"image of news"},null,8,ce)],512),[[P,t(n).length]]),_((i(),a("p",re,[g(u((B=t(s))==null?void 0:B.body),1)])),[[h]]),e("ol",ne,[(i(!0),a(U,null,q(t(n),(m,D)=>(i(),a("li",{key:`img_${D}`},[e("a",{href:m.download_url,target:"_blank"},[e("img",{itemprop:"image",loading:"lazy",width:"200",height:"200",src:m.download_url,alt:`photo by ${m.author}`},null,8,me)],8,de)]))),128))])])),[[N,t(j)]])])])}}});export{ve as default};