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
                        text: "Temperatura na zewnątrz",
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
                        data: ['0.00', '4.00', '5.00', '6.00', '7.00', '11.00', '12.00', '14.00', '18.00', '21.00', '22.00', '24.00', ]
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            type: 'bar',
                            data: [45, 123, 56, 23, 32, 34, 78, 145, 106, 67, 160, 18]
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
