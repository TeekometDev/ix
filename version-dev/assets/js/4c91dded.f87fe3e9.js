"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[16629,51095],{30876:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),b=a,m=d["".concat(s,".").concat(b)]||d[b]||u[b]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},51095:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(7896),a=(n(2784),n(30876));const o={},i=void 0,c={unversionedId:"auto-generated/previews/angular/tabs.ts",id:"auto-generated/previews/angular/tabs.ts",title:"tabs.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/tabs.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/tabs.ts",permalink:"/version-dev/docs/auto-generated/previews/angular/tabs.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/tabs.ts.md",tags:[],version:"current",frontMatter:{}},s={},l=[],p={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'/*\n * SPDX-FileCopyrightText: 2023 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-example\',\n  styles: [\n    `\n      :host {\n        .example {\n          display: block;\n          position: relative;\n          width: 100%;\n        }\n      }\n    `,\n  ],\n  template: `\n    <div class="example">\n      <ix-tabs [selected]="selectedTab">\n        <ix-tab-item (click)="changeTab(0)">Tab 1</ix-tab-item>\n        <ix-tab-item (click)="changeTab(1)">Tab 2</ix-tab-item>\n        <ix-tab-item (click)="changeTab(2)">Tab 3</ix-tab-item>\n      </ix-tabs>\n      <div *ngIf="selectedTab === 0">Content Tab 1</div>\n      <div *ngIf="selectedTab === 1">Content Tab 2</div>\n      <div *ngIf="selectedTab === 2">Content Tab 3</div>\n    </div>\n  `,\n})\nexport default class Tabs {\n  selectedTab = 1;\n\n  changeTab(tabIndex: number) {\n    this.selectedTab = tabIndex;\n  }\n}\n\n')))}u.isMDXComponent=!0}}]);