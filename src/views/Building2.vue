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
                        v-for="reading in history"
                        :key="reading.id"
                        :reading="reading"
                />
            </div>

        </div>
    </div>
</template>

<script>
    import EChart from "../components/EChart";
    import Measurement from "../components/Measurement";
    import axios from "axios"

    export default {
        name: "Building3",
        components: {
            appChart: EChart,
            appMeasurement: Measurement
        },
        data() {
            return {
                actual: null,
                history: null
            }
        },

        created() {
            axios.get("http://10.129.11.171:8080/actual")
                .then(res => (this.actual = res.data));
            axios.get("http://10.129.11.171:8080/last10Minutes")
                .then(res => (this.history = res.data));
        }
    }
</script>

<style scoped>

</style>
