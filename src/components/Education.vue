<script setup lang="ts">
import {onMounted, ref} from "vue";
import {configuration} from "../types/configuration";
import ScrollReveal from "scrollreveal";

const confRef = ref(configuration)

const activeNumberRef = ref(0)
const carouselOnChange = (newIndex: number, oldIndex: number) => {
  activeNumberRef.value = newIndex
}

onMounted(() => {
  ScrollReveal().reveal('#education-title, #education-title-bar', {distance: '60px', origin: 'left', duration: 2000, delay: 300})
  ScrollReveal().reveal('#carousel-box', {distance: '60px', origin: 'left', duration: 2000, delay: 400})
  ScrollReveal().reveal('.education-school-list', {distance: '60px', origin: 'right', duration: 2000, delay: 400, interval: 100})
})
</script>

<template>
  <div id="education">
    <div>
      <div id="education-title">{{ confRef.words.education.title }}</div>
    </div>
    <div>
      <div id="education-title-bar"></div>
    </div>

    <div style="display: flex; justify-content: center; margin-top: 48px; column-gap: 64px">
      <div id="carousel-box" style="display: inline-block">
        <el-carousel height="480px" style="width: 640px" :interval="10000" trigger="click" @change="carouselOnChange" indicator-position="outside">
          <el-carousel-item v-for="i in confRef.schoolPictureUrls" :key="i">
            <el-image style="width: 100%; height: 100%; border-radius: 12px" :src="i" fit="cover"/>
          </el-carousel-item>
        </el-carousel>
      </div>

      <div style="display: inline-block">
        <div class="education-school-list" v-for="(i, idx) in confRef.words.education.schoolList">
          <div class="education-school-name-box">
              <div class="education-school-dot" :select="activeNumberRef === idx"></div>
              <a class="education-school-link" :href="confRef.schoolUrls[idx]" :select="activeNumberRef === idx">{{ i.name }}</a>
          </div>
          <div class="education-school-content-box">
            <div class="education-school-line" :select="activeNumberRef === idx"></div>
            <div class="education-school-content" :select="activeNumberRef === idx">{{ i.introduction }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Education"
}
</script>

<style scoped>
#education {
  width: 100%;
  height: calc(100vh - 82px);
  min-height: 900px;
  text-align: center;
  padding-top: 82px;

  background: var(--background-interval-color);
  transition: color 0.35s, background 0.2s;
  user-select: none;
}

#education-title {
  font-size: 32px;
  font-weight: 600;
  margin-top: 42px;
  display: inline-block;
  color: var(--text-title-color);
}

#education-title-bar {
  width: 64px;
  height: 4px;
  border-radius: 2px;
  background: var(--theme-color-linear-gradient);
  display: inline-block;
}

.education-school-list {
  color: #888888;
  font-size: 15px;
  margin-bottom: 12px;
}

.education-school-name-box {
  display: flex;
  align-items: center;
}

.education-school-dot {
  width: 1em;
  height: 1em;
  min-width: 1em;
  min-height: 1em;

  border-radius: 50%;
  background: #aaaaaa;
  display: inline-block;
  margin-right: 16px;
  transition: all 0.2s;
}

.education-school-dot[select='true'] {
  background: var(--theme-color);
}

.education-school-link {
  color: #888888;
  text-decoration: none;
  font-size: 15px;
  font-weight: 600;
  transition: all 0.2s;
}

.education-school-link[select='true'] {
  color: var(--theme-color);
}

.education-school-link:hover {
  color: var(--theme-color-active);
}

.education-school-content-box {
  display: flex;
  text-align: left;
  margin-top: 12px;
}

.education-school-line {
  height: auto;
  margin-left: calc(0.5em - 1px);
  margin-right: 16px;
  border-right: 2px dotted #aaaaaa;
  transition: all 0.2s;
}

.education-school-line[select='true'] {
  border-right: 2px dotted var(--theme-color);
}

.education-school-content {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  text-indent: 2em;
  text-align: justify;
  word-break: break-all;
  width: 40em;
  transition: all 0.35s;
}

.education-school-content[select='true'] {
  color: var(--theme-color);
}
</style>
