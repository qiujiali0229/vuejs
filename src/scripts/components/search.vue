<template id="">
	<div class="m-search">
		<header>
			<div class="swiper-container"  id = "lb-swiper">
				<div class="swiper-wrapper">
					<div v-for="items in list2" class="swiper-slide"><img :src="items.imgSrc1"/></div>
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
								<li v-for="item in list.data1"><img :src="item.imgSrc" /></li>
							</ul>
						</div>
						<div class="swiper-slide">
							 <ul>
								 <li v-for="item in list.data2"><img :src="item.imgSrc1" /></li>
							</ul>
						</div>
					</div>
			</div>
		</section>
	</div>
</template>
