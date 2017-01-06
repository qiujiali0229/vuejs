<template id="">
	<div id="registerPwd">
		<header>
			  <router-link :to="'/register'">
						<span class="yo-ico">&#xe658;</span>
				</router-link>
				<span>密码注册</span>
		</header>
		<section>
				<div class="info"><b class="yo-ico">&#xe692;</b><input type="text" placeholder="输入密码"/></div>
				<div class="info"><b class="yo-ico">&#xe692;</b><input type="text" placeholder="再次输入密码"/></div>
				<div class="info"><input type="text" placeholder="输入验证码"/><span>发送验证码</span></div>
				<div class="res">注册</div>
		</section>
	</div>
</template>
