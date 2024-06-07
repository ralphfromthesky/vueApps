const persist = {
  namespaced: true,
  state: {
    title: "this is the state management",
    title2: "persited and cookie",
    balance: 100000,
  },
  mutations: {
    increment(state) {
      state.balance += 1000;
    },
  },
  actions: {},
  getters: {},
};

export default persist;
