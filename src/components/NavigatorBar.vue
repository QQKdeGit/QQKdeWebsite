<script setup lang="ts">
import { onMounted, ref }       from "vue";
import ThemeSwitch              from "./ThemeSwitch.vue";
import { NavigatorBarLinkItem } from "../type/navigatorBar";

let navigatorBarElement: HTMLElement | null;

const navigatorBarInit = () => {
  navigatorBarElement = document.getElementById("navigatorBar")

  if (window.scrollY / window.innerHeight < 0.85) {
    navigatorBarElement?.style.setProperty("background-color", 'transparent')
    navigatorBarElement?.style.setProperty("color", '#ffffff')
  }

  let navigatorLogoImage = document.getElementById("navigatorLogoImage")
  navigatorLogoImage?.setAttribute("src",
      document.documentElement.getAttribute("data-theme") === "light" || null ? "/QQK-LOGO.svg" : "/QQK-LOGO-Plain.svg")
}

const navigatorBarListen = () => {
  window.addEventListener("scroll", () => {
    if (window.scrollY / window.innerHeight > 0.85) {
      navigatorBarElement?.style.setProperty("box-shadow", "var(--shadow-color) 0 8px 20px")
      navigatorBarElement?.style.setProperty("background-color", "var(--navigator-bar-background-color)")
      navigatorBarElement?.style.setProperty("color", "var(--text-color)")
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
    element.scrollIntoView({behavior: "smooth"})
  }
}

onMounted(() => {
  navigatorBarInit()
  navigatorBarListen()

});

const navigatorBarLinkList: NavigatorBarLinkItem[] = [
  {name: "首页", id: "abc"},
  {name: "关于", id: "abc"},
  {name: "教育", id: "abc"},
  {name: "日志", id: "abc"},
];


</script>

<template>
  <div id="navigatorBar">
    <!--    <span id="navigatorLogoImage"></span>-->
    <!--    <span id="navigatorLogoText" @click="goElementById('abc')">QQK</span>-->

    <img id="navigatorLogoImage" src="/QQK-LOGO.svg" alt="logo image">

    <div id="navigatorBarLinkBox">
      <span class="navigatorBarLink" v-for="i in navigatorBarLinkList" :key="i.id" @click="goElementById(i.id)">
        {{ i.name }}
      </span>
    </div>

    <ThemeSwitch style="margin-right: 200px"/>
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
  font-size: 18px;
  font-weight: normal;
  cursor: pointer;

  transition: all 0.2s;

  display: inline-block;
  text-align: center;
  width: 96px;
  height: 48px;
  line-height: 48px;
}

.navigatorBarLink:hover {
  /*color: #9AD7FF;*/
  /*background-color: #304455;*/
}
</style>
