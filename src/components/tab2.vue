<template>
  <div class="container2 ub-box ub-col" style="width:100%">
    <scroll-view scroll-y style="width:100%" scroll-top="0">
      <dl class="ub-box ub-col  ub-ver z-width-100-percent">
        <div class="course ub-box  ub-ver-v  z-margin-top-20-px z-padding-v-10-px z-width-80-percent" v-for="course in courses"  :key="course.index" @click="exercise">
          <span class="z-color-000 z-font-size-17 z-margin-left-15-px z-width-80-percent">{{course.name}}</span>
          <!--<i-icon type="brush" size="18" color="#111"/>-->
          <img src="/static/icons/pen.png" alt="not see" style="width:25px;height:25px">
        </div>
      </dl>
    </scroll-view>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        courses: [
          {name: '操作系统'},
          {name: '计算机网络'},
          {name: '数据结构'}
        ]
      }
    },
    methods: {
      exercise () {
        wx.navigateTo({
          url: '/pages/exercise/main'
        })
      }
    }
  }
</script>
<style>
  .course{
    background-color: #fff;
    border-radius: 10px;
  }
</style>

