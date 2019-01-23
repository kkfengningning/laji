<template>
  <div class="detail3">
    <figure class="swiper-container">
      <ul class="swiper-wrapper">
        <li class="swiper-slide">
          <a href="#">
            <img :src="this.list.url">
          </a>
        </li>
        <li class="swiper-slide">
          <a href="#">
            <img :src="this.list.url">
          </a>
        </li>
        <li class="swiper-slide">
          <a href="#">
            <img :src="this.list.url">
          </a>
        </li>
        <li class="swiper-slide">
          <a href="#">
            <img :src="this.list.url">
          </a>
        </li>
      </ul>
      <div class="swiper-pagination"></div>
    </figure>
  </div>
</template>
<script>
import axios from 'axios'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
export default {
    data:function(){
        return {
            list:[]

        }
    },
    mounted:function(){

        let swiper = new Swiper(".swiper-container",{
            autoplay: true,
            loop:true
        });
        console.log("xianqing",this.$route.params.id)
        let num = this.$route.params.id-1
        axios({
			url:'/data/lista.data'
		}).then(
			res=>{
				this.list=res.data[num]
				console.log("list",this.list)
			}
		)


    }
}
</script>

