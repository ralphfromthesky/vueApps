import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import Cookies from "js-cookie";
import crud from "./modules/crud";
import calendar from "./modules/calendar";
import persisted from "./modules/persisted";
import useUser from "./modules/user";
import newStore from "./modules/store";

const store = createStore({
  modules: {
    account: crud,
    calendars: calendar,
    persisted: persisted,
    useUser: useUser,
    newStore: newStore,
  },

  plugins: [
    createPersistedState({
      key: 'objectToBeSaved',
      storage: window.localStorage,
      reducer: (state) => ({
        useUser: {
          name: state.useUser.name,
          user: state.useUser.user,
          isAuthenticated: state.useUser.isAuthenticated,
          isLogin: state.useUser.isLogin
        }
      })
    }),
    createPersistedState({
      key: 'cookieState',
      storage: {
        getItem: (key) => Cookies.get(key),
        setItem: (key, value) => Cookies.set(key, value, { expires: 7, secure: true }),
        removeItem: (key) => Cookies.remove(key),
      },
    })
  ],
});

export default store;
export const useStore = () => {
  return store;
};
