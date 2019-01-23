<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <loding></loding>
	<header class="page-header">
		<h3>商城</h3>
	</header>
	
	<div class="contaniner fixed-contb">
		<slider></slider>
		
		<section class="shop">
			<h3>
				<a href="#">
					服装
					<span><img src="../assets/images/right.png"/></span>
				</a>
			</h3>
			<dl>
				<dd  v-for="item of this.list" :key='item.id'>
					<router-link to='/list'>
					<img :src='item.url'/>
					<b>{{item.title}}</b>

					</router-link>

				</dd>
			</dl>
			<!-- <dl>
				<dd>
					<a href="list.html">
						<img src="../assets/images/index-ph01.png"/>
						<b>男装</b>
					</a>
				</dd>
				<dd>
					<a href="list.html">
						<img src="../assets/images/index-ph02.png"/>
						<b>女装</b>
					</a>
				</dd>
			</dl> -->
		</section>
		
		<section class="shop">
			<h3>
				<a href="list.html">
					食品
					<span><img src="../assets/images/right.png"/></span>
				</a>
			</h3>
			<dl>
				<dd>
					<a href="list.html">
						<img src="../assets/images/index-03.png"/>
						<b>切糕</b>
					</a>
				</dd>
				<dd>
					<a href="list.html">
						<img src="../assets/images/index-ph04.png"/>
						<b>酥饼</b>
					</a>
				</dd>
			</dl>
		</section>
	</div>
	
	

  </div>
</template>

<style>
.page-header{ width: 100%; background-color: #FC605A; overflow: hidden;}
.page-header h3{position: relative; font-size: 1.9em;  color: #fff; font-weight: normal; text-align: center;  padding: 0.7em 0;}
.page-header input{ width: 60%; border: none; border-radius: 3em; margin: 2% 5%; padding: 1.5% 7.5%; font-size: 1.7em; float: left; }
.page-header span{ width: 15%;  display: inline-block;margin: 3% 0; float: right;}
.page-header span img {width: 50%; }
/* 底部 */
.page-footer{ width: 100%; box-shadow: 0 -2px 4px #d7d7d7;  overflow: hidden;}
.page-footer ul{ width: 100%; background-color: #fff; overflow: hidden;}
.page-footer ul li{  float: left; width: 25%; text-align: center; padding: 3% 0; }
.page-footer ul li a{ width: 100%; display: block;}
.page-footer ul .active a p{ color: #fc605a;}
.page-footer ul li img{  width: 25%;}
.page-footer ul li p{ font-size: 1.275em; color: #333;margin-top: 3%;}

.contaniner{ width: 100%;  overflow: hidden;}
.contaniner .ban li{ width: 100%;height: 18em;  }
.contaniner .ban  a{ width: 100%;display: block; overflow: hidden;}
.contaniner .ban  img{ width: 100%;min-height: 18em;  display: block;}

.contaniner .shop{ width: 100%; margin-top: 5%;}
.contaniner .shop h3{ width: 90%; font-size: 1.4875em; padding:3% 5%;background-color: #fff; overflow: hidden;}
.contaniner .shop h3 span{ float: right; width:4%; display: block; }
.contaniner .shop h3 span img{ width: 100%; display: block; }
.contaniner .shop h3 a{ width: 100%;color: #45c018; display: block;}
.contaniner .shop dl{ margin: 2% 0; width: 100%; overflow: hidden;}
.contaniner .shop dl dd{  width: 44%; min-height: 11em; max-height: 15em;  overflow: hidden; margin: 0 3%; float: left; position: relative;}
.contaniner .shop dl dd a{  width: 100%; display: block; height: 100%;}
.contaniner .shop dl dd img{  width: 100%;height: 100%; display: block;}
.contaniner .shop dl dd b{position: absolute; bottom: 0; left: 0; display: block; width: 80%; padding: 5% 10%; color: #fff; font-weight: normal; font-size: 1.16em; background-color: rgba(0,0,0,0.5)}
</style>

<script>
import Vue from 'vue'
import axios from 'axios'
import slider from '../components/slider'

import swiper from '../components/slider'
import loding from '@/components/loding.vue'
export default {
  data:function(){
	  return {
		  list:[]
	  }
 
  },
  name: 'home',
  mounted(){
   axios({
	   url:'/data/blog.data'
   }).then(
	   res=>{
		   this.list=res.data
		   console.log(this.list)
	   }
   )



   	// $(".loading").addClass("loader-chanage")
    		$(".loading").fadeOut(300)


  },
  components:{
       slider,loding
  }
}
</script>

