<template>
  <div>
    <div v-for="datas in data" :key="datas">
      <h1>{{ datas }}</h1>
    </div>
    <h2>{{ messageFromTheSky }}</h2>

    <div v-for="tupac in tupacShakur" :key="tupac">
      <h1>{{ tupac }} </h1>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  props: ["data", "messageFromTheSky", "tupacShakur"],
  setup(props) {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
