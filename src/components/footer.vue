<template>
  <div class="footer">

    <footer class="page-footer fixed-footer">
		<ul>
		
		     <router-link to='/' tag="li" >
					<img src="../assets/images/footer01.png"/>
					<p id="sb">主页</p>
				</router-link>
		
	<router-link to='/fenlei' tag="li" >
<img src="../assets/images/footer002.png"/>
					<p id="sb">分类</p>
				</router-link>
		
			
				<router-link to='/shopcar' tag="li" >
					<img src="../assets/images/footer003.png"/>
					<p id="sb">购物车</p>
				</router-link>
	

				<router-link to='/self' tag="li">
					<img src="../assets/images/footer004.png"/>
					<p id="sb">个人中心</p>
				</router-link>
		
		</ul>
	</footer>
    
   
  </div>
</template>

<script>
export default {
  name: 'footer',
  props: {
    msg: String
  }
}
</script>

<style>
.active #sb{color:pink;}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
