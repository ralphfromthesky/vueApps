<template>
  <div>
    <h1>Product two List</h1>
    <br>
    <ul>
      <li v-for="product in newProducts" :key="product.name">
        {{ product.name }} - {{ product.price }}
      </li>
    </ul>
    <br>
    <div class="halfPrice">
      <h1>this is the times 3 price of product two</h1>
      <br>
      <ul>
        <li v-for="product in newSaleProducts" :key="product">
          {{ product.name }} - {{ product.price }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    // const products = computed(() => store.state.product);
    const newProducts = computed(() => store.state.newProducts)
    // const saleProducts = computed(() => {
    //   return store.getters.saleProducts;
    // });

    const newSaleProducts = computed(() => {
      return store.getters.newSaleProduct
    })

    return {
      // products,
      // saleProducts,
      newProducts,
      newSaleProducts
    };
  },
};
</script>

<style lang="scss" scoped></style>
