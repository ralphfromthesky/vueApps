<template>
  <div>
    <div
      class="homeContainer flex"
      :class="{ night: store.state.isNight, 'light ': !store.state.isNight }"
    >
      <div class="imgContainer flex justify-center flex-1"  draggable="true">
        <img src="/images/myPhoto.jpg" alt=""> 
      </div>
      <div class="descriptionContainer  flex-1">
        <div>About Me:</div>
        <div>
          Hello there, I’m Ralph, a passionate Vue.js developer with a creative
          and detail-oriented approach to crafting user-friendly and visually
          appealing web applications. Along with my love for coding, I’m a solo
          parent to two wonderful kids, and I manage our little household all on
          my own. Balancing parenthood with my career has taught me a lot about
          resilience, adaptability, and time management. My journey in web
          development has equipped me with a strong foundation in Vue.js,
          enabling me to build interactive and responsive solutions for diverse
          client needs. I thrive on tackling challenges and turning ideas into
          dynamic, efficient, and engaging digital experiences.
        </div>
      </div>
      <div class="divs"></div>
    </div>
  </div>
</template>

<script>
import { useStore } from "@/store/store";

export default {
  name: "this is the home",
  setup() {
    const store = useStore();
    return {
      store,
    };
  },
};
</script>

<style scoped>
.night {
  border: 1px solid white;
  padding: 5px;
}
.light {
  box-shadow: 10px 10px 30px #bebebe, -10px -10px 20px #ffffff;
}
img {
  height: 40vh;
}
.homeContainer {
  display: flex;
  justify-content: center;
  width: auto;
  border-radius: 20px;
  align-items: center;
  background-color: transparent;
}
.descriptionContainer {
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 20px;
  flex-direction: column;
  width: 30vw;
}
h3 {
  line-height: 2;
}
h2 {
  font-size: 40px;
  font-weight: 800;
}
@media screen and (max-width: 430px) {
  .homeContainer {
    flex-direction: column;
  }
  .homeContainer img {
    height: 300px;
    z-index: -1;
  }
  h3 {
    font-size: .8rem;
  }
  .descriptionContainer {
    width: auto;
  }
  .imgContainer {
    justify-content: center;
    z-index: 1;
  }
}
</style>
