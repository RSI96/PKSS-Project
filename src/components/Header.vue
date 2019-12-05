<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <router-link to="/" class="navbar-brand">System CO AGH</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <router-link to="/outside" class="nav-link"><a>Zewnętrzne</a></router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/building1" class="nav-link"><a>Budynek 1</a></router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/building2" class="nav-link"><a>Budynek 2</a></router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/building3" class="nav-link"><a>Budynek 3</a></router-link>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <button
                            class="btn btn-outline-primary my-2 my-sm-0"
                            type="button"
                            @click="downloadData"
                    >Download data
                    </button>
                </form>
            </div>
        </nav>

    </div>
</template>

<script>
    export default {
        name: "Header",
        methods: {
            downloadData() {
                this.$store.dispatch('downloadData')
                this.$store.dispatch('downloadDataO')
            }
        }
    }
</script>

<style scoped>
    .navbar-right {
        margin-right: 10px;
    }
</style>
