import Vue from 'vue'
Vue.config.devtools = true

import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        name: '',
    },
    mutations: {
        name(state, name) {
            state.name = name
        },
    },
    getters: {
        name(state) {
            return state.name
        },
    },
})
