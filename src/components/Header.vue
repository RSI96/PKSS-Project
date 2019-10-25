<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <router-link to="/" class="navbar-brand">AGH CH system</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <router-link to="/building1" class="nav-link"><a>Building B1</a></router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/building2" class="nav-link"><a>Building B2</a></router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/building3" class="nav-link"><a>Building B3</a></router-link>
                    </li>
                </ul>
                <strong class="navbar-text navbar-right">{{ new Date().toLocaleString() }}</strong>
            </div>
        </nav>
        <ul>
        </ul>
    </div>
</template>

<script>

    export default {
        name: "Header",
    }
</script>

<style scoped>
    .navbar-right {
        margin-right: 10px;
    }
</style>
