<template>
    <div>
    <div class="echarts">
        <chart :options="chartOptionsBar"/>
    </div>
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Data od" aria-label="Data od" aria-describedby="basic-addon1">
            <input type="text" class="form-control" placeholder="Data do" aria-label="Data do" aria-describedby="basic-addon1">
            <select class="custom-select" id="inputGroupSelect02">
                <option selected>Wybierz parametr</option>
                <option value="1">U_b</option>
                <option value="2">F_cob</option>
                <option value="3">T_h</option>
                <option value="3">T_h</option>
                <option value="3">T_rref</option>
                <option value="3">T_r</option>
                <option value="3">T_pcob</option>
            </select>
            <div class="input-group-append">
                <button class="btn btn-outline-primary" type="button">Akceptuj</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "EChart",
        data() {
            return {
                chartOptionsBar: {
                    title: {
                        text: "Temperatura w budynku w ciągu dnia",
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
                    color: '#428bca'
                }
            }
        }
    }
</script>

<style scoped>
    .echarts {
        width: 100%;
    }
</style>
