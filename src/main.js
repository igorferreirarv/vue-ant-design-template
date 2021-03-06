import Vue from 'vue'
import App from './App.vue'
import './plugins/axios'
import antDesign from './plugins/ant-design'

Vue.config.productionTip = false

new Vue({
  antDesign,
  render: h => h(App),
}).$mount('#app')
