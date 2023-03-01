<script setup lang="ts">
import NavigatorBar  from "./NavigatorBar.vue";
import TopBackground from "./TopBackground.vue";
import About         from "./About.vue";
import Education     from "./Education.vue";
import Contact       from "./Contact.vue";

//TODO: 增加移动端适配
</script>

<template>
  <div>
    <NavigatorBar/>

    <TopBackground/>

    <About/>

    <Education/>

    <Contact/>
  </div>
</template>

<script lang="ts">
export default {
  name: "MainPage"
}
</script>

<style scoped>

</style>
