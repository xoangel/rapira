<script setup lang="ts">
import { ref } from "vue";
import MenuGroup from "./ui/MenuGroup/MenuGroup.vue";
import MenuIcon from "./ui/MenuIcon/MenuIcon.vue";

const isMobile = ref(window.matchMedia("(max-width: 1100px)").matches);

</script>

<template>
    <nav class="nav">
        <MenuIcon v-if="isMobile"/>
        <img class="logo" src="/logo.svg" alt="logo">
        <MenuGroup />
    </nav>
</template>

<style scoped lang="scss">
@import "./style.scss";
</style>