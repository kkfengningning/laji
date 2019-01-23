<template>
    <div class='self'>
		<loding></loding>
        <header class="self-header">
		<figure><img src="../assets/images/self-tou.png"/></figure>
		<dl>
			<dt>弱小喵</dt>
			<dd>
				<img src="../assets/images/self-header.png"/>
				<span>5684</span>
				<span>炒饭大湿</span>
			</dd>
		</dl>
		<button>签到</button>
	</header>
	
	<div class="contaniner fixed-contb">
		<section class="self">
			<dl>
				<dt>
					<a href="order.html">
						<img src="../assets/images/self-icon.png"/>
						<b>全部订单</b>
						<span><img src="../assets/images/right.png"/></span>
					</a>
				</dt>
				<dd>
						<ul>
							<li>
								<a href="go-order.html">
									<img src="../assets/images/order-icon01.png"/>
									<p>待发货</p>
								</a>
							</li>
							<li>
								<a href="go-order.html">
									<img src="../assets/images/order-icon03.png"/>
									<p>待付款</p>
								</a>
							</li>
							<li>
								<a href="go-order.html">
									<img src="../assets/images/order-icon02.png"/>
									<p>待收货</p>
								</a>
							</li>
							<li>
								<a href="go-assess.html">
									<img src="../assets/images/order-icon04.png"/>
									<p>待评价</p>
								</a>
							</li>
						</ul>
				</dd>
			</dl>
			
			<ul class="self-icon">
				<li>
					<a href="datum.html">
						<img src="../assets/images/self-icon01.png"/>
						<p>个人信息</p>
						<span><img src="../assets/images/right.png"/></span>
					</a>
				</li>
				<li>
					<a href="mycollect.html">
						<img src="../assets/images/self-icon02.png"/>
						<p>我的收藏</p>
						<span><img src="../assets/images/right.png"/></span>
					</a>
				</li>
				<li>
					<a href="integral.html">
						<img src="../assets/images/self-icon03.png"/>
						<p>我的积分</p>
						<span><img src="../assets/images/right.png"/></span>
					</a>
				</li>
				<li>
					<a href="addres.html">
						<img src="../assets/images/self-icon04.png"/>
						<p>地址管理</p>
						<span><img src="../assets/images/right.png"/></span>
					</a>
				</li>
			</ul>
			<ul class="self-icon">
				<li>
					<a href="none.html">
						<img src="../assets/images/self-icon05.png"/>
						<p>我的分销</p>
						<span><img src="../assets/images/right.png"/></span>
					</a>
				</li>
				<li>
					<a href="#">
						<img src="../assets/images/self-icon06.png"/>
						<p>邀请好友</p>
						<span><img src="../assets/images/right.png"/></span>
					</a>
				</li>
				
			</ul>
			<router-link to='/login'><input type="button" value="退出" /></router-link>
			
		</section>
		
		
	</div>
	

    </div>
