import{_ as u,o,c as t,a as e,t as r,k as d,F as m,s as h,l as C,m as v,x as B,n as j}from"./index-30ff2501.js";const g={inject:["username","anotherUsername","myName","themeColor","backGroundColor","border","person"]},b=e("button",{class:"btn btn-primary"}," component C",-1);function k(i,l,p,a,_,n){return o(),t("div",null,[e("h1",null," this is the provide and inject, this is from Component-C "+r(n.username),1),e("h1",null," this is the anotherUsername using provide and injec, this is form ComponentC "+r(n.anotherUsername),1),e("h1",null,"this is provide and inject passing data from child to parent component "+r(n.myName),1),b,e("h1",{style:d({color:n.themeColor})},"this is provide and inject using style color",4),e("h1",{style:d({backgroundColor:n.backGroundColor})},"this is provide and inject using style backround color",4),e("h1",{style:d({border:n.border})}," this style uses border",4),(o(!0),t(m,null,h(n.person,c=>(o(),t("div",{key:c},[e("h1",null,r(c),1)]))),128))])}const y=u(g,[["render",k]]),P={components:{ProvideAndInjectC:y},inject:["anotherUsername"]},A=e("h1",null,[e("button",{class:"btn btn-success"},"Component B")],-1);function x(i,l,p,a,_,n){return o(),t("div",null,[A,e("h1",null," this is the provide inject coming from componentB displaying data without using routing "+r(n.anotherUsername),1)])}const I=u(P,[["render",x]]);const $={name:"componentA",provide:{username:"ralph santolorin",anotherUsername:"gadwin santolorin",myName:"shenron santolorin",themeColor:"blue",backGroundColor:"yellow",border:"2px solid red",person:{name:"tesa",age:35,love:"love it"}},components:{ProvideAndInjectB:I,ProvideAndInjectC:y},setup(){const i=C("employee"),l=C("girl");return{dataFromEmplpyeeJs:i,thisGirls:l}}},F=e("h2",null,"this data comes from employee.js",-1),U=e("h1",null,"thi sis the component BBBBBBBBBBBBBBBB",-1),G=e("h1",null,"this is the component CCCCCCCCCCCCCCCCCCC",-1);function N(i,l,p,a,_,n){const c=v("ProvideAndInjectB"),f=v("ProvideAndInjectC");return o(),t("div",null,[F,(o(!0),t(m,null,h(a.dataFromEmplpyeeJs,s=>(o(),t("div",{key:s,class:j(a.dataFromEmplpyeeJs?"dataFrom":"")},r(s.id)+" - "+r(s.fullname)+" - "+r(s.age),3))),128)),U,B(c),G,B(f),(o(!0),t(m,null,h(a.thisGirls,s=>(o(),t("div",{key:s.id},[e("h1",null,r(s.name),1)]))),128))])}const w=u($,[["render",N]]);export{w as default};
