"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9159,38690],{30876:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var r=t(2784);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),g=c(t),d=o,f=g["".concat(u,".").concat(d)]||g[d]||p[d]||a;return t?r.createElement(f,i(i({ref:n},s),{},{components:t})):r.createElement(f,i({ref:n},s))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=g;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},38690:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=t(7896),o=(t(2784),t(30876));const a={},i=void 0,l={unversionedId:"auto-generated/previews/vue/button-loading",id:"auto-generated/previews/vue/button-loading",title:"button-loading",description:"\x3c!--",source:"@site/docs/auto-generated/previews/vue/button-loading.md",sourceDirName:"auto-generated/previews/vue",slug:"/auto-generated/previews/vue/button-loading",permalink:"/version-dev/docs/auto-generated/previews/vue/button-loading",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/vue/button-loading.md",tags:[],version:"current",frontMatter:{}},u={},c=[],s={toc:c};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!--\n * SPDX-FileCopyrightText: 2023 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n--\x3e\n\n<script setup lang="ts">\nimport { IxButton, IxIconButton } from \'@siemens/ix-vue\';\nimport { ref } from \'vue\';\n\nlet toggle1 = ref(false);\nlet toggle2 = ref(false);\nlet toggle3 = ref(false);\n\nfunction load(value: string) {\n  if (value === \'1\') toggle1.value = true;\n  if (value === \'2\') toggle2.value = true;\n  if (value === \'3\') toggle3.value = true;\n\n  setTimeout(() => {\n    if (value === \'1\') toggle1.value = false;\n    if (value === \'2\') toggle2.value = false;\n    if (value === \'3\') toggle3.value = false;\n  }, 2500);\n}\n<\/script>\n\n<template>\n  <div>\n    <IxButton\n      :loading="toggle1"\n      @click="load(\'1\')"\n      class="m-1"\n      outline\n      variant="primary"\n    >\n      Button\n    </IxButton>\n    <IxButton\n      :loading="toggle2"\n      @click="load(\'2\')"\n      class="m-1"\n      outline\n      icon="star"\n      variant="primary"\n    >\n      Button\n    </IxButton>\n    <IxIconButton\n      :loading="toggle3"\n      @click="load(\'3\')"\n      class="m-1"\n      outline\n      icon="star"\n      variant="primary"\n    ></IxIconButton>\n    <IxButton loading class="m-1" outline variant="primary"> Button </IxButton>\n    <IxIconButton loading class="m-1" outline variant="primary"></IxIconButton>\n  </div>\n</template>\n\n')))}p.isMDXComponent=!0}}]);