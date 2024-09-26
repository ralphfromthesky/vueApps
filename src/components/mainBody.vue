<template>
  <div class="mainBody">
    <!-- <RouterView class="route"/> -->
    <animatedParticleVue class="particle" />
    <RouterView class="route"/>
  </div>
</template>

<script>
import { ref } from "vue";
import animatedParticleVue from "../views/animatedParticle.vue";
// import Router from "../pages/router.vue";

export default {
  name: "main-body",
  components: {
    animatedParticleVue,
    // Router,
  },
  setup() {
    const show = ref(false);
    return {
      show,
    };
  },
};
</script>

<style scoped>
.mainBody {
  height: 80vh;
  display: flex;
  justify-content: center;
  padding: 20px 0;
  position: relative;
  overflow-x: hidden;
}
.particle {
  position: absolute;
  transform: translateY(-2%);
  width: 100%;
  z-index: -1;
}

/* .route {
  z-index: 1;
} */

</style>
