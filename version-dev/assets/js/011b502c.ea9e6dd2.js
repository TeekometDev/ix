"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[68263,13225],{30876:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>v});var n=r(2784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(r),v=a,f=m["".concat(i,".").concat(v)]||m[v]||s[v]||o;return r?n.createElement(f,u(u({ref:t},p),{},{components:r})):n.createElement(f,u({ref:t},p))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,u=new Array(o);u[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,u[1]=c;for(var l=2;l<o;l++)u[l]=r[l];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},13225:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>u,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(7896),a=(r(2784),r(30876));const o={},u=void 0,c={unversionedId:"auto-generated/previews/vue/key-value-with-custom-value",id:"auto-generated/previews/vue/key-value-with-custom-value",title:"key-value-with-custom-value",description:"\x3c!--",source:"@site/docs/auto-generated/previews/vue/key-value-with-custom-value.md",sourceDirName:"auto-generated/previews/vue",slug:"/auto-generated/previews/vue/key-value-with-custom-value",permalink:"/version-dev/docs/auto-generated/previews/vue/key-value-with-custom-value",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/vue/key-value-with-custom-value.md",tags:[],version:"current",frontMatter:{}},i={},l=[],p={toc:l};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<script setup lang="ts">\nimport { IxKeyValue } from \'@siemens/ix-vue\';\n<\/script>\n\n<template>\n  <IxKeyValue label="Label">\n    <input\n      className="form-control"\n      placeholder="Enter text here"\n      type="text"\n      slot="custom-value"\n    />\n  </IxKeyValue>\n</template>\n')))}s.isMDXComponent=!0}}]);