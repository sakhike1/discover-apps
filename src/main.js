import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import AOS from "aos";
import "aos/dist/aos.css"
import VueAnimateOnScroll from 'vue-animate-onscroll'
import VueFormulate from '@braid/vue-formulate'
import Vuelidate from 'vuelidate'

Vue.use(VueAnimateOnScroll)
Vue.use(VueFormulate)
Vue.use(Vuelidate);




Vue.config.productionTip = false


new Vue({
  created(){
    AOS.init();
  },
  router,
  store,

  data: {
    

  },

  vuetify,
  render: h => h(App)
}).$mount('#app')
