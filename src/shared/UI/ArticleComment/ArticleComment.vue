<script setup lang="ts">
import { Comment } from '../../../app/types/typeArticle';
import formatCommentDate from '../../lib/formatCommentDate';

defineProps<{
    comment: Comment
}>()
</script>

<template>
    <div class="comment flex">
        <img :src=comment.user.photo alt="avatar" class="comment__avatar">
        <div class="comment__data flex flex-col">
            <h3 class="font-semibold">{{ comment.user.name }}</h3>
            <p>{{ comment.text }}</p>
            <p class="caption">{{ formatCommentDate(comment.date) }}</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "./style.scss";
</style>