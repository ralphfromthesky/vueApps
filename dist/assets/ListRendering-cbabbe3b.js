import{_ as m,o as r,c as s,h as c,F as a,g as o,a as i,t as n,m as h,n as p}from"./index-03009b11.js";const y={data(){return{names:["ralph","shenron","gadwin"],fullNames:[{firstName:"ralph ",lastName:"santolorin"},{firstName:"shenron ",lastName:"santolorin"},{firstName:"gadwin ",lastName:"santolorin"}],dataPropertyStyle:{color:"red"},students:[{name:"ciara sotto",subjects:["science","math"]},{name:"g toengi",subjects:["english","filipino"]}],myInfo:{name:"ralph santolorin",work:"web developer",salary:35e3}}}},f=i("h1",null,"List Rendering",-1),d=i("br",null,null,-1);function N(_,g,k,b,t,w){return r(),s("div",null,[f,c(),d,(r(!0),s(a,null,o(t.names,e=>(r(),s("h3",{key:e},n(e),1))),128)),(r(!0),s(a,null,o(t.names,(e,l)=>(r(),s("h4",{key:e},n(l)+" "+n(e),1))),128)),(r(!0),s(a,null,o(t.fullNames,e=>(r(),s("h4",{key:e.firstName,style:h(t.dataPropertyStyle),class:p("propertyClass")},n(e.firstName)+n(e.lastName),5))),128)),(r(!0),s(a,null,o(t.students,e=>(r(),s("div",{key:e.name},[i("h3",null,n(e.name),1),(r(!0),s(a,null,o(e.subjects,l=>(r(),s("h3",{key:l},n(l),1))),128))]))),128)),(r(!0),s(a,null,o(t.myInfo,(e,l,u)=>(r(),s("h1",{key:e},n(u)+" "+n(l)+" "+n(e),1))),128))])}const S=m(y,[["render",N]]);export{S as default};
