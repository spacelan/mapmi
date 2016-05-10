<template>
  <div v-if="canShow">
    <div id="terminalHeader">
      <div id="headerReturn" @click.prevent="exit"></div>
      <div id="headerTitle">{{header_title}}</div>
      <div id="headerSecondTitle">{{header_second_title}}</div>
      <div id="headerRight"></div>
    </div>
    <div id="terminalCoupon" v-if="canShowCoupon">
      <div class="RedBox">
        <div class="topcontent">
          <div class="avatar">
            <img src="../assets/dayali.jpg" alt="" width="40" height="40" class="zoomIn">
            <!-- <span class="bounceInDown" style="margin-bottom: 100px"><b>大鸭梨</b></span> -->
            <div class="h1">{{position_name}}</div>
            <div class="p0">({{position_last_name}})</div>
            <div class="p1">距离{{distance}}米</div>
            <span class="s1">￥{{money}}</span>
            <span class="s2">{{di_yong}}</span>
          </div>
          <div class="description1 flipInX" @click.prevent="useRedBag">使用红包</div>
        </div>
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
    <embed id="terminalAudio" autoplay src="./static/song.mp3" style="visibility:hidden"></embed>
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
  margin: 20px;
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
  text-align: center;
  position: absolute;
  top: 140px;
  left: 0;
  bottom: 140px;
  right: 0;
  -webkit-transform: scale(1);
  transform: scale(1);
  opacity: 0;
  -webkit-animation: fromBack 1.5s linear forwards;
  animation: fromBack 1.5s linear forwards;
}

@-webkit-keyframes fromBack {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes fromBack {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.RedBox {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-image: url(../assets/coupon-res.png);
}

.topcontent {
  -webkit-background-size: contain;
  background-size: contain;
  background-repeat: no-repeat;
}

.avatar {
  position: relative;
  padding-top: 90px;
  left: 85px;
  height: 180px;
  width: 220px;
}

.topcontent img {
  border: 1px solid #BD503A;
  border-radius: 50%;
  overflow: hidden;
  margin-top: 17%;
  margin-left: 18px;
  float: left;
  -webkit-animation-duration: 10s;
  animation-duration: 6s;
}

.h1 {
  float: left;
  margin-top: 28px;
  margin-left: 5px;
  font-size: 1.2rem;
  color: #080808;
  -webkit-animation-duration: 3s;
  animation-duration: 5s;
}

.p0 {
  clear: both;
  position: absolute;
  top: 140px;
  margin-left: 52px;
  color: rgba(0, 0, 0, 0.67);
  font-size: 0.8rem;
  width: 80px;
  -webkit-animation-duration: 3s;
  animation-duration: 3s;
}

.p1 {
  clear: both;
  position: absolute;
  top: 158px;
  margin-left: 50px;
  color: #8E8A8A;
  font-size: xx-small;
  width: 80px;
  -webkit-animation-duration: 3s;
  animation-duration: 3s;
}

.s1 {
  float: right;
  position: absolute;
  top: 118px;
  right: 12px;
  color: #0C0C0C;
  font-size: 2rem;
  width: 80px;
  -webkit-animation-duration: 3s;
  animation-duration: 3s;
}

.s2 {
  clear: both;
  position: absolute;
  top: 155px;
  right: 10px;
  margin-left: 5px;
  color: #060606;
  font-size: 1rem;
  width: 80px;
  -webkit-animation-duration: 3s;
  animation-duration: 3s;
}

.text {
  color: #ff605e;
  ;
  font-weight: bold;
  font-size: 1.5rem;
  -webkit-animation-duration: 4s;
  animation-duration: 4s;
}

.text b {
  font-size: 2rem;
}

.description1 {
  margin: 95px 95px;
  font-size: 1rem;
  font-weight: 600;
  height: 34px;
  background: #ffae00;
  color: #D03634;
  box-shadow: 10px 10px 5px 1px #ccc；;
  box-shadow: 0px 1px 1px rgba(12, 12, 12, 0.64);
  line-height: 34px;
  border-radius: 5px;
  -webkit-animation-duration: 4s;
  animation-duration: 5s;
}

.rotate {
  -webkit-animation: anim .6s infinite alternate;
  -ms-animation: anim .6s infinite alternate;
  animation: anim .6s infinite alternate;
}

@-webkit-keyframes anim {
  from {
    -webkit-transform: rotateY(180deg);
  }
  to {
    -webkit-transform: rotateY(360deg);
  }
}

@-ms-keyframes anim {
  from {
    -ms-transform: rotateY(180deg);
  }
  to {
    -ms-transform: rotateY(360deg);
  }
}

@keyframes anim {
  from {
    transform: rotateY(180deg);
  }
  to {
    transform: rotateY(360deg);
  }
}

@-webkit-keyframes bounceInDown {
  from,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -3000px, 0);
    transform: translate3d(0, -3000px, 0);
  }
  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, 25px, 0);
    transform: translate3d(0, 25px, 0);
  }
  75% {
    -webkit-transform: translate3d(0, -10px, 0);
    transform: translate3d(0, -10px, 0);
  }
  90% {
    -webkit-transform: translate3d(0, 5px, 0);
    transform: translate3d(0, 5px, 0);
  }
  to {
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes bounceInDown {
  from,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -3000px, 0);
    transform: translate3d(0, -3000px, 0);
  }
  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, 25px, 0);
    transform: translate3d(0, 25px, 0);
  }
  75% {
    -webkit-transform: translate3d(0, -10px, 0);
    transform: translate3d(0, -10px, 0);
  }
  90% {
    -webkit-transform: translate3d(0, 5px, 0);
    transform: translate3d(0, 5px, 0);
  }
  to {
    -webkit-transform: none;
    transform: none;
  }
}

