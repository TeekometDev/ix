"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[10401,56577],{30876:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,m=d["".concat(l,".").concat(h)]||d[h]||s[h]||o;return n?r.createElement(m,c(c({ref:t},u),{},{components:n})):r.createElement(m,c({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},56577:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(7896),a=(n(2784),n(30876));const o={},c=void 0,i={unversionedId:"auto-generated/previews/angular/push-card.html",id:"auto-generated/previews/angular/push-card.html",title:"push-card.html",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/push-card.html.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/push-card.html",permalink:"/version-dev/docs/auto-generated/previews/angular/push-card.html",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/push-card.html.md",tags:[],version:"current",frontMatter:{}},l={},p=[],u={toc:p};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<ix-push-card\n  icon="bulb"\n  notification="99"\n  heading="Heading content"\n  subheading="Subheading"\n  variant="insight"\n>\n  \x3c!-- Just example content --\x3e\n  <table class="table">\n    <thead>\n      <tr>\n        <th scope="col">#</th>\n        <th scope="col">First</th>\n        <th scope="col">Last</th>\n        <th scope="col">Handle</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <th scope="row">1</th>\n        <td>Mark</td>\n        <td>Otto</td>\n        <td>@mdo</td>\n      </tr>\n      <tr>\n        <th scope="row">2</th>\n        <td>Jacob</td>\n        <td>Thornton</td>\n        <td>@fat</td>\n      </tr>\n      <tr>\n        <th scope="row">3</th>\n        <td colspan="2">Larry the Bird</td>\n        <td>@twitter</td>\n      </tr>\n    </tbody>\n  </table>\n</ix-push-card>\n')))}s.isMDXComponent=!0}}]);