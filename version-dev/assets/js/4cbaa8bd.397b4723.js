"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[70407,53447],{30876:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(2784);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=l,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},53447:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var r=n(7896),l=(n(2784),n(30876));const a={},i=void 0,o={unversionedId:"auto-generated/previews/react/pill",id:"auto-generated/previews/react/pill",title:"pill",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/pill.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/pill",permalink:"/version-dev/docs/auto-generated/previews/react/pill",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/pill.md",tags:[],version:"current",frontMatter:{}},c={},s=[],p={toc:s};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'import { IxPill } from \'@siemens/ix-react\';\nimport React, { CSSProperties } from \'react\';\n\nexport default () => {\n  const styled: CSSProperties = {\n    width: \'8rem\',\n  };\n\n  return (\n    <>\n      <IxPill variant="custom" color="white" background="purple">\n        Label\n      </IxPill>\n\n      <IxPill>Label</IxPill>\n      <IxPill outline>Label</IxPill>\n      <IxPill style={styled}>Label</IxPill>\n\n      <IxPill icon="star">Label</IxPill>\n      <IxPill icon="star" style={styled}>\n        Label\n      </IxPill>\n      <IxPill outline alignLeft icon="star" style={styled}>\n        Label\n      </IxPill>\n\n      <IxPill variant="alarm">Label</IxPill>\n      <IxPill variant="alarm" outline>\n        Label\n      </IxPill>\n      <IxPill variant="alarm" style={styled}>\n        Label\n      </IxPill>\n\n      <IxPill variant="alarm" icon="star">\n        Label\n      </IxPill>\n      <IxPill variant="alarm" icon="star" style={styled}>\n        Label\n      </IxPill>\n      <IxPill variant="alarm" outline alignLeft icon="star" style={styled}>\n        Label\n      </IxPill>\n    </>\n  );\n};\n')))}u.isMDXComponent=!0}}]);