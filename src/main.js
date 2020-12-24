import Vue from 'vue'
import App from './App.vue'
import Dayjs from "dayjs"

Vue.config.productionTip = false
Vue.prototype.Dayjs = Dayjs

new Vue({
  render: h => h(App),
}).$mount('#app')
