let post_animation = wx.createAnimation({
  timingFunction: 'ease'
})
let tab_animation = wx.createAnimation({
  timingFunction: 'ease'
})

let pop_animation = wx.createAnimation({
  timingFunction: 'ease'
})

let close_animation = wx.createAnimation({
  timingFunction: 'ease'
})
Component({
  data: {
    selected: 1,
    post_animation: {},
    tab_animation: {},
    pop_animation: {},
    close_animation: {},
    icon: [
      '/static/tabs/home.png',
      '/static/images/user.png',
      '/static/tabs/orders.png'
    ],
    icon_selected: [
      '/static/tabs/home-active.png',
      '/static/images/user.png',
      '/static/tabs/orders-active.png'
    ]
  },
  methods: {
    left: function () {
      wx.switchTab({
        url: '/pages/index/main',
      })
    },
    right: function () {
      wx.switchTab({
        url: '/pages/home/main',
      })
    },
    post: function () {
      post_animation.scale(0.6).step({duration: 200})
      post_animation.scale(1.0).step({duration: 100})
      this.setData({post_animation: post_animation.export()})
      setTimeout(function () {
        pop_animation.bottom('0rpx').step({duration: 700})
        this.setData({pop_animation: pop_animation.export()})
      }.bind(this), 300)
    },
    collapse: function () {
      close_animation.rotate(180).step({duration: 1000})
      close_animation.rotate(-180).step({ duration: 1000 })
      this.setData({close_animation: close_animation.export()})
      pop_animation.bottom('-250rpx').step({ duration: 1000 })
      this.setData({ pop_animation: pop_animation.export() })
    }
  }
})
