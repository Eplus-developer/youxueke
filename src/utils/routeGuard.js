import utils from '@/utils'
import { $wuxDialog, $wuxToast } from '@/../static/wux-style/index'

// call this after the weixin authorization, otherwise the nickname and the avatar will be undefined.
export const routeGuard = async function () {
  let that = this
  if (this.$store.state.loginState) return Promise.resolve(this.$store.state.identity)

  return new Promise((resolve, reject) => {
    wx.login({
      success (res) {
        utils.request({
          invoke: utils.api.requestLogin,
          params: {
            'js_code': res.code
          },
          result: utils.fakeData.REQUEST_LOGIN_RESPONSE_ADMIN
        })
          .then(res => {
            if (res.data.status === 'false') {
              register.apply(that, [resolve])
            } else {
              resolve(res.data.userInfo.identity)
              that.$store.commit('LOG_IN', {
                identity: res.data.userInfo.identity,
                id: res.data.userInfo.id
              })
              if (res.data.userInfo.identity === 1) {
                that.$root.$mp.page.getTabBar().setData({identity: 1})
              } else {
                that.$root.$mp.page.getTabBar().setData({identity: 2})
              }
            }
          })
      },
      fail (error) {
        console.log(error)
        resolve(false)
      }
    })
  })
}

function register (resolve) {
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
      utils.checkId(stuId)
      wx.login({
        success (res) {
          utils.request({
            invoke: utils.api.requestRegister,
            params: {
              name: that.$store.state.name,
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
                // upload the avatar of the new user
                utils.request({
                  invoke: utils.api.requestUploadAvatar,
                  params: {
                    url: that.$store.state.avatar,
                    stuId: stuId
                  },
                  result: utils.fakeData.UPLOAD_AVATAR_RESPONSE
                })
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
              console.log(resolve)
              resolve(false)
              console.log('hit')
            })
        }
      })
    }
  })
}
