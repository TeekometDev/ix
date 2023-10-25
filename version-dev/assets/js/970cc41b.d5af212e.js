"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[91501,55708],{30876:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(n),b=a,m=d["".concat(s,".").concat(b)]||d[b]||p[b]||o;return n?r.createElement(m,c(c({ref:t},u),{},{components:n})):r.createElement(m,c({ref:t},u))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},55708:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(7896),a=(n(2784),n(30876));const o={},c=void 0,i={unversionedId:"auto-generated/previews/react/tabs",id:"auto-generated/previews/react/tabs",title:"tabs",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/tabs.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/tabs",permalink:"/version-dev/docs/auto-generated/previews/react/tabs",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/tabs.md",tags:[],version:"current",frontMatter:{}},s={},l=[],u={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"/*\n * SPDX-FileCopyrightText: 2023 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { IxTabItem, IxTabs } from '@siemens/ix-react';\nimport React, { useState } from 'react';\n\nexport default () => {\n  const [selectedTab, setSelectedTab] = useState(0);\n\n  const changeTab = (tabId: number) => setSelectedTab(tabId);\n\n  return (\n    <div\n      style={{\n        display: 'block',\n        position: 'relative',\n        width: '100%',\n      }}\n    >\n      <IxTabs selected={selectedTab}>\n        <IxTabItem onClick={() => changeTab(0)}>Tab 1</IxTabItem>\n        <IxTabItem onClick={() => changeTab(1)}>Tab 2</IxTabItem>\n        <IxTabItem onClick={() => changeTab(2)}>Tab 3</IxTabItem>\n      </IxTabs>\n      {selectedTab === 0 ? <div>Content 1</div> : null}\n      {selectedTab === 1 ? <div>Content 2</div> : null}\n      {selectedTab === 2 ? <div>Content 3</div> : null}\n    </div>\n  );\n};\n\n")))}p.isMDXComponent=!0}}]);