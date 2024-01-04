import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  strict: true, 
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
    counter: 0,

  
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


    fetchApi: async (context) => {
      var responseData = 'https://jsonplaceholder.typicode.com/posts';
      try {
        const response = await axios.get(responseData)
        console.log(response);
        const data = response.data
        context.commit('updateFetchedData', data)
      } catch (error) {
        console.log(`this is erro: ${error}`)
      }
      setTimeout(() => {
        context.commit('increase');
      }, 1000)
    }


  },

  mutations: {
    reducePrice: (state, payload) => {
      state.product.forEach((prods) => {
        prods.price -= payload;
      });
    },

    increase: (state) => {
      state.counter += 1;
    },

    decrease:  (state) => {
      state.counter -= 1;
      if(state.counter <= 0) {
        state.counter = 0;
        alert('fasdfasfas')
      }
    },
    updateFetchedData(state, data) {
      state.fetchedData = data;
    },

  },
});
