<template>
  <div class="fenlei">
	  <loding></loding>
    <header class="page-header fixed-header">
		<input type="search"  /> 
		<span>
			<img src="../assets/images/serach.png"/>
		</span>
	</header>
	
	<div class="contaniner fixed-cont">
		<aside class="assort">
			<ul>
				<li class="active">
					<img src="../assets/images/classify01.png"/>
					<span>母婴用品</span>
				</li>
				<li>
					<img src="../assets/images/classify02.png"/>
					<span>女装正品</span>
				</li>
				<li>
					<img src="../assets/images/classify03.png"/>
					<span>男装正品</span>
				</li>
				<li>
					<img src="../assets/images/classify04.png"/>
					<span>内衣服饰</span>
				</li>
				<li>
					<img src="../assets/images/classify05.png"/>
					<span>化妆品</span>
				</li>
				<li>
					<img src="../assets/images/classify06.png"/>
					<span>居家百货</span>
				</li>
				<li>
					<img src="../assets/images/classify07.png"/>
					<span>时尚智能</span>
				</li>
				<li>
					<img src="../assets/images/classify08.png"/>
					<span>营养保健</span>
				</li>
				<li>
					<img src="../assets/images/classify09.png"/>
					<span>女鞋箱包</span>
				</li>
			</ul>
		</aside>
		
		<section class="assort-cont">
			<figure>
				<a href="#">
					<img src="../assets/images/classify-ph01.png"/>
				</a>
			</figure>
			<dl>
				<dt>宝宝营养</dt>
				<dd>
					<a href="#">
						<img src="../assets/images/classify-ph02.png"/>
						<p>DNA</p>
					</a>
				</dd>
				<dd>
					<a href="#">
						<img src="../assets/images/classify-ph03.png"/>
						<p>钙剂</p>
					</a>
				</dd>
				<dd>
					<a href="#">
						<img src="../assets/images/classify-ph02.png"/>
						<p>DNA</p>
					</a>
				</dd>
				<dd>
					<a href="#">
						<img src="../assets/images/classify-ph03.png"/>
						<p>钙剂</p>
					</a>
				</dd>
			</dl>
			<dl>
				<dt>妈妈专区</dt>
				<dd>
					<a href="#">
						<img src="../assets/images/classify-ph04.png"/>
						<p>DNA</p>
					</a>
				</dd>
				<dd>
					<a href="#">
						<img src="../assets/images/classify-ph05.png"/>
						<p>钙剂</p>
					</a>
				</dd>
				<dd>
					<a href="#">
						<img src="../assets/images/classify-ph04.png"/>
						<p>DNA</p>
					</a>
				</dd>
				<dd>
					<a href="#">
						<img src="../assets/images/classify-ph05.png"/>
						<p>钙剂</p>
					</a>
				</dd>
			</dl>
		</section>
	</div>
	

  </div>
</template>
<style>
.fenlei{background:white;}
/*分类*/

.contaniner .assort{width: 40%; float: left;}
.contaniner .assort ul{ width: 100%;}
.contaniner .assort ul li{ width: 92%;background-color: #f5f5f5;  border-bottom: solid 1px #c8c8c8; border-right: solid 1px #c8c8c8; padding:12% 4%;}
.contaniner .assort ul li img{ width: 17%; margin: 0 10%; vertical-align: middle;}
.contaniner .assort ul li span{ font-size: 1.3865em; color: #666; vertical-align: middle;}
.contaniner .assort ul .active{  border-right: none;background-color: #fff }
.contaniner .assort-cont{ width: 52%; margin: 5% 4%; float: right;}
.contaniner .assort-cont img{ width: 100%;}
.contaniner .assort-cont dl{ width: 100%; margin-top: 5%; overflow: hidden;}
.contaniner .assort-cont dl dt{font-size: 1.169em; color: #999; margin-bottom: 3%;}
.contaniner .assort-cont dl dd{ width: 48%; float: left; margin-bottom: 3%;}
.contaniner .assort-cont dl dd img{ height: 7em;}
.contaniner .assort-cont dl dd a{ width: 100%; display: block;}
.contaniner .assort-cont dl dd p{ text-align: center; color: #666; font-size: 1.169em;}
.contaniner .assort-cont dl dd:nth-child(even){margin-right: 2%;}
.contaniner .assort-cont dl dd:nth-child(odd){margin-left: 2%;}

.page-footer{ width: 100%; box-shadow: 0 -2px 4px #d7d7d7;  overflow: hidden;}
.page-footer ul{ width: 100%; background-color: #fff; overflow: hidden;}
.page-footer ul li{  float: left; width: 25%; text-align: center; padding: 3% 0; }
.page-footer ul li a{ width: 100%; display: block;}
.page-footer ul .active a p{ color: #fc605a;}
.page-footer ul li img{  width: 25%;}
.page-footer ul li p{ font-size: 1.275em; color: #333;margin-top: 3%;}
</style>

<script>
import loding from '@/components/loding.vue'
export default {
components: {
    loding
  }, 
  mounted:function(){
    	// $(".loading").addClass("loader-chanage")
    		$(".loading").fadeOut(300)
  },
	
}
</script>
