<template>
  <div>
    <h1>this props object</h1>

    <div>
    {{ haha.name}}
    {{ haha.status }}
    {{ haha.age }}
    
    </div>
    <div v-for="hahas in haha" :key="hahas">
        {{ hahas }}

    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "PropsAndCompositionAPIChild4",
  props: {
    haha: Object
  },
  setup() {
    return {

    };
  },
};
</script>

<style lang="scss" scoped></style>
