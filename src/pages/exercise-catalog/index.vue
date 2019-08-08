<template>
  <div class="outer-most container2 ub-box ub-col" style="width:100%">
    <scroll-view scroll-y style="width:100%" scroll-top="0">
      <dl class="ub-box ub-col  ub-ver z-width-100-percent">
        <div class="course ub-box  ub-ver-v  z-margin-top-20-px z-padding-v-10-px z-width-80-percent" v-for="unit in units"  :key="unit.index" @click="enter">
          <span class="z-color-000 z-font-size-17 z-margin-left-15-px z-width-80-percent">{{unit.name}}</span>
          <!--<i-icon type="brush" size="18" color="#111"/>-->
          <img src="/static/icons/pen.png" alt="not see" style="width:25px;height:25px">
        </div>
      </dl>
    </scroll-view>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        units: [
          {
            index: 1,
            name: '物理层'
          }, {
            index: 2,
            name: '链路层'
          }, {
            index: 3,
            name: '网络层'
          }, {
            index: 4,
            name: '传输层'
          }, {
            index: 5,
            name: '应用层'
          }
        ]
      }
    },
    methods: {
      enter () {
        wx.navigateTo({
          url: '/pages/exercise/main'
        })
      }
    }
  }
</script>

<style scoped>
  .course{
    background-color: #fff;
    border-radius: 10px;
  }

  .outer-most {
    height: 100%;
    background: #e8e8e8;
  }
</style>
