<template>
  <div id="app">
    <navi></navi>
    <search></search>
    <geo></geo>
  </div>
</template>

<script>
import Navi from './components/navi-button.vue'
import Search from './components/search-box.vue'
import Geo from './components/geolocation.vue'

export default {
  components: {
    Navi,
    Search,
    Geo
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
      /*
      let loc = new BMap.GeolocationControl({
        anchor: BMAP_ANCHOR_BOTTOM_LEFT,
        offset: new BMap.Size(30, 80),
        showAddressBar: false,
        enableAutoLocation: true,
        locationIcon: new BMap.Icon('/static/loc.png', new BMap.Size(26, 26))
      })
      loc.addEventListener('locationSuccess', e => {
        window.lstore.location = e
      });
      loc.addEventListener('locationError', e => {
        map.clearOverlays()
      });
      map.addControl(loc)
      */
    }
  }
}
</script>
