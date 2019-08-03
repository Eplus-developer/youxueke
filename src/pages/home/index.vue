<template>
  <div class="outer-most">
    <profile></profile>
    <i-cell-group>
      <i-cell v-for="item in options" :title="item.title" :key="item.title" is-link url="/pages/exercise/main">
        <i-icon type="like_fill" slot="icon"></i-icon>
      </i-cell>
    </i-cell-group>
  </div>
</template>

<script>
  import profile from '@/components/profile'

  import store from '@/store'
  import utils from '@/utils'

  export default {
    name: 'Home',
    components: {
      profile
    },
    data () {
      return {
        options: [
          {title: 'one'},
          {title: 'two'}
        ]
      }
    },
    onShow () {
      this.$root.$mp.page.getTabBar().setData({selected: 3})
      wx.login({
        success (res) {
          utils.request({
            invoke: utils.api.requestLogin,
            params: {
              code: res.code
            },
            result: utils.fakeData.REQUEST_LOGIN_RESPONSE_UNREGISTERED
          })
            .then(res => {
              if(res.data.identity === 0) {
                // TODO: the user need to register
              } else if(res.data.identity === 0) {
                // TODO: the user is a teacher
              } else {
                // TODO: the user is a student
              }
            })
        }
      })
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
