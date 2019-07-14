// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    login_state: false
  },
  mutations: {
    request_login () {
      wx.login({
        success (res) {
          console.log(res.code)
        }
      })
    }
  }
})

export default store
