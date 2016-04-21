<template>
  <div id="geolocation" @click.prevent="click">
    <img id="geo-default" class="geo-icon" v-show="state=='default'" src="../assets/loc-default.png">
    <img id="geo-loading" class="geo-icon" v-show="state=='loading'" src="../assets/loc-loading.gif">
    <img id="geo-success" class="geo-icon" v-show="state=='success'" src="../assets/loc-success.png">
  </div>
</template>

<style>
#geolocation {
  width: 32px;
  height: 32px;
  cursor: pointer;
  background: #fff;
  opacity: 0.8;
  box-shadow: 0px 2px 4px #aaaaaa;
  border-radius: 2px;
}
.geo-icon {
  width: 26px;
  height: 26px;
  position: absolute;
  top: 3px;
  left: 3px;
}
</style>

<script>
import lstore from '../store.js'

class GeoControl extends BMap.Control {
  constructor() {
    super()
    this.defaultAnchor = BMAP_ANCHOR_BOTTOM_LEFT;
    this.defaultOffset = new BMap.Size(30, 80);
  }

  initialize(map) {
    let geo = document.getElementById('geolocation')
      // 添加DOM元素到地图中
    map.getContainer().appendChild(geo)
      // 将DOM元素返回
    return geo
  }
}

export default {
  data() {
    return {
      state: 'default',
      store: lstore
    }
  },
  ready() {
    setTimeout(() => {
      this.wpid = navigator.geolocation.watchPosition(position => {
        this.state = 'default'
        let point = new BMap.Point(position.coords.longitude, position.coords.latitude)
        this.convertCoords(point).then(point => {
          this.success(point)
        }).catch(err => {
          console.log(err)
          this.fail()
          this.state = 'default'
        })
      }, () => {
        console.log('Geolocation Timeout')
        this.fail()
        this.state = 'default'
      }, {
        enableHighAccuracy: true,
        maximumAge: 30000,
        timeout: 27000
      })
      this.click()
      map.addControl(new GeoControl())
    }, 0)
  },
  methods: {
    click() {
      this.state = 'loading'
      navigator.geolocation.getCurrentPosition(position => {
        this.state = 'success'
        let point = new BMap.Point(position.coords.longitude, position.coords.latitude)
        this.convertCoords(point).then(point => {
          this.success(point)
          map.centerAndZoom(point, 16);
        }).catch(err => {
          console.log(err)
          this.fail()
          this.state = 'default'
        })
      }, () => {
        console.log('Geolocation Timeout')
        this.fail()
        this.state = 'default'
      }, {
        enableHighAccuracy: true,
        maximumAge: 30000,
        timeout: 27000
      });
    },
    removeMarker() {
      let marker = this.marker
      setTimeout(() => {
        map.removeOverlay(marker)
      }, 0)
    },
    addMarker(point) {
      this.removeMarker()
      this.marker = new BMap.Marker(point, {
        icon: new BMap.Icon('/static/loc.png', new BMap.Size(26, 26))
      })
      map.addOverlay(this.marker)
    },
    success(point) {
      lstore.location = point
      this.removeMarker()
      this.addMarker(point)
    },
    fail() {
      lstore.location = null
      this.removeMarker()
    },
    convertCoords(point) {
      return new Promise((resolve, reject) => {
        let ok = false
        new BMap.Convertor().translate([point], 1, 5, data => {
          if (!ok) {
            ok = true
            if (data.status === 0) {
              resolve(data.points[0])
            } else {
              reject('Convert Timeout')
            }
          }
        })
        setTimeout(() => {
          if (!ok) {
            ok = true
            reject('Convert Timeout')
          }
        }, 5000)
      })
    }
  }
}
</script>
