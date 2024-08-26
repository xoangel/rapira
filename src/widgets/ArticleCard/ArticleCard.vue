<script setup lang="ts">
import Article from '../../app/types/typeArticle';
import TagParam from '../../shared/UI/TagParam/TagParam.vue';
import formatComments from '../../shared/lib/formatComments';
const props = defineProps<{
    articleData: Article
}>();
</script>

<template>
    <article class="article flex flex-col gap-y-2.5">
        <div class="article__cover">
            <img :src="props.articleData.cover" alt="" class="article__cover__image">
        </div>
        <div class="article__info flex items-center content-left gap-1">
            <p class="article__info__date caption">{{ props.articleData.date }}</p>
            <span class="grey_dot"></span>
            <div class="article__info__reading_time flex items-center gap-1">
                <img src="/watch.svg" alt="" class="article__info__icon">
                <p class="caption">{{ props.articleData.reading_time }} мин.</p>
            </div>
            <span class="grey_dot"></span>
            <div class="article__info__comments flex items-center gap-1">
                <img src="/comment.svg" alt="" class="article__info__icon">
                <p class="caption">{{ formatComments(articleData.comments.length)}} </p>
            </div>
        </div>
        <h2 class="article__title">{{ props.articleData.title }}</h2>
        <p class="article__teaser">{{ props.articleData.teaser }}</p>
        <div class="article__taglist flex flex-wrap gap-2">
            <TagParam v-for="tag in articleData.tags" :key="tag" :tag="tag" active />
        </div>
    </article>
</template>

<style scoped lang="scss">
@import "./style.scss";
</style>