<template>
  <div class="outer-most">
    <profile></profile>
    <i-cell-group>
      <i-cell v-for="item in options" :title="item.title" :key="item.title" is-link url="">
        <i-icon type="like_fill" slot="icon"/>
      </i-cell>
    </i-cell-group>
  </div>
</template>

<script>
  import profile from '@/components/profile'

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
