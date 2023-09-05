"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[81587,5081],{30876:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>s});var n=t(2784);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),m=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},l=function(e){var r=m(e.components);return n.createElement(i.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},b=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),b=m(t),s=a,d=b["".concat(i,".").concat(s)]||b[s]||p[s]||o;return t?n.createElement(d,c(c({ref:r},l),{},{components:t})):n.createElement(d,c({ref:r},l))}));function s(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=b;var u={};for(var i in r)hasOwnProperty.call(r,i)&&(u[i]=r[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,c[1]=u;for(var m=2;m<o;m++)c[m]=t[m];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}b.displayName="MDXCreateElement"},5081:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>m});var n=t(7896),a=(t(2784),t(30876));const o={},c=void 0,u={unversionedId:"auto-generated/previews/angular/breadcrumb-truncate.ts",id:"auto-generated/previews/angular/breadcrumb-truncate.ts",title:"breadcrumb-truncate.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/breadcrumb-truncate.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/breadcrumb-truncate.ts",permalink:"/version-dev/docs/auto-generated/previews/angular/breadcrumb-truncate.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/breadcrumb-truncate.ts.md",tags:[],version:"current",frontMatter:{}},i={},m=[],l={toc:m};function p(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-example\',\n  template: `\n    <ix-breadcrumb visibleItemCount="3">\n      <ix-breadcrumb-item label="Item 1"></ix-breadcrumb-item>\n      <ix-breadcrumb-item label="Item 2"></ix-breadcrumb-item>\n      <ix-breadcrumb-item label="Item 3"></ix-breadcrumb-item>\n      <ix-breadcrumb-item label="Item 4"></ix-breadcrumb-item>\n      <ix-breadcrumb-item label="Item 5"></ix-breadcrumb-item>\n    </ix-breadcrumb>\n  `,\n})\nexport default class BreadcrumbTruncate {}\n')))}p.isMDXComponent=!0}}]);