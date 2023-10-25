"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[42054,75059],{30876:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(2784);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(t),m=o,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return t?r.createElement(f,i(i({ref:n},d),{},{components:t})):r.createElement(f,i({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},75059:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=t(7896),o=(t(2784),t(30876));const a={},i=void 0,c={unversionedId:"auto-generated/previews/vue/tree-custom",id:"auto-generated/previews/vue/tree-custom",title:"tree-custom",description:"\x3c!--",source:"@site/docs/auto-generated/previews/vue/tree-custom.md",sourceDirName:"auto-generated/previews/vue",slug:"/auto-generated/previews/vue/tree-custom",permalink:"/version-dev/docs/auto-generated/previews/vue/tree-custom",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/vue/tree-custom.md",tags:[],version:"current",frontMatter:{}},l={},s=[],d={toc:s};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"\x3c!--\n * SPDX-FileCopyrightText: 2023 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n--\x3e\n\n<script lang=\"ts\" setup>\nimport { TreeContext, TreeModel } from '@siemens/ix';\nimport { IxButton, IxTree } from '@siemens/ix-vue';\nimport { defineComponent, onMounted, ref } from 'vue';\n\ntype TreeData = {\n  name: string;\n  icon: string;\n};\n\nconst context = ref<TreeContext>();\nconst model = ref<TreeModel<TreeData>>();\n\nfunction renderItem(data: TreeData) {\n  return defineComponent({\n    setup: () => {\n      data;\n    },\n    template: `\n    <div class=\"d-flex align-items-center\">\n      <IxIcon :name=\"data.icon\" size=\"16\" class=\"me-2\" />\n      {{ data.name }}\n    </div>`,\n  });\n}\n\nfunction expandAndSelect() {\n  context.value = {\n    sample: {\n      isExpanded: true,\n      isSelected: false,\n    },\n    'sample-child-2': {\n      isSelected: true,\n      isExpanded: false,\n    },\n  };\n}\n\nonMounted(() => {\n  model.value = {\n    root: {\n      id: 'root',\n      data: {\n        icon: '',\n        name: '',\n      },\n      hasChildren: true,\n      children: ['sample'],\n    },\n    sample: {\n      id: 'sample',\n      data: {\n        name: 'Sample',\n        icon: 'star',\n      },\n      hasChildren: true,\n      children: ['sample-child-1', 'sample-child-2'],\n    },\n    'sample-child-1': {\n      id: 'sample-child-1',\n      data: {\n        name: 'Sample Child 1',\n        icon: 'cut',\n      },\n      hasChildren: false,\n      children: [],\n    },\n    'sample-child-2': {\n      id: 'sample-child-2',\n      data: {\n        name: 'Sample Child 2',\n        icon: 'print',\n      },\n      hasChildren: false,\n      children: [],\n    },\n  };\n});\n<\/script>\n\n<template>\n  <div style=\"display: block; position: relative; width: 100%; height: 40rem\">\n    <IxButton @click=\"expandAndSelect\" ghost style=\"margin-bottom: 2rem\">\n      Expand Tree\n    </IxButton>\n    <IxTree\n      root=\"root\"\n      :model=\"model\"\n      :context=\"context\"\n      @contextChange=\"({ detail }) => (context = detail)\"\n    >\n    </IxTree>\n  </div>\n</template>\n\n")))}p.isMDXComponent=!0}}]);