<template>
  <div>
    <div class="main">
      <div class="products">
        <button @click="showProducts">show Products</button>
        <div class="showProd" v-for="product in products" :key="product">
        <h4>{{ product.title }} - {{ product.price }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "@/store/store";
import { ref } from "vue";
export default {
  name: "crud",
  setup() {
    const store = useStore();
    const products = ref([]);
    const showProducts = async () => {
      await store.dispatch("account/fetchData");
      products.value = store.state.account.products;
      console.log(products.value)
    };
    return {
      store,
      products,
      showProducts
    };
  },
};
</script>

<style scoped>
.showProd {

}
</style>
