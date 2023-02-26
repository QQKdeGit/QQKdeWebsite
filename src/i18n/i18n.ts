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
  top_background: {
    title: string;
    subtitle: string;
    wrongDayTimeSubtitle: string;
    wrongNightTimeSubtitle: string;
  }
}

export const Chinese: LanguageObject = {
  top_background: {
    title: '循梦而行，向阳而生',
    subtitle: '欢迎来到QQK的个人网站',
    wrongDayTimeSubtitle: '为什么你在白天使用夜间主题呢？',
    wrongNightTimeSubtitle: '为什么你在夜晚使用白天主题呢？',
  }
}

export const English: LanguageObject = {
  top_background: {
    title: 'Chase Aspirations, Embrace Radiance',
    subtitle: 'Welcome to QQKdeWebsite',
    wrongDayTimeSubtitle: 'Why are you using dark theme in daytime?',
    wrongNightTimeSubtitle: 'Why are you using light theme in night?',
  }
}
