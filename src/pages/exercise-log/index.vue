<template>
  <div class="total ub-box ub-col  ub-ver-v">
    <div class="calendar ub-box ub-ver">
      <div class="z-width-100-percent  z-margin-top-10-px">
        <Calendar multi="true" ></Calendar>
        <div class="ub-box ub-row ub-ver ub-end z-padding-right-20-px z-padding-bottom-10-px">
          <div class="z-border-radius-50-percent" style="background-color: #2ECC71;width: 10px;height:10px "></div>
          <p class="z-font-size-12 z-color-999 z-margin-left-5-px">已练习</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Calendar from 'mpvue-calendar'
  import 'mpvue-calendar/src/style.css'
  export default{
    components: {Calendar}
  }
</script>
<style scoped>
  .total {
    width:100%;height:100vh;background:#e8e8e8;
  }
  .calendar{
    width: 350px;
    border-radius: 8px;
    background-color: #fff;
    margin-top: 20px;
  }
  .calendar-tools{
    border-radius: 8px !important;
  }
</style>
