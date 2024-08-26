<script setup lang="ts">
import { onMounted, ref } from "vue";
import MenuGroup from "./ui/MenuGroup/MenuGroup.vue";
import MenuIcon from "./ui/MenuIcon/MenuIcon.vue";


const isMobile = ref(window.matchMedia("(max-width: 1100px)").matches);

onMounted(()=>{
    window.addEventListener('resize', ()=>{
        window.innerWidth <= 1100 ? isMobile.value = true : isMobile.value = false;
    })
})

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