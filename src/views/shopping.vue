<template>
  <div>
    <div class="main-shop">
      <div class="name">
        <h1>{{ name }}</h1>
      </div>
      <div class="shop-inputs">
        <input type="text" v-model="shopInput" name="" id="">
        <button @click="checkShopList">shop</button>
      </div>
      <div class="shop-list" v-for="shop in shopArrayList" :key="shop">
        <h1>{{ shop.name }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
export default {
  name: "shop",
  setup() {
    const name = ref("Shopping List");
    const shopInput = ref("");
    const shopArrayList = ref([]);

    const checkShopList = () => {
        if(shopInput.value.trim() === '' || null) {
            alert('dont leave blank');
        } else {
            shopArrayList.value.push({
                name: `${shopInput.value}`
            })
            console.log(shopInput.value)
            shopInput.value = ""
        }
    }
    return {
      name,
      shopInput,
      shopArrayList,
      checkShopList
    };
  },
};
</script>

<style lang="scss" scoped></style>
