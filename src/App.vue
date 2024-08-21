<script setup lang="ts">
import TheHeader from './widgets/header/TheHeader.vue';
</script>

<template>
  <TheHeader />
  <router-view v-slot="{ Component, route }">
    <transition :name="(route.meta.transition as string) || 'fade'">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style lang="scss">
@import "./assets/fadeTransition.scss";
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6, p, a, button, div, span{
    font-family: "Inter", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
  }

  h1{
    font-size: 32px;
  }

  h2{
    font-size: 24px;
  }

  p{
    font-size: 16px;
  }

  .caption{
    font-size: 14px;
    color: $light-grey-color;
  }

  a{
    text-decoration: none;
  }
</style>
