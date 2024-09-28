import{_ as k,r as e,j as B,w as x,o as f,c as _,a as s,f as S,e as D,v as T,t as l,k as W,n as h,l as A,i as b}from"./index-03009b11.js";const M={name:"weather-apps",provide:{backGroundChange:"black"},setup(){const o=e(""),r=e("ae3335d94a1cbbff33e8ba9bab5de492"),d=e(""),a=e(""),p=e(""),m=e(""),n=e("weatherApps"),i=e(""),y=e(""),w=e(""),u=e(""),C=e([]),c=e(""),v=e(""),g=B(()=>`https://api.openweathermap.org/data/2.5/weather?q=${o.value}&appid=${r.value}`);return x(a,t=>{t==="Clouds"?(n.value="cloudsBackground",i.value="/images/cloudy.png",c.value="cloudBg",v.value="cloudTextColor"):t==="Rain"?(n.value="rainBackground",i.value="/images/rain.png",c.value="rainBg",v.value="rainTextColor"):t==="Clear"?(n.value="clearBackground",i.value="/images/clear.png",c.value="clearBg"):t==="Mist"&&(n.value="mistBackground",i.value="/images/mistWeatherBg.jpg",c.value="mistBg")}),{city:o,api_key:r,api_url:g,temp:d,weather:a,cityName:p,searchWeather:async()=>{try{if(o.value.trim()===""){alert("input city please");return}const t=await A.get(g.value);console.log(t.data),t.data.coord?(d.value=t.data.main.temp,u.value=d.value-273.15,y.value=Math.trunc(u.value),a.value=t.data.weather[0].main,p.value=t.data.name):console.log("invalid or incomplete response data")}catch(t){console.log(`error: ${t}`),alert("please input city")}o.value=""},error:m,weatherChangeBackground:n,weatherImage:i,deg:y,forecastData:w,celcius:u,dailyWeather:C,defaultBg:c,changeTextColor:v}}},N={class:"mainForm form-control"},I={class:"inputContainer"},V=b('<label data-v-d26c8060><span style="transition-delay:0ms;" data-v-d26c8060>S</span><span style="transition-delay:50ms;" data-v-d26c8060>e</span><span style="transition-delay:100ms;" data-v-d26c8060>a</span><span style="transition-delay:150ms;" data-v-d26c8060>r</span><span style="transition-delay:200ms;" data-v-d26c8060>c</span><span style="transition-delay:250ms;" data-v-d26c8060>h</span><span style="transition-delay:300ms;" data-v-d26c8060></span><span style="transition-delay:350ms;" data-v-d26c8060>C</span><span style="transition-delay:400ms;" data-v-d26c8060>i</span><span style="transition-delay:450ms;" data-v-d26c8060>t</span><span style="transition-delay:500ms;" data-v-d26c8060>y</span></label>',1),F={class:"cityDetail"},U={class:"imageDiv"},j=["src"],q={key:0},E=b('<h3 data-v-d26c8060> Description: <br data-v-d26c8060> Weather App </h3><br data-v-d26c8060><p class="text-[black]" data-v-d26c8060> Stay ahead of the elements with this convenient weather app. Simply enter the city you want to check, and instantly access key weather information, including temperature and conditions. The app fetches real-time data from OpenWeatherMap, ensuring you have accurate and up-to-date forecasts at your fingertips. </p><br data-v-d26c8060><h3 data-v-d26c8060>Key Features:</h3><br data-v-d26c8060><p data-v-d26c8060> City Search: Enter your desired city for instant weather details. <br data-v-d26c8060> Temperature: Get the current temperature in your chosen location. <br data-v-d26c8060> Weather Conditions: Stay informed about the weather conditions (e.g., clear, cloudy, rainy) in the area. <br data-v-d26c8060> User-Friendly: A clean and intuitive interface ensures a seamless user experience. <br data-v-d26c8060><br data-v-d26c8060><b data-v-d26c8060> Using Composition API: watcher, ref, computed and axios</b></p>',7),G=[E];function z(o,r,d,a,p,m){return f(),_("div",{class:h(["mainContainer",a.defaultBg])},[s("div",{class:h(["weatherApps",a.weatherChangeBackground])},[s("div",N,[s("form",{onSubmit:r[1]||(r[1]=S((...n)=>a.searchWeather&&a.searchWeather(...n),["prevent"]))},[s("div",I,[D(s("input",{type:"value",required:"","onUpdate:modelValue":r[0]||(r[0]=n=>a.city=n)},null,512),[[T,a.city]]),V])],32)]),s("div",F,[s("h3",null,l(a.cityName),1),s("h1",null,l(a.weather),1),s("div",U,[s("img",{src:a.weatherImage,alt:""},null,8,j),a.temp?(f(),_("h1",q,l(a.deg)+"°c",1)):W("",!0),s("h1",null,l(a.forecastData),1)])])],2),s("div",{class:h(["description",a.changeTextColor])},G,2)],2)}const P=k(M,[["render",z],["__scopeId","data-v-d26c8060"]]);export{P as default};
