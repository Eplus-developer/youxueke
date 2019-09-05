<template>
  <div class="ub-box ub-col z-width-100-percent z-padding-all-10-px z-border-bottom-1-eee" style="background: #fff" >
    <div @click.stop="gotoDetail()" class="card ub-box ub-wrap ub-row  z-padding-v-10px   z-box-sizing-border">
      <img :src="img" class="z-img-cover" alt="not see">
      <div class="z-margin-left-20-px ub-flex-1 ub-box ub-col">
        <p class="z-font-size-15 z-lineHeight-26 z-lines-1-overflow-hidden z-font-weight-bold">{{title}}</p>
        <p class="z-font-size-12 z-color-666 z-lineHeight-20">{{lecturer}}</p>
        <div class="ub-flex-1 ub-box ub-between box2">
          <p class="ub-flex-1 ub-box ub-ver-v">
            <i-icon type="time"  size="20" color="#888"></i-icon>
            <span class="z-font-size-12 z-color-888"> {{date}}</span>
          </p>
          <p class="ub-flex-1 ub-box ub-ver-v">
            <i-icon type="coordinates_fill"  size="20" color="#888"></i-icon>
            <span class="z-font-size-12 z-color-888"> {{location}}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    props: {
      courseId: Number,
      img: {
        type: String,
        default: 'http://www.91chuangye.com/uploads/allimg/180511/45-1P511105134T5.jpg'
      },
      title: String,
      lecturer: String,
      date: String,
      location: String,
      booked: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      gotoDetail () {
        wx.navigateTo({url: `/pages/course/main?courseId=${this.courseId}&booked=${this.booked}`})
      }
    }
  }
</script>
<style scoped>
  .card img {
    width: 80px;
    height: 80px;
    border-radius: 12px
  }

  .box2 {
    margin-left: 0;
  }
</style>
