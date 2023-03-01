<script setup lang="ts">
import {onMounted, ref} from "vue";
import {configuration} from "../types/configuration";
import ScrollReveal from "scrollreveal";

const confRef = ref(configuration)

onMounted(() => {
  console.log(confRef.value.isMobile)
})
</script>

<template>
  <div id="contact">
    <div>
      <div id="contact-title">{{ confRef.words.contact.title }}</div>
    </div>
    <div>
      <div id="contact-title-bar"></div>
    </div>

    <div id="contact-content-box">
      <div id="contact-content">或许我们可以一起做点什么？</div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Contact"
}
</script>

<style scoped>
#contact {
  width: 100%;
  height: calc(100vh - 82px);
  min-height: 900px;
  text-align: center;
  padding-top: 82px;

  background: var(--background-color);
  transition: background 0.2s;
  user-select: none;
}

#contact-title {
  font-size: 32px;
  font-weight: 600;
  margin-top: 42px;
  display: inline-block;
  color: var(--text-title-color);
  transition: color 0.35s;
}

#contact-title-bar {
  width: 64px;
  height: 4px;
  border-radius: 2px;
  background: var(--theme-color-linear-gradient);
  display: inline-block;
}

#contact-content-box {
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#contact-content {
  font-size: 15px;
  color: var(--text-content-color);
  transition: color 0.35s;
}
</style>
