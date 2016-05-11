<template>
  <div v-if="canShow">
    <div id="terminalHeader">
      <div id="headerReturn" @click.prevent="exit"></div>
      <div id="headerTitle">驾御者</div>
      <div id="headerSecondTitle">交通通畅，多了些时间，多了些生活</div>
      <div id="headerRight"></div>
    </div>
    <div id="terminalCoupon" v-if="canShowCoupon">
      <div class="RedBox">
        <div class="avatar">
          <img :src="deals[0].tiny_image" class="headerImg zoomIn">
          <div class="h1">{{deals[0].title}}</div>
          <div class="p0">{{deals[0].min_title}}</div>
          <div class="p1">距离{{deals[0].distance}}米</div>
          <span class="s1">￥{{deals[0].promotion_price / 100}}</span>
          <span class="s2">抵{{deals[0].market_price / 100}}</span>
        </div>
        <div class="useButton flipInX" @click.prevent="useRedBag">使用红包</div>
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
  height: 16%;
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
  bottom: 16%;
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
  height: 385px;
  margin: auto auto;
  background: url(../assets/coupon-res.png) center center;
  animation: fromBack 0.5s linear forwards;
}

@keyframes fromBack {
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
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
  animation-duration: 6s;
}

.h1 {
  position: absolute;
  top: 5px;
  left: 55px;
  width: 75px;
  font-size: 1.2rem;
  color: #080808;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: clip;
}

.p0 {
  position: absolute;
  top: 31px;
  left: 55px;
  width: 75px;
  color: rgba(0, 0, 0, 0.67);
  font-size: 0.8rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: clip;
}

.p1 {
  position: absolute;
  top: 50px;
  left: 55px;
  width: 75px;
  color: #8E8A8A;
  font-size: xx-small;
}

.s1 {
  position: absolute;
  top: 5px;
  left: 130px;
  width: 65px;
  color: #0C0C0C;
  font-size: 1.6rem;
  text-align: center;
}

.s2 {
  position: absolute;
  top: 40px;
  left: 130px;
  width: 65px;
  color: #060606;
  font-size: 1rem;
  text-align: center;
}

.useButton {
  position: absolute;
  top: 270px;
  left: 110px;
  right: 110px;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;;
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
        return !!(this.store.terminal && this.store.redBagState == 'clicked')
      }
    },
    methods: {
      useRedBag() {
        for(let tag of this.store.terminal.tags) {
          if(tag == '餐饮') {
            this.store.nuomiSrc = this.deals[0].deal_murl
            return
          }
        }
        this.store.couponList = this.deals
      },
      fetchDealList(terminal) {
        console.log(JSON.parse(JSON.stringify(terminal)))
        let headers = {
          apikey: '5150d387b5b5ed6abda274d297496508'
        }
        let keyword = null
        terminal.tags.forEach(tag => {
          if (tag == '餐饮') {
            keyword = terminal.title
          }
        })
        let params = {
          'city_id': 100010000,
          'cat_ids': 326,
          'keyword': keyword,
          'location': `${terminal.point.lng},${terminal.point.lat}`,
          'radius': 3000
        }
        this.$http.get({
          url: 'http://apis.baidu.com/baidunuomi/openapi/searchdeals',
          headers: headers,
          params: params
        }).then(res => {
          let data = res.data
          console.log(data)
          assert.equal(data.errno, 0)
          this.deals = data.data.deals
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
      }
    },
    ready() {

    },
    watch: {
      'store.terminal' (val) {
        if (val) {
          this.fetchDealList(val)
        }
      },
      'store.redBagState' (val) {
        if (val == 'show') {
          this.playAudio()
        }
      }
    }
}
</script>
