<script setup lang="ts">
import ArticleCard from '../../widgets/ArticleCard/ArticleCard.vue';
import { useArticleStore } from '../../app/store/useArticleStore';
import { router } from '../../app/config/router';

const articleStore = useArticleStore();

function showArticle(id: number){
    router.push(`/article/${id}`);
}
</script>

<template>
    <main class="scrollable_section"> 
        <div class="articles_list grid grid-cols-3	">
            <ArticleCard @click.stop="showArticle(article._id)" v-for="article in articleStore.articlesToDisplay" :key="article._id" :article-data="article"/>
            <div v-if="articleStore.articlesToDisplay.length===0" class="articles_list__not_found flex flex-col items-center gap-1.5">
                <img src="/search_list.svg" alt="not found">
                <p class="caption font-semibold text-center">Поиск не дал результатов</p>
                <p class="caption text-center">Повторите поиск или используйте фильтр для структуризации контента</p>
            </div>
        </div>
    </main>
</template>

<style scoped lang="scss">
    @import "./style.scss";
</style>