<template>
<div class="ub-box ub-col container3 " >
  <scroll-view scroll-y scroll-top="10px">
  <div >
    <dynamic show-total= "show" show-exchange-button= "showButton"></dynamic>
    kdfjihg
  </div>
  </scroll-view>
  <dl class="ub-box ub-ver-v z-padding-all-10-px bottom-box" style="background: #fff">
    <div @click.stop="pinglun" class="ping ub-box ub-ver-v z-width-80-percent ">
      <span class="z-font-size-14 z-color-999">评论...</span>
    </div>
    <div class="z-margin-left-10-px">
      <zan ></zan>
    </div>
  </dl>
</div>
</template>
<script>
  import dynamic from '../../components/dynamic.vue'
  import zan from '../../components/zan.vue'
  export default{
    components: {dynamic, zan},
    data () {
      return {
        show: true,
        showButton: true
      }
    }
  }
</script>
<style scoped>
  .container3{
    width:100%;
    height:100vh;
    background:#e8e8e8;
    position: relative;
  }
  .ping{background: #f5f5f5;border-radius: 12px;padding: 5px 10px; }
  .bottom-box{
    position: absolute;
    bottom: 0;
    width: 100%;
  }
</style>
