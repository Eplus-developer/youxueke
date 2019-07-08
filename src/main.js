import Vue from 'vue'
import App from './App'
import { openWin, redirectTo, backBeaforWin, Ajax } from './utils/common'
import store from './store'
Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.$openWin = openWin
Vue.prototype.$redirectTo = redirectTo
Vue.prototype.$backBeaforWin = backBeaforWin
Vue.prototype.$ajax = Ajax
Vue.prototype.$store = store
const app = new Vue(App)
app.$mount()
