<template>
  <div class="outer-most">
    <profile
      :name="name"
      :avatar="avatar"
    ></profile>
    <i-cell-group>
      <i-cell v-for="item in options" :title="item.title" :key="item.title" is-link :url="item.url">
        <i-icon type="like_fill" slot="icon"></i-icon>
      </i-cell>
      <i-cell title="待审批" is-link url="/pages/course-list/main?type=verify" v-if="admin">
        <i-icon type="like_fill" slot="icon"></i-icon>
      </i-cell>
    </i-cell-group>
  </div>
</template>

<script>
  import profile from '@/components/profile'
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
      }),
      admin () {
        return this.$store.state.identity === 3
      }
    },
    data () {
      return {
        options: [
          {title: '我参加的', url: '/pages/home/main'},
          {title: '我提问的', url: '/pages/home/main'},
          {title: '我预约的', url: '/pages/course-list/main?type=take-part'},
          {title: '我发布的', url: '/pages/course-list/main?type=post'}
        ]
      }
    },
    methods: {
      async checkLogin () {
        if (this.loginState) return
        while (true) {
          let state = await utils.routeGuard.apply(this)
          if (state !== false) {
            if (state === 3) {
            }
            break
          }
        }
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
