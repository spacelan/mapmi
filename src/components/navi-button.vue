<style>
#navi-box {
  width: 100%;
  z-index: 100;
}

#route-button {
  border-radius: 50%;
  width: 60px;
  height: 60px;
  cursor: pointer;
  position: absolute;
  right: 30px;
  bottom: 80px;
  background-image: ;
  background-color: #2e77e5;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

#navi {
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 50px;
  background: #fff;
}

.navi-button {
  width: 50%;
  height: 100%;
  border: 0;
  float: left;
  cursor: pointer;
}
</style>

<template>
  <div id="navi-box" v-show="canShow">
	  <div id="route-button" @click.prevent="route" v-show="canRoute">到这里去</div>
    <div id="navi" v-show="canNavi">
      <div class="navi-button" @click.prevent="toggle">{{!isNavi ? '开始导航' : '暂停导航'}}</div>
      <div class="navi-button" @click.prevent="clear">结束导航</div>
    </div>
  </div>
</template>

<script>
import lstore from '../store.js'

class NaviControl extends BMap.Control {
  constructor() {
    super()
      // 默认停靠位置和偏移量
    this.defaultAnchor = BMAP_ANCHOR_BOTTOM_RIGHT;
    this.defaultOffset = new BMap.Size(0, 0);
  }

  initialize(map) {
    let navi = document.getElementById('navi-box')
      // 添加DOM元素到地图中
    map.getContainer().appendChild(navi)
      // 将DOM元素返回
    return navi
  }
}

export default {
  data() {
    return {
      store: lstore,
      isNavi: false
    }
  },
  computed: {
    canShow() {
      return this.store.location !== null && this.store.target !== null
    },
    canRoute() {
      return this.store.arrPois == null
    },
    canNavi() {
      return this.store.arrPois !== null
    }
  },
  ready() {
    setTimeout(() => {
      this.driving = new BMap.DrivingRoute(map, {
        onSearchComplete: res => {
          if (this.driving.getStatus() === BMAP_STATUS_SUCCESS) {
            this.store.arrPois = res.getPlan(0).getRoute(0).getPath()
          } else {
            alert('搜索路径失败')
          }
        }
      })
      map.addControl(new NaviControl())
    }, 0)
  },
  methods: {
    route() {
      this.driving.search(this.store.location, this.store.target.point)
    },
    toggle() {
      if (this.isNavi) {
        this.lushu && this.lushu.pause()
        this.isNavi = false
      } else {
        if (!this.lushu) {
          this.lushu = new BMapLib.LuShu(map, this.store.arrPois, {
            autoView: true,
            icon: new BMap.Icon('./static/loc.png', new BMap.Size(26, 26)),
            speed: 4500,
            enableRotation: true,
            end: () => {
              this.isNavi = false
            }
          });
        }
        this.lushu.start()
        this.isNavi = true
      }
    },
    stop() {
      this.lushu && this.lushu.stop() && this.lushu.clear()
      this.lushu = null
      this.isNavi = false
    },
    addOverlay(val) {
      this.polyline = new BMap.Polyline(val, {
        strokeColor: '#111'
      })
      map.addOverlay(this.polyline)
      this.begin = new BMap.Marker(this.store.location)
      map.addOverlay(this.begin)
      this.end = new BMap.Marker(this.store.target.point)
      map.addOverlay(this.end)
      map.setViewport(val)
    },
    removeOverlay() {
      map.removeOverlay(this.polyline)
      map.removeOverlay(this.begin)
      map.removeOverlay(this.end)
    },
    clear() {
      this.store.arrPois = null
    }
  },
  watch: {
    canShow(val) {
      if (!val) {
        this.store.arrPois = null
      }
    },
    'store.arrPois'(val) {
      this.removeOverlay()
      if (val) {
        this.addOverlay(val)
      } else {
        this.stop()
      }
    },
    'store.target'(val) {
      this.clear()
    }
  }
}
</script>
