<script setup lang="ts">
import { Ref, ref } from 'vue';

const props = defineProps({
    name: String
})

const arrow: Ref<Element | null>= ref(null)

const expandDropdown = () => arrow.value?.classList.toggle("expanded")
</script>

<template>
    <button @click.stop.prevent="expandDropdown()" class="dropdown_button" type="button">
        <p class="dropdown_button__name"> {{ props.name }} </p>
        <img ref="arrow" src="/arrow_down.svg" alt="arrow">
    </button>
</template>

<style lang="scss">
    .dropdown_button{
        outline: none;
        background: none;
        display: flex;
        gap: 4px;
        align-items: center;
        padding: 0 12px;

        p{
            color: $light-grey-color;
        }

        img{
            transform: rotate(0);
            transition: all .5s ease-in-out;
        }

        img.expanded{
            transform: rotate(180deg);
            transition: all .5s ease-in-out;
        }

    }


</style>