<template>
  <div class="wrapper">
    <wux-toast id="wux-toast"></wux-toast>
    <div class="cell-group">
      <div class="cell">
        <wux-icon class="bullet" type="ios-clipboard" size="22" color="#2ECC71"></wux-icon>
        <div class="cell-title"><label for="course-name">课程名称</label></div>
        <input id="course-name" type="text" placeholder="请输入课程名称" v-model="courseName">
      </div>
      <div class="cell">
        <wux-icon class="bullet" type="ios-menu" size="22" color="#2ECC71"></wux-icon>
        <div class="cell-title">课程类别</div>
        <div class="input">
          <picker
            :value="currentOption"
            :range="options"
            @change="optionChange"
          >{{ options[currentOption] }}</picker>
        </div>
      </div>
      <div class="cell">
        <wux-icon class="bullet" type="ios-contact" size="22" color="#2ECC71"></wux-icon>
        <div class="cell-title"><label for="lecturer">主讲人</label></div>
        <input id="lecturer" type="text" placeholder="请输入主讲人真实姓名" v-model="lecturer">
      </div>
      <div class="cell">
        <wux-icon class="bullet" type="ios-phone-portrait" size="22" color="#2ECC71"></wux-icon>
        <div class="cell-title"><label for="phone-number">手机号码</label></div>
        <input id="phone-number" type="number" placeholder="请输入手机号码" v-model="phoneNumber">
      </div>
      <div class="cell">
        <wux-icon class="bullet" type="ios-home" size="22" color="#2ECC71"></wux-icon>
        <div class="cell-title"><label for="location">上课地点</label></div>
        <input id="location" placeholder="请输入上课地点" v-model="location">
      </div>
      <div class="cell">
        <wux-icon class="bullet" type="ios-calendar" size="22" color="#2ECC71"></wux-icon>
        <div class="cell-title">上课日期</div>
        <div class="input">
          <picker mode="date" :value="date" @change="dateChange" start="2018-01-01" end="2022-01-01">
            {{ date }}
          </picker>
        </div>
      </div>
      <div class="cell">
        <wux-icon class="bullet" type="ios-alarm" size="22" color="#2ECC71"></wux-icon>
        <div class="cell-title">上课时间</div>
        <div class="input">
          <picker mode="time" :value="time" @change="timeChange">
            {{ time }}
          </picker>
        </div>
      </div>
      <div class="cell">
        <wux-icon class="bullet" type="ios-paper" size="22" color="#2ECC71"></wux-icon>
        <div class="cell-title"><label for="introduction">课程简介</label></div>
        <input id="introduction" type="text" placeholder="请输入课程简单并上传图片" v-model="introduction">
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

  import utils from '@/utils'
  import { $wuxToast } from '@/../static/wux-style/index'
  import { mapState } from 'vuex'

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
        date: '2019-01-01',
        time: '13:00',
        location: '',
        options: [
          '普通课程',
          '研讨会'
        ],
        currentOption: 0
      }
    },
    computed: {
      ...mapState({
        stuId: state => state.stuId
      }),
      isTeacher () {
        return this.$store.state.identity === 2
      }
    },
    methods: {
      post_course () {
        if (!utils.checkId(this.lecturer)) {
          $wuxToast().show({
            type: 'forbidden',
            text: '请输入合法的学号'
          })
          return
        }
        if (parseInt(this.currentOption) === 0 && !this.isTeacher) {
          $wuxToast().show({
            type: 'forbidden',
            text: '只有学生导师才能发布此类课程'
          })
          return
        }
        console.log(this)
        utils.request({
          invoke: utils.api.requestAddCourse,
          params: {
            title: this.courseName,
            des: this.introduction,
            stuId: this.stuId,
            location: this.location,
            date: this.date + ' ' + this.time,
            category: parseInt(this.currentOption),
            trueName: this.lecturer,
            phone: this.phoneNumber
          },
          result: utils.fakeData.ADD_COURSE_RESPONSE_SUCCESSFUL
        })
          .then(function (res) {
            if (res.data.status === 'true') {
              utils.request({
                invoke: utils.api.requestRelease,
                params: {
                  stuId: this.stuId,
                  phone: this.phone,
                  courseId: res.data.courseID,
                  trueName: this.lecturer
                },
                result: utils.fakeData.ADD_RELEASE_RESPONSE
              })
                .then(function (res) {
                  if (res.data === true) {
                    wx.redirectTo({
                      url: '/pages/post-successful/main?display=发布成功'
                    })
                  } else {
                    $wuxToast().show({
                      type: 'forbidden',
                      text: '发布失败'
                    })
                  }
                })
            } else {
              $wuxToast().show({
                type: 'forbidden',
                text: '发布失败'
              })
            }
          }.bind(this))
      },
      uploadImage (url) {
        this.url = url
      },
      dateChange (e) {
        this.date = e.target.value
      },
      timeChange (e) {
        this.time = e.target.value
      },
      optionChange (e) {
        this.currentOption = parseInt(e.target.value)
      }
    }
  }
</script>

<style scoped>
  @import "../../css/cell-group.css";

  .wrapper {
    width: 100%;
    position: relative;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0 0 150rpx 0;
    font-size: 14px;
    background: #fff;
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
