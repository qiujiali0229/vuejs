<template id="">
	<div id="login">
		<header>
				<router-link :to="'/person'">
					<span class="yo-ico">&#xe658;</span>
				</router-link>
		    <span>登录及注册</span>
		    <span>短信登录</span>
		</header>
		<section>
			<div class="info"><b class="yo-ico">&#xe801;</b><input type="text" placeholder="Username"/></div>
			<div class="info"><b class="yo-ico">&#xe692;</b><input type="text" placeholder="Phone"/></div>
			<div class="res">登录</div>
			<p class="fg">
				<span class="pwd">忘记密码</span>
				<router-link :to="'/register'">
				  <span>没有账号？</span><span>注册</span>
				</router-link>
			</p>
			<p class="other">----------其他登录方式---------</p>
			<div class="mth"><span class="yo-ico">&#xe60a;</span><span class="yo-ico">&#xe63b;</span></div>
		</section>
	</div>
</template>
