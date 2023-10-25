"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[12369],{12369:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>g});var n=r(7896),s=(r(2784),r(30876));const o={},i=void 0,a={unversionedId:"auto-generated/previews/react/category-filter-suggestions",id:"auto-generated/previews/react/category-filter-suggestions",title:"category-filter-suggestions",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/category-filter-suggestions.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/category-filter-suggestions",permalink:"/version-dev/docs/auto-generated/previews/react/category-filter-suggestions",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/category-filter-suggestions.md",tags:[],version:"current",frontMatter:{}},c={},g=[],u={toc:g};function d(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"/*\n * SPDX-FileCopyrightText: 2023 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { IxCategoryFilter } from '@siemens/ix-react';\nimport React, { useState } from 'react';\n\nexport default () => {\n  const [suggestions] = useState(['Item 1', 'Item 2']);\n\n  return (\n    <IxCategoryFilter\n      placeholder=\"Filter by\"\n      suggestions={suggestions}\n    ></IxCategoryFilter>\n  );\n};\n\n")))}d.isMDXComponent=!0}}]);