<template>
  <div class="ub-box ub-col">
   <dynamicList v-for="(item, index) in dynamicData" :key="item.id" :index="index" :item="item"></dynamicList>
  </div>
</template>

<script>
  import dynamicList from './dynamic.vue'
  import utils from '@/utils'
  import { mapState } from 'vuex'
  import store from '@/store'
  export default{
    components: {dynamicList},
    data () {
      return {
        dynamicDate: []
      }
    },
    mounted () {
      utils.request({
        invoke: utils.api.requestTopicList,
        params: {},
        result: utils.fakeData.DYNAMIC_LIST_DATA
      })
        .then(function (res) {
          // store.state.dynamicDate.push(...res.data.Topic)
          store.commit('TOPIC_LIST', {
            dynamicData: res.data.Topic
          })
          console.log(this.dynamicData)
        })
      console.log(this.dynamicData)
    },
    computed: {
      ...mapState(
        {dynamicData: state => state.dynamicData}
      )
    }
  }
</script>

<style scoped>
</style>
