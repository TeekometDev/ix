"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[87768,27145],{30876:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>m});var r=t(2784);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),s=c(t),m=o,b=s["".concat(p,".").concat(m)]||s[m]||u[m]||a;return t?r.createElement(b,i(i({ref:n},l),{},{components:t})):r.createElement(b,i({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=s;var d={};for(var p in n)hasOwnProperty.call(n,p)&&(d[p]=n[p]);d.originalType=e,d.mdxType="string"==typeof e?e:o,i[1]=d;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},27145:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var r=t(7896),o=(t(2784),t(30876));const a={},i=void 0,d={unversionedId:"auto-generated/previews/angular/dropdown-button.ts",id:"auto-generated/previews/angular/dropdown-button.ts",title:"dropdown-button.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/dropdown-button.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/dropdown-button.ts",permalink:"/version-dev/docs/auto-generated/previews/angular/dropdown-button.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/dropdown-button.ts.md",tags:[],version:"current",frontMatter:{}},p={},c=[],l={toc:c};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'/*\n * SPDX-FileCopyrightText: 2023 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-dropdown-button\',\n  template: `\n    <ix-dropdown-button label="Dropdown" variant="primary" icon="checkboxes">\n      <ix-dropdown-item label="Item 1" value="1"></ix-dropdown-item>\n      <ix-dropdown-item label="Item 2" value="2"></ix-dropdown-item>\n    </ix-dropdown-button>\n    <ix-dropdown-button\n      label="Dropdown"\n      variant="primary"\n      outline\n      icon="checkboxes"\n    >\n      <ix-dropdown-item label="Item 1" value="1"></ix-dropdown-item>\n      <ix-dropdown-item label="Item 2" value="2"></ix-dropdown-item>\n    </ix-dropdown-button>\n    <ix-dropdown-button\n      label="Dropdown"\n      variant="primary"\n      ghost\n      icon="checkboxes"\n    >\n      <ix-dropdown-item label="Item 1" value="1"></ix-dropdown-item>\n      <ix-dropdown-item label="Item 2" value="2"></ix-dropdown-item>\n    </ix-dropdown-button>\n    <ix-dropdown-button\n      label="Dropdown"\n      variant="primary"\n      disabled\n      icon="checkboxes"\n    >\n    </ix-dropdown-button>\n  `,\n})\nexport class Dropdown {}\n\n')))}u.isMDXComponent=!0}}]);