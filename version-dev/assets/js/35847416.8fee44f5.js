"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[24311,34173],{30876:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=u(n),m=o,w=s["".concat(c,".").concat(m)]||s[m]||l[m]||a;return n?r.createElement(w,p(p({ref:t},d),{},{components:n})):r.createElement(w,p({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var u=2;u<a;u++)p[u]=n[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},34173:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=n(7896),o=(n(2784),n(30876));const a={},p=void 0,i={unversionedId:"auto-generated/previews/vue/dropdown-button",id:"auto-generated/previews/vue/dropdown-button",title:"dropdown-button",description:"\x3c!--",source:"@site/docs/auto-generated/previews/vue/dropdown-button.md",sourceDirName:"auto-generated/previews/vue",slug:"/auto-generated/previews/vue/dropdown-button",permalink:"/version-dev/docs/auto-generated/previews/vue/dropdown-button",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/vue/dropdown-button.md",tags:[],version:"current",frontMatter:{}},c={},u=[],d={toc:u};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<script setup lang="ts">\nimport { IxDropdownButton } from \'@siemens/ix-vue\';\n<\/script>\n\n<template>\n  <IxDropdownButton label="Dropdown" variant="primary" icon="checkboxes">\n    <IxDropdownItem label="Item 1"></IxDropdownItem>\n    <IxDropdownItem label="Item 2"></IxDropdownItem>\n  </IxDropdownButton>\n\n  <IxDropdownButton label="Dropdown" variant="primary" ghost icon="checkboxes">\n    <IxDropdownItem label="Item 1"></IxDropdownItem>\n    <IxDropdownItem label="Item 2"></IxDropdownItem>\n  </IxDropdownButton>\n\n  <IxDropdownButton\n    label="Dropdown"\n    variant="primary"\n    disabled\n    icon="checkboxes"\n  >\n    <IxDropdownItem label="Item 1"></IxDropdownItem>\n    <IxDropdownItem label="Item 2"></IxDropdownItem>\n  </IxDropdownButton>\n</template>\n')))}l.isMDXComponent=!0}}]);