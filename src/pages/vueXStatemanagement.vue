<template>
  <div class="description">
    <h1 style="text-align: center;">this is the vueX state management</h1>
    <br><br>
    <div class="vuex">
      <productOneVueXVue />
      <productTwoVueXVue />
    </div>
  </div>
</template>

<script>
import productOneVueXVue from "./productOneVueX.vue";
import productTwoVueXVue from "./productTwoVueX.vue";
export default {
  components: {
    productOneVueXVue,
    productTwoVueXVue,
  },
};
</script>

<style scoped>
.vuex {
  display: flex;
  justify-content: space-around;
  width: 50vw;
}

</style>
