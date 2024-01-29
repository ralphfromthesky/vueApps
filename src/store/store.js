import axios from "axios";
import { createStore } from "vuex";
import crud from "./modules/crud";
import calendar from "./modules/calendar";

const store = createStore({
  modules: {
    account: crud,
    calendars: calendar    
  },
  state: {
    balance: 10000,
    products: [],
    less500: [],
    high500: [],
    isNight: false,
  },
  mutations: {
    increment(state, payload) {
      state.balance += payload;
    },
    decrement(state, payload) {
      state.balance -= payload;
    },
    changeValue(state) {
      state.isNight = !state.isNight;
    }

  },
  actions: {
    async fetchData (context) {
        const api_url = 'https://dummyjson.com/products/';
        try {
            const response = await axios.get(api_url);
            console.log(response)
            context.state.products = response.data.products;
            context.state.less500 = response.data.products.filter((less) => less.price < 500)
            context.state.high500 = response.data.products.filter((high) => high.price > 500)
        } catch (error) {
            console.log(`error: ${error}`)
        }

    }
  },
  getters: {},
});

export default store;
export const useStore = () => {
  return store;
};
