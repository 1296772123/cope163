import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible'//自由弹性体
Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
