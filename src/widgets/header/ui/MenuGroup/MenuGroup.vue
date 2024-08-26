<script setup lang="ts">
import { gsap } from "gsap";    
import { Flip } from "gsap/Flip";
import { onMounted, ref, Ref } from 'vue';
import { useRoute, useRouter } from "vue-router";
gsap.registerPlugin(Flip);

const selection: Ref<Element | null> = ref(null);
const menuGroup: Ref<Element | null> = ref(null);
let selected: Element | undefined;
const router = useRouter();
const route = useRoute();

onMounted(async ()=>{
    (selection.value as any).style.display = "block";
    await router.isReady();
    selected = menuGroup.value?.getElementsByClassName("router-link-active")[0];
    if(selected)(selected as any).appendChild(selection.value); else {
        const baseRoute = `/${route.path.split('/')[1]}`;
        const links = (menuGroup.value as Element).getElementsByTagName('a');
  
        for (let link of links) {
            if (link.getAttribute('href') === baseRoute) {
                link?.appendChild((selection.value as any));
                return;
            }
        }
        (selection.value as any).style.display = "none";
    }
})

function setSelectedButton(event: Event){
    (selection.value as any).style.display = "block";
    if(event.target && !(event.target as any).classList.contains("mg__highlight")){
        console.log("nakj")
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
    <nav ref="menuGroup" class="menu_group">
        <router-link @click.stop = setSelectedButton($event) to="/" class="menu_group__button" > Главная </router-link>
        <router-link @click.stop = setSelectedButton($event) to="/blog" class="menu_group__button"> 
            Блог 
        </router-link>
        <span ref="selection" class="mg__highlight"></span>
    </nav>
</template>

<style scoped lang="scss">
@import "./style.scss";
</style>