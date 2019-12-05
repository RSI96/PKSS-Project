<template>
    <div>
        <div class="echarts">
            <chart :options="chartOptionsBar"/>
        </div>
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Data od" aria-label="Data od" aria-describedby="basic-addon1" v-model="data_od">
            <input type="text" class="form-control" placeholder="Data do" aria-label="Data do" aria-describedby="basic-addon1" v-model="data_do">
            <select class="custom-select" id="inputGroupSelect02" v-model="parametr">
                <option selected>Wybierz parametr</option>
                <option value="U_b">U_b</option>
                <option value="F_cob">F_cob</option>
                <option value="T_h">T_h</option>
                <option value="T_h">T_h</option>
                <option value="T_rref">T_rref</option>
                <option value="T_r">T_r</option>
                <option value="T_pcob">T_pcob</option>
            </select>
            <div class="input-group-append">
                <button class="btn btn-outline-primary" type="button" @click="downloadData">Akceptuj</button>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "EChart",
        methods: {
            downloadData() {
                axios.get("http://ADRES:8080/history" + '?data_od=' +this.data_od + '&data_do=' +this.data_do + '&parametr=' +this.parametr)
                    .then(res => (this.history = res.data));
                }
        },
        data() {
            return {
                history: null,
                data_od: null,
                data_do: null,
                parametr: null,
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
        }
    }
</script>

<style scoped>
    .echarts {
        width: 100%;
    }
</style>
