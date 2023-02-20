<script setup lang="ts">
import { onMounted, ref } from "vue";

let navigatorBarElement: HTMLElement | null
const navigatorBarSwitch = () => {
  let lastPe: number

  window.addEventListener("scroll", () => {
    let pe = window.scrollY / window.innerHeight

    if (pe > 1) pe = 1
    if (lastPe === pe) return
    lastPe = pe

    if (pe > 0.85) {
      navigatorBarElement?.style.setProperty("--bg-color",
          `rgba(${255 * Math.pow(pe, 0.33)}, ${255 * Math.pow(pe, 0.33)}, ${255 * Math.pow(pe, 0.26)}, ${pe * 8})`)
      navigatorBarElement?.style.setProperty("--text-color",
          `rgb(${255 * (1 - pe)}, ${255 * (1 - pe)}, ${255 * (1 - pe)})`)
      navigatorBarElement?.classList.add("navigatorBar-shadow")
    } else {
      navigatorBarElement?.style.setProperty("--bg-color", 'transparent')
      navigatorBarElement?.style.setProperty("--text-color", '#ffffff')
      navigatorBarElement?.classList.remove("navigatorBar-shadow")
    }
  })
}

const goElementById = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
  }
}

onMounted(() => {
  navigatorBarElement = document.getElementById("navigatorBar")
  navigatorBarSwitch()
});



const test = () => {
  console.log(navigatorBarElement);
};
</script>

<template>
  <div id="navigatorBar">
    <div style="display: flex; align-items: center; height: 82px">
      <span id="navLogoImage"></span>
      <span id="navLogoText" @click="goElementById('abc')">QQK</span>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "NavigatorBar"
}
</script>

<style scoped>
#navigatorBar {
  --text-color: #ffffff;
  --bg-color: transparent;

  width: 100vw;
  height: 82px;
  background: var(--bg-color);
  color: var(--text-color);

  transition: all 0.25s;

  position: fixed;
  top: 0;
}

.navigatorBar-shadow {
  box-shadow: rgba(149, 157, 165, 0.2) 0 16px 24px;
}

#navLogoImage {
  width: 64px;
  height: 64px;
  background: url("/test.svg") center;
  background-size: cover;
  margin-top: -4px;
  /*background-color: #304455;*/
  margin-left: 200px;
}

#navLogoText {
  /*font-family: , sans-serif;*/
  font-size: 32px;
  font-weight: 600;
  margin-left: 16px;
}
</style>
