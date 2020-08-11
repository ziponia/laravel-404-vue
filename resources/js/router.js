import Vue from "vue";
import Router from "vue-router";
import Home from "./pages/Home";
import About from "./pages/about";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home
        },
        {
            path: "/about",
            name: "About",
            component: About
        }
    ]
});
