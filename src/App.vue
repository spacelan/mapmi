<template>
  <div id="app">
    <navi></navi>
    <search></search>
    <geo></geo>
    <Nuomi></Nuomi>
  </div>
</template>

<script>
import Navi from './components/navi-button.vue'
import Search from './components/search-box.vue'
import Geo from './components/geolocation.vue'
import Nuomi from './components/nuomi-frame.vue'

export default {
  components: {
    Navi,
    Search,
    Geo,
    Nuomi
  },
  ready() {
    setTimeout(() => {
      this.initControl()
    }, 0)
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
