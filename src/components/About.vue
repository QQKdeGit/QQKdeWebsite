<script setup lang="ts">
import { onMounted, ref } from "vue";
import { configuration }  from "../types/configuration";
import ScrollReveal       from "scrollreveal";

const confRef = ref(configuration)

onMounted(() => {
  ScrollReveal().reveal('#about-me, #about-me-bar', {
    distance: '60px', origin: 'left', duration: 2000, delay: 300, beforeReveal() {
      let aboutElement = document.getElementById('about')
      if (aboutElement) aboutElement.style.setProperty('opacity', '1')
    }
  })

  ScrollReveal().reveal('#about-me-image', {distance: '60px', origin: 'left', duration: 2000, delay: 400})
  ScrollReveal().reveal('#about-me-introduction', {distance: '60px', origin: 'right', duration: 2000, delay: 400})

  ScrollReveal().reveal('.about-me-introduction-content', {
    distance: '60px',
    origin: 'right',
    duration: 2000,
    delay: 500,
    interval: 80
  })

  ScrollReveal().reveal('#about-web, #about-web-bar', {distance: '60px', origin: 'left', duration: 2000, delay: 300})
  ScrollReveal().reveal('.about-web-introduction-content', {
    distance: '60px',
    origin: 'right',
    duration: 2000,
    delay: 400,
    interval: 80
  })

  ScrollReveal().reveal('#about-link-box', {distance: '60px', origin: 'right', duration: 2000, delay: 880})
})
</script>

<template>
  <div id="about">
    <div id="about-me">{{ confRef.words.about.meTitle }}</div>
    <div id="about-me-bar"></div>

    <div id="about-me-content">
      <img id="about-me-image" src="/QQK-Transparent-540.png" alt="about me image">

      <div>
        <p id="about-me-introduction">{{ confRef.words.about.meIntroduction }}</p>
        <div class="about-me-introduction-content" v-for="i in confRef.words.about.meContent">
          <div class="about-me-introduction-content-dot"/>
          {{ i }}
        </div>
      </div>
    </div>

    <div id="about-web">{{ confRef.words.about.webTitle }}</div>
    <div id="about-web-bar"></div>

    <div id="about-web-content">
      <div class="about-web-introduction-content" v-for="i in confRef.words.about.webContent">{{ i }}</div>
    </div>

    <div id="about-link-box">
      <a id="about-link" href="https://github.com/QQKdeGit/QQKdeWebsite">
        <font-awesome-icon icon="fa-brands fa-github" style="margin-right: 0.5em"/>QQKdeWebsite
      </a>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "About"
}
</script>

<style scoped>
#about {
  width: 100%;
  height: calc(100vh - 82px);
  min-height: 900px;
  background: var(--background-color);

  padding-top: 82px;
  transition: color 0.35s, background 0.2s;
  user-select: none;

  text-align: center;
  opacity: 0;
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
  display: inline-block;
}

#about-me-bar {
  background: var(--theme-color-linear-gradient);
}

#about-web-bar {
  background: var(--theme-color-linear-gradient2);
}

#about-me-content {
  font-size: 15px;
  color: var(--text-content-color);
  margin-bottom: 32px;

  display: flex;
  justify-content: center;
  column-gap: 64px;
}

#about-web-content {
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

.about-me-introduction-content-dot {
  width: 8px;
  height: 8px;
  min-width: 8px;
  min-height: 8px;

  border-radius: 50%;
  background: var(--theme-color-linear-gradient);
  display: inline-block;
  margin-right: 8px;
}

.about-me-introduction-content {
  display: flex;
  align-items: center;
  text-align: left;
  margin-top: 20px;
}

.about-web-introduction-content {
  font-size: 15px;
  margin-top: 20px;
}

#about-link-box {
  margin-top: 20px;
}

#about-link {
  font-size: 15px;
  color: var(--text-content-color);
  padding: 24px 32px;
  text-decoration: none;
}
</style>
