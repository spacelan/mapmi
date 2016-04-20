<style>
#navi-button {
	background-image: ;
  background-color: #2e77e5;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  overflow: hidden;
  cursor: pointer;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
</style>

<template>
	<div id="navi-button" @click.prevent="click">导航</div>
</template>

<script>
class NaviControl extends BMap.Control {
  constructor() {
    super()
      // 默认停靠位置和偏移量
    this.defaultAnchor = BMAP_ANCHOR_BOTTOM_RIGHT;
    this.defaultOffset = new BMap.Size(30, 80);
  }

  initialize(map) {
    let navi = document.getElementById('navi-button')
      // 添加DOM元素到地图中
    map.getContainer().appendChild(navi)
      // 将DOM元素返回
    return navi
  }
}

export default {
  ready() {
    setTimeout(() => {
      map.addControl(new NaviControl())
      this.driving = new BMap.DrivingRoute(map, {
        renderOptions: {
          map: map,
          autoViewport: true
        }
      })
    }, 0)
  },
  methods: {
    click() {
      this.driving.clearResults()
      this.driving.search(lstore.location.point, lstore.target.point)
    }
  }
}
</script>
