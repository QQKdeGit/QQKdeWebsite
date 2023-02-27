<script setup lang="ts">
import NavigatorBar  from "./NavigatorBar.vue";
import TopBackground from "./TopBackground.vue";
import About         from "./About.vue";
</script>

<template>
  <div>
    <NavigatorBar/>

    <TopBackground/>

    <About/>

    <div style="width: 100%; height: 100vh; background: var(--background-interval-color)" id="education"></div>
  </div>
</template>

<script lang="ts">
export default {
  name: "MainPage"
}
</script>

<style scoped>

</style>
