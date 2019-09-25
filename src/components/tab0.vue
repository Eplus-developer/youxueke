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
    methods: {
      async refresh () {
        let that = this
        console.log(that)
        return utils.request({
          invoke: utils.api.requestTopicList,
          params: {},
          result: utils.fakeData.DYNAMIC_LIST_DATA
        })
          .then(async function (res) {
            for (let i = 0; i < res.data.Topic.length; i++) {
              res.data.Topic[i].author_name = await utils.userLookUp(res.data.Topic[i].author)
            }
            // store.state.dynamicDate.push(...res.data.Topic)
            store.commit('TOPIC_LIST', {
              dynamicData: res.data.Topic
            })
          })
      }
    },
    mounted () {
      this.refresh()
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
