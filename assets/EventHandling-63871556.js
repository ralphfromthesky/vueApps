import{_ as l,o as i,c as s,a as e,t as u}from"./index-827017c3.js";const m={data(){return{name:"ralph",count:0,counted:0,counter:0}},methods:{increment(o,n){this.count+=o,console.log("Event",n),console.log(this.count),this.count==10?this.name="game!":this.count==20?this.name="youre over 20!":this.count==30&&(this.name="youre over 30!")},decrement(o){this.count-=o},changename(o){this.name=o}},watch:{},computed:{}},k=["on-click"];function d(o,n,v,f,t,c){return i(),s("div",null,[e("h1",null,u(t.name),1),e("button",{onClick:n[0]||(n[0]=r=>t.name="rigor")},"click!"),e("h1",null,u(t.counted),1),e("button",{onClick:n[1]||(n[1]=r=>t.counted+=1)},"increment"),e("button",{onClick:n[2]||(n[2]=r=>t.counted-=1)},"decrement"),e("h3",null,u(t.counter),1),e("button",{"on-click":t.counter+=1},"plus",40,k),e("h1",null,u(t.count),1),e("button",{onClick:n[3]||(n[3]=r=>c.increment(5,r))},"increase"),e("button",{onClick:n[4]||(n[4]=r=>c.decrement(2))},"decrease"),e("button",{onClick:n[5]||(n[5]=r=>(c.increment(2),c.changename("clark")))},u(t.name),1)])}const g=l(m,[["render",d]]);export{g as default};
