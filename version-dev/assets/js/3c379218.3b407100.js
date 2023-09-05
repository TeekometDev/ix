"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[65946,45576],{30876:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(2784);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),i=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=i(r),f=o,d=m["".concat(u,".").concat(f)]||m[f]||l[f]||a;return r?n.createElement(d,c(c({ref:t},p),{},{components:r})):n.createElement(d,c({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var i=2;i<a;i++)c[i]=r[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},45576:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>i});var n=r(7896),o=(r(2784),r(30876));const a={},c=void 0,s={unversionedId:"auto-generated/previews/vue/toast-custom",id:"auto-generated/previews/vue/toast-custom",title:"toast-custom",description:"\x3c!--",source:"@site/docs/auto-generated/previews/vue/toast-custom.md",sourceDirName:"auto-generated/previews/vue",slug:"/auto-generated/previews/vue/toast-custom",permalink:"/version-dev/docs/auto-generated/previews/vue/toast-custom",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/vue/toast-custom.md",tags:[],version:"current",frontMatter:{}},u={},i=[],p={toc:i};function l(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<script setup lang="ts">\nimport { IxButton, showToast } from \'@siemens/ix-vue\';\nimport { ref } from \'vue\';\n\nconst custom = ref<HTMLElement | null>(null);\n<\/script>\n\n<template>\n  <IxButton @click="showToast({ message: custom! })"> Trigger toast </IxButton>\n  <template>\n    <div ref="custom">\n      <div>Custom toast message</div>\n      <IxButton>Action</IxButton>\n    </div>\n  </template>\n</template>\n')))}l.isMDXComponent=!0}}]);