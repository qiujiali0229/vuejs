var Vue = require('../lib/vue.js');
var Swiper = require('../lib/Swiper.js');
// var $ = require('../lib/zepto.js');
var IScroll = require('../lib/iscroll-probe.js');
new Vue({
	el: '#f-index',
	data: {
		swiper : null,
		navIndex : 0,
		nav:['匠心','匠人'],
		list: [],
		list2:[]
	},
	methods:{
		changeTab:function(index){
			this.swiper.slideTo(index);
			this.navIndex = index;
		}
	},
	mounted:function(){
		fetch('/api/list').then(response => response.json())
		.then(res => {
			var that = this;
			that.list = res;
			//console.log(res.data1);
			that.swiper = new Swiper('#index-swiper',{
				loop:false,
				onSlideChangeStart: function(swiper){
				    that.navIndex = swiper.activeIndex;
				}
			});
		})
		.catch(e => console.log("Oops , error",e)),
		fetch('/api/list2').then(response => response.json())
		.then(res => {
			var that = this;
			that.list2 = res;
			//console.log(res[0].imgSrc1);
			var mySwiper = new Swiper('#lb-swiper', {
				autoplay: 1000,//可选选项，自动滑动
				pagination : '.swiper-pagination',
				//pagination : '#swiper-pagination1',
			})
		})
		.catch(e => console.log("Oops , error",e))
	//	console.log($);
	//	console.log(IScroll);
	}

});
