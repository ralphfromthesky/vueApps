<template>
  <div class="mkart" v-if="parentData.boolFromParent">
    <h1>Succesfully placed order!</h1>
    <img src="/images/mariokart.png" alt="" />
  </div>
  <div class="vuexMain">
    <h1 style="text-align: center">vuex state management</h1>
    <h1>Total Balance: ${{ balance }}</h1>
    <br />

    <!-- <h1>{{ totalPrice }}</h1> -->
    <div class="btn">
      <div class="btn-main">
        <button @click="store.commit('newStore/increment', 100)">Add 100</button>
        <button @click="add(500)">Add 500</button>
        <button @click="add(1000)">Add 1000</button>
        <button @click="add(1500)">Add 1500</button>
      </div>
      <div class="btn-cart" @click="addedtocart = !addedtocart">
        <i class="bx bx-cart"></i>
      </div>
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
        <!-- <button @click="productsInfo" :class="product4 ? 'btnBg' : ''">
          Product Informations
        </button> -->
      </div>
      <div class="showProducts">
        <div class="products" v-if="product1">
          <div v-for="product in products" :key="product" class="allProducts">
            {{ product.title }}
            <img :src="product.images[0]" alt="" />
            ${{ product.price }}
            <div class="prodbtn">
              <!-- <button>Buy</button> -->
              <button @click="addToCartThis(product.title, product.price)">
                Add to cart
              </button>
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
              <!-- <button>Buy</button><button>Add to cart</button> -->
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
            @click="catchData(product.images[0], product.description)"
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
        <img :src="productImage" alt="" srcset="" />
      </div>
      <div class="imageDiv">
        <!-- <h1 style="text-align: center">{{ productData }}</h1> -->

        <p>{{ productDesc }}</p>
      </div>
    </div>
    <div
      class="addtocart"
      v-if="addtocart"
      @mouseleave="addtocart = !addtocart"
    >
      <h1>Added to your cart now!</h1>
      <i class="bx bx-check-circle" style="color: #005c1e"></i>
    </div>
    <div
      class="addedtocarts"
      v-if="addedtocart"
      @mouseleave="addedtocart = false"
      :class="{ night: store.state.isNight, light: !store.state.isNight }"
    >
      <h1 style="text-align: center">My cart</h1>
      <hr />
      <div v-if="productData.length">
        <div class="cartItem" v-for="(item, index) in productData" :key="index">
          <div class="itemData">{{ item.title }}</div>
          <div class="itemData">x{{ item.quantity }}</div>
          <div class="itemData">
            <i class="bx bx-plus-circle" @click="plusQuantity(item)"></i>
            <i class="bx bx-checkbox-minus" @click="minusQuantity(item)"></i>
          </div>
          <div class="itemData">{{ item.quantityPrice }}</div>
        </div>
      </div>
      <hr />
      <div class="totalPrice">
        <p>Total</p>
        <h3 v-if="productData.length">{{ totalPrice }}</h3>
      </div>
      <div
        class="checkOut"
        style="text-align: center"
        v-if="productData.length"
        @click="checkOut = !checkOut"
      >
        <h1>CHECK-OUT</h1>
      </div>
    </div>
  </div>
  <div class="main-checkOut" v-if="checkOut">
    <div class="exitIcons">
      <i class="bx bx-x-circle" @click="checkOut = !checkOut"></i>
      <div class="checkOutHeader">
        <h1>--- CHECK OUT ---</h1>
        <hr />
      </div>
      <div class="checkOut-container">
        <div class="form">
          <formsVue v-model="parentData" :totals="totalPrice" />
        </div>
        <div
          class="nextCheckOutContainer"
          :class="{ night: store.state.isNight, light: !store.state.isNight }"
        >
          <div v-if="productData.length" class="cartItemContainer">
            <div
              class="cartItem"
              v-for="(item, index) in productData"
              :key="index"
              id="totalCheckOut"
            >
              <div class="itemData">{{ item.title }}</div>
              <div class="itemData">x{{ item.quantity }}</div>
              <div class="itemData">{{ item.quantityPrice }}</div>
            </div>
          </div>
          <div class="chckBtn">
            <h1>Total: {{ totalPrice }}</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive, ref, watch } from "vue";
