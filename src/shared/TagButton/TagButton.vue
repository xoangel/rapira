<script setup lang="ts">
import { computed, Ref, ref, watch } from 'vue';
import CheckIcon from '../CheckIcon/CheckIcon.vue';
import { useArticleStore } from '../../app/store/useArticleStore';
const props = defineProps({
    tag: String,
    active: Boolean
})

const tag: Ref<Element | null> = ref(null);
const checkIcon: Ref<Element | null> = ref(null);
const articleStore = useArticleStore();
const isSelected = computed(()=>articleStore.selectedTags.includes((props.tag as string)))

function checkTag(){
    //if(tag.value && checkIcon.value && props.tag){
        //tag.value.classList.toggle("checked");
        //(checkIcon.value as any).check();
        // articleStore.selectedTags.includes(props.tag) ? articleStore.selectedTags = articleStore.selectedTags.filter(item=>item!=props.tag) : articleStore.selectedTags.push(props.tag);
    //}
}

watch(isSelected, ()=>(checkIcon.value as any).check())

</script>

<template>
    <button ref="tag" @click.stop.prevent="checkTag()" :class="`tag + ${isSelected ? 'checked' : ''}`">
        <p class="tag__name"> {{ props.tag }} </p>
        <CheckIcon ref="checkIcon"/>
    </button>
</template>

<style lang="scss">
@import "./style.scss";
</style>