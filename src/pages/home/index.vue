<template>
  <div class="outer-most">
    <button
      class="get-info"
      open-type="getUserInfo"
      lang="zh_CN"
      @getuserinfo="onGotUserInfo"
      v-if="!userInfoStatus"
    >
      优学课需要获取你的微信信息来进行展示，请点击这里，并且在弹出的窗口中选择确认
    </button>
    <wux-dialog id="wux-dialog"></wux-dialog>
    <wux-toast id="wux-toast"></wux-toast>
    <profile
      :name="name"
      :avatar="avatar"
    ></profile>
    <i-cell-group>
      <i-cell v-for="item in options" :title="item.title" :key="item.title" is-link :url="item.url">
        <i-icon type="like_fill" slot="icon"></i-icon>
      </i-cell>
    </i-cell-group>
  </div>
</template>

<script>
  import profile from '@/components/profile'

  import store from '@/store'
  import utils from '@/utils'
  import { mapState } from 'vuex'

  export default {
    name: 'Home',
    components: {
      profile
    },
    computed: {
      ...mapState({
        name: state => state.name,
        loginState: state => state.loginState,
        avatar: state => state.avatar
      })
    },
    data () {
      return {
        options: [
          {title: '我参加的', url: '/pages/home/main'},
          {title: '我提问的', url: '/pages/home/main'},
          {title: '我预约的', url: '/pages/course-list/main?type=take-part'}
        ],
        userInfoStatus: true
      }
    },
    methods: {
      async checkLogin () {
        if (this.loginState) return
        while (true) {
          let state = await utils.routeGuard.apply(this)
          if (state !== false) {
            if (state === 2) {
              this.options.push(...[
                {title: '我发布的', url: '/pages/course-list/main?type=post'}
              ])
            }
            break
          }
        }
      },
      onGotUserInfo (e) {
        this.userInfoStatus = true
        store.commit('GET_USER_INFO', {
          nickname: e.mp.detail.userInfo.nickName,
          avatar: e.mp.detail.userInfo.avatarUrl
        })
      }
    },
    onShow () {
      let that = this
      this.$root.$mp.page.getTabBar().setData({selected: 3})
      wx.getUserInfo({
        success (res) {
          store.commit('GET_USER_INFO', {
            nickname: res.userInfo.nickName,
            avatar: res.userInfo.avatarUrl
          })
        },
        fail (res) {
          console.log(res)
          that.userInfoStatus = false
        }
      })
      this.checkLogin()
    }
  }
</script>

<style scoped>
  i-cell-group {
    width: 100%;
  }

  .outer-most {
    padding-bottom: 170rpx;
  }

  .get-info {
    background: #fff;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    z-index: 500;
    font-size: 14px;
    padding: 1em;
    font-weight: bold;
  }
</style>
