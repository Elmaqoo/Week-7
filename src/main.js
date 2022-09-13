import { createApp, VueElement } from 'vue'
import App from './App.vue'

import './assets/main.css'

createApp(App).mount('#app')

Vue.component('globalcomp',{
    template: '<button>Global Component</button>'
})

new Vue({
    el:"#global",
})
