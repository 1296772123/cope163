import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import state from './TotalWarehouse/state'
import mutations from './TotalWarehouse/mutations'
import actions from './TotalWarehouse/actions'

import home from './modules/home'

export default new Vuex.Store({
  state, mutations, actions,
  modules: {
    home,// home = state => state.home.state
  }
})
