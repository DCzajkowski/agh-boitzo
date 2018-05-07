import Vue from 'vue'
Vue.config.productionTip = false
Vue.config.devtools = true

import d3 from 'd3'
window.d3 = d3

import store from './store'
import App from './App'

new Vue({
    el: '#app',
    store,
    components: { App },
    template: '<App/>',
})
