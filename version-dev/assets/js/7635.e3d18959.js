"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7635],{7635:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>c,metadata:()=>i,toc:()=>m});var r=n(7896),a=(n(2784),n(30876));const c={},s=void 0,i={unversionedId:"auto-generated/previews/react/theme-switcher",id:"auto-generated/previews/react/theme-switcher",title:"theme-switcher",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/theme-switcher.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/theme-switcher",permalink:"/version-dev/docs/auto-generated/previews/react/theme-switcher",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/theme-switcher.md",tags:[],version:"current",frontMatter:{}},o={},m=[],l={toc:m};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { themeSwitcher } from \'@siemens/ix\';\nimport { IxButton, IxSelect, IxSelectItem } from \'@siemens/ix-react\';\nimport React from \'react\';\nexport default () => {\n  return (\n    <>\n      <IxButton className="mb-2" onClick={() => themeSwitcher.toggleMode()}>\n        Toggle mode\n      </IxButton>\n      <IxSelect\n        onItemSelectionChange={({ detail: [theme] }) => {\n          themeSwitcher.setTheme(theme);\n        }}\n        placeholder="Select a theme"\n      >\n        <IxSelectItem\n          label="Classic light"\n          value="theme-classic-light"\n        ></IxSelectItem>\n        <IxSelectItem\n          label="Classic dark"\n          value="theme-classic-dark"\n        ></IxSelectItem>\n      </IxSelect>\n    </>\n  );\n};\n')))}d.isMDXComponent=!0}}]);