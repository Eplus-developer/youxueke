<template>
  <div class="wrapper">
    <div class="big-icon">
      <i-icon type="success_fill" color="#19be6b" size="100"></i-icon>
    </div>
    <div class="text">
      {{ display }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        display: ''
      }
    },
    mounted () {
      this.display = this.$root.$mp.query.display
    }
  }
</script>

<style scoped>
  .wrapper {
    position: fixed;
    width: 750rpx;
    left: 0;
    top: 0;
  }

  .big-icon, .text {
    position: relative;
    margin: 50rpx auto;
    width: 250rpx;
    text-align: center;
  }
</style>
