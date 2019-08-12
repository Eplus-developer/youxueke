<template>
  <div class="ub-box ub-col z-padding-all-10-px" style="background: #fff">
    <div class="ub-box ub-row">
      <i-avatar :src="postinfo.img" size="default"></i-avatar>
      <div class="ub-box ub-col z-margin-left-10-px">
        <p class="z-font-size-14 z-color-000 z-margin-bottom-3-px">{{postinfo.name}}</p>
        <p class="z-font-size-12 z-color-666"> {{postinfo.postData}}</p>
      </div>
    </div>
    <div class="ub-box ub-col z-margin-top-10-px" @click.stop="question">
      <p class="z-color-000 z-font-size-15 z-margin-bottom-5-px">{{postinfo.questionTitle}}</p>
        <div :class="showTotal ? 'total-introduce' : 'detailed-introduce'">
           <div class="intro-content" :title="postinfo.questionIntroduction">
          <span class="merchant-desc " v-if="!showTotal" >
          {{shortIntroduction}}
        </span>
             <span class="merchant-desc " v-else>
          {{postinfo.questionIntroduction}}
        </span>
             <div class="unfold" v-if="showExchangeButton">
          <div  @click.stop="showTotalIntro" >
            <p class="unfold-p">{{exchangeButton ? '展开' : '收起'}}</p>
           </div>
           </div>
           </div>
        </div>
    </div>
    <div class="ub-box ub-wrap z-padding-v-5-px ub-ver z-width-100-percent z-margin-top-5-px">
      <div v-for="imgs in  postinfo.questionImg" :key="imgs.index" class="ub-flex-1 z-box-sizing-border">
        <img :src="imgs.src" class="z-img-cover img">
      </div>
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
    components: {zan, comment},
    data () {
      return {
        postinfo: {
          name: '张博士',
          img: '/static/images/1.jpg',
          postData: '2019-08-30 19:30',
          questionTitle: '计算机网络',
          questionIntroduction: '计算机网络可敬的改货币三分是考试的女拉到就女网络可敬的改货币三分是考试的女拉的女拉到就女网络可敬的改货币三分是考试的女拉',
          questionImg: [
            {src: '../../static/images/1.jpg'},
            {src: '../../static/images/1.jpg'}
          ]
        },
        exchangeButton: true,
        shortIntroduction: ''
      }
    },
    props: {
      showTotal: {
        type: Boolean,
        default: true
      },
      showExchangeButton: {
        type: Boolean,
        default: false
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
  .unfold-p {
    margin: 0;
    line-height: 21px;
    color: #2ECC71;
  }
  .detailed-introduce {
    font-size: 14px;
    color: #353535;
    position: relative;
    overflow: hidden;
  }
  .detailed-introduce  .intro-content{
    max-height: 42px;
    line-height: 21px;
    word-wrap: break-word;
    word-break: break-all;
    background: #ffffff;
    color: #ffffff;
    overflow: hidden;
  }
  .detailed-introduce  .intro-content .unfold{
    z-index: 11;
    width: 40px;
    height: 21px;
    outline: 0;
    position: absolute;
    right: 0;
    bottom: 0;
  }
  .merchant-desc {
    width: 100%;
    line-height: 21px;
    color: #353535;
    text-indent:5%;
    display:inline-block;
  }
  .total-introduce{
    height: auto;
    overflow: hidden;
    font-size: 14px;
    color: #434343;
  }
 .total-introduce  .unfold{
    display: block;
    z-index: 11;
    float: right;
    width: 40px;
    height: 21px;
  }
  .img{
    width: 80px;
    height: 60px
  }
</style>
