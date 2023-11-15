<template>
  <div>
    <!-- call the 'name' or interpolate the 'name' here -->
    hello my name is {{ name }} at {{ message }} {{ number }} {{ sample }}
    {{ thisIsSample }}
    <h1>
      this is binding composition API {{ myname }} {{ mymessage }}
      {{ mynumber }}
    </h1>
    <h2>sample of data from parent</h2>
    <div v-for="datas in data" :key="datas">
      {{ datas }}
    </div>
  </div>
</template>

<script>
export default {
  name: "propsChild",
  // define the 'name' here
  props: [
    "name",
    "message",
    "number",
    "sample",
    "thisIsSample",
    "myname",
    "mynumber",
    "mymessage",
    "data",
  ],
};
</script>

<style scoped>
h1 {
  color: red;
}
</style>
