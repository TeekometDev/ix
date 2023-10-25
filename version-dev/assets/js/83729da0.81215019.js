"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[39266,36228],{30876:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,g=m["".concat(s,".").concat(d)]||m[d]||c[d]||a;return n?r.createElement(g,p(p({ref:t},l),{},{components:n})):r.createElement(g,p({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var u=2;u<a;u++)p[u]=n[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},36228:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=n(7896),o=(n(2784),n(30876));const a={},p=void 0,i={unversionedId:"auto-generated/previews/angular/input-types.ts",id:"auto-generated/previews/angular/input-types.ts",title:"input-types.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/input-types.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/input-types.ts",permalink:"/version-dev/docs/auto-generated/previews/angular/input-types.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/input-types.ts.md",tags:[],version:"current",frontMatter:{}},s={},u=[],l={toc:u};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'/*\n * SPDX-FileCopyrightText: 2023 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-example\',\n  template: `\n    <form class="needs-validation m-2">\n      <ix-input-group style="margin-bottom: 0.5rem;">\n        <span slot="input-start">Text:</span>\n        <input placeholder="Enter text" type="text" />\n      </ix-input-group>\n\n      <ix-input-group style="margin-bottom: 0.5rem;">\n        <span slot="input-start">Number:</span>\n        <input type="number" />\n        <span slot="input-end">.00</span>\n        <span slot="input-end">$</span>\n      </ix-input-group>\n\n      <ix-input-group style="margin-bottom: 0.5rem;">\n        <span slot="input-start">Password:</span>\n        <input placeholder="Enter password" type="password" />\n      </ix-input-group>\n\n      <ix-input-group style="margin-bottom: 0.5rem;">\n        <span slot="input-start">Email:</span>\n        <input placeholder="example@domain.com" type="email" />\n      </ix-input-group>\n\n      <ix-input-group style="margin-bottom: 0.5rem;">\n        <span slot="input-start">Telephone:</span>\n        <input placeholder="111-111-111" type="tel" />\n      </ix-input-group>\n    </form>\n  `,\n})\nexport default class Input {}\n\n')))}c.isMDXComponent=!0}}]);