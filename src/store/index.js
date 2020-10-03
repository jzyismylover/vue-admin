import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    locale: 'en'
  },
  mutations: {
    SET_LANG(state, payload) {
      if(payload !== 'en' && payload !== 'zh') {
        return;
      }
      state.locale = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
