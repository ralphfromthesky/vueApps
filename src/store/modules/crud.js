import axios from "axios";
import { onMounted, watch } from "vue";

const crud = {
  namespaced: true,
  state: {
    name: "dfasfas",
    products: [],
  },
  mutations: {},
  actions: {
    async fetchData(context) {
      const url = "https://65b37959770d43aba479d655.mockapi.io/foods";
      try {
        const response = await axios.get(url);
        console.log(response.data);
        context.state.products = response.data;
        watch(products, (newVal) => {
          localStorage.setItem("products", newVal);
        });

        onMounted(() => {

        })
      } catch (error) {
        console.log(`èrror: ${error}`);
      }
    },
  },
  getters: {},
};
export default crud;
