import{_ as c,o as n,c as r,y as m,F as a,s as o,a as i,t as s,k as y,n as _}from"./index-30ff2501.js";const p={data(){return{names:["ralph","shenron","gadwin"],fullNames:[{firstName:"ralph ",lastName:"santolorin"},{firstName:"shenron ",lastName:"santolorin"},{firstName:"gadwin ",lastName:"santolorin"}],dataPropertyStyle:{color:"red"},students:[{name:"ciara sotto",subjects:["science","math"]},{name:"g toengi",subjects:["english","filipino"]}],myInfo:{name:"ralph santolorin",work:"web developer",salary:35e3}}}},h=i("h1",null,"List Rendering",-1),d=i("br",null,null,-1);function f(N,g,k,x,t,b){return n(),r("div",null,[h,m(),d,(n(!0),r(a,null,o(t.names,e=>(n(),r("h3",{key:e},s(e),1))),128)),(n(!0),r(a,null,o(t.names,(e,l)=>(n(),r("h4",{key:e},s(l)+" "+s(e),1))),128)),(n(!0),r(a,null,o(t.fullNames,e=>(n(),r("h4",{key:e.firstName,style:y(t.dataPropertyStyle),class:_("propertyClass")},s(e.firstName)+s(e.lastName),5))),128)),(n(!0),r(a,null,o(t.students,e=>(n(),r("div",{key:e.name},[i("h3",null,s(e.name),1),(n(!0),r(a,null,o(e.subjects,l=>(n(),r("h3",{key:l},s(l),1))),128))]))),128)),(n(!0),r(a,null,o(t.myInfo,(e,l,u)=>(n(),r("h1",{key:e},s(u)+" "+s(l)+" "+s(e),1))),128))])}const w=c(p,[["render",f]]);export{w as default};