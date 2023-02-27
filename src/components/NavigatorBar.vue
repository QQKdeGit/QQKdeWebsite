<script setup lang="ts">
import { onMounted, ref }       from "vue";
import ThemeSwitch              from "./ThemeSwitch.vue";
import { configuration }        from "../types/configuration";

const confRef = ref(configuration)

let navigatorBarElement: HTMLElement | null;

const navigatorBarInit = () => {
  navigatorBarElement = document.getElementById("navigatorBar")

  if (window.scrollY / window.innerHeight < 0.85) {
    navigatorBarElement?.style.setProperty("box-shadow", "transparent 0 8px 20px")
    navigatorBarElement?.style.setProperty("background-color", 'transparent')
    navigatorBarElement?.style.setProperty("color", '#ffffff')
  } else {
    navigatorBarElement?.style.setProperty("box-shadow", "var(--shadow-color) 0 8px 20px")
    navigatorBarElement?.style.setProperty("background-color", "var(--navigator-bar-background-color)")
    navigatorBarElement?.style.setProperty("color", "var(--text-color)")
  }
}

const navigatorBarListen = () => {
  window.addEventListener("scroll", () => {
    if (window.scrollY / window.innerHeight > 0.85) {
      navigatorBarElement?.style.setProperty("box-shadow", "var(--shadow-color) 0 8px 20px")
      navigatorBarElement?.style.setProperty("background-color", "var(--navigator-bar-background-color)")
      navigatorBarElement?.style.setProperty("color", "var(--text-title-color)")
    } else {
      navigatorBarElement?.style.setProperty("background-color", 'transparent')
      navigatorBarElement?.style.setProperty("color", '#ffffff')
      navigatorBarElement?.style.setProperty("box-shadow", "transparent 0 8px 20px")
    }
  })
}

const goElementById = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({behavior: "smooth"} || 'smooth')
  }
}

onMounted(() => {
  navigatorBarInit()
  navigatorBarListen()
});

const navigatorBarLinkMap = ref<{ [key: string]: string }>({
  [confRef.value.words.navigator_bar.home]: "top-background",
  [confRef.value.words.navigator_bar.about]: "about",
  [confRef.value.words.navigator_bar.education]: "education",
  [confRef.value.words.navigator_bar.log]: "abc",
})
</script>

<template>
  <div id="navigatorBar">
    <!--    <span id="navigatorLogoImage"></span>-->
    <!--    <span id="navigatorLogoText" @click="goElementById('abc')">QQK</span>-->

    <img id="navigatorLogoImage" :src="confRef.theme === 'light' ? '/QQK-LOGO.svg' : 'QQK-LOGO-Plain.svg'"
         alt="logo image">


    <div id="navigatorBarLinkBox">
      <span class="navigatorBarLink" v-for="i in confRef.words.navigator_bar" :key="navigatorBarLinkMap[i]"
            @click="goElementById(navigatorBarLinkMap[i])">
        {{ i }}
      </span>
    </div>

    <ThemeSwitch style="margin-right: 160px"/>
  </div>
</template>

<script lang="ts">
export default {
  name: "NavigatorBar"
}
</script>

<style scoped>
#navigatorBar {
  display: flex;
  align-items: center;

  width: 100vw;
  height: 82px;

  box-shadow: transparent 0 8px 20px;

  position: fixed;
  top: 0;

  transition: box-shadow 0.2s, background-color 0.2s;
  z-index: 2;
}

#navigatorLogoImage {
  width: 64px;
  height: 64px;
  margin-left: 200px;
  user-select: none;
  -webkit-user-drag: none;
}

#navigatorLogoText {
  font-family: 上首至尊书法体, sans-serif;
  font-size: 32px;
  font-weight: 600;
  margin-left: 16px;
}

#navigatorBarLinkBox {
  margin-left: auto;
  margin-right: 48px;
  white-space: nowrap;
}

.navigatorBarLink {
  font-size: 16px;
  font-weight: normal;
  cursor: pointer;
  transition: all 0.2s, color 0s;
  display: inline-block;
  position: relative;
  text-align: center;
  padding: 0 28px;
  margin: 0 6px;
  height: 48px;
  line-height: 48px;
  border-radius: 6px;
  user-select: none;
}

.navigatorBarLink:hover {
  background-color: var(--navigator-bar-link-background-color);
}

.navigatorBarLink::before {
  content: '';
  position: absolute;
  left: 15%;
  bottom: 4px;

  width: 0;
  height: 4px;
  border-radius: 2px;
  transition: all 0.4s;
}

.navigatorBarLink:hover::before {
  width: 70%;
  background: var(--theme-color-linear-gradient);
}
</style>
