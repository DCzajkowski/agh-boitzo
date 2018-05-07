import Vue from 'vue'

Vue.config.devtools = true

import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        equations: [
            { value: '' },
        ],
        target: '',
        type: 'max',
        varNumber: 0,
        range: 10,
        interationsAmount: 100,
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
        setVarNumber(state, target) {
            state.varNumber = target
        },
        setRange(state, target) {
            state.range = target
        },
        setInterationsAmount(state, target) {
            state.interationsAmount = target
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
        varNumber(state) {
            return state.varNumber
        },
        range(state) {
            return state.range
        },
        interationsAmount(state) {
            return state.interationsAmount
        },
    },
})
