<template>
  <div class="container1 ub-box ub-col">
    <dl class="ub-box ub-ver z-padding-v-10-px box1" style="background: #fff">
        <div @click.stop="search" class="search ub-box ub-ver-v z-width-80-percent z-box-sizing-border">
          <i-icon type="search"  size-="16" color="#666"/>
          <span class="z-font-size-14 z-color-999">请输入课程..</span>
        </div>
    </dl>
      <div class="ub-ver tab">
        <i-tabs :current="current" i-class="tab" color="#2ECC71">
          <i-tab v-for="item in tabs" :key="item.key" :title="item.title" :class="{active: current === item.key}" @click="change(item.key)"></i-tab>
        </i-tabs>
      </div>
      <scroll-view scroll-y style="height: calc(100vh-50px)" scroll-top="0">
      <div>
        <div v-if="current === 'tab0'">
          <tab0></tab0>
        </div>
        <div v-else-if="current === 'tab1'">
          <tab1></tab1>
        </div>
        <div v-else>
          <tab2></tab2>
        </div>
      </div>
    </scroll-view>
  </div>
</template>
  <script>
    import tab0 from '../../components/tab0'
    import tab1 from '../../components/tab1'
    import tab2 from '../../components/tab2'
    export default{
      data () {
        return {
          current: 'tab0',
          currentView: 'tab0',
          tabs: [
            {key: 'tab0', title: '动态'},
            {key: 'tab1', title: '课程'},
            {key: 'tab2', title: '练习'}
          ]
        }
      },
      components: {'tab0': tab0, 'tab1': tab1, 'tab2': tab2},
      methods: {
        change (key) {
          this.current = key
          this.currentView = key
        }
      }
    }
</script>

<style scoped>
  .container1{width:100%;height:100vh;background:#e8e8e8;}
  .search{background: #f5f5f5;border-radius: 12px;padding: 5px 10px; }
  .box1{
    width:100%;
    height: 60px;
  }
  .tab{
    width:100%;
  }
</style>
