// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    data: 0
  },
  mutations: {
    inc: (state) => {
      const obj = state
      obj.data += 1
    },
    dec: (state) => {
      const obj = state
      obj.data -= 1
    }
  }
})

export default store
