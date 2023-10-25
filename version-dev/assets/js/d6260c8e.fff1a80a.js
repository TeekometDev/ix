"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[36699,38542],{30876:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>m});var r=t(2784);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=r.createContext({}),p=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=p(t),m=o,b=s["".concat(d,".").concat(m)]||s[m]||u[m]||i;return t?r.createElement(b,a(a({ref:n},l),{},{components:t})):r.createElement(b,a({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=s;var c={};for(var d in n)hasOwnProperty.call(n,d)&&(c[d]=n[d]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},38542:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=t(7896),o=(t(2784),t(30876));const i={},a=void 0,c={unversionedId:"auto-generated/previews/angular/dropdown-button-icon.ts",id:"auto-generated/previews/angular/dropdown-button-icon.ts",title:"dropdown-button-icon.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/dropdown-button-icon.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/dropdown-button-icon.ts",permalink:"/version-dev/docs/auto-generated/previews/angular/dropdown-button-icon.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/dropdown-button-icon.ts.md",tags:[],version:"current",frontMatter:{}},d={},p=[],l={toc:p};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'/*\n * SPDX-FileCopyrightText: 2023 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-dropdown-button-icon\',\n  template: `\n    <ix-dropdown-button label="" variant="primary" icon="checkboxes">\n      <ix-dropdown-item label="Item 1" value="1"></ix-dropdown-item>\n      <ix-dropdown-item label="Item 2" value="2"></ix-dropdown-item>\n    </ix-dropdown-button>\n    <ix-dropdown-button label="" variant="primary" outline icon="checkboxes">\n      <ix-dropdown-item label="Item 1" value="1"></ix-dropdown-item>\n      <ix-dropdown-item label="Item 2" value="2"></ix-dropdown-item>\n    </ix-dropdown-button>\n    <ix-dropdown-button label="" variant="primary" ghost icon="checkboxes">\n      <ix-dropdown-item label="Item 1" value="1"></ix-dropdown-item>\n      <ix-dropdown-item label="Item 2" value="2"></ix-dropdown-item>\n    </ix-dropdown-button>\n    <ix-dropdown-button label="" variant="primary" disabled icon="checkboxes">\n    </ix-dropdown-button>\n  `,\n})\nexport class Dropdown {}\n\n')))}u.isMDXComponent=!0}}]);