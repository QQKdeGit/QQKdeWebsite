<script setup>
import { onMounted, ref } from "vue";
import { configuration }  from "../types/configuration";
import ScrollReveal       from "scrollreveal";

const confRef = ref(configuration)

onMounted(() => {
  ScrollReveal().reveal('#about-me, #about-me-bar', {distance: '60px', origin: 'left', duration: 2000, delay: 300})
  ScrollReveal().reveal('#about-me-image', {distance: '60px', origin: 'left', duration: 2000, delay: 400})
  ScrollReveal().reveal('#about-me-introduction', {distance: '60px', origin: 'right', duration: 2000, delay: 400})
  ScrollReveal().reveal('.about-me-introduction-content', {distance: '60px', origin: 'right', duration: 2000, delay: 500, interval: 100})
})
</script>

<template>
  <div id="about">
    <div id="about-me">{{ confRef.words.about.meTitle }}</div>
    <div id="about-me-bar"></div>

    <div id="about-me-content">
      <div style="display: flex; margin: 0 auto 0; column-gap: 64px">
        <img id="about-me-image" src="/QQK-Transparent-540.png" alt="about me image">

        <div>
          <p id="about-me-introduction">{{ confRef.words.about.meIntroduction }}</p>
          <div class="about-me-introduction-content" v-for="i in confRef.words.about.meContent">
            <div class="about-me-introduction-content-row">
              <div class="about-me-introduction-content-icon"></div>
              <span>{{ i }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="about-web">{{ confRef.words.about.webTitle }}</div>
    <div id="about-web-bar"></div>
    <p id="about-web-content">
<!--      <p id="about-web-introduction">{{ confRef.words.about.webIntroduction }}</p>-->
      {{ confRef.words.about.webContent }}
    </p>
  </div>
</template>

<script>
export default {
  name: "About"
}
</script>

<style scoped>
#about {
  width: 100%;
  height: calc(100vh - 82px);
  background: var(--background-color);

  padding-top: 82px;
  transition: color 0.35s, background 0.2s;
  user-select: none;
  text-align: center;
}

#about-me,
#about-web {
  font-size: 32px;
  font-weight: 600;
  margin-top: 42px;
  color: var(--text-title-color);
}

#about-me-bar,
#about-web-bar {
  width: 64px;
  height: 4px;
  border-radius: 2px;
  margin: 12px auto 0;
}

#about-me-bar {
  background: var(--theme-color-linear-gradient);
}

#about-web-bar {
  background: var(--theme-color-linear-gradient2);
}

#about-me-content,
#about-web-content {
  font-size: 15px;
  margin: 32px auto 0;
  display: inline-block;
  color: var(--text-content-color);
}

#about-me-image,
#about-web-image {
  width: 260px;
  height: 260px;
  margin-right: 32px;
}

.about-me-introduction-content-row {
  display: flex;
  align-items: center;
}

.about-me-introduction-content-icon {
  width: 8px;
  height: 8px;
  min-width: 8px;
  min-height: 8px;
  border-radius: 50%;
  background: var(--theme-color-linear-gradient);
  display: inline-block;
  margin-right: 8px;
}

.about-me-introduction-content,
.about-web-introduction-content {
  text-align: left;
  margin: 20px;
}


</style>
