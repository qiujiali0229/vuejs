<template id="">
	<div id="register">
		<header>
				<router-link :to="'/login'">
					<span class="yo-ico">&#xe658;</span>
				</router-link>
		    <span>注册</span>
		</header>
		<section>
			<div class="info"><b class="yo-ico">&#xe801;</b><input type="text" placeholder="Username"/></div>
			<div class="info"><b class="yo-ico">&#xe692;</b><input type="text" placeholder="Phone"/></div>
			<p class="tit">注册即表示同意：<<用户注册及服务协议>></p>
			<router-link :to="'/registerPwd'">
				<div class="res">注册</div>
			</router-link>
			<p class="other">----------其他登录方式----------</p>
			<div class="mth"><span class="yo-ico">&#xe60a;</span><span class="yo-ico">&#xe63b;</span></div>
		</section>
	</div>
</template>
