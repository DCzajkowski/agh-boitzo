import Vue from 'vue'

Vue.config.devtools = true

import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        equations: [
            {value: ''},
        ],
        target: '',
        type: 'max',
    },
    mutations: {
        addEquation(state, eq) {
            state.equations.push(eq)
        },
        removeEquation(state, index) {
            state.equations.splice(index, 1)
        },
        setTarget(state, target) {
            state.target = target
        },
        setType(state, target) {
            state.type = target
        },
    },
    getters: {
        equations(state) {
            return state.equations
        },
        target(state) {
            return state.target
        },
        type(state) {
            return state.type
        },
    },
})
