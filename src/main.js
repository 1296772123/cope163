import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Frame from './components/Frame/Frame'
import Search from './components/Home/HomeSearch/Ssearch'

import './validate'
import './mock/mock-server'

import 'lib-flexible'//自由弹性体
Vue.config.productionTip = false
import VueScroller from 'vue-scroller'

Vue.use(VueScroller)

Vue.component('Frame', Frame)
Vue.component('Search', Search)
new Vue({
  el: '#app',
  render: h => h(App),

  router,
  store,//声明使用Vuex仓库（vue数据的状态管理）
})
