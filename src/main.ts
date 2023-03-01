import { createApp } from 'vue'

import { library }         from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fab }             from "@fortawesome/free-brands-svg-icons"
import { fas }             from "@fortawesome/free-solid-svg-icons"

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

library.add(fab)
library.add(fas)

import { configuration } from "./types/configuration";

navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
  || window.innerWidth <= 768 ? configuration.isMobile = true : configuration.isMobile = false;


import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
