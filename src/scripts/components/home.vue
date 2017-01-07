 <template id="">
 	<div class="container">
 		<header>
	     	<b>精选</b>
	     	<img src="images/fdj.jpg">
	    </header>
	    <section>
		  	<p class="dat">Dec.30</p>
		  	<ul>
		  		<li v-for="item in list"><img :src="item.imgSrc"></li>
		  		<span>-查看往期精选-</span>
		  	</ul>
		  	<div class="content1">
		  		<div class="c1">
			  		<span>丹妮的小世界</span>
			  		<p>我闻如是的匠心之旅</p>
			  		<div class="swiper-container" id="index-swiper">
					  <div class="swiper-wrapper">
					    <div class="swiper-slide"><img src="images/s-7.jpg"></div>
					    <div class="swiper-slide"><img src="images/s-7.jpg"></div>
					    <div class="swiper-slide"><img src="images/s-7.jpg"></div>
					  </div>
					</div>
		  		</div>
		  		<div class="c2">
		  			<img src="images/c-1.jpg">
		  		</div>
		  		<div class="c3">
					<div class="swiper-container" id="index-swiper1">
					  <div class="swiper-wrapper">
					    <div class="swiper-slide"><img src="images/c-2.jpg"></div>
					    <div class="swiper-slide"><img src="images/c-2.jpg"></div>
					    <div class="swiper-slide"><img src="images/c-2.jpg"></div>
					  </div>
					</div>
		  		</div>
		  	</div>
		  	<div class="content2">
		  		<div class="a1">
			  		<span></span>工匠之界
			  		<p>多少次的打磨只为这一次的完美</p>
			  		<div class="swiper-container" id="index-swiper2">
					  <div class="swiper-wrapper">
					    <div class="swiper-slide"><img src="images/a1.jpg"></div>
					    <div class="swiper-slide"><img src="images/a1.jpg"></div>
					    <div class="swiper-slide"><img src="images/a1.jpg"></div>
					  </div>
					</div>
		  		</div>
		  		<div class="a2">
		  			<img src="images/a2.jpg">
		  		</div>
		  		<div class="a3">
					<div class="swiper-container" id="index-swiper3">
					  <div class="swiper-wrapper">
					    <div class="swiper-slide"><img src="images/a3.jpg"></div>
					    <div class="swiper-slide"><img src="images/a3.jpg"></div>
					    <div class="swiper-slide"><img src="images/a3.jpg"></div>
					  </div>
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
 				list:[]
 			}
 		},
	 	mounted: function() {
	       fetch('/api/list').then(response=> response.json())
	       .then(res => {
	          this.list=res;
		          new Swiper('#index-swiper',{
		          	loop:false
		          });
		          new Swiper('#index-swiper1',{
		          	loop:false
		          });
		           new Swiper('#index-swiper2',{
		          	loop:false
		          });
		          new Swiper('#index-swiper3',{
		          	loop:false
		          });
	       })
	       .catch(e => console.log("0ops,err",e))
	    }
	}

 </script>
