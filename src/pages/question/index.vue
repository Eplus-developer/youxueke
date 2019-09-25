<template>
  <div class="wrapper">
    <div class="cell-group">
      <div class="cell">
        <wux-icon class="bullet" type="ios-clipboard" size="22" color="#2ECC71"></wux-icon>
        <div class="cell-title"><label for="question-title">标题</label></div>
        <input id="question-title" type="text" placeholder="请输入标题" v-model="questionTitle">
      </div>
      <div class="cell">
        <wux-icon class="bullet" type="ios-paper" size="22" color="#2ECC71"></wux-icon>
        <div class="cell-title"><label for="question-intro">问题简介</label></div>
        <input id="question-intro" type="text" placeholder="请输入课程简单并上传图片" v-model="questionIntroduction">
      </div>
    </div>
    <image :src="imagePath" class="upload" mode="widthFix" @click="uploadImage"></image>
    <i-button class="bottom-large" type="success" shape="circle" @click="post_question">发布问题</i-button>
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
        questionTitle: '',
        questionIntroduction: '',
        imagePath: '/static/icons/post/image.png'
      }
    },
    computed: {
      ...mapState({
        stuId: state => state.stuId
      })
    },
    methods: {
      post_question () {
        console.log(this.stuId)
        utils.request({
          invoke: utils.api.requestAddTopic,
          params: {
            title: this.questionTitle,
            des: this.questionIntroduction,
            stuId: this.stuId,
            avatar: this.$store.state.avatar,
            author: this.$store.state.name,
            date: new Date().toLocaleDateString(),
            imgUrl: this.imagePath
          },
          result: utils.fakeData.ADD_QUESTION_RESPONSE_SUCCESSFUL
        })
          .then(function (res) {
            console.log(res)
            if (res.data.status === 'true') {
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
