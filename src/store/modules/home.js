import {
  getHomeData
} from '../../api'

import {
  POLICYDESCLIST,
  NAVIGATION,
  KINGKONGLIST,
  PERSONALSHOP,
  POPULARITEMLIST,
  FLASHSALEMODULE,
  NEWITEMLIST,
  CATEGORYMODULE
} from '../TotalWarehouse/mutations_Type'

const state = {
  datas: [],//网易自营品牌，30天无忧退货
  navigation: [],//nav商品导航
  kingKongList: [],//商品导航列表,
  personalshop: [],//品牌直供
  popularItemList: [],//人气推荐
  flashsalemodule: [],//限时购
  newitemlist: [],//新品首发
  categoryModule: []
}

const mutations = {
  //网易自营品牌，30天无忧退货
  [POLICYDESCLIST] (state, data) {
    state.datas = data
  },
  //商品导航
  [NAVIGATION] (state, data) {
    state.navigation = data
  },
  [KINGKONGLIST] (state, data) {
    state.kingKongList = data
  },
  [PERSONALSHOP] (state, data) {
    state.personalshop = data
  },
  [POPULARITEMLIST] (state, data) {
    state.popularItemList = data
  },
  [FLASHSALEMODULE] (state, data) {
    state.flashsalemodule = data
  },
  [NEWITEMLIST] (state, data) {
    state.newitemlist = data
  },
  [CATEGORYMODULE] (state, data) {
    state.categoryModule = data
  }
}

const actions = {
  //获取
  async homeData ({commit}) {
    const result = await getHomeData()
    if (result.data.code === 0) {
      const datas = result.data.data
      commit(POLICYDESCLIST, datas.policyDescList)
      commit(NAVIGATION, datas.kingKongModule.kingKongList)
      commit(KINGKONGLIST, datas.indexActivityModule)
      commit(PERSONALSHOP, datas.tagList)
      commit(POPULARITEMLIST, datas.popularItemList)
      commit(FLASHSALEMODULE, datas.flashSaleModule.itemList)
      commit(NEWITEMLIST, datas.newItemList)
      commit(CATEGORYMODULE, datas.categoryModule)
    }
  }

}

const getters = {
  // kingKongListFirest (state) {
  //   let arr = []
  //   if (typeof arr[i] == state.kingKongList) {
  //     for (var key in arr[i]) {//这里的array[i][key]就能遍历array数组里的对象的属性值了，key就是属性名，
  //       console.log(key)
  //     }
  //   }
  // }
  popularItem1 (state) {
    return state.popularItemList.filter((item, index) => {
      return item.pieceNum === 0
    })
  },
  popularItem2 (state) {
    return state.popularItemList.filter((item, index) => {
      return item.pieceNum === 5
    })
  },
  newitemlist6 (state) {
    return state.newitemlist.reduce((init, item, index) => {

      if (init.length <= 5) {
        init.push(item)
      }
      return init

    }, [])
  }
}

export default {
  state,
  mutations,
  actions,
  getters,
}
