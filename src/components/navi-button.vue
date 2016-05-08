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
  background-image: url("../assets/icon_route_car_white.png");
  background-color: #3385ff;
  background-size: 35px 35px;
  background-repeat: no-repeat;
  background-position: center center;
}

#navi {
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 40px;
  background: #fff;
}

#navi-button1 {
  width: 50%;
  height: 50%;
  position: absolute;
  left: 0px;
  top: 25%;
  cursor: pointer;
  text-align: center;
  color: #3385ff;
  border-right: 1px solid #aaa;
}

#navi-button2 {
  width: 50%;
  height: 50%;
  position: absolute;
  right: 0px;
  top: 25%;
  cursor: pointer;
  text-align: center;
  color: #333;
}

#navi-icon {
  height: 90%;
  vertical-align: middle;
}
</style>

<template>
  <div id="navi-box" v-show="canShow">
	  <div id="route-button" @click.prevent="route" v-show="canRoute"></div>
    <div id="navi" v-show="canNavi">
      <div id="navi-button1" @click.prevent="toggle">
        <img id="navi-icon" src="../assets/route_nav_icon.png">
        <span>{{!isNavi ? '开始导航' : '暂停导航'}}</span>
      </div>
      <div id="navi-button2" @click.prevent="clear">
        <span>结束导航</span>
      </div>
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
            speed: 4500,
            enableRotation: true,
            end: () => {
              map.setViewport({
                center: this.store.target.point,
                zoom: map.getZoom()
              })
              this.isNavi = false
              this.store.terminal = this.store.target
              setTimeout(() => {
                this.toRedBag()
              }, 500)
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

      let icon
      icon = new BMap.Icon('./static/markers.png', new BMap.Size(25, 40), {
        anchor: new BMap.Size(12, 40),
        imageOffset: new BMap.Size(-200 - 25 * 0, -139),
        imageSize: new BMap.Size(300, 300)
      })
      this.begin = new BMap.Marker(this.store.location, {
        icon: icon
      })
      map.addOverlay(this.begin)

      icon = new BMap.Icon('./static/markers.png', new BMap.Size(25, 40), {
        anchor: new BMap.Size(12, 40),
        imageOffset: new BMap.Size(-200 - 25 * 1, -139),
        imageSize: new BMap.Size(300, 300)
      })
      this.end = new BMap.Marker(this.store.target.point, {
        icon: icon
      })
      map.addOverlay(this.end)
      map.setViewport(val)
    },
    removeOverlay() {
      map.removeOverlay(this.polyline)
      map.removeOverlay(this.begin)
      map.removeOverlay(this.end)
    },
    toRedBag() {
      if (this.end) {
        let icon = new BMap.Icon('./static/red_bag.gif', new BMap.Size(100, 100), {
          size: new BMap.Size(100, 100)
        })
        this.end.setIcon(icon)
        this.end.setTop(true)
        this.end.addEventListener('click', e => {
          this.store.isCouponClicked = true
        })
      }
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
