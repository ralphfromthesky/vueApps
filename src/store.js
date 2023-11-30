import { createStore } from "vuex";

export default createStore({
  strict: true, //this one for not editting or mutating data outside of vuex
  state: {
    product: [
      { name: "bag", price: 10000 },
      { name: "shoes", price: 1500 },
      { name: "shirt", price: 2000 },
    ],
    newProducts: [
      { name: "playstation", price: 7000 },
      { name: "xbox", price: 2000 },
      { name: "nintendo", price: 800 },
    ],

  
  },
  getters: {
    saleProducts: (state) => {
      var saleProducts = state.product.map((product) => {
        return {
          name: product.name,
          price: product.price / 2,
        };
      });
      return saleProducts;
    },

    newSaleProduct: (state) => {
      var newSaleProducts = state.newProducts.map((prod) => {
        return {
          name: prod.name,
          price: prod.price * 3,
        };
      });
      return newSaleProducts;
    },

  },
  actions: {
    // Actions are where you put your business logic
    reducePrice: (context, payload) => {
      setTimeout(() => {
        context.commit('reducePrice', payload)
      }, 2000);
    },
  },

  mutations: {
    reducePrice: (state, payload) => {
      state.product.forEach((prods) => {
        prods.price -= payload;
      });
    },

  },
});
