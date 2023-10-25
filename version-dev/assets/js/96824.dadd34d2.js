"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[96824],{96824:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>u});var o=t(7896),a=(t(2784),t(30876));const r={},i=void 0,c={unversionedId:"auto-generated/previews/react/menu-category",id:"auto-generated/previews/react/menu-category",title:"menu-category",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/menu-category.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/menu-category",permalink:"/version-dev/docs/auto-generated/previews/react/menu-category",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/menu-category.md",tags:[],version:"current",frontMatter:{}},s={},u=[],m={toc:u};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'/*\n * SPDX-FileCopyrightText: 2023 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\nimport {\n  IxBasicNavigation,\n  IxMenu,\n  IxMenuCategory,\n  IxMenuItem,\n} from \'@siemens/ix-react\';\nimport React from \'react\';\n\nexport default () => {\n  return (\n    <IxBasicNavigation>\n      <IxMenu>\n        <IxMenuItem home icon="home">\n          Home\n        </IxMenuItem>\n        <IxMenuItem icon="globe">Normal Tab</IxMenuItem>\n        <IxMenuCategory label="Top level Category" icon="rocket">\n          <IxMenuItem icon="globe">Nested Tab</IxMenuItem>\n          <IxMenuItem icon="globe">Nested Tab</IxMenuItem>\n        </IxMenuCategory>\n      </IxMenu>\n    </IxBasicNavigation>\n  );\n};\n\n')))}d.isMDXComponent=!0}}]);