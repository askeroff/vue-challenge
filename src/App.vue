<template>
    <div id="app" class="wrapper">
        <header>
            <h1>Aline App Challenge</h1>
            <div class="flex menu">
                <router-link to="/calc">Calculator</router-link>
                <router-link to="/">Websockets</router-link>
            </div>
        </header>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                message: "Hello, vue"
            };
        }
    };
</script>

<style>
    h1 {
        color: #1f1235;
    }

    h2,
    h3,
    h4 {
        color: #1b1425;
    }

    header {
        border-bottom: 4px solid #67568c;
    }

    .wrapper {
        max-width: 960px;
        margin: 0 auto;
    }

    .flex {
        display: flex;
        align-items: center;
    }

    .btn-primary {
        background: #ff6e6c;
        color: #1f1235;
        border: 1px solid #1f1235;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    .menu {
        padding: 10px 0;
    }

    .menu a {
        color: #1f1235;
        text-decoration: none;
        border-bottom: 2px solid #ff6e6c;
    }

    .menu a + a {
        margin-left: 10px;
    }

    .menu a:hover {
        border-bottom: 2px solid #67568c;
    }

    .input_fraction_wrapper {
        width: 60px;
        padding: 10px 0;
    }

    .input_fraction_wrapper + .input_fraction_wrapper {
        border-top: 2px solid #1f1235;
    }

    .input_fraction {
        width: 100%;
    }

    .select_wrapper {
        margin: 0 30px;
    }

    .select_wrapper select {
        width: 60px;
        outline: 0;
    }
</style>
