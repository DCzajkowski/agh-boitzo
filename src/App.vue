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
            <div class="canvas-wrap">
                <plot class="wrap"></plot>
            </div>
        </div>
    </div>
</template>

<script>
    import Plot from '@/components/Plot'

    export default {
        name: 'App',
        components: {
            Plot,
        },
        methods: {
            keepRightAmountOfEquations(input, index) {
                if (input.value === '') {
                    this.$store.commit('removeEquation', index)
                }

                if (this.$store.getters.equations.filter(eg => eg.value === '').length === 0) {
                    this.$store.commit('addEquation', { value: '' })
                }
            },
        },
        computed: {
            equations() {
                return this.$store.getters.equations
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
    }

    .wrap {
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 80px;
    }

    .equation {
        outline: 0 !important;
        border: 0px;
        border-bottom: 1px solid #999;
        padding: 6px;
        width: 700px;
        margin-top: 10px;
    }
</style>
