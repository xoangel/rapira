<script setup lang="ts">
import formatComments from '../widgets/ArticleCard/lib/formatComments';
import TagParam from '../shared/TagParam/TagParam.vue';
import { useRoute } from 'vue-router';
import { useArticleStore } from '../app/store/useArticleStore';

const route = useRoute();
const articleStore = useArticleStore();
console.log(route.params)
const articleData = articleStore.getAtricle(parseInt((route.params.id as string)));
</script>

<template>
    <section class="article_page">
        <div class="article_page__content">
            <Transition name="fade">
                <div v-if="articleData" class="article flex flex-col gap-y-2.5">
                <h2 class="article__title">{{ articleData.title }}</h2>
                <div class="article__info flex items-center content-left gap-1">
                    <p class="article__info__date caption">{{ articleData.date }}</p>
                    <span class="grey_dot"></span>
                    <div class="article__info__reading_time flex items-center gap-1">
                        <img src="/watch.svg" alt="" class="article__info__icon">
                        <p class="caption">{{ articleData.reading_time }} мин.</p>
                    </div>
                    <span class="grey_dot"></span>
                    <div class="article__info__comments flex items-center gap-1">
                        <img src="/comment.svg" alt="" class="article__info__icon">
                        <p class="caption">{{ formatComments(articleData.comments.length) }} </p>
                    </div>
                </div>
                <div class="article__cover">
                    <img :src="articleData.cover" alt="" class="article__cover__image">
                </div>
                <p class="article__teaser">{{ articleData.text }}</p>
                <div class="article__taglist flex flex-wrap gap-2">
                    <TagParam v-for="tag in articleData.tags" :key="tag" :tag="tag" />
                </div>
                </div>
                <h1 v-else>Упс, тут ничего нет...</h1>
            </Transition>
        </div>
    </section>
</template>

<style scoped lang="scss">
.article_page {
    width: 100%;
    height: 100%;
    box-shadow: 0 0 8px #3a3a3b25;
    padding: 15px;

    &__content {
        background-color: $white-color;
        width: 630px;
        padding: 15px;
        margin: auto;
        border-radius: 12px;
        box-shadow: 0 0 8px #3a3a3b25;
    }
}
</style>