<template>
    <div>
        <chart :options="chartOptionsBar"></chart>
    </div>
</template>

<script>
    export default {
        name: "EChart",
        data() {
            return {
                chartOptionsBar: {
                    xAxis: {
                        data: ['0.00', '2.00', '4.00', '6.00', '8.00', '10.00', '12.00', '14.00', '16.00', '18.00', '20.00', '22.00', ]
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            type: 'bar',
                            data: [63, 75, 24, 92, 45, 67, 78, 99, 106, 130, 145, 20]
                        }
                    ],
                    title: {
                        text: 'Temperature or sth',
                        x: 'center',
                        textStyle: {
                            fontSize: 18
                        }
                    },
                    color: '#428bca'
                }
            }
        }
    }
</script>

<style scoped>

</style>
