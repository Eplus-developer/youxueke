<template>
  <div class="ub-box ub-col">
    <Calendar :value="date" week-switch="true"></Calendar>
    <div class="ub-box ub-col z-margin-top-10-px">
      <course1></course1>
      <course1></course1>
    </div>
  </div>
</template>
<script>
  import Calendar from 'mpvue-calendar'
  import 'mpvue-calendar/src/style.css'
  import tab0 from './tab0.vue'
  import course1 from './course1.vue'
  export default{
    components: {Calendar, tab0, course1},
    data () {
      return {}
    }
  }
</script>
<style  scoped>
</style>
