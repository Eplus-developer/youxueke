<template>
<div class="ub-box ub-col container3 " >
  <scroll-view scroll-y scroll-top="10px">
    <div class="ub-box ub-col z-padding-all-10-px z-border-bottom-1-eee " style="background: #fff">
      <div class="ub-box ub-row">
        <i-avatar :src="detailData.avatar" size="default"></i-avatar>
        <div class="ub-box ub-col z-margin-left-10-px">
          <p class="z-font-size-14 z-color-000 z-margin-bottom-3-px">{{detailData.author}}</p>
          <p class="z-font-size-12 z-color-666"> {{detailData.date}}</p>
          <div class="ub-box ub-col z-margin-top-10-px" @click.stop="question">
            <p class="title z-color-000 z-font-size-15 z-margin-bottom-5-px">{{detailData.title}}</p>
            <span class=" des z-font-size-14 z-color-353535">
          {{detailData.des}}
      </span>
          </div>
        </div>
      </div>
      <div class=" ub-box ub-wrap z-padding-v-5-px ub-ver  z-margin-top-5-px">
        <img :src="detailData.imgUrl" class="z-img-cover img" alt="">
      </div>
      <div class="ub-box ub-row  ub-end z-margin-top-5-px z-margin-right-15-px">
        <div class="zan ub-box ub-row " @click.stop="like">
          <img v-if="!isLike" class="likeimg1" src="/static/icons/zan0.png">
          <img v-else class="likeimg2" src="/static/icons/zan1.png">
          <p v-if="detailData.likes" class="z-color-666 z-font-size-12 num"> {{detailData.likes}}</p>
        </div>
        <div class="comment ub-box ub-row" @click.stop="comment1">
          <img src="/static/icons/comment.png" class="icon">
          <p v-if="detailData.replies" class="z-color-666 z-font-size-12 num"> {{detailData.replies}}</p>
        </div>
      </div>
    </div>
    <div class="replyClass ">
      <ul v-for="item in reply"  :key="item.id" class="z-margin-left-20-px" :index="item.index">
        <li v-if="item.type" @click.stop="replyHandle(item.author, index)">
         <p><span>{{item.author}}:</span>&nbsp;&nbsp;{{item.des}}</p>
        </li>
        <li v-else @click.stop="replyHandle(item.author, index)">
          <p><span>{{item.author}}</span>
            &nbsp;&nbsp;回复&nbsp;&nbsp;<span>{{item.oldCommenter}}</span>:&nbsp;&nbsp;{{item.des}}</p>
        </li>
      </ul>

    </div>

  </scroll-view>
  <dl class="ub-box ub-col  z-padding-all-10-px bottom-box" style="background: #fff">
    <div class="wenben z-margin-bottom-3-px">
      <p v-if="type" >你回复&nbsp;{{oldCommenter}}</p>
      <p v-else >你回复&nbsp;{{detailData.author}}</p>
    </div>
   <div class="ub-row ub-box ub-ver-v">
    <div class="ping ub-box ub-ver-v z-width-70-percent">
      <textarea  autofocus  class="z-font-size-14 z-color-999 text"  placeholder="请输入你的评论" v-model="commentText"  ></textarea>
    </div>
    <p  @click.stop="addComment" class="commentButton">发表</p>
   </div>
  </dl>
</div>
</template>
<script>
  import dynamic from '../../components/dynamic.vue'
  import zan from '../../components/zan.vue'
  import {mapState} from 'vuex'
  import store from '@/store'
  import utils from '@/utils'
  export default{
    components: {dynamic, zan},
    data () {
      return {
        detailData: {},
        avatar: '/static/images/user.png',
        date: '2019-10-01',
        detail_img: '/static/images/banner.jpg',
        isLike: false,
        index: Number,
        reply: [],
        commentText: '',
        type: 0, // 0 表示评论别人，1表示评论作者,
        oldCommenter: ''
      }
    },
    mounted () {
      let that = this
      that.detailData = that.dynamicData[that.$mp.query.index]
      console.log(that.detailData)
      utils.request({
        invoke: utils.api.findRepliesByTopic,
        params: {
          topicId: that.detailData.id
        },
        result: utils.fakeData.GET_REPLY_LIST
      })
        .then(function (res) {
          that.reply = []
          that.reply.push(...res.data.Reply)
        })
      console.log(that.reply)
    },
    computed: {
      ...mapState(
        {dynamicData: state => state.dynamicData}
      )
    },
    methods: {
      like () {
        if (!this.isLike) {
          this.isLike = !this.isLike
          // this.detailData.likes = this.detailData.likes + 1
          store.commit('LIKE_CHANGE', {
            index: this.index,
            num: this.detailData.likes + 1
          })
          console.log(this.detailData)
        } else {
          this.isLike = !this.isLike
          store.commit('LIKE_CHANGE', {
            index: this.index,
            num: this.detailData.likes - 1
          })
        }
        let oldStorage = wx.getStorageSync('isLike')
        oldStorage[this.index] = this.isLike
        // 将本次设置的结果再缓存到本地
        wx.setStorage({
          key: 'isLike',
          data: oldStorage
        })
      },
      replyHandle (name, index) {
        this.oldCommenter = name
        this.type = 1
      },
      addComment () {
        let that = this
        utils.request({
          invoke: utils.api.requestReply,
          params: {
            topicId: that.detailData.id,
            des: that.commentText,
            stuId: that.$store.state.stuId,
            date: new Date().toLocaleDateString(),
            type: that.type,
            oldCommenter: that.oldCommenter
          }
        })
          .then(function (res) {
            that.oldCommenter = ''
          })
        that.oldCommenter = ''
      }

    },
    beforeMount () {
      this.index = this.$mp.query.index
      let oldStorage = wx.getStorageSync('isLike')
      if (!oldStorage) {
        wx.setStorage({
          key: 'isLike',
          data: {}
        })
      } else {
        this.isLike = !!oldStorage[this.index]
      }
      console.log(this.isLike)
    }
  }
</script>
<style scoped>
  .container3{
    width:100%;
    height:100vh;
    background:#e8e8e8;
    position: relative;
  }
  .ping{background: #f5f5f5;border-radius: 12px;padding: 5px 10px; }
  .bottom-box{
    position: absolute;
    bottom: 0;
    width: 100%;
  }
  .img{
    width: 50%;
    height:100px;

  }
  .title {
    font-weight: bold;
  }
  .likeimg1 {
    width: 20px;
    height: 20px;
  }
  .likeimg2 {
    width: 25px;
    height: 25px;
  }
  .zan{
    position: relative;
    margin-right: 18px;
  }
  .num{
    position: absolute;
    z-index: 1;
    margin-top:0;
    margin-left: 25px;
  }
  .icon{
    width: 25px;
    height: 25px;
  }
  .comment{
    position: relative;
  }

  .replyClass{
    background-color: #fff;
    margin-top: 0;
    padding-top: 10px;
    padding-bottom: 10px;
    width: 100%;
  }
  .replyClass p{
    font-size: 12px;
    color: #353535
  }
  .replyClass span{
    color: #2ECC71;
  }
  .replyClass li{
    margin-bottom: 5px
  }
  .text{
    height: 30px
  }
  .commentButton {
    font-size: 14px;
    color: #2ECC71;
    margin-left: 10px
  }
  .wenben p{
    font-size: 14px;
    color: #353535;
  }

</style>
