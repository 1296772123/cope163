import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible'//自由弹性体
Vue.config.productionTip = false
import store from './store'
import './mock/mock-server'

import VueScroller from 'vue-scroller'

Vue.use(VueScroller)

import Frame from './components/Frame/Frame'
import Search from './components/Home/HomeSearch/Ssearch'
Vue.component('Frame', Frame)
Vue.component('Search', Search)
new Vue({
  el: '#app',
  render: h => h(App),

  router,
  store,//声明使用Vuex仓库（vue数据的状态管理）
})
