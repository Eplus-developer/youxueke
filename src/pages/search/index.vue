<template>
<div class="searchContainer" >
  <dl class="ub-box ub-ver z-padding-v-10-px box1 z-margin-top-0-px" style="background: #fff">
    <div class="search ub-box ub-ver-v z-width-80-percent z-box-sizing-border">
      <i-icon type="search"  size-="16" color="#666"></i-icon>
      <input class="z-font-size-14 z-color-999" type="text" autofocus="autofocus"
             v-model.trim="searchString" placeholder="请输入课程内容..." @click="searchTo">
    </div>
    <span class="z-font-size-14 z-margin-left-10-px"
          @click.stop="cancleSearch" style="color: #2ECC71">取消</span>
  </dl>
  <div class="lists">
    <div v-if="courseList.length">
      <course-cell
        v-for="item in courseList"
        :key="item.id"
        :course-id="item.id"
        :lecturer="item.lecturer"
        :date="item.date"
        :location="item.location"
        :des="item.des"
        :title="item.title"
      ></course-cell>
    </div>
    <div v-if="courseList.length" class="ub-box ub-ver empty1">
      <img class="img" src="/static/images/empty.png">
    </div>
  </div>

</div>
</template>
<script>
  // eslint-disable-next-line no-useless-escape
  import CourseCell from '../../components/course1.vue'
  import utils from '@/utils'
  export default {
    components: {CourseCell},
    data () {
      return {
        searchString: '',
        courseList: [],
        keyword: '',
        isEmpty: false
      }
    },
    methods: {
      cancleSearch () {
        wx.switchTab({
          url: '/pages/index/main'
        })
      },
      fun_click (val) {
        if (!val) { return }
        this.keyword = val
        let that = this
        utils.request({
          invoke: utils.api.requestCourseByTitle,
          params: {
            title: this.keyword
          },
          result: utils.fakeData.GET_COURSE_LIST_BY_TITLE
        })
          .then(function (res) {
            // store.state.dynamicDate.push(...res.data.Topic)
            that.courseList = []
            that.courseList.push(...res.data.CourseList)
            that.isEmpty = !that.courseList.length
          })
      }
    },
    watch: {
      searchString (data) {
        if (data !== '') {
          this.fun_click(data)
        } else {
          this.courseList = []
        }
      }
    }
  }
    </script>
<style scoped>
  .searchContainer{width:100%;
    height: 100%;
    background:#e8e8e8;}
  .search{background: #f5f5f5;border-radius: 12px;padding: 5px 10px; }
  .img{
    width: 60px;
    height: 60px;
  }
  .empty1 {
    margin-top: 100px
  }
</style>
