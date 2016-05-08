<template>
	<div v-if="canShow">
		<div id="headerContainer"> 
		<header data-am-widget="header" id="coupon_header"
		class="am-header am-header-default">
		<div class="am-header-left am-header-nav">
		  <a href="#left-link" class="">
		    <img class="am-header-icon-custom" src="data:image/svg+xml;charset&#x3D;utf-8,&lt;svg xmlns&#x3D;&quot;http://www.w3.org/2000/svg&quot; viewBox&#x3D;&quot;0 0 12 20&quot;&gt;&lt;path d&#x3D;&quot;M10,0l2,2l-8,8l8,8l-2,2L0,10L10,0z&quot; fill&#x3D;&quot;%23fff&quot;/&gt;&lt;/svg&gt;" alt=""/>
		  </a>
		</div>

		<div class="am-header-right am-header-nav">
		  <a href="#left-link" class="">
		    <img style="height:40px" src="../assets/share.jpg" alt=""/>
		  </a>
		</div>

		<h1 class="am-header-title">
		  {{header_title}}
		</h1>
		 <p class="am-header-p">
		  {{header_second_title}}
		</p>
		</header>
		</div>

		<div class="container" id="container" v-show="canShowCoupon">
          <div class="RedBox" >
              <div class="topcontent">
                  <div class="avatar" >
                   <img src="../assets/user8.jpg" alt="" width="40" height="40" class="zoomIn">
                          <!-- <span class="bounceInDown" style="margin-bottom: 100px"><b>大鸭梨</b></span> -->
                          <div class="h1">{{position_name}}</div>
                          <div class="p0">({{position_last_name}})</div>
                          <div class="p1">距离{{distance}}米</div>
                          <span class="s1">￥{{money}}</span>
                          <span class="s2">{{di_yong}}</span>             
                  </div>
                  <a href="../couponList/couponList.html" style='text-decoration:none;'><div class="description1 flipInX">使用红包</div></a>
              </div>
          </div>
      </div>


		<footer data-am-widget="footer" class="am-footer am-footer-default">
		    
		<div class="am-g am-g-fixed">
		  <div class="am-u-sm-6" style="border: #C7C1C1 solid thin;height:100%">报错</div>
		  <div class="am-u-sm-6" style="border: #C7C1C1 solid thin;height:100%">历史足迹</div>
		</div>
		    
		</footer>
		 <!-- 音频播放：格式MP3 导航结束页面一加载就自动播放 -->
		<embed autoplay="true" src="./static/song.mp3"   style="visibility:hidden" width="200" height="45" />
	</div>
</template>

<style scoped>
#headerContainer {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
}

.RedBox{
	height: 385px;
	background-image: url(../assets/coupon-res.png);
	width: 375px;
	left: 0;
	top: 0;
	border-radius: 10px;
	margin: 0 auto;
	margin-top: 140px;
}
</style>

<script>
export default {
	data() {
		return {
			header_title: '驾御者',
			header_second_title: '交通通畅，多了些时间，多了些生活',
			position_name: '大鸭梨',
	        position_last_name:'西三旗店',
	        distance: '215',
	        money:'75',
	        di_yong:'抵100',
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
		noop() {

		}
	},
	ready() {
		setTimeout(() => {
			this.header_title = 'lalala'
		}, 2000)
	},
	watch: {
		'store.terminal'(val) {
			if(!val) {

			}
		},
		'store.isCouponClicked'(val) {
			if(val) {

			}
		}
	}
}
</script>