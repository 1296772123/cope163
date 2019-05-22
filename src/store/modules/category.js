import {
  getCategory
} from '../../api'
import {
  KINGKONGLIST2,
} from '../TotalWarehouse/mutations_Type'

const state = {
  categoryL1List: [],
}

const mutations = {
  [KINGKONGLIST2] (state, data) {
    state.categoryL1List = data
  },
}

const actions = {
  async getcategoryL1List ({commit}, callback) {
    let result = await getCategory()
    if (result.data.code === 0) {
      const datas = result.data.data.categoryL1List
      commit(KINGKONGLIST2, datas)
      callback && callback()
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
