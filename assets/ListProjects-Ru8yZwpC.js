import{d as h,r as f,o as t,e as o,a as e,F as l,f as r,n as v,t as i,g as p,c as g,h as x,p as j,i as b,j as S}from"./app-k-_SYWtX.js";const w=c=>(j("data-v-1ce4a17f"),c=c(),b(),c),y={class:"max-w-300 mx-auto"},k=["id"],C=["href","title"],L={key:0,class:"pt-2 pr-5"},B={class:"flex-auto"},I={class:"text-normal"},z=["innerHTML"],F={class:"table-of-contents"},H=w(()=>e("div",{class:"table-of-contents-anchor"},[e("div",{class:"i-ri-menu-2-fill"})],-1)),M=["href"],N=h({__name:"ListProjects",props:{projects:{}},setup(c){function d(n){return n.toLowerCase().replace(/[\s\\\/]+/g,"-")}return(n,O)=>{const _=f("Slidev");return t(),o(l,null,[e("div",y,[(t(!0),o(l,null,r(Object.keys(n.projects),(s,u)=>(t(),o("div",{key:s,"slide-enter":"",style:v({"--enter-stage":u+1})},[e("h4",{id:d(s),class:"mt-15 mb-2 font-bold text-center op75"},i(s),9,k),e("div",{class:p(["project-grid py-2 max-w-500 w-max mx-auto",n.projects[s].length===1?"flex":n.projects[s].length>2?"lg:grid-cols-3":""]),grid:"~ cols-1 md:cols-2 gap-4"},[(t(!0),o(l,null,r(n.projects[s],(a,m)=>(t(),o("a",{key:m,class:"item relative flex items-center",href:a.link,target:"_blank",title:a.name},[a.icon?(t(),o("div",L,[a.icon==="slidev"?(t(),g(_,{key:0,class:"text-4xl opacity-50"})):(t(),o("div",{key:1,class:p(["text-3xl opacity-50",a.icon||"i-carbon-unknown"])},null,2))])):x("",!0),e("div",B,[e("div",I,i(a.name),1),e("div",{class:"desc text-sm opacity-50 font-normal",innerHTML:a.desc},null,8,z)])],8,C))),128))],2)],4))),128))]),e("div",null,[e("div",F,[H,e("ul",null,[(t(!0),o(l,null,r(Object.keys(n.projects),s=>(t(),o("li",{key:s},[e("a",{href:`#${d(s)}`},i(s),9,M)]))),128))])])])],64)}}}),V=S(N,[["__scopeId","data-v-1ce4a17f"]]);export{V as _};
