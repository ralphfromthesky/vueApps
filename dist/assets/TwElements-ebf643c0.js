import{r as t,o as i,c as a,a as e,T as b,h as o,t as s,U as c}from"./index-419621f3.js";const p=e("div",null,"using v-memo",-1),_={class:"my-[1rem] p-2"},g=e("br",null,null,-1),k=e("br",null,null,-1),h={class:"border-2 border-[blue]"},w=e("br",null,null,-1),x=e("br",null,null,-1),y=e("br",null,null,-1),C=e("br",null,null,-1),f={class:"border-2 border-[black]"},T={__name:"TwElements",setup(B){const d=t("ralph"),m=()=>{d.value="santolorin"},n=t(1e3),u=t(100),r=t(50);return(E,l)=>(i(),a("div",null,[p,e("div",null,[e("div",_,[b([n.value],()=>(i(),a("div",{class:"border-2 border-[red]"},[o(' indside the v-memo, v-memo="[subscriber]" '),g,k,e("p",null,"subscriber "+s(n.value),1),e("p",null,"views "+s(u.value),1),e("p",null,"like "+s(r.value),1)])),l,0),b([n.value],()=>(i(),a("div",{class:"flex gap-2 py-3"},[e("button",{class:"bg-[gray] rounded text-white",onClick:l[1]||(l[1]=v=>n.value++)}," suscribe ++"),e("button",{class:"bg-[gray] rounded text-white",onClick:l[2]||(l[2]=v=>u.value++)}," views ++"),e("button",{class:"bg-[gray] rounded text-white",onClick:l[3]||(l[3]=v=>r.value++)}," likes ++ ")])),l,4),e("div",h,[w,x,o(" outside the v-memo "),y,C,e("p",null,"subscriber "+s(n.value),1),e("p",null,"views "+s(u.value),1),e("p",null,"like "+s(r.value),1)])]),e("div",f,[o(" using v-once "),l[5]||(c(-1),l[5]=e("div",null,[o(s(d.value),1)]),c(1),l[5]),e("button",{class:"bg-[gray] rounded text-white",onClick:m}," NAME CHANGE ")])])]))}};export{T as default};