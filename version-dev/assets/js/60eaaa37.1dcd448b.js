"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[96816,7053],{30876:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>u});var r=t(2784);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(t),u=a,f=m["".concat(c,".").concat(u)]||m[u]||d[u]||o;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7053:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=t(7896),a=(t(2784),t(30876));const o={},i=void 0,l={unversionedId:"auto-generated/previews/angular/tree-custom.ts",id:"auto-generated/previews/angular/tree-custom.ts",title:"tree-custom.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/tree-custom.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/tree-custom.ts",permalink:"/version-dev/docs/auto-generated/previews/angular/tree-custom.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/tree-custom.ts.md",tags:[],version:"current",frontMatter:{}},c={},s=[],p={toc:s};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"/*\n * SPDX-FileCopyrightText: 2023 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { Component } from '@angular/core';\nimport { TreeContext, TreeModel } from '@siemens/ix';\n\ntype TreeData = {\n  name: string;\n  icon: string;\n};\n\n@Component({\n  selector: 'app-example',\n  styles: [\n    `\n      .example {\n        display: block;\n        position: relative;\n        height: 32rem;\n        width: 100%;\n      }\n    `,\n  ],\n  template: `<div class=\"example\">\n    <ix-button\n      id=\"expand\"\n      ghost\n      style=\"margin-bottom: 2rem\"\n      (click)=\"expandAndSelect()\"\n      >Expand Tree</ix-button\n    >\n    <ix-tree\n      root=\"root\"\n      [model]=\"model\"\n      [context]=\"context\"\n      [renderItem]=\"treeItem\"\n    ></ix-tree>\n    <ng-template #treeItem let-item>\n      <div class=\"d-flex align-items-center\">\n        <ix-icon [name]=\"item.icon\" size=\"16\" class=\"me-2\"></ix-icon>\n        {{ item.name }}\n      </div>\n    </ng-template>\n  </div>`,\n})\nexport default class TreeCustom {\n  context: TreeContext = {};\n  model: TreeModel<TreeData> = {\n    root: {\n      id: 'root',\n      data: {\n        icon: '',\n        name: '',\n      },\n      hasChildren: true,\n      children: ['sample'],\n    },\n    sample: {\n      id: 'sample',\n      data: {\n        name: 'Sample',\n        icon: 'star',\n      },\n      hasChildren: true,\n      children: ['sample-child-1', 'sample-child-2'],\n    },\n    'sample-child-1': {\n      id: 'sample-child-1',\n      data: {\n        name: 'Sample Child 1',\n        icon: 'cut',\n      },\n      hasChildren: false,\n      children: [],\n    },\n    'sample-child-2': {\n      id: 'sample-child-2',\n      data: {\n        name: 'Sample Child 2',\n        icon: 'print',\n      },\n      hasChildren: false,\n      children: [],\n    },\n  };\n\n  expandAndSelect() {\n    this.context = {\n      sample: {\n        isExpanded: true,\n        isSelected: false,\n      },\n      'sample-child-2': {\n        isSelected: true,\n        isExpanded: false,\n      },\n    };\n  }\n}\n\n")))}d.isMDXComponent=!0}}]);