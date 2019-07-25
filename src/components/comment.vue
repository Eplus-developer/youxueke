<template>
  <div class="ub-box ub-col ub-ver" style="background: #fff; width:27px; height: 27px" >
    <div class="comment ub-box ub-row" @click="comment1">
     <img src="/static/icons/comment.png" class="icon">
      <p v-if="commentNum" class="z-color-666 z-font-size-12 num"> {{commentNum}}</p>
    </div>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        commentNum: 0
      }
    },
    methods: {
      comment1 () {
        this.commentNum = this.commentNum + 1
      }
    }
  }
</script>
<style scoped>
.icon{
  width: 25px;
  height: 25px;
}
.comment{
  position: relative;
}
.num{
  position: absolute;
  z-index: 1;
  margin-top:0;
  margin-left: 25px;

}
</style>
