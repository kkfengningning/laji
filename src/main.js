import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import './assets/css/style.css'
import './assets/js/jquery.min.js'
import './assets/js/jaliswall.js'
import './assets/css/loaders.min.css'
import './assets/css/loading.css'
Vue.config.productionTip = false


// router.beforeEach((to,from,next)=>{
//   $(".loading").addClass("loader-chanage")
//   $(".loading").fadeOut(300) 
//   next()
// })
// router.afterEach((to,from,next)=>{
//   $(".loading").addClass("loader-chanage")
//   $(".loading").fadeOut(300) 
//   next()
// })
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
