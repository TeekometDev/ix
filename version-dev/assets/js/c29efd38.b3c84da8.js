"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[95458],{30876:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>p});var a=r(2784);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(r),p=n,v=d["".concat(c,".").concat(p)]||d[p]||m[p]||l;return r?a.createElement(v,o(o({ref:t},u),{},{components:r})):a.createElement(v,o({ref:t},u))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},63483:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(2784),n=r(731);function l(e){var t,r,l,o,i,c,s,u;return a.createElement("div",{className:"row with--border"},a.createElement("div",{className:"col-sm-6"},a.createElement("div",{className:"ApiTable__Name"},null==e||null==(t=e.attribute)?void 0:t.name,null==e||null==(r=e.attribute)||null==(l=r.tags)?void 0:l.filter((e=>"since"===e.type)).map((t=>{var r;return a.createElement(n.h,{message:t.message,key:`Tag_Since_${null==e||null==(r=e.attribute)?void 0:r.name}`})})),null==e||null==(o=e.attribute)||null==(i=o.tags)?void 0:i.filter((e=>"deprecated"===e.type)).map((t=>{var r;return a.createElement(n.Q,{message:t.message,key:`Tag_Deprecated_${null==e||null==(r=e.attribute)?void 0:r.name}`})})))),a.createElement("div",{className:"col-sm-6"},a.createElement("div",{className:"ApiTable__Content"},a.createElement("span",{className:"Attribute__Description"},null==e||null==(c=e.attribute)?void 0:c.description),a.createElement("div",{className:"container-fluid"},null==e||null==(s=e.attribute)||null==(u=s.definition)?void 0:u.filter((e=>void 0!==e.value)).map((e=>a.createElement("div",{className:"row Attribute",key:e.name},a.createElement("div",{className:"col-auto Attribute__Name"},e.name,":"),a.createElement("code",{className:"col-auto Attribute__Value"},e.value))))))))}const o=function(e){var t;return a.createElement("div",{className:"container-fluid ApiTable"},a.createElement("div",{className:"row with--border"},a.createElement("div",{className:"col-sm-6 ApiTable__Headline"},"Name"),a.createElement("div",{className:"col-sm-6 ApiTable__Headline"},"Description and specifications")),null==e||null==(t=e.attributes)?void 0:t.map((e=>a.createElement(l,{attribute:e,key:e.name}))))}},731:(e,t,r)=>{r.d(t,{Q:()=>n,h:()=>l});var a=r(2784);function n(e){return a.createElement("div",{className:"ApiTableTag"},a.createElement("div",{className:"Tag Tag--Deprecated"},"Deprecated"),a.createElement("div",{className:"Tag__Message--Deprecated"},e.message))}function l(e){return a.createElement("div",{className:"ApiTableTag"},a.createElement("div",{className:"Tag"},"Since ",e.message))}},35495:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var a=r(7896),n=(r(2784),r(30876)),l=r(63483);const o={},i=void 0,c={unversionedId:"auto-generated/utils/core/showModal",id:"auto-generated/utils/core/showModal",title:"showModal",description:"",source:"@site/docs/auto-generated/utils/core/showModal.md",sourceDirName:"auto-generated/utils/core",slug:"/auto-generated/utils/core/showModal",permalink:"/version-dev/docs/auto-generated/utils/core/showModal",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/utils/core/showModal.md",tags:[],version:"current",frontMatter:{}},s={},u=[],m={toc:u};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(l.Z,{attributes:[],mdxType:"ApiTable"}))}d.isMDXComponent=!0}}]);