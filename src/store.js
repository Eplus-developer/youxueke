// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  loginState: false,
  id: '',
  identity: 0,
  name: ''
}

const mutations = {
  LOG_IN (state, {identity, id, name}) {
    state.identity = identity
    state.id = id
    state.loginState = true
    state.name = name
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
