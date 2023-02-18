<script setup lang="ts">
import { onMounted, ref } from "vue";

let headerElement: HTMLElement | null

const headerSwitch = () => {
  let lastPe: number

  window.addEventListener("scroll", () => {
    let pe = window.scrollY / window.innerHeight

    if (pe > 1) pe = 1
    if (lastPe === pe) return
    lastPe = pe

    if (pe > 0.85) {
      headerElement?.style.setProperty("--bg-color",
          `rgba(${255 * Math.pow(pe, 0.33)}, ${255 * Math.pow(pe, 0.33)}, ${255 * Math.pow(pe, 0.26)}, ${pe * 8})`)
      headerElement?.style.setProperty("--text-color",
          `rgb(${255 * (1 - pe)}, ${255 * (1 - pe)}, ${255 * (1 - pe)})`)
      headerElement?.classList.add("header-shadow")
    } else {
      headerElement?.style.setProperty("--bg-color", 'transparent')
      headerElement?.style.setProperty("--text-color", '#ffffff')
      headerElement?.classList.remove("header-shadow")
    }
  })
}

onMounted(() => {
  headerElement = document.getElementById("header")
  headerSwitch()
});

const test = () => {
  console.log(headerElement);
};
</script>

<template>
  <div id="header">
    <div>
      <el-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                style="width: 58px; height: 58px"/>
      <span>QQK</span>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "MainPage"
}
</script>

<style scoped>
#header {
  --text-color: #ffffff;
  --bg-color: transparent;

  width: 100vw;
  height: 80px;
  background: var(--bg-color);
  color: var(--text-color);

  transition: all 0.2s;

  position: fixed;
  top: 0;
}

.header-shadow {
  box-shadow: rgba(149, 157, 165, 0.2) 0 16px 24px;
}

</style>
