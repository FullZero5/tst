import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
   log: [],
  },
  getters: {
    getData: state => {
      return state.log;
    }
  },
  mutations: {
   ADD_DATA: (state, item) => {
    state.log.push(item);
   }
  },
  actions: {
   addToItems: ({ commit }, item) => commit("ADD_DATA", item),
  }
})
