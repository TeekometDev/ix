"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[59025,66114],{30876:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(2784);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),g=c(r),m=o,d=g["".concat(p,".").concat(m)]||g[m]||s[m]||a;return r?n.createElement(d,i(i({ref:t},l),{},{components:r})):n.createElement(d,i({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=g;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},66114:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>u,toc:()=>c});var n=r(7896),o=(r(2784),r(30876));const a={},i=void 0,u={unversionedId:"auto-generated/previews/vue/toggle-button-primary-ghost",id:"auto-generated/previews/vue/toggle-button-primary-ghost",title:"toggle-button-primary-ghost",description:"\x3c!--",source:"@site/docs/auto-generated/previews/vue/toggle-button-primary-ghost.md",sourceDirName:"auto-generated/previews/vue",slug:"/auto-generated/previews/vue/toggle-button-primary-ghost",permalink:"/version-dev/docs/auto-generated/previews/vue/toggle-button-primary-ghost",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/vue/toggle-button-primary-ghost.md",tags:[],version:"current",frontMatter:{}},p={},c=[],l={toc:c};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<script setup lang="ts">\nimport { IxToggleButton } from \'@siemens/ix-vue\';\n<\/script>\n\n<template>\n  <IxToggleButton variant="primary" ghost>Normal</IxToggleButton>\n  <IxToggleButton variant="primary" ghost>Pressed</IxToggleButton>\n  <IxToggleButton variant="primary" ghost>Disabled</IxToggleButton>\n  <IxToggleButton variant="primary" ghost>Loading</IxToggleButton>\n</template>\n')))}s.isMDXComponent=!0}}]);