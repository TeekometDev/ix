"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[25248,28674],{30876:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=u(n),y=a,m=f["".concat(c,".").concat(y)]||f[y]||p[y]||o;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},28674:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(7896),a=(n(2784),n(30876));const o={},i=void 0,l={unversionedId:"auto-generated/previews/react/key-value-list-with-icon",id:"auto-generated/previews/react/key-value-list-with-icon",title:"key-value-list-with-icon",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/key-value-list-with-icon.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/key-value-list-with-icon",permalink:"/version-dev/docs/auto-generated/previews/react/key-value-list-with-icon",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/key-value-list-with-icon.md",tags:[],version:"current",frontMatter:{}},c={},u=[],s={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { IxKeyValue, IxKeyValueList } from \'@siemens/ix-react\';\nimport React from \'react\';\n\nexport default () => {\n  return (\n    <IxKeyValueList>\n      <IxKeyValue\n        icon="location"\n        label="Label"\n        labelPosition="left"\n        value="Value"\n      ></IxKeyValue>\n      <IxKeyValue\n        icon="location"\n        label="Label"\n        labelPosition="left"\n        value="Value"\n      ></IxKeyValue>\n      <IxKeyValue\n        icon="location"\n        label="Label"\n        labelPosition="left"\n        value="Value"\n      ></IxKeyValue>\n    </IxKeyValueList>\n  );\n};\n')))}p.isMDXComponent=!0}}]);