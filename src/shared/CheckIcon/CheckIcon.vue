<script setup lang="ts">
    import { Ref, ref} from 'vue';
    const checkIcon:Ref<Element | null> = ref(null) 
    const check = () => checkIcon.value ? checkIcon.value.classList.toggle("check_active"): "";
    defineExpose({
        check
    })
</script>

<template>
    <div @click="$emit('check')" ref="checkIcon" class="check_icon">
        <span class="check_icon__line"></span>
        <span class="check_icon__line"></span>
    </div>
</template>

<style scoped lang="scss">
    
    .check_icon{
        width: 13px;
        aspect-ratio: 1;
        position: relative;

            &__line{
                position: absolute;
                background-color: $blue-color;
                left: 0;
                border-radius: 2px;
            }

            &__line:nth-child(1){
                width: 100%;
                height: 2px;
                top: 44%;
                transform: rotate(0deg);
                transition: all .3s ease-in-out;
            }

            &__line:nth-child(2){
                width: 2px;
                height: 100%;
                left: 43%;
                transform: rotate(0deg);
                transition: all .3s ease-in-out;
            }
        }

    .check_active .check_icon__line:nth-child(1){
        top: 44%;
        width: 50%;
        transform: rotate(45deg);
        left: -17%;
        background-color: $white-color;
        transition: all .3s ease-in-out;
    }

    .check_active .check_icon__line:nth-child(2){
        background-color: $white-color;
        left: 45%;
        transform: rotate(45deg);
        transition: all .3s ease-in-out;
    }

</style>