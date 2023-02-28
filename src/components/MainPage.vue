<script setup lang="ts">
import NavigatorBar  from "./NavigatorBar.vue";
import TopBackground from "./TopBackground.vue";
import About         from "./About.vue";
import Education     from "./Education.vue";
</script>

<template>
  <div>
    <NavigatorBar/>

    <TopBackground/>

    <About/>

    <Education/>


  </div>
</template>

<script lang="ts">
export default {
  name: "MainPage"
}
</script>

<style scoped>

</style>
