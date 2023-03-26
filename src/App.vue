<script setup lang="ts">
import MainPage     from './pages/MainPage.vue'
import MobileNotice from './components/MobileNotice.vue'
import { ref } from "vue";
import { configuration }    from "./types/configuration";
import { Chinese, English } from "./i18n/i18n";

const confRef = ref(configuration)

const themeInit = () => {
  let localTheme = localStorage.getItem("theme")

  if (localTheme === null) {
    let localHour = new Date().getHours()
    localStorage.setItem("theme", localHour >= 6 && localHour < 18? "light" : "dark")

    console.log(localHour)
  }
  else confRef.value.theme = localTheme




  document.documentElement.setAttribute("data-theme", confRef.value.theme)
}

const languageInit = () => {
  confRef.value.language = navigator.language.substring(0, 2)
  switch (confRef.value.language) {
    case "zh":
      confRef.value.words = Chinese
      break
    case "en":
      confRef.value.words = English
      break
  }
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
  <MainPage v-if="!confRef.isMobile"/>
  <MobileNotice v-else/>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}

:root {
  font-family: "PingFang SC", "Microsoft Yahei", "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
  overflow-x: hidden;

  --theme-color-active: #9AD7FF;
  --theme-color: #45A6F7;

  --theme-color-linear-gradient: linear-gradient(135deg, #4096ff, #45A6F7, #6dd0fa, #8dc6f6);
  --theme-color-linear-gradient2: linear-gradient(135deg, #ef713b, #f59059, #facf4f, #ffe259);
}

:root[data-theme="light"] {
  --navigator-bar-background-color: #ffffff;
  --background-color: #ffffff;
  --background-interval-color: #F9F9F9;
  --text-title-color: #333333;
  --text-content-color: #444444;
  --shadow-color: #eeeeee;
  --navigator-bar-link-background-color: rgba(0, 0, 0, 0.05);
  --theme-background-color-linear-gradient: linear-gradient(135deg, #4096ff, #45A6F7, #6dd0fa, #8dc6f6);
}

:root[data-theme="dark"] {
  --navigator-bar-background-color: #1D1D1D;
  --background-color: #282828;
  --background-interval-color: #1E1E1E;
  --text-title-color: #ffffff;
  --text-content-color: #ffffff;
  --shadow-color: #1c1c1c;
  --navigator-bar-link-background-color: rgba(255, 255, 255, 0.1);
  --theme-background-linear-gradient: linear-gradient(135deg, #000023, #0f133d, #151b6b, #0c3f72);
}
</style>