.bounceInDown {
  -webkit-animation-name: bounceInDown;
  animation-name: bounceInDown;
}

@-webkit-keyframes flash {
  from,
  0%,
  to {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes flash {
  from,
  0%,
  to {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.flash {
  -webkit-animation-name: flash;
  animation-name: flash;
}

@-webkit-keyframes zoomIn {
  from {
    opacity: 0;
    -webkit-transform: scale3d(.2, .2, .2);
    transform: scale3d(.2, .2, .2);
  }
  50% {
    opacity: 1;
  }
}

@keyframes zoomIn {
  from {
    opacity: 0;
    -webkit-transform: scale3d(.2, .2, .2);
    transform: scale3d(.2, .2, .2);
  }
  50% {
    opacity: 1;
  }
}

.zoomIn {
  -webkit-animation-name: zoomIn;
  animation-name: zoomIn;
}

@-webkit-keyframes flipInX {
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
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  -webkit-animation-name: flipInX;
  animation-name: flipInX;
}
</style>
<script>
export default {
  data() {
      return {
        header_title: '驾御者',
        header_second_title: '交通通畅，多了些时间，多了些生活',
        position_name: '大鸭梨',
        position_last_name: '西三旗店',
        distance: '215',
        money: '75',
        di_yong: '抵100',
        store: lstore
      }
    },
    computed: {
      canShow() {
        return !!this.store.terminal
      },
      canShowCoupon() {
        return !!(this.store.terminal && this.store.isCouponClicked)
      }
    },
    methods: {
      useRedBag() {
        this.store.nuomiSrc = 'http://m.nuomi.com/bj/deal/12tzhuju'
      },
      exit() {
        this.store.terminal = null
        this.store.isCouponClicked = null
        this.store.target = null
      }
    },
    ready() {

    },
    watch: {
      'store.terminal' (val) {
        if (!val) {

        }
      },
      'store.isCouponClicked' (val) {
        if (val) {

        }
      }
    }
}
</script>
