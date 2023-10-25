"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[69772,89169],{30876:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(2784);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(t),d=o,f=m["".concat(p,".").concat(d)]||m[d]||l[d]||a;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},89169:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=t(7896),o=(t(2784),t(30876));const a={},i=void 0,c={unversionedId:"auto-generated/previews/web-component/input-search",id:"auto-generated/previews/web-component/input-search",title:"input-search",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/input-search.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/input-search",permalink:"/version-dev/docs/auto-generated/previews/web-component/input-search",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/input-search.md",tags:[],version:"current",frontMatter:{}},p={},s=[],u={toc:s};function l(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html\x3c!--"},'SPDX-FileCopyrightText: 2023 Siemens AG\n\nSPDX-License-Identifier: MIT\n--\x3e\n\n<!DOCTYPE html>\n<html>\n  <head>\n    <title>Input Search example</title>\n  </head>\n  <body class="theme-brand-dark">\n    <form class="needs-validation m-2">\n      <ix-input-group>\n        <span slot="input-start">\n          <ix-icon name="search" size="16"></ix-icon>\n        </span>\n        <input onInput="toggleClear()" id="input-string" type="string" />\n        <span slot="input-end">\n          <ix-icon-button\n            id="clear-button"\n            icon="clear"\n            ghost="{true}"\n            size="16"\n            onClick="{clearInput()}"\n          ></ix-icon-button>\n        </span>\n      </ix-input-group>\n    </form>\n    <script>\n      toggleClear();\n      function clearInput() {\n        document.getElementById(\'input-string\').value = \'\';\n        toggleClear();\n      }\n\n      function toggleClear() {\n        const hasContent = document.getElementById(\'input-string\').value !== \'\';\n        document.getElementById(\'clear-button\').style.display = hasContent\n          ? \'block\'\n          : \'none\';\n      }\n    <\/script>\n    <script type="module" src="./init.js"><\/script>\n  </body>\n</html>\n\n')))}l.isMDXComponent=!0}}]);