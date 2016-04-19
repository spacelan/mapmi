<template>
  <div id="app">
    <navi v-el:navi></navi>
  </div>
</template>

<script>
import Navi from './components/navi-button.vue';
export default {
  components: {
    Navi
  },
  ready() {
    class NaviControl extends BMap.Control {
      constructor() {
        super()
          // 默认停靠位置和偏移量
        this.defaultAnchor = BMAP_ANCHOR_TOP_LEFT;
        this.defaultOffset = new BMap.Size(10, 10);
      }

      initialize(map) {
        let navi = document.getElementById('navi-button')
          // 添加DOM元素到地图中
        map.getContainer().appendChild(navi)
          // 将DOM元素返回
        return navi
      }
    }

    // 添加到地图当中
    map.addControl(new NaviControl())
  }
}
</script>
