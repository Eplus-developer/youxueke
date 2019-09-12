<template>
  <div class="ub-box ub-col">
    <Calendar
      ref="calendar"
      :value="date"
      week-switch="true"
      @select="selectHandler"
    ></Calendar>
    <div class="ub-box ub-col z-margin-top-0-px">
      <course-cell
        v-for="item in courseList"
        :key="item.id"
        :course-id="item.id"
        :lecturer="item.lecturer"
        :date="item.date"
        :location="item.location"
        :des="item.des"
        :title="title"
      ></course-cell>
    </div>
  </div>
</template>
<script>
  import Calendar from 'mpvue-calendar'
  import 'mpvue-calendar/src/style.css'
  import tab0 from './tab0.vue'
  import CourseCell from './course1.vue'

  import utils from '@/utils'

  export default{
    components: {Calendar, tab0, CourseCell},
    data () {
      return {
        courseList: []
      }
    },
    methods: {
      selectHandler (val, info) {
        utils.request({
          invoke: utils.api.requestCourseByDate,
          params: {
            date: info.date
          },
          result: utils.fakeData.GET_COURSE_LIST_BY_DATE
        })
          .then(function (res) {
            this.courseList = []
            this.courseList.push(...res.data.Course)
          }.bind(this))
        console.log(this.courseList)
      }
    },
    mounted () {
      this.selectHandler(null, { date: new Date().toLocaleDateString() })
    }
  }
</script>
<style  scoped>
</style>
