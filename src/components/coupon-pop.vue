<template>
  <div id="couponPopView">
    <div id="terminalHeader">
      <div id="headerReturn" v-touch:tap="exit"></div>
      <div id="headerTitle">驾御者</div>
      <div id="headerSecondTitle">交通通畅，多了些时间，多了些生活</div>
      <div id="headerRight"></div>
    </div>
    <div id="terminalCoupon" v-if="canShowCoupon">
      <div class="RedBox">
        <div class="avatar" v-if="isRestaurant">
          <img :src="deals[0].tiny_image" class="headerImg zoomIn">
          <div class="h1">{{deals[0].title}}</div>
          <div class="p0">{{deals[0].min_title}}</div>
          <div class="p1">距离{{deals[0].distance}}米</div>
          <span class="s1">￥{{(deals[0].current_price / 100 - 5) | toFixed2}}</span>
          <span class="s2">抵{{(deals[0].market_price / 100) | toFixed2}}</span>
        </div>
        <div class="avatar" v-else>
          <img :src="deals[0].tiny_image" class="headerImg zoomIn">
          <div class="h1">{{store.terminal.title}}</div>
          <div class="p0">商圈红包</div>
          <div class="p1">距离{{deals[0].distance}}米</div>
          <span class="s1">￥ 5 </span>
          <span class="s2">立 减</span>
        </div>
        <div class="useButton flipInX" v-touch:tap="useRedBag">使用红包</div>
        <div class="cancelButton" v-touch:tap="cancelRedBag"></div>
      </div>
    </div>
    <div id="terminalFooter">
      <div id="terminalFooterButton1">
        <span>报错</span>
      </div>
      <div id="terminalFooterButton2">
        <span>历史足迹</span>
      </div>
    </div>
    <!-- 音频播放：格式MP3 导航结束页面一加载就自动播放 -->
    <audio id="terminalAudio" src="./static/song.mp3" style="visibility:hidden"></audio>
  </div>
</template>
<style scoped>
#terminalHeader {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background-color: #3385ff
}

#headerReturn {
  position: absolute;
  top: 20px;
  left: 10px;
  width: 32px;
  height: 32px;
  background-image: url(../assets/back_icon.png);
  background-size: 9px 16px;
  background-repeat: no-repeat;
  background-position: center center;
}

#headerTitle,
#headerSecondTitle {
  text-align: center;
  color: #fff;
  margin: 3%;
}

#headerTitle {
  font-size: 2em;
}

#headerSecondTitle {
  font-size: 1.2em;
}

#headerRight {
  position: absolute;
  float: right;
  top: 25px;
  right: 15px;
  width: 25px;
  height: 25px;
  background-image: url(../assets/share.png);
  background-size: 25px 25px;
  background-repeat: no-repeat;
  background-position: center center;
}

#terminalFooter {
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 40px;
  background: #fff;
}

#terminalFooterButton1 {
  position: absolute;
  width: 50%;
  height: 50%;
  left: 0px;
  top: 25%;
  cursor: pointer;
  text-align: center;
  color: #3385ff;
  border-right: 1px solid #aaa;
}

#terminalFooterButton2 {
  position: absolute;
  width: 50%;
  height: 50%;
  right: 0px;
  top: 25%;
  cursor: pointer;
  text-align: center;
  color: #3385ff;
}

#terminalCoupon {
  position: absolute;
  top: 16%;
  bottom: 12%;
  left: 0;
  right: 0;
  overflow: hidden;
}

.RedBox {
  position: absolute;
  top: -100%;
  bottom: -100%;
  left: -100%;
  right: -100%;
  width: 375px;
  height: 400px;
  margin: auto auto;
  background: url(../assets/coupon-res.png) top center;
  animation: fromBack .5s;
}

