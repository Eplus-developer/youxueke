<template>
  <div class="ub-box ub-col z-width-100-percent z-padding-all-10-px z-border-bottom-1-eee" style="background: #fff" >
    <div @click.stop="gotoDetail()" class="card ub-box ub-wrap ub-row  z-padding-v-10px   z-box-sizing-border">
      <img :src="course.img" class="z-img-cover" alt="not see">
      <div class="z-margin-left-20-px ub-flex-1 ub-box ub-col">
        <p class="z-font-size-15 z-lineHeight-26 z-lines-1-overflow-hidden z-font-weight-bold">{{course.title}}</p>
        <p class="z-font-size-12 z-color-666 z-lineHeight-20">{{course.lecturer}}</p>
        <div class="ub-flex-1 ub-box ub-between box2">
          <p class="ub-flex-1 ub-box ub-ver-v">
            <i-icon type="time"  size="20" color="#888"/>
            <span class="z-font-size-12 z-color-888"> {{course.courseDate}}</span>
          </p>
          <p class="ub-flex-1 ub-box ub-ver-v">
            <i-icon type="coordinates_fill"  size="20" color="#888"/>
            <span class="z-font-size-12 z-color-888"> {{course.coursePlace}}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    props: ['isLast'],
    data () {
      return {
        course: {
          courseId: 'o1',
          img: '/static/images/user.png',
          title: '操作系统',
          lecturer: 'jasmine',
          courseDate: '2019-10-12',
          coursePlace: '教书院'
        }
      }
    },
    methods: {
      gotoDetail () {
        wx.navigateTo({url: '/pages/course/main'})
      }
    }
  }
</script>
<style scoped>
  .card img{width: 80px;height: 80px;border-radius: 12px}
  .box2{
    margin-left: 0;}
</style>
