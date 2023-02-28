<script setup lang="ts">
import {onMounted, ref} from "vue";
import {configuration} from "../types/configuration";
import ScrollReveal from "scrollreveal";

const confRef = ref(configuration)

const urlList = ref([
  "https://ntcxx.szns.edu.cn/xxgk/xxjs/202011/W020220427372082004317.jpg",
  "https://nsqhxx.szns.edu.cn/lxwm/images/P020171107384865970425.jpg",
  "https://p4.itc.cn/q_70/images03/20210316/b92334048176403d876ae4738077c3ef.jpeg",
  "https://www.bupt.edu.cn/images/18/05/09/1mu9mjraxf/xyfg1.jpg",
])
const schoolList = ref([
  {
    name: "深圳市南山区南头城学校",
    time: "2007.9 - 2013.6",
    url: "https://ntcxx.szns.edu.cn/",
    introduction: "南头城学校坐落在美丽的中山公园旁著名的南头古城旁，学校前身是清代的“凤岗书院”，至今有 200 多年的历史，是深圳市历史最悠久的学校。学校先后用名“新安县凤岗书院”、“新安县凤岗小学堂”、“宝安县立第一高等小学”、“宝安县莲城小学”、“宝安县九街小学”，1985年学校更名为“深圳市南山区南头城小学”，2021年9月更名为“深圳市南山区南头城学校”。"
  },
  {
    name: "深圳市南山前海学校",
    time: "2013.9 - 2016.6",
    url: "https://nsqhxx.szns.edu.cn/",
    introduction: "前海学校建校以来，在历任校领导的带领下，形成了前海人“人本、和谐、卓越”的拼搏精神、学生能够“四会五能”、“学思笃行”、“虚怀勤勉博文，问道笃行约理”、“实现每个人的奇迹的定制教育”的文化传承，形成了“三精管理”模式，即：精心准备、精准执行、精品呈现。学校是“绿色校园、平安校园、人文校园、书香校园、和谐校园”，也是人才辈出的永恒学园、生命乐园、精神家园。为学生的人生发展奠定坚实的基础，前海人的精神品质深入学生骨髓。"
  },
  {
    name: "深圳市第二高级中学",
    time: "2016.9 - 2019.6",
    url: "https://www.sz2g.cn/",
    introduction: "第二高级中学站在现代教育的制高点，确立“尊重的教育”的办学理念，坚持“张扬生命活力，探求智慧人生，奠基终身发展”的办学方略，熔炼“阳光、进取、平实、包容”的学校精神，全力推进着眼于学生终身发展的全面素质教育和高中课程改革，主动融入现代教育改革大潮。"
  },
  {
    name: "北京邮电大学",
    time: "2019.9 - 2023.6",
    url: "https://www.bupt.edu.cn/",
    introduction: "北京邮电大学是教育部直属、工业和信息化部共建、首批进行“211工程”建设的全国重点大学，是“985优势学科创新平台”项目重点建设高校，是一所以信息科技为特色、工学门类为主体、工管文理协调发展的多科性、研究型大学，是我国信息科技人才的重要培养基地。2017年，“信息网络科学与技术学科群”和“计算机科学与网络安全学科群”两个学科群进入一流学科建设行列。"
  }
])

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
          <el-carousel-item v-for="i in urlList" :key="i">
            <el-image style="width: 100%; height: 100%; border-radius: 12px" :src="i" fit="cover"/>
          </el-carousel-item>
        </el-carousel>
      </div>

      <div style="display: inline-block">
        <div class="education-school-list" v-for="(i, idx) in schoolList">
          <div class="education-school-name-box">
              <div class="education-school-dot" :select="activeNumberRef === idx"></div>
              <a class="education-school-link" :href="i.url" :select="activeNumberRef === idx">{{ i.name }}</a>
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
