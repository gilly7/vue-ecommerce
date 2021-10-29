import { createApp } from 'vue'
import App from './App.vue'


createApp(App).mount('#app')

import router from './router'
 new Vue({
  router,
  render: h => h(App),
 }).$mount('#app')

 import Cloudinary from "cloudinary-vue";
 Vue.use(Cloudinary, {
  configuration: { 
   cloudName: "bomet",
   secure: true 
  }
 });