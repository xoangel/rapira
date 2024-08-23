<script setup lang="ts">
import { gsap } from "gsap";    
import { Flip } from "gsap/Flip";
import { onMounted, ref, Ref } from 'vue';
import { useRouter } from "vue-router";
gsap.registerPlugin(Flip);

const selection: Ref<Element | null> = ref(null);
const menuGroup: Ref<Element | null> = ref(null);
let selected: Element | undefined;
const router = useRouter();

onMounted(async ()=>{
    //Дожидаемся, пока роутер установит классы чтобы определить, где мы находимся
    await router.isReady();
    selected = menuGroup.value?.getElementsByClassName("router-link-active")[0];
    if(selected)(selected as any).appendChild(selection.value);
})

//Подсветка выбранного пункта меню
function setSelectedButton(event: Event){
    if(event.target && !(event.target as any).classList.contains("mg__highlight") && selected){
        const toContainer: EventTarget = event.target;
        const state = Flip.getState(selection.value);
        (toContainer as any).appendChild(selection.value);
        Flip.from(state, {
            duration: .5,
            ease: "power3.inOut",
            scale: true
        });
    }
}
</script>

<template>
    <div ref="menuGroup" class="menu_group">
        <router-link @click.stop = setSelectedButton($event) to="/main" class="menu_group__button"> Главная </router-link>
        <router-link @click.stop = setSelectedButton($event) to="/" class="menu_group__button"> 
            Блог 
        </router-link>
        <span ref="selection" class="mg__highlight"></span>
    </div>
</template>

<style scoped lang="scss">
@import "./style.scss";
</style>