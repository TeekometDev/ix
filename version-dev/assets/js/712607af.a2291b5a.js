"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[28331,84562],{30876:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>v});var n=r(2784);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=u(r),v=o,f=m["".concat(s,".").concat(v)]||m[v]||p[v]||i;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},84562:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var n=r(7896),o=(r(2784),r(30876));const i={},a=void 0,c={unversionedId:"auto-generated/previews/vue/event-list-custom-item-height",id:"auto-generated/previews/vue/event-list-custom-item-height",title:"event-list-custom-item-height",description:"\x3c!--",source:"@site/docs/auto-generated/previews/vue/event-list-custom-item-height.md",sourceDirName:"auto-generated/previews/vue",slug:"/auto-generated/previews/vue/event-list-custom-item-height",permalink:"/version-dev/docs/auto-generated/previews/vue/event-list-custom-item-height",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/vue/event-list-custom-item-height.md",tags:[],version:"current",frontMatter:{}},s={},u=[],l={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<script setup lang="ts">\nimport { IxEventList, IxEventListItem } from \'@siemens/ix-vue\';\n<\/script>\n\n<template>\n  <IxEventList itemHeight="L">\n    <IxEventListItem color="color-primary">Text 1</IxEventListItem>\n    <IxEventListItem color="color-primary">Text 2</IxEventListItem>\n    <IxEventListItem color="color-primary">Text 3</IxEventListItem>\n    <IxEventListItem color="color-primary">Text 4</IxEventListItem>\n  </IxEventList>\n</template>\n')))}p.isMDXComponent=!0}}]);