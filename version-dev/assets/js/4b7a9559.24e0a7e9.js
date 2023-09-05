"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5274,57192],{30876:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(2784);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(t),m=o,f=d["".concat(l,".").concat(m)]||d[m]||s[m]||a;return t?n.createElement(f,i(i({ref:r},p),{},{components:t})):n.createElement(f,i({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},57192:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var n=t(7896),o=(t(2784),t(30876));const a={},i=void 0,c={unversionedId:"auto-generated/previews/angular/grid-fluid.ts",id:"auto-generated/previews/angular/grid-fluid.ts",title:"grid-fluid.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/grid-fluid.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/grid-fluid.ts",permalink:"/version-dev/docs/auto-generated/previews/angular/grid-fluid.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/grid-fluid.ts.md",tags:[],version:"current",frontMatter:{}},l={},u=[],p={toc:u};function s(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-example',\n  templateUrl: './grid-fluid.html',\n  styles: [\n    `\n      ix-grid {\n        margin-bottom: 1rem;\n      }\n\n      ix-col {\n        background-color: var(--theme-color-primary);\n        border: var(--theme-std-bdr-2);\n        text-align: center;\n        color: var(--theme-color-inv-contrast-text);\n      }\n\n      .example-parent {\n        padding-top: 1rem;\n        padding-bottom: 0.25rem;\n        background-color: var(--theme-color-info-40);\n      }\n    `,\n  ],\n})\nexport default class GridFluid {}\n")))}s.isMDXComponent=!0}}]);