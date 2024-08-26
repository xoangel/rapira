<script setup lang="ts">
import { useArticleStore } from '../../../app/store/useArticleStore';
const props = defineProps({
    tag: String,
    active: Boolean
});

const articleStore = useArticleStore();
const addToFilters = () => articleStore.selectedTags.includes((props.tag as string)) ? articleStore.selectedTags = articleStore.selectedTags.filter(item=>item!=(props.tag as string)) : articleStore.selectedTags.push((props.tag as string));
</script>

<template>
    <button @click.stop="active ? addToFilters() : ''" :class="`inline_tag ${active ? 'active' : ''}`">
        <p class="inline_tag__name"> {{ props.tag }} </p>
    </button>
</template>

<style scoped lang="scss">
    .inline_tag{
    height: 26px;
    padding: 0 14px;
    display: flex;
    align-items: center;
    gap: 6px;
    background-color: $light-blue-color;
    border-radius: 24px;
    box-shadow: 0 0 36px #ffffff00;
    transition: all .3s ease-in-out;
    cursor: default;

        &__name{
            font-size: 14px;
            color: $blue-color;
            transition: all .3s ease-in-out;
        }

    }

    .inline_tag.active{
        cursor: pointer;
    }

    .inline_tag.active:hover{
        box-shadow: 0 0 36px #3E97FF75;
        transition: all .5s ease;
    }
</style>