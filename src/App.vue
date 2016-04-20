<template>
  <div id="app">
    <navi></navi>
    <search></search>
  </div>
</template>

<script>
import Navi from './components/navi-button.vue'
import Search from './components/search-box.vue'

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
  components: {
    Navi,
    Search
  },
  ready() {
    setTimeout(() => {
      this.initControl()
    }, 500)
  },
  methods: {
    initControl() {
      map.addControl(new BMap.NavigationControl({
        anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
        offset: new BMap.Size(20, 200),
        type: BMAP_NAVIGATION_CONTROL_SMALL
      }))
      map.addControl(new BMap.GeolocationControl({
        anchor: BMAP_ANCHOR_BOTTOM_LEFT,
        offset: new BMap.Size(30, 80),
        showAddressBar: false,
        enableAutoLocation: true,
        locationIcon: new BMap.Icon('/static/loc.png', new BMap.Size(26, 26))
      }))
      map.addControl(new NaviControl())
      // map.addControl(new SearchControl())
    }
  }
}
</script>
