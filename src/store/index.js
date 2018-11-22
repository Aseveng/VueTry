import Vue from 'vue'
import Vuex from 'vuex'
import common from './modules/common'
import getter from './modules/getter'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    common,
    getter
  }
})
