<template>
  <div class="mainFooter">
    <div class="footer-container">
      <div class="cloudContainer">
        <img src="/images/marioCloud.png" alt="" />
        <img src="/images/marioCloud.png" alt="" />
        <img src="/images/marioCloud.png" alt="" />
       <img src="/images/marioCloud.png" alt="" />
        <img src="/images/marioCloud.png" alt="" />
        <img src="/images/sup.png" alt="" id="sup">
    
      </div>
      <div class="greenContainer"></div>
      <div class="roadContainer">
        <div class="dottedLine"></div>
        <img src="/images/mario.png" alt="" />
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
.footer-container{
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
  animation: clouds 90s linear  infinite;
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
  0% {transform: translateX(0);}
  100%{transform: translateX(90vw);}
}
@keyframes drive {
  0% {transform: translateX(0);}
  30%{ transform: translateX(20vw) translateY(-20px) translateY(-30px);}
  100%{transform: translateX(90vw);}
}

</style>
