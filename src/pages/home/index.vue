<template>
  <div class="outer-most">
    <profile></profile>
    <i-cell-group>
      <i-cell v-for="item in options" :title="item.title" :key="item.title" is-link url="/pages/course/main">
        <i-icon type="like_fill" slot="icon"/>
      </i-cell>
    </i-cell-group>
  </div>
</template>

<script>
  import profile from '@/components/profile'
  import store from '@/store'

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
      store.commit('request_login')
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
