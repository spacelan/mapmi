<template>
  <header data-am-widget="header" id="couponList_header"
  class="am-header am-header-default">
  <div class="am-header-left am-header-nav">
    <a href="../couponPop/couponPop.html" class="">
      <img class="am-header-icon-custom" src="data:image/svg+xml;charset&#x3D;utf-8,&lt;svg xmlns&#x3D;&quot;http://www.w3.org/2000/svg&quot; viewBox&#x3D;&quot;0 0 12 20&quot;&gt;&lt;path d&#x3D;&quot;M10,0l2,2l-8,8l8,8l-2,2L0,10L10,0z&quot; fill&#x3D;&quot;%23fff&quot;/&gt;&lt;/svg&gt;" alt=""/>
    </a>
  </div>

  <h1 class="am-header-title">
    {{header_title}}
  </h1>
  </header>


      <!-- ————————————————————————————面板选项卡 start—————————————————————————————————— -->
      <div data-am-widget="tabs"
      class="am-tabs am-tabs-d2" id="couponList_header" 
      >
      <ul class="am-tabs-nav am-cf">
        <li class="am-active"><a href="[data-tab-panel-1]">美食</a></li>
        <li class=""><a href="[data-tab-panel-2]">电影</a></li>
      </ul>
      <div class="am-tabs-bd">



      <!-- ———————————————————————————————美食选项———————————————————————————————————————— -->
      <div data-tab-panel-1 class="am-tab-panel am-active " id="couponList_content">
      <!-- 检索导航start -->
      <ul class="am-nav am-nav-pills">
          <li class="am-dropdown" data-am-dropdown>
              <a class="am-dropdown-toggle" data-am-dropdown-toggle href="javascript:;">
                  综合排序 <span class="am-icon-caret-down"></span>
              </a>
             
  
              <ul class="am-dropdown-content" id="CommonIndexList">
              <template v-for="item in items">
                  <li ><a href="#">{{item.message}}</a></li>   
                  <li class="am-divider"></li>  
              </template>         
              </ul>
              
          </li>
          
          <li class="am-dropdown" data-am-dropdown>
              <a class="am-dropdown-toggle" data-am-dropdown-toggle href="javascript:;">
                  筛选菜系 <span class="am-icon-caret-down"></span>
              </a>
              <ul class="am-dropdown-content" id="MenuIndexList">
                  <template v-for="item in items">
                      <li ><a href="#">{{item.message}}</a></li>   
                      <li class="am-divider"></li>  
                  </template>                         
                </ul>
          </li>
      </ul>
      <!-- 检索导航end -->
       <!-- 红包列表 start-->
       <div data-am-widget="list_news" class="am-list-news am-list-news-default">
         <div class="am-list-news-bd">
           <ul class="am-list" id="couponList_food">
           <!--优惠卷渲染模板-->   
            <template  v-for="value in values">
            <li class="am-g am-list-item-desced am-list-item-thumbed am-list-item-thumb-left">
             <a href="" class="">
               <div class="am-u-sm-4 am-list-thumb">

                 <p style="text-align:center;color:#000000;font-size:25px;margin-top:5px">￥{{value.money}}</p>
                 <div class="am-list-item-text" style="text-align: center;">相距<span  id="" class="">{{value.distance}}</span>米</div>

               </div>

               <div class=" am-u-sm-8 am-list-main">
                 <h3 class="am-list-item-hd"><a href="http://www.douban.com/online/11624755/" class="">{{value.restaurant}}</a></h3>

                 <div class="am-list-item-text"><span  id="" class="">{{value.tag}}|</span><span id="" class="">{{value.comment_score}}分|</span><span id="" class="">人均{{value.money}}元</span></div>

               </div>
             </a>
           </li>
         </template>
         </ul>
                  <!--更多在底部-->
         <!--          <div class="am-list-news-ft">
                   <a class="am-list-news-more am-btn am-btn-default " href="###">查看更多 &raquo;</a>
                 </div> -->
       </div>
     </div>    <!-- 红包列表 end-->
   </div>



   <!-- ——————————————————————————————————————电影选项———————————————————————————————————————————— -->
   <div data-tab-panel-2 class="am-tab-panel ">

   <!-- 检索导航start -->
   <ul class="am-nav am-nav-pills">
       <li class="am-dropdown" data-am-dropdown>
           <a class="am-dropdown-toggle" data-am-dropdown-toggle href="javascript:;">
               综合排序 <span class="am-icon-caret-down"></span>
           </a>
            <ul class="am-dropdown-content" id="CommonIndexList2">
                  <template v-for="item in items">
                      <li ><a href="#">{{item.message}}</a></li>   
                      <li class="am-divider"></li>  
                  </template>                    
              </ul>
       </li>
       
       <li class="am-dropdown" data-am-dropdown>
           <a class="am-dropdown-toggle" data-am-dropdown-toggle href="javascript:;">
               筛选电影 <span class="am-icon-caret-down"></span>
           </a>
           <ul class="am-dropdown-content" id="MovieIndexList">
               <template v-for="item in items">
                   <li ><a href="#">{{item.message}}</a></li>   
                   <li class="am-divider"></li>  
               </template>       
             </ul>
       </li>
   </ul>
   <!-- 检索导航end -->

    <!-- 红包列表 start-->
    <div data-am-widget="list_news" class="am-list-news am-list-news-default" id="foods">



      <div class="am-list-news-bd">
        <ul class="am-list" id="couponList_movie">
           <template  v-for="value in values">
           <li class="am-g am-list-item-desced am-list-item-thumbed am-list-item-thumb-left">
            <a href="" class="">
              <div class="am-u-sm-4 am-list-thumb">

                <p style="text-align:center;color:#000000;font-size:25px;margin-top:5px">￥{{value.money}}</p>
                <div class="am-list-item-text" style="text-align: center;">相距<span  id="" class="">{{value.distance}}</span>米</div>

              </div>

              <div class=" am-u-sm-8 am-list-main">
                <h3 class="am-list-item-hd"><a href="http://www.douban.com/online/11624755/" class="">{{value.theme}}</a></h3>

                <div class="am-list-item-text"><span  id="" class="">{{value.tag}}|</span><span id="" class="">{{value.comment_score}}分|</span><span id="" class="">人均{{value.money}}元</span></div>

              </div>
            </a>
          </li>
        </template>  
       </ul>
     </div>

   </div>
   <!-- 红包列表 end-->
 </div>
</div>
</div>
</template>





<style type="text/css">
	

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
			return !!this.store.arrivePoint
		},
		canShowCoupon() {
			return !!(this.store.arrivePoint && this.store.isCouponClicked)
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
		'store.arrivePoint'(val) {
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
	

