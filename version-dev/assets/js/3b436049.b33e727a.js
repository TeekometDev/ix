"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[28564,56977],{30876:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>p});var n=t(2784);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),m=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},l=function(e){var r=m(e.components);return n.createElement(i.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=m(t),p=a,b=s["".concat(i,".").concat(p)]||s[p]||d[p]||c;return t?n.createElement(b,o(o({ref:r},l),{},{components:t})):n.createElement(b,o({ref:r},l))}));function p(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var c=t.length,o=new Array(c);o[0]=s;var u={};for(var i in r)hasOwnProperty.call(r,i)&&(u[i]=r[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var m=2;m<c;m++)o[m]=t[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},56977:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>c,metadata:()=>u,toc:()=>m});var n=t(7896),a=(t(2784),t(30876));const c={},o=void 0,u={unversionedId:"auto-generated/previews/react/breadcrumb-truncate",id:"auto-generated/previews/react/breadcrumb-truncate",title:"breadcrumb-truncate",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/breadcrumb-truncate.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/breadcrumb-truncate",permalink:"/version-dev/docs/auto-generated/previews/react/breadcrumb-truncate",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/breadcrumb-truncate.md",tags:[],version:"current",frontMatter:{}},i={},m=[],l={toc:m};function d(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'/*\n * SPDX-FileCopyrightText: 2023 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { IxBreadcrumb, IxBreadcrumbItem } from \'@siemens/ix-react\';\nimport React from \'react\';\n\nexport default () => {\n  return (\n    <IxBreadcrumb visibleItemCount={3}>\n      <IxBreadcrumbItem label="Item 1"></IxBreadcrumbItem>\n      <IxBreadcrumbItem label="Item 2"></IxBreadcrumbItem>\n      <IxBreadcrumbItem label="Item 3"></IxBreadcrumbItem>\n      <IxBreadcrumbItem label="Item 4"></IxBreadcrumbItem>\n      <IxBreadcrumbItem label="Item 5"></IxBreadcrumbItem>\n    </IxBreadcrumb>\n  );\n};\n\n')))}d.isMDXComponent=!0}}]);