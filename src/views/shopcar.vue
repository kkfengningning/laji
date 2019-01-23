<template>
    <div class="shopcar">
        	<header class="page-header">
		<h3>购物车</h3>
	</header>
	
	<div class="contaniner fixed-contb">
		<section class="shopcar">
			<div class="shopcar-checkbox">
				<label for="shopcar" onselectstart="return false"></label>
				<input type="checkbox" id="shopcar"/>
			</div>
			<figure><img src="../assets/images/shopcar-ph01.png"/></figure>
			<dl>
				<dt>超级大品牌服装，现在买只要998</dt>
				<dd>颜色：经典绮丽款</dd>
				<dd>尺寸：L</dd>
				<div class="add">
					<span>-</span>
					<input type="text" value="3" />
					<span>+</span>
				</div>
				<h3>￥653.00</h3>
				<small><img src="../assets/images/shopcar-icon01.png"/></small>
			</dl>
		</section>
		<!--去结算-->
		<div style="margin-bottom: 16%;"></div>
		
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

/*购物车*/
.contaniner .shopcar{ width: 100%; margin: 2% 0; padding: 4% 0; box-shadow: 0 2px 2px #d7d7d7; background-color: #fff;overflow: hidden;}

.contaniner .shopcar .shopcar-checkbox{position: relative; float: left; width:10%; height: 3em; padding: 10% 0;}
.contaniner .shopcar input[type="checkbox"]{ position: absolute; top: 0; left: 0; opacity: 0; }
.contaniner .shopcar .shopcar-checkbox label{position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: url(../assets/images/check.png) no-repeat; background-size: 60%; background-position: 50% ; -moz-user-select: none; }
.contaniner .shopcar .shopcar-checkbox .shopcar-checkd{position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: url(../assets/images/checke.png) no-repeat; background-size: 60%; background-position: 50% ;  }

.contaniner .shopcar figure{ width: 30%; height: 10em; overflow: hidden; float: left;}
.contaniner .shopcar figure img{ width: 100%; min-height: 100%; }
.contaniner .shopcar dl{ position: relative; float: left; width: 54%; height: 10em;   margin: 0 3%; overflow: hidden;}
.contaniner .shopcar dl dt{ font-size: 1.3815em; color: #333;}
.contaniner .shopcar dl dd{ font-size: 1.169em; color: #999;}
.contaniner .shopcar dl .add{position: absolute; bottom: 0; left: 0; width: 46%; overflow: hidden; display: table; }
.contaniner .shopcar dl .add span{border: solid 1px #c8c8c8; padding: 1% 10%; display:table-cell;}
.contaniner .shopcar dl .add input{border: solid 1px #c8c8c8; width:100%;margin-left: -1px; display:table-cell;font-size:1.25em ; padding: 10% 0; color: #666; text-align: center;}
.contaniner .shopcar dl h3{ position: absolute; right: 3%; bottom: 20%; font-size: 1.9em; color: #fc605a; font-weight: normal;}
.contaniner .shopcar dl small{ position: absolute; right: 3%; bottom: 0; display: block; width: 10%;}
.contaniner .shopcar dl small img{width: 100%;}



.page-footer .shop-go{ margin-bottom: 1px; width: 100%; overflow: hidden;}
.page-footer .shop-go b{float: left; width: 60%; background-color: rgba(0,0,0,0.8); text-align: center; padding: 3% 0; color: #fff; font-size: 1.7em; font-weight: normal;}
.page-footer .shop-go span{float: left; width: 40%; background-color: #45C018; text-align: center; padding: 3% 0; color: #fff; font-size: 1.7em; font-weight: normal;}
.page-footer .shop-go span a{color: #fff;}
</style>

