<template>
  <div class="wrapper">
    <div class="cell-group">
      <div class="cell">
        <img src="/static/icons/post/course-name.png" alt="didn't see me! ">
        <div>标题</div>
        <input type="text" placeholder="请输入标题" v-model="questionTitle">
      </div>
      <div class="cell">
        <img src="/static/icons/post/introduction.png" alt="didn't see me! ">
        <div>问题简介</div>
        <input type="text" placeholder="请输入课程简单并上传图片" v-model="questionIntroduction">
      </div>
    </div>
    <image :src="imagePath" class="upload" mode="widthFix" @click="uploadImage"></image>
    <i-button class="bottom-large" type="success" shape="circle" @click="post_question">发布问题</i-button>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        questionTitle: '',
        questionIntroduction: '',
        imagePath: '/static/icons/post/image.png'
      }
    },
    methods: {
      post_question () {
        wx.navigateTo({
          url: '/pages/post-successful/main'
        })
      },
      uploadImage () {
        let that = this
        wx.chooseImage({
          count: 1,
          success (res) {
            that.imagePath = res.tempFilePaths[0]
          }
        })
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
    padding: 0 0 150rpx 0;
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

  .bottom-large {
    width: 100%;
    display: block;
    position: fixed;
    bottom: 0;
  }
</style>
