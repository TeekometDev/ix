"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[96210],{30876:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(2784);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=p(r),m=o,d=f["".concat(l,".").concat(m)]||f[m]||u[m]||a;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},69940:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=r(7896),o=(r(2784),r(30876));const a={},i=void 0,c={unversionedId:"auto-generated/previews/vue/category-filter",id:"auto-generated/previews/vue/category-filter",title:"category-filter",description:"\x3c!--",source:"@site/docs/auto-generated/previews/vue/category-filter.md",sourceDirName:"auto-generated/previews/vue",slug:"/auto-generated/previews/vue/category-filter",permalink:"/docs/auto-generated/previews/vue/category-filter",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/vue/category-filter.md",tags:[],version:"current",frontMatter:{}},l={},p=[],s={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<script setup lang=\"ts\">\nimport { FilterState, LogicalFilterOperator } from '@siemens/ix';\nimport { IxCategoryFilter } from '@siemens/ix-vue';\n\nconst filter: FilterState = {\n  tokens: ['Custom filter text'],\n  categories: [\n    {\n      id: 'ID_1',\n      value: 'IBM',\n      operator: LogicalFilterOperator.NOT_EQUAL,\n    },\n  ],\n};\n\nconst categories = {\n  ID_1: {\n    label: 'Vendor',\n    options: ['Apple', 'MS', 'Siemens'],\n  },\n  ID_2: {\n    label: 'Product',\n    options: ['iPhone X', 'Windows', 'APS'],\n  },\n};\n<\/script>\n\n<template>\n  <IxCategoryFilter\n    placeholder=\"Filter by\"\n    repeatCategories\n    :filterState=\"filter\"\n    :categories=\"categories\"\n  ></IxCategoryFilter>\n</template>\n")))}u.isMDXComponent=!0}}]);