import { useStore } from "@/store/store";
import formsVue from "../../components/forms.vue";
export default {
  name: "vuex",
  components: {
    formsVue,
  },
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
    const addtocart = ref(false);
    const totalPrice = ref([]);
    const addedtocart = ref(false);
    const checkOutPrice = ref(0);
    const checkOut = ref(false);

    const parentData = ref({
      nameInputFromParent: "",
      cardInputFromParent: "",
      expiryInputFromParent: "",
      cvvInputFromParent: "",
      addressInputFromParent: "",
      boolFromParent: false,
    });

    const balance = computed(() => {
      return store.state.newStore.balance - totalPrice.value;
    });

    const add = (payload) => {
      store.commit("newStore/increment", payload);
    };

    const showProducts = async () => {
      await store.dispatch("newStore/fetchData");
      products.value = store.state.newStore.products;
      product1.value = true;
      product2.value = false;
      product3.value = false;
      product4.value = false;
    };

    const showProductsLess500 = async () => {
      await store.dispatch("newStore/fetchData");
      less500.value = store.state.newStore.less500;
      product1.value = false;
      product2.value = true;
      product3.value = false;
      product4.value = false;
    };
    const showProductsHigh500 = async () => {
      await store.dispatch("newStore/fetchData");
      high500.value = store.state.newStore.high500;
      product1.value = false;
      product2.value = false;
      product3.value = true;
      product4.value = false;
    };

    const productsInfo = async () => {
      await store.dispatch("newStore/fetchData");
      products.value = store.state.products;
      product1.value = false;
      product2.value = false;
      product3.value = false;
      product4.value = true;
    };

    const catchData = (images, desc) => {
      // productData.value = title;
      productImage.value = images;
      productDesc.value = desc;
    };

    const plusQuantity = (clickedItem) => {
      clickedItem.quantity++;
      clickedItem.quantityPrice += clickedItem.price;
      totalPrice.value = productData.value.reduce(
        (total, item) => total + item.quantityPrice,
        0
      );
    };

    const minusQuantity = (clickedItem) => {
      if (clickedItem.quantity <= 0) {
        return;
      } else {
        clickedItem.quantity--;
        clickedItem.quantityPrice -= clickedItem.price;
        totalPrice.value -= clickedItem.price;
      }
    };

    // for adding cart data!!!!!
    const addToCartThis = (title, price) => {
      addtocart.value = true;
      addedtocart.value = true;
      const existingItemIndex = productData.value.findIndex(
        (item) => item.title === title
      );
      if (existingItemIndex !== -1) {
        productData.value[existingItemIndex].quantity++;
        productData.value[existingItemIndex].quantityPrice += price;
      } else {
        productData.value.push({
          title: title,
          quantity: 1,
          quantityPrice: price,
          price: price,
        });
      }
      totalPrice.value = productData.value.reduce(
        (total, item) => total + item.quantityPrice,
        0
      );
      // store.commit('decrement', totalPrice.value)
      // console.log(store.state.balance)
    };

    const checkOutHandler = (item, price) => {};

    return {
      store,
      balance,
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
      addToCartThis,
      addtocart,
      totalPrice,
      addedtocart,
      plusQuantity,
      minusQuantity,
      balance,
      checkOutPrice,
      checkOut,
      checkOutHandler,
      parentData,
    };
  },
};
</script>

<style scoped>
.light {
  box-shadow: 17px 17px 15px #868686, -17px -17px 15px #ffffff;
}
.night {
  border: 2px solid gray;
  border-radius: 10px;
}
.vuexMain {
  position: relative;
  z-index: 1;
}
h1 {
  font-size: 20px;
}
.btn {
  display: flex;
  gap: 10px;
  margin: 10px 0 20px 0;
  justify-content: space-between;
  align-items: center;
}
.btn .bx {
  font-size: 50px;
  color: #005c1e;
  z-index: 10;
}
.btn-main {
  display: flex;
  gap: 10px;
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
  border: 2px solid gray;
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
  padding: 0 15px;
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
.addtocart {
  height: 10vh;
  width: 20vw;
  background-color: #82c9ee;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 10px;
  position: fixed;
  left: 40%;
  top: 40%;
}
.addtocart .bx {
  font-size: 50px;
}
.addedtocarts {
  background-color: #82c9ee;
  position: absolute;
  top: 0;
  right: 3vw;
  border-radius: 10px;
  padding: 10px;
}
.minusProduct button {
  margin: 0;
  padding: 0;
}
.cartItem {
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}
.checkOut {
  padding: 10px 15px;
  border-radius: 5px;
  background-color: #005c1e;
  color: white;
  margin-top: 15px;
}
.itemData {
  margin: 10px 0;
}
.itemData .bx {
  font-size: 30px;
  padding-left: 15px;
}
.itemData .bx:hover {
  color: rgb(255, 0, 0);
}
.mkart {
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: translateX(20%);
  top: -60vh;
  animation: slideDown 10s ease forwards;
  z-index: 2;
}

@keyframes slideDown {
  0% {
    opacity: 0;
  }

  50% {
    transform: translateY(80vh);
  }

  60% {
    transform: translateY(75vh);
    opacity: 1;
  }

  70% {
    transform: translateX(-150vw);
  }
  100% {
    transform: translateX(10vw);
  }
}
.mkart h1 {
  font-size: 50px;
  color: rgb(24, 24, 18);
}
.mkart img {
  height: 50vh;
}
.totalPrice {
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
}
.main-checkOut {
  width: 50vw;
  background-color: #ffffff;
  position: fixed;
  border: 2px solid gray;
  border-radius: 10px;
  transform: translateY(0) translateX(0);
  z-index: 1;
}
.main-checkOut .bx {
  font-size: 50px;
  position: absolute;
  right: -20px;
  top: -20px;
  background-color: #ffffff;
  border-radius: 50%;
  color: green;
  z-index: 2;
}
.nextCheckOutContainer {
  width: 100%;
}
.checkOutHeader {
  text-align: center;
}
.checkOut-container {
  display: flex;
  padding: 10px;
}
.cartItemContainer {
  padding: 0 10px;
  height: 40vh;
  overflow: scroll;
}
/* #totalCheckOut {
  display: flex;
  justify-content: space-between;
} */
.chckBtn {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 10px;
}
.checkOutHeader h1 {
  padding: 10px 0;
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
