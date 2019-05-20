import {
  getHomeData
} from '../../api'

import {
  POLICYDESCLIST,
  NAVIGATION
} from '../TotalWarehouse/mutations_Type'

const state = {
  datas: [],//网易自营品牌，30天无忧退货
  navigation: [],//商品导航
}

const mutations = {
  //网易自营品牌，30天无忧退货
  [POLICYDESCLIST] (state, data) {
    state.datas = data
  },
  //商品导航
  [NAVIGATION] (state, data) {
    state.navigation = data
    console.log(typeof state.navigation)
  }
}

const actions = {
  //获取
  async homeData ({commit}) {
    const result = await getHomeData()
    if (result.data.code === 0) {
      const datas = result.data.data
      console.log(datas)
      commit(POLICYDESCLIST, datas.policyDescList)
      commit(NAVIGATION, datas.kingKongModule.kingKongList)
      console.log(datas.kingKongModule.kingKongList)
    }
  }

}

const getters = {}

export default {
  state,
  mutations,
  actions,
  getters,
}
