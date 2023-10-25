"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[69940],{69940:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7896),i=(n(2784),n(30876));const o={},a=void 0,s={unversionedId:"auto-generated/previews/vue/category-filter",id:"auto-generated/previews/vue/category-filter",title:"category-filter",description:"\x3c!--",source:"@site/docs/auto-generated/previews/vue/category-filter.md",sourceDirName:"auto-generated/previews/vue",slug:"/auto-generated/previews/vue/category-filter",permalink:"/version-dev/docs/auto-generated/previews/vue/category-filter",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/vue/category-filter.md",tags:[],version:"current",frontMatter:{}},c={},l=[],u={toc:l};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"\x3c!--\n * SPDX-FileCopyrightText: 2023 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n--\x3e\n\n<script setup lang=\"ts\">\nimport { FilterState, LogicalFilterOperator } from '@siemens/ix';\nimport { IxCategoryFilter } from '@siemens/ix-vue';\n\nconst filter: FilterState = {\n  tokens: ['Custom filter text'],\n  categories: [\n    {\n      id: 'ID_1',\n      value: 'IBM',\n      operator: LogicalFilterOperator.NOT_EQUAL,\n    },\n  ],\n};\n\nconst categories = {\n  ID_1: {\n    label: 'Vendor',\n    options: ['Apple', 'MS', 'Siemens'],\n  },\n  ID_2: {\n    label: 'Product',\n    options: ['iPhone X', 'Windows', 'APS'],\n  },\n};\n<\/script>\n\n<template>\n  <IxCategoryFilter\n    placeholder=\"Filter by\"\n    repeatCategories\n    :filterState=\"filter\"\n    :categories=\"categories\"\n  ></IxCategoryFilter>\n</template>\n\n")))}d.isMDXComponent=!0}}]);