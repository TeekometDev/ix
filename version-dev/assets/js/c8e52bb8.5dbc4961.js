"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[29908,61096],{30876:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>m});var n=r(2784);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},i=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||l[m]||a;return r?n.createElement(f,p(p({ref:t},i),{},{components:r})):n.createElement(f,p({ref:t},i))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,p[1]=u;for(var c=2;c<a;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},61096:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>l,frontMatter:()=>a,metadata:()=>u,toc:()=>c});var n=r(7896),o=(r(2784),r(30876));const a={},p=void 0,u={unversionedId:"auto-generated/previews/vue/group-header-suppressed",id:"auto-generated/previews/vue/group-header-suppressed",title:"group-header-suppressed",description:"\x3c!--",source:"@site/docs/auto-generated/previews/vue/group-header-suppressed.md",sourceDirName:"auto-generated/previews/vue",slug:"/auto-generated/previews/vue/group-header-suppressed",permalink:"/version-dev/docs/auto-generated/previews/vue/group-header-suppressed",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/vue/group-header-suppressed.md",tags:[],version:"current",frontMatter:{}},s={},c=[],i={toc:c};function l(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<script setup lang="ts">\nimport { IxGroup, IxGroupItem } from \'@siemens/ix-vue\';\n<\/script>\n\n<template>\n  <IxGroup\n    header="Header text"\n    subHeader="Subheader text"\n    suppressHeaderSelection\n  >\n    <IxGroupItem text="Example text 1"></IxGroupItem>\n    <IxGroupItem text="Example text 2"></IxGroupItem>\n    <IxGroupItem text="Example text 3"></IxGroupItem>\n  </IxGroup>\n</template>\n')))}l.isMDXComponent=!0}}]);