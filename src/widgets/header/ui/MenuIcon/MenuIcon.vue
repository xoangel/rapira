<script setup lang="ts">
    function openMenu(){
        document.body.classList.toggle("mobile_menu")
    }
</script>


<template>
    <div @click="openMenu()" class="mobile_menu_icon">
        <span class="mobile_menu_icon__line mobile_menu_icon__line-highlighted"></span>
        <span class="mobile_menu_icon__line"></span>
        <span class="mobile_menu_icon__line"></span>
    </div>
</template>

<style lang="scss">
@import "./style.scss"; 
</style>