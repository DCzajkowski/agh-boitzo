import Vue from 'vue'
Vue.config.devtools = true

import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        equations: [
            {value: ''},
        ],

    },
    mutations: {
        addEquation(state, eq) {
            state.equations.push(eq)
        },
        removeEquation(state,index){
            state.equations.splice(index,1)
        },
    },
    getters: {
        equations(state) {
            return state.equations
        },
    },
})
