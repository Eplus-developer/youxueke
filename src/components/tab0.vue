<template>
  <div class="ub-box ub-col">
    <dynamic-list
      v-for="item in dynamicData"
      :key="item.id"
      :title="item.title"
      :des="item.des"
      :author="item.author"
      :likes="item.likes"
      :replies="item.replies">
    </dynamic-list>
  </div>
</template>

<script>
  import dynamicList from './dynamic.vue'
  import utils from '@/utils'

  export default {
    name: 'tab0',
    components: { dynamicList },
    data () {
      return {
        dynamicData: []
      }
    },
    mounted () {
      console.log('mounted')
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
