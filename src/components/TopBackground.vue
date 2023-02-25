<script setup lang="ts">
import { ref }           from "vue";
import { configuration } from "../type/navigatorBar";

const themeRef = ref(configuration)

</script>

<template>
  <div id="top-background">
    <div id="overlay" :data-theme="themeRef.theme">

    </div>
  </div>

</template>

<script lang="ts">
export default {
  name: "TopBackground"
}
</script>

<style scoped>
#top-background {
  height: 100vh;
  width: 100%;

  background: radial-gradient(rgba(245, 228, 212, 0.25) 4%,
  rgba(255, 255, 255, 0) calc(4% + 1px)),
  radial-gradient(circle at 76% 40%, #fef6ec 4%, rgba(255, 255, 255, 0) 4.18%),
  linear-gradient(135deg, #ff0000 0%, #000036 100%),
  radial-gradient(ellipse at 28% 0%, #ffcfac 0%, rgba(98, 149, 144, 0.5) 100%),
  linear-gradient(180deg, #cd6e8a 0%, #f5eab0 69%, #d6c8a2 70%, #a2758d 100%);

  background-blend-mode: normal, normal, screen, overlay, normal;

  /*transition: background 0s;*/
}

#overlay {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  transition: all 0.25s ease-in-out;
  pointer-events: none;
  z-index: 1;
}

#overlay[data-theme="light"] {
  background-color: transparent;
}

#overlay[data-theme="dark"] {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
