<script setup lang="ts">
import { ref }           from "vue";
import { configuration } from "../type/navigatorBar";

const confRef = ref(configuration)

</script>

<template>
  <div id="top-background">
    <div id="top-background-sky" :data-theme="confRef.theme"></div>
    <div id="top-background-stars" :data-theme="confRef.theme"></div>
    <!--    <div id="sun"></div>-->

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
}

#top-background-sky {
  position: absolute;
  width: 100%;
  height: 100%;

  background: linear-gradient(180deg, #000023, #151b6b, #2064af, #268ac9, #6DD5FA, #FFFFFF);
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

#sun {
  position: absolute;
  top: 0;
  left: 0;

  width: 120px;
  height: 120px;

  border-radius: 50%;
  backdrop-filter: blur(20px);

  background: -webkit-radial-gradient(circle, rgba(242, 248, 247, 1) 0%, rgba(249, 249, 28, 1) 3%, rgba(247, 214, 46, 1) 8%, rgba(248, 200, 95, 1) 12%, rgba(201, 165, 132, 1) 50%, rgba(108, 171, 247, 1) 80%);
  /*background: -moz-radial-gradient(circle, rgba(242,248,247,1) 0%,rgba(249,249,28,1) 3%,rgba(247,214,46,1) 8%, rgba(248,200,95,1) 12%,rgba(201,165,132,1) 30%,rgba(115,130,133,1) 51%,rgba(46,97,122,1) 85%,rgba(24,75,106,1) 100%);*/
  /*background: -ms-radial-gradient(circle, rgba(242,248,247,1) 0%,rgba(249,249,28,1) 3%,rgba(247,214,46,1) 8%, rgba(248,200,95,1) 12%,rgba(201,165,132,1) 30%,rgba(115,130,133,1) 51%,rgba(46,97,122,1) 85%,rgba(24,75,106,1) 100%);*/
}

</style>
