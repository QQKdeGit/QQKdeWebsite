<script setup lang="ts">
import NavigatorBar from "./NavigatorBar.vue";
import TopBackground from "./TopBackground.vue";
</script>

<template>
  <div>
    <NavigatorBar/>

    <TopBackground/>

    <div id="about" style="height: 100vh; width: 100%; background-color: var(--background-color); transition: all 0.25s">
      <!--    <h1>Hello World</h1>-->
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "MainPage"
}
</script>

<style scoped>

</style>
