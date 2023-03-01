<script setup lang="ts">
import { onMounted, ref }   from "vue";
import { configuration }    from "../types/configuration";
import ScrollReveal         from "scrollreveal";
import { English, Chinese } from "../i18n/i18n";

const confRef = ref(configuration)

const goElementById = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({behavior: "smooth"} || 'smooth')
  }
}

const languageSwitch = () => {
  if (confRef.value.language === "zh") {
    confRef.value.words    = English
    confRef.value.language = "en"
  } else {
    confRef.value.words    = Chinese
    confRef.value.language = "zh"
  }
}

onMounted(() => {
  ScrollReveal().reveal('#top-background-logo', {
    distance: '60px', origin: 'bottom', duration: 1500, delay: 200, afterReveal: () => {
      let barElement = document.getElementById("top-background-bar")
      if (barElement) barElement.style.setProperty("width", "240px")

      let iconElement = document.getElementById("top-background-angle-down-icon")
      if (iconElement) iconElement.classList.add("top-background-angle-down-icon-animation")
    }
  })

  ScrollReveal().reveal('#top-background-title', {distance: '60px', origin: 'bottom', duration: 2000, delay: 300})

  ScrollReveal().reveal('.top-background-subtitle', {
    distance: '60px',
    origin: 'bottom',
    duration: 2000,
    delay: 400
  })

  ScrollReveal().reveal('#top-background-angle-down-text', {
    distance: '60px',
    origin: 'bottom',
    duration: 2000,
    delay: 500
  })
})
</script>

<template>
  <div id="top-background">
    <div id="top-background-sky" :data-theme="confRef.theme"></div>
    <div id="top-background-stars" :data-theme="confRef.theme"></div>

    <div id="top-background-content">
      <img id="top-background-logo" :src="confRef.theme === 'light' ? 'QQK-LOGO.svg' : 'QQK-LOGO-Plain.svg'"
           alt="top background logo">

      <div id="top-background-bar" :data-theme="confRef.theme"></div>

      <div id="top-background-title" :data-theme="confRef.theme" @click="languageSwitch">
        {{ confRef.words.top_background.title }}
      </div>

      <div class="top-background-subtitle" :data-theme="confRef.theme" v-if="confRef.isWrongTheme === 0">
        {{ confRef.words.top_background.subtitle }}
      </div>
      <div class="top-background-subtitle" :data-theme="confRef.theme" v-else-if="confRef.isWrongTheme === 1">
        {{ confRef.words.top_background.wrongDayTimeSubtitle }}
      </div>
      <div class="top-background-subtitle" :data-theme="confRef.theme" v-else>
        {{ confRef.words.top_background.wrongNightTimeSubtitle }}
      </div>

      <div id="top-background-angle-down-box" @click="goElementById('about')">
        <div id="top-background-angle-down-text">{{ confRef.words.top_background.explore }}</div>
        <font-awesome-icon id="top-background-angle-down-icon" icon="fa-solid fa-chevron-down"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "TopBackground"
}
</script>

<style scoped>
#top-background {
  height: 100vh;
  width: 100%;
  min-height: 900px;
}

#top-background-sky {
  position: absolute;
  width: 100%;
  height: 100%;
  min-height: 900px;

  background: linear-gradient(180deg, #000023, #0f133d, #151b6b, #2064af, #2F80ED, #56CCF2);
  background-size: 100% 300%;
  background-position: 0 90%;

  transform: translateZ(-100vmin);
  transition: all 1s;
}

#top-background-sky[data-theme="dark"] {
  background-position: 0 10%;
}

#top-background-stars {
  position: absolute;
  width: 100%;
  height: 200%;

  --s1: radial-gradient(0.1vmin 0.1vmin at 50% 50%, #ffffff, #fff0);
  --s2: radial-gradient(0.2vmin 0.2vmin at 50% 50%, #ffffff, #fff0);

  background-image: var(--s1), var(--s1), var(--s1), var(--s2), var(--s2), var(--s1), var(--s2), var(--s1), var(--s2), var(--s1), var(--s2), var(--s1), var(--s2), var(--s1), var(--s1), var(--s2), var(--s2), var(--s1), var(--s1), var(--s2), var(--s1), var(--s1);
  background-repeat: repeat-x;
  background-size: 26% 25%, 43.33% 33.33%, 50% 80%, 20% 20%, 33.33% 75.33%, 26% 73%, 39.33% 22%, 33.33% 26%, 31% 32%, 14.33% 35.33%, 18.33% 62.33%, 39.33% 86.33%, 29.33% 69%, 12.33% 30.33%, 29.33% 41.33%, 22.33% 46.33%, 35.33% 27.33%, 22.33% 39.33%, 20.33% 44.33%, 33.33% 56.33%;

  background-position: -8% -10%;

  transform: translateZ(-100vmin);
  transition: all 1.6s;

  /*animation: stars-twinkle 2s infinite;*/
  top: -100%;
}

#top-background-stars[data-theme="dark"] {
  top: -16vmin;
}

/*@keyframes stars-twinkle {*/
/*  0% {*/
/*    filter: none;*/
/*  }*/
/*  50% {*/
/*    filter: drop-shadow(0px 0px 2px #ffffff) drop-shadow(0px 0px 5px #ffffff);*/
/*  }*/
/*  100% {*/
/*    filter: none;*/
/*  }*/
/*}*/

#top-background-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100% - 82px);
  padding-top: 82px;
  user-select: none;

  display: flex;
  align-items: center;
  flex-direction: column;
}

#top-background-logo {
  width: 240px;
  height: 240px;

  margin-top: 4%;
}

#top-background-bar {
  width: 0;
  height: 6px;
  border-radius: 3px;
  margin-top: 4px;
  background: var(--theme-color-active);
  transition: all 0.5s;
  min-height: 6px;
}

#top-background-title {
  font-size: 72px;
  font-weight: 700;
  margin-top: 0.5em;
  -webkit-text-fill-color: transparent;
}

#top-background-title[data-theme="light"] {
  background: linear-gradient(135deg, #8dc6f6, #f2fcfe);
  /* background-clip must be after background */
  -webkit-background-clip: text;
}

#top-background-title[data-theme="dark"] {
  background: linear-gradient(135deg, #1488CC, #45A6F7, #6dd0fa, #8dc6f6);
  -webkit-background-clip: text;
}

.top-background-subtitle {
  font-size: 24px;
  font-weight: 400;
  margin-top: 0.33em;
  color: #ffffffe0;
  letter-spacing: 0.05em;
}

#top-background-angle-down-box {
  text-align: center;
  margin-top: 9%;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.2s;
}

#top-background-angle-down-box:hover {
  color: var(--theme-color-active)
}

#top-background-angle-down-text {
  font-size: 24px;
  letter-spacing: 0.05em;
}

#top-background-angle-down-icon {
  font-size: 32px;
  margin-top: 16px;
  opacity: 0;
}

.top-background-angle-down-icon-animation {
  animation: fade_move_down 2s infinite;
}

@keyframes fade_move_down {
  0% {
    transform: translate(0, -10px);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translate(0, 30px);
    opacity: 0;
  }
}
</style>
