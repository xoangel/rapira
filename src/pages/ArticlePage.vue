<script setup lang="ts">
import formatComments from '../shared/lib/formatComments';
import TagParam from '../shared/UI/TagParam/TagParam.vue';
import ActionButton from '../shared/UI/ActionButton/ActionButton.vue';
import { useRoute } from 'vue-router';
import { useArticleStore } from '../app/store/useArticleStore';
import { computed, nextTick, Ref, ref, watch } from 'vue';
import ArticleComment from '../shared/UI/ArticleComment/ArticleComment.vue';

const route = useRoute();
const articleStore = useArticleStore();
const articleContainer: Ref<Element | null> = ref(null);
const commentString: Ref<string> = ref("");
const commentsContainer: Ref<Element | null> = ref(null);
const commentInput: Ref<Element | null> = ref(null);
const articleData = articleStore.getAtricle(parseInt((route.params.id as string)));
const toggleCommentView = computed(() => commentString.value.length > 0);

watch(toggleCommentView, () => scrollToForm())

async function scrollToForm() {

    const offsetTop = getOffsetSum(document.getElementsByClassName("article__comments")[0]);
    if (offsetTop.top + window.innerHeight/2 > document.body.offsetHeight) {
        await nextTick();
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth', 
        });
        return;
    }

    window.scrollTo({
        top: offsetTop.top,
        behavior: 'smooth', 
    })
}

function getOffsetSum(elem: any) {
    let top = 0,
        left = 0
    while (elem) {
        top = top + parseFloat(elem.offsetTop);
        left = left + parseFloat(elem.offsetLeft);
        elem = elem.offsetParent;
    }

    return { top: Math.round(top), left: Math.round(left) }
}

const goBack = ()=>window.history.go(-1);

</script>

<template>
    <main class="article_page">
        <div ref="articleContainer" class="article_page__content">
            <Transition name="fade">
                <div v-if="articleData" class="article flex flex-col gap-y-2.5">
                    <div class="article__header_container flex items-start justify-between">
                        <h2 class="article__title">{{ articleData.title }}</h2>
                        <img class="article__close" @click="goBack()" src="/close.svg" alt="close icon">
                    </div>
                    <div class="article__info flex items-center content-left gap-2.5">
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
                        <TagParam v-for="tag in articleData.tags" :key="tag" :tag="tag" :active="false"/>
                    </div>
                    <div ref="commentsContainer" class="article__comments flex flex-col gap-2">
                        <div class="flex gap-1">
                            <h3 class="font-semibold">Комментариев</h3>
                            <h3 class="font-semibold comments__count">{{ articleData.comments.length }}</h3>
                        </div>
                        <el-input ref="commentInput" v-model=commentString type="textarea"
                            placeholder="Текст комментария" maxlength="250" show-word-limit
                            :rows="toggleCommentView ? 5 : 1" clearable></el-input>
                        <Transition name="stagger">
                            <div v-show="toggleCommentView" class="article__comments__buttons flex justify-end gap-2">
                                <ActionButton secondary @click="()=>commentString = ''">Отмена</ActionButton>
                                <ActionButton>Опубликовать</ActionButton>
                            </div>
                        </Transition>
                        <div class="article__comment_list flex flex-col">
                            <ArticleComment v-for="comment in articleData.comments" :key="comment._id" :comment="comment" />
                        </div>
                    </div>
                </div>
                <h1 v-else>Упс, тут ничего нет...</h1>
            </Transition>
        </div>
    </main>
</template>

<style scoped lang="scss">
.article_page {
    width: 100%;
    min-height: calc(100svh - $header-height);
    box-shadow: 0 0 8px #3a3a3b25;
    padding: 15px;

    &__content {
        background-color: $white-color;
        width: 630px;
        padding: 15px;
        // padding-bottom: 500px;
        margin: auto;
        border-radius: 12px;
        box-shadow: 0 0 8px #3a3a3b25;
        height: fit-content;
        transition: height .5s ease-in-out;
        position: relative;
    }

}

.article__close{
    cursor: pointer;
}

.article_page .article {
    &__comments :deep(textarea) {
        transition: height .3s ease-in-out;
    }
}

.comments__count {
    color: $dark-grey-color;
}

@media screen and (max-width: 768px) {
    .article_page{
        &__content{
            width: 100%;
        }
    }
}

@media screen and (max-width: 640px) {
    .article__info p{
        font-size: 12px;
    }

    .article__info img{
        width: 16px;
    }
}

</style>