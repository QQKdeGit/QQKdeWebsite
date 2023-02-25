<script setup lang="ts">
import { ref } from "vue";
import { configuration }     from "../type/navigatorBar";

const confRef = ref(configuration)

const themeSwitch = () => {
  confRef.value.theme = confRef.value.theme === "light"? "dark" : "light"
  document.documentElement.setAttribute("data-theme", confRef.value.theme)
  localStorage.setItem("theme", confRef.value.theme)
};
</script>

<template>
  <div id="theme-toggle-box" @click="themeSwitch" :data-theme="confRef.theme">
    <div id="sun-icon-wrapper">
      <font-awesome-icon icon="fa-solid fa-sun" id="sun-icon" :data-theme="confRef.theme"/>
    </div>
    <div id="theme-toggle-button" :data-theme="confRef.theme"></div>
    <div id="moon-icon-wrapper">
      <font-awesome-icon icon="fa-solid fa-moon" id="moon-icon" :data-theme="confRef.theme"/>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "ThemeSwitch",
}
</script>

<style scoped>
#theme-toggle-box {
  position: relative;
  cursor: pointer;

  height: 30px;
  width: 61px;
  border-radius: 28px;

  transition: all 0.2s;
}

#theme-toggle-box[data-theme="light"] {
  box-shadow: inset 0 0 0 2px #00000020;
}

#theme-toggle-box[data-theme="dark"] {
  box-shadow: inset 0 0 0 2px #4B4D4E;
}

#sun-icon-wrapper {
  position: absolute;
  transform: translate(8px, 4px);
  z-index: 0;
}

#moon-icon-wrapper {
  position: absolute;
  transform: translate(40px, 4px);
  z-index: 0;
}

#theme-toggle-button {
  position: absolute;
  transform: translate(6px, 5px);

  height: 20px;
  width: 20px;
  border-radius: 50%;

  transition: all 0.4s cubic-bezier(.26, 2, 0.46, 0.71);
  z-index: 1;
}

#theme-toggle-button[data-theme="light"] {
  background-color: #FFECCF;
  box-shadow: inset 0 0 0 3px #FFBB52;
  transform: translate(35px, 5px);
}

#theme-toggle-button[data-theme="dark"] {
  background-color: #9AD7FF;
  box-shadow: inset 0 0 0 3px #45A6F7;
  transform: translate(6px, 5px);
}

#sun-icon {
  font-size: 16px;
  color: #FFBB52;
  transition: 0.2s;
}

#sun-icon[data-theme="light"] {
  opacity: 1;
}

#sun-icon[data-theme="dark"] {
  opacity: 0;
}

#moon-icon {
  font-size: 16px;
  color: #45A6F7;
  transition: 0.2s;
}

#moon-icon[data-theme="light"] {
  opacity: 0;
}

#moon-icon[data-theme="dark"] {
  opacity: 1;
}
</style>
