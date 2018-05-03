import Vue from 'vue'
Vue.config.productionTip = false
Vue.config.devtools = true

import store from './store'
import App from './App'

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    components: { App },
    template: '<App/>',
})
