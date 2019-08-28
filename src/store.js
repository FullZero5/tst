import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
   paths: [{ sourceAddress: " ",destinationAddress: " "}],
   log: [],
  },
  getters: {
    getPaths: state => state.paths,
    getLog: state => state.log
  },
  mutations: {
   ADD_PATH_DATA: (state) => state.paths.push({ sourceAddress: " ",destinationAddress: " "}),
   ADD_LOG_DATA: (state, item) => state.log.push(item)
  },
  actions: {
   addToPaths: ({ commit }) => commit("ADD_PATH_DATA"),
   addToLog: ({ commit }, item) => commit("ADD_LOG_DATA", item)
  }
})
