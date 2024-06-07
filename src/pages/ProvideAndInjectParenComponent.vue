<template>
  <div>
    <h2>this data comes from employee.js</h2>
    <div v-for="data in dataFromEmplpyeeJs" :key="data" :class="dataFromEmplpyeeJs ? 'dataFrom' : ''">
      {{ data.id }} - {{ data.fullname }} - {{ data.age }}
    </div>
    <h1>thi sis the component BBBBBBBBBBBBBBBB</h1>
    <ProvideAndInjectB />
    <h1>this is the component CCCCCCCCCCCCCCCCCCC</h1>
    <ProvideAndInjectC />
    <div v-for="baby in thisGirls" :key="baby.id">

      <h1>{{ baby.name }}</h1>
    </div>
  </div>
</template>

<script>
import { inject } from "vue";
import ProvideAndInjectB from "./ProvideAndInjectB.vue";
import ProvideAndInjectC from "./ProvideAndInjectC.vue";
export default {
  name: "componentA",
  provide: {
    username: "ralph santolorin",
    anotherUsername: "gadwin santolorin",
    myName: "shenron santolorin",
    themeColor: "blue",
    backGroundColor: "yellow",
    border: "2px solid red",
    person: {
      name: 'tesa',
      age: 35,
      love: 'love it'
    }
  },
  components: {
    ProvideAndInjectB,
    ProvideAndInjectC,
  },
  setup() {
    const dataFromEmplpyeeJs = inject("employee");
    const thisGirls = inject('girl')
    return {
      dataFromEmplpyeeJs,
      thisGirls
    };
  },
};
</script>

<style>
.dataFrom {
  border: 2px solid red;
}
</style>
