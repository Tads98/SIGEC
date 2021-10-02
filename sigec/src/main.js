import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import axios from 'axios'

Vue.config.productionTip = false

axios.defaults.baseURL = "https://gestaodecasos-edital043.vercel.app/api/"

console.log("axios.defaults.baseURL = " + axios.defaults.baseURL)

new Vue({
  router,
  vuetify,
  axios,
  render: h => h(App)
}).$mount('#app')
