<template>
  <div class="ub-box ub-col ub-ver" style="background: #fff; width:27px; height: 27px" >
    <div class="zan ub-box ub-row " @click="like">
      <img v-if="!isClick" class="likeimg1" src="/static/icons/zan0.png">
      <img v-else class="likeimg2" src="/static/icons/zan1.png">
      <p v-if="replies" class="z-color-666 z-font-size-12 num"> {{replies}}</p>
    </div>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        isClick: false
      }
    },
    props: {
      replies: {
        type: Number
      }
    },
    methods: {
      like () {
        if (!this.isClick) {
          this.isClick = !this.isClick
          this.replies = this.replies + 1
        } else {
          this.isClick = !this.isClick
          this.clickNum = this.clickNum - 1
        }
      }
    }
  }
</script>
<style scoped>
  .likeimg1 {
    width: 20px;
    height: 20px;
  }
  .likeimg2 {
    width: 25px;
    height: 25px;
  }
  .zan{
    position: relative;
  }
  .num{
    position: absolute;
    z-index: 1;
    margin-top:0;
    margin-left: 25px;

  }
</style>
