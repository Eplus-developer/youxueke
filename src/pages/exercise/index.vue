<template>
  <div class="wrapper">
    <div class="progress-wrapper">
      <i-progress percent="50" status="active"></i-progress>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index'
  }
</script>

<style scoped>
  .wrapper {
    width: 100%;
    position: relative;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0 0 150rpx 0;
    font-size: .9em;
    background: #fff;
  }

  .progress-wrapper {
    margin: 20rpx auto;
    text-align: center;
    width: 70%;
    position: relative;
  }
</style>
