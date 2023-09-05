"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[45394,45355],{30876:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var i=t(2784);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=i.createContext({}),p=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=p(e.components);return i.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},f=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),f=p(t),m=r,u=f["".concat(c,".").concat(m)]||f[m]||s[m]||l;return t?i.createElement(u,a(a({ref:n},d),{},{components:t})):i.createElement(u,a({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,a=new Array(l);a[0]=f;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,a[1]=o;for(var p=2;p<l;p++)a[p]=t[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}f.displayName="MDXCreateElement"},45355:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var i=t(7896),r=(t(2784),t(30876));const l={},a=void 0,o={unversionedId:"auto-generated/previews/angular/flip-tile.ts",id:"auto-generated/previews/angular/flip-tile.ts",title:"flip-tile.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/flip-tile.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/flip-tile.ts",permalink:"/version-dev/docs/auto-generated/previews/angular/flip-tile.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/flip-tile.ts.md",tags:[],version:"current",frontMatter:{}},c={},p=[],d={toc:p};function s(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-example\',\n  template: `\n    <ix-flip-tile>\n      <div slot="header">Flip header</div>\n\n      <div slot="footer">\n        <div>Predicted maintenance date</div>\n        <div class="d-flex align-items-center">\n          <ix-icon name="info" size="16"></ix-icon>2021-06-22\n        </div>\n      </div>\n\n      <ix-flip-tile-content> Example 1 </ix-flip-tile-content>\n      <ix-flip-tile-content> Example 2 </ix-flip-tile-content>\n    </ix-flip-tile>\n\n    <ix-flip-tile state="primary">\n      <div slot="header">Flip header</div>\n      <div slot="footer">\n        <div>Predicted maintenance date</div>\n        <div class="d-flex align-items-center">\n          <ix-icon name="info" size="16"></ix-icon>2021-06-22\n        </div>\n      </div>\n      <ix-flip-tile-content> Example 1 </ix-flip-tile-content>\n      <ix-flip-tile-content> Example 2 </ix-flip-tile-content>\n    </ix-flip-tile>\n\n    <ix-flip-tile state="Info">\n      <div slot="header">Flip header</div>\n      <div slot="footer">\n        <div>Predicted maintenance date</div>\n        <div class="d-flex align-items-center">\n          <ix-icon name="info" size="16"></ix-icon>2021-06-22\n        </div>\n      </div>\n      <ix-flip-tile-content> Example 1 </ix-flip-tile-content>\n      <ix-flip-tile-content> Example 2 </ix-flip-tile-content>\n    </ix-flip-tile>\n\n    <ix-flip-tile state="Warning">\n      <div slot="header">Flip header</div>\n      <div slot="footer">\n        <div>Predicted maintenance date</div>\n        <div class="d-flex align-items-center">\n          <ix-icon name="info" size="16"></ix-icon>2021-06-22\n        </div>\n      </div>\n      <ix-flip-tile-content> Example 1 </ix-flip-tile-content>\n      <ix-flip-tile-content> Example 2 </ix-flip-tile-content>\n    </ix-flip-tile>\n\n    <ix-flip-tile state="Alarm">\n      <div slot="header">Flip header</div>\n      <div slot="footer">\n        <div>Predicted maintenance date</div>\n        <div class="d-flex align-items-center">\n          <ix-icon name="info" size="16"></ix-icon>2021-06-22\n        </div>\n      </div>\n      <ix-flip-tile-content> Example 1 </ix-flip-tile-content>\n      <ix-flip-tile-content> Example 2 </ix-flip-tile-content>\n    </ix-flip-tile>\n  `,\n})\nexport default class FlipTile {}\n')))}s.isMDXComponent=!0}}]);