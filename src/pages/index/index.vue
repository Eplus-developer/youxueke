<template>
  <div class="container1 ub-box ub-col">
    <wux-dialog id="wux-dialog"></wux-dialog>
    <wux-toast id="wux-toast"></wux-toast>
    <button
      class="get-info"
      open-type="getUserInfo"
      lang="zh_CN"
      @getuserinfo="onGotUserInfo"
      v-if="!userInfoStatus"
    >
      优学课需要获取你的微信信息来进行展示，请点击这里，并且在弹出的窗口中选择确认
    </button>
    <dl class="ub-box ub-ver z-padding-v-10-px box1" style="background: #fff">
        <div  class="search ub-box ub-ver-v z-width-80-percent z-box-sizing-border">
          <i-icon type="search"  size-="16" color="#666"/>
          <span @click="searchTo" class="z-font-size-14 z-color-999">请输入课程名称...</span>
        </div>
    </dl>
      <div class="ub-ver tab">
        <i-tabs :current="current" i-class="tab" color="#2ECC71">
          <i-tab v-for="item in tabs" :key="item.key" :title="item.title" :class="{active: current === item.key}" @click="change(item.key)"></i-tab>
        </i-tabs>
      </div>
      <scroll-view scroll-y style="height: calc(100vh-50px)" scroll-top="0">
      <div>
        <div v-if="current === 'tab0'">
          <tab0></tab0>
        </div>
        <div v-else-if="current === 'tab1'">
          <tab1></tab1>
        </div>
        <div v-else>
          <tab2></tab2>
        </div>
      </div>
    </scroll-view>
  </div>
</template>
  <script>
    import tab0 from '../../components/tab0'
    import tab1 from '../../components/tab1'
    import tab2 from '../../components/tab2'

    import utils from '@/utils'
    import store from '@/store'

    export default{
      data () {
        return {
          current: 'tab0',
          currentView: 'tab0',
          tabs: [
            {key: 'tab0', title: '动态'},
            {key: 'tab1', title: '课程'},
            {key: 'tab2', title: '练习'}
          ],
          userInfoStatus: true
        }
      },
      components: {'tab0': tab0, 'tab1': tab1, 'tab2': tab2},
      methods: {
        change (key) {
          this.current = key
          this.currentView = key
        },
        searchTo () {
          wx.navigateTo({
            url: '/pages/search/main'
          })
        },
        async checkLogin () {
          if (this.loginState) return
          while (true) {
            let state = await utils.routeGuard.apply(this)
            if (state !== false) {
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
        this.$root.$mp.page.getTabBar().setData({selected: 1})
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
  .container1 {
    width: 100%;
    height: 100%;
    background: #e8e8e8;
  }

  .search {
    background: #f5f5f5;
    border-radius: 12px;
    padding: 5px 10px;
  }

  .box1 {
    width: 100%;
  }

  .tab {
    width: 100%;
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
