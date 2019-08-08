<template>
  <div class="wrapper">
    <div class="cell-group">
      <div class="cell">
        <wux-icon class="bullet" type="ios-clipboard" size="28" color="#33cd5f"></wux-icon>
        <div>课程名称</div>
        <input type="text" placeholder="请输入课程名称" v-model="courseName">
      </div>
      <div class="cell">
        <wux-icon class="bullet" type="ios-contact" size="28" color="#33cd5f"></wux-icon>
        <div>主讲人</div>
        <input type="text" placeholder="请输入主讲人" v-model="lecturer">
      </div>
      <div class="cell">
        <wux-icon class="bullet" type="ios-phone-portrait" size="28" color="#33cd5f"></wux-icon>
        <div>手机号码</div>
        <input type="number" placeholder="请输入手机号码" v-model="phoneNumber">
      </div>
      <div class="cell">
        <wux-icon class="bullet" type="ios-calendar" size="28" color="#33cd5f"></wux-icon>
        <div>上课日期</div>
        <div class="input">
          <picker mode="date" :value="date" @change="dateChange" start="2018-01-01" end="2022-01-01">
            {{ date }}
          </picker>
        </div>
      </div>
      <div class="cell">
        <wux-icon class="bullet" type="ios-paper" size="28" color="#33cd5f"></wux-icon>
        <div>课程简介</div>
        <input type="text" placeholder="请输入课程简单并上传图片" v-model="introduction">
      </div>
    </div>
    <div class="upload">
      <upload @image-changed="uploadImage"></upload>
    </div>
    <i-button class="bottom-large" type="success" shape="circle" @click="post_course">发布课程</i-button>
  </div>
</template>

<script>
  import upload from '@/components/upload'

  export default {
    name: 'index',
    components: {upload},
    data () {
      return {
        courseName: '',
        lecturer: '',
        phoneNumber: '',
        imagePath: '',
        introduction: '',
        date: '2019-01-01'
      }
    },
    methods: {
      post_course () {
        wx.navigateTo({
          url: '/pages/post-successful/main'
        })
      },
      uploadImage (url) {
        this.url = url
      },
      dateChange (e) {
        this.date = e.target.value
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

  .cell .bullet {
    text-align: center;
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

  .cell input, .cell .input {
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
