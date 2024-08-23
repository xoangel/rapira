import { createRouter, createWebHistory } from "vue-router";
import IndexPage from "../../pages/IndexPage.vue";
import NotFound from "../../pages/NotFound.vue";

export const router = createRouter({
    routes: [
        {
            path: "/",
            component: IndexPage
        },
        {
            path: "/main",
            component: NotFound
        }
    ],
    history: createWebHistory()
})