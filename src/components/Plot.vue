<template>
    <div>
        <div ref="plot"></div>
    </div>
</template>

<script>
    import functionPlot from 'function-plot'

    export default {
        mounted() {
            functionPlot({
                target: this.$refs.plot,
                yAxis: {
                    domain: [-1, 9],
                },
                tip: {
                    renderer() {

                    },
                },
                grid: true,
                data: [
                    {
                        fn: 'x^2',
                        derivative: {
                            fn: '2 * x',
                            updateOnMouseMove: true,
                        },
                    },
                ],
            })
        },
    }
</script>
