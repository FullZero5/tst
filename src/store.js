import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
   data: [],
  },
  getters: {
    getData: state => {
      return state.data;
    }
  },
  mutations: {
   ADD_DATA: (state, item) => {
    state.data.push(item);
   }
  },
  actions: {
   addToItems: ({ commit }, item) => commit("ADD_DATA", item),
  }
})
