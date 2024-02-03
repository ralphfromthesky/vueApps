import axios from "axios";
import { useApi } from "./api";
const calendar = {
  namespaced: true,

  state: {
    data: "my calendar",
    balance: 500,
    products: [],
  },
  mutations: {
    changeData(state, payload) {
      state.data = payload;
    },
    increment(state, payload) {
      state.balance += payload;
    },

    async deleteProducts(state, id) {
      const url = useApi().deleteApi + id;
      state.products = state.products.filter((x) => x.id !== id);
      try {
        const response = await axios.delete(url);
        console.log(`deleted with the id of ${response.data.id}`);
      } catch (error) {
        console.log(`error: ${error}`);
      }
    },

    async addData (state, yagballs) {
      const url = useApi().addApi;
      try {
      const response =  await axios.post(url, yagballs)  
       state.products.push(response.data)
      } catch (error) {
        console.log(`error: ${error}`)
      }

    }
    
  },
  actions: {
    async fetchData(context, payload) {
      const url = useApi().fetchApi;
      try {
        const response = await axios.get(url);
        context.state.products = response.data;
        context.commit("increment", payload);
      } catch (error) {
        console.log(`error: ${error}`);
      }
    },
  },
  getters: {
    showGetters(state) {
      return state.products.map((m) => ({
        pangalan: m.title,
        presyo: m.price,
        id: m.id,
      }));
    },
  },
};

export default calendar;
