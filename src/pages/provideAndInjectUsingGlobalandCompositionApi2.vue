<template>
  <div>
    <h1>this data comes from  employee.js</h1>

    <div v-for="(employees, index) in employee" :key="employees.id">
      <h2>
        {{ index + 1 }} - {{ employees.fullname }} - {{ employees.age }}
      </h2>
    </div>
  </div>
</template>

<script>
import { inject } from "vue";
export default {
  name: "provide2",
  setup() {
    const employee = inject("employee");
    return {
      employee,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>

