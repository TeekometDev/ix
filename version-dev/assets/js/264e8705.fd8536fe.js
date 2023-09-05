"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[14406,21182],{30876:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var n=r(2784);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(r),g=o,d=m["".concat(p,".").concat(g)]||m[g]||l[g]||a;return r?n.createElement(d,u(u({ref:t},s),{},{components:r})):n.createElement(d,u({ref:t},s))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,u=new Array(a);u[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,u[1]=i;for(var c=2;c<a;c++)u[c]=r[c];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},21182:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(7896),o=(r(2784),r(30876));const a={},u=void 0,i={unversionedId:"auto-generated/previews/angular/group-custom-entry.ts",id:"auto-generated/previews/angular/group-custom-entry.ts",title:"group-custom-entry.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/group-custom-entry.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/group-custom-entry.ts",permalink:"/version-dev/docs/auto-generated/previews/angular/group-custom-entry.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/group-custom-entry.ts.md",tags:[],version:"current",frontMatter:{}},p={},c=[],s={toc:c};function l(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-example\',\n  template: `\n    <ix-group header="Header text" sub-header="Subheader text">\n      <ix-group-item text="Example text 1"></ix-group-item>\n      <ix-group-item text="Example text 2"></ix-group-item>\n      <ix-group-item><ix-button>Test</ix-button></ix-group-item>\n    </ix-group>\n  `,\n})\nexport default class GroupCustomEntry {}\n')))}l.isMDXComponent=!0}}]);