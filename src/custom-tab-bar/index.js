Component({
  data: {
    selected: 1,
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
    }
  }
});
