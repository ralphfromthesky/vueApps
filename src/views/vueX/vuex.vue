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
          All products
        </button>
        <button @click="showProductsLess500" :class="product2 ? 'btnBg' : ''">
          Product less 500
        </button>
        <button @click="showProductsHigh500" :class="product3 ? 'btnBg' : ''">
          Product higher than 500
        </button>
        <button @click="productsInfo" :class="product4 ? 'btnBg' : ''">
          Product Informations
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
        <div class="products" v-if="product3">
          <div v-for="product in high500" :key="product" class="allProducts">
            {{ product.title }}
            <img :src="product.images[0]" alt="" />
            ${{ product.price }}
            <div class="prodbtn">
              <button>Buy</button><button>Add to cart</button>
            </div>
          </div>
        </div>
        <div
          class="products"
          v-if="product4"
          id="desc"
          @click="showModal = true"
        >
          <div
            v-for="product in products"
            :key="product"
            class="allProducts"
            @click="
              catchData(product.title, product.images[0], product.description)
            "
          >
            <table class="table" border="1">
              <thead>
                <tr>
                  <th width="200px">Product</th>
                  <th width="103px">Info</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Product</td>
                  <td>
                    <h6>{{ product.title }}</h6>
                  </td>
                </tr>
                <tr>
                  <td>Brand</td>
                  <td>
                    <h6>{{ product.brand }}</h6>
                  </td>
                </tr>
                <tr>
                  <td>Category</td>
                  <td>
                    <h6>{{ product.category }}</h6>
                  </td>
                </tr>
                <tr>
                  <td>Price</td>
                  <td>
                    <h6>${{ product.price }}</h6>
                  </td>
                </tr>
                <tr>
                  <td>Discounted Price</td>
                  <td>
                    <h6>${{ product.discountPercentage }}</h6>
                  </td>
                </tr>
                <tr>
                  <td>Stock</td>
                  <td>
                    <h6>{{ product.stock }}</h6>
                  </td>
                </tr>
                <tr>
                  <td>Ratings</td>
                  <td>
                    <h6>{{ product.rating }}</h6>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div
      class="mainModaldiv"
      v-if="showModal"
      @click="showModal = !showModal"
    ></div>
    <div
      class="popUp"
      v-if="showModal"
      :class="showModal ? 'scale-in-center' : ''"
    >
      <div class="imageDiv2">
        <i class="bx bxs-chevron-left" @click="prevImage"></i>
        <img :src="productImage" alt="" srcset="" />
        <i class="bx bxs-chevron-right" @click="nextImage"></i>
      </div>
      <div class="imageDiv">
        <h1 style="text-align: center">{{ productData }}</h1>

        <p>{{ productDesc }}</p>
      </div>
    </div>
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
    const high500 = ref([]);
    const product1 = ref(false);
    const product2 = ref(false);
    const product3 = ref(false);
    const product4 = ref(false);
    const showModal = ref(false);
    const productData = ref([]);
    const productImage = ref([]);
    const productDesc = ref([]);

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
      product3.value = false;
      product4.value = false;
    };

    const showProductsLess500 = async () => {
      await store.dispatch("fetchData");
      less500.value = store.state.less500;
      product1.value = false;
      product2.value = true;
      product3.value = false;
      product4.value = false;
    };
    const showProductsHigh500 = async () => {
      await store.dispatch("fetchData");
      high500.value = store.state.high500;
      product1.value = false;
      product2.value = false;
      product3.value = true;
      product4.value = false;
    };

    const productsInfo = async () => {
      await store.dispatch("fetchData");
      products.value = store.state.products;
      product1.value = false;
      product2.value = false;
      product3.value = false;
      product4.value = true;
    };

    const catchData = (title, images, desc) => {
      productData.value = title;
      productImage.value = images;
      productDesc.value = desc;
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
      product3,
      high500,
      showProductsHigh500,
      product4,
      productsInfo,
      showModal,
      productData,
      catchData,
      productImage,
      productDesc,
    
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
th {
  background-color: #82c9ee;
}
.popUp img {
  height: 100%;
  border-radius: 5px;
}
.imageDiv2 {
  display: flex;
  align-items: center;
  height: 30vh;
  width: 30vw;
}
.popUp .bx {
  font-size: 50px;
  color: white;
  cursor: pointer;
  z-index: 3;
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
  background-color: #82c9ee;
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
.mainModaldiv {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8); /* Background color with transparency */
  backdrop-filter: blur(1px); /* Adjust the blur intensity */
  top: 0;
  right: 0;
  z-index: 1;
}
.popUp {
  position: fixed;
  height: 50vh;
  width: 50vw;
  background-color: black;
  border-radius: 10px;
  top: 25vh;
  left: 25vw;
  display: flex;
  align-items: center;
  z-index: 2;
  color: white;
  box-shadow: 5px 5px 10px #b8b8b8, -5px -5px 10px #ffffff;
}
.prodbtn {
  display: flex;
  gap: 5px;
}
.prodbtn button {
  padding: 5px;
  border-radius: 3px;
  cursor: pointer;
}
.scale-in-center {
  -webkit-animation: scale-in-center 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: scale-in-center 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
@-webkit-keyframes scale-in-center {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes scale-in-center {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}
</style>
