"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[28750,88410],{30876:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=i(n),d=o,m=p["".concat(c,".").concat(d)]||p[d]||g[d]||a;return n?r.createElement(m,s(s({ref:t},l),{},{components:n})):r.createElement(m,s({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=p;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,s[1]=u;for(var i=2;i<a;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},88410:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>a,metadata:()=>u,toc:()=>i});var r=n(7896),o=(n(2784),n(30876));const a={},s=void 0,u={unversionedId:"auto-generated/previews/vue/toggle-button-secondary-ghost",id:"auto-generated/previews/vue/toggle-button-secondary-ghost",title:"toggle-button-secondary-ghost",description:"\x3c!--",source:"@site/docs/auto-generated/previews/vue/toggle-button-secondary-ghost.md",sourceDirName:"auto-generated/previews/vue",slug:"/auto-generated/previews/vue/toggle-button-secondary-ghost",permalink:"/version-dev/docs/auto-generated/previews/vue/toggle-button-secondary-ghost",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/vue/toggle-button-secondary-ghost.md",tags:[],version:"current",frontMatter:{}},c={},i=[],l={toc:i};function g(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<script setup lang=\"ts\">\nimport { IxToggleButton } from '@siemens/ix-vue';\n<\/script>\n\n<template>\n  <IxToggleButton ghost>Normal</IxToggleButton>\n  <IxToggleButton ghost pressed>Pressed</IxToggleButton>\n  <IxToggleButton ghost disabled>Disabled</IxToggleButton>\n  <IxToggleButton ghost disabled loading>Loading</IxToggleButton>\n</template>\n")))}g.isMDXComponent=!0}}]);