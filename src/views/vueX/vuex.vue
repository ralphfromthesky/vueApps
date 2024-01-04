<template>
  <div>
    <h1>{{ store.state.counter }}</h1>
    <div class="btn">
      <button @click="store.commit('increase')">+</button>
      <button @click="store.commit('decrease')">-</button>
      <button @click="fetchThisData">1</button>
    </div>

    <!-- Loop through fetched data and display it -->
    <ul>
      <li v-for="item in store.state.fetchedData" :key="item.id">
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex"; // this one need for using the store.js
useStore;
export default {
  setup() {
    const store = useStore();

    const fetchThisData = async () => {
      try {
        await store.dispatch("fetchApi");
      } catch (error) {
        console.log(`this is the error: ${error}`);
      }
    };
    return {
      store,
      fetchThisData,
    };
  },
};
</script>

<style scoped>
.btn button {
  font-size: 50px;
  margin: 0 10px;
}
</style>
