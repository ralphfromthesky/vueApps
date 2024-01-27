<template>
  <div>
    <h1>this is props a message comes from parent component App.vue</h1>
    <h2>{{ messageFromParentComponent }} - {{ AnotherMessage }}</h2>
    <hr />
    <h1 :class="tae ? 'taeDaw': 'taeNga'">{{ sampleDataBindingProsp }}</h1>
    <h1>{{ anoDaw }} </h1>

    <!-- using provide and inject globally -->
    <div v-for="data in dataFromAnotherSampleOfData" :key="data">
      <h1>{{ data.name }} - {{ data.age }} - {{ data.location }}</h1>

    </div>
  
  </div>
</template>

<script>
import { computed, inject, ref, watch } from "vue";
export default {
  name: "PropsAndCompositionAPIchild",
  // props: ["messageFromParentComponent", "AnotherMessage", 'sampleDataBindingProsp', 'anoDaw'],
  props: {
    messageFromParentComponent: String,
    AnotherMessage: String,
    sampleDataBindingProsp: String,
    anoDaw: String,
  },
  setup(props, {emit}) {
    const dataFromAnotherSampleOfData = inject("datas");
    const tae = ref(true)
    const names = ref(props.model)
    const locations = ref(props.model);
    const ages = ref(props.model)


    return {
      dataFromAnotherSampleOfData,
      tae,
      names,
      ages,
      locations,

    };
  },
};
</script>

<style scoped>
.taeNga {
  color: red;
}
.taeDaw {
  border: 2px solid red;
}
</style>