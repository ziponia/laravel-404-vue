window.axios = axios;
require("./bootstrap");
import Vue from "vue";
import VueRouter from "vue-router";
import axios from "axios";
import VueAxios from "vue-axios";
import pagination from "laravel-vue-pagination";
Vue.component("pagination", pagination);
Vue.use(VueAxios, axios, VueRouter);
import router from "./router";
import App from "./components/App";
import Home from "./pages/Home";
window.app = new Vue({
    components: {
        App
    },
    router
}).$mount("#app");
