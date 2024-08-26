<script setup lang="ts">
import { computed } from 'vue';
import { useArticleStore } from '../../../app/store/useArticleStore';
const props = defineProps({
    tag: {
        type: String,
        required: true
    },
})

const articleStore = useArticleStore();
const isChecked = computed(()=>articleStore.selectedTags.includes(props.tag))
const isSelected = computed(()=>articleStore.selectedTags.includes((props.tag as string)))


</script>

<template>
    <button :class="`tag ${isSelected ? 'checked' : ''}`">
        <p class="tag__name"> {{ props.tag }} </p>
         <div class="tag__icon">
            <Transition name="fade">
                <img v-if="!isChecked" src="/plus.svg" alt="" class="tag__plus">
                <img v-else src="/check.svg" alt="" class="tag__checked">
            </Transition>
         </div>
    </button>
</template>

<style lang="scss">
@import "./style.scss";
</style>