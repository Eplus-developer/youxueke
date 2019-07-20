<template>
  <div class="wrapper">
    <wux-icon @click="remove" v-if="selected" class="close" :type="'ios-close-circle'" :size="'mini'"></wux-icon>
    <image @click="upload" class="img" :src="url" mode="widthFix"></image>
  </div>
</template>

<script>
  export default {
    props: [],
    data () {
      return {
        url: '/static/icons/post/image.png',
        selected: false
      }
    },
    methods: {
      upload () {
        let that = this
        wx.chooseImage({
          count: 1,
          success (res) {
            that.url = res.tempFilePaths[0]
            that.selected = true
            that.$emit('image-changed', that.url)
          }
        })
      },
      remove () {
        let that = this
        wx.showModal({
          title: '警告',
          content: '是否确认删除此张照片',
          success (res) {
            if (res.confirm) {
              that.url = '/static/icons/post/image.png'
              that.selected = false
              that.$emit('image-changed', '')
            }
          }
        })
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    width: 100%;
    padding: 5%;
    border: solid #000 .05rpx;
    border-radius: 8%;
    position: relative;
  }

  .close {
    position: absolute;
    right: 5%;
    top: 5%;
  }

  image {
    max-width: 150rpx;
  }
</style>
