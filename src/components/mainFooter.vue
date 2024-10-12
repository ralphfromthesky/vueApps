<template>
  <div class="mainFooter">
    <div class="footer-container">
      <div class="cloudContainer">
        <img src="/images/marioCloud.png" alt="" />
        <img src="/images/marioCloud.png" alt="" />
        <img src="/images/marioCloud.png" alt="" />
        <img src="/images/marioCloud.png" alt="" />
        <img src="/images/marioCloud.png" alt="" />
        <img src="/images/sup.png" alt="" id="sup" />
        <img src="/images/ufo.png" alt="" id="ufo" />
      </div>
      <div class="greenContainer"></div>
      <div class="roadContainer">
        <div class="dottedLine"></div>
        <img src="/images/mario.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "main-footer",
};
</script>

<style scoped>
.mainFooter {
  height: 10vh;
}
.footer-container {
  position: relative;
}
.cloudContainer #sup {
  position: absolute;
  height: 30px;
  top: 0;
  animation: clouds 10s linear infinite;
}
.cloudContainer {
  background-color: #82c9ee;
  height: 40px;
}
.cloudContainer img {
  height: 25px;
  position: absolute;
  animation: clouds 50s linear infinite;
}
.cloudContainer img:nth-child(1) {
  animation: clouds 90s linear infinite;
  top: 15px;
}
.cloudContainer img:nth-child(2) {
  animation: clouds 40s linear reverse infinite;
  top: 10px;
}
.cloudContainer img:nth-child(3) {
  animation: clouds 80s linear reverse infinite;
  top: 5px;
}
.cloudContainer img:nth-child(5) {
  animation: clouds 150s linear infinite;
}
.cloudContainer #ufo {
  height: 50px;
  animation: ufo 10s linear infinite;
  transform-origin: 10px 10px;
}
.greenContainer {
  background-color: #277e57;
  height: 15px;
}
.roadContainer {
  background-color: #5c5a5c;
  height: 40px;
  border-top: 5px solid #757475;
  border-bottom: 5px solid #757475;
}
.roadContainer img {
  height: 30px;
  animation: drive 10s linear infinite;
}
.dottedLine {
  border-bottom: 5px dotted white;
}

@keyframes clouds {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(70vw);
  }
}
@keyframes drive {
  0% {
    transform: translateX(0);
  }
  30% {
    transform: translateX(20vw) translateY(-20px) translateY(-30px);
  }
  100% {
    transform: translateY(-20px);
    transform: translateX(10vw);
  }
}
@keyframes ufo {
  0% {
    transform: translateX(0);
  }
  20% {
    transition: 100s;
    transform: translateX(30vw);
  }
  25% {
    transform: translateX(0);
  }
  30% {
    transform: scale(2) translateX(30vw);
  }
  50% {
    transform: translateX(70vw);
  }
  60% {
    transform: rotate(90deg) scale(0.5);
  }
  70% {
    transform: translateX(70vw) scale(0.6);
  }
  85% {
    transform: translateX(0) scale(1.5) rotate(90deg);
  }
  100% {
    transform: translateX(40vw) rotate(360deg) scale(.8) translateY(-5px) translateX(90vw);
  }
}
#ufo {
  height: 200px;
}

@media screen and (max-width: 430px) {
  @keyframes clouds {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(90vw);
  }
}
@keyframes drive {
  0% {
    transform: translateX(0);
  }
  30% {
    transform: translateX(20vw) translateY(-20px) translateY(-30px);
  }
  100% {
    transform: translateY(-20px);
    transform: translateX(90vw);
  }
}
@keyframes ufo {
  0% {
    transform: translateX(0);
  }
  20% {
    transition: 100s;
    transform: translateX(30vw);
  }
  25% {
    transform: translateX(0);
  }
  30% {
    transform: scale(2) translateX(30vw);
  }
  50% {
    transform: translateX(70vw);
  }
  60% {
    transform: rotate(90deg) scale(0.5);
  }
  70% {
    transform: translateX(50vw) scale(0.6);
  }
  85% {
    transform: translateX(0) scale(1.5) rotate(90deg);
  }
  100% {
    transform: translateX(40vw) rotate(360deg) scale(.8) translateY(-5px) translateX(90vw);
  }
}
}
</style>
