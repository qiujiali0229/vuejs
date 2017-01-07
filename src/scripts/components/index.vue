<template id="">
    <div class="m-index" id="m-index">
		 <router-view></router-view>
		 <footer>
		  	<ul>
		  		<li v-for="fn in footerNav">
		  			<router-link :to="fn.router">
		  				<i class="yo-ico"v-html="fn.ico"></i>
		  			    <b>{{fn.title}}</b>
		  			</router-link>
		  		</li>
		  	</ul>
		 </footer>
	</div>
</template>
<script>
	module.exports = {
		data:function (){
			return {
				footerNav:[
					{
						router:'/',
						ico:'&#xe654;',
						title:'首页'
					},
					{
						router:'/search',
						ico:'&#xe604;',
						title:'发现'
					},
					{
						router:'/shop',
						ico:'&#xe675;',
						title:'商城'
					},
					{
						router:'/person',
						ico:'&#xe66f;',
						title:'个人'
					}
				]
			}
		}
	}
</script>
