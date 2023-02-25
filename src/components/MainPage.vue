<script setup lang="ts">
import NavigatorBar from "./NavigatorBar.vue";

import ScrollReveal  from "scrollreveal";
import { onMounted } from "vue";
import TopBackground from "./TopBackground.vue";

onMounted(() => {
  ScrollReveal().reveal('#my-element', {distance: '100px', origin: 'left', duration: 1000})
})
</script>

<template>
  <NavigatorBar />

  <TopBackground />

  <div style="height: 1000px; width: 100%; background-color: var(--background-color); transition: all 0.25s"></div>
</template>

<script lang="ts">
export default {
  name: "MainPage"
}
</script>

<style scoped>

</style>
