<template>
    <div class="container">
        <div class="row">
            <app-measurement
                    v-for="reading in readings"
                    :key="reading.id"
                    :reading="reading"
            />
        </div>
        <div class="row">
            <div class="col-sm">
                <app-chart/>
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
        },
        computed: {
            readings() {
                return this.$store.getters.readings;
            }
        }
    }
</script>

<style scoped>

</style>
