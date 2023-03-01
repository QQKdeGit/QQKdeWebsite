<script setup lang="ts">
import { onMounted, ref } from "vue";
import { configuration }  from "../types/configuration";
import ScrollReveal       from "scrollreveal";

const confRef = ref(configuration)

const urls = [
  {
    icon: 'fa-solid fa-envelope',
    content: 'QQKdeBUPT@bupt.edu.cn',
    url: 'mailto:QQKdeBUPT@bupt.edu.cn',
  },
  {
    icon: 'fa-brands fa-github',
    content: 'Github',
    url: 'https://github.com/QQKdeGit',
  },
  {
    icon: 'fa-brands fa-bilibili',
    content: 'Bilibili',
    url: 'https://space.bilibili.com/4910602',
  },
]

onMounted(() => {
  ScrollReveal().reveal('#contact-title, #contact-title-bar', {
    distance: '60px',
    origin: 'right',
    duration: 2000,
    delay: 300,
    beforeReveal() {
      let contactElement = document.getElementById('contact')
      if (contactElement) contactElement.style.opacity = '1'
    }
  })

  ScrollReveal().reveal('#contact-content', {distance: '60px', origin: 'right', duration: 2000, delay: 400})
  ScrollReveal().reveal('.contact-content-link', {
    distance: '60px',
    origin: 'right',
    duration: 2000,
    delay: 500,
    interval: 100
  })
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
      <div id="contact-content">{{ confRef.words.contact.content }}</div>

      <a class="contact-content-link" v-for="i in urls" :href="i.url">
        <font-awesome-icon :icon="i.icon" style='margin-right: 8px'/>
        {{ i.content }}
      </a>
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
  opacity: 0;
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
}

#contact-content {
  font-size: 15px;
  color: var(--text-content-color);
  transition: color 0.35s;
  margin-top: 6em;
}

.contact-content-link {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: var(--text-content-color);
  transition: color 0.35s;
}

.contact-content-link:hover {
  color: var(--theme-color-active)
}
</style>
