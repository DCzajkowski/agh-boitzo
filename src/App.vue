<template>
    <div id="app">
        <div class="wrap">
            <h2 class="subtitle">Your equations</h2>
            <div v-for="(item, index) in equations" :key="index">
                <input
                        class="equation"
                        placeholder="Insert an equation"
                        v-model="item.value"
                        @keyup="keepRightAmountOfEquations(item, index)"
                >
            </div>
            <div class="type">
                <input
                        class="target"
                        placeholder="Insert target function"
                        v-model="target"
                        @keyup=""
                ><select class="select" name="typ" v-model="type">
                <option value="max">max</option>
                <option value="min">min</option>
            </select>
            </div>
            <div class="go" @click="compute">compute</div>
            <!--<div class="canvas-wrap">-->
            <!--<plot class="wrap"></plot>-->
            <!--</div>-->
        </div>
    </div>
</template>

<script>
    //import Plot from '@/components/Plot'

    export default {
        name: 'App',
        components: {
            /*Plot,*/
        },
        methods: {
            keepRightAmountOfEquations(input, index) {
                if (input.value === '') {
                    this.$store.commit('removeEquation', index)
                }

                if (this.$store.getters.equations.filter(eg => eg.value === '').length === 0) {
                    this.$store.commit('addEquation', {value: ''})
                }
            },
            set2Target(target) {
                this.$store.commit('addTarget', target)
            },

            compute() {
                console.log('lol')
            },
        },
        computed: {
            equations() {
                return this.$store.getters.equations
            },
            target: {
                get() {
                    return this.$store.getters.target
                },
                set(value) {
                    this.$store.commit('setTarget', value)
                },
            },
            type: {
                get() {
                    return this.$store.getters.type
                },
                set(value) {
                    this.$store.commit('setType', value)
                },
            },
        },
    }
</script>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Montserrat, Arial, sans-serif;
        background-color: ghostwhite;
        color: #444;
    }

    body {
        background-color: ghostwhite;
    }

    .canvas-wrap {
        margin-top: 80px;
        width: 800px;
        height: 600px;
    }

    .subtitle {
        margin-bottom: 20px;
        align-self: center;
    }

    .wrap {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 80px auto 0;
        max-width: 700px;
    }

    .equation, .target {
        outline: 0 !important;
        border: 0;
        border-bottom: 1px solid #999;
        padding: 6px;
        width: 700px;
        margin-top: 10px;
    }

    .target {
        width: 600px;
    }

    .type {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
    }

    .select {
        height: 1.5rem;
    }
    .go{
        align-self: center;
        padding: 0.5rem;
        letter-spacing: 0.1em;
        background-color: #333;
        border-radius: 4px;
        color: white;
        margin: 2rem;
    }

</style>
