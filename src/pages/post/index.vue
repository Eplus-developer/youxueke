<template>
  <div class="wrapper">
    <div class="cell-group">
      <div class="cell">
        <img src="/static/icons/post/course-name.png" alt="didn't see me! ">
        <div>课程名称</div>
        <input type="text" placeholder="请输入课程名称" v-model="courseName">
      </div>
      <div class="cell">
        <img src="/static/icons/post/teacher.png" alt="didn't see me! ">
        <div>主讲人</div>
        <input type="text" placeholder="请输入主讲人" v-model="lecturer">
      </div>
      <div class="cell">
        <img src="/static/icons/post/phone-number.png" alt="didn't see me! ">
        <div>手机号码</div>
        <input type="number" placeholder="请输入手机号码" v-model="phoneNumber">
      </div>
      <div class="cell">
        <img src="/static/icons/post/introduction.png" alt="didn't see me! ">
        <div>课程简介</div>
        <input type="text" placeholder="请输入课程简单并上传图片" v-model="phoneNumber">
      </div>
    </div>
    <image src="/static/icons/post/image.png" alt="you didn't see me! " class="upload" mode="widthFix"></image>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        courseName: '',
        lecturer: '',
        phoneNumber: ''
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    width: 100%;
    position: relative;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    font-size: .9em;
    background: #fff;
  }

  .cell-group {
    width: 100%;
    position: relative;
    padding-left: 1em;
  }

  .cell {
    width: 100%;
    position: relative;
    height: 2em;
    padding: .5em 0;
  }

  .cell-group .cell {
    border-bottom: solid rgba(47, 47, 47, 0.18) .07em;    /* note that hex representation sometimes doesn't work on real phone. */
  }

  .cell-group .cell:last-child {
    border-bottom: none;
  }

  .cell img {
    width: 1.5em;
    height: 1.5em;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  .cell div {
    position: absolute;
    left: 2em;
    top: 50%;
    transform: translateY(-50%);
  }

  .cell input {
    display: block;
    position: relative;
    left: 8em;
    top: 50%;
    transform: translateY(-50%);
  }

  .upload {
    width: 20%;           /* set the mode to responsively adjust the image size. */
    position: relative;
    margin: 30rpx auto;
    display: block;
  }
</style>
