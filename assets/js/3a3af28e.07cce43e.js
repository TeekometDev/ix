"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[59777],{30876:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var i=t(2784);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=i.createContext({}),p=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return i.createElement(c.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},s=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),s=p(t),m=r,v=s["".concat(c,".").concat(m)]||s[m]||f[m]||l;return t?i.createElement(v,o(o({ref:n},d),{},{components:t})):i.createElement(v,o({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=s;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,o[1]=a;for(var p=2;p<l;p++)o[p]=t[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}s.displayName="MDXCreateElement"},21381:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>a,toc:()=>p});var i=t(7896),r=(t(2784),t(30876));const l={},o=void 0,a={unversionedId:"auto-generated/previews/web-component/flip-tile",id:"auto-generated/previews/web-component/flip-tile",title:"flip-tile",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/flip-tile.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/flip-tile",permalink:"/docs/auto-generated/previews/web-component/flip-tile",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/flip-tile.md",tags:[],version:"current",frontMatter:{}},c={},p=[],d={toc:p};function f(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<div class="example">\n  <ix-flip-tile>\n    <div slot="header">Flip header</div>\n\n    <div slot="footer">\n      <div>Predicted maintenance date</div>\n      <div class="d-flex align-items-center">\n        <ix-icon name="info" size="16"></ix-icon>2021-06-22\n      </div>\n    </div>\n\n    <ix-flip-tile-content> Example 1 </ix-flip-tile-content>\n    <ix-flip-tile-content> Example 2 </ix-flip-tile-content>\n  </ix-flip-tile>\n\n  <ix-flip-tile state="Primary">\n    <div slot="header">Flip header</div>\n    <div slot="footer">\n      <div>Predicted maintenance date</div>\n      <div class="d-flex align-items-center">\n        <ix-icon name="info" size="16"></ix-icon>2021-06-22\n      </div>\n    </div>\n    <ix-flip-tile-content> Example 1 </ix-flip-tile-content>\n    <ix-flip-tile-content> Example 2 </ix-flip-tile-content>\n  </ix-flip-tile>\n\n  <ix-flip-tile state="Info">\n    <div slot="header">Flip header</div>\n    <div slot="footer">\n      <div>Predicted maintenance date</div>\n      <div class="d-flex align-items-center">\n        <ix-icon name="info" size="16"></ix-icon>2021-06-22\n      </div>\n    </div>\n    <ix-flip-tile-content> Example 1 </ix-flip-tile-content>\n    <ix-flip-tile-content> Example 2 </ix-flip-tile-content>\n  </ix-flip-tile>\n\n  <ix-flip-tile state="Warning">\n    <div slot="header">Flip header</div>\n    <div slot="footer">\n      <div>Predicted maintenance date</div>\n      <div class="d-flex align-items-center">\n        <ix-icon name="info" size="16"></ix-icon>2021-06-22\n      </div>\n    </div>\n    <ix-flip-tile-content> Example 1 </ix-flip-tile-content>\n    <ix-flip-tile-content> Example 2 </ix-flip-tile-content>\n  </ix-flip-tile>\n\n  <ix-flip-tile state="Alarm">\n    <div slot="header">Flip header</div>\n    <div slot="footer">\n      <div>Predicted maintenance date</div>\n      <div class="d-flex align-items-center">\n        <ix-icon name="info" size="16"></ix-icon>2021-06-22\n      </div>\n    </div>\n    <ix-flip-tile-content> Example 1 </ix-flip-tile-content>\n    <ix-flip-tile-content> Example 2 </ix-flip-tile-content>\n  </ix-flip-tile>\n</div>\n')))}f.isMDXComponent=!0}}]);