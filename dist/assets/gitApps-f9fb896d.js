import{_ as p,r as c,j as d,o as n,c as l,a as o,f as m,e as u,v as g,F as h,g as _,l as f,t as v}from"./index-419621f3.js";const y={name:"gitApps",setup(){const a=c(""),e=d(()=>`https://api.github.com/users/${a.value}/repos`),i=c([]);return{gitName:a,gitApi:e,searchRepository:async()=>{if(a.value.trim()==="")alert("input github name");else try{const r=await f.get(e.value);console.log(r),i.value=r.data,console.log(i.value)}catch(r){console.log(`this is the error: ${r}`)}},gitRepoName:i}}},b={class:"mainContainer z-10"},x=o("h1",null,"Git Apps",-1),N={class:"formInput"},R=o("button",{class:"bg-[gray] p-[.5rem] rounded my-[1rem]"},"Search",-1);function A(a,e,i,t,r,k){return n(),l("div",b,[x,o("div",N,[o("form",{onSubmit:e[1]||(e[1]=m((...s)=>t.searchRepository&&t.searchRepository(...s),["prevent"]))},[u(o("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=s=>t.gitName=s),class:"border-2 border-[red]"},null,512),[[g,t.gitName]]),R],32),(n(!0),l(h,null,_(t.gitRepoName,s=>(n(),l("ul",{key:s.id},[o("li",null,v(s.name),1)]))),128))])])}const B=p(y,[["render",A]]);export{B as default};
