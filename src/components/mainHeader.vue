<template>
  <div class="mainHeader">
    <h1>
      VUE JS - Ralph <span><i class="bx bxs-cat"></i></span>
    </h1>
    <div class="account">
      <i class="bx bxs-user-plus"></i>
       <i class="bx bx-globe"></i>
       
    </div>

    <!-- <animatedParticleVue class="particle"/> -->
  </div>
</template>

<script>
// import animatedParticleVue from '../views/animatedParticle.vue';
export default {
  name: "main-header",
  components: {
    // animatedParticleVue
  }
};
</script>

<style scoped>
.mainHeader {
  height: 10vh;
  border-bottom: 2px solid rgb(190, 185, 185);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.mainHeader span .bx {
  color: rgb(252, 102, 3);
  font-size: 40px;
}
.account .bx {
  font-size: 40px;
  padding: 0 5px;
  cursor: pointer;
}
.account .bx:hover {
    color: rgb(252, 102, 3);
}

</style>