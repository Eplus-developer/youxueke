// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  login_state: false
}

const mutations = {
  REQUEST_LOGIN_CODE () {
    wx.login({
      success (res) {
        console.log(res.code)
      }
    })
  }
}

const getters = {}

const actions = {}

const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})

export default store
