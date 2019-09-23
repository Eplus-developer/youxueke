<template>
  <div class="ub-box ub-col z-padding-all-10-px z-border-bottom-1-eee " style="background: #fff">
    <div class="ub-box ub-row">
      <i-avatar :src="item.avatar" size="default"></i-avatar>
      <div class="ub-box ub-col z-margin-left-10-px">
        <p class="z-font-size-14 z-color-000 z-margin-bottom-3-px">{{item.author}}</p>
        <p class="z-font-size-12 z-color-666"> {{item.date}}</p>
    <div class="ub-box ub-col z-margin-top-10-px" @click.stop="question">
      <p class="title z-color-000 z-font-size-15 z-margin-bottom-5-px">{{item.title}}</p>
      <span class=" des z-font-size-14 z-color-353535">
          {{item.des}}
      </span>
    </div>
    </div>
  </div>
    <div class="ub-box ub-wrap z-padding-v-5-px ub-ver  z-margin-top-5-px">
        <img :src="item.imgUrl" class="z-img-cover img" alt="">
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
        detail_img: '/static/images/banner.jpg',
        isLike: false
      }
    },
    props: {
      item: Object,
      index: Number
    },
    methods: {
      question () {
        wx.navigateTo({
          // eslint-disable-next-line no-template-curly-in-string
          url: '/pages/dynamicDetail/main?index=' + this.index
        })
      }
    },
    mounted () {
      console.log(this.item)
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
