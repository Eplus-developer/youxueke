<template>
  <div class="background-wrapper">
    <div class="wrapper">
      <div class="progress-wrapper">
        {{ header }}
      </div>
      <div class="window">
        <div>【{{ type }}】</div>
        <div>{{ stem }}</div>
      </div>
      <div class="window">
        <wux-checkbox-group
          :value="checked"
          @change="answer"
        >
          <wux-checkbox
            v-for="(item, index) in options"
            :key="item"
            color="balanced"
            :value="index"
            :title="item"
          >
          </wux-checkbox>
        </wux-checkbox-group>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        type: '单选题',
        stem: 'ISO模型由几层构成？',
        options: [
          '三层',
          '四层',
          '七层',
          '10086层'
        ],
        checked: [],
        chapter: '第一章',
        subject: '计算机网络',
        index: 1,
        count: 8
      }
    },
    computed: {
      header () {
        return `${this.subject} ${this.chapter} ${this.index}/${this.count}`
      }
    },
    methods: {
      answer (e) {
        this.checked.push(e.target.value)
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    width: 70%;
    position: relative;
    margin: 1em auto;
    font-size: .9em;
    top: 1em;
  }

  .window {
    border-radius: 30rpx;
    background: #ffffff;
    padding: 1em;
    margin-bottom: 100rpx;
  }

  .progress-wrapper {
    top: 50%;
    margin: 50rpx auto;
    text-align: center;
    width: 70%;
    position: relative;
  }
</style>
