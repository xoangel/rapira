import { createApp } from 'vue'
import { router } from './app/config/router'
import App from './App.vue'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import { createPinia } from 'pinia'

const pinia = createPinia();

createApp(App)
    .use(pinia)
    .use(router)
    .use(ElementPlus)
    .mount('#app')
