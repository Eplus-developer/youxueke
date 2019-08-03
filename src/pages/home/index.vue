<template>
  <div class="outer-most">
    <wux-dialog id="wux-dialog"></wux-dialog>
    <profile :name="name"></profile>
    <i-cell-group>
      <i-cell v-for="item in options" :title="item.title" :key="item.title" is-link :url="item.url">
        <i-icon type="like_fill" slot="icon"></i-icon>
      </i-cell>
    </i-cell-group>
  </div>
</template>

<script>
  import profile from '@/components/profile'
  import { $wuxDialog } from '@/../static/wux-style/index'

  import store from '@/store'
  import utils from '@/utils'

  export default {
    name: 'Home',
    components: {
      profile
    },
    computed: {
      name () {
        return store.state.name
      }
    },
    data () {
      return {
        options: [
          {title: '我参加的', url: '/pages/home/main'},
          {title: '我发布的', url: '/pages/home/main'},
          {title: '我预约的', url: '/pages/home/main'}
        ]
      }
    },
    methods: {
      checkLogin () {
        let that = this

        if (!store.state.loginState) {
          wx.login({
            success (res) {
              utils.request({
                invoke: utils.api.requestLogin,
                params: {
                  code: res.code
                },
                result: utils.fakeData.REQUEST_LOGIN_RESPONSE_TEACHER
              })
                .then(res => {
                  if (res.data.identity === 0) {
                    // TODO: the user need to register
                    that.register()
                  } else {
                    store.commit('LOG_IN', {
                      identity: res.data.identity,
                      id: res.data.id,
                      name: res.data.name
                    })
                    if (res.data.identity === 1) {
                      console.log('hit')
                      that.$root.$mp.page.getTabBar().setData({identity: 1})
                    } else {
                      that.$root.$mp.page.getTabBar().setData({identity: 2})
                      that.options.push(...[
                        {title: '我提问的', url: '/pages/home/main'},
                        {title: '待审批', url: '/pages/home/main'}
                      ])
                    }
                  }
                })
            }
          })
        }
      },
      register () {
        let that = this

        $wuxDialog().prompt({
          resetOnClose: true,
          title: '提示',
          content: '因为你是第一次登陆，请输入你的学号，并确保它的正确性',
          fieldtype: 'String',
          defaultText: '',
          maxlength: 11,
          placeholder: '请输入学号',
          onConfirm (e, response) {
            that.check(response)
            that.checkLogin()
          }
        })
      },
      check (id) {
        // TODO check the validity of id
        return true
      }
    },
    onShow () {
      this.$root.$mp.page.getTabBar().setData({selected: 3})
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
</style>
