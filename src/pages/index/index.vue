<template>
  <div class="container">
   <div id="search" >
     <i-icon type="search" />
     <input type="text" class="search" placeholder="搜索课程或讲师" v-model.trim="title"/>
   </div>


  </div>

</template>

<script>

  export default {
    data () {
      return {
      }
    },
    computed: {
    },
    methods: {
    }
  }
</script>
<style scoped>
  .container {
    background-color: #EDEDED;
    width: 100%;
    height: 100vh;
  }

</style>
