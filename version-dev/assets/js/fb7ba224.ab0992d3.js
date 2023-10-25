"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[87280,51117],{30876:(n,t,e)=>{e.d(t,{Zo:()=>l,kt:()=>m});var o=e(2784);function r(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function c(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,o)}return e}function i(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?c(Object(e),!0).forEach((function(t){r(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):c(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function a(n,t){if(null==n)return{};var e,o,r=function(n,t){if(null==n)return{};var e,o,r={},c=Object.keys(n);for(o=0;o<c.length;o++)e=c[o],t.indexOf(e)>=0||(r[e]=n[e]);return r}(n,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);for(o=0;o<c.length;o++)e=c[o],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(r[e]=n[e])}return r}var u=o.createContext({}),s=function(n){var t=o.useContext(u),e=t;return n&&(e="function"==typeof n?n(t):i(i({},t),n)),e},l=function(n){var t=s(n.components);return o.createElement(u.Provider,{value:t},n.children)},p={inlineCode:"code",wrapper:function(n){var t=n.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(n,t){var e=n.components,r=n.mdxType,c=n.originalType,u=n.parentName,l=a(n,["components","mdxType","originalType","parentName"]),f=s(e),m=r,d=f["".concat(u,".").concat(m)]||f[m]||p[m]||c;return e?o.createElement(d,i(i({ref:t},l),{},{components:e})):o.createElement(d,i({ref:t},l))}));function m(n,t){var e=arguments,r=t&&t.mdxType;if("string"==typeof n||r){var c=e.length,i=new Array(c);i[0]=f;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=n,a.mdxType="string"==typeof n?n:r,i[1]=a;for(var s=2;s<c;s++)i[s]=e[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,e)}f.displayName="MDXCreateElement"},51117:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>a,toc:()=>s});var o=e(7896),r=(e(2784),e(30876));const c={},i=void 0,a={unversionedId:"auto-generated/previews/react/button-with-icon",id:"auto-generated/previews/react/button-with-icon",title:"button-with-icon",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/button-with-icon.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/button-with-icon",permalink:"/version-dev/docs/auto-generated/previews/react/button-with-icon",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/button-with-icon.md",tags:[],version:"current",frontMatter:{}},u={},s=[],l={toc:s};function p(n){let{components:t,...e}=n;return(0,r.kt)("wrapper",(0,o.Z)({},l,e,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'/*\n * SPDX-FileCopyrightText: 2023 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { IxIconButton } from \'@siemens/ix-react\';\nimport React from \'react\';\n\nexport default () => {\n  return (\n    <>\n      <div>\n        <IxIconButton class="m-1" icon="info" variant="primary"></IxIconButton>\n        <IxIconButton\n          class="m-1"\n          icon="info"\n          variant="secondary"\n        ></IxIconButton>\n        <IxIconButton class="m-1" icon="info" outline></IxIconButton>\n        <IxIconButton class="m-1" icon="info" ghost></IxIconButton>\n      </div>\n\n      <div>\n        <IxIconButton\n          class="m-1"\n          icon="info"\n          oval\n          variant="primary"\n        ></IxIconButton>\n        <IxIconButton\n          class="m-1"\n          icon="info"\n          oval\n          variant="secondary"\n        ></IxIconButton>\n        <IxIconButton class="m-1" icon="info" oval outline></IxIconButton>\n        <IxIconButton class="m-1" icon="info" oval ghost></IxIconButton>\n      </div>\n\n      <div>\n        <IxIconButton class="m-1" icon="info" size="12"></IxIconButton>\n        <IxIconButton class="m-1" icon="info" size="16"></IxIconButton>\n        <IxIconButton class="m-1" icon="info" size="24"></IxIconButton>\n        <IxIconButton class="m-1" icon="info" size="32"></IxIconButton>\n      </div>\n    </>\n  );\n};\n\n')))}p.isMDXComponent=!0}}]);