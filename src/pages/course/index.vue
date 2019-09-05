<template>
  <div class="wrapper">
    <div class="post">
      <img :src="img" alt="you didn't see me! ">
    </div>
    <div class="introduction">
      <div class="prime">
        <div class="title">{{ title }}</div>
        <div class="name">{{ lecturer }}</div>
      </div>
      <div class="more">{{ des }}</div>
    </div>
    <div class="information">
      <div class="cell-group" v-if="!booked">
        <div class="cell">
          <wux-icon class="bullet" type="ios-contact" size="28" color="#33cd5f"></wux-icon>
          <div class="cell-title"><label for="booker">姓名</label></div>
          <input id="booker" type="text" placeholder="请输入真实姓名" v-model="booker"/>
        </div>
        <div class="cell">
          <wux-icon class="bullet" type="ios-phone-portrait" size="28" color="#33cd5f"></wux-icon>
          <div class="cell-title"><label for="booker-phone">手机号</label></div>
          <input id="booker-phone" type="text" placeholder="请输入手机号码" v-model="bookPhone"/>
        </div>
        <div class="cell">
          <wux-icon class="bullet" type="ios-card" size="28" color="#33cd5f"></wux-icon>
          <div class="cell-title"><label for="booker-id">学号</label></div>
          <input id="booker-id" type="text" placeholder="请输入你的学号" v-model="bookerId"/>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="time-location">
        <div class="time">
          <i-icon type="clock"></i-icon>
          {{ date }}
        </div>
        <div class="location">
          <i-icon type="coordinates"></i-icon>
          {{ location }}
        </div>
      </div>
      <div class="book">
        <i-button
          type="success"
          shape="circle"
          size="small"
          @click="jump"
          v-if="!booked"
        >我要预约</i-button>
        <div v-else>您已预约该课程</div>
      </div>
    </div>
  </div>
</template>

<script>
  import utils from '@/utils'
  import { $wuxToast } from '@/../static/wux-style/index'
  import { mapState } from 'vuex'

  export default {
    name: 'index',
    data () {
      return {
        title: '操作系统',
        img: '/static/images/banner.jpg',
        lecturer: '金加宝',
        des: '操作系统是一门令大家都很头疼的课程',
        date: '2019-1-31 7:30',
        location: '文史楼301',
        booker: '',
        bookPhone: '',
        bookerId: '',
        courseId: null,
        booked: false
      }
    },
    computed: {
      ...mapState({
        stuId: state => state.stuId
      })
    },
    methods: {
      jump () {
        utils.request({
          invoke: utils.api.requestBook,
          params: {
            stuId: this.bookerId,
            courseId: this.courseId,
            phone: this.bookPhone
          },
          result: utils.fakeData.BOOK_RESPONSE_SUCCESSFUL
        })
          .then(function (res) {
            if (res.data === true) {
              wx.navigateTo({
                url: '/pages/book-successful/main'
              })
            } else {
              $wuxToast().show({
                type: 'forbidden',
                text: '预约失败'
              })
            }
          })
      }
    },
    mounted () {
      // i am a fool, i spent an hour trying to figure out why booked is false and the if condition is not satisfied
      // booked is indeed false, but a String "false"!
      this.courseId = parseInt(this.$root.$mp.query.courseId)
      this.booked = this.$root.$mp.query.booked === 'true'
      if (!this.booked) {
        utils.request({
          invoke: utils.api.requestCourseByStudent,
          params: {
            stuId: this.stuId
          },
          result: utils.fakeData.GET_COURSE_LIST_BY_BOOKER
        })
          .then(function (res) {
            for (let item of res.data.Course) {
              if (this.courseId === item.id) {
                this.booked = true
              }
            }
          }.bind(this))
      }
      utils.request({
        invoke: utils.api.requestCourseById,
        params: {
          courseId: this.courseId
        },
        result: utils.fakeData.COURSE_DETAIL_RESPONSE
      })
        .then(function (res) {
          utils.fieldMap(res.data.Course, this, [
            'title',
            'lecturer',
            'date',
            'location',
            'des'
          ])
        }.bind(this))
    }
  }
</script>

<style scoped>
  @import "../../css/cell-group.css";

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
    padding-bottom: 200rpx;
    margin-bottom: 200rpx;
    height: 200rpx;
    position: relative;
  }

  .bottom {
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    height: 150rpx;
    border-top: solid #2f2f2f2f .05em;
    background: #fff;
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
