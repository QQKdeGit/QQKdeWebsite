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
  theme: string;
  language: string;
  words: LanguageObject;

  // is 0 when correct
  // is 1 when dark mode in daytime
  // is 2 when light mode in night
  isWrongTheme: number;
}

// const confRef = ref(configuration);
// <div :data-theme="confRef.theme"/>
export const configuration: QQKdeConfiguration = {
  theme: "light",
  language: "zh-CN",
  words: Chinese,
  isWrongTheme: 0,
}
