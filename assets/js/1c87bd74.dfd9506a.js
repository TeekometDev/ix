"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[34273],{30876:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>p});var o=t(2784);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(t),p=r,f=m["".concat(l,".").concat(p)]||m[p]||u[p]||a;return t?o.createElement(f,i(i({ref:n},d),{},{components:t})):o.createElement(f,i({ref:n},d))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},25597:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=t(7896),r=(t(2784),t(30876));const a={},i=void 0,s={unversionedId:"auto-generated/previews/angular/modal",id:"auto-generated/previews/angular/modal",title:"modal",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/modal.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/modal",permalink:"/docs/auto-generated/previews/angular/modal",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/modal.md",tags:[],version:"current",frontMatter:{}},l={},c=[],d={toc:c};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { Component, TemplateRef, ViewChild } from \'@angular/core\';\nimport { ModalService } from \'@siemens/ix-angular\';\n\n@Component({\n  selector: \'app-modal\',\n  template: `\n    <div>\n      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy\n      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam\n      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet\n      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit\n      amet.\n    </div>\n    <ix-button (click)="test()">Show Modal</ix-button>\n\n    <ng-template #customModal let-modal>\n      <div>\n        <div class="modal-header">\n          Message headline\n          <ix-icon-button\n            data-button-close\n            ghost\n            icon="close"\n            class="dismiss-modal"\n            (click)="modal.dismiss(\'dismiss\')"\n          ></ix-icon-button>\n        </div>\n        <div class="modal-body">Message text lorem ipsum</div>\n        <div class="modal-footer">\n          <ix-button\n            outline\n            class="dismiss-modal"\n            (click)="modal.dismiss(\'dismiss\')"\n          >\n            Cancel\n          </ix-button>\n          <ix-button class="close-modal" (click)="modal.close(\'okay\')"\n            >OK</ix-button\n          >\n        </div>\n      </div>\n    </ng-template>\n  `,\n})\nexport class Modal {\n  @ViewChild(\'customModal\', { read: TemplateRef })\n  customModalRef!: TemplateRef<any>;\n\n  constructor(private readonly modalService: ModalService) {}\n\n  async test() {\n    const instance = await this.modalService.open({\n      content: this.customModalRef,\n      title: \'\',\n    });\n\n    instance.onClose.on((a) => {\n      console.log(a);\n    });\n  }\n}\n')))}u.isMDXComponent=!0}}]);