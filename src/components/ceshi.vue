<template>
<ul class="wall" v-for="(item,index) of list" :key="index">
<li class="pic">
<router-link :to="{name:'detail',params:{id:item.id}}" >
< img :src=item.url>
<p>{{item.title}}</p >
<b>{{item.price}}</b>
<del>{{item.oldprice}}</del>
</router-link>
</li>
</ul>
</section>
</div>
</div>
    
</template>


<script>
export default {
data(){
return {
list:''
}
},
mounted(){
axios({
url:'/data/product.data'
}).then(res=>{
this.list = res.data.shangpin
})
}
}
</script>
