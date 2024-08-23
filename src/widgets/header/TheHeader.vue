<script setup lang="ts">
import { computed } from "vue";
import MenuGroup from "./ui/MenuGroup/MenuGroup.vue";
import MenuIcon from "./ui/MenuIcon/MenuIcon.vue";

const isMobile = computed(() => window.matchMedia("(max-width: 640px)").matches);

</script>

<template>
    <nav>
        <MenuIcon v-if="isMobile"/>
        <img class="logo" src="/logo.svg" alt="logo">
        <MenuGroup />
    </nav>
</template>

<style scoped lang="scss">
@import "./style.scss";
</style>