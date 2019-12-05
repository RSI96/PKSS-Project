import Vue from 'vue'
import Vuex from 'vuex'
import readings from "./store/readings"
import outs_readings from "./store/outs_readings";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    readings,
    outs_readings
  },
  state: {
  },
  mutations: {
  },
  actions: {
  }
})
