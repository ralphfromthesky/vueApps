<template>
    <div>
      <h1>Product one list</h1>
      <button @click="reducePrice(4)">reduce price</button>
      <br>
      <ul>
        <li v-for="product in products" :key="product.name">
          {{ product.name }} - {{ product.price }}
        </li>
      </ul>
      <br>
      <div class="div">
        <h1>half price of the product</h1>
        <br>
      <ul>
        <li v-for="product in saleProducts" :key="product">
          {{product.name}} - {{ product.price }}
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
  
      const products = computed(() => store.state.product);
      const saleProducts = computed(() => {return store.getters.saleProducts});

      const reducePrice = (amount) => {
        store.dispatch('reducePrice', amount)
      }
  
      return {
        products,
        saleProducts,
        reducePrice
      };
    },
  };
  </script>
  