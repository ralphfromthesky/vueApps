<template>
  <div class="vuexMain">
    <h1 style="text-align: center">vuex state management</h1>
    <h1>total: {{ increment }}</h1>
    <div class="btn">
      <button @click="store.commit('increment', 100)">Add 100</button>
      <button @click="add(500)">Add 500</button>
      <button @click="add(1000)">Add 1000</button>
      <button @click="add(1500)">Add 1500</button>
    </div>
    <hr />
    <div class="products-container">
      <div class="product-buttons">
        <button @click="showProducts" :class="product1 ? 'btnBg' : ''">
          Show products
        </button>
        <button @click="showProductsLess500" :class="product2 ? 'btnBg' : ''">
          Product less 500
        </button>
      </div>
      <div class="showProducts">
        <div class="products" v-if="product1">
          <div v-for="product in products" :key="product" class="allProducts">
            {{ product.title }}
            <img :src="product.images[0]" alt="" />
            ${{ product.price }}
            <div class="prodbtn">
              <button>Buy</button><button>Add to cart</button>
            </div>
          </div>
        </div>
        <div class="products" v-if="product2">
          <div v-for="product in less500" :key="product" class="allProducts">
            {{ product.title }} - ${{ product.price }}
            <img :src="product.images[0]" alt="" />
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="popUp"></div> -->
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "@/store/store";
export default {
  name: "vuex",
  setup() {
    const store = useStore();
    const products = ref([]);
    const less500 = ref([]);
    const product1 = ref(false);
    const product2 = ref(false);

    const increment = computed(() => {
      return store.state.counter;
    });

    const add = (payload) => {
      store.commit("increment", payload);
    };

    const showProducts = async () => {
      await store.dispatch("fetchData");
      products.value = store.state.products;
      product1.value = true;
      product2.value = false;
    };
    const showProductsLess500 = async () => {
      await store.dispatch("fetchData");
      less500.value = store.state.less500;
      product1.value = false;
      product2.value = true;
    };

    return {
      store,
      increment,
      add,
      showProducts,
      products,
      less500,
      showProductsLess500,
      product1,
      product2,
    };
  },
};
</script>

<style scoped>
.vuexMain {
  position: relative;
}
h1 {
  font-size: 20px;
}
.btn {
  display: flex;
  gap: 10px;
  margin: 10px 0 20px 0;
}
.products-container {
  margin-top: 20px;
}

.showProducts {
  display: flex;
  width: 60vw;
}
.product-buttons {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}
.btnBg {
  background-color: rgb(207, 204, 204);
  border: 2px solid gray;
}
button {
  padding: 10px;
  border-radius: 5px;
}
img {
  height: 100px;
}
.products {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.allProducts {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid black;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
}
.allProducts:hover {
  background-color: rgb(232, 236, 238);
}
/* .popUp {
  position: absolute;
} */
.prodbtn {
  display: flex;
  gap: 5px;
}
.prodbtn button {
  padding: 5px;
  border-radius: 3px;
  cursor: pointer;
}
</style>
