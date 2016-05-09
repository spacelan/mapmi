<style>
#search-box {
  width: 90%;
  height: 46px;
  border-radius: 2px;
  background: #fff;
  box-shadow: 0px 2px 4px #aaa;
}
#search-input {
  box-sizing: border-box;
  border: 0;
  padding: 10px 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  font-size: 0.9em;
  width: 90%;
  height: 46px;
  color: #333;
  border-radius: 2px;
  outline:none;
}
#search-clear {
  cursor: pointer;
  position: absolute;
  right: 10px;
  width: 27px;
  height: 46px;
  top: 0;
  background: url("../assets/search_delete.png");
  background-size: 20px 20px;
  background-repeat: no-repeat;
  background-position: center center;
}
</style>

<template>
<div id="search-box" v-show="canShow">
  <input id="search-input" v-model="input" @click.prevent="show" v-on:keyup.enter="submit" type="text" placeholder="搜地点，找路线">
  <div id="search-clear" @click.prevent="clear" v-show="input.length > 0"></div>
</div>
</template>

<script>
import lstore from '../store.js'

class SearchControl extends BMap.Control {
  constructor() {
    super()
    this.defaultAnchor = BMAP_ANCHOR_TOP_LEFT
    this.defaultOffset = new BMap.Size(map.getSize().width / 20, map.getSize().width / 20);
  }

  initialize(map) {
    let search = document.getElementById('search-box')
    map.addEventListener('touchstart', () => {
      search.blur()
    })
      // 添加DOM元素到地图中
    map.getContainer().appendChild(search)
      // 将DOM元素返回
    return search
  }
}

export default {
  data() {
    return {
      input: '',
      store: lstore
    }
  },
  computed: {
    canShow() {
      return !(this.store.terminal || this.store.nuomiSrc)
    }
  },
  ready() {
    setTimeout(() => {
      this.ac = new BMap.Autocomplete({
        input: 'search-box',
        location: map
      });

      this.local = new BMap.LocalSearch(map, {
        onSearchComplete: (rst) => {
          let target = rst.getPoi(0)
          if (target) {
            lstore.target = target
            let point = target.point
            map.centerAndZoom(point, 18)
            this.addMarker(point)
          }
        }
      });

      this.ac.addEventListener('onconfirm', e => {
        let value = e.item.value
        let searchValue = value.province + value.city + value.district + value.street + value.streetNumber + value.business
        this.input = searchValue
        this.removeMarker()
        this.local.search(searchValue)
        // document.getElementById('search-input').blur()
      });

      map.addControl(new SearchControl())
    }, 0)
  },
  methods: {
    clear() {
      this.input = ''
      this.ac.hide()
      lstore.target = null
      this.removeMarker()
    },
    show() {
      if (this.input.length > 0) {
        this.ac.show()
      }
    },
    submit() {
      if (this.input.length > 0) {
        document.getElementById('search-input').blur()
        this.removeMarker()
        this.local.search(this.input)
      }
    },
    removeMarker() {
      let marker = this.marker
      this.marker = null
      setTimeout(() => {
        map.removeOverlay(marker)
      }, 0)
    },
    addMarker(point) {
      this.removeMarker()
      let icon = new BMap.Icon('./static/found_marker.png', new BMap.Size(28, 40), {
        anchor: new BMap.Size(14, 40)
      })
      this.marker = new BMap.Marker(point, {
        icon: icon
      })
      map.addOverlay(this.marker)
    }
  },
  watch: {
    input(val) {
      if (val.length > 0) {
        this.ac.search(val)
      } else {
        this.clear()
      }
    },
    'store.arrPois' (val) {
      if (val) {
        this.removeMarker()
      } else if (this.store.target) {
        this.addMarker(this.store.target.point)
      }
    },
    'store.target' (val) {
      if (!val) {
        this.input = ''
      }
    },
    canShow(val) {
      console.log('canShow', val)
    }
  }
}
</script>
