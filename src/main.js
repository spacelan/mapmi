import Vue from 'vue';
import App from './App';

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: {
    App
  },
  ready() {
    // 百度地图API功能
    window.map = new BMap.Map('map') // 创建Map实例
    map.centerAndZoom(new BMap.Point(116.404, 39.915), 11) // 初始化地图,设置中心点坐标和地图级别
    map.setCurrentCity('北京') // 设置地图显示的城市 此项是必须设置的
    map.enableScrollWheelZoom(true) // 开启鼠标滚轮缩放
  }
})
