"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[55708],{55708:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var n=a(7896),s=(a(2784),a(30876));const r={},o=void 0,c={unversionedId:"auto-generated/previews/react/tabs",id:"auto-generated/previews/react/tabs",title:"tabs",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/tabs.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/tabs",permalink:"/version-dev/docs/auto-generated/previews/react/tabs",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/tabs.md",tags:[],version:"current",frontMatter:{}},i={},d=[],b={toc:d};function l(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"import { IxTabItem, IxTabs } from '@siemens/ix-react';\nimport React, { useState } from 'react';\n\nexport default () => {\n  const [selectedTab, setSelectedTab] = useState(0);\n\n  const changeTab = (tabId: number) => setSelectedTab(tabId);\n\n  return (\n    <div\n      style={{\n        display: 'block',\n        position: 'relative',\n        width: '100%',\n      }}\n    >\n      <IxTabs selected={selectedTab}>\n        <IxTabItem onClick={() => changeTab(0)}>Tab 1</IxTabItem>\n        <IxTabItem onClick={() => changeTab(1)}>Tab 2</IxTabItem>\n        <IxTabItem onClick={() => changeTab(2)}>Tab 3</IxTabItem>\n      </IxTabs>\n      {selectedTab === 0 ? <div>Content 1</div> : null}\n      {selectedTab === 1 ? <div>Content 2</div> : null}\n      {selectedTab === 2 ? <div>Content 3</div> : null}\n    </div>\n  );\n};\n")))}l.isMDXComponent=!0}}]);