<template>
  <div>
    <div class="main">
      <div class="main-header">
        <h1 v-if="showDineLabel">{{ dine }}</h1>
        <h1 v-if="showtakeLabel">{{ take }}</h1>
        <button @click="goBack" v-if="backBtn">BACK</button>
      </div>
      <div class="takeOrder">
        <div class="dine-in" v-if="showDineIn" @click="showDine">
          <h1>Dine-in</h1>
        </div>
        <div class="take-out" v-if="showTakeOut" @click="showOut">
          <h1>Take-Out</h1>
        </div>
      </div>
      <div class="sideMenu" v-if="backBtn">
        <div class="sideMenuItems" @click="showContent('a')">1</div>
        <div class="sideMenuItems" @click="showContent('b')">2</div>
        <div class="sideMenuItems" @click="showContent('c')">3</div>
        <div class="sideMenuItems" @click="showContent('d')">4</div>
        <div class="sideMenuItems" @click="showContent('e')">5</div>
        <div class="sideMenuItems" @click="showContent('f')">6</div>
        <div class="sideMenuItems" @click="showContent('g')">7</div>
        <div class="sideMenuItems" @click="showContent('h')">8</div>
        <div class="sideMenuItems" @click="showContent('i')">9</div>
        <div class="sideMenuItems" @click="showContent('j')">10 </div>
      </div>
      <div class="content">
            <div class="contentContainer" id="a">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, debitis!</div>
            <div class="contentContainer" id="b">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt fugiat fugit, dolorem corrupti totam consequatur.</div>
            <div class="contentContainer" id="c">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, quibusdam! Sapiente, iure magnam. Ullam reprehenderit a velit? Accusamus, placeat reprehenderit.</div>
            <div class="contentContainer" id="d">Lorem ipsum dolor sit amet.</div>
            <div class="contentContainer" id="e">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae placeat incidunt officiis!</div>
            <div class="contentContainer" id="f">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati omnis tempore ullam? Vel at dolorem autem.</div>
            <div class="contentContainer" id="g">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
            <div class="contentContainer" id="h">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ratione odit error.</div>
            <div class="contentContainer" id="i">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ratione odit error.</div>
            <div class="contentContainer" id="j">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ratione odit error.</div>
        </div>
      <div class="main-footer">
        <h1>this is footer</h1>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "food",
  setup() {
    const showDineIn = ref(true);
    const showTakeOut = ref(true);
    const showDineLabel = ref(false);
    const showtakeLabel = ref(false);
    const backBtn = ref(false);

    const dine = ref("Dine-in");
    const take = ref("take-out");

    const showDine = () => {
      showDineIn.value = false;
      showTakeOut.value = false;
      showDineLabel.value = true;
      backBtn.value = true;
    };
    const showOut = () => {
      showDineIn.value = false;
      showTakeOut.value = false;
      showtakeLabel.value = true;
      backBtn.value = true;
    };
    const goBack = () => {
      showDineIn.value = true;
      showTakeOut.value = true;
      showDineLabel.value = false;
      showtakeLabel.value = false;
      backBtn.value = false;
    };
    const showContent = () => {

    }
    return {
      showDineIn,
      showTakeOut,
      dine,
      take,
      showDine,
      showOut,
      showDineLabel,
      showtakeLabel,
      goBack,
      backBtn,
      showContent
    };
  },
};
</script>

<style scoped>
.contentContainer{
  display: none;
}
.main {
  height: 75vh;
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid black;
  border-radius: 5px;
  position: relative;
}
.dine-in,
.take-out {
  height: 30vh;
  width: 15vw;
  border: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.takeOrder {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.main-header,
.main-footer {
  height: 5vh;
  background-color: red;
  color: white;
  display: Flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  position: relative;
}
.main-header button {
  position: absolute;
  right: 10px;
}
.sideMenu {
  height: 65vh;
  width: 10vw;
  border: 2px solid black;
  position: absolute;
  left: 0;
  bottom: 45px;

}
.sideMenu {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  z-index: 1;
}
</style>
