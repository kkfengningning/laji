<template>

  <div class="detail">
      
    <detail1></detail1>
    <detail2></detail2>
  </div>
</template>
<script>
import slider from '../components/slider'
import detail1 from '../components/detail1.vue'
import detail2 from '../components/detail2.vue'
export default {
    props:["id"],
    data:function(){

        return {
            list:[],
            list1:[]

        }
    },
    components:{
        detail1,detail2,slider
    },
    mounted:function(){
        console.log('id',this.id)
    }
    
}
</script>

