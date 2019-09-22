// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  loginState: false,
  stuId: '',
  /* 0 for not logged in, 1 for students, 2 for teachers, 3 for administrator. */
  identity: 0,
  name: '获取昵称中',
  avatar: '',
  dynamicData: []
}

const mutations = {
  LOG_IN (state, {identity, id, name}) {
    state.identity = identity
    state.stuId = id
    state.loginState = true
    state.name = name
  },
  GET_USER_INFO (state, {nickname, avatar}) {
    state.name = nickname
    state.avatar = avatar
  },
  TOPIC_LIST (state, {dynamicData}) {
    state.dynamicData = dynamicData.slice()
    console.log(state)
  },
  LIKE_CHANGE (state, {index, num}) {
    state.dynamicData[index].likes = num
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
