"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[72721,72048],{30876:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(n),f=o,d=m["".concat(i,".").concat(f)]||m[f]||p[f]||c;return n?r.createElement(d,a(a({ref:t},s),{},{components:n})):r.createElement(d,a({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<c;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},72048:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var r=n(7896),o=(n(2784),n(30876));const c={},a=void 0,l={unversionedId:"auto-generated/previews/react/select-multiple",id:"auto-generated/previews/react/select-multiple",title:"select-multiple",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/select-multiple.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/select-multiple",permalink:"/version-dev/docs/auto-generated/previews/react/select-multiple",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/select-multiple.md",tags:[],version:"current",frontMatter:{}},i={},u=[],s={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'/*\n * SPDX-FileCopyrightText: 2023 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { IxSelect, IxSelectItem } from \'@siemens/ix-react\';\nimport React, { useLayoutEffect, useState } from \'react\';\n\nexport default () => {\n  const [selection, setSelection] = useState<string[]>([]);\n\n  useLayoutEffect(() => {\n    setSelection([\'1\', \'3\']);\n  }, [setSelection]);\n\n  return (\n    <IxSelect mode="multiple" value={selection}>\n      <IxSelectItem label="Item 1" value="1"></IxSelectItem>\n      <IxSelectItem label="Item 2" value="2"></IxSelectItem>\n      <IxSelectItem label="Item 3" value="3"></IxSelectItem>\n      <IxSelectItem label="Item 4" value="4"></IxSelectItem>\n    </IxSelect>\n  );\n};\n\n')))}p.isMDXComponent=!0}}]);