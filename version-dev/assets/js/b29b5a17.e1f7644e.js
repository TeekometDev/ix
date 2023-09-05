"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[77919,54013],{30876:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},54013:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=n(7896),o=(n(2784),n(30876));const a={},i=void 0,c={unversionedId:"auto-generated/previews/vue/blind-header-actions",id:"auto-generated/previews/vue/blind-header-actions",title:"blind-header-actions",description:"\x3c!--",source:"@site/docs/auto-generated/previews/vue/blind-header-actions.md",sourceDirName:"auto-generated/previews/vue",slug:"/auto-generated/previews/vue/blind-header-actions",permalink:"/version-dev/docs/auto-generated/previews/vue/blind-header-actions",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/vue/blind-header-actions.md",tags:[],version:"current",frontMatter:{}},s={},u=[],l={toc:u};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<script setup lang="ts">\nimport { IxBlind, IxDropdown, IxIconButton } from \'@siemens/ix-vue\';\n<\/script>\n\n<template>\n  <IxBlind label="Example">\n    <IxIconButton\n      slot="header-actions"\n      id="context-menu"\n      ghost\n      icon="context-menu"\n    ></IxIconButton>\n    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy\n    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam\n    voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet\n    clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit\n    amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam\n    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed\n    diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet\n    clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit\n    amet.\n  </IxBlind>\n  <IxDropdown trigger="context-menu">\n    <IxDropdownItem label="Rename..." icon="Rename"></IxDropdownItem>\n    <IxDropdownItem label="trashcan" icon="Delete"></IxDropdownItem>\n  </IxDropdown>\n</template>\n')))}d.isMDXComponent=!0}}]);