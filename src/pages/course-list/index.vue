<template>
  <div>
    <course-cell
      v-for="item in courseList"
      :key="item.id"
      :course-id="item.id"
      :title="item.title"
      :location="item.location"
      :lecturer="item.lecturer"
      :booked="booked"
    ></course-cell>
  </div>
</template>

<script>
  import CourseCell from '@/components/course1'

  import utils from '@/utils'
  import { mapState } from 'vuex'

  export default {
    name: 'index',
    components: { CourseCell },
    computed: {
      ...mapState({
        stuId: state => state.stuId
      })
    },
    data () {
      return {
        courseList: [],
        booked: false
      }
    },
    mounted () {
      let requestMethod
      let response
      switch (this.$root.$mp.query.type) {
      case 'post':
        this.booked = false
        requestMethod = utils.api.requestCourseByTeacher
        response = utils.fakeData.GET_COURSE_LIST_BY_LECTURER
        break
      case 'take-part':
        this.booked = true
        requestMethod = utils.api.requestCourseByStudent
        response = utils.fakeData.GET_COURSE_LIST_BY_BOOKER
        break
      }
      utils.request({
        invoke: requestMethod,
        params: {
          stuId: this.stuId
        },
        result: response
      })
        .then(function (res) {
          this.courseList = []
          if (res.data.Release && res.data.Release.length > 0) this.courseList.push(...res.data.Release)
          else if (res.data.Course && res.data.Course.length > 0) this.courseList.push(...res.data.Course)
        }.bind(this))
    },
    destroyed () {
      console.log('destroyed')
    }
  }
</script>

<style scoped>

</style>