</template>
<style>
.page-footer{ width: 100%; box-shadow: 0 -2px 4px #d7d7d7;  overflow: hidden;}
.page-footer ul{ width: 100%; background-color: #fff; overflow: hidden;}
.page-footer ul li{  float: left; width: 25%; text-align: center; padding: 3% 0; }
.page-footer ul li a{ width: 100%; display: block;}
.page-footer ul .active a p{ color: #fc605a;}
.page-footer ul li img{  width: 25%;}
.page-footer ul li p{ font-size: 1.275em; color: #333;margin-top: 3%;}

 /*个人信息*/
.self-data{ width: 100%; margin-top: 3%; background-color: #fff}
.self-data li{ width: 90%; overflow: hidden; padding: 5%; border-bottom: solid 1px #ccc;}
.self-data li a{ display: block; width: 100%;}
.self-data li a *{ float: right;}
.self-data li span{  width: 3%; display: block; margin-left: 5%;}
.self-data li span img{  width: 100%; margin:60% 0;}
.self-data li p{float: left; font-size: 1.45em; padding: 1.5% 0; color: #333; }
.self-data li figure{ width: 10%; height: 0; padding-bottom: 10%; overflow: hidden;border-radius: 50%;  }
.self-data li figure img{ width: 100%; }
.self-data li small{ font-size: 1.25em; color: #666; padding: 1.8% 0;}
.self-data li select{ font-size: 1.25em; color: #666; border: none; background-color: #fff; padding: 1% 0;}

/*修改*/
.namechange{ background-color: #fff; width: 82%; padding:4% 5%; margin: 4%; border-radius: 0.5em;}
.namechange img{ width: 10%; vertical-align: middle;}
.namechange input { width: 70%; margin: 0 5%; border: none; font-size: 1.45em; padding: 2% 0;}
.nameform p{ color: #999; font-size: 1.169em; margin: 3% 5%; }
.nameform input[type="submit"]{ width: 90%; margin: 3% 5%; padding: 3% 0; background-color: #FC605A; border-radius: 0.4em; color: #fff; font-size: 1.5em; border: none;}


.self-header{ width: 80%; background-color: #FC605A; padding: 6% 10%; overflow: hidden;}
.self-header figure{ width: 20%; height: 0; padding-bottom: 20%; border-radius: 50%; border: solid 2px rgba(255,255,255,0.8);  float: left; overflow: hidden;}
.self-header figure img{ width: 100%; }
.self-header dl{ width: 50%; margin: 0 5%; padding: 2% 0; float: left; overflow: hidden;}
.self-header dl dt{  font-size: 1.7em; color: #fff;}
.self-header dl dd { margin: 5% 0;}
.self-header dl dd img{ width: 10%; vertical-align: middle;}
.self-header dl dd span{ color: #fff; font-size: 1.1em; margin-right: 3%; vertical-align: middle;}
.self-header button{ width: 18%; background-color: #f5f5f5; padding: 2% 0; color: #999; border: none; border-radius: 0.2em; margin: 5% 0; }


.contaniner .self{ width: 100%; margin-top: 5%;}
.contaniner .self dl{ width: 100%;}
.contaniner .self dl dt{ width: 90%; overflow: hidden; padding:4% 5%; background-color: #fff; }
.contaniner .self dl dt a{ width: 100%; display: block; overflow: hidden;}
.contaniner .self dl dt img{width: 6%; vertical-align: middle;}
.contaniner .self dl dt b{ color: #333; font-weight: normal; font-size: 1.594em; margin:0 3%;vertical-align: middle; }
.contaniner .self dl dt span{width: 4%; float: right;}
.contaniner .self dl dt span img{width: 100%;}
.contaniner .self dl dd{ width: 100%; border-top: solid 1px #c8c8c8;}
.contaniner .self dl dd ul{ width: 100%;display: table; overflow: hidden; background-color: #fff}
.contaniner .self dl dd ul li{ display: table-cell; width: 25%; text-align: center; padding: 5% 0;}
.contaniner .self dl dd ul li a{ width: 100%; display: block; height: 100%;}
.contaniner .self dl dd ul li img{ height: 50%;}
.contaniner .self dl dd ul li p{ font-size:1.55em; color: #666; padding-top: 4%;}
.contaniner .self .self-icon{ width: 100%; margin-top:6%; background-color: #fff}
.contaniner .self .self-icon li{ width:90%;padding:4% 5%; overflow: hidden; border-bottom: solid 1px #c8c8c8;}
.contaniner .self .self-icon li a{ width: 100%; display: block; overflow: hidden;}
.contaniner .self .self-icon li img{ width: 10%; float: left;}
.contaniner .self .self-icon li p{font-size:1.55em ; color: #333; padding: 1.2% 5%;  float: left;}
.contaniner .self .self-icon li span{ width: 4%; float: right;}
.contaniner .self .self-icon li span img{ width: 100%;}
.contaniner .self input[type="button"]{ width: 80%; margin: 5% 10% ; border: none; background-color: #FC605A; font-size: 1.6em; color: #fff; padding: 4% 0; border-radius: 0.4em;}
</style>

<script>
import loding from '@/components/loding.vue'
export default {
     components:{
    loding
  }, 
  mounted:function(){
    	// $(".loading").addClass("loader-chanage")
		// $(".loading").fadeOut(300)
		// $(".loading").addClass("loader-chanage")
    		$(".loading").fadeOut(300)
  },
	
}
</script>