<script setup lang="ts">
import NavigatorBar  from "../components/NavigatorBar.vue";
import TopBackground from "../components/TopBackground.vue";
import About         from "../components/About.vue";
import Education     from "../components/Education.vue";
import Contact       from "../components/Contact.vue";

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
