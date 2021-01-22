// pages/index/index.js
Page({
  data: {
    active: 0
  },
  changeTab: function (event) {
    const {
      key
    } = event.currentTarget.dataset;
    this.setData({
      [key]: event.detail
    });
    console.log(this.data)
  }
})