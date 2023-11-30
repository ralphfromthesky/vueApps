<template>
  <div class="mainBody">
       <RouterView/>
       <animatedParticleVue class="particle"/>
  </div>
</template>

<script>
import { ref } from "vue";
import animatedParticleVue from '../views/animatedParticle.vue';

export default {
  name: "main-body",
  components: {
    animatedParticleVue
  },
  setup () {
    const show = ref(false)
    return {

      show
    }
  }
};
</script>

<style scoped>
.mainBody {
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 20px 20px;
  position: relative;
  overflow: scroll;
}
.particle {
    position: absolute;
    z-index: -1;
    transform: translateY(-2%);
    width: 100%;
}
</style>