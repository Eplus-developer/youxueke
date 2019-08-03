wx.getSystemInfo({
  success: function (res) {
    console.log(res.SDKVersion)
  }
})

Component({
  data: {
    selected: 1,
    identity: 1,      /* 2 for the student tutor. */
    post_style: {},
    tab_style: {},
    pop_style: {},
    close_style: {},
    icon: [
      '/static/tabs/home.png',
      '/static/tabs/pluse.png',
      '/static/tabs/account.png'
    ],
    icon_selected: [
      '/static/tabs/home-active.png',
      '/static/tabs/pluse.png',
      '/static/tabs/account-active.png'
    ]
  },
  methods: {
    left: function () {
      wx.switchTab({
        url: '/pages/index/main'
      })
    },
    right: function () {
      wx.switchTab({
        url: '/pages/home/main'
      })
    },
    post: function () {
      this.setData({
        post_style: 'transform: scale(0.5);transition: 0.3s'
      })
      setTimeout(function () {
        this.setData({
          post_style: 'transform: scale(1.0);transition: 0.1s'
        })
      }.bind(this), 300)
      setTimeout(function () {
        this.setData({
          /* set the bottom attribute doesn't work in the real phone due to the performance problem. same as the wx.createAnimation method. */
          pop_style: 'transform: translateY(-250rpx);transition: 0.5s'
        })
      }.bind(this), 500)
    },
    collapse: function () {
      this.setData({
        close_style: 'transform: rotate(180);transition: 0.1s',
        pop_style: 'transform: translateY(0);transition: 0.5s'
      })
    },
    questioning: function () {
      console.log('i am about to ask a question. ')
      wx.navigateTo({
        url: '/pages/question/main'
      })
    },
    posting: function () {
      console.log('i am about to post a new course. ')
      wx.navigateTo({
        url: '/pages/post/main'
      })
    }
  }
})
