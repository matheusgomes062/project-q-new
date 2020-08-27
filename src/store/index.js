import Vue from "vue";
import Vuex from "vuex";
// import { isContext } from "vm";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    favScholarshipsStore: []
  },
  mutations: {
    CHANGE_FAVSCHOLARSHIPS(state, payload) {
      state.favScholarshipsStore = payload;
    }
  },
  actions: {
    changeFavScholarships(context, payload) {
      context.commit("CHANGE_FAVSCHOLARSHIPS", payload);
      localStorage.setItem("favScholarshipsLS", JSON.stringify(payload));
    }
  },
  modules: {}
});
