<template>
  <div>
    <h1>this data comes from sampleData.js </h1> <br>
    <div v-for="data in sampleData" :key="data.name">
      <h1>
        {{ data.id }} - {{ data.name }} - {{ data.age }} {{ data.location }}
      </h1>
    </div>
    <div class="my-[2rem]">
      <h1>this data comes from employee.js </h1> <br>

      <div v-for="emp in employee" key="emp.id">
        <h1>{{ emp.id }} - {{ emp.fullname }} {{emp.age  }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
import { inject, ref } from "vue";

export default {
  setup() {
    const sampleData = inject("sampleData");
    const employee = inject('employee')

    return {
      employee,
      sampleData
    };
  },
};
</script>

<style lang="scss" scoped></style>