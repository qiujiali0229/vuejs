<template id="">
	<div id="person">
		<header>个人</header>
		<section>
			<router-link :to="'/login'">
				<div class="log">
						<img src="/images/person-head.jpg" alt="" />
						<i>尚未登录</i>
						<span class="yo-ico">&#xe670;</span>
				</div>
		  </router-link>
			<div class="main">
				<p>
					<i class="yo-ico">&#xe630;</i>
					<i class="yo-ico">&#xe632;</i>
				</p>
				<p><b>购物车</b><b>我的订单</b></p>
			</div>
			<div class="info">
				<p><i class="yo-ico">&#xe624;</i><span>我的消息</span></p>
				<p><i class="yo-ico">&#xe660;</i><span>打小报告</span></p>
			</div>
			<div class="set">
				<p><i class="yo-ico">&#x343e;</i><span>设置</span></p>
			</div>
		</section>
	</div>
</template>
