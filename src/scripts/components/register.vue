<template id="">
	<div id="register">
		<header>

						<span class="yo-ico">&#xe658;</span>
				
		    <span>注册</span>
		</header>
		<section>
			<div class="info"><b class="yo-ico">&#xe801;</b><i>Username</i></div>
			<div class="info"><b class="yo-ico">&#xe692;</b><i>Phone</i></div>
			<p class="tit">注册即表示同意：<<用户注册及服务协议>></p>
			<router-link :to="'/registerPwd'">
				<div class="res">注册</div>
			</router-link>
			<p class="other">----------其他登录方式----------</p>
			<div class="mth"><span class="yo-ico">&#xe60a;</span><span class="yo-ico">&#xe63b;</span></div>
		</section>
	</div>
</template>
