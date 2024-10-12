import{_ as h,r as u,d as k,w as S,o as d,c as v,a as n,k as f,t as _,m as A,q as p,s as x,e as g,x as y,F as C,g as N,y as L,n as V,u as U,p as B,b as D}from"./index-419621f3.js";const T={name:"music-player",emits:["showSonglist","next","prev","playThisAudio"],props:["song","artist","img","audio","currentIndex","musicList","playAudio"],setup(s){const t=u(!1),a=u(null),e=u(""),c=u(!0),r=u(!1),o=()=>{a.value.currentTime=0,a.value.pause(),t.value=!1},i=()=>{s.currentIndex<s.musicList.length-1?(s.playAudio(s.musicList[s.currentIndex+1].title,s.musicList[s.currentIndex+1].artist,s.musicList[s.currentIndex+1].img,s.musicList[s.currentIndex+1].audioUrl),a.value.play()):(s.playAudio(s.musicList[0].title,s.musicList[0].artist,s.musicList[0].img,s.musicList[0].audioUrl),a.value.play())};k(()=>{a.value.addEventListener("ended",i)});const m=()=>{t.value=!t.value;const l=document.getElementById("audioPlayer");t.value?(l.play(),c.value=!1,r.value=!0):(l.pause(),c.value=!0,r.value=!1)};return S(()=>s.currentIndex,l=>{o(),s.playAudio(s.musicList[l].title,s.musicList[l].artist,s.musicList[l].img,s.musicList[l].audioUrl)}),S(e,l=>{}),{playPause:m,isPlaying:t,continuesPlay:i,audioPlayer:a,resetAudio:o,bgImage:e,hidePlay:c,hidePause:r}}},E={class:"songList"},M={class:"playButton"},j={class:"songDetails"},z={class:"audioDivs"},F=["src"],q={class:"controls"};function Y(s,t,a,e,c,r){return d(),v("div",null,[n("div",{class:"main-container",style:A({backgroundImage:`url(${a.img})`})},[n("div",E,[n("i",{class:"bx bx-menu",onClick:t[0]||(t[0]=o=>s.$emit("showSonglist"))})]),n("div",M,[e.hidePlay?(d(),v("i",{key:0,class:"bx bx-play-circle",onClick:t[1]||(t[1]=o=>e.playPause())})):f("",!0),e.hidePause?(d(),v("i",{key:1,class:"bx bx-pause-circle",onClick:t[2]||(t[2]=o=>e.playPause())})):f("",!0)]),n("div",j,[n("div",null,[n("h3",null,_(a.song)+" - "+_(a.artist),1)]),n("div",z,[n("audio",{id:"audioPlayer",controls:"true",preload:"auto",ref:"audioPlayer",src:a.audio,onEnded:t[3]||(t[3]=(...o)=>e.continuesPlay&&e.continuesPlay(...o))},null,40,F)]),n("div",q,[n("i",{class:"bx bx-skip-previous-circle",onClick:t[4]||(t[4]=o=>s.$emit("prev"))}),n("i",{class:"bx bx-skip-next-circle",onClick:t[5]||(t[5]=o=>s.$emit("next"))})])])],4)])}const G=h(T,[["render",Y],["__scopeId","data-v-b676c3cd"]]);const H={components:{musicSongPlayerVue:G},name:"song-list",emits:["showSongPlayer"],setup(){const s=u(""),t=u(""),a=u(""),e=u(0),c=u(null),r=u(!1),o=u(!0),i=p("musicList"),m=u(!0),l=(P,w,b,I)=>{s.value=P,t.value=w,c.value=b,a.value=I,m.value=!1};return{songName:s,songImg:c,artistName:t,musicList:i,showSongPlayer:r,showSongList:o,playAudio:l,nextSong:()=>{e.value<i.value.length-1?(e.value+=1,console.log("paying next:"+e.value),l(i.value[e.value].title,i.value[e.value].artist,i.value[e.value].img,i.value[e.value].audioUrl)):e.value=0,l(i.value[e.value].title,i.value[e.value].artist,i.value[e.value].img,i.value[e.value].audioUrl)},currentIndex:e,prevSong:()=>{e.value>0?(e.value-=1,console.log("paying prev:"+e.value)):e.value=i.value.length-1,l(i.value[e.value].title,i.value[e.value].artist,i.value[e.value].img,i.value[e.value].audioUrl)},audioSrc:a,arrow:m}}},J={class:"goToMusicPlayer"},K=["onClick"];function O(s,t,a,e,c,r){const o=x("musicSongPlayerVue");return d(),v("div",null,[n("div",J,[g(n("i",{class:"bx bx-caret-right",onClick:t[0]||(t[0]=i=>(e.showSongPlayer=!0,e.showSongList=!1,e.arrow=!1))},null,512),[[y,e.arrow]])]),(d(!0),v(C,null,N(e.musicList,i=>g((d(),v("div",{class:"musicSongList-container",key:i},[n("h3",{onClick:m=>(e.showSongPlayer=!0,e.showSongList=!1,e.playAudio(i.title,i.artist,i.img,i.audioUrl))},_(i.title),9,K)])),[[y,e.showSongList]])),128)),g(L(o,{onShowSonglist:t[1]||(t[1]=i=>(e.showSongList=!0,e.showSongPlayer=!1,e.arrow=!0)),song:e.songName,artist:e.artistName,img:e.songImg,audio:e.audioSrc,songList:e.musicList[e.currentIndex],currentIndex:e.currentIndex,musicList:e.musicList,onNext:e.nextSong,onPrev:e.prevSong,onPlayThisAudio:e.playAudio,playAudio:e.playAudio},null,8,["song","artist","img","audio","songList","currentIndex","musicList","onNext","onPrev","onPlayThisAudio","playAudio"]),[[y,e.showSongPlayer]])])}const Q=h(H,[["render",O],["__scopeId","data-v-cce61312"]]);const R={name:"music-app",components:{musicSongListVue:Q},setup(){return{store:U()}}},W=s=>(B("data-v-a1b7014a"),s=s(),D(),s),X={class:"music-app-container"},Z=W(()=>n("div",{class:"description"},[n("h3",null,"Description:"),n("br"),n("p",null," Discover and enjoy your favorite music with our easy-to-use app. Browse songs, switch tracks, and immerse yourself in the world of music effortlessly. Your go-to companion for all your musical moments. "),n("br"),n("h3",null," Using Compostion API, ref, watch, component events-emits, onMounted and props. ")],-1));function $(s,t,a,e,c,r){const o=x("musicSongListVue");return d(),v("div",X,[n("div",{class:V(["main-container",{night:e.store.state.isNight,light:!e.store.state.isNight}])},[L(o)],2),Z])}const ie=h(R,[["render",$],["__scopeId","data-v-a1b7014a"]]);export{ie as default};
