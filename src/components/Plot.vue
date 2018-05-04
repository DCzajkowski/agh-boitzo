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
                grid: true,
                data: [
                    {fn: 'x'},
                ],
            })
            this.$store.watch((state) => state.equations, eq => {
                try {
                    functionPlot({
                        target: this.$refs.plot,
                        grid: true,
                        data: eq.filter(eg => eg.value !== '').map(ob => ({
                            fn: ob.value,
                            fnType: 'implicit',

                        })),
                    })
                }
                catch (er) {
                }
            }, {deep: true})
        },
    }
</script>
