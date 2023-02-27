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
  navigator_bar: {
    home: string;
    about: string;
    education: string;
    log: string;
  }

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
    webIntroduction: string;
    webContent: string;
  }
}

export const Chinese: LanguageObject = {
  navigator_bar: {
    home: '首页',
    about: '关于',
    education: '教育',
    log: '日志',
  },

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
      "🧑‍ 一个想成为具有工匠精神程序员的人",
      "🎱 一个水平只有 0.5 档的台球爱好者",
      "🥳 一个喜欢整活的生活喜剧人",
      "🤯 一个每天不停实现自己想法的人",
    ],
    webTitle: '关于网站',
    webIntroduction: '🌐 一个基于 Vue3 + TypeScript + Vite 的个人网站',
    webContent: "一个使用 Vite + Vue3 + TypeScript一个使用 Vite + Vue3 + TypeScript一个使用 Vite + Vue3 + TypeScript一个使用 Vite + Vue3 + TypeScript",
  }
}

export const English: LanguageObject = {
  navigator_bar: {
    home: 'Home',
    about: 'About',
    education: 'Education',
    log: 'Log',
  },

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
    webIntroduction: '🌐 A personal website based on Vue3 + TypeScript + Vite',
    webContent: "A website based on Vite + Vue3 + TypeScript",
  }
}
