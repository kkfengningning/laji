<template>
    <div class="login">
        	<header class="top-header">
                  <router-link to='/' class="text text texta">取消</router-link>
		<!-- <a class="text texta" href="index.html">取消</a> -->
		<h3>登录</h3>
		<!-- <a class="text" href="sign.html">注册</a> -->
        <router-link to='/sign' class="text">注册</router-link>
	</header>
	
	<div class="login">
		<form>
			<ul>
				<li>
					<img src="../assets/images/login.png"/>
					<label>账号</label>
					<input type="text" placeholder="请输入账号"/>
				</li>
				<li>
					<img src="../assets/images/password.png"/>
					<label>密码</label>
					<input type="password" placeholder="请输入密码"/>
				</li>
			</ul>
			<input type="submit" value="登录"/>
		</form>
	</div>
    </div>
</template>
