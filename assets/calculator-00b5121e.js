import{_ as p,r,o as m,c as k,a as i,t as f,i as C}from"./index-900186c7.js";const y={name:"calculator",setup(){const l=r(""),a=r(null),d=r(null),t=r(!1),v=()=>{l.value=""},c=()=>{l.value=l.value.charAt(0)==="-"?l.value.slice(1):`-${l.value}`},n=()=>{l.value=`${parseFloat(l.value)/100}`},b=e=>{t.value&&(l.value="",t.value=!1),l.value=`${l.value}${e}`},u=()=>{l.value.indexOf(".")===-1&&b(".")},s=()=>{a.value=l.value,t.value=!0};return{current:l,append:b,clear:v,sign:c,percent:n,dot:u,times:()=>{d.value=(e,o)=>e*o,s()},divide:()=>{d.value=(e,o)=>e/o,s()},add:()=>{d.value=(e,o)=>e+o,s()},minus:()=>{d.value=(e,o)=>e-o,s()},equal:()=>{d.value&&(l.value=`${d.value(parseFloat(a.value),parseFloat(l.value))}`,a.value=null,t.value=!0)}}}},g={class:"main-container z-10"},w={class:"container"},x={class:"calculator"},q={class:"btn display"},A=C('<div class="descriptions" data-v-dd015c9b><p data-v-dd015c9b><b data-v-dd015c9b> Calculator</b> <br data-v-dd015c9b> <br data-v-dd015c9b> This sleek and user-friendly calculator provides you with essential mathematical functions at your fingertips. It allows you to perform addition, subtraction, multiplication, and division, making it perfect for both simple and complex calculations. <br data-v-dd015c9b><br data-v-dd015c9b><b data-v-dd015c9b> Key Features:</b> <br data-v-dd015c9b><br data-v-dd015c9b> Clear (AC): Reset your calculations with a single click. <br data-v-dd015c9b> Sign (+/-): Quickly switch between positive and negative numbers. <br data-v-dd015c9b> Percent (%): Calculate percentages effortlessly. <br data-v-dd015c9b> Operators: Addition (+), Subtraction (-), Multiplication (*), and Division (/) buttons are readily available. Digits: Enter numbers from 0 to 9 with ease. <br data-v-dd015c9b> Decimal (.): Add decimal points to your numbers as needed. <br data-v-dd015c9b> Equal (=): Obtain the results of your calculations at the press of a button. Whether you need to crunch numbers for work, school, or everyday tasks, this calculator simplifies the process, ensuring accurate results every time. </p></div>',1);function D(l,a,d,t,v,c){return m(),k("div",g,[i("div",w,[i("div",x,[i("div",q,f(t.current||"0"),1),i("div",{class:"btn",onClick:a[0]||(a[0]=(...n)=>t.clear&&t.clear(...n))},"AC"),i("div",{class:"btn",onClick:a[1]||(a[1]=(...n)=>t.sign&&t.sign(...n))},"+/-"),i("div",{class:"btn",onClick:a[2]||(a[2]=(...n)=>t.percent&&t.percent(...n))},"%"),i("div",{class:"btn operator",onClick:a[3]||(a[3]=(...n)=>t.add&&t.add(...n))},"+"),i("div",{class:"btn",onClick:a[4]||(a[4]=n=>t.append("7"))},"7"),i("div",{class:"btn",onClick:a[5]||(a[5]=n=>t.append("8"))},"8"),i("div",{class:"btn",onClick:a[6]||(a[6]=n=>t.append("9"))},"9"),i("div",{class:"btn operator",onClick:a[7]||(a[7]=(...n)=>t.minus&&t.minus(...n))},"-"),i("div",{class:"btn",onClick:a[8]||(a[8]=n=>t.append("4"))},"4"),i("div",{class:"btn",onClick:a[9]||(a[9]=n=>t.append("5"))},"5"),i("div",{class:"btn",onClick:a[10]||(a[10]=n=>t.append("6"))},"6"),i("div",{class:"btn operator",onClick:a[11]||(a[11]=(...n)=>t.times&&t.times(...n))},"*"),i("div",{class:"btn",onClick:a[12]||(a[12]=n=>t.append("1"))},"1"),i("div",{class:"btn",onClick:a[13]||(a[13]=n=>t.append("2"))},"2"),i("div",{class:"btn",onClick:a[14]||(a[14]=n=>t.append("3"))},"3"),i("div",{class:"btn operator",onClick:a[15]||(a[15]=(...n)=>t.divide&&t.divide(...n))},"/"),i("div",{class:"btn zero",onClick:a[16]||(a[16]=n=>t.append("0"))},"0"),i("div",{class:"btn",onClick:a[17]||(a[17]=(...n)=>t.dot&&t.dot(...n))},"."),i("div",{class:"btn operator",onClick:a[18]||(a[18]=(...n)=>t.equal&&t.equal(...n))},"=")])]),A])}const I=p(y,[["render",D],["__scopeId","data-v-dd015c9b"]]);export{I as default};