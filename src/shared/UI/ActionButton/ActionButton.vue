<script setup lang="ts">
defineProps({
    secondary: Boolean
})
</script>

<template>
<button :class="`action_button ${secondary ? 'secondary' : ''}`">
    <slot></slot>
</button>
</template>

<style scoped lang="scss">
.action_button{
    min-width: 120px;
    height: 38px;
    border-radius: 6px;
    padding: 0 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background-color: $blue-color;
    color: $white-color;

}

.action_button.secondary{
    background-color: $light-blue-color;
    color: $blue-color;
}
</style>