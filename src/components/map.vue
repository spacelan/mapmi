<template>
  <div id="mapContainer">
    <div id="map"></div>
    <navi></navi>
    <search></search>
    <geo></geo>
  <div>
</template>

<style>
#map{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border: 0;
}
</style>

<script>
import Navi from './navi-button.vue'
import Search from './search-box.vue'
import Geo from './geolocation.vue'

export default {
  components: {
    Navi,
    Search,
    Geo
  },
  attached() {
    // 百度地图API功能
    window.map = new BMap.Map('map') // 创建Map实例
    map.centerAndZoom(new BMap.Point(116.404, 39.915), 11) // 初始化地图,设置中心点坐标和地图级别
    map.setCurrentCity('北京') // 设置地图显示的城市 此项是必须设置的

    setInterval(() => {
      let arr = document.getElementsByClassName('anchorBL')
      for (let item of arr) {
        item.style['z-index'] = 9
      }
    }, 2000)

    this.initControl()
  },
  methods: {
    initControl() {
      map.addControl(new BMap.NavigationControl({
        anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
        offset: new BMap.Size(20, 200),
        type: BMAP_NAVIGATION_CONTROL_ZOOM
      }))
    }
  }
}
</script>
