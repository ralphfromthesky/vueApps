<template>
  <div>
    <h1>{{ store.state.calendars.data }}</h1>
    <h1>{{ store.state.calendars.balance }}</h1>
    <h1>{{ calendar }}</h1>
    <button @click="store.commit('calendars/changeData', 'ralph')">
      change name
    </button>
    <button @click="store.commit('calendars/increment', 500)">add</button>
    <button @click="increment(1000)">addThis</button>
    <button @click="store.dispatch('calendars/fetchData', 4000)">fetch</button
    ><br />
    <button @click="showProduct(10000)">fetchThisData</button> <br />
    <div v-for="products in product" :key="products.id"></div>

    <div v-for="product in showGetters" :key="product.id">
      {{ product.pangalan }} - {{ product.presyo }}
      <button @click="deleteThis(product.id)">DEL</button>
    </div>
    <form @submit.prevent="addData">
      <input type="text" v-model="title" />
      <input type="text" v-model="price" />

      <button>add</button>
    </form>
  </div>
</template>

<script>
import { useStore } from "@/store/store";
import { computed, ref, vModelCheckbox } from "vue";
export default {
  name: "calendar",
  setup() {
    const store = useStore();
    const product = ref([]);
    const title = ref("");
    const price = ref("");
    const calendar = computed(() => {
      return store.state.calendars.data;
    });

    const increment = (payload) => {
      store.commit("calendars/increment", payload);
    };
    const showProduct = async (payload) => {
      await store.dispatch("calendars/fetchData", payload);
      product.value = store.state.calendars.products;
      console.log(product.value);
    };
    const showGetters = computed(() => {
      return store.getters["calendars/showGetters"];
    });

    const deleteThis = async (id) => {
      await store.commit("calendars/deleteProducts", id);
    };

    const addData = async () => {
      const newProduct = {
        title: title.value,
        price: price.value,
      };
      await store.commit("calendars/addData", newProduct);
    };
    return {
      store,
      calendar,
      increment,
      product,
      showProduct,
      showGetters,
      deleteThis,
      addData,
      title,
      price,
    };
  },
};
</script>

<style lang="scss" scoped></style>
