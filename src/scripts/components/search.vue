<template id="">
	<div id="m-search">
	    <header>
	      <div class="swiper-container"  id="lb-swiper">
	        <div class="swiper-wrapper">
							<div v-for="items in list2" class="swiper-slide"><img :src="items.head"/></div>
	        </div>
	      </div>
	    </header>
	    <nav>
	      <ul>
	        <li  v-on:click="changeTab(index)" v-bind:class="{active: index==navIndex}" v-for="(item, index) in nav">{{item}}</li>
	      </ul>
	    </nav>
			<section>
			    <div class="swiper-container" id="index-swiper">
			      <div class="swiper-wrapper">
			          <div class="swiper-slide">
				            <ul>
				               <li v-for="items in list2"><img :src="items.data1" /></li>
				            </ul>
			          </div>
			          <div class="swiper-slide">
				             <ul>
				               	<li v-for="items in list2.data2"><img :src="items.imgSrc1"/></li>
				             </ul>
			          </div>
			        </div>
			    </div>
	    </section>
	</div>
</template>
<script>
    var Swiper = require('../lib/swiper.js');
    var common = require('../utils/util.common.js');
   	module.exports = {
	   		data: function() {
		   			return {
							swiper : null,
							navIndex : 0,
							nav:['匠心','匠人'],
							list2:[]
		   			}
	   		},
				methods:{
					changeTab:function(index){
						this.swiper.slideTo(index);
						this.navIndex = index;
					}
				},
				mounted:function(){
					fetch('/api/list2').then(response => response.json())
					.then(res => {
						var that = this;
						console.log(this);
						that.list2 = res;
						// console.log(res[0].data1)
						// console.log(res[0].data2)
						that.swiper = new Swiper('#index-swiper',{
							loop:false,
							onSlideChangeStart: function(swiper){
							    that.navIndex = swiper.activeIndex;
							}
						});
						var mySwiper = new Swiper('#lb-swiper', {
							autoplay: 1000,//可选选项，自动滑动
							pagination : '.swiper-pagination',
						})
					})
					.catch(e => console.log("Oops , error",e))
			}
	}
 </script>
