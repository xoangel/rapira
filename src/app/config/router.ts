import { createRouter, createWebHistory } from "vue-router";
import IndexPage from "../../pages/IndexPage.vue";
import NotFound from "../../pages/NotFound.vue";
import ArticlePage from "../../pages/ArticlePage.vue";

export const router = createRouter({
    routes: [
        {
            path: "/blog",
            component: IndexPage,
        },
        {
            path: "/",
            component: NotFound
        },
        {
            path: "/blog/article/:id",
            component: ArticlePage,
            //meta: { transition: "swipe" }
        },
        {
            path: '/:pathMatch(.*)*', // Обработчик для всех несуществующих маршрутов
            component: NotFound,
        },
    ],
    history: createWebHistory()
})