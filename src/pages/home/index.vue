<template>
  <div class="outer-most">
    <wux-dialog id="wux-dialog"></wux-dialog>
    <wux-toast id="wux-toast"></wux-toast>
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
  import { $wuxDialog, $wuxToast } from '@/../static/wux-style/index'

  import store from '@/store/'
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
        loginState: state => state.loginState
      })
    },
    data () {
      return {
        options: [
          {title: '我参加的', url: '/pages/home/main'},
          {title: '我提问的', url: '/pages/home/main'},
          {title: '我预约的', url: '/pages/course-list/main?type=take-part'}
        ]
      }
    },
    methods: {
      checkLogin () {
        let that = this

        if (!this.loginState) {
          wx.login({
            success (res) {
              utils.request({
                invoke: utils.api.requestLogin,
                params: {
                  'js_code': res.code
                },
                result: utils.fakeData.REQUEST_LOGIN_RESPONSE_TEACHER


              })
                .then(res => {
                  if (res.data.status === 'false') {
                    // TODO: the user need to register
                    that.register()
                  } else {
                    store.commit('LOG_IN', {
                      identity: res.data.userInfo.identity,
                      id: res.data.userInfo.id,
                      name: res.data.userInfo.name
                    })
                    if (res.data.userInfo.identity === 1) {
                      that.$root.$mp.page.getTabBar().setData({identity: 1})
                    } else {
                      that.$root.$mp.page.getTabBar().setData({identity: 2})
                      that.options.push(...[
                        {title: '我发布的', url: '/pages/course-list/main?type=post'},
                        {title: '待审批', url: '/pages/home/main'}
                      ])
                    }
                  }
                })
            },
            fail (error) {
              console.log(error)
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
          onConfirm (e, stuId) {
            utils.check(stuId)
            $wuxDialog().prompt({
              resetOnClose: true,
              title: '提示',
              content: '请输入你的昵称',
              fieldtype: 'String',
              defaultText: '',
              maxlength: 11,
              placeholder: '请输入昵称',
              onConfirm (e, nickname) {
                wx.login({
                  success (res) {
                    utils.request({
                      invoke: utils.api.requestRegister,
                      params: {
                        name: nickname,
                        'js_code': res.code,
                        stuId: stuId
                      },
                      result: utils.fakeData.REQUEST_REGISTER_RESPONSE_SUCCESSFUL
                    })
                      .then(res => {
                        let type, text
                        if (res.data === true) {
                          type = 'success'
                          text = '成功注册'
                        } else {
                          type = 'forbidden'
                          text = '注册失败'
                        }
                        $wuxToast().show({
                          type: type,
                          duration: 1500,
                          color: '#fff',
                          text: text,
                          success: () => console.log('fb')
                        })
                        that.checkLogin()
                      })
                  }
                })
              }
            })
          }
        })
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
