"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[95584],{95584:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>d,metadata:()=>m,toc:()=>u});var o=t(7896),r=(t(2784),t(30876));const d={},a=void 0,m={unversionedId:"auto-generated/previews/react/dropdown-submenu",id:"auto-generated/previews/react/dropdown-submenu",title:"dropdown-submenu",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/dropdown-submenu.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/dropdown-submenu",permalink:"/version-dev/docs/auto-generated/previews/react/dropdown-submenu",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/dropdown-submenu.md",tags:[],version:"current",frontMatter:{}},s={},u=[],i={toc:u};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import {\n  IxButton,\n  IxDropdown,\n  IxDropdownItem,\n  IxIcon,\n} from \'@siemens/ix-react\';\nimport React from \'react\';\n\nexport default () => {\n  return (\n    <>\n      <IxButton id="iconTriggerId">Open</IxButton>\n      <IxDropdown trigger="iconTriggerId">\n        <IxDropdownItem id="submenuTrigger" label="Submenu">\n          <IxIcon name="chevron-right-small" size="24"></IxIcon>\n        </IxDropdownItem>\n        <IxDropdownItem icon="star" label="Item 1"></IxDropdownItem>\n        <IxDropdownItem icon="document" label="Item 2"></IxDropdownItem>\n        <IxDropdownItem icon="bulb" label="Item 3"></IxDropdownItem>\n      </IxDropdown>\n      <IxDropdown trigger="submenuTrigger" placement="right-start">\n        <IxDropdownItem icon="star" label="Item 1"></IxDropdownItem>\n        <IxDropdownItem icon="document" label="Item 2"></IxDropdownItem>\n      </IxDropdown>\n    </>\n  );\n};\n')))}p.isMDXComponent=!0}}]);