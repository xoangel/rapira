<script setup lang="ts">
import TheHeader from './widgets/header/TheHeader.vue';
</script>

<template>
  <TheHeader />
  <router-view v-slot="{ Component, route }">
    <transition :name="(route.meta.transition as string) || 'fade'" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style lang="scss">
@tailwind base;
@tailwind components;
@tailwind utilities;

@import "./assets/fadeTransition.scss";
@import "./assets/swipeTransition.scss";
@import "./assets/staggerTransition.scss";
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
@import "./assets/global.scss";

</style>
