"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[41955,79862],{30876:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,p=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||l[d]||p;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=n.length,a=new Array(p);a[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<p;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},79862:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>l,frontMatter:()=>p,metadata:()=>i,toc:()=>u});var r=n(7896),o=(n(2784),n(30876));const p={},a=void 0,i={unversionedId:"auto-generated/previews/web-component/input-types",id:"auto-generated/previews/web-component/input-types",title:"input-types",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/input-types.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/input-types",permalink:"/version-dev/docs/auto-generated/previews/web-component/input-types",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/input-types.md",tags:[],version:"current",frontMatter:{}},s={},u=[],c={toc:u};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'  <form class="needs-validation m-2">\n<ix-input-group style="margin-bottom: 0.5rem;">\n  <span slot="input-start">Text:</span>\n  <input placeholder="Enter text" type="text" class="form-control" />\n</ix-input-group>\n\n<ix-input-group style="margin-bottom: 0.5rem;">\n  <span slot="input-start">Number:</span>\n  <input type="number" class="form-control" />\n  <span slot="input-end">.00</span>\n  <span slot="input-end">$</span>\n</ix-input-group>\n\n<ix-input-group style="margin-bottom: 0.5rem;">\n  <span slot="input-start">Password:</span>\n  <input placeholder="Enter password" type="password" class="form-control" />\n</ix-input-group>\n\n<ix-input-group style="margin-bottom: 0.5rem;">\n  <span slot="input-start">Email:</span>\n  <input placeholder="example@domain.com" type="email" class="form-control" />\n</ix-input-group>\n\n<ix-input-group style="margin-bottom: 0.5rem;">\n  <span slot="input-start">Telephone:</span>\n  <input placeholder="111-111-111" type="tel" class="form-control" />\n</ix-input-group>\n  </form>\n')))}l.isMDXComponent=!0}}]);