<template>
  <div class="ub-box ub-col z-padding-all-10-px" style="background: #fff">
    <div class="ub-box ub-row">
      <i-avatar :src="avatar" size="default"></i-avatar>
      <div class="ub-box ub-col z-margin-left-10-px">
        <p class="z-font-size-14 z-color-000 z-margin-bottom-3-px">{{author}}</p>
        <p class="z-font-size-12 z-color-666"> {{date}}</p>
    <div class="ub-box ub-col z-margin-top-10-px" @click.stop="question">
      <p class="title z-color-000 z-font-size-15 z-margin-bottom-5-px">{{title}}</p>
      <span class=" des z-font-size-14 z-color-353535">
          {{des}}
      </span>
    </div>
    </div>
  </div>
    <div class="ub-box ub-wrap z-padding-v-5-px ub-ver  z-margin-top-5-px">
        <img :src="detail_img" class="z-img-cover img" alt="">
    </div>
    <div class="ub-box ub-row  ub-end z-margin-top-5-px">
      <div>
        <zan></zan></div>
      <div class="z-margin-left-5-px">
        <comment ></comment>
      </div>
    </div>
  </div>
</template>
<script>
  import zan from './zan.vue'
  import comment from './comment.vue'

  export default {
    components: { zan, comment },
    data () {
      return {
        avatar: '/static/images/user.png',
        date: '2019-10-01',
        detail_img: '/static/images/banner.jpg'
      }
    },
    props: {
      id: Number,
      title: String,
      des: String,
      author: String,
      likes: {
        type: Number,
        default: 0
      },
      replies: {
        type: Number,
        default: 0
      }
    },
    methods: {
      showTotalIntro () {
        console.log(this.showTotal)
        this.showTotal = !this.showTotal
        this.exchangeButton = !this.exchangeButton
      },
      init () {
        if (this.postinfo.questionIntroduction.length > 45) {
          this.showExchangeButton = !this.showExchangeButton
          this.showTotal = !this.showTotal
          this.shortIntroduction = this.postinfo.questionIntroduction.substring(0, 45) + ' ...'
        }
      },
      question () {
        wx.navigateTo({
          url: '/pages/dynamicDetail/main'
        })
      }
    },
    mounted () {
      this.init()
    }
  }
</script>
<style scoped>
  .img{
    width: 50%;
    height:100px;

  }
  .title {
    font-weight: bold;
  }
</style>
