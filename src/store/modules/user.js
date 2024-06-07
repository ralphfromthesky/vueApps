const useUser = {
  namespaced: true,
  state: {
    name: "",
    user: '',
    isAuthenticated: false,
    isLogin: false
    
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
      state.isAuthenticated = true;
      state.isLogin = true
    },

    logOutUser(state){
      state.user = null;
      state.isAuthenticated = !state.isAuthenticated;
      state.isLogin = !state.isLogin;
    }
  
  },
  actions: {
    updateUser(context, user) {
      context.commit('setUser', user);

    }
  },
  getters: {
    userInfo(state){
      return state.user;
    }
  },
};

export default useUser;
