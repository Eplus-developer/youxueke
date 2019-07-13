<template>
  <div class="wrapper">
    <div class="post">
      <img src="/static/images/banner.jpg" alt="you didn't see me! ">
    </div>
    <div class="introduction">
      <div class="prime">
        <div class="title">{{ title }}</div>
        <div class="name">{{ name }}</div>
      </div>
      <div class="more">{{ introduction }}</div>
    </div>
    <div class="information"></div>
    <div class="bottom">
      <div class="time-location">
        <div class="time">
          <i-icon type="clock"></i-icon>
          {{ time }}
        </div>
        <div class="location">
          <i-icon type="coordinates"></i-icon>
          {{ location }}
        </div>
      </div>
      <div class="book">
        <i-button type="success" shape="circle" size="small" @click="jump">我要预约</i-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        title: '操作系统',
        name: '金加宝',
        introduction: '操作系统是一门令大家都很头疼的课程',
        time: '2019-1-31 7:30',
        location: '文史楼301'
      }
    },
    methods: {
      jump () {
        wx.navigateTo({
          url: '/pages/book-successful/main'
        })
      }
    }
  }
</script>

<style scoped>
  .post {
    width: 100%;
  }

  .post img {
    width: 100%;
  }

  .introduction {
    transform: translateY(-100rpx);
    background: #fff;
    border-top-left-radius: 50rpx;
    border-top-right-radius: 50rpx;
    padding: 50rpx;
  }

  .prime {
    margin: 20rpx;
    overflow: hidden;
    position: relative;
    height: 80rpx;
  }

  .title, .name {
    float: left;
    position: relative;
    top: 100%;
    transform: translateY(-100%);
  }

  .title {
    font-size: 1.5em;
    padding-right: 1em;
  }

  .more {
    margin-top: 20rpx;
    font-size: .8em;
    color: rgba(41, 41, 41, 0.76);
  }

  .information {
    height: 200rpx;
    padding-bottom: 150rpx;
  }

  .bottom {
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    height: 150rpx;
    border-top: solid #2f2f2f2f .05em;
  }

  .time-location, .book {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  .time-location {
    left: 0;
    width: 60%;
    padding: 20rpx;
  }

  .book {
    text-align: center;
    left: 60%;
    width: 40%;
  }
</style>
