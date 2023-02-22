<script setup lang="ts">
import MainPage      from './components/MainPage.vue'
import { onMounted } from "vue";

const themeInit = () => {
  let theme = localStorage.getItem("theme")
  if (theme === null) {
    localStorage.setItem("theme", "light")
    theme = "light"
  }
  document.documentElement.setAttribute("data-theme", theme)
}

onMounted(() => {
  themeInit()

})
</script>

<template>
  <MainPage/>

  <div style="height: 100vh; background: rgba(0, 0, 0, 0.5)"></div>
  <div style="height: 200vh; background: var(--background-color); transition: 0.2s" id="abc"></div>
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
}

:root[data-theme="light"] {
  --navigator-bar-background-color: #ffffff;
  --background-color: #ffffff;
  --text-color: #1a1a1a;
  --shadow-color: #e5e5e5;
}

:root[data-theme="dark"] {
  --navigator-bar-background-color: #1D1D1D;
  --background-color: #282828;
  --text-color: #ffffff;
  --shadow-color: #2a2a2a;
}
</style>
