<template>
  <div id="app">

    <router-view></router-view>
    
    <footbar v-show="bFoot"></footbar>
  </div>
</template>
<script>
import {mapGetters} from 'vuex';
import * as types from './store/types'
import footbar from "./components/footbar";
export default {
  components:{
    footbar
  },
  computed:mapGetters(['bFoot']),
  watch:{
    $route:{
      handler:function(to){
        let path = to.path;
        if(/home|fenlei|user/.test(path)){
          this.$store.dispatch(types.VIEW_FOOT,true)
        }
        if(/login|buycar/.test(path)){
          this.$store.dispatch(types.VIEW_FOOT,false)
        }
      },
      immediate:true
    }
  }
}

</script>


<style>
</style>
