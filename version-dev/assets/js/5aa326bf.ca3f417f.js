"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[16508,56850],{30876:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(2784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),m=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=m(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=m(r),d=a,b=p["".concat(u,".").concat(d)]||p[d]||l[d]||o;return r?n.createElement(b,c(c({ref:t},s),{},{components:r})):n.createElement(b,c({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var m=2;m<o;m++)c[m]=r[m];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},56850:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var n=r(7896),a=(r(2784),r(30876));const o={},c=void 0,i={unversionedId:"auto-generated/previews/angular/breadcrumb-next-items.ts",id:"auto-generated/previews/angular/breadcrumb-next-items.ts",title:"breadcrumb-next-items.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/breadcrumb-next-items.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/breadcrumb-next-items.ts",permalink:"/version-dev/docs/auto-generated/previews/angular/breadcrumb-next-items.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/breadcrumb-next-items.ts.md",tags:[],version:"current",frontMatter:{}},u={},m=[],s={toc:m};function l(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-example\',\n  template: `\n    <ix-breadcrumb [nextItems]="nextItems">\n      <ix-breadcrumb-item label="Item 1"></ix-breadcrumb-item>\n      <ix-breadcrumb-item label="Item 2"></ix-breadcrumb-item>\n      <ix-breadcrumb-item label="Item 3"></ix-breadcrumb-item>\n    </ix-breadcrumb>\n  `,\n})\nexport default class BreadcrumbNextItems {\n  nextItems = [\'Next Item 1\'];\n}\n')))}l.isMDXComponent=!0}}]);