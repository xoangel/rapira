<script setup lang="ts">
import DropdownButton from '../../shared/DropdownButton/DropdownButton.vue';
import TagButton from '../../shared/TagButton/TagButton.vue';
import { useArticleStore } from '../../app/store/useArticleStore';
import { Ref, ref } from 'vue';

const articleStore = useArticleStore();
const tagline: Ref<Element | null> = ref(null);
const showTagline: Ref<Array<string>> = ref([]);
const toggleFilter = (tag: string)=>articleStore.selectedTags.includes(tag) ? articleStore.selectedTags = articleStore.selectedTags.filter(item=>item!=tag) : articleStore.selectedTags.push(tag);

</script>

<template>
    <header class="header">
        <div class="header__top_group flex flex-wrap gap-10">
            <h1 class="flex-none">Блог</h1>
            <input class="flex-auto header__search" type="text" placeholder="Поиск">
            <div class="header__dropdown_group  flex gap-2 items-center">
                <Transition name="fade">
                    <span v-if="articleStore.selectedTags.length>0" @click="articleStore.selectedTags.length=0" class="header__dropdown_group__clear">Очистить</span>
                </Transition>
                <DropdownButton @click="()=>showTagline.length === 0 ? showTagline.push('1') : showTagline.pop()" :name="'Фильтры'"/>
            </div>
        </div>
        <el-collapse v-model="showTagline">
            <el-collapse-item name="1">
            <div ref="tagline" class="tagline flex flex-wrap gap-2">
                <TagButton @click="toggleFilter(tag)" v-for="tag in articleStore.tagList" :tag="tag" :key="tag" :active="true" /> 
            </div>
        </el-collapse-item>
        </el-collapse>
    </header>
</template>

<style scoped lang="scss">
@import "./style.scss";
</style>