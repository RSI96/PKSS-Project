<template>
    <div class="container">
        <div class="row">
            <div class="col-sm">
                <app-chart></app-chart>
            </div>
            <div class="col-sm">
                <app-measurement></app-measurement>
            </div>
        </div>
        <div class="row">
            <div class="col-sm">
                <app-measurement></app-measurement>
            </div>
            <div class="col-sm">
                <app-measurement></app-measurement>
            </div>
        </div>
    </div>
</template>

<script>
    import EChart from "../components/EChart";
    import Measurement from "../components/Measurement";

    export default {
        name: "Building3",
        components: {
            appChart: EChart,
            appMeasurement: Measurement
        }
    }
</script>

<style scoped>

</style>
