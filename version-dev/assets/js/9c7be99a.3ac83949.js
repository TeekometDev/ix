"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[85195,45090],{30876:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>g});var r=t(2784);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),d=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=d(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(t),g=o,m=u["".concat(p,".").concat(g)]||u[g]||s[g]||a;return t?r.createElement(m,i(i({ref:n},l),{},{components:t})):r.createElement(m,i({ref:n},l))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var d=2;d<a;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},45090:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var r=t(7896),o=(t(2784),t(30876));const a={},i=void 0,c={unversionedId:"auto-generated/previews/angular/grid-padding.ts",id:"auto-generated/previews/angular/grid-padding.ts",title:"grid-padding.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/grid-padding.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/grid-padding.ts",permalink:"/version-dev/docs/auto-generated/previews/angular/grid-padding.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/grid-padding.ts.md",tags:[],version:"current",frontMatter:{}},p={},d=[],l={toc:d};function s(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"/*\n * SPDX-FileCopyrightText: 2023 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-example',\n  templateUrl: './grid-padding.html',\n  styles: [\n    `\n      ix-layout-grid {\n        margin-bottom: 1rem;\n      }\n\n      ix-col > ix-typography {\n        display: flex;\n        padding: 0.15rem;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        flex: 1 0 0;\n        align-self: stretch;\n        border: 1px solid var(--theme-color-soft-bdr);\n        background: var(--theme-color-ghost);\n        border-radius: 3px;\n      }\n\n      .example-parent {\n        padding-top: 1rem;\n        padding-bottom: 0.25rem;\n        background-color: var(--theme-color-ghost--hover);\n      }\n    `,\n  ],\n})\nexport default class GridPadding {}\n\n")))}s.isMDXComponent=!0}}]);