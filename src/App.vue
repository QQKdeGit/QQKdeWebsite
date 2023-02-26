<script setup lang="ts">
import MainPage           from './components/MainPage.vue'
import { ref } from "vue";
import { configuration }  from "./types/configuration";
import { Chinese }        from "./i18n/i18n";

const confRef = ref(configuration)

const themeInit = () => {
  let localTheme = localStorage.getItem("theme")

  if (localTheme === null) {
    let localHour = new Date().getHours()
    localStorage.setItem("theme", localHour >= 6 && localHour < 18? "light" : "dark")
  }
  else confRef.value.theme = localTheme

  document.documentElement.setAttribute("data-theme", confRef.value.theme)
}

const languageInit = () => {
  let localLanguage = localStorage.getItem("language")

  if (localLanguage === null) localStorage.setItem("language", "zh-CN")
  else confRef.value.language = localLanguage

  if (confRef.value.language === "zh-CN") confRef.value.words = Chinese
}

const timeInit = () => {
  let localHour = new Date().getHours()

  if (localHour >= 6 && localHour < 18 && confRef.value.theme === "dark") confRef.value.isWrongTheme = 1
  else if ((localHour >= 18 || localHour < 6) && confRef.value.theme === "light") confRef.value.isWrongTheme = 2
  else confRef.value.isWrongTheme = 0
}

themeInit()
languageInit()
timeInit()
</script>

<template>
  <MainPage/>

</template>

<style>
* {
  margin: 0;
  padding: 0;
}

:root {
  font-family: "PingFang SC", "Microsoft Yahei", "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;

  --theme-color-active: #9AD7FF;
  --theme-color: #45A6F7;
  --theme-color-linear-gradient: linear-gradient(135deg, #1488CC, #45A6F7, #6dd0fa, #8dc6f6);
}

:root[data-theme="light"] {
  --navigator-bar-background-color: #ffffff;
  --background-color: #ffffff;
  --text-color: #1a1a1a;
  --shadow-color: #e5e5e5;
  --navigator-bar-link-background-color: rgba(0, 0, 0, 0.05);
}

:root[data-theme="dark"] {
  --navigator-bar-background-color: #1D1D1D;
  --background-color: #282828;
  --text-color: #ffffff;
  --shadow-color: #2a2a2a;
  --navigator-bar-link-background-color: rgba(255, 255, 255, 0.1);
}
</style>
