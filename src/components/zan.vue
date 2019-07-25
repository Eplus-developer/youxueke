<template>
  <div class="ub-box ub-col ub-ver" style="background: #fff; width:27px; height: 27px" >
    <div class="zan ub-box ub-row " @click="like">
      <img v-if="isClick === 0" class="likeimg1" src="/static/icons/zan0.png">
      <img v-if="isClick === 1" class="likeimg2" src="/static/icons/zan1.png">
      <p v-if="clickNum" class="z-color-666 z-font-size-12 num"> {{clickNum}}</p>
    </div>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        clickNum: 0,
        isClick: 0
      }
    },
    methods: {
      like () {
        if (this.isClick === 0) {
          this.isClick = 1
          this.clickNum = this.clickNum + 1
        } else {
          this.isClick = 0
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
