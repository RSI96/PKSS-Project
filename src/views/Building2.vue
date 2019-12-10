<template>
    <div class="container">
        <div class="row">
            <app-measurement
                    v-for="reading in actual"
                    :key="reading.id"
                    :reading="reading"
            />
        </div>
        <div class="row">
            <div class="col-sm">
                <app-chart
                :history="history[0]"
                />

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
        <div>
        </div>
    </div>
</template>

<script>
    import EChart2 from "../components/EChart2";
    import Measurement from "../components/Measurement";
    import axios from "axios"

    export default {
        name: "Building2",
        components: {
            appChart: EChart2,
            appMeasurement: Measurement
        },
        data() {
            return {
                actual: null,
                history: null,
                data_od: null,
                data_do: null,
                parametr: null,
            }
        },
        methods: {
            downloadData() {
                axios.get("http://4bcc0e78.ngrok.io/budynek2/" + this.parametr + "?timestamp_begin=" + this.data_od + "&timestamp_end=" + this.data_do)
                    .then(res => (this.history = res.data));
                return true
            }
        },
        created() {
            axios.get("http://4bcc0e78.ngrok.io/budynek2")
                .then(res => (this.actual = res.data));
            axios.get("http://4bcc0e78.ngrok.io/budynek2/U_b?timestamp_begin=1999-01-07&timestamp_end=2019-12-30")
                .then(res => (this.history = res.data));

        }
    }
</script>

<style scoped>

</style>
