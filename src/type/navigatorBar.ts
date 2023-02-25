//+-------------------------------------------------------------------------
//
//  Interface about navigatorBar
//
//  File:       navigatorBar.ts
//
//  Directory:  src/type
//
//  History:    2月-22-2023   QQK  Created
//
//--------------------------------------------------------------------------

export interface NavigatorBarLinkItem {
  name: string;
  id: string;
}

// const confRef = ref(configuration);
// <div :data-theme="confRef.theme"/>
export const configuration = {
  theme: "light",
}
