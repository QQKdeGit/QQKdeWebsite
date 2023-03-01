//+-------------------------------------------------------------------------
//
//  Configuration
//
//  File:       configuration.ts
//
//  Directory:  src/types
//
//  History:    2月-25-2023   QQK  Created
//
//--------------------------------------------------------------------------

import { Chinese, LanguageObject } from "../i18n/i18n";

interface QQKdeConfiguration {
  isMobile: boolean | null;

  theme: string;
  language: string;
  words: LanguageObject;

  // is 0 when correct
  // is 1 when dark mode in daytime
  // is 2 when light mode in night
  isWrongTheme: number;

  schoolPictureUrls: Array<string>;
  schoolUrls: Array<string>;
}

// const confRef = ref(configuration);
// <div :data-theme="confRef.theme"/>
export const configuration: QQKdeConfiguration = {
  isMobile: null,

  theme: "light",
  language: "zh-CN",
  words: Chinese,
  isWrongTheme: 0,

  schoolPictureUrls: [
    "https://ntcxx.szns.edu.cn/xxgk/xxjs/202011/W020220427372082004317.jpg",
    "https://nsqhxx.szns.edu.cn/lxwm/images/P020171107384865970425.jpg",
    "https://p4.itc.cn/q_70/images03/20210316/b92334048176403d876ae4738077c3ef.jpeg",
    "https://www.bupt.edu.cn/images/18/05/09/1mu9mjraxf/xyfg1.jpg",
  ],
  schoolUrls: [
    "https://ntcxx.szns.edu.cn/",
    "https://nsqhxx.szns.edu.cn/",
    "https://www.sz2g.cn/",
    "https://www.bupt.edu.cn/",
  ],
}
