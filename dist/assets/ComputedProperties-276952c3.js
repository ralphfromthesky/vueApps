import{_ as d,r as h,d as f,c as l,a as i,t,F as c,s as p,f as N,v,y,o as n,g}from"./index-45adf6f1.js";const _={setup(){const e=h(""),r=f(()=>(e.value.length===10&&(e.value=""),e.value.length));return{count:e,counting:r}},data(){return{firstName:"ralph",lastName:"santolorin",items:[{id:1,items:"toys",price:100},{id:2,items:"piano",price:200},{id:3,items:"ball",price:300},{id:4,items:"ring",price:400}]}},methods:{thisFullName(){return`${this.firstName} ${this.lastName}`}},computed:{fullName(){return`${this.firstName} ${this.lastName}`},total(){return this.items.reduce((e,r)=>e=e+r.price,0)},expensiveItems(){return this.items.filter(e=>e.price>100)}}},x={key:0},k=i("br",null,null,-1);function F(e,r,V,m,a,o){return n(),l("div",null,[i("h1",null,"my complete name is - "+t(a.firstName)+" "+t(a.lastName)+" -",1),i("h1",null,"my complete name is from computed "+t(o.fullName),1),i("h1",null,"my complete name is from method "+t(o.thisFullName()),1),i("h1",null,"the total is "+t(o.total),1),i("button",{onClick:r[0]||(r[0]=s=>a.items.push({id:4,items:"guitar",price:500}))}," total "),(n(!0),l(c,null,p(a.items,s=>(n(),l(c,{key:s.id},[s.price>100?(n(),l("h1",x,t(s.items)+" "+t(s.price),1)):g("",!0),(n(!0),l(c,null,p(o.expensiveItems,u=>(n(),l("h1",{key:u.id},t(u.items)+" "+t(u.price),1))),128))],64))),128)),k,N(i("input",{type:"text","onUpdate:modelValue":r[1]||(r[1]=s=>m.count=s)},null,512),[[v,m.count]]),y(" "+t(m.counting)+" / 200 ",1)])}const B=d(_,[["render",F]]);export{B as default};