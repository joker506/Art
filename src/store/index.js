import Vue from 'vue'
import Vuex from 'vuex'
import comm from './comm'

Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    comm,
  }
})