@keyframes fromBack {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

.cancelButton {
  position: absolute;
  left: -100%;
  right: -100%;
  bottom: 0;
  margin: 0 auto;
  width: 28px;
  height: 28px;
  background: url(../assets/search_delete.png) center center;
  background-color: rgba(115, 102, 102, 0.64);
  ;
  border-radius: 50%;
}

.avatar {
  position: absolute;
  top: 110px;
  left: 90px;
  height: 80px;
  width: 200px;
}

.headerImg {
  position: absolute;
  top: 15px;
  left: 12px;
  width: 40px;
  height: 40px;
  border: 1px solid #BD503A;
  border-radius: 50%;
  animation-duration: 5s;
}

.h1 {
  position: absolute;
  top: 12px;
  left: 56px;
  width: 75px;
  font-size: 1.1rem;
  color: #080808;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.p0 {
  position: absolute;
  top: 34px;
  left: 56px;
  width: 75px;
  color: rgba(0, 0, 0, 0.67);
  font-size: 0.8rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.p1 {
  position: absolute;
  top: 52px;
  left: 56px;
  width: 75px;
  color: #8E8A8A;
  font-size: xx-small;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.s1 {
  position: absolute;
  top: 15px;
  left: 130px;
  width: 62px;
  color: #0C0C0C;
  font-size: 1.4rem;
  text-align: center;
}

.s2 {
  position: absolute;
  top: 45px;
  left: 130px;
  width: 60px;
  color: #060606;
  font-size: 1.0rem;
  text-align: center;
}

.useButton {
  position: absolute;
  top: 270px;
  left: 110px;
  right: 110px;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  background: #ffae00;
  color: #D03634;
  line-height: 34px;
  border-radius: 5px;
}

@keyframes zoomIn {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.zoomIn {
  animation-name: zoomIn;
  animation-duration: 1s;
}

@keyframes flipInX {
  from {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }
  40% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  60% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }
  80% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }
  to {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }
}

.flipInX {
  animation-name: flipInX;
  animation-duration: 4s;
}
</style>
<script>
import assert from 'assert'

export default {
  data() {
    return {
      deals: [{
        tiny_image: './static/dayali.jpg',
        title: '大鸭梨lalalalala',
        min_title: '西三旗店',
        distance: '215',
        promotion_price: '75',
        market_price: '100',
        deal_murl: 'http://m.nuomi.com/bj/deal/12tzhuju'
      }],
      store: lstore
    }
  },
  computed: {
    canShow() {
      return !!this.store.terminal
    },
    canShowCoupon() {
      return !!(this.store.terminal && this.store.redBagState === 'clicked')
    },
    isRestaurant() {
      for (let tag of (this.store.terminal.tags || [])) {
        if (tag === '餐饮') {
          return true
        }
      }
      return false
    }
  },
  methods: {
    useRedBag() {
      if (this.isRestaurant) {
        this.store.nuomiSrc = this.deals[0].deal_murl
      } else {
        this.store.couponList = this.deals
      }
    },
    fetchDealList(terminal) {
      console.log(JSON.parse(JSON.stringify(terminal)))
      let headers = {
        apikey: '5150d387b5b5ed6abda274d297496508'
      }
      let params = {
        'city_id': 100010000,
        'cat_ids': 326,
        'keyword': this.isRestaurant ? terminal.title : null,
        'location': `${terminal.point.lng},${terminal.point.lat}`,
        'radius': 3000,
        'sort': 5,
        'page_size': 20
      }
      this.$http.get({
        url: 'http://apis.baidu.com/baidunuomi/openapi/searchdeals',
        headers: headers,
        params: params
      }).then(res => {
        let data = res.data
        console.log(data)
        assert.equal(data.errno, 0)
          // 去重
        let arr = [data.data.deals[0]]
        data.data.deals.forEach(deal => {
          if (deal.title !== arr[arr.length - 1].title) {
            arr.push(deal)
          }
        })
        this.deals = arr
        this.store.redBagState = 'show'
      }).catch(err => {
        console.log(err)
      })
    },
    playAudio() {
      setTimeout(() => {
        let audio = document.getElementById('terminalAudio')
        audio.play()
      }, 200)
    },
    exit() {
      this.store.terminal = null
      this.store.redBagState = null
      this.store.target = null
    },
    cancelRedBag() {
      this.store.redBagState = null;
    }
  },
  attached() {
    this.fetchDealList(this.store.terminal)
  },
  watch: {
    'store.redBagState' (val) {
      if (val === 'show') {
        this.playAudio()
      }
    }
  },
  filters: {
    toFixed2(val) {
      let rst = val.toString().match(/\d+(.\d\d?)?/)
      return rst ? rst[0] : val
    }
  }
}
</script>
