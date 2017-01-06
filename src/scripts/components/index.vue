<template id="">
    <div class="m-index" id="m-index">
		 <router-view></router-view>
		 <footer>
		  	<ul>
		  		<li>
		  			<router-link to="/">
		  				<i class="yo-ico">&#xe654;</i>
		  			    <b>精选</b>
		  			</router-link>
		  		</li>
		  		<li>
		  			<router-link to="/search">
			  			<i class="yo-ico">&#xe604;</i>
			  			<b>发现</b>
		  			</router-link>
		  		</li>
		  		<li>
		  			<router-link to="/supermarket">
			  			<i class="yo-ico">&#xe675;</i>
			  			<b>商城</b>
		  			</router-link>
		  		</li>
		  		<li>
		  			<router-link to="/my">
			  			<i class="yo-ico">&#xe66f;</i>
			  			<b>个人</b>
		  			</router-link>
		  		</li>
		  	</ul>
		 </footer>
	</div>
</template>
