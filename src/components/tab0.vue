<template>
  <div class="ub-box ub-col">
   <dynamicList v-for="item in dynamicData" :key="item.id"
   :title="item.title"
   :des="item.des"
   :author="item.author"
   :likes="item.likes"
   :replies="item.replies"></dynamicList>
  </div>
</template>
<script>
  import dynamicList from './dynamic.vue'
  import utils from '@/utils'
  export default{
    components: {dynamicList},
    data () {
      return {
        dynamicData: []
      }
    },
    mounted () {
      utils.request({
        invoke: utils.api.requestTopicList,
        params: {},
        result: utils.fakeData.DYNAMIC_LIST_DATA
      })
        .then(function (res) {
          this.dynamicData = []
          this.dynamicData.push(...res.data.Topic)
        }.bind(this))
    }
  }
</script>
<style scoped>
</style>
