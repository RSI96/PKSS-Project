<template>
    <div class="col-sm-6 col-md-4 col-lg-4">
        <div class="panel">
            <div class="panel-heading">
                <h4 class="panel-title">
                    {{ reading.name }}
                </h4>
            </div>
            <div class="panel body">
                <h2>
                    {{ reading.value }}
                </h2>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Measurement",
        props: {
            reading: Object
        }
    }
</script>

<style scoped>
    .panel {
        background-color: #428bca;
        border-radius: 5px;
    }

    .panel-title {
        text-indent: 5px;
    }
</style>
