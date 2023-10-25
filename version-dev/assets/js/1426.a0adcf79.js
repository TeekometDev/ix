"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1426],{1426:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var s=n(7896),a=(n(2784),n(30876));const r={},o=void 0,i={unversionedId:"auto-generated/previews/react/message",id:"auto-generated/previews/react/message",title:"message",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/message.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/message",permalink:"/version-dev/docs/auto-generated/previews/react/message",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/message.md",tags:[],version:"current",frontMatter:{}},c={},d=[],u={toc:d};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,s.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"/*\n * SPDX-FileCopyrightText: 2023 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { showMessage } from '@siemens/ix';\nimport { IxButton } from '@siemens/ix-react';\nimport React from 'react';\n\nexport default () => {\n  const triggerMessage = async () => {\n    (\n      await showMessage.success(\n        'Example title',\n        'message',\n        'Save',\n        'Cancel',\n        'payload:save',\n        'payload:cancel'\n      )\n    ).once(console.log);\n  };\n  return (\n    <IxButton onClick={() => triggerMessage()}>Show 'success' message</IxButton>\n  );\n};\n\n")))}m.isMDXComponent=!0}}]);