//+-------------------------------------------------------------------------
//
//  i18n
//
//  File:       i18n.ts
//
//  Directory:  src/i18n
//
//  History:    2月-25-2023   QQK  Created
//
//--------------------------------------------------------------------------

export interface LanguageObject {
  navigator_bar: Array<{
    name: string;
    id: string;
  }>

  top_background: {
    title: string;
    subtitle: string;
    wrongDayTimeSubtitle: string;
    wrongNightTimeSubtitle: string;
    explore: string;
  },

  about: {
    meTitle: string;
    meIntroduction: string;
    meContent: Array<string>;

    webTitle: string;
    webContent: Array<string>;
  }
}

export const Chinese: LanguageObject = {
  navigator_bar: [
    {
      name: '首页',
      id: 'top-background',
    },
    {
      name: '关于',
      id: 'about',
    },
    {
      name: '教育',
      id: 'education',
    },
    {
      name: '联系',
      id: 'contact',
    },
  ],

  top_background: {
    title: '循梦而行，向阳而生',
    subtitle: '欢迎来到 QQK 的个人网站',
    wrongDayTimeSubtitle: '为什么你在白天使用夜间主题呢？',
    wrongNightTimeSubtitle: '为什么你在夜晚使用白天主题呢？',
    explore: '探索',
  },

  about: {
    meTitle: '关于我',
    meIntroduction: '👋 你好，我是 QQK',
    meContent: [
      "🎓 一个即将毕业的北京邮电大学本科生",
      "🖥️ 一个距离 1000 粉丝还有 958 个的 B 站 UP 主",
      "🧑‍ 一个想成为具有工匠精神的程序员的人",
      "🎱 一个水平只有 0.5 档的台球爱好者",
      "🥳 一个喜欢整活的生活喜剧人",
      "🤯 一个每天不停实现自己想法的人",
    ],
    webTitle: '关于网站',
    webContent: [
      "这是一个基于 Vue3 + Vite + TypeScript 的个人网站",
      "并没有使用任何UI组件库（除了一些图标）",
      "网站还提供了夜间模式和本地化的功能",
      "并且已经在 Github 上开源",
      "欢迎提出任何 issue 和 star",

    ]
  }
}

export const English: LanguageObject = {
  navigator_bar: [
    {
      name: 'Home',
      id: 'top-background',
    },
    {
      name: 'About',
      id: 'about',
    },
    {
      name: 'Education',
      id: 'education',
    },
    {
      name: 'Contact',
      id: 'contact',
    },
  ],

  top_background: {
    title: 'Chase Aspirations, Embrace Radiance',
    subtitle: 'Welcome to QQKdeWebsite',
    wrongDayTimeSubtitle: 'Why are you using dark theme in daytime?',
    wrongNightTimeSubtitle: 'Why are you using light theme in night?',
    explore: 'Explore',
  },

  about: {
    meTitle: 'About Me',
    meIntroduction: '👋 Hello, I am QQK',
    meContent: [
      "🎓 A senior who is about to graduate from Beijing University of Posts and Telecommunications",
      "🖥️ A Bilibili UP who still needs 958 more fans to reach 1000",
      "🧑 A person who wants to be a programmer with a craftsman spirit",
      "🎱 A pool player who is at poor level",
      "🥳 A humorous person who enjoys playing tricks",
      "🤯 A person who is constantly implementing his ideas",
    ],
    webTitle: 'About Website',
    webContent: [
      "This is a personal website based on Vue3 + Vite + TypeScript",
      "No UI component library is used (except for some icons)",
      "The website also provides night mode and localization",
      "And it has been open sourced on Github",
      "Any issues and stars are appreciated",
    ]
  }
}
