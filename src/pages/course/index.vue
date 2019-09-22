<template>
  <div class="wrapper">
    <div class="post">
      <img :src="img" alt="you didn't see me! ">
    </div>
    <div class="introduction">
      <div class="prime">
        <div class="title">{{ title }}</div>
        <div class="name">{{ lecturer }}</div>
        <div class="category">{{ category === 0 ? '学生讲师' : '研讨课' }}</div>
      </div>
      <div class="more">{{ des }}</div>
    </div>
    <div class="information">
      <div class="cell-group" v-if="!booked && !admin">
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
          {{ date + ' ' + time }}
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
          v-if="!booked && !admin && verified"
        >我要预约</i-button>
        <div v-if="booked && !admin && verified">您已预约该课程</div>
        <div v-if="!verified && !admin">此课程尚未通过审核</div>
        <div v-if="verified && admin">此课程已经审核</div>
        <div class="operation-wrapper" v-if="!verified && admin">
          <i-button
            long
            inline
            class="operation-left"
            type="success"
            shape="circle"
            @click="pass"
          >通过</i-button>
          <i-button
            long
            inline
            class="operation-right"
            type="success"
            shape="circle"
            @click="edit"
          >编辑</i-button>
        </div>
      </div>
      <div :class="{edit: true, pop: popup}">
        <div class="cell-group">
          <div class="cell">
            <wux-icon class="bullet" type="ios-home" size="28" color="#33cd5f"></wux-icon>
            <div class="cell-title"><label for="location">上课地点</label></div>
            <input id="location" type="number" placeholder="请输入上课地点" v-model="editLocation">
          </div>
          <div class="cell">
            <wux-icon class="bullet" type="ios-calendar" size="28" color="#33cd5f"></wux-icon>
            <div class="cell-title">上课日期</div>
            <div class="input">
              <picker mode="date" :value="date" @change="dateChange" start="2018-01-01" end="2022-01-01">
                {{ editDate }}
              </picker>
            </div>
          </div>
          <div class="cell">
            <wux-icon class="bullet" type="ios-alarm" size="28" color="#33cd5f"></wux-icon>
            <div class="cell-title">上课时间</div>
            <div class="input">
              <picker mode="time" :value="time" @change="timeChange">
                {{ editTime }}
              </picker>
            </div>
          </div>
        </div>
        <i-button
          type="success"
          shape="circle"
          @click="save"
        >确认修改</i-button>
        <i-button
          type="success"
          shape="circle"
          @click="collapse"
        >取消</i-button>
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
        lecturerId: '',
        lecturer: '金加宝',
        phone: '',
        des: '操作系统是一门令大家都很头疼的课程',
        date: '2019-1-31',
        time: '7:30',
        location: '文史楼301',
        verified: false,
        booker: '',
        bookPhone: '',
        bookerId: '',
        courseId: null,
        booked: false,
        popup: false,
        editDate: '',
        editTime: '',
        editLocation: ''
      }
    },
    computed: {
      ...mapState({
        stuId: state => state.stuId
      }),
      admin () {
        return this.$store.state.identity === 3
      }
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
      },
      pass () {
        utils.request({
          invoke: utils.api.requestVerify,
          params: {
            courseId: this.courseId
          },
          result: utils.fakeData.VERIFY_RESPONSE
        })
          .then(function (res) {
            if (res.data === true) {
              wx.redirectTo({
                url: '/pages/post-successful/main?display=审核成功'
              })
            }
          })
      },
      edit () {
        this.popup = true
        this.editDate = this.date
        this.editTime = this.time
        this.editLocation = this.location
      },
      save () {
        this.popup = false

        if (this.date !== this.editDate ||
        this.time !== this.editTime) {
          this.date = this.editDate
          this.time = this.editTime
          utils.request({
            invoke: utils.api.requestChangeDate,
            params: {
              courseId: this.courseId,
              date: this.date + ' ' + this.time
            },
            result: utils.fakeData.CHANGE_RESPONSE
          })
        }

        if (this.editLocation !== this.location) {
          this.location = this.editLocation
          utils.request({
            invoke: utils.api.requestChangeLocation,
            params: {
              courseId: this.courseId,
              location: this.location
            },
            result: utils.fakeData.CHANGE_RESPONSE
          })
        }
      },
      dateChange (e) {
        this.editDate = e.target.value
      },
      timeChange (e) {
        this.editTime = e.target.value
      },
      collapse () {
        this.popup = false
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
          // TODO the cover of the course
          utils.fieldMap(res.data.Course, this, [
            'title',
            (from, to) => { to.lecturerId = from.lecturer },
            (from, to) => { to.date = from.date.split(' ')[0] },
            (from, to) => { to.time = from.date.split(' ')[1] },
            'location',
            'des',
            'phone',
            (from, to) => { to.lecturer = from.trueName },
            'verified'
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

  .title, .name, .category {
    float: left;
    position: relative;
    top: 100%;
    transform: translateY(-100%);
  }

  .title {
    font-size: 1.5em;
    padding-right: 1em;
  }

  .category {
    margin-left: 1em;
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

  .edit {
    position: fixed;
    width: 100%;
    bottom: -600rpx;
    left: 0;
    height: 600rpx;
    border-top: solid #2f2f2f2f .05em;
    background: #fff;
    transition: 1s;
  }

  .pop {
    transform: translateY(-600rpx);
  }

  .operation-left, .operation-right {
  }

  .operation-right {
    margin-left: .5em;
  }

  .operation-wrapper {
    width: 100%;
    height: 100%;
  }
</style>
