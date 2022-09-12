Vue.component('globalcomp',{
  template:'<button>Global Component Button</button>'
});

new Vue({
  el: '#global',
});

import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render:h => h(App),
}).$mount('#local')