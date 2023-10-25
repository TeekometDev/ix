"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[14810,20603],{30876:(n,t,e)=>{e.d(t,{Zo:()=>l,kt:()=>f});var o=e(2784);function i(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function r(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,o)}return e}function c(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?r(Object(e),!0).forEach((function(t){i(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function a(n,t){if(null==n)return{};var e,o,i=function(n,t){if(null==n)return{};var e,o,i={},r=Object.keys(n);for(o=0;o<r.length;o++)e=r[o],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(o=0;o<r.length;o++)e=r[o],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(i[e]=n[e])}return i}var s=o.createContext({}),u=function(n){var t=o.useContext(s),e=t;return n&&(e="function"==typeof n?n(t):c(c({},t),n)),e},l=function(n){var t=u(n.components);return o.createElement(s.Provider,{value:t},n.children)},p={inlineCode:"code",wrapper:function(n){var t=n.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(n,t){var e=n.components,i=n.mdxType,r=n.originalType,s=n.parentName,l=a(n,["components","mdxType","originalType","parentName"]),m=u(e),f=i,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||r;return e?o.createElement(d,c(c({ref:t},l),{},{components:e})):o.createElement(d,c({ref:t},l))}));function f(n,t){var e=arguments,i=t&&t.mdxType;if("string"==typeof n||i){var r=e.length,c=new Array(r);c[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=n,a.mdxType="string"==typeof n?n:i,c[1]=a;for(var u=2;u<r;u++)c[u]=e[u];return o.createElement.apply(null,c)}return o.createElement.apply(null,e)}m.displayName="MDXCreateElement"},20603:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>u});var o=e(7896),i=(e(2784),e(30876));const r={},c=void 0,a={unversionedId:"auto-generated/previews/angular/button-with-icon.ts",id:"auto-generated/previews/angular/button-with-icon.ts",title:"button-with-icon.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/button-with-icon.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/button-with-icon.ts",permalink:"/version-dev/docs/auto-generated/previews/angular/button-with-icon.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/button-with-icon.ts.md",tags:[],version:"current",frontMatter:{}},s={},u=[],l={toc:u};function p(n){let{components:t,...e}=n;return(0,i.kt)("wrapper",(0,o.Z)({},l,e,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'/*\n * SPDX-FileCopyrightText: 2023 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-example\',\n  template: `\n    <div class="m-1">\n      <ix-icon-button\n        class="m-1"\n        icon="info"\n        variant="primary"\n      ></ix-icon-button>\n      <ix-icon-button\n        class="m-1"\n        icon="info"\n        variant="secondary"\n      ></ix-icon-button>\n      <ix-icon-button class="m-1" icon="info" outline></ix-icon-button>\n      <ix-icon-button class="m-1" icon="info" ghost></ix-icon-button>\n    </div>\n\n    <div class="m-1">\n      <ix-icon-button\n        class="m-1"\n        icon="info"\n        oval\n        variant="primary"\n      ></ix-icon-button>\n      <ix-icon-button\n        class="m-1"\n        icon="info"\n        oval\n        variant="secondary"\n      ></ix-icon-button>\n      <ix-icon-button class="m-1" icon="info" oval outline></ix-icon-button>\n      <ix-icon-button class="m-1" icon="info" oval ghost></ix-icon-button>\n    </div>\n\n    <div class="m-1">\n      <ix-icon-button class="m-1" icon="info" size="12"></ix-icon-button>\n      <ix-icon-button class="m-1" icon="info" size="16"></ix-icon-button>\n      <ix-icon-button class="m-1" icon="info" size="24"></ix-icon-button>\n      <ix-icon-button class="m-1" icon="info" size="32"></ix-icon-button>\n    </div>\n  `,\n})\nexport default class ButtonWithIcon {}\n\n')))}p.isMDXComponent=!0}}]);