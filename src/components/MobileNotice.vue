<script setup lang="ts">
import { onMounted, ref } from "vue";
import { configuration }  from "../types/configuration";

const confRef = ref(configuration)

onMounted(() => {

})
</script>

<template>
  <div id="mobile-notice" :data-theme="confRef.theme">
    <img id="mobile-notice-logo" src="/QQK-LOGO.svg">
    <div id="mobile-notice-title">{{ confRef.words.mobile_notice.title }}</div>
    <div class="mobile-notice-content" v-for="i in confRef.words.mobile_notice.content">{{ i }}</div>

    <div style="margin-top: 1rem">
      <a id="mobile-notice-link" href="https://github.com/QQKdeGit/QQKdeWebsite">
        <font-awesome-icon icon="fa-brands fa-github" style="margin-right: 6px"/>QQKdeWebsite
      </a>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "MobileNotice"
}
</script>

<style scoped>
#mobile-notice {
  background: var(--theme-color-linear-gradient);
  width: 100%;
  height: 100vh;
  text-align: center;
  font-size: 15px;
}

#mobile-notice[data-theme="dark"] {
  background: var(--theme-color-linear-gradient);
}

#mobile-notice-logo {
  width: 16em;
  height: 16em;
  margin-top: 3rem;
}

#mobile-notice-title {
  font-size: 2rem;
  font-weight: 600;
  margin-top: 2rem;
  color: var(--text-title-color);
}

.mobile-notice-content {
  margin-top: 1rem;
  color: var(--text-content-color);
}

#mobile-notice-link {
  margin-top: 1rem;
  font-size: 15px;
  color: var(--text-content-color);
  text-decoration: none;
}
</style>
