"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[34416],{30876:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var o=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(n),p=r,b=u["".concat(s,".").concat(p)]||u[p]||m[p]||a;return n?o.createElement(b,i(i({ref:t},d),{},{components:n})):o.createElement(b,i({ref:t},d))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},19286:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var o=n(7896),r=(n(2784),n(30876));const a={},i=void 0,c={unversionedId:"auto-generated/previews/web-component/modal",id:"auto-generated/previews/web-component/modal",title:"modal",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/modal.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/modal",permalink:"/docs/auto-generated/previews/web-component/modal",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/modal.md",tags:[],version:"current",frontMatter:{}},s={},l=[],d={toc:l};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<div>\n  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy\n  eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam\n  voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet\n  clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit\n  amet.\n</div>\n<ix-button>Show Modal</ix-button>\n\n<template id=\"custom-modal\">\n  <div>\n    <div class=\"modal-header\">\n      Message headline\n      <ix-icon-button\n        data-button-close\n        ghost\n        icon=\"close\"\n        class=\"dismiss-modal\"\n      ></ix-icon-button>\n    </div>\n    <div class=\"modal-body\">Message text lorem ipsum</div>\n    <div class=\"modal-footer\">\n      <ix-button outline class=\"dismiss-modal\"> Cancel </ix-button>\n      <ix-button class=\"close-modal\">OK</ix-button>\n    </div>\n  </div>\n</template>\n\n<script type=\"module\">\n  import { modal, closeModal, dismissModal } from '@siemens/ix';\n\n  (async function () {\n    await window.customElements.whenDefined('ix-button');\n\n    const customModal = document.createElement('div');\n    const template = document.getElementById('custom-modal');\n    const templateContent = template.content;\n    customModal.appendChild(templateContent);\n\n    customModal\n      .querySelector('.close-modal')\n      .addEventListener('click', () => {\n        closeModal(customModal, 'Done!');\n      });\n\n    customModal.querySelectorAll('.dismiss-modal').forEach((item) =>\n      item.addEventListener('click', () => {\n        dismissModal(customModal, 'canceled!');\n      })\n    );\n\n    const button = document.querySelector('ix-button');\n    button.addEventListener('click', () => {\n      modal({\n        content: customModal,\n      });\n    });\n  })();\n<\/script>\n")))}m.isMDXComponent=!0}}]);