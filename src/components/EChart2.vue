<template>
    <div>
        <div class="echarts">
            <chart :options="chartOptionsBar"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "EChart2",
        props: {
            history: Object
        },

        data() {
            return {
                chartOptionsBar: {
                    title: {
                        text: "Temperatura w budynku",
                        x: 'center',
                        textStyle: {
                            fontSize: 18
                        }
                    },
                    toolbox: {
                        feature: {
                            magicType: {
                                type: ['line', 'bar'],
                                title: ['Liniowy', 'Słupkowy']
                            },
                            saveAsImage: {
                                pixelRatio: 2,
                                title: 'Obraz'
                            }
                        }
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    dataZoom: [{
                        type: 'inside'
                    }, {
                        type: 'slider'
                    }],
                    xAxis: {
                        data: this.history.timestamp
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            type: 'bar',
                            data: this.history.values
                        }
                    ],
                    color: '#428bca'
                }
            }
        },

    }
</script>

<style scoped>
    .echarts {
        width: 100%;
    }
</style>
