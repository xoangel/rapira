<script setup lang="ts">
import { computed, Ref, ref, watch } from 'vue';
import CheckIcon from '../CheckIcon/CheckIcon.vue';
import { useArticleStore } from '../../app/store/useArticleStore';
const props = defineProps({
    tag: String,
})

const checkIcon: Ref<Element | null> = ref(null);
const articleStore = useArticleStore();
const isSelected = computed(()=>articleStore.selectedTags.includes((props.tag as string)))

watch(isSelected, ()=>(checkIcon.value as any).check())

</script>

<template>
    <button :class="`tag ${isSelected ? 'checked' : ''}`">
        <p class="tag__name"> {{ props.tag }} </p>
        <CheckIcon ref="checkIcon"/>
    </button>
</template>

<style lang="scss">
@import "./style.scss";
</style>