import { createRouter, createWebHistory } from "vue-router";
import IndexPage from "../../pages/IndexPage.vue";
import NotFound from "../../pages/NotFound.vue";
import ArticlePage from "../../pages/ArticlePage.vue";

export const router = createRouter({
    routes: [
        {
            path: "/",
            component: IndexPage,
        },
        {
            path: "/main",
            component: NotFound
        },
        {
            path: "/article/:id",
            component: ArticlePage,
            meta: { transition: "swipe" }
        }
    ],
    history: createWebHistory()
})